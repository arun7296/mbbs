/**
 * Generic content loading utilities for the MBBS platform.
 * Replaces hand-wired per-subject seeding logic in seed.ts.
 */
import type { PrismaClient } from "../../src/generated/prisma/client";

// ─── Types ──────────────────────────────────────────────────

export interface LessonLayer {
  layer: number;
  slug: string;
  title: string;
  estimatedMinutes: number;
  summary: string;
  contentMd: string;
  mnemonics: Array<{ text: string; explanation: string; tags?: string[] }>;
  keyPoints: string[];
  textbookRefs: Array<{ book: string; chapter: string; page?: string; edition: string }>;
  diagramUrls?: string[];
}

export interface TopicLessons {
  topicCode: string;
  layers: LessonLayer[];
}

export interface SubjectLessons {
  subjectCode: string;
  lessons: TopicLessons[];
}

export interface McqData {
  type: string;
  topicCode: string;
  stem: string;
  clinicalVignette?: string;
  options: Array<{ id: string; text: string; isCorrect: boolean; explanation: string }>;
  explanation: string;
  difficulty: string;
  bloomsLevel: string;
  examTags: string[];
  textbookRefs: Array<{ book: string; chapter: string; page?: string; edition: string }>;
}

export interface SubjectMcqs {
  subjectCode: string;
  mcqs: McqData[];
}

export interface CaseAction {
  id: string;
  text: string;
  isOptimal: boolean;
  findings: string;
  scoreDelta: number;
}

export interface CaseStageData {
  stage: string;
  stageOrder: number;
  prompt: string;
  availableActions: CaseAction[];
}

export interface ClinicalCaseData {
  title: string;
  presentingComplaint: string;
  caseType: string;
  difficulty: string;
  estimatedMinutes: number;
  examTags: string[];
  patientProfile: { age: number; sex: string; occupation: string; history: string };
  stages: CaseStageData[];
}

export interface SubjectCases {
  subjectCode: string;
  cases: ClinicalCaseData[];
}

// ─── Loaders ────────────────────────────────────────────────

/**
 * Load 5-layer lessons for all topics in a subject.
 * Resolves topicCode → topicId, upserts each layer.
 */
export async function loadLessonsForSubject(
  prisma: PrismaClient,
  data: SubjectLessons,
): Promise<number> {
  let count = 0;
  for (const topicData of data.lessons) {
    const topic = await (prisma as any).topic.findUnique({
      where: { code: topicData.topicCode },
      include: { module: true },
    });
    if (!topic) {
      console.warn(`   ⚠️  Topic not found: ${topicData.topicCode}`);
      continue;
    }
    for (const l of topicData.layers) {
      await (prisma as any).lesson.upsert({
        where: { slug: l.slug },
        update: {},
        create: {
          ...l,
          topicId: topic.id,
          moduleId: topic.moduleId,
          status: "PUBLISHED",
          examTags: ["NEXT_STEP1", "NEET_PG"],
        },
      });
      count++;
    }
  }
  console.log(`   📖 ${data.subjectCode}: ${count} lesson layers loaded`);
  return count;
}

/**
 * Load MCQs for a subject. Resolves subjectId + topicId from codes.
 */
export async function loadMcqsForSubject(
  prisma: PrismaClient,
  data: SubjectMcqs,
): Promise<number> {
  const subject = await (prisma as any).subject.findUnique({
    where: { code: data.subjectCode },
  });
  if (!subject) {
    console.warn(`   ⚠️  Subject not found: ${data.subjectCode}`);
    return 0;
  }

  let count = 0;
  for (const mcq of data.mcqs) {
    const topic = await (prisma as any).topic.findUnique({
      where: { code: mcq.topicCode },
    });
    if (!topic) continue;

    const existing = await (prisma as any).question.findFirst({
      where: { stem: mcq.stem },
    });
    if (existing) continue;

    await (prisma as any).question.create({
      data: {
        type: mcq.type,
        subjectId: subject.id,
        topicId: topic.id,
        stem: mcq.stem,
        clinicalVignette: mcq.clinicalVignette ?? null,
        options: mcq.options,
        explanation: mcq.explanation,
        difficulty: mcq.difficulty,
        bloomsLevel: mcq.bloomsLevel,
        examTags: mcq.examTags,
        textbookRefs: mcq.textbookRefs,
        status: "PUBLISHED",
      },
    });
    count++;
  }
  console.log(`   ❓ ${data.subjectCode}: ${count} MCQs loaded`);
  return count;
}

/**
 * Load clinical cases for a subject. Creates ClinicalCase + CaseStage records.
 */
export async function loadCasesForSubject(
  prisma: PrismaClient,
  data: SubjectCases,
): Promise<number> {
  const subject = await (prisma as any).subject.findUnique({
    where: { code: data.subjectCode },
  });
  if (!subject) {
    console.warn(`   ⚠️  Subject not found: ${data.subjectCode}`);
    return 0;
  }

  let count = 0;
  for (const c of data.cases) {
    const existing = await (prisma as any).clinicalCase.findFirst({
      where: { title: c.title },
    });
    if (existing) continue;

    const cc = await (prisma as any).clinicalCase.create({
      data: {
        title: c.title,
        presentingComplaint: c.presentingComplaint,
        caseType: c.caseType,
        difficulty: c.difficulty,
        estimatedMinutes: c.estimatedMinutes,
        subjectIds: [subject.id],
        topicIds: [],
        competencyIds: [],
        examTags: c.examTags,
        patientProfile: c.patientProfile,
        status: "PUBLISHED",
      },
    });
    for (const s of c.stages) {
      await (prisma as any).caseStage.create({
        data: {
          caseId: cc.id,
          stage: s.stage,
          stageOrder: s.stageOrder,
          prompt: s.prompt,
          availableActions: s.availableActions,
        },
      });
    }
    count++;
    console.log(`   🩺 ${c.title}`);
  }
  console.log(`   🏥 ${data.subjectCode}: ${count} cases loaded`);
  return count;
}

// ─── Re-exports from all-content.ts ──────────────────────────

export { allLessons, allMcqs, allClinicalCases } from "./all-content";
