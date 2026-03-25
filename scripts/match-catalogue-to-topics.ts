#!/usr/bin/env tsx
/**
 * Match the local Wikimedia catalogue to empty MBBS topics.
 *
 * This does ALL matching locally — no API calls needed.
 * Uses the catalogue built by build-image-catalogue.ts.
 *
 * Usage:
 *   npx tsx scripts/match-catalogue-to-topics.ts --dry-run
 *   npx tsx scripts/match-catalogue-to-topics.ts
 *   npx tsx scripts/match-catalogue-to-topics.ts --subject AN
 *   npx tsx scripts/match-catalogue-to-topics.ts --threshold 10  # Lower match threshold
 */

import fs from "fs";
import pg from "pg";

const CATALOGUE_FILE = "/tmp/wikimedia-medical-catalogue.json";
const DB_URL =
  process.env.DIRECT_DATABASE_URL ||
  "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const subjectFilter = args.includes("--subject")
  ? args[args.indexOf("--subject") + 1]
  : null;
const threshold = args.includes("--threshold")
  ? parseInt(args[args.indexOf("--threshold") + 1])
  : 15;

interface CatalogueEntry {
  filename: string;
  thumbUrl: string;
  categories: string[];
  width: number;
  license: string;
}

// COMPREHENSIVE synonym/keyword map for matching
// Key = word that appears in topic names → Values = words likely in filenames
const KEYWORD_MAP: Record<string, string[]> = {
  // Anatomy terms
  heart: [
    "heart", "cardiac", "coronary", "myocardium", "atrium", "ventricle",
    "valve", "aortic", "mitral", "tricuspid", "pericardium",
  ],
  brain: [
    "brain", "cerebral", "cerebrum", "cortex", "cerebellum", "brainstem",
    "thalamus", "hypothalamus", "hippocampus", "basal_ganglia", "meninges",
  ],
  lung: [
    "lung", "pulmonary", "bronchus", "bronchi", "alveol", "pleura",
    "respiratory", "trachea",
  ],
  kidney: [
    "kidney", "renal", "nephron", "glomerul", "tubul", "ureter",
    "cortex_kidney",
  ],
  liver: [
    "liver", "hepat", "hepatic", "biliary", "gallbladder", "portal", "bile",
  ],
  stomach: ["stomach", "gastric", "pylor", "fundus_stomach", "antrum"],
  intestine: [
    "intestin", "bowel", "colon", "rectum", "cecum", "ileum", "jejunum",
    "duodenum", "appendix",
  ],
  bone: [
    "bone", "skeleton", "skeletal", "osteo", "periosteum", "marrow",
    "cortical_bone",
  ],
  muscle: [
    "muscle", "muscular", "skeletal_muscle", "smooth_muscle",
    "cardiac_muscle", "tendon", "fascia",
  ],
  nerve: [
    "nerve", "neural", "neuron", "axon", "synapse", "ganglion", "plexus",
    "myelin",
  ],
  blood: [
    "blood", "erythrocyte", "leukocyte", "platelet", "hemoglobin", "plasma",
    "serum",
  ],
  skin: [
    "skin", "dermis", "epidermis", "cutaneous", "integument", "melanocyte",
  ],
  eye: [
    "eye", "ocular", "retina", "cornea", "lens", "iris", "pupil", "optic",
  ],
  ear: ["ear", "cochlea", "tympan", "ossicle", "vestibul", "auditory"],
  thyroid: ["thyroid", "parathyroid", "goiter", "thyroid_gland"],
  pancreas: ["pancreas", "pancreatic", "islet", "insulin", "glucagon"],
  spleen: ["spleen", "splenic"],
  uterus: [
    "uterus", "uterine", "endometrium", "myometrium", "cervix", "ovary",
    "fallopian",
  ],
  breast: ["breast", "mammary", "mammograph"],
  prostate: ["prostate", "prostatic"],
  bladder: ["bladder", "urinary_bladder", "detrusor"],
  adrenal: ["adrenal", "suprarenal", "cortisol", "aldosterone"],
  pituitary: ["pituitary", "hypophysis", "sella"],

  // Skeletal anatomy
  shoulder: ["shoulder", "scapula", "clavicle", "humerus", "glenohumeral"],
  arm: ["arm", "humerus", "biceps", "brachial", "triceps"],
  forearm: ["forearm", "radius", "ulna", "pronator", "supinator"],
  hand: ["hand", "carpal", "metacarpal", "phalanges", "digit"],
  hip: ["hip", "pelvis", "femur", "ilium", "acetabulum"],
  thigh: ["thigh", "femur", "quadriceps", "hamstring"],
  knee: ["knee", "patella", "meniscus", "cruciate"],
  leg: ["leg", "tibia", "fibula", "calf"],
  foot: ["foot", "tarsal", "metatarsal", "calcaneus", "ankle"],
  skull: ["skull", "cranium", "calvaria", "temporal", "frontal_bone"],
  vertebra: ["vertebra", "spine", "spinal", "vertebral", "intervertebral"],
  thorax: ["thorax", "rib", "sternum", "thoracic"],
  abdomen: ["abdomen", "abdominal"],
  pelvis: ["pelvis", "pelvic", "sacrum", "coccyx"],
  neck: ["neck", "cervical", "carotid", "jugular", "larynx", "pharynx"],

  // Vascular
  artery: ["artery", "arterial", "aorta", "carotid", "femoral_artery"],
  vein: ["vein", "venous", "vena_cava", "portal_vein", "jugular_vein"],
  capillary: ["capillary", "microcirculation"],
  lymph: ["lymph", "lymphatic", "lymph_node", "lymphocyte"],

  // Pathology terms
  cancer: [
    "cancer", "tumor", "tumour", "carcinoma", "neoplasm", "malignant",
    "metasta",
  ],
  inflammation: ["inflammat", "inflamed", "edema", "oedema", "swelling"],
  fracture: ["fracture", "broken", "fissure"],
  infection: ["infection", "infected", "abscess", "sepsis"],
  anemia: ["anemia", "anaemia", "iron_deficiency"],
  diabetes: ["diabetes", "diabetic", "glucose", "insulin"],
  hypertension: ["hypertension", "blood_pressure"],
  tuberculosis: ["tuberculosis", "TB", "mycobacterium"],
  malaria: ["malaria", "plasmodium", "mosquito"],
  jaundice: ["jaundice", "icterus", "bilirubin"],
  edema: ["edema", "oedema", "swelling", "effusion"],
  hemorrhage: ["hemorrhage", "haemorrhage", "bleeding"],
  thrombosis: ["thrombosis", "thrombus", "embolism", "clot"],
  ischemia: ["ischemia", "ischaemia", "infarction", "necrosis"],

  // Microbiology terms
  bacteria: [
    "bacteria", "bacterial", "bacillus", "coccus", "streptococcus",
    "staphylococcus",
  ],
  virus: ["virus", "viral", "virion", "capsid"],
  fungus: [
    "fungus", "fungi", "fungal", "yeast", "mold", "aspergillus", "candida",
  ],
  parasite: [
    "parasite", "parasitic", "helminth", "worm", "protozoa", "amoeba",
  ],

  // Clinical / Diagnostic
  ecg: ["ECG", "electrocardiogram", "EKG"],
  xray: ["X-ray", "xray", "radiograph"],
  ct: ["CT_scan", "computed_tomography"],
  mri: ["MRI", "magnetic_resonance"],
  ultrasound: ["ultrasound", "sonograph", "echograph"],
  endoscopy: ["endoscop", "colonoscop", "gastroscop"],

  // Pharmacology
  drug: [
    "drug", "medication", "pharmaceutical", "pill", "tablet", "capsule",
  ],
  receptor: ["receptor", "agonist", "antagonist", "binding"],
  antibiotic: [
    "antibiotic", "antimicrobial", "penicillin", "cephalosporin",
  ],

  // Surgery
  surgery: [
    "surgery", "surgical", "operation", "incision", "suture", "laparoscop",
  ],
  wound: ["wound", "healing", "scar", "suture"],
  hernia: ["hernia", "inguinal", "femoral", "hiatal"],

  // Community Medicine
  vaccine: ["vaccine", "vaccination", "immunization", "immunis"],
  sanitation: ["sanitation", "water", "hygiene", "sewage"],
  nutrition: ["nutrition", "malnutrition", "diet", "vitamin", "deficiency"],
  epidemiology: ["epidemiol", "incidence", "prevalence", "outbreak"],

  // Cell biology
  cell: ["cell", "cellular", "organelle", "membrane"],
  mitochondria: ["mitochondria", "mitochondrial", "ATP"],
  dna: ["DNA", "RNA", "gene", "chromosome", "genetic", "nucleotide"],
  protein: ["protein", "amino", "enzyme", "peptide"],
  ribosome: ["ribosome", "translation", "mRNA"],
  golgi: ["golgi", "apparatus", "vesicle"],
  endoplasmic: ["endoplasmic", "reticulum", "rough_ER", "smooth_ER"],

  // Physiology
  action_potential: ["action_potential", "depolariz", "repolariz", "nerve_impulse"],
  contraction: ["contraction", "actin", "myosin", "sarcomere"],
  respiration: ["respiration", "breathing", "ventilation", "spirometry"],
  digestion: ["digestion", "digestive", "peristalsis", "enzyme"],
  filtration: ["filtration", "glomerular", "tubular", "reabsorption"],
  hormones: ["hormone", "endocrine", "testosterone", "estrogen", "cortisol"],
};

// Subject to category relevance — boost images from matching categories
const SUBJECT_CATEGORY_BOOST: Record<string, string[]> = {
  AN: ["anatomy", "gray", "bone", "muscle", "nerve", "vessel", "joint"],
  PY: ["physiology", "diagram", "heart", "lung", "kidney", "brain"],
  BI: ["cell", "microscop", "diagram", "dna", "protein"],
  PA: ["pathology", "histopath", "tumor", "gross"],
  PH: ["pharmacology", "drug", "mechanism"],
  MI: ["bacteria", "virus", "parasite", "fungal", "cdc", "electron", "micrograph"],
  IM: ["clinical", "heart", "lung", "kidney", "liver", "ecg", "endoscop"],
  SU: ["surgical", "operation", "wound", "hernia"],
  OG: ["obstetric", "gynecol", "uterus", "pregnancy", "ultrasound"],
  PE: ["pediatric", "child", "infant", "neonatal"],
  FM: ["forensic", "wound", "autopsy"],
  CM: ["cdc", "who", "epidemiol", "vaccine", "public_health"],
  OP: ["eye", "ophthalm", "retina", "fundus"],
  EN: ["ear", "nose", "throat", "laryn", "cochlea"],
  DR: ["dermatol", "skin", "lesion", "cutaneous"],
  OR: ["orthoped", "bone", "fracture", "joint", "x-ray"],
  PS: ["brain", "neuro", "psychiatric", "mental"],
  RD: ["x-ray", "ct", "mri", "ultrasound", "radiolog"],
  AS: ["anesthes", "airway", "intubat", "ventilat"],
};

function scoreMatch(
  topicName: string,
  subjectCode: string,
  entry: CatalogueEntry,
): number {
  const topicLower = topicName.toLowerCase();
  const fileLower = entry.filename
    .toLowerCase()
    .replace(/[_\-]+/g, " ")
    .replace(/\.\w+$/, "");

  let score = 0;
  const topicWords = topicLower
    .split(/[\s&,:\-\/\(\)]+/)
    .filter((w) => w.length > 2);

  for (const word of topicWords) {
    // Direct match in filename (strongest signal)
    if (fileLower.includes(word)) {
      score += 15;
      continue;
    }

    // Synonym match
    for (const [key, synonyms] of Object.entries(KEYWORD_MAP)) {
      // Check if topic word maps to a keyword group
      if (
        word.includes(key) ||
        key.includes(word) ||
        synonyms.some((s) => word.includes(s) || s.includes(word))
      ) {
        // Check if any synonym appears in filename
        if (
          fileLower.includes(key) ||
          synonyms.some((s) => fileLower.includes(s.toLowerCase()))
        ) {
          score += 10;
          break;
        }
      }
    }
  }

  // Category relevance boost
  const categoryBoosts = SUBJECT_CATEGORY_BOOST[subjectCode] || [];
  for (const cat of entry.categories) {
    const catLower = cat.toLowerCase();
    if (categoryBoosts.some((boost) => catLower.includes(boost))) {
      score += 5;
      break;
    }
  }

  // Width bonus (prefer higher resolution)
  if (entry.width >= 800) score += 2;
  else if (entry.width >= 500) score += 1;

  // Source quality bonus
  if (fileLower.includes("smart-servier") || fileLower.includes("servier")) score += 3;
  if (fileLower.includes("blausen") || fileLower.includes("bruceblaus")) score += 3;
  if (fileLower.includes("gray")) score += 2;
  if (fileLower.includes("openstax")) score += 2;

  // Penalty for very generic or short filenames
  if (fileLower.length < 10) score -= 5;

  return score;
}

function categoryForSubject(code: string): string {
  const map: Record<string, string> = {
    AN: "ANATOMY", PY: "PHYSIOLOGY", BI: "BIOCHEMISTRY",
    PA: "PATHOLOGY", PH: "PHARMACOLOGY", MI: "MICROBIOLOGY",
    FM: "FORENSIC", CM: "COMMUNITY_MEDICINE",
  };
  return map[code] || "CLINICAL";
}

function licenseType(license: string): string {
  const l = license.toLowerCase();
  if (l.includes("public domain") || l.includes("pd")) return "PUBLIC_DOMAIN";
  if (l.includes("cc-by-sa") || l.includes("cc by-sa")) return "CC_BY_SA";
  if (l.includes("cc-by-nc") || l.includes("cc by-nc")) return "CC_BY_NC";
  if (l.includes("cc-by") || l.includes("cc by")) return "CC_BY";
  return "CC_BY_SA"; // Default to most common
}

async function main() {
  console.log("=== Matching Catalogue to Empty Topics ===\n");

  // Load catalogue
  if (!fs.existsSync(CATALOGUE_FILE)) {
    console.error(
      "Catalogue not found. Run build-image-catalogue.ts first.",
    );
    process.exit(1);
  }

  const catalogue: CatalogueEntry[] = JSON.parse(
    fs.readFileSync(CATALOGUE_FILE, "utf-8"),
  );
  console.log(`Catalogue loaded: ${catalogue.length} images`);
  console.log(`Match threshold: ${threshold}`);
  if (dryRun) console.log("Mode: DRY RUN");
  if (subjectFilter) console.log(`Subject filter: ${subjectFilter}`);
  console.log();

  // Get empty topics from DB
  const pool = new pg.Pool({ connectionString: DB_URL });

  let query = `
    SELECT l.id as lesson_id, t.code as topic_code, t.name as topic_name,
           s.code as subject_code, s.name as subject_name
    FROM "Lesson" l
    JOIN "Topic" t ON l."topicId" = t.id
    JOIN "Module" m ON t."moduleId" = m.id
    JOIN "Subject" s ON m."subjectId" = s.id
    WHERE l.layer = 7
    AND NOT EXISTS (SELECT 1 FROM "VisualResource" v WHERE v."lessonId" = l.id)
  `;
  const params: string[] = [];
  if (subjectFilter) {
    query += ` AND s.code = $1`;
    params.push(subjectFilter);
  }
  query += ` ORDER BY t.code`;

  const emptyTopics = await pool.query(query, params);
  console.log(`Empty topics: ${emptyTopics.rows.length}\n`);

  let filled = 0;
  let totalImages = 0;
  let noMatch = 0;

  for (const topic of emptyTopics.rows) {
    // Score every catalogue image against this topic
    const scored = catalogue
      .map((entry) => ({
        ...entry,
        score: scoreMatch(topic.topic_name, topic.subject_code, entry),
      }))
      .filter((e) => e.score >= threshold) // Minimum relevance threshold
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // Top 3 matches

    if (scored.length === 0) {
      console.log(
        `  ⚠️  ${topic.topic_code}: ${topic.topic_name} — no matches`,
      );
      noMatch++;
      continue;
    }

    console.log(`  ✅ ${topic.topic_code}: ${topic.topic_name}`);
    scored.forEach((s, i) =>
      console.log(`     ${i + 1}. [${s.score}] ${s.filename.substring(0, 80)}`),
    );

    if (!dryRun) {
      for (let i = 0; i < scored.length; i++) {
        const img = scored[i];
        const cleanName = img.filename
          .replace(/\.\w+$/, "")
          .replace(/[_\-]+/g, " ")
          .replace(/ -- Smart-Servier$/, "")
          .trim()
          .substring(0, 200);
        const tags = topic.topic_name
          .toLowerCase()
          .split(/\s+/)
          .filter((w: string) => w.length > 3)
          .slice(0, 5);

        try {
          await pool.query(
            `
            INSERT INTO "VisualResource" (
              id, "lessonId", type, title, description, "imageUrl", "imageAlt",
              attribution, license, category, tags, "sortOrder", "createdAt", "updatedAt"
            )
            VALUES (
              gen_random_uuid()::text,
              $1, 'IMAGE', $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW()
            )
            ON CONFLICT DO NOTHING
          `,
            [
              topic.lesson_id,
              cleanName,
              `Medical illustration for ${topic.topic_name}`,
              img.thumbUrl,
              `${cleanName} — medical illustration`,
              `Wikimedia Commons, ${img.license}`,
              licenseType(img.license),
              categoryForSubject(topic.subject_code),
              `{${[topic.subject_code.toLowerCase(), ...tags].join(",")}}`,
              i,
            ],
          );
          totalImages++;
        } catch (err) {
          // Skip duplicates
        }
      }
      filled++;
    } else {
      filled++;
    }
  }

  // Print final stats
  const stats = await pool.query(`
    SELECT
      COUNT(*) FILTER (WHERE EXISTS (SELECT 1 FROM "VisualResource" v WHERE v."lessonId" = l.id)) as with_visuals,
      COUNT(*) as total
    FROM "Lesson" l WHERE l.layer = 7
  `);

  console.log(`\n=== Results ===`);
  console.log(`Topics matched: ${filled}`);
  console.log(`Topics unmatched: ${noMatch}`);
  console.log(`Images ${dryRun ? "would be " : ""}added: ${totalImages}`);
  console.log(
    `Coverage: ${stats.rows[0].with_visuals}/${stats.rows[0].total} (${Math.round((stats.rows[0].with_visuals / stats.rows[0].total) * 100)}%)`,
  );

  await pool.end();
}

main().catch(console.error);
