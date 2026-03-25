/**
 * Shared Wikimedia Commons API utilities for medical image seeding scripts.
 *
 * All source-specific seeders use these common functions for:
 * - Searching images on Wikimedia Commons
 * - Rate limiting API calls
 * - Database connection setup
 * - Progress checkpoint management
 * - VisualResource record creation
 */

import pg from "pg";
import * as fs from "fs";
import { PrismaClient } from "../../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

// ─── Constants ─────────────────────────────────────────────────────

export const WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php";
export const DEFAULT_RATE_LIMIT_MS = 800;
export const DEFAULT_THUMB_WIDTH = 800;

// ─── Types ─────────────────────────────────────────────────────────

export interface WikiImage {
  title: string;
  url: string;
  thumbUrl: string;
  width: number;
  height: number;
  description?: string;
}

export interface SeederProgress {
  completedTopics: string[];
  totalAdded: number;
  totalFailed: number;
  totalSkipped: number;
  errors: string[];
}

export interface TopicInfo {
  lessonId: string;
  topicCode: string;
  topicName: string;
  subjectCode: string;
}

// ─── Utilities ─────────────────────────────────────────────────────

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export function categoryForSubject(code: string): string {
  const map: Record<string, string> = {
    AN: "ANATOMY", PY: "PHYSIOLOGY", BI: "BIOCHEMISTRY",
    PA: "PATHOLOGY", PH: "PHARMACOLOGY", MI: "MICROBIOLOGY",
    FM: "FORENSIC", FO: "FORENSIC", CM: "COMMUNITY_MEDICINE",
    OP: "CLINICAL", EN: "CLINICAL", DR: "CLINICAL",
    OR: "CLINICAL", PS: "CLINICAL", RD: "CLINICAL",
    AS: "CLINICAL", IM: "CLINICAL", SU: "CLINICAL",
    OG: "CLINICAL", PE: "CLINICAL",
  };
  return map[code] || "CLINICAL";
}

export function cleanTitle(rawTitle: string): string {
  return rawTitle
    .replace(/^File:/, "")
    .replace(/ -- Smart-Servier\.\w+$/, "")
    .replace(/\.\w{2,4}$/, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 200);
}

export function buildTags(topicName: string, subjectCode: string, source: string): string[] {
  const topicTags = topicName
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 3);
  return [subjectCode.toLowerCase(), source, ...topicTags];
}

// ─── Database ──────────────────────────────────────────────────────

export function createDbConnection(): { pool: pg.Pool; prisma: PrismaClient } {
  const connectionString =
    process.env.DIRECT_DATABASE_URL ||
    process.env.DATABASE_URL ||
    "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);
  return { pool, prisma };
}

/**
 * Fetch all Layer 7 lessons with topic info, optionally filtered by subject.
 */
export async function fetchLayer7Lessons(
  prisma: PrismaClient,
  subjectFilter?: string | null,
): Promise<TopicInfo[]> {
  const lessons = await (prisma as any).lesson.findMany({
    where: { layer: 7 },
    include: {
      topic: {
        select: {
          code: true,
          name: true,
          module: { select: { subject: { select: { code: true } } } },
        },
      },
    },
    orderBy: { topic: { code: "asc" } },
  });

  return lessons
    .filter((l: any) => {
      if (!l.topic) return false;
      if (subjectFilter && l.topic.module.subject.code !== subjectFilter) return false;
      return true;
    })
    .map((l: any) => ({
      lessonId: l.id,
      topicCode: l.topic.code,
      topicName: l.topic.name,
      subjectCode: l.topic.module.subject.code,
    }));
}

/**
 * Get set of lesson IDs that already have at least one real visual (image or diagram).
 */
export async function getLessonsWithVisuals(prisma: PrismaClient): Promise<Set<string>> {
  const existing = await (prisma as any).visualResource.findMany({
    where: {
      OR: [
        { imageUrl: { not: null } },
        { componentName: { not: null } },
      ],
    },
    select: { lessonId: true },
    distinct: ["lessonId"],
  });
  return new Set(existing.map((e: any) => e.lessonId));
}

// ─── Wikimedia API ─────────────────────────────────────────────────

/**
 * Search Wikimedia Commons for images matching a query.
 * Optionally filter by keyword in the title (e.g., "Smart-Servier", "Gray's").
 */
export async function searchWikimediaImages(
  query: string,
  options: {
    limit?: number;
    titleFilter?: string;
    minWidth?: number;
    thumbWidth?: number;
  } = {},
): Promise<WikiImage[]> {
  const {
    limit = 10,
    titleFilter,
    minWidth = 150,
    thumbWidth = DEFAULT_THUMB_WIDTH,
  } = options;

  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      generator: "search",
      gsrsearch: query,
      gsrnamespace: "6", // File namespace
      gsrlimit: String(limit),
      prop: "imageinfo",
      iiprop: "url|size|extmetadata",
      iiurlwidth: String(thumbWidth),
      origin: "*",
    });

    const response = await fetch(`${WIKIMEDIA_API}?${params}`);
    const data = await response.json();
    if (!data.query?.pages) return [];

    return Object.values(data.query.pages)
      .filter((page: any) => {
        const info = page.imageinfo?.[0];
        if (!info?.url) return false;
        if (info.width < minWidth) return false;
        if (titleFilter) {
          const title = (page.title || "").toLowerCase();
          if (!title.includes(titleFilter.toLowerCase())) return false;
        }
        // Skip non-image files
        const url = info.url.toLowerCase();
        if (url.endsWith(".pdf") || url.endsWith(".djvu") || url.endsWith(".ogg")) return false;
        return true;
      })
      .map((page: any) => {
        const info = page.imageinfo[0];
        const meta = info.extmetadata || {};
        return {
          title: (page.title || "").replace("File:", ""),
          url: info.url,
          thumbUrl: info.thumburl || info.url,
          width: info.width,
          height: info.height,
          description: meta.ImageDescription?.value?.replace(/<[^>]*>/g, "")?.substring(0, 300) || "",
        };
      });
  } catch {
    return [];
  }
}

/**
 * Search images from a specific Wikimedia Commons category.
 */
export async function searchWikimediaCategory(
  category: string,
  options: {
    limit?: number;
    minWidth?: number;
    thumbWidth?: number;
  } = {},
): Promise<WikiImage[]> {
  const { limit = 50, minWidth = 150, thumbWidth = DEFAULT_THUMB_WIDTH } = options;

  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      generator: "categorymembers",
      gcmtitle: category.startsWith("Category:") ? category : `Category:${category}`,
      gcmtype: "file",
      gcmlimit: String(limit),
      prop: "imageinfo",
      iiprop: "url|size",
      iiurlwidth: String(thumbWidth),
      origin: "*",
    });

    const response = await fetch(`${WIKIMEDIA_API}?${params}`);
    const data = await response.json();
    if (!data.query?.pages) return [];

    return Object.values(data.query.pages)
      .filter((page: any) => {
        const info = page.imageinfo?.[0];
        if (!info?.url) return false;
        if (info.width < minWidth) return false;
        const url = info.url.toLowerCase();
        if (url.endsWith(".pdf") || url.endsWith(".djvu") || url.endsWith(".ogg")) return false;
        return true;
      })
      .map((page: any) => {
        const info = page.imageinfo[0];
        return {
          title: (page.title || "").replace("File:", ""),
          url: info.url,
          thumbUrl: info.thumburl || info.url,
          width: info.width,
          height: info.height,
        };
      });
  } catch {
    return [];
  }
}

// ─── Progress Management ───────────────────────────────────────────

export function loadProgress(progressFile: string): SeederProgress {
  if (fs.existsSync(progressFile)) {
    return JSON.parse(fs.readFileSync(progressFile, "utf-8"));
  }
  return {
    completedTopics: [],
    totalAdded: 0,
    totalFailed: 0,
    totalSkipped: 0,
    errors: [],
  };
}

export function saveProgress(progressFile: string, progress: SeederProgress): void {
  fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
}

// ─── VisualResource Insertion ──────────────────────────────────────

export async function insertVisualResource(
  prisma: PrismaClient,
  data: {
    lessonId: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    attribution: string;
    license: string;
    category: string;
    tags: string[];
    sortOrder: number;
  },
): Promise<boolean> {
  try {
    // Check for duplicates
    const existing = await (prisma as any).visualResource.findFirst({
      where: { lessonId: data.lessonId, imageUrl: data.imageUrl },
    });
    if (existing) return false;

    await (prisma as any).visualResource.create({
      data: {
        ...data,
        type: "IMAGE",
        title: data.title.substring(0, 200),
        description: data.description.substring(0, 500),
        imageAlt: data.imageAlt.substring(0, 200),
      },
    });
    return true;
  } catch {
    return false;
  }
}

// ─── CLI Argument Parsing ──────────────────────────────────────────

export function parseArgs(argv: string[]): {
  dryRun: boolean;
  resume: boolean;
  subjectFilter: string | null;
  batchSize: number;
} {
  return {
    dryRun: argv.includes("--dry-run"),
    resume: argv.includes("--resume"),
    subjectFilter: argv.includes("--subject")
      ? argv[argv.indexOf("--subject") + 1]
      : null,
    batchSize: argv.includes("--batch-size")
      ? parseInt(argv[argv.indexOf("--batch-size") + 1])
      : 999,
  };
}

// ─── Coverage Stats ────────────────────────────────────────────────

export async function printCoverageStats(prisma: PrismaClient): Promise<void> {
  const totalVis = await (prisma as any).visualResource.count();
  const withImages = await (prisma as any).visualResource.count({
    where: { imageUrl: { not: null } },
  });
  const withDiagrams = await (prisma as any).visualResource.count({
    where: { componentName: { not: null } },
  });
  const servierCount = await (prisma as any).visualResource.count({
    where: { attribution: { contains: "Servier" } },
  });
  const withVis = await (prisma as any).lesson.count({
    where: { layer: 7, visuals: { some: {} } },
  });
  const totalL7 = await (prisma as any).lesson.count({ where: { layer: 7 } });

  console.log("\n=== Coverage Stats ===");
  console.log(`Total Layer 7 lessons: ${totalL7}`);
  console.log(`Lessons with visuals: ${withVis} (${Math.round((withVis / totalL7) * 100)}%)`);
  console.log(`Total visual resources: ${totalVis}`);
  console.log(`  Images: ${withImages}`);
  console.log(`  Diagrams: ${withDiagrams}`);
  console.log(`  Servier: ${servierCount}`);
}
