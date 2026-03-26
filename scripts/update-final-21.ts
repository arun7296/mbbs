#!/usr/bin/env tsx
import pg from "pg";

async function main() {
  // Dynamically import both parts
  const [{ final21LecturesPart1 }, { final21LecturesPart2 }] = await Promise.all([
    import("../prisma/seeds/lectures-final-21-part1.js"),
    import("../prisma/seeds/lectures-final-21-part2.js"),
  ]);

  const allLectures = [...final21LecturesPart1, ...final21LecturesPart2];
  console.log(`Loaded ${allLectures.length} lectures to update.\n`);

  const pool = new pg.Pool({
    connectionString:
      process.env.DIRECT_DATABASE_URL ||
      "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable",
  });

  let updated = 0;
  let notFound = 0;

  for (const lec of allLectures) {
    if (!lec.contentMd || lec.contentMd.length < 500) {
      console.log(`  ⚠️  ${lec.topicCode} — content too short (${lec.contentMd?.length || 0} chars), skipping`);
      continue;
    }

    const result = await pool.query(
      `UPDATE "Lesson" l
       SET "contentMd" = $1, "estimatedMinutes" = $2, "updatedAt" = NOW()
       FROM "Topic" t
       WHERE l."topicId" = t.id AND t.code = $3 AND l.layer = 7`,
      [lec.contentMd, lec.estimatedMinutes, lec.topicCode]
    );

    if (result.rowCount && result.rowCount > 0) {
      console.log(`  ✅ ${lec.topicCode}`);
      updated++;
    } else {
      console.log(`  ❌ ${lec.topicCode} — not found in DB`);
      notFound++;
    }
  }

  // Coverage check
  const stats = await (pool as any).query(`
    SELECT COUNT(*) FILTER (WHERE length("contentMd") > 500) as with_lectures,
           COUNT(*) as total
    FROM "Lesson" WHERE layer = 7
  `);

  console.log(`\n📊 Updated: ${updated}/${allLectures.length}`);
  if (notFound > 0) console.log(`   Not found: ${notFound}`);
  console.log(`📊 Final Layer 7 coverage: ${stats.rows[0].with_lectures}/${stats.rows[0].total}`);

  await pool.end();
}

main().catch(console.error);
