"use client";

import { trpc } from "@/lib/trpc/client";
import { ClinicalDecisionSimulator } from "./clinical-decision-simulator";

interface ScenarioData {
  id: string;
  patientAge: number;
  patientSex: string;
  patientOccupation: string | null;
  patientLocation: string | null;
  chiefComplaint: string;
  historyOfPresent: string;
  pastHistory: string | null;
  familyHistory: string | null;
  socialHistory: string | null;
  drugHistory: string | null;
  vitals: unknown;
  generalExam: string | null;
  difficulty: string;
  estimatedMinutes: number;
  examRelevance: string[];
  maxScore: number;
  disclaimer: string;
}

interface ClinicalSimWrapperProps {
  scenario: ScenarioData | null;
  topicName: string;
  subjectCode: string;
}

export function ClinicalSimWrapper({ scenario, topicName, subjectCode }: ClinicalSimWrapperProps) {
  const askHistory = trpc.clinicalDecision.askHistoryQuestion.useMutation();
  const performExam = trpc.clinicalDecision.performExamination.useMutation();
  const orderInvestigation = trpc.clinicalDecision.orderInvestigation.useMutation();
  const submitDiagnosis = trpc.clinicalDecision.submitDiagnosis.useMutation();
  const submitTreatment = trpc.clinicalDecision.submitTreatment.useMutation();

  // Fetch static options when scenario is available
  const historyOptions = trpc.clinicalDecision.getHistoryOptions.useQuery(
    { scenarioId: scenario?.id ?? "" },
    { enabled: !!scenario?.id },
  );
  const examOptions = trpc.clinicalDecision.getExamOptions.useQuery(
    { scenarioId: scenario?.id ?? "" },
    { enabled: !!scenario?.id },
  );
  const investigationOptions = trpc.clinicalDecision.getInvestigationOptions.useQuery(
    { scenarioId: scenario?.id ?? "" },
    { enabled: !!scenario?.id },
  );

  return (
    <ClinicalDecisionSimulator
      scenario={scenario}
      topicName={topicName}
      subjectCode={subjectCode}
      historyCategories={historyOptions.data?.categories}
      examSystems={examOptions.data?.systems}
      investigations={investigationOptions.data}
      onAskHistoryQuestion={async (scenarioId, questionId) => {
        const result = await askHistory.mutateAsync({ scenarioId, questionId });
        return { answer: result.answer, isRelevant: result.isRelevant };
      }}
      onPerformExamination={async (scenarioId, maneuverIds) => {
        const result = await performExam.mutateAsync({ scenarioId, maneuverIds });
        return result.findings.map((f) => ({
          maneuverId: f.maneuverId,
          finding: f.finding,
          isAbnormal: f.isAbnormal,
        }));
      }}
      onOrderInvestigation={async (scenarioId, investigationIds) => {
        const result = await orderInvestigation.mutateAsync({ scenarioId, investigationIds });
        return result;
      }}
      onSubmitDiagnosis={async (scenarioId, differentials, finalDiagnosis) => {
        const result = await submitDiagnosis.mutateAsync({
          scenarioId,
          differentials: differentials.map((d) => ({
            ...d,
            confidence: d.confidence as "HIGH" | "MEDIUM" | "LOW",
          })),
          finalDiagnosis,
        });
        return result;
      }}
      onSubmitTreatment={async (scenarioId, treatments, lifestyle) => {
        const result = await submitTreatment.mutateAsync({
          scenarioId,
          selectedTreatments: treatments,
          lifestyleAdvice: lifestyle,
        });
        return {
          correctPlan: result.correctPlan as Record<string, unknown>,
          redFlags: result.redFlags as Array<{ flag: string; action: string; urgency: string }>,
          keyLearningPoints: result.keyLearningPoints as string[],
          commonMistakes: result.commonMistakes as string[],
          score: result.score,
          feedback: result.feedback,
          disclaimer: result.disclaimer,
        };
      }}
    />
  );
}
