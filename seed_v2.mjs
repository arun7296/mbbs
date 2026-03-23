#!/usr/bin/env node
// Seed runner that uses --experimental-strip-types to load TS files
// Run with: node --experimental-strip-types --no-warnings seed_v2.mjs

import pg from 'pg';
import fs from 'fs';
import path from 'path';

const { Pool } = pg;
const DB_URL = "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";
const SEEDS_DIR = path.resolve("prisma/seeds");

const pool = new Pool({ connectionString: DB_URL, max: 1 });
const client = { query: (...args) => pool.query(...args) };

function genId() { return crypto.randomUUID(); }

async function buildLookups() {
  const subjects = await client.query('SELECT code, id FROM "Subject"');
  const subjectMap = Object.fromEntries(subjects.rows.map(r => [r.code, r.id]));
  const topics = await client.query('SELECT t.code, t.id, t."moduleId", m."subjectId" FROM "Topic" t JOIN "Module" m ON t."moduleId" = m.id');
  const topicMap = Object.fromEntries(topics.rows.map(r => [r.code, { id: r.id, moduleId: r.moduleId, subjectId: r.subjectId }]));
  return { subjectMap, topicMap };
}

async function seedLessons(topicMap) {
  console.log("\n📖 Seeding lessons...");
  const files = fs.readdirSync(SEEDS_DIR).filter(f => f.startsWith("lessons-") && f.endsWith(".ts")).sort();
  let total = 0, skipped = 0, errors = 0;

  for (const file of files) {
    try {
      const mod = await import(`./prisma/seeds/${file}`);
      let fileCount = 0;
      for (const [key, value] of Object.entries(mod)) {
        if (key === 'default' || !Array.isArray(value)) continue;
        for (const topicData of value) {
          if (!topicData?.topicCode) continue;
          const topic = topicMap[topicData.topicCode];
          if (!topic) { skipped++; continue; }
          const layers = Array.isArray(topicData.layers) ? topicData.layers : [];
          for (const l of layers) {
            if (!l?.slug) continue;
            try {
              const res = await client.query(`
                INSERT INTO "Lesson" (id, "topicId", "moduleId", title, slug, layer,
                  "contentMd", summary, mnemonics, "keyPoints", "textbookRefs",
                  "estimatedMinutes", status, "examTags", "createdAt", "updatedAt")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
                  'PUBLISHED', '{NEXT_STEP1,NEET_PG}', NOW(), NOW())
                ON CONFLICT (slug) DO NOTHING
              `, [genId(), topic.id, topic.moduleId, l.title || 'Untitled', l.slug, l.layer || 1,
                  l.contentMd || '', l.summary || '', JSON.stringify(l.mnemonics || []),
                  JSON.stringify(l.keyPoints || []), JSON.stringify(l.textbookRefs || []),
                  l.estimatedMinutes || 20]);
              if (res.rowCount > 0) { total++; fileCount++; }
            } catch (e) {
              if (!e.message.includes('duplicate key')) {
                errors++;
                if (errors <= 5) console.error(`  ❌ ${l.slug}: ${e.message.substring(0, 80)}`);
              }
            }
          }
        }
      }
      if (fileCount > 0) console.log(`  ✅ ${file}: ${fileCount} lessons`);
    } catch (e) {
      console.error(`  ⚠️  ${file}: ${e.message.substring(0, 120)}`);
    }
  }
  console.log(`\n  📊 Lessons: ${total} new, ${skipped} skipped, ${errors} errors`);
}

async function seedMcqs(subjectMap, topicMap) {
  console.log("\n❓ Seeding MCQs...");
  const files = fs.readdirSync(SEEDS_DIR).filter(f => f.startsWith("mcqs-") && f.endsWith(".ts")).sort();
  let total = 0, errors = 0;
  const validDiff = new Set(['EASY', 'MEDIUM', 'HARD', 'EXPERT']);
  const validTypes = new Set(['MCQ_SINGLE', 'MCQ_MULTI', 'CASE_BASED_MCQ', 'ASSERTION_REASON',
    'MATCH_THE_FOLLOWING', 'SHORT_ANSWER', 'LONG_ANSWER', 'IMAGE_BASED']);

  for (const file of files) {
    try {
      const mod = await import(`./prisma/seeds/${file}`);
      let fileCount = 0;
      for (const [key, value] of Object.entries(mod)) {
        if (key === 'default' || !Array.isArray(value)) continue;
        for (const mcq of value) {
          if (!mcq?.stem) continue;
          let subjectId = null, topicId = null;
          if (mcq.topicCode && topicMap[mcq.topicCode]) {
            topicId = topicMap[mcq.topicCode].id;
            subjectId = topicMap[mcq.topicCode].subjectId;
          }
          if (!subjectId && mcq.subjectCode && subjectMap[mcq.subjectCode]) {
            subjectId = subjectMap[mcq.subjectCode];
          }
          if (!subjectId) continue;
          const difficulty = validDiff.has(mcq.difficulty) ? mcq.difficulty : 'MEDIUM';
          const qType = validTypes.has(mcq.type) ? mcq.type : 'MCQ_SINGLE';
          try {
            const ex = await client.query('SELECT 1 FROM "Question" WHERE stem = $1 LIMIT 1', [mcq.stem]);
            if (ex.rows.length > 0) continue;
            const res = await client.query(`
              INSERT INTO "Question" (id, type, "subjectId", "topicId", stem,
                "clinicalVignette", options, explanation, difficulty, "bloomsLevel",
                "examTags", "textbookRefs", status, "createdAt", "updatedAt")
              VALUES ($1, $2::"QuestionType", $3, $4, $5, $6, $7, $8,
                $9::"Difficulty", $10, '{NEXT_STEP1}', $11, 'PUBLISHED', NOW(), NOW())
            `, [genId(), qType, subjectId, topicId, mcq.stem, mcq.clinicalVignette || null,
                JSON.stringify(mcq.options || []), mcq.explanation || '',
                difficulty, mcq.bloomsLevel || 'Recall', JSON.stringify(mcq.textbookRefs || [])]);
            if (res.rowCount > 0) { total++; fileCount++; }
          } catch (e) {
            errors++;
            if (errors <= 5) console.error(`  ❌ MCQ: ${e.message.substring(0, 80)}`);
          }
        }
      }
      if (fileCount > 0) console.log(`  ✅ ${file}: ${fileCount} MCQs`);
    } catch (e) {
      console.error(`  ⚠️  ${file}: ${e.message.substring(0, 120)}`);
    }
  }
  console.log(`\n  📊 MCQs: ${total} new, ${errors} errors`);
}

async function seedClinicalCases() {
  console.log("\n🏥 Seeding clinical cases...");
  const files = fs.readdirSync(SEEDS_DIR).filter(f => f.startsWith("clinical-cases") && f.endsWith(".ts")).sort();
  let total = 0, stageTot = 0, errors = 0;
  const stageMap = {1:'HISTORY',2:'EXAMINATION',3:'INVESTIGATION',4:'DIAGNOSIS',5:'TREATMENT',6:'FOLLOWUP'};
  const validStages = new Set(Object.values(stageMap));
  const validDiff = new Set(['EASY','MEDIUM','HARD','EXPERT']);

  for (const file of files) {
    try {
      const mod = await import(`./prisma/seeds/${file}`);
      let fileCount = 0;
      for (const [key, value] of Object.entries(mod)) {
        if (key === 'default' || !Array.isArray(value)) continue;
        for (const c of value) {
          if (!c?.title) continue;
          const ex = await client.query('SELECT 1 FROM "ClinicalCase" WHERE title = $1 LIMIT 1', [c.title]);
          if (ex.rows.length > 0) continue;
          const difficulty = validDiff.has(c.difficulty) ? c.difficulty : 'MEDIUM';
          try {
            const result = await client.query(`
              INSERT INTO "ClinicalCase" (id, title, "presentingComplaint", "subjectIds",
                "topicIds", "competencyIds", difficulty, "caseType", "patientProfile",
                "examTags", "estimatedMinutes", status, "createdAt", "updatedAt")
              VALUES ($1, $2, $3, '{}', '{}', '{}', $4::"Difficulty", $5, $6,
                '{NEXT_STEP1,NEET_PG}', $7, 'PUBLISHED', NOW(), NOW())
              RETURNING id
            `, [genId(), c.title, c.presentingComplaint || '', difficulty,
                c.caseType || 'Ward', JSON.stringify(c.patientProfile || {}), c.estimatedMinutes || 30]);
            const caseId = result.rows[0].id;
            const stages = Array.isArray(c.stages) ? c.stages : [];
            for (let idx = 0; idx < stages.length; idx++) {
              const s = stages[idx];
              if (!s) continue;
              let stageType = s.stage || 'HISTORY';
              if (typeof stageType === 'number') stageType = stageMap[stageType] || 'HISTORY';
              if (stageType === 'ASSESSMENT') stageType = 'DIAGNOSIS';
              if (!validStages.has(stageType)) stageType = 'HISTORY';
              try {
                await client.query(`
                  INSERT INTO "CaseStage" (id, "caseId", stage, "stageOrder", prompt, "availableActions")
                  VALUES ($1, $2, $3::"CaseStageType", $4, $5, $6)
                  ON CONFLICT ("caseId", "stageOrder") DO NOTHING
                `, [genId(), caseId, stageType, s.stageOrder || idx+1,
                    s.prompt || s.narrative || '', JSON.stringify(s.availableActions || [])]);
                stageTot++;
              } catch {}
            }
            total++; fileCount++;
          } catch (e) {
            errors++;
            if (errors <= 5) console.error(`  ❌ ${c.title?.substring(0,30)}: ${e.message.substring(0,60)}`);
          }
        }
      }
      if (fileCount > 0) console.log(`  ✅ ${file}: ${fileCount} cases`);
    } catch (e) {
      console.error(`  ⚠️  ${file}: ${e.message.substring(0, 120)}`);
    }
  }
  console.log(`\n  📊 Cases: ${total} new, ${stageTot} stages, ${errors} errors`);
}

console.log("🌱 Seeding MBBS content (v2 - experimental-strip-types)...\n");
const { subjectMap, topicMap } = await buildLookups();
console.log(`  Loaded: ${Object.keys(subjectMap).length} subjects, ${Object.keys(topicMap).length} topics`);

await seedLessons(topicMap);
await seedMcqs(subjectMap, topicMap);
await seedClinicalCases();

console.log("\n📊 Final database counts:");
for (const table of ['Subject','Module','Topic','NmcCompetency','Lesson','Question','ClinicalCase','CaseStage','AetcomModule']) {
  const r = await client.query(`SELECT count(*) FROM "${table}"`);
  console.log(`  ${table}: ${r.rows[0].count}`);
}
await pool.end();
console.log("\n🎉 Done!");
