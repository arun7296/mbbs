"use client";

import { useState } from "react";

export interface Annotation {
  x: number;
  y: number;
  label: string;
  description: string;
  color?: string;
}

interface AnnotationOverlayProps {
  imageUrl: string;
  imageAlt: string;
  annotations: Annotation[];
  width?: number;
  height?: number;
}

export function AnnotationOverlay({
  imageUrl, imageAlt, annotations,
  width = 800, height = 600,
}: AnnotationOverlayProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active = activeIdx !== null ? annotations[activeIdx] : null;

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-lg border border-gray-200">
        <img src={imageUrl} alt={imageAlt} className="w-full" />
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: "none" }}
        >
          {annotations.map((ann, i) => (
            <g key={i} style={{ pointerEvents: "auto", cursor: "pointer" }}
              onClick={() => setActiveIdx(i === activeIdx ? null : i)}>
              <circle cx={ann.x} cy={ann.y} r={i === activeIdx ? 10 : 8}
                fill={ann.color || "#EF4444"} fillOpacity={0.8} stroke="white" strokeWidth={2} />
              <text x={ann.x} y={ann.y + 3} textAnchor="middle" fontSize={8} fontWeight="bold" fill="white">
                {i + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {annotations.map((ann, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i === activeIdx ? null : i)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
              i === activeIdx ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            {i + 1}. {ann.label}
          </button>
        ))}
      </div>

      {active && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
          <h4 className="text-sm font-semibold" style={{ color: active.color || "#EF4444" }}>{active.label}</h4>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{active.description}</p>
        </div>
      )}
    </div>
  );
}
