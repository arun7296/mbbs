#!/usr/bin/env tsx
/**
 * Replace low-quality Wikimedia images with Servier Medical Art illustrations.
 *
 * Logic:
 * 1. Find all VisualResource records where attribution contains "Wikimedia"
 *    but NOT "Servier"
 * 2. For each, check if the topic has a Servier mapping in servier-prebuilt-map.ts
 * 3. If yes: delete the Wikimedia image, add Servier image (if not already present)
 * 4. If no Servier mapping: check if the image is junk and delete junk. Keep good images.
 *
 * Flags:
 *   --dry-run       Show what would change without modifying DB
 *   --delete-junk   Also delete images flagged as junk
 *   --keep-good     Keep Wikimedia images that are genuinely useful medical content
 */

import pg from "pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { servierPrebuiltMap } from "../prisma/seeds/servier-prebuilt-map.js";

const dryRun = process.argv.includes("--dry-run");
const deleteJunk = process.argv.includes("--delete-junk");
const keepGood = process.argv.includes("--keep-good");

// ─── Junk detection ─────────────────────────────────────────────────

function isJunkImage(title: string, imageUrl: string | null): boolean {
  if (!title) return true;
  const t = title.toLowerCase();

  // HTML garbage in title
  if (t.includes("<div") || t.includes("fn>") || t.includes("</") || t.includes("<span")) return true;

  // Government documents / hearings
  if (t.includes("gov.gpo") || t.includes("chrg-") || t.includes("fdsys")) return true;
  if (t.includes("hearing") && t.includes("appropriations")) return true;
  if (t.includes("ia ") && t.includes("gov")) return true;

  // Random numeric IDs instead of real titles
  if (/^\d{5,}$/.test(title.trim())) return true;

  // Non-medical content
  const nonMedical = [
    "cruiser", "cemetery", "angola", "military", "battleship", "aircraft",
    "locomotive", "football", "soccer", "baseball", "railway", "station",
  ];
  if (nonMedical.some((kw) => t.includes(kw))) return true;

  // Very short meaningless titles
  if (title.trim().length < 5) return true;

  // Non-image URLs (PDFs, docs, etc.)
  if (imageUrl && (/\.pdf$/i.test(imageUrl) || /\.docx?$/i.test(imageUrl))) return true;

  return false;
}

// ─── Good medical image detection ───────────────────────────────────

function isGoodMedicalImage(title: string, topicName: string): boolean {
  const t = title.toLowerCase();

  // Known high-quality medical illustration sources
  const qualitySources = [
    "blausen", "gray's", "netter", "grant's", "sobotta", "atlas",
    "histology", "microscopy", "micrograph",
  ];
  if (qualitySources.some((src) => t.includes(src))) return true;

  // Contains strong medical keywords
  const medicalKeywords = [
    "anatomy", "diagram", "histology", "pathology", "cell", "nerve",
    "artery", "vein", "muscle", "bone", "organ", "tissue", "blood",
    "heart", "lung", "brain", "kidney", "liver", "skin", "eye", "ear",
    "microscopy", "x-ray", "ct scan", "mri", "ecg", "ekg", "section",
    "surgical", "cross section", "illustration", "medical",
  ];
  if (medicalKeywords.some((kw) => t.includes(kw))) return true;

  // Title words overlap significantly with topic name
  const topicWords = topicName
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3);
  const titleWords = t.split(/[\s_-]+/);
  const overlap = topicWords.filter((tw) =>
    titleWords.some((tl) => tl.includes(tw) || tw.includes(tl)),
  );
  if (overlap.length >= 2) return true;

  return false;
}

// ─── Category helper ────────────────────────────────────────────────

function categoryForCode(topicCode: string): string {
  const prefix = topicCode.split("-")[0];
  const map: Record<string, string> = {
    AN: "ANATOMY", PY: "PHYSIOLOGY", BI: "BIOCHEMISTRY",
    PA: "PATHOLOGY", PH: "PHARMACOLOGY", MI: "MICROBIOLOGY",
    FM: "FORENSIC", FO: "FORENSIC", CM: "COMMUNITY_MEDICINE",
  };
  return map[prefix] || "CLINICAL";
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  console.log("=== Replace Wikimedia Images with Servier Medical Art ===\n");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Delete junk: ${deleteJunk}`);
  console.log(`Keep good Wikimedia: ${keepGood}\n`);

  // Connect to database
  const connectionString =
    process.env.DIRECT_DATABASE_URL ||
    process.env.DATABASE_URL ||
    "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);

  try {
    // Find all non-Servier Wikimedia images with lesson/topic info
    const wikiImages = await (prisma as any).visualResource.findMany({
      where: {
        attribution: { contains: "Wikimedia" },
        NOT: { attribution: { contains: "Servier" } },
      },
      include: {
        lesson: {
          select: {
            id: true,
            topicId: true,
            topic: { select: { code: true, name: true } },
          },
        },
      },
    });

    console.log(`Found ${wikiImages.length} non-Servier Wikimedia images\n`);

    // Check which lessons already have Servier images
    const existingServier = await (prisma as any).visualResource.findMany({
      where: { attribution: { contains: "Servier" } },
      select: { lessonId: true },
    });
    const lessonsWithServier = new Set(
      existingServier.map((s: any) => s.lessonId),
    );

    // Stats
    let replaced = 0;
    let deleted = 0;
    let kept = 0;
    let servierAdded = 0;
    let junkFound = 0;

    // Group images by topic for cleaner logging
    const byTopic = new Map<string, typeof wikiImages>();
    for (const img of wikiImages) {
      const code = img.lesson?.topic?.code || "UNKNOWN";
      if (!byTopic.has(code)) byTopic.set(code, []);
      byTopic.get(code)!.push(img);
    }

    for (const [topicCode, images] of byTopic) {
      const topicName = images[0]?.lesson?.topic?.name || "";
      const lessonId = images[0]?.lesson?.id;
      if (!lessonId) continue;

      const hasServierMapping = (servierPrebuiltMap as Record<string, any[]>)[topicCode];
      const alreadyHasServier = lessonsWithServier.has(lessonId);

      for (const img of images) {
        const isJunk = isJunkImage(img.title, img.imageUrl);
        const isGood = isGoodMedicalImage(img.title, topicName);

        if (isJunk) junkFound++;

        // Decision tree:
        if (hasServierMapping && !alreadyHasServier) {
          // REPLACE: Delete this Wikimedia image, we'll add Servier below
          if (!dryRun) {
            await (prisma as any).visualResource.delete({ where: { id: img.id } });
          }
          replaced++;
          console.log(
            `  🔄 ${topicCode}: Replace "${img.title?.substring(0, 50)}" → Servier`,
          );
        } else if (hasServierMapping && alreadyHasServier) {
          // Topic already has Servier — just delete this Wikimedia duplicate
          if (!dryRun) {
            await (prisma as any).visualResource.delete({ where: { id: img.id } });
          }
          deleted++;
          console.log(
            `  🗑  ${topicCode}: Delete duplicate "${img.title?.substring(0, 50)}" (Servier exists)`,
          );
        } else if (isJunk && deleteJunk) {
          // No Servier mapping, but image is junk — delete
          if (!dryRun) {
            await (prisma as any).visualResource.delete({ where: { id: img.id } });
          }
          deleted++;
          console.log(
            `  🗑  ${topicCode}: Delete junk "${img.title?.substring(0, 50)}"`,
          );
        } else if (keepGood && isGood) {
          // Good medical image, no Servier — keep it
          kept++;
        } else if (!isJunk) {
          // Mediocre but not junk, no Servier — keep for now
          kept++;
        } else {
          // Junk but --delete-junk not set — keep with warning
          kept++;
        }
      }

      // Add Servier images for this topic (if we replaced and they're not already there)
      if (hasServierMapping && !alreadyHasServier) {
        const servierImages = hasServierMapping;
        for (let i = 0; i < servierImages.length; i++) {
          const si = servierImages[i];
          if (dryRun) {
            console.log(
              `  ✨ ${topicCode}: Would add Servier "${si.title?.substring(0, 50)}"`,
            );
            servierAdded++;
            continue;
          }

          try {
            // Check for duplicates before inserting
            const existing = await (prisma as any).visualResource.findFirst({
              where: { lessonId, imageUrl: si.imageUrl },
            });
            if (existing) continue;

            await (prisma as any).visualResource.create({
              data: {
                lessonId,
                type: "IMAGE",
                title: (si.title || topicName).substring(0, 200),
                description:
                  (si.description || `Professional medical illustration for ${topicName}`).substring(0, 500),
                imageUrl: si.imageUrl,
                imageAlt: (si.title || topicName).substring(0, 200),
                attribution: si.attribution || "Servier Medical Art by Servier, CC-BY 4.0, via Wikimedia Commons",
                license: si.license || "CC_BY",
                category: categoryForCode(topicCode),
                tags: [
                  topicCode.split("-")[0].toLowerCase(),
                  "servier",
                  ...topicName
                    .toLowerCase()
                    .split(/\s+/)
                    .filter((w: string) => w.length > 3)
                    .slice(0, 3),
                ],
                sortOrder: i,
              },
            });
            servierAdded++;
          } catch (err: any) {
            // Skip duplicates silently
            if (!err.message?.includes("Unique")) {
              console.log(`  ❌ Error adding Servier: ${err.message?.substring(0, 80)}`);
            }
          }
        }
        lessonsWithServier.add(lessonId);
      }
    }

    // ─── Summary ──────────────────────────────────────────────
    console.log("\n=== Summary ===");
    console.log(`Wikimedia images processed: ${wikiImages.length}`);
    console.log(`Junk images found: ${junkFound}`);
    console.log(`Replaced with Servier: ${replaced}`);
    console.log(`Servier images added: ${servierAdded}`);
    console.log(`Deleted (junk/duplicate): ${deleted}`);
    console.log(`Kept: ${kept}`);

    // Final coverage stats
    if (!dryRun) {
      const totalVisuals = await (prisma as any).visualResource.count();
      const servierCount = await (prisma as any).visualResource.count({
        where: { attribution: { contains: "Servier" } },
      });
      const wikiCount = await (prisma as any).visualResource.count({
        where: {
          attribution: { contains: "Wikimedia" },
          NOT: { attribution: { contains: "Servier" } },
        },
      });
      const diagramCount = await (prisma as any).visualResource.count({
        where: { componentName: { not: null } },
      });
      const withVis = await (prisma as any).lesson.count({
        where: { layer: 7, visuals: { some: {} } },
      });
      const totalL7 = await (prisma as any).lesson.count({ where: { layer: 7 } });

      console.log("\n=== Final State ===");
      console.log(`Servier images: ${servierCount}`);
      console.log(`Wikimedia (non-Servier): ${wikiCount}`);
      console.log(`Interactive diagrams: ${diagramCount}`);
      console.log(`Total visuals: ${totalVisuals}`);
      console.log(
        `Coverage: ${withVis}/${totalL7} (${Math.round((withVis / totalL7) * 100)}%)`,
      );
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
