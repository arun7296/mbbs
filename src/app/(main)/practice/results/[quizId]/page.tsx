"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Trophy, ArrowLeft, RotateCcw } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

export default function QuizResultsPage() {
  const params = useParams();
  const quizId = params.quizId as string;
  // Will be used for tRPC fetch: assessment.getQuizResults({ quizId })
  void quizId;

  // In production, fetch results via tRPC: assessment.getQuizResults({ quizId })
  // For now, show a results template
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

          <div className="mt-6">
            <ProgressRing progress={70} size={120} strokeWidth={8} color="#16a34a">
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">70%</span>
                <p className="text-xs text-gray-500">Score</p>
              </div>
            </ProgressRing>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-green-50 p-3">
              <p className="text-lg font-bold text-green-700">7</p>
              <p className="text-xs text-gray-500">Correct</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3">
              <p className="text-lg font-bold text-red-700">3</p>
              <p className="text-xs text-gray-500">Incorrect</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-lg font-bold text-gray-700">10</p>
              <p className="text-xs text-gray-500">Total</p>
            </div>
          </div>

          {/* Bloom's Distribution */}
          <div className="mt-6 w-full rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 text-sm font-semibold text-gray-700">Performance by Question Type</h3>
            <div className="space-y-2">
              {[
                { label: "Problem Solving (60%)", correct: 4, total: 6, color: "bg-blue-500" },
                { label: "Analysis (30%)", correct: 2, total: 3, color: "bg-indigo-500" },
                { label: "Recall (10%)", correct: 1, total: 1, color: "bg-green-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-40 text-xs text-gray-600">{item.label}</span>
                  <div className="flex-1 h-2 rounded-full bg-gray-200">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${(item.correct / item.total) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gray-500">{item.correct}/{item.total}</span>
                </div>
              ))}
            </div>
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
