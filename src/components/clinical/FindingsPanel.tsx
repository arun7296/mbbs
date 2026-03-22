"use client";

import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Finding {
  actionText: string;
  findings: string;
  stageType: string;
}

interface FindingsPanelProps {
  findings: Finding[];
}

const stageLabels: Record<string, string> = {
  HISTORY: "History",
  EXAMINATION: "Examination",
  INVESTIGATION: "Investigation",
  DIAGNOSIS: "Diagnosis",
  TREATMENT: "Treatment",
  FOLLOWUP: "Follow-up",
};

export function FindingsPanel({ findings }: FindingsPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (findings.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center">
        <FileText className="mx-auto h-6 w-6 text-gray-300" />
        <p className="mt-2 text-sm text-gray-400">Findings will appear here as you make decisions</p>
      </div>
    );
  }

  // Group by stage
  const grouped = findings.reduce((acc, f) => {
    if (!acc[f.stageType]) acc[f.stageType] = [];
    acc[f.stageType].push(f);
    return acc;
  }, {} as Record<string, Finding[]>);

  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex w-full items-center justify-between p-3 text-sm font-semibold text-gray-700"
      >
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-purple-600" />
          Findings ({findings.length})
        </span>
        {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </button>
      {!isCollapsed && (
        <div className="max-h-80 space-y-3 overflow-y-auto border-t px-3 pb-3 pt-2">
          {Object.entries(grouped).map(([stage, items]) => (
            <div key={stage}>
              <p className="mb-1 text-xs font-semibold uppercase text-purple-600">
                {stageLabels[stage] ?? stage}
              </p>
              {items.map((f, i) => (
                <div key={i} className="mb-2 rounded bg-gray-50 p-2">
                  <p className="text-xs font-medium text-gray-500">{f.actionText}</p>
                  <p className="text-sm text-gray-700">{f.findings}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
