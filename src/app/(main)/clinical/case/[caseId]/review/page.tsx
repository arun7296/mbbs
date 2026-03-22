"use client";

import Link from "next/link";
import { Trophy, ArrowLeft, RotateCcw } from "lucide-react";
import { useParams } from "next/navigation";

export default function CaseReviewPage() {
  const params = useParams();
  const caseId = params.caseId as string;

  // In production, this would fetch the case attempt from DB
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
      <Link href="/clinical" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4" /> Back to cases
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Trophy className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Case Review</h1>
        <p className="mt-2 text-gray-500">Review your clinical decisions and learn from feedback</p>

        <div className="mt-8 rounded-lg bg-gray-50 p-6">
          <p className="text-sm text-gray-500 mb-4">
            Detailed case review with AI feedback will show your decision-making analysis,
            missed findings, and improvement suggestions.
          </p>
          <p className="text-xs text-gray-400">
            This feature integrates with your clinical case attempt history.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href={`/clinical/case/${caseId}`}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <RotateCcw className="h-4 w-4" /> Try Again
          </Link>
          <Link
            href="/clinical"
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
          >
            More Cases
          </Link>
        </div>
      </div>
    </div>
  );
}
