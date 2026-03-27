"use client";

import { useState } from "react";
import { Brain, Plus, Trash2, ChevronRight, CheckCircle, XCircle } from "lucide-react";

interface DiagnosisStepProps {
  differentials: Array<{ diagnosis: string; confidence: string; reasoning: string }>;
  finalDiagnosis: string;
  onAddDifferential: (d: { diagnosis: string; confidence: string; reasoning: string }) => void;
  onRemoveDifferential: (index: number) => void;
  onSetFinalDiagnosis: (d: string) => void;
  onSubmit: () => Promise<void>;
  result: {
    isCorrect: boolean;
    correctDiagnosis: string;
    diagnosticReasoning: string;
    correctDifferentials: Array<{ diagnosis: string; likelihood: string; reasoning: string }>;
    score: number;
    feedback: string[];
  } | null;
  onNext: (score: number) => void;
}

export function DiagnosisStep({
  differentials,
  finalDiagnosis,
  onAddDifferential,
  onRemoveDifferential,
  onSetFinalDiagnosis,
  onSubmit,
  result,
  onNext,
}: DiagnosisStepProps) {
  const [newDx, setNewDx] = useState("");
  const [newConfidence, setNewConfidence] = useState<"HIGH" | "MEDIUM" | "LOW">("MEDIUM");
  const [newReasoning, setNewReasoning] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleAdd() {
    if (!newDx.trim()) return;
    onAddDifferential({
      diagnosis: newDx.trim(),
      confidence: newConfidence,
      reasoning: newReasoning.trim(),
    });
    setNewDx("");
    setNewReasoning("");
    setNewConfidence("MEDIUM");
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      await onSubmit();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
        <div className="flex items-start gap-2">
          <Brain className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              Make Your Diagnosis
            </p>
            <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-300">
              Based on the history, examination, and investigations, build your differential
              diagnosis list and select your final diagnosis.
            </p>
          </div>
        </div>
      </div>

      {!result ? (
        <>
          {/* Add differential form */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Add Differential Diagnosis</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={newDx}
                onChange={(e) => setNewDx(e.target.value)}
                placeholder="e.g., Inferior Wall MI"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
              <div className="flex gap-3">
                <select
                  value={newConfidence}
                  onChange={(e) => setNewConfidence(e.target.value as "HIGH" | "MEDIUM" | "LOW")}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                >
                  <option value="HIGH">HIGH confidence</option>
                  <option value="MEDIUM">MEDIUM confidence</option>
                  <option value="LOW">LOW confidence</option>
                </select>
                <input
                  type="text"
                  value={newReasoning}
                  onChange={(e) => setNewReasoning(e.target.value)}
                  placeholder="Brief reasoning..."
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <button
                onClick={handleAdd}
                disabled={!newDx.trim()}
                className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-300"
              >
                <Plus className="h-3.5 w-3.5" /> Add to Differentials
              </button>
            </div>
          </div>

          {/* Differential list */}
          {differentials.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Your Differential Diagnoses ({differentials.length})
              </h3>
              {differentials.map((d, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 dark:text-gray-100">{d.diagnosis}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        d.confidence === "HIGH" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                        d.confidence === "MEDIUM" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                      }`}>
                        {d.confidence}
                      </span>
                    </div>
                    {d.reasoning && (
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{d.reasoning}</p>
                    )}
                  </div>
                  <button
                    onClick={() => onRemoveDifferential(i)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Final diagnosis */}
          <div className="rounded-lg border-2 border-dashed border-indigo-300 bg-indigo-50/50 p-4 dark:border-indigo-700 dark:bg-indigo-950/10">
            <h3 className="mb-2 text-sm font-bold text-indigo-800 dark:text-indigo-200">
              Final Diagnosis
            </h3>
            <input
              type="text"
              value={finalDiagnosis}
              onChange={(e) => onSetFinalDiagnosis(e.target.value)}
              placeholder="Type your final diagnosis..."
              className="w-full rounded-lg border border-indigo-300 bg-white px-4 py-3 text-base font-medium text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-indigo-600 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!finalDiagnosis.trim() || submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Evaluating...
              </>
            ) : (
              <>Submit Diagnosis</>
            )}
          </button>
        </>
      ) : (
        <>
          {/* Results */}
          <div className={`rounded-xl border-2 p-6 ${
            result.isCorrect
              ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20"
              : "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950/20"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {result.isCorrect ? (
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
              )}
              <div>
                <h3 className={`text-lg font-bold ${
                  result.isCorrect ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                }`}>
                  {result.isCorrect ? "Correct Diagnosis!" : "Incorrect Diagnosis"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Score: {result.score}/25
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold uppercase text-gray-500">Correct Diagnosis</p>
                <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{result.correctDiagnosis}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-gray-500">Diagnostic Reasoning</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.diagnosticReasoning}</p>
              </div>
              {result.feedback.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase text-gray-500">Feedback</p>
                  {result.feedback.map((f, i) => (
                    <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{f}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Correct differentials */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Correct Differential Diagnoses</h3>
            <div className="space-y-2">
              {result.correctDifferentials.map((d, i) => (
                <div key={i} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{d.diagnosis}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      d.likelihood === "HIGH" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {d.likelihood}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{d.reasoning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proceed */}
          <button
            onClick={() => onNext(result.score)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Proceed to Treatment Plan
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
}
