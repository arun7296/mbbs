#!/usr/bin/env tsx
/**
 * Wikimedia Commons Final Sweep — broad medical image search.
 *
 * This is the last-resort seeder that uses broader Wikimedia Commons searches
 * for any remaining topics without visuals. It tries multiple strategies:
 *
 * 1. Specific medical illustration search
 * 2. Anatomical diagram search
 * 3. Medical photograph search
 * 4. Schema/flowchart search
 * 5. Generic topic search with medical context
 *
 * Runs AFTER all source-specific seeders (Servier, Gray's, OpenStax, CDC/WHO).
 * Only targets topics that still have no visuals.
 *
 * Usage:
 *   npx tsx scripts/seed-wikimedia-final.ts --dry-run
 *   npx tsx scripts/seed-wikimedia-final.ts --batch-size 200
 *   npx tsx scripts/seed-wikimedia-final.ts --resume
 *   npx tsx scripts/seed-wikimedia-final.ts --subject AN
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

const PROGRESS_FILE = "/tmp/seed-wikimedia-final-progress.json";

// ─── Subject-aware search strategy ─────────────────────────────────

const SUBJECT_CONTEXT: Record<string, string> = {
  AN: "anatomy",
  PY: "physiology",
  BI: "biochemistry cell",
  PA: "pathology histology",
  PH: "pharmacology drug",
  MI: "microbiology infection",
  IM: "internal medicine clinical",
  SU: "surgery surgical",
  OG: "obstetrics gynecology",
  PE: "pediatrics child",
  FM: "forensic medicine",
  CM: "public health epidemiology",
  OP: "ophthalmology eye",
  EN: "ENT otolaryngology",
  DR: "dermatology skin",
  OR: "orthopedics bone joint",
  PS: "psychiatry neurology brain",
  RD: "radiology imaging",
  AS: "anesthesiology",
};

// ─── Quality filters ───────────────────────────────────────────────

const BLOCKED_TERMS = [
  "logo", "icon", "flag", "coat of arms", "stamp", "medal", "badge",
  "ribbon", "award", "banner", "screenshot", "facebook", "twitter",
  "map of", "political", "election", "football", "soccer", "cricket",
  "railway", "locomotive", "battleship", "aircraft", "military",
  "cemetery", "monument", "church", "temple", "mosque",
];

function isQualityMedicalImage(image: WikiImage): boolean {
  const title = image.title.toLowerCase();

  // Must pass quality filter
  if (BLOCKED_TERMS.some((term) => title.includes(term))) return false;
  if (image.width < 200 || image.height < 150) return false;

  // Bonus: detect likely medical content
  const medicalSignals = [
    "medical", "anatomy", "diagram", "illustration", "histology",
    "pathology", "clinical", "cell", "organ", "tissue", "nerve",
    "muscle", "bone", "blood", "artery", "vein", "section",
    "microscop", "radiology", "x-ray", "mri", "ct scan",
    "blausen", "gray", "netter", "servier", "openstax",
    "cdc", "who", "nih",
  ];

  // Give preference to likely medical images
  const hasMedicalSignal = medicalSignals.some((s) => title.includes(s));
  if (!hasMedicalSignal) {
    // Non-medical images must at least not be blocked
    const desc = (image.description || "").toLowerCase();
    if (!medicalSignals.some((s) => desc.includes(s))) {
      // Very generic — lower priority but still accept if topic words match
    }
  }

  return true;
}

function buildBroadQueries(topicName: string, subjectCode: string): string[] {
  const queries: string[] = [];
  const topicWords = topicName
    .split(/[\s&,:()/]+/)
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());
  const context = SUBJECT_CONTEXT[subjectCode] || "medical";

  // Strategy 1: Medical illustration + topic (most specific)
  if (topicWords.length >= 2) {
    queries.push(`medical illustration ${topicWords.slice(0, 2).join(" ")}`);
  }

  // Strategy 2: Subject context + topic
  if (topicWords.length >= 1) {
    queries.push(`${context} ${topicWords[0]}`);
  }

  // Strategy 3: Diagram/schema + topic
  if (topicWords.length >= 2) {
    queries.push(`diagram ${topicWords.slice(0, 2).join(" ")}`);
  }

  // Strategy 4: Just the topic (broadest)
  if (topicWords.length >= 2) {
    queries.push(topicWords.slice(0, 3).join(" "));
  } else if (topicWords.length === 1) {
    queries.push(`${topicWords[0]} medical`);
  }

  // Strategy 5: Anatomy-specific for AN topics
  if (subjectCode === "AN") {
    queries.push(`human ${topicWords[0] || "anatomy"}`);
  }

  return [...new Set(queries)].slice(0, 5);
}

function scoreImage(image: WikiImage, topicName: string): number {
  let score = 0;
  const titleLower = image.title.toLowerCase();
  const topicWords = topicName.toLowerCase().split(/\s+/).filter((w) => w.length > 3);

  // Topic relevance (most important)
  for (const word of topicWords) {
    if (titleLower.includes(word)) score += 4;
  }

  // Known quality sources
  if (titleLower.includes("blausen") || titleLower.includes("bruceblaus")) score += 5;
  if (titleLower.includes("servier") || titleLower.includes("smart-servier")) score += 4;
  if (titleLower.includes("openstax")) score += 4;
  if (titleLower.includes("gray")) score += 3;
  if (titleLower.includes("cdc")) score += 3;

  // Medical content signals
  const medicalBonus = ["anatomy", "medical", "diagram", "illustration", "histology", "pathology"];
  for (const term of medicalBonus) {
    if (titleLower.includes(term)) { score += 1; break; }
  }

  // Image quality
  if (image.width >= 800) score += 1;
  if (titleLower.endsWith(".svg")) score += 1;

  // Penalize very generic titles
  if (titleLower.length < 15) score -= 2;

  return score;
}

function guessAttribution(image: WikiImage): { attribution: string; license: string } {
  const titleLower = image.title.toLowerCase();
  if (titleLower.includes("servier")) return { attribution: "Servier Medical Art, CC-BY 4.0, via Wikimedia Commons", license: "CC_BY" };
  if (titleLower.includes("blausen")) return { attribution: "Blausen Medical, CC-BY 3.0, via Wikimedia Commons", license: "CC_BY" };
  if (titleLower.includes("openstax")) return { attribution: "OpenStax, CC-BY 4.0, via Wikimedia Commons", license: "CC_BY" };
  if (titleLower.includes("gray")) return { attribution: "Gray's Anatomy (1918), Public Domain, via Wikimedia Commons", license: "PUBLIC_DOMAIN" };
  if (titleLower.includes("cdc") || titleLower.includes("phil")) return { attribution: "CDC/ Public Health Image Library, Public Domain, via Wikimedia Commons", license: "PUBLIC_DOMAIN" };
  return { attribution: "Via Wikimedia Commons", license: "CC_BY_SA" };
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const { dryRun, resume, subjectFilter, batchSize } = parseArgs(process.argv.slice(2));

  console.log("=== Wikimedia Commons Final Sweep ===\n");
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

    // Only process topics that have NO visuals at all
    const topics = allTopics.filter((t) => {
      if (progress.completedTopics.includes(t.topicCode)) return false;
      if (lessonsWithVisuals.has(t.lessonId)) {
        progress.totalSkipped++;
        return false;
      }
      return true;
    });

    const total = Math.min(topics.length, batchSize);
    console.log(`Topics WITHOUT visuals: ${topics.length}`);
    console.log(`Processing: ${total}\n`);

    let processed = 0;

    for (const topic of topics) {
      if (processed >= batchSize) break;

      processed++;
      const queries = buildBroadQueries(topic.topicName, topic.subjectCode);
      let allResults: WikiImage[] = [];

      for (const query of queries) {
        const images = await searchWikimediaImages(query, {
          limit: 10,
          minWidth: 200,
        });
        const quality = images.filter(isQualityMedicalImage);
        allResults.push(...quality);
        if (allResults.length >= 4) break;
        await sleep(DEFAULT_RATE_LIMIT_MS);
      }

      // Deduplicate
      const seen = new Set<string>();
      allResults = allResults.filter((img) => {
        if (seen.has(img.thumbUrl)) return false;
        seen.add(img.thumbUrl);
        return true;
      });

      allResults.sort((a, b) =>
        scoreImage(b, topic.topicName) - scoreImage(a, topic.topicName),
      );
      const selected = allResults.slice(0, 2);

      if (selected.length === 0) {
        progress.totalFailed++;
        if (processed <= 30 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode} "${topic.topicName}": ⚠ No images found`);
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
          const { attribution, license } = guessAttribution(img);
          const ok = await insertVisualResource(prisma, {
            lessonId: topic.lessonId,
            title: cleanTitle(img.title),
            description: img.description || `Medical illustration for ${topic.topicName}`,
            imageUrl: img.thumbUrl,
            imageAlt: `Medical image: ${topic.topicName}`,
            attribution,
            license,
            category: categoryForSubject(topic.subjectCode),
            tags: buildTags(topic.topicName, topic.subjectCode, "wikimedia"),
            sortOrder: 20 + i,
          });
          if (ok) {
            added++;
            progress.totalAdded++;
          }
        }
        if (processed <= 30 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ✅ ${added} images`);
        }
      }

      progress.completedTopics.push(topic.topicCode);
      if (processed % 25 === 0) saveProgress(PROGRESS_FILE, progress);
    }

    saveProgress(PROGRESS_FILE, progress);

    console.log("\n=== Summary ===");
    console.log(`Processed: ${processed}`);
    console.log(`Images added: ${progress.totalAdded}`);
    console.log(`Still no images: ${progress.totalFailed}`);
    console.log(`Already had visuals: ${progress.totalSkipped}`);

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
