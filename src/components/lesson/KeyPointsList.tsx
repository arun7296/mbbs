"use client";

import { Star } from "lucide-react";

interface KeyPointsListProps {
  points: string[];
}

export function KeyPointsList({ points }: KeyPointsListProps) {
  return (
    <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-5">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-800">
        <Star className="h-4 w-4" /> Key Points to Remember
      </h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-green-700">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">
              {i + 1}
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
