#!/usr/bin/env tsx
/**
 * Fetch Servier Medical Art catalogue from Wikimedia Commons.
 *
 * Servier Medical Art provides 3,000+ professional medical vector illustrations
 * under CC-BY 4.0 license, all mirrored on Wikimedia Commons.
 *
 * This script:
 * 1. Crawls the Wikimedia Commons "Servier_Medical_Art" category tree
 * 2. Fetches image metadata (URL, thumbnail, description, subcategories)
 * 3. Saves a JSON catalogue for mapping to MBBS topics
 *
 * Usage:
 *   npx tsx scripts/catalogue-servier.ts                    # Full fetch (~30 min)
 *   npx tsx scripts/catalogue-servier.ts --resume           # Resume from checkpoint
 *   npx tsx scripts/catalogue-servier.ts --category "Heart" # Only one subcategory
 *   npx tsx scripts/catalogue-servier.ts --limit 500        # Limit total images
 */

import * as fs from "fs";

const WIKIMEDIA_API = "https://commons.wikimedia.org/w/api.php";
const OUTPUT_FILE = "prisma/seeds/servier-catalogue.json";
const CHECKPOINT_FILE = "/tmp/servier-catalogue-checkpoint.json";
const RATE_LIMIT_MS = 600; // 600ms between requests (polite)

// ─── Types ──────────────────────────────────────────────────────────

interface ServierImage {
  title: string;         // Clean filename (no "File:" prefix, no extension)
  filename: string;      // Original Wikimedia filename
  url: string;           // Full-resolution URL
  thumbUrl: string;      // 800px thumbnail URL
  description: string;   // Cleaned text description
  categories: string[];  // Wikimedia categories this image belongs to
  width: number;
  height: number;
  mime: string;
}

interface Checkpoint {
  fetchedCategories: string[];
  images: ServierImage[];
  totalFetched: number;
}

// ─── Wikimedia API helpers ──────────────────────────────────────────

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function wikimediaFetch(params: Record<string, string>): Promise<any> {
  const searchParams = new URLSearchParams({
    ...params,
    format: "json",
    origin: "*",
  });
  const url = `${WIKIMEDIA_API}?${searchParams}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Wikimedia API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch all members (files and subcategories) of a Wikimedia category.
 */
async function fetchCategoryMembers(
  category: string,
  type: "file" | "subcat" | "file|subcat" = "file|subcat",
): Promise<Array<{ title: string; ns: number }>> {
  const members: Array<{ title: string; ns: number }> = [];
  let cmcontinue = "";

  do {
    const params: Record<string, string> = {
      action: "query",
      list: "categorymembers",
      cmtitle: `Category:${category}`,
      cmtype: type,
      cmlimit: "500",
    };
    if (cmcontinue) params.cmcontinue = cmcontinue;

    const data = await wikimediaFetch(params);
    const batch = data.query?.categorymembers || [];
    members.push(...batch);
    cmcontinue = data.continue?.cmcontinue || "";
    await sleep(RATE_LIMIT_MS);
  } while (cmcontinue);

  return members;
}

/**
 * Fetch image info (URL, size, metadata) for a batch of file titles.
 * Wikimedia allows up to 50 titles per request.
 */
async function fetchImageInfoBatch(fileTitles: string[]): Promise<ServierImage[]> {
  const images: ServierImage[] = [];

  // Process in batches of 50
  for (let i = 0; i < fileTitles.length; i += 50) {
    const batch = fileTitles.slice(i, i + 50);
    const params: Record<string, string> = {
      action: "query",
      titles: batch.join("|"),
      prop: "imageinfo|categories",
      iiprop: "url|size|mime|extmetadata",
      iiurlwidth: "800",
      cllimit: "50",
    };

    const data = await wikimediaFetch(params);
    const pages = data.query?.pages || {};

    for (const page of Object.values(pages) as any[]) {
      if (!page.imageinfo?.[0]) continue;

      const info = page.imageinfo[0];
      const meta = info.extmetadata || {};
      const mime = info.mime || "";

      // Skip non-image files and GIFs
      if (!mime.startsWith("image/") || mime.includes("gif")) continue;

      const cleanTitle = (page.title || "")
        .replace("File:", "")
        .replace(/\.[^.]+$/, "")
        .replace(/_/g, " ");

      const description = (meta.ImageDescription?.value || "")
        .replace(/<[^>]*>/g, "")
        .trim()
        .substring(0, 500);

      const categories = (page.categories || []).map(
        (c: any) => c.title.replace("Category:", ""),
      );

      images.push({
        title: cleanTitle,
        filename: page.title.replace("File:", ""),
        url: info.url,
        thumbUrl: info.thumburl || info.url,
        description,
        categories,
        width: info.width || 0,
        height: info.height || 0,
        mime,
      });
    }

    if (i + 50 < fileTitles.length) {
      await sleep(RATE_LIMIT_MS);
    }
  }

  return images;
}

/**
 * Recursively fetch all images from a category tree.
 */
async function fetchCategoryTree(
  rootCategory: string,
  maxDepth: number = 3,
  checkpoint: Checkpoint,
): Promise<ServierImage[]> {
  const allImages: ServierImage[] = [...checkpoint.images];
  const visited = new Set(checkpoint.fetchedCategories);

  async function crawl(category: string, depth: number) {
    if (depth > maxDepth || visited.has(category)) return;
    visited.add(category);

    console.log(`  ${"  ".repeat(depth)}📂 ${category}`);

    const members = await fetchCategoryMembers(category);

    // Separate files and subcategories
    const files = members.filter((m) => m.ns === 6).map((m) => m.title);
    const subcats = members.filter((m) => m.ns === 14).map((m) => m.title.replace("Category:", ""));

    // Fetch image info for all files in this category
    if (files.length > 0) {
      console.log(`  ${"  ".repeat(depth)}  → ${files.length} files`);
      const images = await fetchImageInfoBatch(files);
      allImages.push(...images);
      console.log(`  ${"  ".repeat(depth)}  → ${images.length} valid images (${allImages.length} total)`);
    }

    // Save checkpoint after each category
    checkpoint.fetchedCategories = Array.from(visited);
    checkpoint.images = allImages;
    checkpoint.totalFetched = allImages.length;
    fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(checkpoint));

    // Recurse into subcategories
    for (const subcat of subcats) {
      await crawl(subcat, depth + 1);
    }
  }

  await crawl(rootCategory, 0);
  return allImages;
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const resumeMode = args.includes("--resume");
  const categoryFilter = args.includes("--category")
    ? args[args.indexOf("--category") + 1]
    : null;
  const limit = args.includes("--limit")
    ? parseInt(args[args.indexOf("--limit") + 1])
    : 0;

  console.log("=== Servier Medical Art Catalogue Builder ===\n");
  console.log(`Mode: ${resumeMode ? "RESUME" : "FRESH"}`);
  if (categoryFilter) console.log(`Category filter: ${categoryFilter}`);
  if (limit) console.log(`Limit: ${limit} images`);
  console.log();

  // Load or initialize checkpoint
  let checkpoint: Checkpoint = {
    fetchedCategories: [],
    images: [],
    totalFetched: 0,
  };

  if (resumeMode && fs.existsSync(CHECKPOINT_FILE)) {
    checkpoint = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, "utf-8"));
    console.log(`Resuming: ${checkpoint.totalFetched} images already fetched, ${checkpoint.fetchedCategories.length} categories done\n`);
  }

  // The root category on Wikimedia Commons
  const rootCategory = categoryFilter
    ? `Servier_Medical_Art_-_${categoryFilter.replace(/ /g, "_")}`
    : "Servier_Medical_Art";

  console.log(`Fetching from: Category:${rootCategory}\n`);

  try {
    const images = await fetchCategoryTree(rootCategory, 3, checkpoint);

    // Deduplicate by filename
    const seen = new Set<string>();
    const uniqueImages = images.filter((img) => {
      if (seen.has(img.filename)) return false;
      seen.add(img.filename);
      return true;
    });

    // Apply limit
    const finalImages = limit ? uniqueImages.slice(0, limit) : uniqueImages;

    console.log(`\n=== Catalogue Summary ===`);
    console.log(`Total images fetched: ${images.length}`);
    console.log(`Unique images: ${uniqueImages.length}`);
    console.log(`Final catalogue: ${finalImages.length}`);

    // Group by top-level category for summary
    const catCounts: Record<string, number> = {};
    for (const img of finalImages) {
      for (const cat of img.categories) {
        if (cat.startsWith("Servier Medical Art")) {
          catCounts[cat] = (catCounts[cat] || 0) + 1;
        }
      }
    }
    console.log("\nBy category:");
    for (const [cat, count] of Object.entries(catCounts).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${cat}: ${count}`);
    }

    // Save catalogue
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalImages, null, 2));
    console.log(`\nSaved to ${OUTPUT_FILE} (${(fs.statSync(OUTPUT_FILE).size / 1024 / 1024).toFixed(1)} MB)`);

    // Clean up checkpoint
    if (fs.existsSync(CHECKPOINT_FILE)) {
      fs.unlinkSync(CHECKPOINT_FILE);
    }
  } catch (err) {
    console.error("\nFatal error:", err);
    console.log("Run with --resume to continue from last checkpoint.");
    process.exit(1);
  }
}

main();
