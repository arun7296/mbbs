"use client";

import { useRouter } from "next/navigation";
import { QuizShell, type QuizQuestionData } from "@/components/quiz/QuizShell";

interface QuizClientProps {
  questions: QuizQuestionData[];
  mode: "practice" | "timed_test";
  timeLimitMin?: number;
}

export default function QuizClient({ questions, mode, timeLimitMin }: QuizClientProps) {
  const router = useRouter();

  const handleComplete = (answers: Record<string, string>) => {
    const correct = Object.entries(answers).filter(([qId, optId]) => {
      const q = questions.find((q) => q.id === qId);
      return q?.options.find((o) => o.id === optId)?.isCorrect;
    }).length;

    const total = Object.keys(answers).length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Navigate to results with score data in URL
    router.push(
      `/practice/results/done?score=${score}&correct=${correct}&total=${total}&answered=${total}&questions=${questions.length}`
    );
  };

  return (
    <div className="h-full">
      <QuizShell
        questions={questions}
        mode={mode}
        timeLimitMin={timeLimitMin}
        onComplete={handleComplete}
      />
    </div>
  );
}
