#!/usr/bin/env tsx
/**
 * Crawl Wikimedia Commons medical categories and build a local catalogue.
 * Output: /tmp/wikimedia-medical-catalogue.json
 *
 * This is done ONCE. The catalogue is then used by the matcher script.
 *
 * Categories to crawl (these contain thousands of medical images):
 *  - Servier Medical Art, Gray's Anatomy, Blausen Medical, OpenStax
 *  - Anatomy by organ/region, Histology, Pathology, Radiology
 *  - Microbiology, Pharmacology, Clinical photography
 *
 * Usage:
 *   npx tsx scripts/build-image-catalogue.ts
 *   npx tsx scripts/build-image-catalogue.ts --resume   # Continue from last category
 */

import fs from "fs";

const OUTPUT_FILE = "/tmp/wikimedia-medical-catalogue.json";
const CRAWLED_FILE = "/tmp/wikimedia-crawled-categories.json";
const API = "https://commons.wikimedia.org/w/api.php";
const DELAY_MS = 600; // Respectful rate limiting

// Medical categories on Wikimedia Commons with thousands of images
const CATEGORIES_TO_CRAWL = [
  // Servier (already mostly done, but crawl for completeness)
  "Category:Media from SMART-Servier Medical Art",

  // Gray's Anatomy — the actual category name
  "Category:Gray's Anatomy plates",
  "Category:Images from Gray's Anatomy",

  // Anatomy by region
  "Category:Anatomy of the heart",
  "Category:Anatomy of the brain",
  "Category:Anatomy of the lungs",
  "Category:Anatomy of the kidney",
  "Category:Anatomy of the liver",
  "Category:Anatomy of the eye",
  "Category:Anatomy of the ear",
  "Category:Anatomy of the stomach",
  "Category:Anatomy of muscles",
  "Category:Anatomy of bones",
  "Category:Anatomy of joints",
  "Category:Anatomy of blood vessels",
  "Category:Anatomy of nerves",
  "Category:Anatomy of the skin",
  "Category:Anatomy of the spine",
  "Category:Anatomy of the hand",
  "Category:Anatomy of the foot",
  "Category:Anatomy of the pelvis",
  "Category:Anatomy of the thorax",
  "Category:Anatomy of the abdomen",
  "Category:Anatomy of the neck",

  // Histology
  "Category:Histology",
  "Category:Histopathology",
  "Category:Microscopic images of tissues",

  // Medical diagrams
  "Category:Medical illustrations",
  "Category:Medical diagrams",
  "Category:Diagrams of the human body",

  // Pathology
  "Category:Pathology",
  "Category:Gross pathology",
  "Category:Histopathology of tumors",

  // Radiology
  "Category:Medical X-rays",
  "Category:CT scans",
  "Category:MRI images",
  "Category:Ultrasound images",
  "Category:Radiological images",

  // Microbiology
  "Category:Bacteria images",
  "Category:Virus images",
  "Category:Parasite images",
  "Category:Fungal images",
  "Category:Electron micrographs of microorganisms",
  "Category:CDC images",

  // Pharmacology
  "Category:Pharmacology diagrams",
  "Category:Drug mechanisms of action",

  // Clinical
  "Category:Clinical photographs",
  "Category:Dermatology images",
  "Category:Ophthalmology images",
  "Category:ECG images",
  "Category:Endoscopy images",

  // Blausen Medical (high quality 3D renderings)
  "Category:Blausen Medical",
  "Category:Images from Blausen Medical Communications",

  // OpenStax
  "Category:Images from OpenStax",
  "Category:OpenStax Anatomy and Physiology",

  // Other medical education
  "Category:Medical education materials",
  "Category:Netter-style illustrations",
  "Category:BruceBlaus",
];

interface CatalogueEntry {
  filename: string; // "Gray489.png" or "Heart_anterior_--_Smart-Servier.jpg"
  thumbUrl: string; // Direct CDN URL (upload.wikimedia.org)
  categories: string[]; // Which categories it was found in
  width: number;
  license: string;
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function crawlCategory(category: string): Promise<CatalogueEntry[]> {
  const entries: CatalogueEntry[] = [];
  let cmcontinue = "";

  console.log(`  Crawling: ${category}`);

  do {
    const params = new URLSearchParams({
      action: "query",
      list: "categorymembers",
      cmtitle: category,
      cmtype: "file",
      cmlimit: "500",
      format: "json",
      origin: "*",
      ...(cmcontinue ? { cmcontinue } : {}),
    });

    try {
      const response = await fetch(`${API}?${params}`);
      const data = await response.json();

      const members = data.query?.categorymembers || [];

      if (members.length > 0) {
        // Batch get image info — split into chunks of 50 (API limit)
        const chunks: any[][] = [];
        for (let i = 0; i < members.length; i += 50) {
          chunks.push(members.slice(i, i + 50));
        }

        for (const chunk of chunks) {
          const titles = chunk.map((m: any) => m.title).join("|");
          const infoParams = new URLSearchParams({
            action: "query",
            titles: titles,
            prop: "imageinfo",
            iiprop: "url|size|mime|extmetadata",
            iiurlwidth: "960",
            format: "json",
            origin: "*",
          });

          const infoResponse = await fetch(`${API}?${infoParams}`);
          const infoData = await infoResponse.json();

          for (const page of Object.values(
            infoData.query?.pages || {},
          ) as any[]) {
            if (!page.imageinfo?.[0]) continue;
            const info = page.imageinfo[0];
            const meta = info.extmetadata || {};
            const mime = info.mime || "";

            // Skip non-images and tiny images
            if (!mime.startsWith("image/") || (info.width || 0) < 300) continue;

            const license = (
              meta.LicenseShortName?.value || ""
            ).toLowerCase();
            // Only keep open-access
            if (
              !license.includes("cc") &&
              !license.includes("public domain") &&
              !license.includes("pd") &&
              license !== "gfdl"
            )
              continue;

            entries.push({
              filename: (page.title || "").replace("File:", ""),
              thumbUrl: info.thumburl || info.url,
              categories: [category],
              width: info.width || 0,
              license: meta.LicenseShortName?.value || "Unknown",
            });
          }

          await sleep(DELAY_MS);
        }
      }

      cmcontinue = data.continue?.cmcontinue || "";
      await sleep(DELAY_MS);
    } catch (err) {
      console.error(`  Error crawling ${category}:`, err);
      break;
    }
  } while (cmcontinue);

  console.log(`  Found ${entries.length} images in ${category}`);
  return entries;
}

async function main() {
  console.log("=== Building Wikimedia Medical Image Catalogue ===\n");

  // Load existing catalogue if resuming
  const catalogue: Map<string, CatalogueEntry> = new Map();
  if (fs.existsSync(OUTPUT_FILE)) {
    const existing = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf-8"));
    for (const entry of existing) {
      catalogue.set(entry.filename, entry);
    }
    console.log(`Loaded existing catalogue: ${catalogue.size} images\n`);
  }

  // Track which categories we've already crawled
  let crawledCategories: Set<string> = new Set();
  if (fs.existsSync(CRAWLED_FILE)) {
    crawledCategories = new Set(
      JSON.parse(fs.readFileSync(CRAWLED_FILE, "utf-8")),
    );
  }

  for (const category of CATEGORIES_TO_CRAWL) {
    if (crawledCategories.has(category)) {
      console.log(`  Skipping (already crawled): ${category}`);
      continue;
    }

    const entries = await crawlCategory(category);

    for (const entry of entries) {
      if (catalogue.has(entry.filename)) {
        // Merge categories
        const existing = catalogue.get(entry.filename)!;
        existing.categories = [
          ...new Set([...existing.categories, ...entry.categories]),
        ];
      } else {
        catalogue.set(entry.filename, entry);
      }
    }

    crawledCategories.add(category);

    // Save progress after each category
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify([...catalogue.values()], null, 0),
    );
    fs.writeFileSync(CRAWLED_FILE, JSON.stringify([...crawledCategories]));

    console.log(`  Catalogue total: ${catalogue.size} images\n`);
  }

  console.log(`\n=== Done ===`);
  console.log(`Total unique images: ${catalogue.size}`);
  console.log(`Saved to: ${OUTPUT_FILE}`);
}

main().catch(console.error);
