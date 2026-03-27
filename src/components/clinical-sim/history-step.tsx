"use client";

import { useState } from "react";
import { MessageCircle, Check, ChevronRight, AlertCircle } from "lucide-react";

interface HistoryQuestion {
  id: string;
  text: string;
  category: string;
}

interface HistoryCategory {
  name: string;
  questions: HistoryQuestion[];
}

interface HistoryStepProps {
  categories: HistoryCategory[];
  maxQuestions: number;
  selected: string[];
  revealed: Record<string, string>;
  onSelect: (id: string, answer: string) => void;
  onAskQuestion: (questionId: string) => Promise<{ answer: string; isRelevant: boolean }>;
  onNext: (score: number) => void;
}

export function HistoryStep({
  categories,
  maxQuestions,
  selected,
  revealed,
  onSelect,
  onAskQuestion,
  onNext,
}: HistoryStepProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const remaining = maxQuestions - selected.length;

  async function handleAsk(questionId: string) {
    if (selected.includes(questionId) || remaining <= 0) return;
    setLoading(questionId);
    try {
      const result = await onAskQuestion(questionId);
      onSelect(questionId, result.answer);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
        <div className="flex items-start gap-2">
          <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              Take History — Select questions to ask the patient
            </p>
            <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-300">
              You can ask up to {maxQuestions} questions. Choose wisely — relevant questions earn more points.
              Remaining: <strong>{remaining}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Question categories */}
      {categories.map((cat) => (
        <div key={cat.name} className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{cat.name}</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {cat.questions.map((q) => {
              const isAsked = selected.includes(q.id);
              const isLoading = loading === q.id;
              const answer = revealed[q.id];
              const disabled = !isAsked && remaining <= 0;

              return (
                <div key={q.id}>
                  <button
                    onClick={() => handleAsk(q.id)}
                    disabled={isAsked || disabled || isLoading}
                    className={`w-full rounded-lg border p-3 text-left text-sm transition ${
                      isAsked
                        ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20"
                        : disabled
                        ? "cursor-not-allowed border-gray-200 bg-gray-50 opacity-50 dark:border-gray-700 dark:bg-gray-800"
                        : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isAsked ? (
                        <Check className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                      ) : isLoading ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
                      ) : (
                        <MessageCircle className="h-4 w-4 flex-shrink-0 text-gray-400" />
                      )}
                      <span className={isAsked ? "font-medium text-green-800 dark:text-green-200" : "text-gray-700 dark:text-gray-300"}>
                        {q.text}
                      </span>
                    </div>
                  </button>
                  {/* Show answer when revealed */}
                  {answer && (
                    <div className="ml-6 mt-1 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Patient says:</p>
                      <p className="italic">&ldquo;{answer}&rdquo;</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Warning if no questions asked */}
      {selected.length === 0 && (
        <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-700 dark:bg-amber-950/20 dark:text-amber-300">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          Ask at least a few relevant questions before proceeding.
        </div>
      )}

      {/* Proceed button */}
      <button
        onClick={() => onNext(0)} // Score calculated server-side
        disabled={selected.length === 0}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Proceed to Examination
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
