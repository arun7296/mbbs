"use client";

import { useState } from "react";
import { TestTube, Check, ChevronRight, IndianRupee, AlertTriangle } from "lucide-react";

interface Investigation {
  id: string;
  name: string;
  cost: number;
  turnaround: string;
  category: string;
}

interface InvestigationResult {
  id: string;
  name: string;
  result: string;
  isAbnormal: boolean;
  interpretation: string;
}

interface InvestigationStepProps {
  investigations: Investigation[];
  budget: number;
  ordered: string[];
  results: Record<string, InvestigationResult>;
  onOrder: (id: string, result: InvestigationResult) => void;
  onOrderInvestigation: (investigationIds: string[]) => Promise<{
    results: InvestigationResult[];
  }>;
  onNext: (score: number) => void;
}

export function InvestigationStep({
  investigations,
  budget,
  ordered,
  results,
  onOrder,
  onOrderInvestigation,
  onNext,
}: InvestigationStepProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const totalSpent = ordered.reduce((sum, id) => {
    const inv = investigations.find((i) => i.id === id);
    return sum + (inv?.cost || 0);
  }, 0);
  const remaining = budget - totalSpent;

  // Group investigations by category
  const categories = investigations.reduce<Record<string, Investigation[]>>((acc, inv) => {
    (acc[inv.category] || (acc[inv.category] = [])).push(inv);
    return acc;
  }, {});

  async function handleOrder(investigationId: string) {
    if (ordered.includes(investigationId)) return;
    const inv = investigations.find((i) => i.id === investigationId);
    if (inv && inv.cost > remaining) return; // Can't afford

    setLoading(investigationId);
    try {
      const response = await onOrderInvestigation([investigationId]);
      const result = response.results[0];
      if (result) {
        onOrder(investigationId, result);
      }
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Instructions + budget */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
        <div className="flex items-start gap-2">
          <TestTube className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              Order Investigations — Choose tests wisely
            </p>
            <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-300">
              Each investigation has a cost. Be cost-effective — order only what you need for the diagnosis.
            </p>
          </div>
        </div>
      </div>

      {/* Budget bar */}
      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            <IndianRupee className="h-4 w-4" /> Investigation Budget
          </span>
          <span className={`text-sm font-bold ${
            remaining < 0 ? "text-red-600" : remaining < budget * 0.3 ? "text-amber-600" : "text-green-600"
          }`}>
            ₹{remaining.toLocaleString("en-IN")} / ₹{budget.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={`h-full rounded-full transition-all ${
              remaining < 0 ? "bg-red-500" : remaining < budget * 0.3 ? "bg-amber-500" : "bg-green-500"
            }`}
            style={{ width: `${Math.max(0, Math.min(100, (remaining / budget) * 100))}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Spent: ₹{totalSpent.toLocaleString("en-IN")} on {ordered.length} investigation{ordered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Investigation categories */}
      {Object.entries(categories).map(([category, invs]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{category}</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {invs.map((inv) => {
              const isOrdered = ordered.includes(inv.id);
              const isLoading = loading === inv.id;
              const result = results[inv.id];
              const tooExpensive = !isOrdered && inv.cost > remaining;

              return (
                <div key={inv.id}>
                  <button
                    onClick={() => handleOrder(inv.id)}
                    disabled={isOrdered || isLoading || tooExpensive}
                    className={`w-full rounded-lg border p-3 text-left text-sm transition ${
                      isOrdered
                        ? result?.isAbnormal
                          ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20"
                          : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20"
                        : tooExpensive
                        ? "cursor-not-allowed border-gray-200 bg-gray-50 opacity-50 dark:border-gray-700"
                        : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isOrdered ? (
                          result?.isAbnormal ? (
                            <AlertTriangle className="h-4 w-4 flex-shrink-0 text-red-600" />
                          ) : (
                            <Check className="h-4 w-4 flex-shrink-0 text-green-600" />
                          )
                        ) : isLoading ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
                        ) : (
                          <TestTube className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        )}
                        <span className="text-gray-800 dark:text-gray-200">{inv.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>₹{inv.cost.toLocaleString("en-IN")}</span>
                        <span className="text-gray-300">|</span>
                        <span>{inv.turnaround}</span>
                      </div>
                    </div>
                  </button>
                  {/* Show result */}
                  {result && (
                    <div className={`ml-6 mt-1 rounded-lg p-3 text-sm ${
                      result.isAbnormal
                        ? "bg-red-50 dark:bg-red-950/20"
                        : "bg-gray-50 dark:bg-gray-800"
                    }`}>
                      <p className={`text-xs font-medium mb-1 ${
                        result.isAbnormal ? "text-red-500" : "text-gray-500 dark:text-gray-400"
                      }`}>
                        {result.isAbnormal ? "⚠️ Abnormal:" : "Result:"}
                      </p>
                      <p className={result.isAbnormal ? "font-medium text-red-700 dark:text-red-300" : "text-gray-700 dark:text-gray-300"}>
                        {result.result}
                      </p>
                      {result.interpretation && (
                        <p className="mt-1 text-xs italic text-gray-500 dark:text-gray-400">
                          {result.interpretation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Proceed */}
      <button
        onClick={() => onNext(0)}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Proceed to Diagnosis
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
