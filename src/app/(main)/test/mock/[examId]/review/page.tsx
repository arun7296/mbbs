import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

interface PageProps {
  params: Promise<{ examId: string }>;
  searchParams: Promise<{ score?: string; correct?: string; total?: string; questions?: string }>;
}

export default async function MockExamReviewPage({ params, searchParams }: PageProps) {
  const { examId } = await params;
  const sp = await searchParams;
  const score = parseInt(sp.score || "0", 10);
  const correct = parseInt(sp.correct || "0", 10);
  const total = parseInt(sp.total || "0", 10);
  const totalQuestions = parseInt(sp.questions || sp.total || "0", 10);
  const incorrect = total - correct;

  const examTitle = decodeURIComponent(examId)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const ringColor = score >= 70 ? "#16a34a" : score >= 50 ? "#ea580c" : "#dc2626";
  const performanceLabel =
    score >= 90 ? "Outstanding!" : score >= 70 ? "Well Done!" : score >= 50 ? "Keep Working" : "Needs Improvement";

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
      <Link href="/test" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4" /> Back to Tests
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
        <Trophy className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">{examTitle}</h1>
        <p className="mt-1 text-sm text-gray-500">{performanceLabel}</p>

        <div className="mt-6 flex justify-center">
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
            <p className="text-xs text-gray-500">Total Questions</p>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-left">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">Next Steps</h3>
          {score >= 70 ? (
            <p className="text-sm text-gray-600">
              Strong performance! Try the full NEXT Step 1 mock exam or increase difficulty to continue improving.
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Focus on your weak subjects using the Revise section. Practice more MCQs in specific areas before attempting another mock.
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <Link href="/test" className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            Back to Tests
          </Link>
          <Link href="/revise" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            Review Weak Areas
          </Link>
        </div>
      </div>
    </div>
  );
}
