"use client";

import { CheckCircle2, XCircle, BookOpen } from "lucide-react";
import { MarkdownRenderer } from "@/components/shared/MarkdownRenderer";

interface ExplanationPanelProps {
  explanation: string;
  isCorrect: boolean;
  correctOption: { id: string; text: string };
}

export function ExplanationPanel({ explanation, isCorrect, correctOption }: ExplanationPanelProps) {
  return (
    <div className={`mt-6 rounded-xl border p-5 ${
      isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
    }`}>
      <div className="mb-3 flex items-center gap-2">
        {isCorrect ? (
          <>
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Correct!</span>
          </>
        ) : (
          <>
            <XCircle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-800">Incorrect</span>
            <span className="text-sm text-red-600">
              — Correct answer: {correctOption.text}
            </span>
          </>
        )}
      </div>
      <div className="rounded-lg bg-white p-4">
        <div className="mb-2 flex items-center gap-1 text-xs font-medium text-gray-500">
          <BookOpen className="h-3 w-3" /> Explanation
        </div>
        <MarkdownRenderer content={explanation} />
      </div>
    </div>
  );
}
