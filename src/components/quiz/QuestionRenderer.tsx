"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestionData } from "./QuizShell";

interface QuestionRendererProps {
  question: QuizQuestionData;
  selectedAnswer?: string;
  onAnswer: (optionId: string) => void;
  showResult: boolean;
}

export function QuestionRenderer({ question, selectedAnswer, onAnswer, showResult }: QuestionRendererProps) {
  return (
    <div>
      {/* Difficulty & Bloom's */}
      <div className="mb-4 flex items-center gap-2">
        <span className={cn(
          "rounded-full px-2 py-0.5 text-xs font-medium",
          question.difficulty === "EASY" && "bg-green-100 text-green-700",
          question.difficulty === "MEDIUM" && "bg-yellow-100 text-yellow-700",
          question.difficulty === "HARD" && "bg-red-100 text-red-700",
          question.difficulty === "EXPERT" && "bg-purple-100 text-purple-700",
        )}>
          {question.difficulty}
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
          {question.bloomsLevel}
        </span>
        {question.topic && (
          <span className="text-xs text-gray-400">{question.topic}</span>
        )}
      </div>

      {/* Clinical Vignette */}
      {question.clinicalVignette && (
        <div className="mb-4 rounded-lg border border-purple-100 bg-purple-50 p-4">
          <p className="text-sm leading-relaxed text-purple-800">{question.clinicalVignette}</p>
        </div>
      )}

      {/* Question Stem */}
      <p className="mb-6 text-base font-medium leading-relaxed text-gray-900">{question.stem}</p>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const letter = String.fromCharCode(65 + i); // A, B, C, D
          const isSelected = selectedAnswer === option.id;
          const isCorrect = option.isCorrect;

          return (
            <button
              key={option.id}
              onClick={() => onAnswer(option.id)}
              disabled={showResult}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all",
                !showResult && !isSelected && "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                !showResult && isSelected && "border-blue-400 bg-blue-50",
                showResult && isSelected && isCorrect && "border-green-400 bg-green-50",
                showResult && isSelected && !isCorrect && "border-red-400 bg-red-50",
                showResult && !isSelected && isCorrect && "border-green-300 bg-green-50/50",
                showResult && !isSelected && !isCorrect && "border-gray-100 opacity-60",
              )}
            >
              <span className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold",
                !showResult && !isSelected && "bg-gray-100 text-gray-600",
                !showResult && isSelected && "bg-blue-200 text-blue-800",
                showResult && isCorrect && "bg-green-200 text-green-800",
                showResult && isSelected && !isCorrect && "bg-red-200 text-red-800",
              )}>
                {letter}
              </span>
              <span className="flex-1 pt-1 text-sm">{option.text}</span>
              {showResult && isCorrect && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
              )}
              {showResult && isSelected && !isCorrect && (
                <XCircle className="h-5 w-5 shrink-0 text-red-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
