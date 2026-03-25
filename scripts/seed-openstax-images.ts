#!/usr/bin/env tsx
/**
 * Seed OpenStax Anatomy & Physiology textbook figures.
 *
 * OpenStax textbook figures are CC-BY 4.0 and many are available on
 * Wikimedia Commons. This script searches for OpenStax-sourced medical
 * illustrations and educational diagrams.
 *
 * Also searches for other open-access textbook illustrations (Blausen Medical,
 * BruceBlaus, etc.) which are high-quality CC-BY medical illustrations.
 *
 * Usage:
 *   npx tsx scripts/seed-openstax-images.ts --dry-run
 *   npx tsx scripts/seed-openstax-images.ts --batch-size 200
 *   npx tsx scripts/seed-openstax-images.ts --resume
 *   npx tsx scripts/seed-openstax-images.ts --subject PY
 */

import {
  searchWikimediaImages,
  fetchLayer7Lessons,
  getLessonsWithVisuals,
  createDbConnection,
  parseArgs,
  loadProgress,
  saveProgress,
  insertVisualResource,
  printCoverageStats,
  cleanTitle,
  buildTags,
  categoryForSubject,
  sleep,
  DEFAULT_RATE_LIMIT_MS,
  type WikiImage,
  type SeederProgress,
} from "./lib/wikimedia-utils.js";

const PROGRESS_FILE = "/tmp/seed-openstax-progress.json";

// Sources to search for (all CC-BY or CC-BY-SA on Wikimedia)
const OPEN_TEXTBOOK_SOURCES = [
  "OpenStax",
  "Blausen",
  "BruceBlaus",
  "Anatomy & Physiology",
];

// Subject relevance — OpenStax is strongest for preclinical subjects
const BEST_SUBJECTS = ["AN", "PY", "BI", "PA", "MI", "PH"];

// ─── Search strategy ───────────────────────────────────────────────

function buildOpenStaxQueries(topicName: string, subjectCode: string): string[] {
  const queries: string[] = [];
  const topicWords = topicName
    .split(/[\s&,:()/]+/)
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());

  // 1. OpenStax specific search
  if (topicWords.length >= 2) {
    queries.push(`OpenStax ${topicWords.slice(0, 2).join(" ")}`);
  }

  // 2. Blausen Medical (high-quality 3D medical illustrations)
  if (topicWords.length >= 1) {
    queries.push(`Blausen ${topicWords[0]}`);
    queries.push(`BruceBlaus ${topicWords[0]}`);
  }

  // 3. Generic medical illustration
  if (topicWords.length >= 2) {
    queries.push(`medical illustration ${topicWords.slice(0, 2).join(" ")}`);
  }

  return [...new Set(queries)].slice(0, 4);
}

function isOpenTextbookImage(image: WikiImage): boolean {
  const title = image.title.toLowerCase();
  return OPEN_TEXTBOOK_SOURCES.some((src) => title.includes(src.toLowerCase()));
}

function scoreImage(image: WikiImage, topicName: string): number {
  let score = 0;
  const titleLower = image.title.toLowerCase();
  const topicWords = topicName.toLowerCase().split(/\s+/).filter((w) => w.length > 3);

  // Source quality bonus
  if (titleLower.includes("openstax")) score += 4;
  if (titleLower.includes("blausen") || titleLower.includes("bruceblaus")) score += 5;

  // Topic relevance
  for (const word of topicWords) {
    if (titleLower.includes(word)) score += 3;
  }

  // Image quality
  if (image.width >= 800) score += 1;
  if (titleLower.endsWith(".svg")) score += 1;

  return score;
}

function attributionFor(image: WikiImage): { attribution: string; license: string } {
  const titleLower = image.title.toLowerCase();
  if (titleLower.includes("openstax")) {
    return {
      attribution: "OpenStax, CC-BY 4.0, via Wikimedia Commons",
      license: "CC_BY",
    };
  }
  if (titleLower.includes("blausen") || titleLower.includes("bruceblaus")) {
    return {
      attribution: "Blausen Medical, CC-BY 3.0, via Wikimedia Commons",
      license: "CC_BY",
    };
  }
  return {
    attribution: "Via Wikimedia Commons, CC-BY-SA 4.0",
    license: "CC_BY_SA",
  };
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const { dryRun, resume, subjectFilter, batchSize } = parseArgs(process.argv.slice(2));

  console.log("=== OpenStax & Open Textbook Image Seeder ===\n");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Batch size: ${batchSize}`);
  if (subjectFilter) console.log(`Subject: ${subjectFilter}`);
  console.log();

  const { pool, prisma } = createDbConnection();
  const progress: SeederProgress = resume
    ? loadProgress(PROGRESS_FILE)
    : { completedTopics: [], totalAdded: 0, totalFailed: 0, totalSkipped: 0, errors: [] };

  try {
    const allTopics = await fetchLayer7Lessons(prisma, subjectFilter);
    const lessonsWithVisuals = await getLessonsWithVisuals(prisma);

    const topics = allTopics.filter((t) => {
      if (progress.completedTopics.includes(t.topicCode)) return false;
      if (lessonsWithVisuals.has(t.lessonId)) {
        progress.totalSkipped++;
        return false;
      }
      // Prioritize subjects where OpenStax is most relevant
      if (!subjectFilter && !BEST_SUBJECTS.includes(t.subjectCode)) return false;
      return true;
    });

    const total = Math.min(topics.length, batchSize);
    console.log(`Topics to process: ${total}\n`);

    let processed = 0;

    for (const topic of topics) {
      if (processed >= batchSize) break;

      processed++;
      const queries = buildOpenStaxQueries(topic.topicName, topic.subjectCode);
      let allResults: WikiImage[] = [];

      for (const query of queries) {
        const images = await searchWikimediaImages(query, {
          limit: 8,
          minWidth: 200,
        });
        // Prefer OpenStax/Blausen but accept other quality medical illustrations
        const quality = images.filter((img) => {
          const t = img.title.toLowerCase();
          return (
            isOpenTextbookImage(img) ||
            t.includes("medical") ||
            t.includes("anatomy") ||
            t.includes("diagram") ||
            t.includes("illustration")
          );
        });
        allResults.push(...quality);
        if (allResults.length >= 3) break;
        await sleep(DEFAULT_RATE_LIMIT_MS);
      }

      // Deduplicate
      const seen = new Set<string>();
      allResults = allResults.filter((img) => {
        if (seen.has(img.thumbUrl)) return false;
        seen.add(img.thumbUrl);
        return true;
      });

      allResults.sort((a, b) => scoreImage(b, topic.topicName) - scoreImage(a, topic.topicName));
      const selected = allResults.slice(0, 2);

      if (selected.length === 0) {
        progress.totalFailed++;
        if (processed <= 20 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ⚠ No textbook images`);
        }
        progress.completedTopics.push(topic.topicCode);
        continue;
      }

      if (dryRun) {
        console.log(`[${processed}/${total}] ${topic.topicCode}: Would add ${selected.length} images`);
        for (const img of selected) console.log(`     → ${img.title.substring(0, 70)}`);
      } else {
        let added = 0;
        for (let i = 0; i < selected.length; i++) {
          const img = selected[i];
          const { attribution, license } = attributionFor(img);
          const ok = await insertVisualResource(prisma, {
            lessonId: topic.lessonId,
            title: cleanTitle(img.title),
            description: img.description || `Medical illustration for ${topic.topicName}`,
            imageUrl: img.thumbUrl,
            imageAlt: `Medical diagram: ${topic.topicName}`,
            attribution,
            license,
            category: categoryForSubject(topic.subjectCode),
            tags: buildTags(topic.topicName, topic.subjectCode, "openstax"),
            sortOrder: 10 + i,
          });
          if (ok) {
            added++;
            progress.totalAdded++;
          }
        }
        if (processed <= 20 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ✅ ${added} textbook images`);
        }
      }

      progress.completedTopics.push(topic.topicCode);
      if (processed % 25 === 0) saveProgress(PROGRESS_FILE, progress);
    }

    saveProgress(PROGRESS_FILE, progress);

    console.log("\n=== Summary ===");
    console.log(`Processed: ${processed}`);
    console.log(`Images added: ${progress.totalAdded}`);
    console.log(`No results: ${progress.totalFailed}`);

    if (!dryRun) await printCoverageStats(prisma);
  } catch (err) {
    console.error("Fatal error:", err);
    saveProgress(PROGRESS_FILE, progress);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
