"use client";

import { useState, useCallback } from "react";
import {
  AlertTriangle,
  Stethoscope,
  ClipboardList,
  TestTube,
  Brain,
  Pill,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

import { IntroStep } from "@/components/clinical-sim/intro-step";
import { HistoryStep } from "@/components/clinical-sim/history-step";
import { ExaminationStep } from "@/components/clinical-sim/examination-step";
import { InvestigationStep } from "@/components/clinical-sim/investigation-step";
import { DiagnosisStep } from "@/components/clinical-sim/diagnosis-step";
import { TreatmentStep } from "@/components/clinical-sim/treatment-step";
import { FeedbackStep } from "@/components/clinical-sim/feedback-step";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type SimStep = "intro" | "history" | "examination" | "investigation" | "diagnosis" | "treatment" | "feedback";

const STEPS: Array<{ id: SimStep; label: string; icon: React.ElementType; maxScore: number }> = [
  { id: "intro", label: "Patient", icon: ClipboardList, maxScore: 0 },
  { id: "history", label: "History", icon: ClipboardList, maxScore: 20 },
  { id: "examination", label: "Examine", icon: Stethoscope, maxScore: 20 },
  { id: "investigation", label: "Investigate", icon: TestTube, maxScore: 15 },
  { id: "diagnosis", label: "Diagnose", icon: Brain, maxScore: 25 },
  { id: "treatment", label: "Treat", icon: Pill, maxScore: 20 },
  { id: "feedback", label: "Feedback", icon: CheckCircle, maxScore: 0 },
];

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

interface ClinicalDecisionSimulatorProps {
  scenario: ScenarioData | null;
  topicName: string;
  subjectCode: string;
  // tRPC mutation callbacks (passed from parent or hooks)
  onAskHistoryQuestion?: (scenarioId: string, questionId: string) => Promise<{ answer: string; isRelevant: boolean }>;
  onPerformExamination?: (scenarioId: string, maneuverIds: string[]) => Promise<Array<{ maneuverId: string; finding: string; isAbnormal: boolean }>>;
  onOrderInvestigation?: (scenarioId: string, investigationIds: string[]) => Promise<{ results: Array<{ id: string; name: string; result: string; isAbnormal: boolean; interpretation: string }> }>;
  onSubmitDiagnosis?: (scenarioId: string, differentials: Array<{ diagnosis: string; confidence: string; reasoning: string }>, finalDiagnosis: string) => Promise<{
    isCorrect: boolean; correctDiagnosis: string; diagnosticReasoning: string;
    correctDifferentials: Array<{ diagnosis: string; likelihood: string; reasoning: string }>;
    score: number; feedback: string[];
  }>;
  onSubmitTreatment?: (scenarioId: string, treatments: string[], lifestyle: string[]) => Promise<{
    correctPlan: Record<string, unknown>;
    redFlags: Array<{ flag: string; action: string; urgency: string }>;
    keyLearningPoints: string[]; commonMistakes: string[];
    score: number; feedback: string[]; disclaimer: string;
  }>;
  // Static data from queries
  historyCategories?: Array<{ name: string; questions: Array<{ id: string; text: string; category: string }> }>;
  examSystems?: Array<{ name: string; maneuvers: Array<{ id: string; text: string; time: number }> }>;
  investigations?: Array<{ id: string; name: string; cost: number; turnaround: string; category: string }>;
}

// Default history categories (used when tRPC not connected)
const DEFAULT_HISTORY_CATEGORIES = [
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
    ],
  },
  {
    name: "Family History",
    questions: [
      { id: "fam_cardiac", text: "Any heart disease in the family?", category: "FH" },
      { id: "fam_diabetes", text: "Diabetes in the family?", category: "FH" },
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
    ],
  },
  {
    name: "Drug History",
    questions: [
      { id: "current_meds", text: "Are you taking any medications?", category: "DH" },
      { id: "ayurvedic", text: "Any Ayurvedic/traditional medicines?", category: "DH" },
    ],
  },
];

const DEFAULT_EXAM_SYSTEMS = [
  {
    name: "General Examination",
    maneuvers: [
      { id: "general_appearance", text: "Assess general appearance", time: 1 },
      { id: "pallor", text: "Check for pallor", time: 1 },
      { id: "icterus", text: "Check for icterus", time: 1 },
      { id: "cyanosis", text: "Check for cyanosis", time: 1 },
      { id: "clubbing", text: "Check for clubbing", time: 1 },
      { id: "edema", text: "Check for pedal edema", time: 1 },
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
    ],
  },
  {
    name: "Respiratory",
    maneuvers: [
      { id: "chest_inspection", text: "Inspect chest movements", time: 1 },
      { id: "trachea", text: "Check tracheal position", time: 1 },
      { id: "percussion", text: "Percuss the chest", time: 3 },
      { id: "auscultation_lungs", text: "Auscultate lung fields", time: 3 },
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
    ],
  },
  {
    name: "Neurological",
    maneuvers: [
      { id: "consciousness", text: "Assess consciousness (GCS)", time: 2 },
      { id: "cranial_nerves", text: "Test cranial nerves", time: 5 },
      { id: "reflexes", text: "Check deep tendon reflexes", time: 3 },
      { id: "plantar", text: "Plantar reflex (Babinski)", time: 1 },
    ],
  },
];

export function ClinicalDecisionSimulator({
  scenario,
  topicName,
  onAskHistoryQuestion,
  onPerformExamination,
  onOrderInvestigation,
  onSubmitDiagnosis,
  onSubmitTreatment,
  historyCategories,
  examSystems,
  investigations,
}: ClinicalDecisionSimulatorProps) {
  const [currentStep, setCurrentStep] = useState<SimStep>("intro");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selectedHistory, setSelectedHistory] = useState<string[]>([]);
  const [revealedHistory, setRevealedHistory] = useState<Record<string, string>>({});
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [revealedExams, setRevealedExams] = useState<Record<string, { text: string; abnormal: boolean }>>({});
  const [orderedInvestigations, setOrderedInvestigations] = useState<string[]>([]);
  const [investigationResults, setInvestigationResults] = useState<Record<string, { id: string; name: string; result: string; isAbnormal: boolean; interpretation: string }>>({});
  const [differentials, setDifferentials] = useState<Array<{ diagnosis: string; confidence: string; reasoning: string }>>([]);
  const [finalDiagnosis, setFinalDiagnosis] = useState("");
  const [diagnosisResult, setDiagnosisResult] = useState<{
    isCorrect: boolean; correctDiagnosis: string; diagnosticReasoning: string;
    correctDifferentials: Array<{ diagnosis: string; likelihood: string; reasoning: string }>;
    score: number; feedback: string[];
  } | null>(null);
  const [treatmentResult, setTreatmentResult] = useState<{
    correctPlan: Record<string, unknown>;
    redFlags: Array<{ flag: string; action: string; urgency: string }>;
    keyLearningPoints: string[]; commonMistakes: string[];
    score: number; feedback: string[]; disclaimer: string;
  } | null>(null);

  const handleRestart = useCallback(() => {
    setCurrentStep("intro");
    setScores({});
    setSelectedHistory([]);
    setRevealedHistory({});
    setSelectedExams([]);
    setRevealedExams({});
    setOrderedInvestigations([]);
    setInvestigationResults({});
    setDifferentials([]);
    setFinalDiagnosis("");
    setDiagnosisResult(null);
    setTreatmentResult(null);
  }, []);

  if (!scenario) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-12 text-center">
        <Stethoscope className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600" />
        <h3 className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-400">
          No Clinical Scenario Available
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          A clinical decision scenario for &ldquo;{topicName}&rdquo; hasn&apos;t been created yet.
        </p>
      </div>
    );
  }

  const stepIndex = STEPS.findIndex((s) => s.id === currentStep);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Safety disclaimer — ALWAYS visible */}
      <div className="mb-6 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-amber-800 dark:text-amber-200">
              EDUCATIONAL SIMULATION ONLY
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              This is a learning exercise for MBBS students. Do NOT use for real patient care.
              Always consult qualified medical professionals for actual clinical decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Step progress bar */}
      <div className="mb-8 flex items-center gap-1 overflow-x-auto pb-2">
        {STEPS.map((step, i) => {
          const isActive = step.id === currentStep;
          const isCompleted = stepIndex > i;
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => isCompleted && setCurrentStep(step.id)}
                disabled={!isCompleted && !isActive}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition whitespace-nowrap ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : isCompleted
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 cursor-pointer hover:bg-indigo-200"
                    : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {step.label}
                {isCompleted && scores[step.id] !== undefined && step.maxScore > 0 && (
                  <span className="ml-1 rounded-full bg-white/20 px-1.5 text-[10px]">
                    {scores[step.id]}/{step.maxScore}
                  </span>
                )}
              </button>
              {i < STEPS.length - 1 && (
                <ChevronRight className="mx-0.5 h-4 w-4 text-gray-300 dark:text-gray-600 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      {currentStep === "intro" && (
        <IntroStep scenario={scenario} onNext={() => setCurrentStep("history")} />
      )}

      {currentStep === "history" && (
        <HistoryStep
          categories={historyCategories || DEFAULT_HISTORY_CATEGORIES}
          maxQuestions={10}
          selected={selectedHistory}
          revealed={revealedHistory}
          onSelect={(id, answer) => {
            setSelectedHistory((prev) => [...prev, id]);
            setRevealedHistory((prev) => ({ ...prev, [id]: answer }));
          }}
          onAskQuestion={async (questionId) => {
            if (onAskHistoryQuestion) {
              return onAskHistoryQuestion(scenario.id, questionId);
            }
            // Fallback: extract from scenario data directly
            return { answer: scenario.historyOfPresent || "No information available", isRelevant: true };
          }}
          onNext={(score) => {
            setScores((prev) => ({ ...prev, history: score }));
            setCurrentStep("examination");
          }}
        />
      )}

      {currentStep === "examination" && (
        <ExaminationStep
          systems={examSystems || DEFAULT_EXAM_SYSTEMS}
          maxManeuvers={8}
          selected={selectedExams}
          revealed={revealedExams}
          onSelect={(id, finding) => {
            setSelectedExams((prev) => [...prev, id]);
            setRevealedExams((prev) => ({ ...prev, [id]: finding }));
          }}
          onPerformExam={async (maneuverIds) => {
            if (onPerformExamination) {
              return onPerformExamination(scenario.id, maneuverIds);
            }
            return maneuverIds.map((id) => ({
              maneuverId: id,
              finding: "Examination finding not available in preview mode",
              isAbnormal: false,
            }));
          }}
          onNext={(score) => {
            setScores((prev) => ({ ...prev, examination: score }));
            setCurrentStep("investigation");
          }}
        />
      )}

      {currentStep === "investigation" && (
        <InvestigationStep
          investigations={investigations || []}
          budget={5000}
          ordered={orderedInvestigations}
          results={investigationResults}
          onOrder={(id, result) => {
            setOrderedInvestigations((prev) => [...prev, id]);
            setInvestigationResults((prev) => ({ ...prev, [id]: result }));
          }}
          onOrderInvestigation={async (investigationIds) => {
            if (onOrderInvestigation) {
              return onOrderInvestigation(scenario.id, investigationIds);
            }
            return { results: [] };
          }}
          onNext={(score) => {
            setScores((prev) => ({ ...prev, investigation: score }));
            setCurrentStep("diagnosis");
          }}
        />
      )}

      {currentStep === "diagnosis" && (
        <DiagnosisStep
          differentials={differentials}
          finalDiagnosis={finalDiagnosis}
          onAddDifferential={(d) => setDifferentials((prev) => [...prev, d])}
          onRemoveDifferential={(index) => setDifferentials((prev) => prev.filter((_, i) => i !== index))}
          onSetFinalDiagnosis={setFinalDiagnosis}
          onSubmit={async () => {
            if (onSubmitDiagnosis) {
              const result = await onSubmitDiagnosis(
                scenario.id,
                differentials,
                finalDiagnosis,
              );
              setDiagnosisResult(result);
            }
          }}
          result={diagnosisResult}
          onNext={(score) => {
            setScores((prev) => ({ ...prev, diagnosis: score }));
            setCurrentStep("treatment");
          }}
        />
      )}

      {currentStep === "treatment" && (
        <TreatmentStep
          onSubmit={async (treatments, lifestyle) => {
            if (onSubmitTreatment) {
              const result = await onSubmitTreatment(
                scenario.id,
                treatments,
                lifestyle,
              );
              setTreatmentResult(result);
            }
          }}
          result={treatmentResult}
          onNext={(score) => {
            setScores((prev) => ({ ...prev, treatment: score }));
            setCurrentStep("feedback");
          }}
        />
      )}

      {currentStep === "feedback" && (
        <FeedbackStep
          scores={scores}
          diagnosisResult={diagnosisResult}
          treatmentResult={treatmentResult}
          onRestart={handleRestart}
        />
      )}

      {/* Bottom safety disclaimer */}
      <div className="mt-8 rounded-lg bg-gray-50 dark:bg-gray-800 p-3 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          ⚠️ Educational simulation only. Not real medical advice. Based on Indian medical guidelines (NMC/ICMR).
        </p>
      </div>
    </div>
  );
}
