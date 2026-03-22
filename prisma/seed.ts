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
import { anatomyMcqs } from "./seeds/anatomy-mcqs";
import { physiologyMcqs } from "./seeds/mcqs-physiology";
import { clinicalCases } from "./seeds/clinical-cases";
import { medicineCases } from "./seeds/clinical-case-medicine";
import { upperLimbLessons } from "./seeds/lessons-anatomy-upper-limb";
import { physiologyLessons } from "./seeds/lessons-physiology";
import { pathologyMcqs } from "./seeds/mcqs-pathology";

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
  let anatomySubjectRecord;
  for (const { subject, modules, topics } of allSubjects) {
    const record = await seedSubject(subject, modules, topics);
    if (subject.code === "AN") anatomySubjectRecord = record;
  }

  // Seed Brachial Plexus lessons (5 layers)
  console.log("\n📖 Creating Brachial Plexus lessons...");
  const bpTopic = await prisma.topic.findUnique({ where: { code: "AN-MOD-01-TOP-05" }, include: { module: true } });
  if (bpTopic) {
    const layers = [
      { layer: 1, title: "Brachial Plexus - Foundation", slug: "brachial-plexus-foundation", estimatedMinutes: 20,
        summary: "The brachial plexus is a network of nerves formed by ventral rami of C5-T1.",
        contentMd: "# Brachial Plexus - Foundation\n\n## The 5 Parts\n1. **Roots** (5): C5-T1\n2. **Trunks** (3): Upper (C5+C6), Middle (C7), Lower (C8+T1)\n3. **Divisions** (6): Each trunk splits into anterior + posterior\n4. **Cords** (3): Lateral, Posterior, Medial (named by relation to axillary artery)\n5. **Terminal Branches** (5): Musculocutaneous, Axillary, Radial, Median, Ulnar",
        mnemonics: [{ text: "Robert Taylor Drinks Cold Beer", explanation: "Roots → Trunks → Divisions → Cords → Branches" }],
        keyPoints: ["Formed by C5-T1 ventral rami", "3 trunks, 3 cords, 5 terminal branches", "Cords named by relation to axillary artery"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Upper Limb - Ch 5", edition: "8th" }] },
      { layer: 2, title: "Brachial Plexus - Mechanism", slug: "brachial-plexus-mechanism", estimatedMinutes: 30,
        summary: "Detailed branches, innervation patterns of each part of the brachial plexus.",
        contentMd: "# Detailed Anatomy\n\n## Terminal Branches\n| Branch | Cord | Muscles |\n|--------|------|---------|\n| Musculocutaneous | Lateral | Biceps, Brachialis |\n| Axillary | Posterior | Deltoid, Teres minor |\n| Radial | Posterior | All extensors |\n| Median | Lat+Med | Forearm flexors, thenar |\n| Ulnar | Medial | Hand intrinsics |",
        mnemonics: [{ text: "HALT for Posterior Cord", explanation: "Highest subscapular, Axillary, Lower subscapular, Thoracodorsal" }],
        keyPoints: ["Median nerve: NO branches in arm", "Radial = great extensor nerve", "Long thoracic from roots → serratus anterior"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Upper Limb - Ch 5", edition: "8th" }] },
      { layer: 3, title: "Brachial Plexus - Clinical", slug: "brachial-plexus-clinical", estimatedMinutes: 20,
        summary: "Clinical injuries: Erb's palsy, Klumpke's palsy, wrist drop, claw hand.",
        contentMd: "# Clinical Correlations\n\n## Erb's Palsy (C5,C6)\nWaiter's tip position\n\n## Klumpke's (C8,T1)\nClaw hand + Horner's syndrome\n\n## Wrist Drop\nRadial nerve at spiral groove\n\n## Claw Hand\nUlnar nerve at elbow\n\n## Ulnar Paradox\nHigher injury = LESS clawing",
        mnemonics: [], keyPoints: ["Erb's = Waiter's tip (C5,C6)", "Wrist drop = Radial at spiral groove", "Claw hand = Ulnar at elbow"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Clinical Anatomy", edition: "8th" }] },
      { layer: 4, title: "Brachial Plexus - Exam Prep", slug: "brachial-plexus-exam", estimatedMinutes: 15,
        summary: "High-yield points for NEXT and NEET PG.",
        contentMd: "# Exam High Yield\n\n| Injury | Nerve | Finding |\n|--------|-------|---------|\n| Erb's | Upper trunk C5,C6 | Waiter's tip |\n| Klumpke's | Lower trunk C8,T1 | Claw hand |\n| Wrist drop | Radial | Cannot extend wrist |\n| Ape thumb | Median (wrist) | Loss of opposition |",
        mnemonics: [{ text: "LOAF", explanation: "Lateral 2 lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis" }],
        keyPoints: ["Quadrangular space = Axillary nerve + PCHA", "Long thoracic nerve injury = winging of scapula"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Ch 5", edition: "8th" }] },
      { layer: 5, title: "Brachial Plexus - Active Recall", slug: "brachial-plexus-recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for brachial plexus.",
        contentMd: "# Active Recall\n\n**Q1:** Roots of brachial plexus?\n> C5, C6, C7, C8, T1\n\n**Q2:** 5 terminal branches?\n> MARMU: Musculocutaneous, Axillary, Radial, Median, Ulnar\n\n**Q3:** Wrist drop - which nerve?\n> Radial nerve at spiral groove\n\n**Q4:** No branches in arm?\n> Median nerve",
        mnemonics: [], keyPoints: ["10 flashcard Q&A pairs"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Ch 5", edition: "8th" }] },
    ];

    for (const l of layers) {
      await prisma.lesson.upsert({
        where: { slug: l.slug },
        update: {},
        create: {
          ...l, topicId: bpTopic.id, moduleId: bpTopic.moduleId,
          status: "PUBLISHED", examTags: ["NEXT_STEP1", "NEET_PG"],
        },
      });
    }
    console.log("   ✅ 5 lesson layers created");
  }

  // Seed MCQs
  console.log("\n❓ Seeding MCQs...");
  let mcqCount = 0;
  for (const mcq of anatomyMcqs) {
    const topic = await prisma.topic.findUnique({ where: { code: mcq.topicCode } });
    if (!topic || !anatomySubjectRecord) continue;
    const existing = await prisma.question.findFirst({ where: { stem: mcq.stem } });
    if (existing) continue;
    await prisma.question.create({
      data: {
        type: mcq.type, subjectId: anatomySubjectRecord.id, topicId: topic.id,
        stem: mcq.stem, clinicalVignette: (mcq as { clinicalVignette?: string }).clinicalVignette ?? null,
        options: mcq.options, explanation: mcq.explanation,
        difficulty: mcq.difficulty, bloomsLevel: mcq.bloomsLevel,
        examTags: mcq.examTags as unknown as string[],
        textbookRefs: mcq.textbookRefs, status: "PUBLISHED",
      },
    });
    mcqCount++;
  }
  console.log(`   ✅ ${mcqCount} MCQs created`);

  // Seed Clinical Cases
  console.log("\n🏥 Seeding clinical cases...");
  for (const c of clinicalCases) {
    const existing = await prisma.clinicalCase.findFirst({ where: { title: c.title } });
    if (existing) continue;
    const cc = await prisma.clinicalCase.create({
      data: {
        title: c.title, presentingComplaint: c.presentingComplaint, caseType: c.caseType,
        difficulty: c.difficulty, estimatedMinutes: c.estimatedMinutes,
        subjectIds: anatomySubjectRecord ? [anatomySubjectRecord.id] : [],
        topicIds: [], competencyIds: [],
        examTags: c.examTags as unknown as string[],
        patientProfile: c.patientProfile, status: "PUBLISHED",
      },
    });
    for (const s of c.stages) {
      await prisma.caseStage.create({
        data: { caseId: cc.id, stage: s.stage, stageOrder: s.stageOrder, prompt: s.prompt, availableActions: s.availableActions },
      });
    }
    console.log(`   🩺 ${c.title}`);
  }

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
    await prisma.aetcomModule.upsert({ where: { id: `aetcom-${m.moduleNumber}` }, update: {}, create: { id: `aetcom-${m.moduleNumber}`, ...m } });
  }
  console.log(`   ✅ ${aetcomModules.length} AETCOM modules`);

  // Seed Upper Limb lessons (Topics 1-4, Brachial Plexus already done above)
  console.log("\n📖 Seeding Upper Limb lesson content...");
  let lessonCount = 0;
  for (const topicData of upperLimbLessons) {
    const topic = await prisma.topic.findUnique({ where: { code: topicData.topicCode }, include: { module: true } });
    if (!topic) continue;
    for (const l of topicData.layers) {
      const existing = await prisma.lesson.findUnique({ where: { slug: l.slug } });
      if (existing) continue;
      await prisma.lesson.create({
        data: {
          ...l, topicId: topic.id, moduleId: topic.moduleId,
          status: "PUBLISHED", examTags: ["NEXT_STEP1", "NEET_PG"],
        },
      });
      lessonCount++;
    }
  }
  console.log(`   ✅ ${lessonCount} Upper Limb lessons created`);

  // Seed Physiology MCQs
  console.log("\n❓ Seeding Physiology MCQs...");
  const pySubject = await prisma.subject.findUnique({ where: { code: "PY" } });
  let pyMcqCount = 0;
  if (pySubject) {
    for (const mcq of physiologyMcqs) {
      const topic = await prisma.topic.findUnique({ where: { code: mcq.topicCode } });
      if (!topic) continue;
      const existing = await prisma.question.findFirst({ where: { stem: mcq.stem } });
      if (existing) continue;
      await prisma.question.create({
        data: {
          type: mcq.type, subjectId: pySubject.id, topicId: topic.id,
          stem: mcq.stem, options: mcq.options, explanation: mcq.explanation,
          difficulty: mcq.difficulty, bloomsLevel: mcq.bloomsLevel,
          examTags: mcq.examTags as unknown as string[],
          textbookRefs: mcq.textbookRefs, status: "PUBLISHED",
        },
      });
      pyMcqCount++;
    }
  }
  console.log(`   ✅ ${pyMcqCount} Physiology MCQs created`);

  // Seed Medicine Clinical Cases
  console.log("\n🏥 Seeding Medicine clinical cases...");
  const imSubject = await prisma.subject.findUnique({ where: { code: "IM" } });
  for (const c of medicineCases) {
    const existing = await prisma.clinicalCase.findFirst({ where: { title: c.title } });
    if (existing) continue;
    const cc = await prisma.clinicalCase.create({
      data: {
        title: c.title, presentingComplaint: c.presentingComplaint, caseType: c.caseType,
        difficulty: c.difficulty, estimatedMinutes: c.estimatedMinutes,
        subjectIds: imSubject ? [imSubject.id] : [],
        topicIds: [], competencyIds: [],
        examTags: c.examTags as unknown as string[],
        patientProfile: c.patientProfile, status: "PUBLISHED",
      },
    });
    for (const s of c.stages) {
      await prisma.caseStage.create({
        data: { caseId: cc.id, stage: s.stage, stageOrder: s.stageOrder, prompt: s.prompt, availableActions: s.availableActions },
      });
    }
    console.log(`   🩺 ${c.title}`);
  }

  // Seed Physiology lessons
  console.log("\n📖 Seeding Physiology lesson content...");
  let pyLessonCount = 0;
  for (const topicData of physiologyLessons) {
    const topic = await prisma.topic.findUnique({ where: { code: topicData.topicCode }, include: { module: true } });
    if (!topic) continue;
    for (const l of topicData.layers) {
      const existing = await prisma.lesson.findUnique({ where: { slug: l.slug } });
      if (existing) continue;
      await prisma.lesson.create({
        data: { ...l, topicId: topic.id, moduleId: topic.moduleId, status: "PUBLISHED", examTags: ["NEXT_STEP1", "NEET_PG"] },
      });
      pyLessonCount++;
    }
  }
  console.log(`   ✅ ${pyLessonCount} Physiology lessons created`);

  // Seed Pathology MCQs
  console.log("\n❓ Seeding Pathology MCQs...");
  const paSubject = await prisma.subject.findUnique({ where: { code: "PA" } });
  let paMcqCount = 0;
  if (paSubject) {
    for (const mcq of pathologyMcqs) {
      const topic = await prisma.topic.findUnique({ where: { code: mcq.topicCode } });
      if (!topic) continue;
      const existing = await prisma.question.findFirst({ where: { stem: mcq.stem } });
      if (existing) continue;
      await prisma.question.create({
        data: {
          type: mcq.type, subjectId: paSubject.id, topicId: topic.id,
          stem: mcq.stem, options: mcq.options, explanation: mcq.explanation,
          difficulty: mcq.difficulty, bloomsLevel: mcq.bloomsLevel,
          examTags: mcq.examTags as unknown as string[],
          textbookRefs: mcq.textbookRefs, status: "PUBLISHED",
        },
      });
      paMcqCount++;
    }
  }
  console.log(`   ✅ ${paMcqCount} Pathology MCQs created`);

  console.log("\n🎉 Complete MBBS curriculum seeded successfully!");
}

main()
  .catch((e) => { console.error("❌ Seed error:", e); process.exit(1); })
  .finally(async () => { await (prisma as unknown as { $disconnect: () => Promise<void> }).$disconnect(); });
