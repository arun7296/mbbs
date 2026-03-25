#!/usr/bin/env tsx
/**
 * Map Servier Medical Art images to MBBS topics using keyword matching.
 *
 * Reads the Servier catalogue JSON (from catalogue-servier.ts) and matches
 * images to the 660 MBBS topics by analyzing filenames, descriptions,
 * and Wikimedia categories.
 *
 * Output: prisma/seeds/servier-topic-map.json
 *   { "AN-MOD-01-TOP-01": [{ imageUrl, thumbUrl, title, ... }, ...], ... }
 *
 * Usage:
 *   npx tsx scripts/map-servier-to-topics.ts
 *   npx tsx scripts/map-servier-to-topics.ts --min-score 2   # Higher relevance threshold
 *   npx tsx scripts/map-servier-to-topics.ts --max-per-topic 5
 *   npx tsx scripts/map-servier-to-topics.ts --subject AN     # Anatomy only
 */

import * as fs from "fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import pg from "pg";

// ─── Types ──────────────────────────────────────────────────────────

interface ServierImage {
  title: string;
  filename: string;
  url: string;
  thumbUrl: string;
  description: string;
  categories: string[];
  width: number;
  height: number;
  mime: string;
}

interface ScoredImage {
  image: ServierImage;
  score: number;
  matchReasons: string[];
}

interface TopicMapping {
  topicCode: string;
  topicName: string;
  subjectCode: string;
  images: Array<{
    imageUrl: string;
    thumbUrl: string;
    title: string;
    description: string;
    attribution: string;
    license: string;
    score: number;
    matchReasons: string[];
  }>;
}

// ─── Keyword Maps ───────────────────────────────────────────────────

/** Topic keywords → expanded search terms for matching against Servier filenames */
const MEDICAL_SYNONYMS: Record<string, string[]> = {
  // Organs
  heart: ["heart", "cardiac", "coronary", "myocard", "ventricle", "atrium", "aorta", "valve"],
  liver: ["liver", "hepat", "biliar", "gallbladder", "bile"],
  kidney: ["kidney", "renal", "nephron", "glomerul", "urinar", "ureter"],
  brain: ["brain", "cerebr", "cortex", "cerebellum", "brainstem", "hippocampus", "thalamus"],
  lung: ["lung", "pulmonar", "bronch", "alveol", "respirator", "trachea"],
  stomach: ["stomach", "gastric", "pylor", "fundus", "peptic"],
  intestine: ["intestin", "bowel", "colon", "duoden", "jejun", "ileum", "cecum", "rectum"],
  pancreas: ["pancrea", "insulin", "glucagon", "islet"],
  spleen: ["spleen", "splenic", "splenomegal"],
  thyroid: ["thyroid", "parathyroid", "calcitonin"],
  adrenal: ["adrenal", "suprarenal", "cortisol", "aldosterone"],
  uterus: ["uter", "endometr", "cervix", "ovary", "ovar", "fallopian"],
  prostate: ["prostat"],
  eye: ["eye", "ocular", "retina", "cornea", "lens", "optic", "conjunctiv"],
  ear: ["ear", "cochlea", "vestibular", "tympanic", "auditor"],
  skin: ["skin", "derm", "epiderm", "cutaneous"],
  bone: ["bone", "osseous", "osteocyte", "skeletal", "periosteum"],
  muscle: ["muscle", "myocyte", "sarcomere", "skeletal muscle", "smooth muscle"],
  nerve: ["nerve", "neuron", "synapse", "axon", "dendrit", "neural", "ganglion"],
  blood: ["blood", "erythrocyte", "leukocyte", "platelet", "hemoglobin", "hematopo"],
  lymph: ["lymph", "lymphocyte", "lymph node", "spleen", "thymus"],
  vessel: ["artery", "vein", "capillar", "vascular", "angiogen"],

  // Systems
  "cardiovascular": ["cardiovascular", "circulat", "heart", "vascular"],
  "respiratory": ["respirator", "lung", "bronch", "trachea"],
  "gastrointestinal": ["gastrointestin", "digestiv", "GI tract"],
  "nervous system": ["nervous", "neural", "CNS", "PNS", "brain", "spinal"],
  "endocrine": ["endocrin", "hormone", "pituitary", "thyroid", "adrenal"],
  "reproductive": ["reproduct", "fertil", "gamete", "spermat", "oocyte"],
  "immune": ["immun", "antibod", "antigen", "lymphocyte", "complement"],
  "urinary": ["urinar", "kidney", "bladder", "ureter", "urethra"],
  "musculoskeletal": ["musculoskeletal", "bone", "joint", "cartilage", "tendon"],
  "integumentary": ["integumentar", "skin", "hair", "nail"],

  // Pathology concepts
  inflammation: ["inflammat", "edema", "neutrophil", "macrophage", "cytokine"],
  cancer: ["cancer", "tumor", "neoplasm", "carcinom", "metastas", "oncolog"],
  infection: ["infect", "bacteria", "virus", "fungal", "parasit", "sepsis"],
  thrombosis: ["thromb", "coagulat", "clot", "embol", "DVT"],
  anemia: ["anemia", "anemi", "hemoglobin", "iron deficien"],
  diabetes: ["diabet", "insulin", "glucose", "glycem", "HbA1c"],
  hypertension: ["hypertens", "blood pressure", "antihypertens"],
  fracture: ["fracture", "broken bone", "fixation", "cast"],

  // Cell biology
  cell: ["cell", "cellular", "membran", "organelle", "mitochondri", "nucleus", "cytoplasm"],
  dna: ["DNA", "RNA", "gene", "chromosom", "nucleotide", "replicat", "transcription"],
  protein: ["protein", "amino acid", "peptide", "enzyme", "catalys"],
  lipid: ["lipid", "cholesterol", "fatty acid", "lipoprotein", "phospholipid"],

  // Pharmacology
  drug: ["drug", "medicat", "pharmaceut", "therapeutic"],
  receptor: ["receptor", "agonist", "antagonist", "binding", "ligand"],
  antibiotic: ["antibiotic", "antimicrobial", "antibacterial", "penicillin", "cephalosporin"],

  // Microbiology
  bacteria: ["bacteri", "gram positive", "gram negative", "staphylo", "strepto", "coccus", "bacillus"],
  virus: ["virus", "viral", "HIV", "hepatitis", "influenza", "corona", "retrovir"],
  fungus: ["fungus", "fungal", "candida", "aspergill", "mycosis"],
  parasite: ["parasit", "malaria", "plasmodium", "helminth", "amoeba"],
};

/** Subject code → Servier category keywords that boost relevance */
const SUBJECT_CATEGORY_BOOSTS: Record<string, string[]> = {
  AN: ["anatomy", "bones", "muscles", "heart", "digestive", "respiratory", "nervous", "urinary"],
  PY: ["physiology", "heart", "respiratory", "nervous", "endocrin", "renal"],
  BI: ["cellular", "genetics", "nucleic", "biochem", "metabol", "enzyme"],
  PA: ["pathology", "oncology", "blood", "immunology", "tissue", "histology"],
  PH: ["drug", "receptor", "pharmacol", "medication"],
  MI: ["infectiology", "parasitology", "bacteria", "virus", "fungus", "microbio"],
  IM: ["heart", "pathophysiology", "clinical", "medical", "diagnosis"],
  SU: ["surgery", "surgical", "medical acts", "emergency", "bones fractures"],
  OG: ["reproduction", "embryology", "pregnancy", "uterus", "ovary"],
  PE: ["pediatric", "neonatal", "endocrin", "growth"],
  FM: ["forensic", "medicolegal", "people"],
  CM: ["epidemiology", "public health", "risk factor", "world map"],
  OP: ["ophthalmology", "eye", "retina", "cornea"],
  EN: ["ENT", "ear", "nose", "throat", "larynx"],
  DR: ["dermatology", "skin", "cutaneous"],
  OR: ["orthopedics", "bones", "fracture", "joint", "spine"],
  PS: ["psychiatry", "nervous", "neural", "brain"],
  RD: ["radiology", "imaging", "X-ray", "CT", "MRI"],
  AS: ["anesthesia", "anesthesiology", "airway", "equipment"],
};

// ─── Scoring Functions ──────────────────────────────────────────────

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/[_-]/g, " ").replace(/[^a-z0-9 ]/g, "");
}

/**
 * Score how well a Servier image matches a topic.
 * Higher score = better match.
 */
function scoreImageForTopic(
  image: ServierImage,
  topicName: string,
  subjectCode: string,
): ScoredImage {
  let score = 0;
  const matchReasons: string[] = [];

  const normTitle = normalizeText(image.title);
  const normDesc = normalizeText(image.description);
  const normFilename = normalizeText(image.filename);
  const imageText = `${normTitle} ${normDesc} ${normFilename}`;

  const normTopicName = normalizeText(topicName);
  const topicWords = normTopicName.split(/\s+/).filter((w) => w.length > 2);

  // 1. Direct topic word match in image title/description (strongest signal)
  for (const word of topicWords) {
    if (word.length < 4) continue;
    if (normTitle.includes(word)) {
      score += 3;
      matchReasons.push(`title:${word}`);
    } else if (normDesc.includes(word)) {
      score += 2;
      matchReasons.push(`desc:${word}`);
    } else if (normFilename.includes(word)) {
      score += 2;
      matchReasons.push(`file:${word}`);
    }
  }

  // 2. Synonym expansion matching
  for (const [concept, synonyms] of Object.entries(MEDICAL_SYNONYMS)) {
    const conceptInTopic = topicWords.some(
      (w) => concept.toLowerCase().includes(w) || w.includes(concept.toLowerCase()),
    );
    if (!conceptInTopic) {
      // Also check if topic name contains the concept phrase
      if (!normTopicName.includes(concept.toLowerCase())) continue;
    }

    for (const syn of synonyms) {
      const normSyn = syn.toLowerCase();
      if (imageText.includes(normSyn)) {
        score += 1.5;
        matchReasons.push(`syn:${concept}→${syn}`);
        break; // Only count once per concept
      }
    }
  }

  // 3. Subject-category boost
  const boostTerms = SUBJECT_CATEGORY_BOOSTS[subjectCode] || [];
  for (const term of boostTerms) {
    const normTerm = term.toLowerCase();
    // Check image categories
    for (const cat of image.categories) {
      if (normalizeText(cat).includes(normTerm)) {
        score += 1;
        matchReasons.push(`cat:${cat}`);
        break;
      }
    }
  }

  // 4. Penalize very generic images (likely just icons/symbols)
  if (image.width < 200 || image.height < 200) {
    score -= 1;
  }

  // 5. Bonus for SVG (vector = higher quality for medical diagrams)
  if (image.mime === "image/svg+xml") {
    score += 0.5;
  }

  return { image, score, matchReasons };
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const minScore = args.includes("--min-score")
    ? parseFloat(args[args.indexOf("--min-score") + 1])
    : 3;
  const maxPerTopic = args.includes("--max-per-topic")
    ? parseInt(args[args.indexOf("--max-per-topic") + 1])
    : 5;
  const subjectFilter = args.includes("--subject")
    ? args[args.indexOf("--subject") + 1]
    : null;

  console.log("=== Servier → MBBS Topic Mapper ===\n");
  console.log(`Min relevance score: ${minScore}`);
  console.log(`Max images per topic: ${maxPerTopic}`);
  if (subjectFilter) console.log(`Subject filter: ${subjectFilter}`);
  console.log();

  // Load catalogue
  const cataloguePath = "prisma/seeds/servier-catalogue.json";
  if (!fs.existsSync(cataloguePath)) {
    console.error("ERROR: Servier catalogue not found. Run catalogue-servier.ts first.");
    console.error(`Expected: ${cataloguePath}`);
    process.exit(1);
  }

  const catalogue: ServierImage[] = JSON.parse(fs.readFileSync(cataloguePath, "utf-8"));
  console.log(`Loaded ${catalogue.length} Servier images from catalogue\n`);

  // Connect to database to get topic list
  const connectionString = process.env.DATABASE_URL || "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);

  try {
    // Fetch all topics
    const topics = await prisma.topic.findMany({
      include: {
        module: { include: { subject: true } },
      },
      orderBy: [
        { module: { subject: { sortOrder: "asc" } } },
        { module: { sortOrder: "asc" } },
        { sortOrder: "asc" },
      ],
    });

    const filteredTopics = subjectFilter
      ? topics.filter((t: any) => t.module.subject.code === subjectFilter)
      : topics;

    console.log(`Mapping ${filteredTopics.length} topics to Servier images...\n`);

    const topicMap: Record<string, TopicMapping["images"]> = {};
    let totalMapped = 0;
    let topicsWithImages = 0;

    for (const topic of filteredTopics) {
      const subjectCode = (topic as any).module.subject.code;
      const topicName = topic.name;

      // Score all images against this topic
      const scored: ScoredImage[] = [];
      for (const image of catalogue) {
        const result = scoreImageForTopic(image, topicName, subjectCode);
        if (result.score >= minScore) {
          scored.push(result);
        }
      }

      // Sort by score (descending) and take top N
      scored.sort((a, b) => b.score - a.score);
      const topImages = scored.slice(0, maxPerTopic);

      if (topImages.length > 0) {
        topicMap[topic.code] = topImages.map((s) => ({
          imageUrl: s.image.thumbUrl,
          thumbUrl: s.image.thumbUrl,
          title: s.image.title.substring(0, 200),
          description: s.image.description.substring(0, 500) || `Medical illustration: ${s.image.title}`,
          attribution: "Servier Medical Art by Servier, CC-BY 4.0, via Wikimedia Commons",
          license: "CC_BY",
          score: Math.round(s.score * 10) / 10,
          matchReasons: s.matchReasons.slice(0, 5),
        }));
        totalMapped += topImages.length;
        topicsWithImages++;
      }
    }

    // Save mapping
    const outputPath = "prisma/seeds/servier-topic-map.json";
    fs.writeFileSync(outputPath, JSON.stringify(topicMap, null, 2));

    // Summary
    console.log("\n=== Mapping Summary ===");
    console.log(`Topics with Servier images: ${topicsWithImages} / ${filteredTopics.length}`);
    console.log(`Total image mappings: ${totalMapped}`);
    console.log(`Avg images per matched topic: ${(totalMapped / Math.max(topicsWithImages, 1)).toFixed(1)}`);
    console.log(`Saved to ${outputPath}`);

    // Per-subject breakdown
    const subjectStats: Record<string, { total: number; mapped: number }> = {};
    for (const topic of filteredTopics) {
      const sc = (topic as any).module.subject.code;
      if (!subjectStats[sc]) subjectStats[sc] = { total: 0, mapped: 0 };
      subjectStats[sc].total++;
      if (topicMap[topic.code]) subjectStats[sc].mapped++;
    }
    console.log("\nPer-subject coverage:");
    for (const [code, stats] of Object.entries(subjectStats).sort((a, b) => a[0].localeCompare(b[0]))) {
      const pct = Math.round((stats.mapped / stats.total) * 100);
      console.log(`  ${code}: ${stats.mapped}/${stats.total} (${pct}%)`);
    }
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
