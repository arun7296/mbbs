"use client";

import { useState } from "react";

interface PathwayNodeProps {
  x: number;
  y: number;
  label: string;
  subtitle?: string;
  description?: string;
  color?: string;
  width?: number;
  height?: number;
  isHighlighted?: boolean;
  onClick?: () => void;
}

export function PathwayNode({
  x, y, label, subtitle, description,
  color = "#3B82F6",
  width = 120, height = 50,
  isHighlighted = false,
  onClick,
}: PathwayNodeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <g
      className="cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect
        x={x - width / 2} y={y - height / 2}
        width={width} height={height}
        rx={8}
        fill={isHighlighted || hovered ? color : `${color}20`}
        stroke={color}
        strokeWidth={isHighlighted ? 3 : 2}
        style={{ transition: "all 0.2s ease" }}
      />
      <text
        x={x} y={subtitle ? y - 4 : y + 4}
        textAnchor="middle"
        fontSize={11}
        fontWeight="600"
        fill={isHighlighted || hovered ? "white" : color}
        style={{ transition: "fill 0.2s ease" }}
      >
        {label}
      </text>
      {subtitle && (
        <text x={x} y={y + 12} textAnchor="middle" fontSize={9} fill={isHighlighted || hovered ? "white" : "#6B7280"}>
          {subtitle}
        </text>
      )}
    </g>
  );
}
