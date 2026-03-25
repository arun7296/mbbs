"use client";

interface PathwayArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  enzyme?: string;
  cofactor?: string;
  color?: string;
  reversible?: boolean;
  curved?: boolean;
}

export function PathwayArrow({
  x1, y1, x2, y2,
  enzyme, cofactor,
  color = "#6B7280",
  reversible = false,
  curved = false,
}: PathwayArrowProps) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const id = `parrow-${x1}-${y1}-${x2}-${y2}`;

  const path = curved
    ? `M ${x1} ${y1} Q ${midX + 40} ${midY} ${x2} ${y2}`
    : `M ${x1} ${y1} L ${x2} ${y2}`;

  return (
    <g>
      <defs>
        <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
        </marker>
        {reversible && (
          <marker id={`${id}-rev`} viewBox="0 0 10 10" refX="1" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 10 0 L 0 5 L 10 10 z" fill={color} />
          </marker>
        )}
      </defs>
      <path
        d={path}
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        markerEnd={`url(#${id})`}
        markerStart={reversible ? `url(#${id}-rev)` : undefined}
      />
      {enzyme && (
        <text x={midX + 5} y={midY - 6} fontSize={8} fill="#DC2626" fontWeight="600" fontStyle="italic">
          {enzyme}
        </text>
      )}
      {cofactor && (
        <text x={midX + 5} y={midY + 10} fontSize={7} fill="#059669">
          {cofactor}
        </text>
      )}
    </g>
  );
}
