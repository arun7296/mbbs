"use client";

interface LabeledArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  color?: string;
  strokeWidth?: number;
  fontSize?: number;
  dashed?: boolean;
  markerId?: string;
}

export function LabeledArrow({
  x1, y1, x2, y2,
  label,
  color = "#374151",
  strokeWidth = 2,
  fontSize = 10,
  dashed = false,
  markerId,
}: LabeledArrowProps) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const labelOffset = 12;
  const labelX = midX + Math.cos(angle + Math.PI / 2) * labelOffset;
  const labelY = midY + Math.sin(angle + Math.PI / 2) * labelOffset;

  const id = markerId || `arrow-${x1}-${y1}-${x2}-${y2}`;

  return (
    <g>
      <defs>
        <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
        </marker>
      </defs>
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6,3" : undefined}
        markerEnd={`url(#${id})`}
      />
      <text
        x={labelX} y={labelY}
        textAnchor="middle"
        fontSize={fontSize}
        fill={color}
        fontWeight="500"
      >
        {label}
      </text>
    </g>
  );
}
