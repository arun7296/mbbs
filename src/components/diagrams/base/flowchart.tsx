"use client";

import { useState } from "react";

export interface FlowNode {
  id: string;
  label: string;
  description?: string;
  type: "start" | "decision" | "action" | "end";
  x: number;
  y: number;
  color?: string;
}

export interface FlowEdge {
  from: string;
  to: string;
  label?: string;
}

interface FlowchartProps {
  nodes: FlowNode[];
  edges: FlowEdge[];
  title: string;
}

export function Flowchart({ nodes, edges, title }: FlowchartProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const active = nodes.find(n => n.id === activeNode);

  const getNodeShape = (node: FlowNode) => {
    const color = node.color || "#3B82F6";
    const isActive = node.id === activeNode;
    const w = 140, h = node.type === "decision" ? 60 : 44;

    switch (node.type) {
      case "start":
      case "end":
        return (
          <rect x={node.x - w/2} y={node.y - h/2} width={w} height={h} rx={22}
            fill={isActive ? color : `${color}15`} stroke={color} strokeWidth={isActive ? 3 : 2} />
        );
      case "decision":
        return (
          <polygon
            points={`${node.x},${node.y-35} ${node.x+75},${node.y} ${node.x},${node.y+35} ${node.x-75},${node.y}`}
            fill={isActive ? color : `${color}15`} stroke={color} strokeWidth={isActive ? 3 : 2} />
        );
      default:
        return (
          <rect x={node.x - w/2} y={node.y - h/2} width={w} height={h} rx={6}
            fill={isActive ? color : `${color}15`} stroke={color} strokeWidth={isActive ? 3 : 2} />
        );
    }
  };

  return (
    <div className="space-y-3">
      <svg viewBox="0 0 800 600" className="w-full" role="img" aria-label={title}>
        <defs>
          <marker id="flowArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6B7280" />
          </marker>
        </defs>

        {edges.map((edge, i) => {
          const from = nodes.find(n => n.id === edge.from);
          const to = nodes.find(n => n.id === edge.to);
          if (!from || !to) return null;
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          return (
            <g key={i}>
              <line x1={from.x} y1={from.y + 22} x2={to.x} y2={to.y - 22}
                stroke="#9CA3AF" strokeWidth={1.5} markerEnd="url(#flowArrow)" />
              {edge.label && (
                <text x={midX + 5} y={midY} fontSize={9} fill="#6B7280" fontWeight="500">{edge.label}</text>
              )}
            </g>
          );
        })}

        {nodes.map(node => (
          <g key={node.id} className="cursor-pointer" onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}>
            {getNodeShape(node)}
            <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize={10} fontWeight="600"
              fill={node.id === activeNode ? "white" : (node.color || "#1F2937")}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {active?.description && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
          <h4 className="text-sm font-semibold" style={{ color: active.color || "#3B82F6" }}>{active.label}</h4>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{active.description}</p>
        </div>
      )}
    </div>
  );
}
