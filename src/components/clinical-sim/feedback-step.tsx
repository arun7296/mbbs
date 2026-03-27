"use client";

import { RotateCcw, Award, AlertTriangle, BookOpen, Lightbulb, XCircle } from "lucide-react";

interface FeedbackStepProps {
  scores: Record<string, number>;
  diagnosisResult: {
    isCorrect: boolean;
    correctDiagnosis: string;
    diagnosticReasoning: string;
    feedback: string[];
  } | null;
  treatmentResult: {
    keyLearningPoints: string[];
    commonMistakes: string[];
    redFlags: Array<{ flag: string; action: string; urgency: string }>;
    feedback: string[];
  } | null;
  onRestart: () => void;
}

export function FeedbackStep({
  scores,
  diagnosisResult,
  treatmentResult,
  onRestart,
}: FeedbackStepProps) {
  const totalScore =
    (scores.history || 0) +
    (scores.examination || 0) +
    (scores.investigation || 0) +
    (scores.diagnosis || 0) +
    (scores.treatment || 0);

  const grade =
    totalScore >= 90 ? "A" :
    totalScore >= 75 ? "B" :
    totalScore >= 60 ? "C" :
    totalScore >= 40 ? "D" : "F";

  const gradeColors = {
    A: "from-green-500 to-emerald-600 text-white",
    B: "from-blue-500 to-indigo-600 text-white",
    C: "from-yellow-500 to-amber-600 text-white",
    D: "from-orange-500 to-red-500 text-white",
    F: "from-red-600 to-red-800 text-white",
  };

  const gradeMessages = {
    A: "Outstanding! You demonstrated excellent clinical reasoning.",
    B: "Good work! A few areas to refine for perfection.",
    C: "Passing. Review the feedback carefully to improve.",
    D: "Below expectations. Revisit the topic layers for a stronger foundation.",
    F: "Significant improvement needed. Study Layers 1-3 thoroughly before retrying.",
  };

  return (
    <div className="space-y-6">
      {/* Safety disclaimer */}
      <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 dark:bg-amber-950/20 dark:border-amber-800">
        <p className="text-xs font-bold text-amber-800 dark:text-amber-200 flex items-center gap-1.5">
          <AlertTriangle className="h-3.5 w-3.5" />
          EDUCATIONAL SIMULATION ONLY — Not for real patient care
        </p>
      </div>

      {/* Grade card */}
      <div className={`rounded-2xl bg-gradient-to-br ${gradeColors[grade]} p-8 text-center shadow-lg`}>
        <Award className="mx-auto h-12 w-12 opacity-80" />
        <p className="mt-2 text-sm font-medium opacity-80">Senior Doctor&apos;s Assessment</p>
        <p className="mt-1 text-6xl font-black">{grade}</p>
        <p className="mt-2 text-2xl font-bold">{totalScore}/100</p>
        <p className="mt-2 text-sm opacity-80">{gradeMessages[grade]}</p>
      </div>

      {/* Score breakdown */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <h3 className="mb-4 text-sm font-bold text-gray-700 dark:text-gray-300">Score Breakdown</h3>
        <div className="space-y-3">
          <ScoreBar label="History Taking" score={scores.history || 0} max={20} />
          <ScoreBar label="Physical Examination" score={scores.examination || 0} max={20} />
          <ScoreBar label="Investigations" score={scores.investigation || 0} max={15} />
          <ScoreBar label="Diagnosis" score={scores.diagnosis || 0} max={25} />
          <ScoreBar label="Treatment Plan" score={scores.treatment || 0} max={20} />
        </div>
      </div>

      {/* Diagnosis feedback */}
      {diagnosisResult && (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
            <BookOpen className="h-4 w-4 text-indigo-500" />
            Diagnostic Review
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Correct Diagnosis:</strong> {diagnosisResult.correctDiagnosis}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {diagnosisResult.diagnosticReasoning}
          </p>
        </div>
      )}

      {/* Key learning points */}
      {treatmentResult?.keyLearningPoints && treatmentResult.keyLearningPoints.length > 0 && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-800 dark:text-emerald-200">
            <Lightbulb className="h-4 w-4" />
            Key Learning Points
          </h3>
          <div className="space-y-2">
            {treatmentResult.keyLearningPoints.map((point, i) => (
              <p key={i} className="text-sm text-emerald-700 dark:text-emerald-300">
                {i + 1}. {point}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Common mistakes */}
      {treatmentResult?.commonMistakes && treatmentResult.commonMistakes.length > 0 && (
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-800 dark:bg-orange-950/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-orange-800 dark:text-orange-200">
            <XCircle className="h-4 w-4" />
            Common Mistakes to Avoid
          </h3>
          <div className="space-y-2">
            {treatmentResult.commonMistakes.map((mistake, i) => (
              <p key={i} className="text-sm text-orange-700 dark:text-orange-300">
                {i + 1}. {mistake}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Red flags */}
      {treatmentResult?.redFlags && treatmentResult.redFlags.length > 0 && (
        <div className="rounded-xl border-2 border-red-300 bg-red-50 p-5 dark:border-red-700 dark:bg-red-950/20">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-800 dark:text-red-200">
            <AlertTriangle className="h-4 w-4" />
            Red Flags You Should Have Noticed
          </h3>
          <div className="space-y-2">
            {treatmentResult.redFlags.map((rf, i) => (
              <div key={i} className="text-sm">
                <p className="font-medium text-red-700 dark:text-red-300">{rf.flag}</p>
                <p className="text-xs text-red-600 dark:text-red-400">
                  Action: {rf.action} ({rf.urgency})
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
      </div>

      {/* Bottom disclaimer */}
      <div className="rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          ⚠️ Educational simulation only. Not real medical advice. Based on Indian medical guidelines (NMC/ICMR).
        </p>
      </div>
    </div>
  );
}

function ScoreBar({ label, score, max }: { label: string; score: number; max: number }) {
  const pct = Math.round((score / max) * 100);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">{label}</span>
        <span className="font-bold text-gray-900 dark:text-gray-100">
          {score}/{max}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full rounded-full transition-all ${
            pct >= 80 ? "bg-green-500" :
            pct >= 60 ? "bg-blue-500" :
            pct >= 40 ? "bg-amber-500" :
            "bg-red-500"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
