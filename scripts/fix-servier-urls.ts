#!/usr/bin/env tsx
/**
 * Fix broken Servier image URLs by fetching real URLs from Wikimedia API.
 *
 * The pre-built map used fabricated filenames like "Servier_Medical_Art_-_*.svg"
 * which don't exist. Real Servier files on Wikimedia follow the pattern:
 *   "Category - Subject -- Smart-Servier.png"
 *
 * This script:
 * 1. Deletes all existing broken Servier VisualResources
 * 2. For each topic, searches Wikimedia for "Smart-Servier" images by keyword
 * 3. Gets real upload.wikimedia.org thumbnail URLs via the API
 * 4. Creates new VisualResource records with verified working URLs
 *
 * Usage:
 *   npx tsx scripts/fix-servier-urls.ts --dry-run              # Preview
 *   npx tsx scripts/fix-servier-urls.ts --batch-size 100       # First 100
 *   npx tsx scripts/fix-servier-urls.ts --batch-size 300       # Next batch
 *   npx tsx scripts/fix-servier-urls.ts --resume               # Continue
 *   npx tsx scripts/fix-servier-urls.ts --subject AN           # Anatomy only
 */

import pg from "pg";
import * as fs from "fs";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

// ─── Configuration ──────────────────────────────────────────────────

const WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php";
const RATE_LIMIT_MS = 800;
const PROGRESS_FILE = "/tmp/fix-servier-progress.json";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Search keyword mapping ─────────────────────────────────────────
// Maps topic keywords to Servier-specific search terms.
// Servier images on Wikimedia follow: "Category - Subject -- Smart-Servier.ext"

const SUBJECT_SEARCH_TERMS: Record<string, string[]> = {
  AN: ["anatomy", "skeleton", "bone", "muscle", "organ", "joint", "nerve", "artery", "vein", "body"],
  PY: ["physiology", "heart", "lung", "kidney", "brain", "nerve", "blood", "endocrine", "cell"],
  BI: ["cell", "DNA", "RNA", "enzyme", "protein", "metabolism", "mitochondria", "nucleus", "chromosome"],
  PA: ["pathology", "inflammation", "tumor", "neoplasm", "blood", "immune", "cancer", "cell"],
  PH: ["drug", "receptor", "pharmacology", "medication", "tablet", "syringe", "capsule"],
  MI: ["bacteria", "virus", "parasite", "immune", "vaccine", "infection", "bacterium", "microbe"],
  IM: ["heart", "lung", "kidney", "liver", "brain", "endocrine", "blood", "stomach", "intestine"],
  SU: ["surgery", "wound", "hernia", "breast", "thyroid", "abdomen", "scalpel", "operating"],
  OG: ["uterus", "ovary", "embryo", "pregnancy", "breast", "pelvis", "fetus", "placenta"],
  PE: ["child", "baby", "growth", "vaccine", "nutrition", "infant", "pediatric"],
  FM: ["wound", "injury", "poison", "death", "bone", "skeleton", "toxicology"],
  CM: ["epidemiology", "nutrition", "water", "sanitation", "vaccine", "hospital", "world"],
  OP: ["eye", "retina", "cornea", "lens", "optic", "vision", "ophthalmology"],
  EN: ["ear", "nose", "throat", "larynx", "cochlea", "hearing", "ENT"],
  DR: ["skin", "dermatology", "hair", "nail", "epidermis", "dermis"],
  OR: ["bone", "fracture", "joint", "spine", "muscle", "skeleton", "femur", "vertebra"],
  PS: ["brain", "neuron", "synapse", "neurotransmitter", "psychiatric", "mental"],
  RD: ["imaging", "x-ray", "CT", "MRI", "ultrasound", "scan", "radiology"],
  AS: ["anesthesia", "airway", "ventilation", "pain", "intubation", "mask", "syringe"],
};

// Additional topic-specific keyword overrides
const TOPIC_KEYWORD_OVERRIDES: Record<string, string[]> = {
  // Anatomy
  "heart": ["heart", "cardiac", "coronary", "ventricle", "atrium"],
  "liver": ["liver", "hepatic", "biliary", "gallbladder"],
  "kidney": ["kidney", "renal", "nephron", "glomerulus"],
  "brain": ["brain", "cerebral", "cortex", "cerebellum", "neuron"],
  "lung": ["lung", "pulmonary", "bronchus", "alveolus", "respiratory"],
  "stomach": ["stomach", "gastric", "digestive"],
  "intestine": ["intestine", "colon", "bowel", "digestive"],
  "pancreas": ["pancreas", "insulin"],
  "thyroid": ["thyroid", "endocrine"],
  "spleen": ["spleen"],
  "eye": ["eye", "retina", "cornea", "lens", "optic"],
  "ear": ["ear", "cochlea", "vestibular", "hearing"],
  "skin": ["skin", "dermatology", "epidermis"],
  "bone": ["bone", "skeleton", "osseous", "fracture"],
  "muscle": ["muscle", "skeletal muscle"],
  "nerve": ["nerve", "neuron", "synapse", "neural"],
  "blood": ["blood", "erythrocyte", "leukocyte", "platelet", "hematology"],
  "uterus": ["uterus", "uterine", "endometrium", "gynecology"],
  "ovary": ["ovary", "ovarian", "oocyte"],
  "breast": ["breast", "mammary"],
  "prostate": ["prostate"],
  "vertebra": ["vertebra", "spine", "spinal"],
  "pelvis": ["pelvis", "pelvic"],
  "shoulder": ["shoulder", "scapula"],
  "knee": ["knee", "patella"],
  "hip": ["hip", "femoral"],
  // Pathology/Pharmacology
  "diabetes": ["diabetes", "insulin", "pancreas", "glucose"],
  "hypertension": ["hypertension", "blood pressure", "heart"],
  "cancer": ["cancer", "tumor", "neoplasm", "oncology"],
  "infection": ["infection", "bacteria", "virus", "pathogen"],
  "inflammation": ["inflammation", "immune", "neutrophil"],
  "anemia": ["anemia", "blood", "erythrocyte", "hemoglobin"],
  "fracture": ["fracture", "bone", "skeleton"],
  "pregnancy": ["pregnancy", "embryo", "fetus", "placenta"],
};

// ─── Wikimedia search ───────────────────────────────────────────────

interface WikiImage {
  title: string;
  url: string;
  thumbUrl: string;
  width: number;
  height: number;
}

async function searchServierImages(
  keyword: string,
  limit: number = 5,
): Promise<WikiImage[]> {
  try {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      generator: "search",
      gsrsearch: `Smart-Servier ${keyword}`,
      gsrnamespace: "6",
      gsrlimit: String(limit),
      prop: "imageinfo",
      iiprop: "url|size",
      iiurlwidth: "800",
      origin: "*",
    });

    const response = await fetch(`${WIKIMEDIA_API}?${params}`);
    const data = await response.json();
    if (!data.query?.pages) return [];

    return Object.values(data.query.pages)
      .filter((page: any) => {
        const info = page.imageinfo?.[0];
        if (!info?.url) return false;
        // Must be a real Servier file
        const title = page.title || "";
        if (!title.toLowerCase().includes("smart-servier") && !title.toLowerCase().includes("servier")) return false;
        return info.width >= 200;
      })
      .map((page: any) => {
        const info = page.imageinfo[0];
        return {
          title: (page.title || "").replace("File:", ""),
          url: info.url,
          thumbUrl: info.thumburl || info.url,
          width: info.width,
          height: info.height,
        };
      });
  } catch {
    return [];
  }
}

/**
 * Build search queries for a topic, trying multiple approaches.
 */
function buildSearchQueries(topicName: string, subjectCode: string): string[] {
  const queries: string[] = [];
  const topicLower = topicName.toLowerCase();
  const topicWords = topicName
    .split(/[\s&,:()/]+/)
    .filter((w) => w.length > 3)
    .map((w) => w.toLowerCase());

  // 1. Check for keyword overrides
  for (const [keyword, searchTerms] of Object.entries(TOPIC_KEYWORD_OVERRIDES)) {
    if (topicLower.includes(keyword)) {
      queries.push(searchTerms[0]); // Add the primary search term
      break;
    }
  }

  // 2. First 2 meaningful topic words
  if (topicWords.length >= 2) {
    queries.push(topicWords.slice(0, 2).join(" "));
  }
  if (topicWords.length >= 1) {
    queries.push(topicWords[0]);
  }

  // 3. Subject-specific fallback keywords
  const subjectTerms = SUBJECT_SEARCH_TERMS[subjectCode] || [];
  if (subjectTerms.length > 0 && topicWords.length > 0) {
    queries.push(`${topicWords[0]} ${subjectTerms[0]}`);
  }

  // 4. Pure subject term as last resort
  if (subjectTerms.length > 0) {
    queries.push(subjectTerms[0]);
  }

  // Deduplicate
  return [...new Set(queries)];
}

// ─── Category helper ────────────────────────────────────────────────

function categoryForSubject(code: string): string {
  const map: Record<string, string> = {
    AN: "ANATOMY", PY: "PHYSIOLOGY", BI: "BIOCHEMISTRY",
    PA: "PATHOLOGY", PH: "PHARMACOLOGY", MI: "MICROBIOLOGY",
    FM: "FORENSIC", FO: "FORENSIC", CM: "COMMUNITY_MEDICINE",
  };
  return map[code] || "CLINICAL";
}

// ─── Progress tracking ──────────────────────────────────────────────

interface Progress {
  completedTopics: string[];
  totalAdded: number;
  totalFailed: number;
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const resume = args.includes("--resume");
  const subjectFilter = args.includes("--subject")
    ? args[args.indexOf("--subject") + 1]
    : null;
  const batchSize = args.includes("--batch-size")
    ? parseInt(args[args.indexOf("--batch-size") + 1])
    : 200;

  console.log("=== Fix Servier Image URLs ===\n");
  console.log(`Mode: ${dryRun ? "DRY RUN" : "LIVE"}`);
  console.log(`Batch size: ${batchSize}`);
  if (subjectFilter) console.log(`Subject filter: ${subjectFilter}`);
  if (resume) console.log(`Resuming from checkpoint`);
  console.log();

  // Connect to database
  const connectionString =
    process.env.DIRECT_DATABASE_URL ||
    process.env.DATABASE_URL ||
    "postgresql://localhost:51214/mbbs";
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter } as any);

  // Load progress
  let progress: Progress = {
    completedTopics: [],
    totalAdded: 0,
    totalFailed: 0,
  };
  if (resume && fs.existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"));
    console.log(`Resuming: ${progress.completedTopics.length} topics already done\n`);
  }

  try {
    // Step 1: Delete all broken Servier images (only on first run, not resume)
    if (!resume && !dryRun) {
      const deleted = await (prisma as any).visualResource.deleteMany({
        where: { attribution: { contains: "Servier" } },
      });
      console.log(`Step 1: Deleted ${deleted.count} broken Servier images\n`);
    } else if (!resume && dryRun) {
      const count = await (prisma as any).visualResource.count({
        where: { attribution: { contains: "Servier" } },
      });
      console.log(`Step 1: Would delete ${count} broken Servier images\n`);
    }

    // Step 2: Fetch all Layer 7 lessons with topic info
    const lessons = await (prisma as any).lesson.findMany({
      where: { layer: 7 },
      include: {
        topic: {
          select: {
            code: true,
            name: true,
            module: { select: { subject: { select: { code: true, name: true } } } },
          },
        },
      },
      orderBy: { topic: { code: "asc" } },
    });

    // Filter
    let filtered = lessons.filter((l: any) => {
      if (!l.topic) return false;
      if (subjectFilter && l.topic.module.subject.code !== subjectFilter) return false;
      if (resume && progress.completedTopics.includes(l.topic.code)) return false;
      return true;
    });

    const total = Math.min(filtered.length, batchSize);
    console.log(`Step 2: Processing ${total} of ${filtered.length} remaining topics\n`);

    let processed = 0;

    for (const lesson of filtered) {
      if (processed >= batchSize) {
        console.log(`\nBatch limit reached. Run with --resume for next batch.`);
        break;
      }

      const topic = lesson.topic;
      const subjectCode = topic.module.subject.code;
      const topicName = topic.name;
      processed++;

      // Build search queries
      const queries = buildSearchQueries(topicName, subjectCode);

      let bestImages: WikiImage[] = [];

      for (const query of queries) {
        const images = await searchServierImages(query, 5);
        if (images.length > bestImages.length) {
          bestImages = images;
        }
        if (bestImages.length >= 2) break; // Good enough
        await sleep(RATE_LIMIT_MS);
      }

      if (bestImages.length === 0) {
        progress.totalFailed++;
        if (processed <= 30 || processed % 50 === 0) {
          console.log(
            `[${processed}/${total}] ${topic.code}: ⚠ No Servier images found`,
          );
        }
        progress.completedTopics.push(topic.code);
        continue;
      }

      // Take up to 3 images
      const selected = bestImages.slice(0, 3);

      if (dryRun) {
        console.log(
          `[${processed}/${total}] ${topic.code}: Would add ${selected.length} images`,
        );
        for (const img of selected) {
          console.log(`     → ${img.title.substring(0, 70)}`);
        }
      } else {
        const category = categoryForSubject(subjectCode);
        const tags = topicName
          .toLowerCase()
          .split(/\s+/)
          .filter((w: string) => w.length > 3)
          .slice(0, 4);
        let added = 0;

        for (let j = 0; j < selected.length; j++) {
          const img = selected[j];
          try {
            // Check for duplicates
            const existing = await (prisma as any).visualResource.findFirst({
              where: { lessonId: lesson.id, imageUrl: img.thumbUrl },
            });
            if (existing) continue;

            const cleanTitle = img.title
              .replace(/ -- Smart-Servier\.\w+$/, "")
              .replace(/\.\w+$/, "")
              .replace(/_/g, " ");

            await (prisma as any).visualResource.create({
              data: {
                lessonId: lesson.id,
                type: "IMAGE",
                title: cleanTitle.substring(0, 200),
                description: `Servier Medical Art illustration for ${topicName}`,
                imageUrl: img.thumbUrl || img.url,
                imageAlt: `Medical illustration: ${topicName}`,
                attribution:
                  "Servier Medical Art by Servier, CC-BY 4.0, via Wikimedia Commons",
                license: "CC_BY",
                category,
                tags: [subjectCode.toLowerCase(), "servier", ...tags],
                sortOrder: j,
              },
            });
            added++;
            progress.totalAdded++;
          } catch {
            // Skip duplicates / errors
          }
        }

        if (processed <= 30 || processed % 50 === 0) {
          console.log(
            `[${processed}/${total}] ${topic.code}: ✅ ${added} images`,
          );
        }
      }

      progress.completedTopics.push(topic.code);

      // Checkpoint every 25 topics
      if (processed % 25 === 0) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
        console.log(`  [checkpoint: ${progress.completedTopics.length} done, ${progress.totalAdded} added]`);
      }
    }

    // Final save
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

    // ─── Summary ──────────────────────────────────────────────
    console.log("\n=== Summary ===");
    console.log(`Topics processed: ${processed}`);
    console.log(`Images added: ${progress.totalAdded}`);
    console.log(`Topics without images: ${progress.totalFailed}`);
    console.log(`Total completed: ${progress.completedTopics.length}`);

    // Final stats
    if (!dryRun) {
      const totalVis = await (prisma as any).visualResource.count();
      const servierCount = await (prisma as any).visualResource.count({
        where: { attribution: { contains: "Servier" } },
      });
      const withVis = await (prisma as any).lesson.count({
        where: { layer: 7, visuals: { some: {} } },
      });
      const totalL7 = await (prisma as any).lesson.count({
        where: { layer: 7 },
      });

      console.log(`\n=== Database State ===`);
      console.log(`Servier images: ${servierCount}`);
      console.log(`Total visuals: ${totalVis}`);
      console.log(
        `Coverage: ${withVis}/${totalL7} (${Math.round((withVis / totalL7) * 100)}%)`,
      );

      // Verify a few URLs work
      const sample = await (prisma as any).visualResource.findMany({
        where: {
          attribution: { contains: "Servier" },
          imageUrl: { not: null },
        },
        select: { imageUrl: true },
        take: 3,
      });
      if (sample.length > 0) {
        console.log("\nSample URLs (verify these return HTTP 200):");
        for (const s of sample) {
          console.log(`  ${s.imageUrl}`);
        }
      }
    }
  } catch (err) {
    console.error("Fatal error:", err);
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
