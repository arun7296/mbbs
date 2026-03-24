import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Seed data imports
import { anatomySubject, anatomyModules, anatomyTopics } from "./seeds/anatomy";
import { physiologySubject, physiologyModules, physiologyTopics } from "./seeds/physiology";
import { biochemistrySubject, biochemistryModules, biochemistryTopics } from "./seeds/biochemistry";
import { pathologySubject, pathologyModules, pathologyTopics } from "./seeds/pathology";
import { pharmacologySubject, pharmacologyModules, pharmacologyTopics } from "./seeds/pharmacology";
import { microbiologySubject, microbiologyModules, microbiologyTopics } from "./seeds/microbiology";
import { forensicMedicineSubject, forensicMedicineModules, forensicMedicineTopics } from "./seeds/forensic-medicine";
import { communityMedicineSubject, communityMedicineModules, communityMedicineTopics } from "./seeds/community-medicine";
import { entSubject, entModules, entTopics } from "./seeds/ent";
import { ophthalmologySubject, ophthalmologyModules, ophthalmologyTopics } from "./seeds/ophthalmology";
import { medicineSubject, medicineModules, medicineTopics } from "./seeds/medicine";
import { surgerySubject, surgeryModules, surgeryTopics } from "./seeds/surgery";
import { obgSubject, obgModules, obgTopics } from "./seeds/obg";
import { pediatricsSubject, pediatricsModules, pediatricsTopics } from "./seeds/pediatrics";
import {
  dermatologySubject, dermatologyModules, dermatologyTopics,
  psychiatrySubject, psychiatryModules, psychiatryTopics,
  orthopedicsSubject, orthopedicsModules, orthopedicsTopics,
  anesthesiologySubject, anesthesiologyModules, anesthesiologyTopics,
  radiologySubject, radiologyModules, radiologyTopics,
} from "./seeds/remaining-subjects";

// Bulk content loaders
import { allLessons, allMcqs, allClinicalCases } from "./seeds/content-loader";

const directUrl = process.env.DIRECT_DATABASE_URL
  || "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";
const adapter = new PrismaPg({ connectionString: directUrl });
const prisma = new PrismaClient({ adapter });

// Generic subject seeder
async function seedSubject(
  subjectData: { name: string; code: string; phase: string; totalHours: number; description: string; iconUrl: string | null; sortOrder: number },
  modules: Array<{ code: string; name: string; description: string; estimatedHours: number; sortOrder: number }>,
  topics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>>,
) {
  const subject = await prisma.subject.upsert({
    where: { code: subjectData.code },
    update: {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: subjectData as any,
  });

  let topicCount = 0;
  for (const modData of modules) {
    const mod = await prisma.module.upsert({
      where: { code: modData.code },
      update: {},
      create: { ...modData, subjectId: subject.id },
    });

    const modTopics = topics[modData.code] ?? [];
    for (const t of modTopics) {
      const competency = await prisma.nmcCompetency.upsert({
        where: { code: t.competencyCode },
        update: {},
        create: {
          code: t.competencyCode,
          description: t.competencyDesc,
          subjectId: subject.id,
          domain: "Cognitive",
          level: "KNOWS_HOW",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          phase: subjectData.phase as any,
        },
      });

      await prisma.topic.upsert({
        where: { code: t.code },
        update: {},
        create: {
          code: t.code,
          name: t.name,
          sortOrder: t.sortOrder,
          moduleId: mod.id,
          nmcCompetencyId: competency.id,
        },
      });
      topicCount++;
    }
  }

  console.log(`   ✅ ${subjectData.name} (${subjectData.code}): ${modules.length} modules, ${topicCount} topics`);
  return subject;
}

// Generic lesson seeder
async function seedAllLessons() {
  console.log("\n📖 Seeding all lessons...");
  let count = 0;
  let skipped = 0;

  for (const topicData of allLessons) {
    try {
      if (!topicData || !topicData.topicCode) continue;

      const topic = await prisma.topic.findUnique({
        where: { code: topicData.topicCode },
        include: { module: true },
      });

      if (!topic) {
        skipped++;
        continue;
      }

      const layers = Array.isArray(topicData.layers) ? topicData.layers : [];
      for (const l of layers) {
        try {
          if (!l || !l.slug) continue;

          // Check both slug and topicId+layer uniqueness
          const existingBySlug = await prisma.lesson.findUnique({
            where: { slug: l.slug },
          });
          if (existingBySlug) continue;

          const existingByTopicLayer = await prisma.lesson.findFirst({
            where: { topicId: topic.id, layer: l.layer || 1 },
          });
          if (existingByTopicLayer) continue;

          await prisma.lesson.create({
            data: {
              layer: l.layer || 1,
              slug: l.slug,
              title: l.title || "Untitled",
              estimatedMinutes: l.estimatedMinutes || 30,
              summary: l.summary || "",
              contentMd: l.contentMd || "",
              mnemonics: l.mnemonics || [],
              keyPoints: l.keyPoints || [],
              textbookRefs: l.textbookRefs || [],
              topicId: topic.id,
              moduleId: topic.moduleId,
              status: "PUBLISHED",
              examTags: ["NEXT_STEP1", "NEET_PG"],
            },
          });
          count++;
        } catch (e) {
          console.warn(`   ⚠️  Failed to seed lesson ${l?.slug}: ${(e as Error).message}`);
        }
      }
    } catch (e) {
      console.warn(`   ⚠️  Failed to seed topic ${topicData?.topicCode}: ${(e as Error).message}`);
    }
  }

  console.log(`   ✅ ${count} lessons created (${skipped} topics not found)`);
}

// Generic MCQ seeder
async function seedAllMcqs() {
  console.log("\n❓ Seeding all MCQs...");
  let count = 0;

  for (const mcq of allMcqs) {
    try {
      if (!mcq || !mcq.stem) continue;

      // Handle both MCQs with subjectCode and topicCode
      const topicCode = (mcq as any).topicCode;
      const subjectCode = (mcq as any).subjectCode;

      let subject;
      let topic = null;

      // Try to find subject and topic
      if (topicCode) {
        topic = await prisma.topic.findUnique({
          where: { code: topicCode },
          include: { module: { include: { subject: true } } },
        });
        if (topic) {
          subject = topic.module.subject;
        }
      }

      if (!subject && subjectCode) {
        subject = await prisma.subject.findUnique({
          where: { code: subjectCode },
        });
      }

      if (!subject) continue;

      // Check for existing MCQ
      const existing = await prisma.question.findFirst({
        where: { stem: mcq.stem },
      });

      if (existing) continue;

      await prisma.question.create({
        data: {
          type: mcq.type || "MCQ_SINGLE",
          subjectId: subject.id,
          topicId: topic?.id || null,
          stem: mcq.stem,
          clinicalVignette: (mcq as any).clinicalVignette || null,
          options: mcq.options || [],
          explanation: mcq.explanation || "",
          difficulty: (["EASY", "MEDIUM", "HARD", "EXPERT"].includes(mcq.difficulty) ? mcq.difficulty : (mcq.difficulty === "HIGH" ? "HARD" : "MEDIUM")) as any,
          bloomsLevel: mcq.bloomsLevel || "Recall",
          examTags: ((mcq.examTags || ["NEXT_STEP1"]) as string[]).filter(t => ["NEXT_STEP1", "NEXT_STEP2", "NEET_PG", "UNIVERSITY"].includes(t)) as any,
          textbookRefs: mcq.textbookRefs || [],
          status: "PUBLISHED",
        },
      });
      count++;
    } catch (e) {
      console.warn(`   ⚠️  Failed to seed MCQ: ${(e as Error).message}`);
    }
  }

  console.log(`   ✅ ${count} MCQs created`);
}

// Generic clinical case seeder
async function seedAllClinicalCases() {
  console.log("\n🏥 Seeding all clinical cases...");
  let count = 0;

  for (const c of allClinicalCases) {
    try {
      if (!c || !c.title) continue;

      const existing = await prisma.clinicalCase.findFirst({
        where: { title: c.title },
      });

      if (existing) continue;

      const cc = await prisma.clinicalCase.create({
        data: {
          title: c.title,
          presentingComplaint: c.presentingComplaint || "",
          caseType: c.caseType || "Ward",
          difficulty: (["EASY", "MEDIUM", "HARD", "EXPERT"].includes(c.difficulty) ? c.difficulty : (c.difficulty === "HIGH" ? "HARD" : "MEDIUM")) as any,
          estimatedMinutes: c.estimatedMinutes || 30,
          subjectIds: [],
          topicIds: [],
          competencyIds: [],
          examTags: ((c.examTags || ["NEXT_STEP1"]) as string[]).filter(t => ["NEXT_STEP1", "NEXT_STEP2", "NEET_PG", "UNIVERSITY"].includes(t)) as any,
          patientProfile: c.patientProfile || {},
          status: "PUBLISHED",
        },
      });

      const stages = Array.isArray(c.stages) ? c.stages : [];
      for (const s of stages) {
        try {
          if (!s || !s.prompt) continue;

          await prisma.caseStage.create({
            data: {
              caseId: cc.id,
              stage: (["HISTORY", "EXAMINATION", "INVESTIGATION", "DIAGNOSIS", "TREATMENT", "FOLLOWUP"].includes(s.stage) ? s.stage : "HISTORY") as any,
              stageOrder: s.stageOrder || 1,
              prompt: s.prompt,
              availableActions: s.availableActions || [],
            },
          });
        } catch (e) {
          console.warn(`   ⚠️  Failed to seed case stage: ${(e as Error).message}`);
        }
      }

      count++;
      console.log(`   🩺 ${c.title}`);
    } catch (e) {
      console.warn(`   ⚠️  Failed to seed clinical case ${c?.title}: ${(e as Error).message}`);
    }
  }

  console.log(`   ✅ ${count} clinical cases created`);
}

async function main() {
  console.log("🌱 Seeding complete MBBS curriculum...\n");

  // All 19 subjects organized by phase
  const allSubjects = [
    // Phase I
    { subject: anatomySubject, modules: anatomyModules, topics: anatomyTopics },
    { subject: physiologySubject, modules: physiologyModules, topics: physiologyTopics },
    { subject: biochemistrySubject, modules: biochemistryModules, topics: biochemistryTopics },
    // Phase II
    { subject: pathologySubject, modules: pathologyModules, topics: pathologyTopics },
    { subject: pharmacologySubject, modules: pharmacologyModules, topics: pharmacologyTopics },
    { subject: microbiologySubject, modules: microbiologyModules, topics: microbiologyTopics },
    // Phase III Part 1
    { subject: forensicMedicineSubject, modules: forensicMedicineModules, topics: forensicMedicineTopics },
    { subject: communityMedicineSubject, modules: communityMedicineModules, topics: communityMedicineTopics },
    { subject: entSubject, modules: entModules, topics: entTopics },
    { subject: ophthalmologySubject, modules: ophthalmologyModules, topics: ophthalmologyTopics },
    // Phase III Part 2
    { subject: medicineSubject, modules: medicineModules, topics: medicineTopics },
    { subject: surgerySubject, modules: surgeryModules, topics: surgeryTopics },
    { subject: obgSubject, modules: obgModules, topics: obgTopics },
    { subject: pediatricsSubject, modules: pediatricsModules, topics: pediatricsTopics },
    { subject: dermatologySubject, modules: dermatologyModules, topics: dermatologyTopics },
    { subject: psychiatrySubject, modules: psychiatryModules, topics: psychiatryTopics },
    { subject: orthopedicsSubject, modules: orthopedicsModules, topics: orthopedicsTopics },
    { subject: anesthesiologySubject, modules: anesthesiologyModules, topics: anesthesiologyTopics },
    { subject: radiologySubject, modules: radiologyModules, topics: radiologyTopics },
  ];

  console.log("📚 Seeding 19 subjects...");
  for (const { subject, modules, topics } of allSubjects) {
    await seedSubject(subject, modules, topics);
  }

  // Seed all lessons using the generic loader
  await seedAllLessons();

  // Seed all MCQs using the generic loader
  await seedAllMcqs();

  // Seed all clinical cases using the generic loader
  await seedAllClinicalCases();

  // Seed AETCOM modules
  console.log("\n🎓 Seeding AETCOM modules...");
  const aetcomModules = [
    { moduleNumber: 1, title: "What does it mean to be a doctor?", phase: "PHASE_1" as const, description: "Understanding the role of a medical professional" },
    { moduleNumber: 2, title: "What does it mean to be a patient?", phase: "PHASE_1" as const, description: "Understanding patient perspectives and illness experience" },
    { moduleNumber: 3, title: "The doctor-patient relationship", phase: "PHASE_1" as const, description: "Building therapeutic relationships and trust" },
    { moduleNumber: 4, title: "Informed consent and patient autonomy", phase: "PHASE_1" as const, description: "Principles of informed consent and shared decision-making" },
    { moduleNumber: 5, title: "Health care as a right", phase: "PHASE_1" as const, description: "Universal health coverage and equity in healthcare" },
    { moduleNumber: 6, title: "Medical errors and patient safety", phase: "PHASE_1" as const, description: "Understanding and preventing medical errors" },
  ];
  for (const m of aetcomModules) {
    await prisma.aetcomModule.upsert({
      where: { id: `aetcom-${m.moduleNumber}` },
      update: {},
      create: { id: `aetcom-${m.moduleNumber}`, ...m },
    });
  }
  console.log(`   ✅ ${aetcomModules.length} AETCOM modules`);

  console.log("\n🎉 Complete MBBS curriculum seeded successfully!");
}

main()
  .catch((e) => { console.error("❌ Seed error:", e); process.exit(1); })
  .finally(async () => { await (prisma as unknown as { $disconnect: () => Promise<void> }).$disconnect(); });
