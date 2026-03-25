#!/usr/bin/env tsx
/**
 * Servier Medical Art Full Crawl with Fuzzy Synonym Matching
 *
 * Searches Wikimedia Commons for Servier Medical Art images ("Smart-Servier")
 * using expanded synonym-based keyword matching for every MBBS topic.
 *
 * This is more thorough than fix-servier-urls.ts because it:
 * - Uses multiple synonym expansions per topic
 * - Tries category-based searches for Servier subcategories
 * - Scores results by relevance before inserting
 * - Only adds to topics that don't already have images
 *
 * Usage:
 *   npx tsx scripts/seed-servier-full.ts --dry-run
 *   npx tsx scripts/seed-servier-full.ts --batch-size 200
 *   npx tsx scripts/seed-servier-full.ts --resume
 *   npx tsx scripts/seed-servier-full.ts --subject AN
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

const PROGRESS_FILE = "/tmp/seed-servier-full-progress.json";

// ─── Medical Synonym Expansions ────────────────────────────────────
// Maps common medical terms to expanded search terms for Servier images

const SYNONYM_MAP: Record<string, string[]> = {
  // Organs
  heart: ["heart", "cardiac", "coronary", "ventricle", "atrium", "myocardium"],
  liver: ["liver", "hepatic", "biliary", "gallbladder", "bile duct"],
  kidney: ["kidney", "renal", "nephron", "glomerulus", "urinary"],
  brain: ["brain", "cerebral", "cortex", "cerebellum", "neuron"],
  lung: ["lung", "pulmonary", "bronchus", "alveolus", "respiratory"],
  stomach: ["stomach", "gastric", "digestive", "pylorus"],
  intestine: ["intestine", "colon", "bowel", "duodenum", "jejunum", "ileum"],
  pancreas: ["pancreas", "insulin", "islet", "glucagon"],
  thyroid: ["thyroid", "parathyroid", "endocrine"],
  spleen: ["spleen", "splenic", "lymphoid"],
  uterus: ["uterus", "uterine", "endometrium", "cervix"],
  ovary: ["ovary", "ovarian", "follicle", "oocyte"],
  eye: ["eye", "retina", "cornea", "lens", "optic"],
  ear: ["ear", "cochlea", "vestibular", "hearing", "tympanic"],
  skin: ["skin", "dermatology", "epidermis", "dermis"],
  bone: ["bone", "skeleton", "osseous", "fracture", "periosteum"],
  muscle: ["muscle", "skeletal muscle", "myocyte", "sarcomere"],
  nerve: ["nerve", "neuron", "synapse", "axon", "ganglion"],
  blood: ["blood", "erythrocyte", "leukocyte", "platelet", "hemoglobin"],
  lymph: ["lymph", "lymphocyte", "lymph node", "thymus"],
  vessel: ["artery", "vein", "capillary", "vascular"],
  // Systems
  cardiovascular: ["cardiovascular", "circulatory", "heart", "vascular"],
  respiratory: ["respiratory", "lung", "bronchial", "trachea"],
  gastrointestinal: ["gastrointestinal", "digestive", "GI tract", "stomach"],
  "nervous system": ["nervous", "neural", "brain", "spinal cord"],
  endocrine: ["endocrine", "hormone", "pituitary", "thyroid", "adrenal"],
  reproductive: ["reproductive", "fertility", "gamete", "embryo"],
  immune: ["immune", "antibody", "antigen", "lymphocyte", "complement"],
  urinary: ["urinary", "kidney", "bladder", "ureter"],
  musculoskeletal: ["musculoskeletal", "bone", "joint", "cartilage"],
  // Pathology
  inflammation: ["inflammation", "edema", "neutrophil", "macrophage"],
  cancer: ["cancer", "tumor", "neoplasm", "carcinoma", "metastasis"],
  infection: ["infection", "bacteria", "virus", "pathogen", "sepsis"],
  thrombosis: ["thrombosis", "coagulation", "clot", "embolism"],
  anemia: ["anemia", "hemoglobin", "iron", "erythrocyte"],
  diabetes: ["diabetes", "insulin", "glucose", "pancreas"],
  hypertension: ["hypertension", "blood pressure", "heart"],
  fracture: ["fracture", "bone", "fixation", "orthopedic"],
  // Cell biology
  cell: ["cell", "membrane", "organelle", "mitochondria", "nucleus"],
  dna: ["DNA", "RNA", "gene", "chromosome", "genetic"],
  protein: ["protein", "amino acid", "enzyme", "peptide"],
  // Pharmacology
  drug: ["drug", "medication", "pharmaceutical", "tablet", "capsule"],
  receptor: ["receptor", "agonist", "antagonist", "ligand"],
  antibiotic: ["antibiotic", "antimicrobial", "penicillin"],
  // Microbiology
  bacteria: ["bacteria", "bacterial", "gram", "staphylococcus", "streptococcus"],
  virus: ["virus", "viral", "HIV", "hepatitis", "influenza"],
  fungus: ["fungus", "fungal", "candida", "mycosis"],
  parasite: ["parasite", "malaria", "plasmodium", "helminth"],
};

// ─── Search Strategy ───────────────────────────────────────────────

function buildServierQueries(topicName: string, subjectCode: string): string[] {
  const queries: string[] = [];
  const topicLower = topicName.toLowerCase();
  const topicWords = topicName
    .split(/[\s&,:()/]+/)
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());

  // 1. Exact topic name search (most specific)
  if (topicWords.length >= 2) {
    queries.push(`Smart-Servier ${topicWords.slice(0, 2).join(" ")}`);
  }

  // 2. Synonym expansion — find matching concept
  for (const [concept, synonyms] of Object.entries(SYNONYM_MAP)) {
    if (topicLower.includes(concept) || topicWords.some((w) => concept.includes(w))) {
      // Use first 2 synonyms as separate queries
      queries.push(`Smart-Servier ${synonyms[0]}`);
      if (synonyms.length > 1) {
        queries.push(`Smart-Servier ${synonyms[1]}`);
      }
      break;
    }
  }

  // 3. Single word fallback
  if (topicWords.length >= 1) {
    queries.push(`Smart-Servier ${topicWords[0]}`);
  }

  // 4. Subject-level generic fallback
  const SUBJECT_FALLBACK: Record<string, string> = {
    AN: "anatomy", PY: "physiology", BI: "cell", PA: "pathology",
    PH: "drug", MI: "bacteria", IM: "organ", SU: "surgery",
    OG: "uterus", PE: "child", FM: "body", CM: "epidemiology",
    OP: "eye", EN: "ear", DR: "skin", OR: "bone",
    PS: "brain", RD: "imaging", AS: "anesthesia",
  };
  if (SUBJECT_FALLBACK[subjectCode]) {
    queries.push(`Smart-Servier ${SUBJECT_FALLBACK[subjectCode]}`);
  }

  return [...new Set(queries)].slice(0, 4);
}

// ─── Score a Servier image result for relevance ────────────────────

function scoreImage(image: WikiImage, topicName: string): number {
  let score = 0;
  const titleLower = (image.title || "").toLowerCase();
  const topicWords = topicName.toLowerCase().split(/\s+/).filter((w) => w.length > 3);

  for (const word of topicWords) {
    if (titleLower.includes(word)) score += 3;
  }

  // Bonus for high-resolution
  if (image.width >= 800) score += 1;
  // Bonus for SVG (vector = crisp)
  if (image.title.toLowerCase().endsWith(".svg")) score += 1;
  // Must be a Servier image
  if (!titleLower.includes("servier") && !titleLower.includes("smart-servier")) score -= 10;

  return score;
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  const { dryRun, resume, subjectFilter, batchSize } = parseArgs(process.argv.slice(2));

  console.log("=== Servier Full Crawl with Fuzzy Matching ===\n");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Batch size: ${batchSize}`);
  if (subjectFilter) console.log(`Subject: ${subjectFilter}`);
  if (resume) console.log("Resuming from checkpoint");
  console.log();

  const { pool, prisma } = createDbConnection();
  const progress: SeederProgress = resume
    ? loadProgress(PROGRESS_FILE)
    : { completedTopics: [], totalAdded: 0, totalFailed: 0, totalSkipped: 0, errors: [] };

  if (resume) {
    console.log(`Resuming: ${progress.completedTopics.length} topics already done\n`);
  }

  try {
    // Get all topics and filter out ones with existing visuals
    const allTopics = await fetchLayer7Lessons(prisma, subjectFilter);
    const lessonsWithVisuals = await getLessonsWithVisuals(prisma);

    const topics = allTopics.filter((t) => {
      if (progress.completedTopics.includes(t.topicCode)) return false;
      if (lessonsWithVisuals.has(t.lessonId)) {
        progress.totalSkipped++;
        return false;
      }
      return true;
    });

    const total = Math.min(topics.length, batchSize);
    console.log(`Topics to process: ${total} (${allTopics.length} total, ${progress.totalSkipped} already have visuals)\n`);

    let processed = 0;

    for (const topic of topics) {
      if (processed >= batchSize) {
        console.log(`\nBatch limit reached. Run with --resume for next batch.`);
        break;
      }

      processed++;
      const queries = buildServierQueries(topic.topicName, topic.subjectCode);
      let allResults: WikiImage[] = [];

      for (const query of queries) {
        const images = await searchWikimediaImages(query, {
          limit: 8,
          titleFilter: "servier",
          minWidth: 200,
        });
        allResults.push(...images);
        if (allResults.length >= 3) break;
        await sleep(DEFAULT_RATE_LIMIT_MS);
      }

      // Deduplicate by URL
      const seen = new Set<string>();
      allResults = allResults.filter((img) => {
        if (seen.has(img.thumbUrl)) return false;
        seen.add(img.thumbUrl);
        return true;
      });

      // Score and sort
      allResults.sort((a, b) => scoreImage(b, topic.topicName) - scoreImage(a, topic.topicName));
      const selected = allResults.slice(0, 3);

      if (selected.length === 0) {
        progress.totalFailed++;
        if (processed <= 30 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ⚠ No Servier images found`);
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
          const ok = await insertVisualResource(prisma, {
            lessonId: topic.lessonId,
            title: cleanTitle(img.title),
            description: img.description || `Servier Medical Art illustration for ${topic.topicName}`,
            imageUrl: img.thumbUrl,
            imageAlt: `Medical illustration: ${topic.topicName}`,
            attribution: "Servier Medical Art by Servier, CC-BY 4.0, via Wikimedia Commons",
            license: "CC_BY",
            category: categoryForSubject(topic.subjectCode),
            tags: buildTags(topic.topicName, topic.subjectCode, "servier"),
            sortOrder: i,
          });
          if (ok) {
            added++;
            progress.totalAdded++;
          }
        }
        if (processed <= 30 || processed % 50 === 0) {
          console.log(`[${processed}/${total}] ${topic.topicCode}: ✅ ${added} Servier images`);
        }
      }

      progress.completedTopics.push(topic.topicCode);
      if (processed % 25 === 0) {
        saveProgress(PROGRESS_FILE, progress);
        console.log(`  [checkpoint: ${progress.completedTopics.length} done, ${progress.totalAdded} added]`);
      }
    }

    saveProgress(PROGRESS_FILE, progress);

    console.log("\n=== Summary ===");
    console.log(`Processed: ${processed}`);
    console.log(`Images added: ${progress.totalAdded}`);
    console.log(`Topics without results: ${progress.totalFailed}`);
    console.log(`Topics skipped (had visuals): ${progress.totalSkipped}`);

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
