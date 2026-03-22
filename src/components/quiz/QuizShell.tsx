"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { QuestionRenderer } from "./QuestionRenderer";
import { ExplanationPanel } from "./ExplanationPanel";
import { ChevronLeft, ChevronRight, Flag, Clock } from "lucide-react";

export interface QuizQuestionData {
  id: string;
  stem: string;
  clinicalVignette?: string;
  options: Array<{ id: string; text: string; isCorrect: boolean; explanation?: string }>;
  explanation: string;
  difficulty: string;
  bloomsLevel: string;
  topic?: string;
}

interface QuizShellProps {
  questions: QuizQuestionData[];
  mode: "practice" | "timed_test";
  timeLimitMin?: number;
  onComplete: (answers: Record<string, string>) => void;
}

export function QuizShell({ questions, mode, timeLimitMin, onComplete }: QuizShellProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(timeLimitMin ? timeLimitMin * 60 : 0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQ = questions[currentIdx];
  const isAnswered = !!answers[currentQ.id];

  // Timer for timed mode
  useEffect(() => {
    if (mode !== "timed_test" || !timeLimitMin || isComplete) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, timeLimitMin, isComplete]);

  const handleAnswer = (questionId: string, optionId: string) => {
    if (answers[questionId] && mode === "practice") return; // Already answered in practice mode
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    if (mode === "practice") {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    setShowExplanation(false);
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
    onComplete(answers);
  };

  const toggleMark = () => {
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) next.delete(currentQ.id);
      else next.add(currentQ.id);
      return next;
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([qId, optId]) => {
    const q = questions.find((q) => q.id === qId);
    return q?.options.find((o) => o.id === optId)?.isCorrect;
  }).length;

  return (
    <div className="flex h-full flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b bg-white px-4 py-3">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600">
            Q {currentIdx + 1} / {questions.length}
          </span>
          {mode === "timed_test" && (
            <span className={cn(
              "flex items-center gap-1 rounded-lg px-3 py-1 text-sm font-medium",
              timeLeft < 300 ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"
            )}>
              <Clock className="h-4 w-4" /> {formatTime(timeLeft)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMark}
            className={cn(
              "flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm",
              marked.has(currentQ.id) ? "bg-amber-100 text-amber-700" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <Flag className="h-4 w-4" /> Mark
          </button>
          <button
            onClick={handleComplete}
            className="rounded-lg bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700"
          >
            Submit All
          </button>
        </div>
      </div>

      {/* Question Navigation Palette */}
      <div className="flex flex-wrap gap-1.5 border-b bg-gray-50 px-4 py-2">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => { setCurrentIdx(i); setShowExplanation(false); }}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-all",
              currentIdx === i && "ring-2 ring-blue-400",
              answers[q.id]
                ? mode === "practice"
                  ? q.options.find((o) => o.id === answers[q.id])?.isCorrect
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
                : "bg-white text-gray-500 border border-gray-200",
              marked.has(q.id) && "ring-2 ring-amber-400"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <QuestionRenderer
            question={currentQ}
            selectedAnswer={answers[currentQ.id]}
            onAnswer={(optionId) => handleAnswer(currentQ.id, optionId)}
            showResult={mode === "practice" && isAnswered}
          />

          {/* Explanation (Practice mode only) */}
          {mode === "practice" && showExplanation && isAnswered && (
            <ExplanationPanel
              explanation={currentQ.explanation}
              isCorrect={!!currentQ.options.find((o) => o.id === answers[currentQ.id])?.isCorrect}
              correctOption={currentQ.options.find((o) => o.isCorrect)!}
            />
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between border-t bg-white px-4 py-3">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>
        <span className="text-sm text-gray-400">
          {answeredCount}/{questions.length} answered
          {mode === "practice" && ` | ${correctCount} correct`}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIdx === questions.length - 1}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-40"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
