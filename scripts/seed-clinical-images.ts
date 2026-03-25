#!/usr/bin/env tsx
/**
 * Seed CDC PHIL, WHO, Radiopaedia, and other clinical/public health images.
 *
 * Searches Wikimedia Commons for images from:
 * - CDC Public Health Image Library (PHIL) — public domain
 * - WHO/public health images — various CC licenses
 * - Radiopaedia-contributed radiology images — CC licenses
 * - Dermatology Atlas images — CC licenses
 * - Histopathology / microscopy images — various CC licenses
 *
 * Best for: MI (microbiology), PA (pathology), CM (community medicine),
 * DR (dermatology), RD (radiology), IM/SU/OG/PE (clinical subjects)
 *
 * Usage:
 *   npx tsx scripts/seed-clinical-images.ts --dry-run
 *   npx tsx scripts/seed-clinical-images.ts --batch-size 200
 *   npx tsx scripts/seed-clinical-images.ts --resume
 *   npx tsx scripts/seed-clinical-images.ts --subject MI
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

const PROGRESS_FILE = "/tmp/seed-clinical-images-progress.json";

// Priority subjects for clinical/public health images
const CLINICAL_SUBJECTS = ["MI", "PA", "CM", "DR", "RD", "IM", "SU", "OG", "PE", "PH", "FM", "OP", "EN", "OR", "PS", "AS"];

// ─── Subject-specific search strategies ────────────────────────────

const SUBJECT_SEARCH_PREFIXES: Record<string, string[]> = {
  MI: ["CDC", "electron micrograph", "bacteria", "virus", "parasite", "culture"],
  PA: ["histopathology", "pathology specimen", "microscopy", "biopsy"],
  CM: ["CDC", "WHO", "epidemiology", "public health", "vaccination"],
  DR: ["dermatology", "skin lesion", "clinical photo"],
  RD: ["radiology", "X-ray", "CT scan", "MRI", "ultrasound"],
  IM: ["clinical", "medical", "echocardiography", "endoscopy"],
  SU: ["surgical", "operation", "wound", "laparoscopy"],
  OG: ["obstetrics", "ultrasound pregnancy", "gynecology"],
  PE: ["pediatric", "neonatal", "infant", "growth chart"],
  PH: ["drug", "medication", "pharmaceutical", "pharmacology"],
  FM: ["forensic", "autopsy", "wound pattern", "medicolegal"],
  OP: ["ophthalmology", "fundoscopy", "slit lamp", "eye examination"],
  EN: ["otoscopy", "laryngoscopy", "audiogram", "ENT"],
  OR: ["orthopedic", "X-ray fracture", "joint replacement"],
  PS: ["psychiatry", "brain scan", "neuroimaging"],
  AS: ["anesthesia", "intubation", "airway management"],
};

// ─── Microbiology-specific organism searches ───────────────────────

const MICRO_KEYWORDS: Record<string, string[]> = {
  staphylococcus: ["staphylococcus", "MRSA", "abscess"],
  streptococcus: ["streptococcus", "pharyngitis"],
  "e. coli": ["escherichia coli", "E. coli", "urinary tract"],
  mycobacterium: ["mycobacterium tuberculosis", "tuberculosis", "AFB"],
  salmonella: ["salmonella", "typhoid"],
  plasmodium: ["plasmodium", "malaria", "blood smear"],
  candida: ["candida", "thrush", "fungal infection"],
  hiv: ["HIV", "AIDS", "retrovirus"],
  hepatitis: ["hepatitis", "liver biopsy"],
  dengue: ["dengue", "hemorrhagic fever"],
  rabies: ["rabies", "negri body"],
  malaria: ["malaria", "plasmodium falciparum", "blood smear"],
};

function buildClinicalQueries(topicName: string, subjectCode: string): string[] {
  const queries: string[] = [];
  const topicLower = topicName.toLowerCase();
  const topicWords = topicName
    .split(/[\s&,:()/]+/)
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());

  const prefixes = SUBJECT_SEARCH_PREFIXES[subjectCode] || ["medical"];

  // 1. Subject-specific prefix + topic keywords
  if (topicWords.length >= 1) {
    queries.push(`${prefixes[0]} ${topicWords[0]}`);
  }
  if (topicWords.length >= 2) {
    queries.push(`${prefixes[0]} ${topicWords.slice(0, 2).join(" ")}`);
  }

  // 2. For microbiology: look for specific organism keywords
  if (subjectCode === "MI") {
    for (const [organism, searchTerms] of Object.entries(MICRO_KEYWORDS)) {
      if (topicLower.includes(organism) || topicWords.some((w) => organism.includes(w))) {
        queries.push(`CDC ${searchTerms[0]}`);
        queries.push(`electron micrograph ${searchTerms[0]}`);
        break;
      }
    }
  }

  // 3. Alternative prefix
  if (prefixes.length > 1 && topicWords.length >= 1) {
    queries.push(`${prefixes[1]} ${topicWords[0]}`);
  }

  // 4. Generic medical + topic
  queries.push(`medical ${topicWords.slice(0, 2).join(" ") || subjectCode}`);

  return [...new Set(queries)].slice(0, 5);
}

function isQualityClinicalImage(image: WikiImage): boolean {
  const title = image.title.toLowerCase();

  // Reject non-medical content
  const reject = [
    "logo", "icon", "flag", "map", "chart", "screenshot", "stamp",
    "medal", "badge", "ribbon", "award", "banner", "poster",
    "facebook", "twitter", "instagram",
  ];
  if (reject.some((r) => title.includes(r))) return false;

  // Must be reasonable size
  if (image.width < 200 || image.height < 150) return false;

  return true;
}

function scoreImage(image: WikiImage, topicName: string, subjectCode: string): number {
  let score = 0;
  const titleLower = image.title.toLowerCase();
  const topicWords = topicName.toLowerCase().split(/\s+/).filter((w) => w.length > 3);

  // Source quality bonuses
  if (titleLower.includes("cdc") || titleLower.includes("phil")) score += 4;
  if (titleLower.includes("who")) score += 3;
  if (titleLower.includes("radiopaedia")) score += 4;
  if (titleLower.includes("histopath") || titleLower.includes("microscop")) score += 3;
  if (titleLower.includes("micrograph")) score += 3;

  // Topic word match
  for (const word of topicWords) {
    if (titleLower.includes(word)) score += 3;
  }

  // Image quality
  if (image.width >= 800) score += 1;

  return score;
}

function attributionFor(image: WikiImage): { attribution: string; license: string } {
  const titleLower = image.title.toLowerCase();
  if (titleLower.includes("cdc") || titleLower.includes("phil")) {
    return { attribution: "CDC/ Public Health Image Library, Public Domain, via Wikimedia Commons", license: "PUBLIC_DOMAIN" };
  }
  if (titleLower.includes("who")) {
    return { attribution: "World Health Organization, via Wikimedia Commons", license: "CC_BY" };
  }
  if (titleLower.includes("radiopaedia")) {
    return { attribution: "Radiopaedia.org, CC-BY-SA, via Wikimedia Commons", license: "CC_BY_SA" };
  }
  return { attribution: "Via Wikimedia Commons", license: "CC_BY_SA" };
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const { dryRun, resume, subjectFilter, batchSize } = parseArgs(process.argv.slice(2));

  console.log("=== CDC/WHO/Radiopaedia Clinical Image Seeder ===\n");
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
      if (!subjectFilter && !CLINICAL_SUBJECTS.includes(t.subjectCode)) return false;
      return true;
    });

    const total = Math.min(topics.length, batchSize);
    console.log(`Topics to process: ${total}\n`);

    let processed = 0;

    for (const topic of topics) {
      if (processed >= batchSize) break;

      processed++;
      const queries = buildClinicalQueries(topic.topicName, topic.subjectCode);
      let allResults: WikiImage[] = [];

      for (const query of queries) {
        const images = await searchWikimediaImages(query, {
          limit: 8,
          minWidth: 200,
        });
        const quality = images.filter(isQualityClinicalImage);
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
        scoreImage(b, topic.topicName, topic.subjectCode) -
        scoreImage(a, topic.topicName, topic.subjectCode),
      );
      const selected = allResults.slice(0, 2);

      if (selected.length === 0) {
        progress.totalFailed++;
        if (processed <= 20 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ⚠ No clinical images`);
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
            description: img.description || `Clinical image for ${topic.topicName}`,
            imageUrl: img.thumbUrl,
            imageAlt: `Clinical illustration: ${topic.topicName}`,
            attribution,
            license,
            category: categoryForSubject(topic.subjectCode),
            tags: buildTags(topic.topicName, topic.subjectCode, "clinical"),
            sortOrder: 10 + i,
          });
          if (ok) {
            added++;
            progress.totalAdded++;
          }
        }
        if (processed <= 20 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ✅ ${added} clinical images`);
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
