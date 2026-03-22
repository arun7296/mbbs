"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

interface WeakAreaCardProps {
  topicName: string;
  subjectName: string;
  moduleName: string;
  masteryLevel: number;
  weaknessScore: number;
  daysSinceReview: number;
  topicCode: string;
  subjectCode: string;
  moduleCode: string;
}

export function WeakAreaCard({
  topicName,
  subjectName,
  masteryLevel,
  weaknessScore,
  daysSinceReview,
  topicCode,
  subjectCode,
  moduleCode,
}: WeakAreaCardProps) {
  const masteryPct = Math.round(masteryLevel * 100);
  const urgency = weaknessScore > 0.7 ? "high" : weaknessScore > 0.5 ? "medium" : "low";

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-sm">
      <ProgressRing
        progress={masteryPct}
        size={48}
        strokeWidth={3}
        color={urgency === "high" ? "#ef4444" : urgency === "medium" ? "#f97316" : "#eab308"}
      >
        <span className="text-xs font-bold">{masteryPct}%</span>
      </ProgressRing>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-gray-900">{topicName}</h4>
          {urgency === "high" && <AlertTriangle className="h-3.5 w-3.5 text-red-500" />}
        </div>
        <p className="text-xs text-gray-500">{subjectName}</p>
        <p className="text-xs text-gray-400">
          {daysSinceReview === 0 ? "Reviewed today" : `${daysSinceReview} days ago`}
        </p>
      </div>

      <Link
        href={`/learn/${subjectCode}/${moduleCode}/${topicCode}`}
        className="flex items-center gap-1 rounded-lg bg-orange-100 px-3 py-1.5 text-xs font-medium text-orange-700 hover:bg-orange-200"
      >
        Review <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
