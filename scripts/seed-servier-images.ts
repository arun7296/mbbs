#!/usr/bin/env tsx
/**
 * Seed Servier Medical Art images into Layer 7 VisualResource records.
 *
 * Reads the topic mapping (from map-servier-to-topics.ts) and creates
 * VisualResource records for topics that need visuals.
 *
 * Priority logic:
 * 1. Skip topics that already have interactive diagrams (componentName != null)
 * 2. Skip topics that already have real images (imageUrl != null)
 * 3. Replace topics that ONLY have SVG concept map fallbacks
 * 4. Add Servier images to topics with no visuals at all
 *
 * Usage:
 *   npx tsx scripts/seed-servier-images.ts                     # Full run
 *   npx tsx scripts/seed-servier-images.ts --dry-run            # Preview only
 *   npx tsx scripts/seed-servier-images.ts --subject AN         # Anatomy only
 *   npx tsx scripts/seed-servier-images.ts --replace-fallbacks  # Replace SVG concept maps
 *   npx tsx scripts/seed-servier-images.ts --batch-size 100     # Process 100 topics
 *   npx tsx scripts/seed-servier-images.ts --resume             # Resume from checkpoint
 *   npx tsx scripts/seed-servier-images.ts --use-prebuilt       # Use pre-built map instead of catalogue
 */

import * as fs from "fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import pg from "pg";
import { servierPrebuiltMap } from "../prisma/seeds/servier-prebuilt-map.js";

const PROGRESS_FILE = "/tmp/servier-seed-progress.json";

interface Progress {
  completedTopics: string[];
  totalCreated: number;
  totalReplaced: number;
  totalSkipped: number;
  errors: string[];
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const resume = args.includes("--resume");
  const replaceFallbacks = args.includes("--replace-fallbacks");
  const subjectFilter = args.includes("--subject") ? args[args.indexOf("--subject") + 1] : null;
  const batchSize = args.includes("--batch-size") ? parseInt(args[args.indexOf("--batch-size") + 1]) : 0;
  const usePrebuilt = args.includes("--use-prebuilt");

  console.log("=== Servier Medical Art Seeder ===\n");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Replace SVG fallbacks: ${replaceFallbacks}`);
  console.log(`Source: ${usePrebuilt ? "pre-built map" : "catalogue JSON"}`);
  if (subjectFilter) console.log(`Subject filter: ${subjectFilter}`);
  if (batchSize) console.log(`Batch size: ${batchSize}`);
  console.log();

  // Load topic map — either from pre-built TypeScript map or JSON catalogue
  let topicMap: Record<string, Array<{
    imageUrl: string;
    thumbUrl?: string;
    title: string;
    description: string;
    attribution: string;
    license: string;
    score?: number;
  }>>;

  if (usePrebuilt) {
    topicMap = servierPrebuiltMap as any;
    console.log(`Loaded ${Object.keys(topicMap).length} pre-built topic mappings\n`);
  } else {
    const mapPath = "prisma/seeds/servier-topic-map.json";
    if (!fs.existsSync(mapPath)) {
      console.error("ERROR: Topic map not found.");
      console.error("Either run map-servier-to-topics.ts first, or use --use-prebuilt flag.");
      console.error(`Expected: ${mapPath}`);
      process.exit(1);
    }
    topicMap = JSON.parse(fs.readFileSync(mapPath, "utf-8"));
    console.log(`Loaded ${Object.keys(topicMap).length} topic mappings from JSON\n`);
  }

  // Load progress
  let progress: Progress = {
    completedTopics: [],
    totalCreated: 0,
    totalReplaced: 0,
    totalSkipped: 0,
    errors: [],
  };

  if (resume && fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"));
    console.log(`Resuming: ${progress.completedTopics.length} topics already done\n`);
  }

  // Connect to database
  const connectionString = process.env.DATABASE_URL || "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);

  try {
    // Fetch topics with Layer 7 lessons and existing visuals
    const topics = await prisma.topic.findMany({
      include: {
        module: { include: { subject: true } },
        lessons: {
          where: { layer: 7 },
          include: {
            visuals: {
              orderBy: { sortOrder: "asc" as const },
            },
          },
        },
      },
      orderBy: [
        { module: { subject: { sortOrder: "asc" } } },
        { module: { sortOrder: "asc" } },
        { sortOrder: "asc" },
      ],
    });

    // Filter
    let filteredTopics = topics.filter((t: any) => {
      if (subjectFilter && t.module.subject.code !== subjectFilter) return false;
      if (resume && progress.completedTopics.includes(t.code)) return false;
      return true;
    });

    // Only process topics that have Servier images in the map
    filteredTopics = filteredTopics.filter((t: any) => topicMap[t.code]);

    console.log(`Topics to process: ${filteredTopics.length}`);
    console.log();

    let processed = 0;

    for (const topic of filteredTopics) {
      if (batchSize && processed >= batchSize) {
        console.log(`\nBatch limit (${batchSize}) reached. Run with --resume to continue.`);
        break;
      }

      const subjectCode = (topic as any).module.subject.code;
      const topicName = topic.name;
      const layer7Lesson = (topic as any).lessons[0];
      const servierImages = topicMap[topic.code];

      processed++;
      console.log(`[${processed}/${filteredTopics.length}] ${topic.code}: ${topicName}`);

      if (!layer7Lesson) {
        console.log("  ⏭ No Layer 7 lesson — skipping");
        progress.totalSkipped++;
        progress.completedTopics.push(topic.code);
        continue;
      }

      if (!servierImages || servierImages.length === 0) {
        console.log("  ⏭ No Servier images mapped — skipping");
        progress.totalSkipped++;
        progress.completedTopics.push(topic.code);
        continue;
      }

      const existingVisuals = layer7Lesson.visuals || [];
      const hasRealImages = existingVisuals.some(
        (v: any) => v.imageUrl && !v.svgContent,
      );
      const hasDiagrams = existingVisuals.some(
        (v: any) => v.componentName,
      );
      const hasOnlyFallbacks = existingVisuals.length > 0 &&
        existingVisuals.every((v: any) => v.svgContent && !v.imageUrl && !v.componentName);

      // Skip if already has real content (unless only fallbacks and --replace-fallbacks)
      if (hasRealImages || hasDiagrams) {
        console.log(`  ⏭ Already has ${hasDiagrams ? "diagrams" : "real images"} — skipping`);
        progress.totalSkipped++;
        progress.completedTopics.push(topic.code);
        continue;
      }

      if (hasOnlyFallbacks && !replaceFallbacks) {
        console.log("  ⏭ Has SVG fallbacks (use --replace-fallbacks to overwrite)");
        progress.totalSkipped++;
        progress.completedTopics.push(topic.code);
        continue;
      }

      if (dryRun) {
        console.log(`  Would add ${servierImages.length} Servier images`);
        for (const img of servierImages) {
          console.log(`    → ${img.title} (score: ${img.score})`);
        }
        progress.completedTopics.push(topic.code);
        continue;
      }

      // If replacing fallbacks, delete old SVG concept maps first
      if (hasOnlyFallbacks && replaceFallbacks) {
        const deleted = await (prisma as any).visualResource.deleteMany({
          where: {
            lessonId: layer7Lesson.id,
            svgContent: { not: null },
            imageUrl: null,
            componentName: null,
          },
        });
        console.log(`  🗑 Deleted ${deleted.count} SVG fallbacks`);
        progress.totalReplaced += deleted.count;
      }

      // Insert Servier images
      let added = 0;
      const category = categoryForSubject(subjectCode);

      for (let i = 0; i < servierImages.length; i++) {
        const img = servierImages[i];

        try {
          // Check for duplicates
          const existing = await (prisma as any).visualResource.findFirst({
            where: { lessonId: layer7Lesson.id, imageUrl: img.imageUrl },
          });
          if (existing) continue;

          await (prisma as any).visualResource.create({
            data: {
              lessonId: layer7Lesson.id,
              type: "IMAGE",
              title: img.title.substring(0, 200),
              description: img.description.substring(0, 500) || `Medical illustration: ${img.title}`,
              imageUrl: img.imageUrl,
              imageAlt: img.description.substring(0, 500) || img.title,
              attribution: img.attribution,
              license: img.license,
              category,
              tags: [subjectCode.toLowerCase(), "servier", ...topicName.toLowerCase().split(" ").slice(0, 3)],
              sortOrder: 20 + i,
            },
          });
          added++;
          progress.totalCreated++;
        } catch (err) {
          console.error(`  ❌ Error adding image: ${err}`);
          progress.errors.push(`${topic.code}: ${err}`);
        }
      }

      if (added > 0) {
        console.log(`  ✅ Added ${added} Servier images`);
      }

      progress.completedTopics.push(topic.code);

      // Checkpoint every 20 topics
      if (processed % 20 === 0) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
        console.log(`  [checkpoint: ${progress.completedTopics.length} topics done]`);
      }
    }

    // Final save
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

    // Summary
    console.log("\n=== Summary ===");
    console.log(`Topics processed: ${processed}`);
    console.log(`Images created: ${progress.totalCreated}`);
    console.log(`Fallbacks replaced: ${progress.totalReplaced}`);
    console.log(`Topics skipped: ${progress.totalSkipped}`);
    console.log(`Errors: ${progress.errors.length}`);

    // Coverage check
    if (!dryRun) {
      const totalLayer7 = await (prisma as any).lesson.count({
        where: { layer: 7, status: "PUBLISHED" },
      });
      const withVisuals = await (prisma as any).lesson.count({
        where: {
          layer: 7,
          status: "PUBLISHED",
          visuals: { some: {} },
        },
      });
      const withRealVisuals = await (prisma as any).lesson.count({
        where: {
          layer: 7,
          status: "PUBLISHED",
          visuals: {
            some: {
              OR: [
                { imageUrl: { not: null } },
                { componentName: { not: null } },
              ],
            },
          },
        },
      });

      console.log(`\nCoverage:`);
      console.log(`  Layer 7 lessons: ${totalLayer7}`);
      console.log(`  With any visuals: ${withVisuals} (${Math.round(withVisuals / totalLayer7 * 100)}%)`);
      console.log(`  With real visuals: ${withRealVisuals} (${Math.round(withRealVisuals / totalLayer7 * 100)}%)`);
    }

  } catch (err) {
    console.error("Fatal error:", err);
    progress.errors.push(String(err));
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

function categoryForSubject(code: string): string {
  const map: Record<string, string> = {
    AN: "ANATOMY", PY: "PHYSIOLOGY", BI: "BIOCHEMISTRY",
    PA: "PATHOLOGY", PH: "PHARMACOLOGY", MI: "MICROBIOLOGY",
    FO: "FORENSIC", CM: "COMMUNITY_MEDICINE",
  };
  return map[code] || "CLINICAL";
}

main();
