#!/usr/bin/env ts-node
/**
 * Seed YouTube videos for all 660 MBBS topics using yt-dlp.
 *
 * No API key needed. Rate limits itself to ~2 requests/sec.
 *
 * Prerequisites:
 *   brew install yt-dlp   (or pip install yt-dlp)
 *
 * Usage:
 *   npx tsx scripts/seed-videos.ts                    # All topics
 *   npx tsx scripts/seed-videos.ts --subject AN       # Only Anatomy
 *   npx tsx scripts/seed-videos.ts --resume           # Resume from last processed
 *   npx tsx scripts/seed-videos.ts --dry-run          # Search but don't save
 *   npx tsx scripts/seed-videos.ts --batch-size 50    # Process N topics then stop
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { searchYouTube } from "../src/lib/video/yt-search";
import { rankVideos } from "../src/lib/video/video-ranker";
import * as fs from "fs";

const directUrl =
  process.env.DIRECT_DATABASE_URL ||
  "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";
const adapter = new PrismaPg({ connectionString: directUrl });
const prisma = new PrismaClient({ adapter });

const PROGRESS_FILE = "/tmp/video-seed-progress.json";
const DELAY_MS = 2000; // 2 seconds between searches

// Parse CLI args
const args = process.argv.slice(2);
const subjectFilter = args.includes("--subject")
  ? args[args.indexOf("--subject") + 1]
  : null;
const resume = args.includes("--resume");
const dryRun = args.includes("--dry-run");
const batchSizeArg = args.includes("--batch-size")
  ? parseInt(args[args.indexOf("--batch-size") + 1])
  : Infinity;

// Build smart search queries for a medical topic
function buildQueries(
  topicName: string,
  subjectName: string,
  _moduleName: string
): string[] {
  const clean = topicName
    .replace(/[&]/g, "and")
    .replace(/[^a-zA-Z0-9\s-]/g, "");
  return [
    `${clean} ${subjectName} MBBS lecture english`,
    `${clean} medical explanation english`,
    `${clean} Marrow Prepladder Dr Najeeb english`,
  ];
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadProgress(): Set<string> {
  try {
    if (resume && fs.existsSync(PROGRESS_FILE)) {
      return new Set(JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8")));
    }
  } catch {
    // ignore
  }
  return new Set();
}

function saveProgress(processed: Set<string>) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify([...processed]));
}

async function main() {
  console.log("🎬 YouTube Video Seeder (yt-dlp — no API key)\n");
  console.log(
    `Options: subject=${subjectFilter || "ALL"}, resume=${resume}, dryRun=${dryRun}, batchSize=${batchSizeArg}\n`
  );

  // Fetch all topics with their subject & module info
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = subjectFilter
    ? { module: { subject: { code: subjectFilter } } }
    : {};

  const topics = await prisma.topic.findMany({
    where,
    include: {
      module: { include: { subject: true } },
      lessons: { where: { layer: 6 }, select: { id: true } },
    },
    orderBy: [
      { module: { subject: { sortOrder: "asc" } } },
      { module: { sortOrder: "asc" } },
      { sortOrder: "asc" },
    ],
  });

  console.log(`📊 Found ${topics.length} topics to process\n`);

  const processed = loadProgress();
  let count = 0;
  let videosAdded = 0;
  let skipped = 0;
  let failed = 0;

  for (const topic of topics) {
    // Check batch size
    if (count >= batchSizeArg) {
      console.log(
        `\n⏸️  Batch limit reached (${batchSizeArg}). Run again with --resume to continue.`
      );
      break;
    }

    // Skip already processed
    if (processed.has(topic.code)) {
      skipped++;
      continue;
    }

    // Skip if Layer 6 already exists
    if (topic.lessons.length > 0) {
      processed.add(topic.code);
      skipped++;
      continue;
    }

    const subject = topic.module.subject;
    const queries = buildQueries(topic.name, subject.name, topic.module.name);

    console.log(
      `[${count + 1}/${topics.length - skipped}] ${topic.code}: ${topic.name}`
    );

    // Search using first 2 queries
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allVideos: any[] = [];
    for (const query of queries.slice(0, 2)) {
      const results = await searchYouTube(query, 8);
      allVideos.push(...results);
      await sleep(DELAY_MS);
    }

    // Deduplicate
    const unique = Array.from(
      new Map(allVideos.map((v) => [v.videoId, v])).values()
    );

    // Rank
    const ranked = rankVideos(unique, topic.name, 5);

    if (ranked.length === 0) {
      console.log(`   ⚠️  No suitable videos found`);
      processed.add(topic.code);
      saveProgress(processed);
      failed++;
      count++;
      continue;
    }

    if (dryRun) {
      console.log(`   🔍 Would add ${ranked.length} videos:`);
      ranked.forEach((v, i) =>
        console.log(
          `      ${i + 1}. [${v.score}] ${v.title} (${v.channelName})`
        )
      );
      processed.add(topic.code);
      count++;
      continue;
    }

    // Create Layer 6 lesson
    const totalMinutes = Math.round(
      ranked.reduce((sum, v) => sum + v.durationSeconds, 0) / 60
    );
    const slug = `${topic.code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-layer-6-video`;

    const contentMd =
      `# ${topic.name} - Video Lectures\n\n` +
      ranked
        .map(
          (v, i) =>
            `### ${i + 1}. ${v.title}\n- **Channel**: ${v.channelName}\n- **Duration**: ${Math.round(v.durationSeconds / 60)} min\n- **Views**: ${v.viewCount.toLocaleString()}\n${v.quality === "RECOMMENDED" ? "⭐ **Recommended**\n" : ""}`
        )
        .join("\n") +
      `\n\n## Tips\n1. Watch the ⭐ Recommended video first\n2. Pause and take notes\n3. Test yourself with Layer 5 (Active Recall) after watching`;

    try {
      const lesson = await prisma.lesson.create({
        data: {
          layer: 6,
          slug,
          title: `${topic.name} - Video Lectures`,
          estimatedMinutes: totalMinutes,
          summary: `${ranked.length} curated videos (${totalMinutes} min total)`,
          contentMd,
          mnemonics: [],
          keyPoints: ranked.map((v) => `${v.title} by ${v.channelName}`),
          textbookRefs: [],
          topicId: topic.id,
          moduleId: topic.moduleId,
          status: "PUBLISHED",
          examTags: ["NEXT_STEP1", "NEET_PG"],
        },
      });

      for (let i = 0; i < ranked.length; i++) {
        const v = ranked[i];
        await prisma.videoResource.create({
          data: {
            lessonId: lesson.id,
            youtubeVideoId: v.videoId,
            youtubeUrl: v.url,
            title: v.title,
            channelName: v.channelName,
            channelUrl: v.channelUrl,
            durationSeconds: v.durationSeconds,
            description: v.reason,
            quality: v.quality,
            language: "en",
            sortOrder: i,
            thumbnailUrl: v.thumbnailUrl,
            viewCount: v.viewCount,
            publishedAt: new Date(v.publishedAt),
          },
        });
      }

      videosAdded += ranked.length;
      console.log(`   ✅ ${ranked.length} videos added (${totalMinutes} min)`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.log(`   ❌ DB error: ${message}`);
      failed++;
    }

    processed.add(topic.code);
    saveProgress(processed);
    count++;
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Processed: ${count}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Videos added: ${videosAdded}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Progress saved to: ${PROGRESS_FILE}`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await (
      prisma as unknown as { $disconnect: () => Promise<void> }
    ).$disconnect();
  });
