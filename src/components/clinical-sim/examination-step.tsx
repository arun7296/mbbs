"use client";

import { useState } from "react";
import { Stethoscope, Check, ChevronRight, AlertCircle, AlertTriangle } from "lucide-react";

interface Maneuver {
  id: string;
  text: string;
  time: number;
}

interface ExamSystem {
  name: string;
  maneuvers: Maneuver[];
}

interface ExamFinding {
  text: string;
  abnormal: boolean;
}

interface ExaminationStepProps {
  systems: ExamSystem[];
  maxManeuvers: number;
  selected: string[];
  revealed: Record<string, ExamFinding>;
  onSelect: (id: string, finding: ExamFinding) => void;
  onPerformExam: (maneuverIds: string[]) => Promise<Array<{
    maneuverId: string;
    finding: string;
    isAbnormal: boolean;
  }>>;
  onNext: (score: number) => void;
}

export function ExaminationStep({
  systems,
  maxManeuvers,
  selected,
  revealed,
  onSelect,
  onPerformExam,
  onNext,
}: ExaminationStepProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const remaining = maxManeuvers - selected.length;

  async function handleExam(maneuverId: string) {
    if (selected.includes(maneuverId) || remaining <= 0) return;
    setLoading(maneuverId);
    try {
      const results = await onPerformExam([maneuverId]);
      const finding = results[0];
      if (finding) {
        onSelect(maneuverId, { text: finding.finding, abnormal: finding.isAbnormal });
      }
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
        <div className="flex items-start gap-2">
          <Stethoscope className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              Physical Examination — Select maneuvers to perform
            </p>
            <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-300">
              You can perform up to {maxManeuvers} examination maneuvers. Focus on the relevant system.
              Remaining: <strong>{remaining}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Examination systems */}
      {systems.map((system) => (
        <div key={system.name} className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{system.name}</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {system.maneuvers.map((m) => {
              const isDone = selected.includes(m.id);
              const isLoading = loading === m.id;
              const finding = revealed[m.id];
              const disabled = !isDone && remaining <= 0;

              return (
                <div key={m.id}>
                  <button
                    onClick={() => handleExam(m.id)}
                    disabled={isDone || disabled || isLoading}
                    className={`w-full rounded-lg border p-3 text-left text-sm transition ${
                      isDone
                        ? finding?.abnormal
                          ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20"
                          : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20"
                        : disabled
                        ? "cursor-not-allowed border-gray-200 bg-gray-50 opacity-50 dark:border-gray-700 dark:bg-gray-800"
                        : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {isDone ? (
                          finding?.abnormal ? (
                            <AlertTriangle className="h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                          ) : (
                            <Check className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                          )
                        ) : isLoading ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
                        ) : (
                          <Stethoscope className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        )}
                        <span className={
                          isDone && finding?.abnormal
                            ? "font-medium text-red-800 dark:text-red-200"
                            : isDone
                            ? "font-medium text-green-800 dark:text-green-200"
                            : "text-gray-700 dark:text-gray-300"
                        }>
                          {m.text}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400">{m.time} min</span>
                    </div>
                  </button>
                  {/* Show finding */}
                  {finding && (
                    <div className={`ml-6 mt-1 rounded-lg p-3 text-sm ${
                      finding.abnormal
                        ? "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-300"
                        : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    }`}>
                      <p className={`text-xs font-medium mb-1 ${
                        finding.abnormal ? "text-red-500" : "text-gray-500 dark:text-gray-400"
                      }`}>
                        {finding.abnormal ? "⚠️ Abnormal finding:" : "Finding:"}
                      </p>
                      <p>{finding.text}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Warning */}
      {selected.length === 0 && (
        <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-700 dark:bg-amber-950/20 dark:text-amber-300">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          Perform at least a few relevant examinations before proceeding.
        </div>
      )}

      {/* Proceed */}
      <button
        onClick={() => onNext(0)}
        disabled={selected.length === 0}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Proceed to Investigations
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
