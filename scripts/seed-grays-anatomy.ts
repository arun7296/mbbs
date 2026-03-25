#!/usr/bin/env tsx
/**
 * Seed Gray's Anatomy 1918 public domain illustrations.
 *
 * Gray's Anatomy (20th US edition, 1918) illustrations are in the public domain
 * and available on Wikimedia Commons under "Category:Gray's Anatomy plates".
 *
 * Strategy:
 * 1. For each topic without visuals, search Wikimedia for "Gray's Anatomy" + keywords
 * 2. Filter to only include actual Gray's plates (not modern derivatives)
 * 3. Best for Anatomy (AN), some Physiology (PY), and Histology topics
 *
 * Usage:
 *   npx tsx scripts/seed-grays-anatomy.ts --dry-run
 *   npx tsx scripts/seed-grays-anatomy.ts --batch-size 200
 *   npx tsx scripts/seed-grays-anatomy.ts --resume
 *   npx tsx scripts/seed-grays-anatomy.ts --subject AN
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

const PROGRESS_FILE = "/tmp/seed-grays-anatomy-progress.json";

// Gray's Anatomy is most relevant for these subjects
const PRIORITY_SUBJECTS = ["AN", "PY", "BI", "PA", "SU", "OR", "IM"];

// ─── Gray's-specific keyword mapping ───────────────────────────────

const GRAYS_KEYWORDS: Record<string, string[]> = {
  // Anatomy regions
  shoulder: ["shoulder", "scapula", "clavicle", "humerus"],
  arm: ["arm", "humerus", "biceps", "brachial"],
  forearm: ["forearm", "radius", "ulna"],
  hand: ["hand", "carpal", "metacarpal", "phalanges"],
  hip: ["hip", "pelvis", "femur", "ilium"],
  thigh: ["thigh", "femur", "quadriceps"],
  leg: ["leg", "tibia", "fibula"],
  foot: ["foot", "tarsal", "metatarsal"],
  skull: ["skull", "cranium", "calvaria"],
  vertebra: ["vertebra", "spine", "vertebral column"],
  thorax: ["thorax", "rib", "sternum"],
  abdomen: ["abdomen", "abdominal wall"],
  pelvis: ["pelvis", "pelvic floor"],
  // Organs
  heart: ["heart", "cardiac"],
  lung: ["lung", "pulmonary"],
  liver: ["liver", "hepatic"],
  kidney: ["kidney", "renal"],
  brain: ["brain", "cerebral", "cerebrum"],
  eye: ["eye", "orbit"],
  ear: ["ear", "temporal bone"],
  stomach: ["stomach", "gastric"],
  intestine: ["intestine", "bowel"],
  // Systems
  artery: ["artery", "arterial"],
  vein: ["vein", "venous"],
  nerve: ["nerve", "neural", "plexus"],
  muscle: ["muscle", "muscular"],
  bone: ["bone", "skeleton"],
  joint: ["joint", "articulation"],
  lymph: ["lymph", "lymphatic"],
};

function buildGraysQueries(topicName: string, subjectCode: string): string[] {
  const queries: string[] = [];
  const topicLower = topicName.toLowerCase();
  const topicWords = topicName
    .split(/[\s&,:()/]+/)
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());

  // 1. Direct Gray's + topic search
  if (topicWords.length >= 2) {
    queries.push(`"Gray's Anatomy" ${topicWords.slice(0, 2).join(" ")}`);
  }

  // 2. Look for keyword matches
  for (const [concept, synonyms] of Object.entries(GRAYS_KEYWORDS)) {
    if (topicLower.includes(concept) || topicWords.some((w) => concept.includes(w) || w.includes(concept))) {
      queries.push(`"Gray's Anatomy" ${synonyms[0]}`);
      break;
    }
  }

  // 3. Single important word + Gray's
  if (topicWords.length >= 1) {
    queries.push(`"Gray's Anatomy" plate ${topicWords[0]}`);
  }

  // 4. Broader anatomical search
  queries.push(`Gray's Anatomy illustration ${topicWords[0] || subjectCode}`);

  return [...new Set(queries)].slice(0, 4);
}

function isGraysPlate(image: WikiImage): boolean {
  const title = image.title.toLowerCase();
  return (
    title.includes("gray") ||
    title.includes("grays") ||
    title.includes("gray's") ||
    title.includes("gray1918") ||
    title.includes("gray_") ||
    title.includes("anatomy") // broader match for anatomical illustrations
  );
}

function scoreGraysImage(image: WikiImage, topicName: string): number {
  let score = 0;
  const titleLower = image.title.toLowerCase();
  const topicWords = topicName.toLowerCase().split(/\s+/).filter((w) => w.length > 3);

  // Strong bonus for actual Gray's plates
  if (titleLower.includes("gray")) score += 5;
  if (titleLower.includes("plate")) score += 2;

  // Topic word match
  for (const word of topicWords) {
    if (titleLower.includes(word)) score += 3;
  }

  // Resolution bonus
  if (image.width >= 600) score += 1;

  return score;
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const { dryRun, resume, subjectFilter, batchSize } = parseArgs(process.argv.slice(2));

  console.log("=== Gray's Anatomy 1918 Illustration Seeder ===\n");
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

    // Filter: only process priority subjects, skip topics with visuals
    const topics = allTopics.filter((t) => {
      if (progress.completedTopics.includes(t.topicCode)) return false;
      if (lessonsWithVisuals.has(t.lessonId)) {
        progress.totalSkipped++;
        return false;
      }
      // Gray's is most relevant for anatomical/preclinical subjects
      if (!subjectFilter && !PRIORITY_SUBJECTS.includes(t.subjectCode)) return false;
      return true;
    });

    const total = Math.min(topics.length, batchSize);
    console.log(`Topics to process: ${total}\n`);

    let processed = 0;

    for (const topic of topics) {
      if (processed >= batchSize) {
        console.log(`\nBatch limit. Run with --resume.`);
        break;
      }

      processed++;
      const queries = buildGraysQueries(topic.topicName, topic.subjectCode);
      let allResults: WikiImage[] = [];

      for (const query of queries) {
        const images = await searchWikimediaImages(query, {
          limit: 10,
          minWidth: 200,
        });
        // Filter to only Gray's-related images
        const graysImages = images.filter(isGraysPlate);
        allResults.push(...graysImages);
        if (allResults.length >= 2) break;
        await sleep(DEFAULT_RATE_LIMIT_MS);
      }

      // Deduplicate
      const seen = new Set<string>();
      allResults = allResults.filter((img) => {
        if (seen.has(img.thumbUrl)) return false;
        seen.add(img.thumbUrl);
        return true;
      });

      // Score and sort
      allResults.sort((a, b) =>
        scoreGraysImage(b, topic.topicName) - scoreGraysImage(a, topic.topicName),
      );
      const selected = allResults.slice(0, 2); // Max 2 Gray's plates per topic

      if (selected.length === 0) {
        progress.totalFailed++;
        if (processed <= 20 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ⚠ No Gray's plates found`);
        }
        progress.completedTopics.push(topic.topicCode);
        continue;
      }

      if (dryRun) {
        console.log(`[${processed}/${total}] ${topic.topicCode}: Would add ${selected.length} plates`);
        for (const img of selected) console.log(`     → ${img.title.substring(0, 70)}`);
      } else {
        let added = 0;
        for (let i = 0; i < selected.length; i++) {
          const img = selected[i];
          const ok = await insertVisualResource(prisma, {
            lessonId: topic.lessonId,
            title: cleanTitle(img.title),
            description: `Gray's Anatomy (1918) illustration for ${topic.topicName}`,
            imageUrl: img.thumbUrl,
            imageAlt: `Gray's Anatomy plate: ${topic.topicName}`,
            attribution: "Gray's Anatomy, 20th US edition (1918), Public Domain, via Wikimedia Commons",
            license: "PUBLIC_DOMAIN",
            category: categoryForSubject(topic.subjectCode),
            tags: buildTags(topic.topicName, topic.subjectCode, "grays"),
            sortOrder: 10 + i,
          });
          if (ok) {
            added++;
            progress.totalAdded++;
          }
        }
        if (processed <= 20 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ✅ ${added} Gray's plates`);
        }
      }

      progress.completedTopics.push(topic.topicCode);
      if (processed % 25 === 0) {
        saveProgress(PROGRESS_FILE, progress);
      }
    }

    saveProgress(PROGRESS_FILE, progress);

    console.log("\n=== Summary ===");
    console.log(`Processed: ${processed}`);
    console.log(`Gray's plates added: ${progress.totalAdded}`);
    console.log(`No results: ${progress.totalFailed}`);
    console.log(`Skipped (had visuals): ${progress.totalSkipped}`);

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
