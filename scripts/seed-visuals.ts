#!/usr/bin/env tsx
/**
 * Seed Visual Resources for Layer 7 (Visual Theory)
 *
 * This script:
 * 1. Creates Layer 7 lessons for all topics
 * 2. Assigns pre-built diagram components to relevant topics
 * 3. Searches Wikimedia Commons for 3-5 relevant images per topic
 * 4. Creates VisualResource records
 *
 * Usage:
 *   npx tsx scripts/seed-visuals.ts                    # Full run
 *   npx tsx scripts/seed-visuals.ts --dry-run           # Preview only
 *   npx tsx scripts/seed-visuals.ts --subject AN        # Anatomy only
 *   npx tsx scripts/seed-visuals.ts --resume            # Resume from last checkpoint
 *   npx tsx scripts/seed-visuals.ts --diagrams-only     # Only seed diagram components (no Wikimedia)
 *   npx tsx scripts/seed-visuals.ts --batch-size 50     # Process 50 topics per batch
 */

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import pg from "pg";
import * as fs from "fs";
import * as path from "path";

// ─── Configuration ──────────────────────────────────────────────────

const PROGRESS_FILE = "/tmp/visual-seed-progress.json";
const WIKIMEDIA_RATE_LIMIT_MS = 2000; // 2 sec between requests
const MAX_IMAGES_PER_TOPIC = 5;
const MIN_IMAGES_PER_TOPIC = 1;

// ─── Topic → Diagram Component Mapping ──────────────────────────────

const TOPIC_DIAGRAM_MAP: Record<string, { component: string; type: "SVG_DIAGRAM" | "ANIMATED"; title: string; description: string; category: string; tags: string[] }[]> = {
  // Anatomy
  "AN-MOD-01-TOP-05": [{ component: "BrachialPlexusSVG", type: "SVG_DIAGRAM", title: "Brachial Plexus Interactive Diagram", description: "Interactive tree diagram showing roots (C5-T1), trunks, divisions, cords, and terminal branches with mnemonic", category: "ANATOMY", tags: ["brachial_plexus", "nerves", "upper_limb"] }],
  "AN-MOD-03-TOP-04": [{ component: "HeartChambersDiagram", type: "SVG_DIAGRAM", title: "Heart: 4 Chambers & Valves", description: "Interactive heart diagram with clickable chambers, valves, and blood flow arrows", category: "ANATOMY", tags: ["heart", "chambers", "valves", "cardiac"] }],
  "AN-MOD-03-TOP-05": [{ component: "HeartChambersDiagram", type: "SVG_DIAGRAM", title: "Heart: 4 Chambers & Valves", description: "Interactive heart diagram with clickable chambers, valves, and blood flow arrows", category: "ANATOMY", tags: ["heart", "chambers", "valves", "cardiac"] }],
  "AN-MOD-07-TOP-06": [{ component: "CircleOfWillisSVG", type: "SVG_DIAGRAM", title: "Circle of Willis", description: "Cerebral arterial circle showing anterior and posterior circulations with territory supply", category: "ANATOMY", tags: ["cerebral", "arteries", "circle_of_willis"] }],
  "AN-MOD-07-TOP-04": [{ component: "CranialNervesDiagram", type: "SVG_DIAGRAM", title: "12 Cranial Nerves", description: "All cranial nerves with exit foramina, types (sensory/motor/mixed), and functions", category: "ANATOMY", tags: ["cranial_nerves", "skull", "foramina"] }],
  "AN-MOD-07-TOP-05": [{ component: "SpinalCordTractsSVG", type: "SVG_DIAGRAM", title: "Spinal Cord Cross-Section", description: "Ascending and descending tracts with clinical lesion effects", category: "ANATOMY", tags: ["spinal_cord", "tracts", "neuroanatomy"] }],
  "AN-MOD-09-TOP-01": [{ component: "SarcomereDiagram", type: "SVG_DIAGRAM", title: "Sarcomere Structure", description: "Z lines, A band, I band, H zone with relaxed vs contracted toggle", category: "ANATOMY", tags: ["sarcomere", "muscle", "contraction"] }],
  "AN-MOD-05-TOP-01": [{ component: "NephronDiagram", type: "SVG_DIAGRAM", title: "Nephron Structure", description: "All nephron segments with reabsorption and secretion details", category: "ANATOMY", tags: ["nephron", "kidney", "renal"] }],
  "AN-MOD-03-TOP-01": [{ component: "ThoraxCrossSection", type: "SVG_DIAGRAM", title: "Thorax Cross-Section", description: "CT-level cross section showing heart, lungs, great vessels, and mediastinal structures", category: "ANATOMY", tags: ["thorax", "cross_section", "mediastinum"] }],
  "AN-MOD-07-TOP-08": [{ component: "DermatomeMap", type: "SVG_DIAGRAM", title: "Dermatome Map", description: "Body dermatome regions with key landmarks (C6=thumb, T4=nipple, T10=umbilicus)", category: "ANATOMY", tags: ["dermatomes", "spinal", "sensory"] }],

  // Physiology
  "PY-MOD-03-TOP-01": [
    { component: "CardiacCycleAnimation", type: "ANIMATED", title: "Cardiac Cycle Animation", description: "6-phase animated cardiac cycle with pressure values, ECG correlation, and valve status", category: "PHYSIOLOGY", tags: ["cardiac_cycle", "systole", "diastole"] },
    { component: "PressureVolumeLoop", type: "SVG_DIAGRAM", title: "Pressure-Volume Loop", description: "LV PV loop with preload, afterload, and contractility changes", category: "PHYSIOLOGY", tags: ["pv_loop", "cardiac", "ventricular"] },
  ],
  "PY-MOD-03-TOP-02": [{ component: "ECGWavesDiagram", type: "SVG_DIAGRAM", title: "ECG Waves & Intervals", description: "Labeled ECG with clickable waves showing normal values and abnormalities", category: "CLINICAL", tags: ["ecg", "waves", "intervals"] }],
  "PY-MOD-03-TOP-04": [{ component: "FrankStarlingCurve", type: "SVG_DIAGRAM", title: "Frank-Starling Curve", description: "Interactive graph showing normal, exercise, and heart failure states", category: "PHYSIOLOGY", tags: ["frank_starling", "cardiac_output", "preload"] }],
  "PY-MOD-04-TOP-03": [{ component: "OxygenDissociationCurve", type: "SVG_DIAGRAM", title: "O₂-Hb Dissociation Curve", description: "Sigmoid curve with right/left shift toggles and Bohr effect explanation", category: "PHYSIOLOGY", tags: ["oxygen", "hemoglobin", "dissociation"] }],
  "PY-MOD-05-TOP-03": [{ component: "CountercurrentAnimation", type: "ANIMATED", title: "Countercurrent Multiplier", description: "Animated osmolarity gradient building in Loop of Henle", category: "PHYSIOLOGY", tags: ["countercurrent", "loop_of_henle", "concentration"] }],
  "PY-MOD-01-TOP-03": [{ component: "ActionPotentialAnimation", type: "ANIMATED", title: "Action Potential Animation", description: "Animated AP phases with ion channel states and voltage changes", category: "PHYSIOLOGY", tags: ["action_potential", "membrane", "depolarization"] }],
  "PY-MOD-05-TOP-01": [{ component: "JGAFeedbackDiagram", type: "SVG_DIAGRAM", title: "JGA Tubuloglomerular Feedback", description: "Interactive JGA with afferent/efferent arterioles, macula densa, and feedback loop", category: "PHYSIOLOGY", tags: ["jga", "tubuloglomerular", "feedback"] }],
  "PY-MOD-05-TOP-02": [{ component: "RAASCascade", type: "SVG_DIAGRAM", title: "RAAS Cascade", description: "Renin-Angiotensin-Aldosterone system with drug targets", category: "PHYSIOLOGY", tags: ["raas", "renin", "angiotensin"] }],

  // Biochemistry
  "BI-MOD-03-TOP-01": [{ component: "GlycolysisPathway", type: "SVG_DIAGRAM", title: "Glycolysis Pathway", description: "10-step pathway with enzymes, ATP/NADH yield, and regulation", category: "BIOCHEMISTRY", tags: ["glycolysis", "glucose", "metabolism"] }],
  "BI-MOD-03-TOP-02": [
    { component: "TCACycleDiagram", type: "SVG_DIAGRAM", title: "TCA (Krebs) Cycle", description: "Circular pathway with 8 intermediates, enzymes, and cofactor yield", category: "BIOCHEMISTRY", tags: ["tca", "krebs", "citric_acid"] },
    { component: "ETCChainDiagram", type: "SVG_DIAGRAM", title: "Electron Transport Chain", description: "Complexes I-V with electron flow, proton gradient, and inhibitors", category: "BIOCHEMISTRY", tags: ["etc", "oxidative_phosphorylation", "mitochondria"] },
  ],
  "BI-MOD-04-TOP-02": [{ component: "UreaCycleDiagram", type: "SVG_DIAGRAM", title: "Urea Cycle", description: "Mitochondrial and cytoplasmic compartments with enzyme deficiency diseases", category: "BIOCHEMISTRY", tags: ["urea_cycle", "nitrogen", "ammonia"] }],
  "BI-MOD-04-TOP-01": [{ component: "AminoAcidMetabolism", type: "SVG_DIAGRAM", title: "Amino Acid Metabolism", description: "Central role of glutamate, transamination, and deamination pathways", category: "BIOCHEMISTRY", tags: ["amino_acid", "transamination", "deamination"] }],
  "BI-MOD-02-TOP-03": [{ component: "HemeSynthesisPathway", type: "SVG_DIAGRAM", title: "Heme Synthesis Pathway", description: "8-step pathway with porphyria types and lead poisoning targets", category: "BIOCHEMISTRY", tags: ["heme", "porphyria", "synthesis"] }],
  "BI-MOD-01-TOP-01": [{ component: "DNAReplicationDiagram", type: "SVG_DIAGRAM", title: "DNA Replication Fork", description: "Leading/lagging strands with enzymes, Okazaki fragments, and drug targets", category: "BIOCHEMISTRY", tags: ["dna", "replication", "polymerase"] }],

  // Pathology
  "PA-MOD-01-TOP-03": [{ component: "InflammationCascade", type: "ANIMATED", title: "Acute Inflammation Cascade", description: "Sequential steps from injury to resolution with mediators", category: "PATHOLOGY", tags: ["inflammation", "acute", "mediators"] }],
  "PA-MOD-03-TOP-06": [{ component: "CoagulationCascade", type: "SVG_DIAGRAM", title: "Coagulation Cascade", description: "Intrinsic, extrinsic, and common pathways with lab tests and drug targets", category: "PATHOLOGY", tags: ["coagulation", "clotting", "hemostasis"] }],
  "PA-MOD-02-TOP-02": [
    { component: "CellCycleDiagram", type: "SVG_DIAGRAM", title: "Cell Cycle Phases", description: "G1→S→G2→M with checkpoints, CDK-cyclins, and tumor suppressors", category: "PATHOLOGY", tags: ["cell_cycle", "mitosis", "checkpoints"] },
    { component: "MetastasisSteps", type: "SVG_DIAGRAM", title: "Metastasis Steps", description: "Sequential invasion, intravasation, extravasation, and colonization", category: "PATHOLOGY", tags: ["metastasis", "invasion", "cancer"] },
  ],
  "PA-MOD-01-TOP-05": [{ component: "ComplementPathway", type: "SVG_DIAGRAM", title: "Complement Pathways", description: "Classical, alternative, and lectin pathways converging on MAC formation", category: "PATHOLOGY", tags: ["complement", "innate_immunity", "mac"] }],

  // Pharmacology
  "PH-MOD-01-TOP-01": [{ component: "DrugReceptorCurves", type: "SVG_DIAGRAM", title: "Dose-Response Curves", description: "Full agonist, partial agonist, competitive and non-competitive antagonist curves", category: "PHARMACOLOGY", tags: ["dose_response", "agonist", "antagonist"] }],
  "PH-MOD-01-TOP-02": [{ component: "PharmacokineticsDiagram", type: "SVG_DIAGRAM", title: "Pharmacokinetics (ADME)", description: "Absorption, distribution, metabolism, excretion with plasma curve", category: "PHARMACOLOGY", tags: ["adme", "pharmacokinetics", "bioavailability"] }],
  "PH-MOD-02-TOP-01": [{ component: "AutonomicReceptorMap", type: "SVG_DIAGRAM", title: "Autonomic Receptor Map", description: "Sympathetic vs parasympathetic effects on target organs with receptor types", category: "PHARMACOLOGY", tags: ["autonomic", "sympathetic", "parasympathetic"] }],
  "PH-MOD-09-TOP-01": [{ component: "AntibioticTargets", type: "SVG_DIAGRAM", title: "Antibiotic Target Sites", description: "Bacterial cell with drug classes at each target site and resistance mechanisms", category: "PHARMACOLOGY", tags: ["antibiotic", "bacterial", "resistance"] }],

  // Clinical
  "IM-MOD-01-TOP-03": [{ component: "ABGAlgorithm", type: "SVG_DIAGRAM", title: "ABG Interpretation Algorithm", description: "Decision tree for acid-base disorders with compensation rules", category: "CLINICAL", tags: ["abg", "acid_base", "arterial_blood_gas"] }],
  "SU-MOD-01-TOP-01": [
    { component: "TraumaAssessment", type: "SVG_DIAGRAM", title: "ATLS Primary Survey (ABCDE)", description: "Airway, Breathing, Circulation, Disability, Exposure assessment flowchart", category: "CLINICAL", tags: ["trauma", "atls", "primary_survey"] },
    { component: "GCSChart", type: "SVG_DIAGRAM", title: "Glasgow Coma Scale", description: "Interactive GCS scoring with severity classification", category: "CLINICAL", tags: ["gcs", "coma", "neurological"] },
  ],
};

// Subject-specific search terms for Wikimedia
const SUBJECT_SEARCH_TERMS: Record<string, string[]> = {
  AN: ["anatomy", "anatomical", "Gray's anatomy"],
  PY: ["physiology", "physiological", "mechanism"],
  BI: ["biochemistry", "metabolic pathway", "enzyme"],
  PA: ["pathology", "histopathology", "disease"],
  PH: ["pharmacology", "drug", "mechanism of action"],
  MI: ["microbiology", "bacteria", "virus", "microscopy"],
  FO: ["forensic medicine", "medicolegal"],
  CM: ["community medicine", "epidemiology", "public health"],
  IM: ["internal medicine", "clinical", "diagnosis"],
  SU: ["surgery", "surgical", "operative"],
  OG: ["obstetrics", "gynecology", "pregnancy"],
  PE: ["pediatrics", "child", "neonatal"],
  OP: ["ophthalmology", "eye", "retina"],
  EN: ["otolaryngology", "ENT", "ear nose throat"],
  OR: ["orthopedics", "bone", "fracture", "joint"],
  DE: ["dermatology", "skin", "dermatitis"],
  PS: ["psychiatry", "mental health", "disorder"],
  AN2: ["anesthesia", "anesthesiology"],
  RA: ["radiology", "imaging", "X-ray", "CT scan"],
};

// ─── Types ──────────────────────────────────────────────────────────

interface Progress {
  completedTopics: string[];
  lastTopicCode: string | null;
  totalCreated: number;
  totalDiagrams: number;
  totalImages: number;
  errors: string[];
}

// ─── Wikimedia Search ───────────────────────────────────────────────

async function searchWikimediaImages(query: string, maxResults: number = 5): Promise<any[]> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: `${query} medical`,
    gsrnamespace: "6",
    gsrlimit: String(maxResults),
    prop: "imageinfo",
    iiprop: "url|extmetadata|size|mime",
    iiurlwidth: "800",
    origin: "*",
  });

  try {
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
    const data = await response.json();
    if (!data.query?.pages) return [];

    return Object.values(data.query.pages)
      .filter((page: any) => {
        const mime = page.imageinfo?.[0]?.mime;
        return mime?.startsWith("image/") && !mime?.includes("gif");
      })
      .map((page: any) => {
        const info = page.imageinfo[0];
        const meta = info.extmetadata || {};
        const license = meta.LicenseShortName?.value || "";
        const normalizedLicense = normalizeLicense(license);
        if (!normalizedLicense) return null;

        return {
          imageUrl: info.thumburl || info.url,
          title: (meta.ObjectName?.value || page.title || "").replace("File:", "").substring(0, 200),
          imageAlt: (meta.ImageDescription?.value?.replace(/<[^>]*>/g, "") || "").substring(0, 500),
          attribution: `${(meta.Artist?.value?.replace(/<[^>]*>/g, "") || "Unknown").substring(0, 200)}, Wikimedia Commons, ${license}`,
          license: normalizedLicense,
        };
      })
      .filter(Boolean);
  } catch (err) {
    console.error(`  Wikimedia search failed for "${query}":`, err);
    return [];
  }
}

function normalizeLicense(license: string): string | null {
  const l = license.toLowerCase();
  if (l.includes("public domain") || l.includes("pd") || l === "cc0") return "PUBLIC_DOMAIN";
  if (l.includes("cc-by-sa") || l.includes("cc by-sa")) return "CC_BY_SA";
  if (l.includes("cc-by-nc") || l.includes("cc by-nc")) return "CC_BY_NC";
  if (l.includes("cc-by") || l.includes("cc by")) return "CC_BY";
  return null;
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const resume = args.includes("--resume");
  const diagramsOnly = args.includes("--diagrams-only");
  const subjectFilter = args.includes("--subject") ? args[args.indexOf("--subject") + 1] : null;
  const batchSize = args.includes("--batch-size") ? parseInt(args[args.indexOf("--batch-size") + 1]) : 100;

  console.log("=== Visual Content Seeder ===");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Subject filter: ${subjectFilter || "ALL"}`);
  console.log(`Diagrams only: ${diagramsOnly}`);
  console.log(`Batch size: ${batchSize}`);
  console.log();

  // Connect to database
  const connectionString = process.env.DATABASE_URL || "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);

  // Load progress
  let progress: Progress = {
    completedTopics: [],
    lastTopicCode: null,
    totalCreated: 0,
    totalDiagrams: 0,
    totalImages: 0,
    errors: [],
  };

  if (resume && fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"));
    console.log(`Resuming from checkpoint: ${progress.completedTopics.length} topics already done`);
  }

  try {
    // Fetch all topics
    const topics = await prisma.topic.findMany({
      include: {
        module: { include: { subject: true } },
        lessons: { where: { layer: 7 } },
      },
      orderBy: [{ module: { subject: { sortOrder: "asc" } } }, { module: { sortOrder: "asc" } }, { sortOrder: "asc" }],
    });

    // Filter by subject if specified
    const filteredTopics = topics.filter((t: any) => {
      if (subjectFilter && t.module.subject.code !== subjectFilter) return false;
      if (resume && progress.completedTopics.includes(t.code)) return false;
      return true;
    });

    console.log(`Found ${filteredTopics.length} topics to process (${topics.length} total)`);
    console.log();

    let processed = 0;
    let batchCount = 0;

    for (const topic of filteredTopics) {
      if (batchCount >= batchSize) {
        console.log(`\nBatch limit (${batchSize}) reached. Run with --resume to continue.`);
        break;
      }

      const subjectCode = (topic as any).module.subject.code;
      const topicName = topic.name;
      processed++;
      batchCount++;

      console.log(`[${processed}/${filteredTopics.length}] ${topic.code}: ${topicName} (${subjectCode})`);

      // Check if Layer 7 lesson already exists
      let layer7Lesson = (topic as any).lessons[0];

      if (!layer7Lesson) {
        if (dryRun) {
          console.log(`  Would create Layer 7 lesson for: ${topicName}`);
        } else {
          layer7Lesson = await (prisma.lesson as any).create({
            data: {
              topicId: topic.id,
              moduleId: topic.moduleId,
              title: `Visual Theory: ${topicName}`,
              slug: `${topic.code.toLowerCase()}-visual-theory`,
              layer: 7,
              contentMd: `# Visual Theory: ${topicName}\n\nExplore interactive diagrams, animations, and medical illustrations for this topic.`,
              summary: `Visual learning resources for ${topicName}`,
              estimatedMinutes: 15,
              status: "PUBLISHED",
              sortOrder: 7,
            },
          });
          console.log(`  Created Layer 7 lesson: ${layer7Lesson.id}`);
        }
      } else {
        console.log(`  Layer 7 lesson already exists: ${layer7Lesson.id}`);
      }

      // 1. Seed diagram components if this topic has a mapping
      const diagrams = TOPIC_DIAGRAM_MAP[topic.code];
      if (diagrams) {
        for (const diagram of diagrams) {
          if (dryRun) {
            console.log(`  Would add diagram: ${diagram.component} (${diagram.type})`);
          } else if (layer7Lesson) {
            // Check if already exists
            const existing = await (prisma as any).visualResource.findFirst({
              where: { lessonId: layer7Lesson.id, componentName: diagram.component },
            });
            if (!existing) {
              await (prisma as any).visualResource.create({
                data: {
                  lessonId: layer7Lesson.id,
                  type: diagram.type,
                  title: diagram.title,
                  description: diagram.description,
                  componentName: diagram.component,
                  category: diagram.category,
                  tags: diagram.tags,
                  sortOrder: progress.totalDiagrams,
                },
              });
              progress.totalDiagrams++;
              console.log(`  Added diagram: ${diagram.component}`);
            } else {
              console.log(`  Diagram already exists: ${diagram.component}`);
            }
          }
        }
      }

      // 2. Search Wikimedia for relevant images (unless --diagrams-only)
      if (!diagramsOnly && layer7Lesson && !dryRun) {
        const subjectTerms = SUBJECT_SEARCH_TERMS[subjectCode] || [];

        // Try multiple search queries — broader to narrow
        const queries = [
          `${topicName} ${subjectTerms[0] || ""} anatomy diagram`.trim(),
          `${topicName} medical illustration`,
          `${topicName.split(/[&:,]/).map(s => s.trim())[0]} ${subjectTerms[0] || ""}`.trim(),
        ];

        let images: any[] = [];
        for (const searchQuery of queries) {
          images = await searchWikimediaImages(searchQuery, MAX_IMAGES_PER_TOPIC);
          if (images.length >= MIN_IMAGES_PER_TOPIC) break;
          await new Promise(resolve => setTimeout(resolve, 1000)); // small delay between retries
        }

        if (images.length >= MIN_IMAGES_PER_TOPIC) {
          for (let i = 0; i < images.length; i++) {
            const img = images[i];
            // Check if this image URL already exists for this lesson
            const existing = await (prisma as any).visualResource.findFirst({
              where: { lessonId: layer7Lesson.id, imageUrl: img.imageUrl },
            });
            if (!existing) {
              await (prisma as any).visualResource.create({
                data: {
                  lessonId: layer7Lesson.id,
                  type: "IMAGE",
                  title: img.title,
                  description: `Medical illustration related to ${topicName}`,
                  imageUrl: img.imageUrl,
                  imageAlt: img.imageAlt,
                  attribution: img.attribution,
                  license: img.license,
                  category: subjectCode === "AN" ? "ANATOMY" : subjectCode === "PY" ? "PHYSIOLOGY" : subjectCode === "BI" ? "BIOCHEMISTRY" : subjectCode === "PA" ? "PATHOLOGY" : subjectCode === "PH" ? "PHARMACOLOGY" : "CLINICAL",
                  tags: [subjectCode.toLowerCase(), ...topicName.toLowerCase().split(" ").slice(0, 3)],
                  sortOrder: 100 + i,
                },
              });
              progress.totalImages++;
            }
          }
          console.log(`  Added ${images.length} Wikimedia images`);
        } else {
          console.log(`  Only found ${images.length} images (min ${MIN_IMAGES_PER_TOPIC}) — skipping`);
        }

        // Rate limit
        await new Promise(resolve => setTimeout(resolve, WIKIMEDIA_RATE_LIMIT_MS));
      } else if (!diagramsOnly && dryRun) {
        console.log(`  Would search Wikimedia for: "${topicName}"`);
      }

      // Update progress
      progress.completedTopics.push(topic.code);
      progress.lastTopicCode = topic.code;
      progress.totalCreated++;

      // Save progress every 10 topics
      if (processed % 10 === 0) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
        console.log(`  [checkpoint saved: ${progress.completedTopics.length} topics]`);
      }
    }

    // Final save
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

    console.log("\n=== Summary ===");
    console.log(`Topics processed: ${batchCount}`);
    console.log(`Total completed: ${progress.completedTopics.length}`);
    console.log(`Diagrams created: ${progress.totalDiagrams}`);
    console.log(`Images created: ${progress.totalImages}`);
    console.log(`Errors: ${progress.errors.length}`);
    if (progress.errors.length > 0) {
      console.log("Errors:", progress.errors.slice(-5));
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

main();
