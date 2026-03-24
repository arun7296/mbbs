import Link from "next/link";
import { Trophy, ArrowLeft, RotateCcw } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

interface PageProps {
  params: Promise<{ quizId: string }>;
  searchParams: Promise<{ score?: string; correct?: string; total?: string; answered?: string; questions?: string }>;
}

export default async function QuizResultsPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const score = parseInt(sp.score || "0", 10);
  const correct = parseInt(sp.correct || "0", 10);
  const total = parseInt(sp.total || "0", 10);
  const totalQuestions = parseInt(sp.questions || sp.total || "0", 10);
  const incorrect = total - correct;

  // Determine performance color
  const ringColor = score >= 70 ? "#16a34a" : score >= 50 ? "#ea580c" : "#dc2626";
  const performanceLabel =
    score >= 90 ? "Excellent!" : score >= 70 ? "Good Job!" : score >= 50 ? "Keep Practicing" : "Needs Improvement";

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
      <Link href="/practice" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4" /> Back to Practice
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Trophy className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Quiz Complete!</h1>
          <p className="mt-1 text-sm text-gray-500">{performanceLabel}</p>

          <div className="mt-6">
            <ProgressRing progress={score} size={120} strokeWidth={8} color={ringColor}>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">{score}%</span>
                <p className="text-xs text-gray-500">Score</p>
              </div>
            </ProgressRing>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-green-50 p-3">
              <p className="text-lg font-bold text-green-700">{correct}</p>
              <p className="text-xs text-gray-500">Correct</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3">
              <p className="text-lg font-bold text-red-700">{incorrect}</p>
              <p className="text-xs text-gray-500">Incorrect</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-lg font-bold text-gray-700">{totalQuestions}</p>
              <p className="text-xs text-gray-500">Total</p>
            </div>
          </div>

          {/* Tips based on performance */}
          <div className="mt-6 w-full rounded-lg bg-gray-50 p-4 text-left">
            <h3 className="mb-2 text-sm font-semibold text-gray-700">What&apos;s Next?</h3>
            {score >= 70 ? (
              <p className="text-sm text-gray-600">
                Great performance! Try a harder difficulty level or explore new subjects to keep building your knowledge.
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Review the topics you struggled with using the Revise section. Focus on weak areas before attempting more questions.
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link href="/practice" className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <RotateCcw className="h-4 w-4" /> Practice Again
          </Link>
          <Link href="/revise" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            Review Weak Areas
          </Link>
        </div>
      </div>
    </div>
  );
}
