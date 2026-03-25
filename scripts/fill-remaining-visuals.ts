#!/usr/bin/env tsx
/**
 * Fill remaining topics (with Layer 7 lessons but NO visuals) using
 * multi-source image search.
 *
 * Sources tried in priority order:
 * 1. Manual curated map (highest quality, hand-picked)
 * 2. Wikimedia Commons (broader search with multiple query variations)
 * 3. Wikimedia CDC PHIL search (public domain US gov images)
 * 4. Servier Medical Art pre-built map (CC-BY 4.0 vector illustrations)
 *
 * Usage:
 *   npx tsx scripts/fill-remaining-visuals.ts                  # Full run
 *   npx tsx scripts/fill-remaining-visuals.ts --dry-run         # Preview only
 *   npx tsx scripts/fill-remaining-visuals.ts --source wikimedia # Only Wikimedia
 */

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import pg from "pg";
import { servierPrebuiltMap } from "../prisma/seeds/servier-prebuilt-map.js";

// ─── Configuration ──────────────────────────────────────────────────

const WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php";
const RATE_LIMIT_MS = 1500;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Manual curated map for topics where automated search fails ─────
// Add specific topic codes here after the first --dry-run identifies
// which topics remain empty. Hand-pick URLs from Wikimedia Commons.

const MANUAL_MAP: Record<
  string,
  Array<{ url: string; title: string; alt: string; attribution: string; license: string }>
> = {
  // === Forensic Medicine ===
  "FM-MOD-01-TOP-01": [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Forensic_medicine_tools.jpg?width=800",
      title: "Forensic Medicine — Medicolegal Framework",
      alt: "Overview of forensic medicine and medicolegal procedures",
      attribution: "Wikimedia Commons, CC-BY-SA",
      license: "CC_BY_SA",
    },
  ],

  // === Community Medicine ===
  "CM-MOD-01-TOP-01": [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Epidemiological_triad.svg?width=800",
      title: "Epidemiological Triad",
      alt: "Agent-host-environment model of disease causation",
      attribution: "Wikimedia Commons, CC-BY-SA",
      license: "CC_BY_SA",
    },
  ],

  // === Psychiatry ===
  "PS-MOD-01-TOP-01": [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Synapse_diag1.svg?width=800",
      title: "Synaptic Transmission",
      alt: "Neurotransmitter release at synaptic cleft — basis of psychopharmacology",
      attribution: "Wikimedia Commons, CC-BY-SA",
      license: "CC_BY_SA",
    },
  ],

  // === Radiology ===
  "RD-MOD-01-TOP-01": [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/X-ray_tube_en.svg?width=800",
      title: "X-ray Tube Diagram",
      alt: "Components of an X-ray tube showing cathode, anode, and beam generation",
      attribution: "Wikimedia Commons, CC-BY-SA",
      license: "CC_BY_SA",
    },
  ],

  // === Anesthesiology ===
  "AS-MOD-01-TOP-01": [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airway_management_-_mask_ventilation.jpg?width=800",
      title: "Airway Management",
      alt: "Bag-mask ventilation technique for airway management",
      attribution: "Wikimedia Commons, CC-BY-SA",
      license: "CC_BY_SA",
    },
  ],
};

// ─── Subject-specific search terms for broader Wikimedia queries ─────

const SUBJECT_TERMS: Record<string, string[]> = {
  AN: ["anatomy", "anatomical", "Gray's anatomy"],
  PY: ["physiology", "physiological"],
  BI: ["biochemistry", "metabolic pathway"],
  PA: ["pathology", "histopathology"],
  PH: ["pharmacology", "drug mechanism"],
  MI: ["microbiology", "bacteria", "virus"],
  FO: ["forensic medicine", "medicolegal"],
  FM: ["forensic medicine", "medicolegal"],
  CM: ["community medicine", "epidemiology", "public health"],
  IM: ["internal medicine", "clinical"],
  SU: ["surgery", "surgical"],
  OG: ["obstetrics gynecology", "pregnancy"],
  PE: ["pediatrics", "child health"],
  OP: ["ophthalmology", "eye"],
  EN: ["ENT", "otolaryngology"],
  OR: ["orthopedics", "fracture", "bone"],
  DR: ["dermatology", "skin"],
  PS: ["psychiatry", "mental health", "neurotransmitter"],
  RD: ["radiology", "imaging", "X-ray"],
  AS: ["anesthesiology", "airway", "anesthesia"],
};

// ─── Wikimedia Commons search ───────────────────────────────────────

function normalizeLicense(license: string): string | null {
  const l = license.toLowerCase();
  if (l.includes("public domain") || l.includes("pd") || l === "cc0") return "PUBLIC_DOMAIN";
  if (l.includes("cc-by-sa") || l.includes("cc by-sa")) return "CC_BY_SA";
  if (l.includes("cc-by-nc") || l.includes("cc by-nc")) return "CC_BY_NC";
  if (l.includes("cc-by") || l.includes("cc by")) return "CC_BY";
  return null;
}

interface ImageResult {
  url: string;
  title: string;
  alt: string;
  attribution: string;
  license: string;
}

async function searchWikimedia(topicName: string, subjectCode: string): Promise<ImageResult[]> {
  const terms = SUBJECT_TERMS[subjectCode] || [];

  // Build multiple query variations — broader than original seeder
  const queries = [
    `${topicName} medical diagram`,
    `${topicName} ${terms[0] || ""} illustration`.trim(),
    `${topicName} anatomy`,
    // Extract first meaningful phrase before any delimiter
    `${topicName.split(/[&:,()]/)[0].trim()} medical`,
    // Subject-level search as last resort
    `${terms[0] || subjectCode} ${topicName.split(" ").slice(0, 2).join(" ")}`,
  ];

  for (const query of queries) {
    try {
      const params = new URLSearchParams({
        action: "query",
        format: "json",
        generator: "search",
        gsrsearch: query,
        gsrnamespace: "6",
        gsrlimit: "10",
        prop: "imageinfo",
        iiprop: "url|extmetadata|size|mime",
        iiurlwidth: "800",
        origin: "*",
      });

      const response = await fetch(`${WIKIMEDIA_API}?${params}`);
      const data = await response.json();
      if (!data.query?.pages) continue;

      const results: ImageResult[] = [];

      for (const page of Object.values(data.query.pages) as any[]) {
        if (!page.imageinfo?.[0]) continue;
        const info = page.imageinfo[0];
        const meta = info.extmetadata || {};
        const mime = info.mime || "";
        const width = info.width || 0;

        // Filter: real images, min 400px, no GIFs
        if (!mime.startsWith("image/") || mime.includes("gif") || width < 400) continue;

        const rawLicense = meta.LicenseShortName?.value || "";
        const license = normalizeLicense(rawLicense);
        if (!license) continue; // Only open-licensed images

        const cleanTitle = (meta.ObjectName?.value || page.title || "")
          .replace("File:", "")
          .replace(/\.\w+$/, "")
          .replace(/_/g, " ")
          .substring(0, 200);

        const description = (meta.ImageDescription?.value || "")
          .replace(/<[^>]*>/g, "")
          .trim()
          .substring(0, 300);

        const artist = (meta.Artist?.value || "Unknown")
          .replace(/<[^>]*>/g, "")
          .trim()
          .substring(0, 150);

        results.push({
          url: info.thumburl || info.url,
          title: cleanTitle || topicName,
          alt: description || `Medical illustration: ${topicName}`,
          attribution: `${artist}, Wikimedia Commons, ${rawLicense}`,
          license,
        });
      }

      if (results.length >= 1) return results.slice(0, 3);

      await sleep(800); // Brief pause between query retries
    } catch {
      // Skip failed queries silently
    }
  }

  return [];
}

// ─── CDC PHIL via Wikimedia ─────────────────────────────────────────

async function searchCDCPhil(topicName: string): Promise<ImageResult[]> {
  try {
    const query = topicName.replace(/[&]/g, "and").replace(/[^a-zA-Z0-9\s]/g, "");
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      generator: "search",
      gsrsearch: `${query} CDC public health image`,
      gsrnamespace: "6",
      gsrlimit: "5",
      prop: "imageinfo",
      iiprop: "url|extmetadata|size|mime",
      iiurlwidth: "800",
      origin: "*",
    });

    const response = await fetch(`${WIKIMEDIA_API}?${params}`);
    const data = await response.json();
    if (!data.query?.pages) return [];

    const results: ImageResult[] = [];
    for (const page of Object.values(data.query.pages) as any[]) {
      if (!page.imageinfo?.[0]) continue;
      const info = page.imageinfo[0];
      const width = info.width || 0;
      if (width < 400) continue;

      const meta = info.extmetadata || {};
      const rawLicense = meta.LicenseShortName?.value || "";
      const license = normalizeLicense(rawLicense);
      if (!license) continue;

      results.push({
        url: info.thumburl || info.url,
        title: (page.title || "").replace("File:", "").replace(/\.\w+$/, "").replace(/_/g, " "),
        alt: `CDC PHIL image: ${query}`,
        attribution: "CDC / Public Health Image Library, Public Domain",
        license: "PUBLIC_DOMAIN",
      });
    }

    return results.slice(0, 2);
  } catch {
    return [];
  }
}

// ─── Servier fallback (from pre-built map) ──────────────────────────

function findServierImages(topicCode: string): ImageResult[] {
  const entry = (servierPrebuiltMap as Record<string, any[]>)[topicCode];
  if (!entry || entry.length === 0) return [];
  return entry.map((img) => ({
    url: img.imageUrl,
    title: img.title,
    alt: img.description || `Servier Medical Art: ${img.title}`,
    attribution: img.attribution,
    license: img.license || "CC_BY",
  }));
}

// ─── Category helper ────────────────────────────────────────────────

function categoryForSubject(code: string): string {
  const map: Record<string, string> = {
    AN: "ANATOMY", PY: "PHYSIOLOGY", BI: "BIOCHEMISTRY",
    PA: "PATHOLOGY", PH: "PHARMACOLOGY", MI: "MICROBIOLOGY",
    FM: "FORENSIC", FO: "FORENSIC", CM: "COMMUNITY_MEDICINE",
  };
  return map[code] || "CLINICAL";
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const sourceFilter = args.includes("--source")
    ? args[args.indexOf("--source") + 1]
    : null;

  console.log("=== Fill Remaining Topics with Real Medical Images ===\n");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  if (sourceFilter) console.log(`Source filter: ${sourceFilter}`);
  console.log();

  // Connect to database
  const connectionString =
    process.env.DIRECT_DATABASE_URL ||
    process.env.DATABASE_URL ||
    "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);

  try {
    // Find topics with Layer 7 lessons but NO visuals
    const emptyLessons = await (prisma as any).lesson.findMany({
      where: { layer: 7, visuals: { none: {} } },
      include: {
        topic: { include: { module: { include: { subject: true } } } },
      },
      orderBy: { topic: { code: "asc" } },
    });

    console.log(`Found ${emptyLessons.length} topics without visuals\n`);

    if (emptyLessons.length === 0) {
      console.log("All topics already have visuals! Nothing to do.");
      return;
    }

    // List them
    console.log("Empty topics:");
    for (const lesson of emptyLessons) {
      const t = lesson.topic;
      console.log(`  ${t.code} | ${t.module.subject.code} | ${t.name}`);
    }
    console.log();

    let totalImages = 0;
    let filled = 0;
    let stillEmpty = 0;
    const emptyAfter: string[] = [];

    for (let i = 0; i < emptyLessons.length; i++) {
      const lesson = emptyLessons[i];
      const topic = lesson.topic;
      const subject = topic.module.subject;
      const subjectCode = subject.code;

      console.log(
        `[${i + 1}/${emptyLessons.length}] ${topic.code}: ${topic.name} (${subjectCode})`,
      );

      let images: ImageResult[] = [];
      let source = "";

      // ── Source 1: Manual curated map ──────────────────────
      if (!sourceFilter || sourceFilter === "manual") {
        if (MANUAL_MAP[topic.code]) {
          images = MANUAL_MAP[topic.code];
          source = "manual";
        }
      }

      // ── Source 2: Servier pre-built map ───────────────────
      if (images.length === 0 && (!sourceFilter || sourceFilter === "servier")) {
        images = findServierImages(topic.code);
        if (images.length > 0) source = "servier";
      }

      // ── Source 3: Wikimedia Commons (broad search) ────────
      if (images.length === 0 && (!sourceFilter || sourceFilter === "wikimedia")) {
        images = await searchWikimedia(topic.name, subjectCode);
        if (images.length > 0) source = "wikimedia";
        await sleep(RATE_LIMIT_MS);
      }

      // ── Source 4: CDC PHIL via Wikimedia ───────────────────
      if (images.length === 0 && (!sourceFilter || sourceFilter === "cdc")) {
        images = await searchCDCPhil(topic.name);
        if (images.length > 0) source = "cdc-phil";
        await sleep(RATE_LIMIT_MS);
      }

      if (images.length === 0) {
        console.log("  ⚠  No images found from any source");
        stillEmpty++;
        emptyAfter.push(`${topic.code}: ${topic.name}`);
        continue;
      }

      if (dryRun) {
        console.log(`  🔍 Would add ${images.length} images from ${source}:`);
        for (const img of images) {
          console.log(`     → ${img.title}`);
        }
        filled++;
        totalImages += images.length;
        continue;
      }

      // Save to database
      const category = categoryForSubject(subjectCode);
      let created = 0;
      for (let j = 0; j < images.length; j++) {
        const img = images[j];
        try {
          // Check for duplicates
          const existing = await (prisma as any).visualResource.findFirst({
            where: { lessonId: lesson.id, imageUrl: img.url },
          });
          if (existing) continue;

          await (prisma as any).visualResource.create({
            data: {
              lessonId: lesson.id,
              type: "IMAGE",
              title: img.title.substring(0, 200),
              description: img.alt.substring(0, 500) || `Medical illustration: ${topic.name}`,
              imageUrl: img.url,
              imageAlt: img.alt.substring(0, 500) || img.title,
              attribution: img.attribution,
              license: img.license,
              category,
              tags: [
                subjectCode.toLowerCase(),
                source,
                ...topic.name
                  .toLowerCase()
                  .split(/\s+/)
                  .filter((w: string) => w.length > 3)
                  .slice(0, 3),
              ],
              sortOrder: j,
            },
          });
          created++;
        } catch (err: any) {
          console.log(`  ❌ Error: ${err.message?.substring(0, 100)}`);
        }
      }

      if (created > 0) {
        console.log(`  ✅ Added ${created} images from ${source}`);
        filled++;
        totalImages += created;
      } else {
        stillEmpty++;
        emptyAfter.push(`${topic.code}: ${topic.name}`);
      }
    }

    // ─── Summary ──────────────────────────────────────────────
    console.log("\n=== Summary ===");
    console.log(`Processed: ${emptyLessons.length}`);
    console.log(`Filled: ${filled}`);
    console.log(`Still empty: ${stillEmpty}`);
    console.log(`Images added: ${totalImages}`);

    if (emptyAfter.length > 0) {
      console.log("\n⚠ Topics still without visuals (add to MANUAL_MAP):");
      for (const t of emptyAfter) {
        console.log(`  ${t}`);
      }
    }

    // Final coverage check
    if (!dryRun) {
      const withVis = await (prisma as any).lesson.count({
        where: { layer: 7, visuals: { some: {} } },
      });
      const total = await (prisma as any).lesson.count({ where: { layer: 7 } });
      console.log(
        `\nCoverage: ${withVis}/${total} (${Math.round((withVis / total) * 100)}%)`,
      );
      if (withVis === total) {
        console.log("🎉 100% coverage! All topics have real visuals.");
      }
    }
  } catch (err) {
    console.error("Fatal error:", err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
