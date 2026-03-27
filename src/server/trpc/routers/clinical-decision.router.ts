import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import type { Prisma } from "@/generated/prisma/client";
import {
  calculateHistoryScore,
  calculateExamScore,
  calculateInvestigationScore,
  calculateDiagnosisScore,
  calculateTreatmentScore,
  calculateTotalScore,
} from "@/lib/algorithms/clinical-scoring";

// ---------------------------------------------------------------------------
// Standard history question categories (static — not per-scenario)
// ---------------------------------------------------------------------------
const HISTORY_CATEGORIES = [
  {
    name: "History of Present Illness",
    questions: [
      { id: "onset", text: "When did the symptoms start?", category: "HPI" },
      { id: "character", text: "Describe the character of the pain/symptom", category: "HPI" },
      { id: "location", text: "Where exactly is the pain?", category: "HPI" },
      { id: "radiation", text: "Does it radiate anywhere?", category: "HPI" },
      { id: "severity", text: "How severe is it (1-10)?", category: "HPI" },
      { id: "timing", text: "Is it constant or intermittent?", category: "HPI" },
      { id: "aggravating", text: "What makes it worse?", category: "HPI" },
      { id: "relieving", text: "What makes it better?", category: "HPI" },
      { id: "associated", text: "Any associated symptoms?", category: "HPI" },
    ],
  },
  {
    name: "Past History",
    questions: [
      { id: "prev_illness", text: "Any previous illnesses?", category: "PMH" },
      { id: "surgeries", text: "Any previous surgeries?", category: "PMH" },
      { id: "allergies", text: "Any known allergies?", category: "PMH" },
      { id: "hospitalizations", text: "Any previous hospitalizations?", category: "PMH" },
    ],
  },
  {
    name: "Family History",
    questions: [
      { id: "fam_cardiac", text: "Any heart disease in the family?", category: "FH" },
      { id: "fam_diabetes", text: "Diabetes in the family?", category: "FH" },
      { id: "fam_cancer", text: "Any cancer in the family?", category: "FH" },
      { id: "fam_tb", text: "Any TB in the family?", category: "FH" },
    ],
  },
  {
    name: "Social History",
    questions: [
      { id: "smoking", text: "Do you smoke/chew tobacco?", category: "SH" },
      { id: "alcohol", text: "Do you consume alcohol?", category: "SH" },
      { id: "diet", text: "Describe your diet", category: "SH" },
      { id: "occupation", text: "What is your occupation?", category: "SH" },
      { id: "travel", text: "Any recent travel?", category: "SH" },
    ],
  },
  {
    name: "Drug History",
    questions: [
      { id: "current_meds", text: "Are you taking any medications?", category: "DH" },
      { id: "otc", text: "Any over-the-counter medicines?", category: "DH" },
      { id: "ayurvedic", text: "Any Ayurvedic/traditional medicines?", category: "DH" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Standard examination maneuvers (static)
// ---------------------------------------------------------------------------
const EXAM_SYSTEMS = [
  {
    name: "General Examination",
    maneuvers: [
      { id: "general_appearance", text: "Assess general appearance", time: 1 },
      { id: "pallor", text: "Check for pallor", time: 1 },
      { id: "icterus", text: "Check for icterus", time: 1 },
      { id: "cyanosis", text: "Check for cyanosis", time: 1 },
      { id: "clubbing", text: "Check for clubbing", time: 1 },
      { id: "edema", text: "Check for pedal edema", time: 1 },
      { id: "lymph_nodes", text: "Palpate lymph nodes", time: 2 },
      { id: "jvp", text: "Assess JVP", time: 1 },
    ],
  },
  {
    name: "Cardiovascular",
    maneuvers: [
      { id: "apex_beat", text: "Locate and assess apex beat", time: 2 },
      { id: "heart_sounds", text: "Auscultate heart sounds", time: 3 },
      { id: "murmurs", text: "Check for murmurs", time: 2 },
      { id: "peripheral_pulses", text: "Check peripheral pulses", time: 2 },
      { id: "blood_pressure", text: "Measure BP in both arms", time: 2 },
    ],
  },
  {
    name: "Respiratory",
    maneuvers: [
      { id: "chest_inspection", text: "Inspect chest movements", time: 1 },
      { id: "trachea", text: "Check tracheal position", time: 1 },
      { id: "percussion", text: "Percuss the chest", time: 3 },
      { id: "auscultation_lungs", text: "Auscultate lung fields", time: 3 },
      { id: "vocal_resonance", text: "Assess vocal resonance", time: 2 },
    ],
  },
  {
    name: "Abdominal",
    maneuvers: [
      { id: "abdo_inspection", text: "Inspect abdomen", time: 1 },
      { id: "palpation_superficial", text: "Superficial palpation", time: 2 },
      { id: "palpation_deep", text: "Deep palpation", time: 3 },
      { id: "liver_palpation", text: "Palpate liver", time: 2 },
      { id: "spleen_palpation", text: "Palpate spleen", time: 2 },
      { id: "kidney_palpation", text: "Bimanual kidney palpation", time: 2 },
      { id: "bowel_sounds", text: "Auscultate bowel sounds", time: 1 },
    ],
  },
  {
    name: "Neurological",
    maneuvers: [
      { id: "consciousness", text: "Assess consciousness (GCS)", time: 2 },
      { id: "cranial_nerves", text: "Test cranial nerves", time: 5 },
      { id: "motor_upper", text: "Motor exam — upper limbs", time: 3 },
      { id: "motor_lower", text: "Motor exam — lower limbs", time: 3 },
      { id: "sensory", text: "Sensory examination", time: 3 },
      { id: "reflexes", text: "Check deep tendon reflexes", time: 3 },
      { id: "cerebellar", text: "Cerebellar signs", time: 3 },
      { id: "plantar", text: "Plantar reflex (Babinski)", time: 1 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper: extract answer from structured history data
// ---------------------------------------------------------------------------
function extractHistoryAnswer(
  scenario: {
    historyOfPresent: string;
    pastHistory: string | null;
    familyHistory: string | null;
    socialHistory: string | null;
    drugHistory: string | null;
  },
  questionId: string,
): string {
  // HPI questions — parse from historyOfPresent markdown
  const hpiFields: Record<string, RegExp> = {
    onset: /onset|start|began|since|duration/i,
    character: /character|nature|type|describe|quality/i,
    location: /location|where|site|region/i,
    radiation: /radiat|spread|extend|shoot/i,
    severity: /sever|scale|intensity|pain.*\d/i,
    timing: /timing|constant|intermittent|when|episod/i,
    aggravating: /aggravat|worse|increase|exacerbat/i,
    relieving: /reliev|better|decrease|ease|help/i,
    associated: /associat|accompan|along|other symptom/i,
  };

  // Check HPI
  if (hpiFields[questionId]) {
    const lines = scenario.historyOfPresent.split("\n");
    for (const line of lines) {
      if (hpiFields[questionId].test(line)) {
        return line.replace(/^[-*#>\s]+/, "").trim();
      }
    }
    // Fallback: return full HPI for HPI questions
    if (["onset", "character", "location", "severity", "associated"].includes(questionId)) {
      return scenario.historyOfPresent;
    }
  }

  // Past history questions
  if (["prev_illness", "surgeries", "allergies", "hospitalizations"].includes(questionId)) {
    return scenario.pastHistory || "No significant past history";
  }

  // Family history questions
  if (questionId.startsWith("fam_")) {
    return scenario.familyHistory || "No significant family history";
  }

  // Social history questions
  if (["smoking", "alcohol", "diet", "occupation", "travel"].includes(questionId)) {
    return scenario.socialHistory || "No significant social history";
  }

  // Drug history questions
  if (["current_meds", "otc", "ayurvedic"].includes(questionId)) {
    return scenario.drugHistory || "Not on any medications";
  }

  return "No significant finding";
}

// ---------------------------------------------------------------------------
// Helper: find exam result from systemic exam data
// ---------------------------------------------------------------------------
function findExamResult(
  systemicExam: Record<string, Record<string, string>>,
  generalExam: string | null,
  maneuverId: string,
): { text: string; abnormal: boolean } {
  // General exam maneuvers
  const generalManeuvers = [
    "general_appearance", "pallor", "icterus", "cyanosis",
    "clubbing", "edema", "lymph_nodes", "jvp",
  ];
  if (generalManeuvers.includes(maneuverId) && generalExam) {
    const lines = generalExam.split("\n");
    for (const line of lines) {
      if (line.toLowerCase().includes(maneuverId.replace(/_/g, " ")) ||
          line.toLowerCase().includes(maneuverId.replace(/_/g, ""))) {
        const text = line.replace(/^[-*#>\s]+/, "").trim();
        return { text, abnormal: !text.toLowerCase().includes("normal") && !text.toLowerCase().includes("absent") && !text.toLowerCase().includes("no ") };
      }
    }
    return { text: generalExam, abnormal: false };
  }

  // Systemic exam maneuvers
  for (const system of Object.values(systemicExam)) {
    if (typeof system === "object" && system !== null && maneuverId in system) {
      const text = system[maneuverId];
      return {
        text,
        abnormal: !text.toLowerCase().includes("normal") && !text.toLowerCase().includes("no ") && !text.toLowerCase().includes("absent"),
      };
    }
  }
  return { text: "No significant abnormality detected", abnormal: false };
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
export const clinicalDecisionRouter = router({

  // Get scenario for a topic (safe view — hides answers)
  getScenarioForTopic: publicProcedure
    .input(z.object({ topicCode: z.string() }))
    .query(async ({ ctx, input }) => {
      const topic = await ctx.prisma.topic.findUnique({
        where: { code: input.topicCode },
      });
      if (!topic) throw new TRPCError({ code: "NOT_FOUND", message: "Topic not found" });

      const scenario = await ctx.prisma.clinicalScenario.findFirst({
        where: { topicId: topic.id },
        select: {
          id: true,
          patientAge: true,
          patientSex: true,
          patientOccupation: true,
          patientLocation: true,
          chiefComplaint: true,
          historyOfPresent: true,
          pastHistory: true,
          familyHistory: true,
          socialHistory: true,
          drugHistory: true,
          vitals: true,
          generalExam: true,
          difficulty: true,
          estimatedMinutes: true,
          examRelevance: true,
          maxScore: true,
          disclaimer: true,
          // DO NOT send: correctDiagnosis, managementPlan, diagnosticReasoning, etc.
        },
      });

      return scenario;
    }),

  // Get available history questions (static categories)
  getHistoryOptions: publicProcedure
    .input(z.object({ scenarioId: z.string() }))
    .query(async ({ ctx, input }) => {
      // Verify scenario exists
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: { id: true },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });
      return { categories: HISTORY_CATEGORIES };
    }),

  // Student asks a history question — reveal the answer
  askHistoryQuestion: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      questionId: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: {
          historyOfPresent: true,
          pastHistory: true,
          familyHistory: true,
          socialHistory: true,
          drugHistory: true,
          relevantHistoryQs: true,
        },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const answer = extractHistoryAnswer(scenario, input.questionId);
      const isRelevant = scenario.relevantHistoryQs.includes(input.questionId);

      return {
        questionId: input.questionId,
        answer,
        isRelevant,
      };
    }),

  // Get examination options (static systems)
  getExamOptions: publicProcedure
    .input(z.object({ scenarioId: z.string() }))
    .query(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: { id: true },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });
      return { systems: EXAM_SYSTEMS };
    }),

  // Student performs examination — reveal findings
  performExamination: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      maneuverIds: z.array(z.string()),
    }))
    .mutation(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: {
          systemicExam: true,
          generalExam: true,
          relevantExamIds: true,
        },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const systemicExam = scenario.systemicExam as Record<string, Record<string, string>>;

      const findings = input.maneuverIds.map((id) => {
        const finding = findExamResult(systemicExam, scenario.generalExam, id);
        return {
          maneuverId: id,
          finding: finding.text,
          isAbnormal: finding.abnormal,
          isRelevant: scenario.relevantExamIds.includes(id),
        };
      });

      return { findings };
    }),

  // Get available investigations (without results)
  getInvestigationOptions: publicProcedure
    .input(z.object({ scenarioId: z.string() }))
    .query(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: { availableInvestigations: true },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const investigations = scenario.availableInvestigations as Array<{
        id: string; name: string; cost: number; turnaround: string; category: string;
      }>;

      // Strip results — student hasn't ordered yet
      return investigations.map((inv) => ({
        id: inv.id,
        name: inv.name,
        cost: inv.cost,
        turnaround: inv.turnaround,
        category: inv.category,
      }));
    }),

  // Student orders investigation — reveal result
  orderInvestigation: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      investigationIds: z.array(z.string()),
    }))
    .mutation(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: { availableInvestigations: true },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const allInvestigations = scenario.availableInvestigations as Array<{
        id: string; name: string; result: string; isAbnormal: boolean; interpretation: string;
      }>;

      const results = input.investigationIds
        .map((id) => {
          const inv = allInvestigations.find((i) => i.id === id);
          if (!inv) return null;
          return {
            id: inv.id,
            name: inv.name,
            result: inv.result,
            isAbnormal: inv.isAbnormal,
            interpretation: inv.interpretation,
          };
        })
        .filter((r): r is NonNullable<typeof r> => r !== null);

      return { results };
    }),

  // Student submits diagnosis
  submitDiagnosis: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      differentials: z.array(z.object({
        diagnosis: z.string(),
        confidence: z.enum(["HIGH", "MEDIUM", "LOW"]),
        reasoning: z.string(),
      })),
      finalDiagnosis: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: {
          correctDiagnosis: true,
          differentials: true,
          diagnosticReasoning: true,
        },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const correctDifferentials = scenario.differentials as Array<{
        diagnosis: string; likelihood: string; reasoning: string;
      }>;

      const { score, feedback } = calculateDiagnosisScore(
        input.finalDiagnosis,
        scenario.correctDiagnosis,
        input.differentials,
        correctDifferentials,
      );

      const isCorrect = input.finalDiagnosis.toLowerCase().includes(scenario.correctDiagnosis.toLowerCase())
        || scenario.correctDiagnosis.toLowerCase().includes(input.finalDiagnosis.toLowerCase());

      return {
        isCorrect,
        correctDiagnosis: scenario.correctDiagnosis,
        diagnosticReasoning: scenario.diagnosticReasoning,
        correctDifferentials,
        score,
        feedback,
      };
    }),

  // Student submits treatment plan
  submitTreatment: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      selectedTreatments: z.array(z.string()),
      lifestyleAdvice: z.array(z.string()),
    }))
    .mutation(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
        select: {
          managementPlan: true,
          redFlags: true,
          keyLearningPoints: true,
          commonMistakes: true,
        },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const plan = scenario.managementPlan as Record<string, unknown>;
      const immediateActions = (plan.immediateActions || []) as Array<{ action: string; priority: string }>;
      const pharmacological = (plan.pharmacological || []) as Array<{ drugClass: string }>;
      const redFlags = scenario.redFlags as Array<{ flag: string; action: string; urgency: string }>;

      const { score, feedback } = calculateTreatmentScore(
        input.selectedTreatments,
        immediateActions,
        pharmacological,
      );

      return {
        correctPlan: plan,
        redFlags,
        keyLearningPoints: scenario.keyLearningPoints,
        commonMistakes: scenario.commonMistakes,
        score,
        feedback,
        disclaimer: "⚠️ EDUCATIONAL SIMULATION ONLY. Do NOT use for real patient care. Always consult qualified medical professionals.",
      };
    }),

  // Save complete attempt
  saveAttempt: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      historyQuestions: z.unknown(),
      examinations: z.unknown(),
      investigationsOrdered: z.unknown(),
      differentialsMade: z.unknown(),
      finalDiagnosis: z.string().optional(),
      treatmentPlan: z.unknown().optional(),
      historyScore: z.number(),
      examScore: z.number(),
      investigationScore: z.number(),
      diagnosisScore: z.number(),
      treatmentScore: z.number(),
      totalScore: z.number(),
      feedback: z.unknown().optional(),
      timeSpentSeconds: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.clinicalAttempt.create({
        data: {
          scenarioId: input.scenarioId,
          userId: ctx.userId,
          historyQuestions: input.historyQuestions as Prisma.InputJsonValue,
          examinations: input.examinations as Prisma.InputJsonValue,
          investigationsOrdered: input.investigationsOrdered as Prisma.InputJsonValue,
          differentialsMade: input.differentialsMade as Prisma.InputJsonValue,
          finalDiagnosis: input.finalDiagnosis,
          treatmentPlan: input.treatmentPlan as Prisma.InputJsonValue,
          historyScore: input.historyScore,
          examScore: input.examScore,
          investigationScore: input.investigationScore,
          diagnosisScore: input.diagnosisScore,
          treatmentScore: input.treatmentScore,
          totalScore: input.totalScore,
          feedback: input.feedback as Prisma.InputJsonValue,
          timeSpentSeconds: input.timeSpentSeconds,
          completedAt: new Date(),
        },
      });
    }),

  // Get user's previous attempts for a scenario
  getAttempts: protectedProcedure
    .input(z.object({ scenarioId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.clinicalAttempt.findMany({
        where: {
          scenarioId: input.scenarioId,
          userId: ctx.userId,
        },
        orderBy: { startedAt: "desc" },
        take: 5,
      });
    }),

  // Calculate final score for an attempt
  calculateScore: protectedProcedure
    .input(z.object({
      scenarioId: z.string(),
      askedQuestions: z.array(z.string()),
      performedExams: z.array(z.string()),
      orderedInvestigations: z.array(z.string()),
      finalDiagnosis: z.string(),
      differentials: z.array(z.object({
        diagnosis: z.string(),
        confidence: z.string(),
      })),
      selectedTreatments: z.array(z.string()),
    }))
    .mutation(async ({ ctx, input }) => {
      const scenario = await ctx.prisma.clinicalScenario.findUnique({
        where: { id: input.scenarioId },
      });
      if (!scenario) throw new TRPCError({ code: "NOT_FOUND" });

      const historyResult = calculateHistoryScore(
        input.askedQuestions,
        scenario.relevantHistoryQs,
      );

      const examResult = calculateExamScore(
        input.performedExams,
        scenario.relevantExamIds,
      );

      const investigations = scenario.availableInvestigations as Array<{
        id: string; cost: number; isEssential?: boolean;
      }>;
      const investigationResult = calculateInvestigationScore(
        input.orderedInvestigations,
        investigations,
        5000, // Default budget in INR
      );

      const correctDifferentials = scenario.differentials as Array<{
        diagnosis: string; likelihood: string;
      }>;
      const diagnosisResult = calculateDiagnosisScore(
        input.finalDiagnosis,
        scenario.correctDiagnosis,
        input.differentials,
        correctDifferentials,
      );

      const plan = scenario.managementPlan as Record<string, unknown>;
      const treatmentResult = calculateTreatmentScore(
        input.selectedTreatments,
        (plan.immediateActions || []) as Array<{ action: string; priority: string }>,
        (plan.pharmacological || []) as Array<{ drugClass: string }>,
      );

      const total = calculateTotalScore(
        historyResult.score,
        examResult.score,
        investigationResult.score,
        diagnosisResult.score,
        treatmentResult.score,
      );

      return {
        ...total,
        stepFeedback: {
          history: historyResult.feedback,
          exam: examResult.feedback,
          investigation: investigationResult.feedback,
          diagnosis: diagnosisResult.feedback,
          treatment: treatmentResult.feedback,
        },
      };
    }),
});
