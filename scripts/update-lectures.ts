#!/usr/bin/env tsx
/**
 * Update Layer 7 contentMd from lecture seed files.
 *
 * Usage:
 *   npx tsx scripts/update-lectures.ts AN
 *   npx tsx scripts/update-lectures.ts PY
 *   npx tsx scripts/update-lectures.ts all
 *   npx tsx scripts/update-lectures.ts AN --dry-run
 */

import pg from "pg";

const DB_URL =
  process.env.DIRECT_DATABASE_URL ||
  "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";
const subjectArg = process.argv[2] || "all";
const dryRun = process.argv.includes("--dry-run");

interface LectureEntry {
  topicCode: string;
  contentMd: string;
  estimatedMinutes: number;
}

// Import all lecture files — subjects with many topics may have multiple parts
const LECTURE_FILES: Record<string, () => Promise<LectureEntry[]>> = {
  AN: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-anatomy-part1.js").then((m) => m.anatomyLecturesPart1),
      import("../prisma/seeds/lectures-anatomy-part2.js").then((m) => m.anatomyLecturesPart2),
      import("../prisma/seeds/lectures-anatomy-part3.js").then((m) => m.anatomyLecturesPart3),
    ]);
    return parts.flat();
  },
  PY: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-physiology-part1.js").then((m) => m.physiologyLecturesPart1),
      import("../prisma/seeds/lectures-physiology-part2.js").then((m) => m.physiologyLecturesPart2),
      import("../prisma/seeds/lectures-physiology-part3.js").then((m) => m.physiologyLecturesPart3),
    ]);
    return parts.flat();
  },
  BI: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-biochemistry-part1.js").then((m) => m.biochemistryLecturesPart1),
      import("../prisma/seeds/lectures-biochemistry-part2.js").then((m) => m.biochemistryLecturesPart2),
    ]);
    return parts.flat();
  },
  PA: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-pathology-part1.js").then((m) => m.pathologyLecturesPart1),
      import("../prisma/seeds/lectures-pathology-part2.js").then((m) => m.pathologyLecturesPart2),
    ]);
    return parts.flat();
  },
  PH: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-pharmacology-part1.js").then((m) => m.pharmacologyLecturesPart1),
      import("../prisma/seeds/lectures-pharmacology-part2.js").then((m) => m.pharmacologyLecturesPart2),
    ]);
    return parts.flat();
  },
  MI: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-microbiology-part1.js").then((m) => m.microbiologyLecturesPart1),
      import("../prisma/seeds/lectures-microbiology-part2.js").then((m) => m.microbiologyLecturesPart2),
    ]);
    return parts.flat();
  },
  FM: () => import("../prisma/seeds/lectures-forensic-medicine.js").then((m) => m.forensicMedicineLectures),
  CM: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-community-medicine-part1.js").then((m) => m.communityMedicineLecturesPart1),
      import("../prisma/seeds/lectures-community-medicine-part2.js").then((m) => m.communityMedicineLecturesPart2),
    ]);
    return parts.flat();
  },
  EN: () => import("../prisma/seeds/lectures-ent.js").then((m) => m.entLectures),
  OP: () => import("../prisma/seeds/lectures-ophthalmology.js").then((m) => m.ophthalmologyLectures),
  IM: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-medicine-part1.js").then((m) => m.medicineLecturesPart1),
      import("../prisma/seeds/lectures-medicine-part2.js").then((m) => m.medicineLecturesPart2),
      import("../prisma/seeds/lectures-medicine-part3.js").then((m) => m.medicineLecturesPart3),
    ]);
    return parts.flat();
  },
  SU: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-surgery-part1.js").then((m) => m.surgeryLecturesPart1),
      import("../prisma/seeds/lectures-surgery-part2.js").then((m) => m.surgeryLecturesPart2),
      import("../prisma/seeds/lectures-surgery-part3.js").then((m) => m.surgeryLecturesPart3),
    ]);
    return parts.flat();
  },
  OG: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-obg-part1.js").then((m) => m.obgLecturesPart1),
      import("../prisma/seeds/lectures-obg-part2.js").then((m) => m.obgLecturesPart2),
    ]);
    return parts.flat();
  },
  PE: async () => {
    const parts = await Promise.all([
      import("../prisma/seeds/lectures-pediatrics-part1.js").then((m) => m.pediatricsLecturesPart1),
      import("../prisma/seeds/lectures-pediatrics-part2.js").then((m) => m.pediatricsLecturesPart2),
    ]);
    return parts.flat();
  },
  DR: () => import("../prisma/seeds/lectures-dermatology.js").then((m) => m.dermatologyLectures),
  PS: () => import("../prisma/seeds/lectures-psychiatry.js").then((m) => m.psychiatryLectures),
  OR: () => import("../prisma/seeds/lectures-orthopedics.js").then((m) => m.orthopedicsLectures),
  AS: () => import("../prisma/seeds/lectures-anesthesiology.js").then((m) => m.anesthesiologyLectures),
  RD: () => import("../prisma/seeds/lectures-radiology.js").then((m) => m.radiologyLectures),
};

async function main() {
  const pool = new pg.Pool({ connectionString: DB_URL });
  const subjects =
    subjectArg === "all"
      ? Object.keys(LECTURE_FILES)
      : [subjectArg.toUpperCase()];

  if (dryRun) console.log("MODE: DRY RUN\n");

  for (const code of subjects) {
    const loader = LECTURE_FILES[code];
    if (!loader) {
      console.log(`Unknown subject: ${code}`);
      continue;
    }

    console.log(`\n📚 Loading ${code} lectures...`);
    let lectures: LectureEntry[];
    try {
      lectures = await loader();
    } catch (err: any) {
      console.log(`   ⚠️  Could not load ${code}: ${err.message?.substring(0, 100)}`);
      continue;
    }
    console.log(`   ${lectures.length} lectures to update`);

    let updated = 0;
    let skipped = 0;
    for (const lec of lectures) {
      if (!lec.contentMd || lec.contentMd.length < 500) {
        console.log(`   ⚠️  Skipping ${lec.topicCode}: content too short (${lec.contentMd?.length || 0} chars)`);
        skipped++;
        continue;
      }

      if (dryRun) {
        console.log(`   Would update ${lec.topicCode} (${lec.contentMd.length} chars, ~${lec.estimatedMinutes} min)`);
        updated++;
        continue;
      }

      const result = await pool.query(
        `
        UPDATE "Lesson" l
        SET "contentMd" = $1, "estimatedMinutes" = $2, "updatedAt" = NOW()
        FROM "Topic" t
        WHERE l."topicId" = t.id AND t.code = $3 AND l.layer = 7
      `,
        [lec.contentMd, lec.estimatedMinutes, lec.topicCode],
      );

      if (result.rowCount && result.rowCount > 0) {
        updated++;
      } else {
        console.log(`   ⚠️  No match for ${lec.topicCode}`);
      }
    }

    console.log(`   ✅ Updated ${updated}/${lectures.length} lectures${skipped ? ` (${skipped} skipped)` : ""}`);
  }

  // Coverage check
  const stats = await pool.query(`
    SELECT COUNT(*) FILTER (WHERE length("contentMd") > 2000) as with_lectures,
           COUNT(*) as total
    FROM "Lesson" WHERE layer = 7
  `);
  console.log(
    `\n📊 Coverage: ${stats.rows[0].with_lectures}/${stats.rows[0].total} topics have real lectures`,
  );

  await pool.end();
}

main().catch(console.error);
