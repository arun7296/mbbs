"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CaseTimelineProps {
  stages: string[];
  currentStage: number;
}

const stageNames: Record<string, string> = {
  HISTORY: "History",
  EXAMINATION: "Exam",
  INVESTIGATION: "Invest.",
  DIAGNOSIS: "Diagnosis",
  TREATMENT: "Treatment",
  FOLLOWUP: "Follow-up",
};

export function CaseTimeline({ stages, currentStage }: CaseTimelineProps) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto px-2 py-3">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
              i < currentStage ? "bg-purple-600 text-white" :
              i === currentStage ? "border-2 border-purple-600 bg-purple-100 text-purple-700" :
              "border border-gray-300 bg-gray-50 text-gray-400"
            )}>
              {i < currentStage ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={cn(
              "mt-1 text-[10px] font-medium",
              i <= currentStage ? "text-purple-600" : "text-gray-400"
            )}>
              {stageNames[stage] ?? stage}
            </span>
          </div>
          {i < stages.length - 1 && (
            <div className={cn(
              "mx-1 h-0.5 w-6",
              i < currentStage ? "bg-purple-600" : "bg-gray-200"
            )} />
          )}
        </div>
      ))}
    </div>
  );
}
