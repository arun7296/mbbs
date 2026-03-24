"use client";

import { useRouter } from "next/navigation";
import { QuizShell, type QuizQuestionData } from "@/components/quiz/QuizShell";

interface MockClientProps {
  questions: QuizQuestionData[];
  timeLimitMin: number;
  examTitle: string;
}

export default function MockClient({ questions, timeLimitMin, examTitle }: MockClientProps) {
  const router = useRouter();

  return (
    <div className="h-full">
      <QuizShell
        questions={questions}
        mode="timed_test"
        timeLimitMin={timeLimitMin}
        onComplete={(answers) => {
          const correct = Object.entries(answers).filter(([qId, optId]) => {
            const q = questions.find((q) => q.id === qId);
            return q?.options.find((o) => o.id === optId)?.isCorrect;
          }).length;
          const total = Object.keys(answers).length;
          const score = total > 0 ? Math.round((correct / total) * 100) : 0;
          router.push(
            `/test/mock/${encodeURIComponent(examTitle)}/review?score=${score}&correct=${correct}&total=${total}&questions=${questions.length}`
          );
        }}
      />
    </div>
  );
}
