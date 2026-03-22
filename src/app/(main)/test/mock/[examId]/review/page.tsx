"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Trophy } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

export default function MockExamReviewPage() {
  const params = useParams();
  void params;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
      <Link href="/test" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4" /> Back to Tests
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
        <Trophy className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Mock Exam Review</h1>

        <div className="mt-6 flex justify-center">
          <ProgressRing progress={60} size={100} strokeWidth={6} color="#dc2626">
            <span className="text-xl font-bold">60%</span>
          </ProgressRing>
        </div>

        {/* Subject Breakdown */}
        <div className="mt-8 rounded-lg bg-gray-50 p-4 text-left">
          <h3 className="mb-3 text-sm font-semibold text-gray-700">Subject-wise Performance</h3>
          <div className="space-y-2">
            {[
              { subject: "Anatomy", correct: 1, total: 1 },
              { subject: "Cardiology", correct: 1, total: 1 },
              { subject: "Endocrinology", correct: 1, total: 1 },
              { subject: "Nephrology", correct: 0, total: 1 },
              { subject: "Pharmacology", correct: 1, total: 1 },
            ].map((s) => (
              <div key={s.subject} className="flex items-center gap-3">
                <span className="w-28 text-xs text-gray-600">{s.subject}</span>
                <div className="flex-1 h-2 rounded-full bg-gray-200">
                  <div className={`h-2 rounded-full ${s.correct === s.total ? "bg-green-500" : "bg-red-400"}`} style={{ width: `${(s.correct / s.total) * 100}%` }} />
                </div>
                <span className="text-xs text-gray-500">{s.correct}/{s.total}</span>
              </div>
            ))}
          </div>
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
