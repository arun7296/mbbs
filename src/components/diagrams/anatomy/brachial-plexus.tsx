'use client';

import { useState } from 'react';

interface PlexusNode {
  id: string;
  name: string;
  type: 'root' | 'trunk' | 'division' | 'cord' | 'branch';
  description: string;
  musclesSupplied?: string[];
  x: number;
  y: number;
}

const nodes: PlexusNode[] = [
  // Roots
  { id: 'c5', name: 'C5', type: 'root', description: 'Cervical 5 nerve root', x: 50, y: 100 },
  { id: 'c6', name: 'C6', type: 'root', description: 'Cervical 6 nerve root', x: 50, y: 150 },
  { id: 'c7', name: 'C7', type: 'root', description: 'Cervical 7 nerve root', x: 50, y: 200 },
  { id: 't1', name: 'T1', type: 'root', description: 'Thoracic 1 nerve root', x: 50, y: 250 },

  // Trunks
  {
    id: 'ut',
    name: 'Upper Trunk',
    type: 'trunk',
    description: 'Formed by C5 and C6',
    x: 150,
    y: 125,
  },
  {
    id: 'mt',
    name: 'Middle Trunk',
    type: 'trunk',
    description: 'Continuation of C7',
    x: 150,
    y: 200,
  },
  {
    id: 'lt',
    name: 'Lower Trunk',
    type: 'trunk',
    description: 'Formed by C8 and T1',
    x: 150,
    y: 275,
  },

  // Divisions
  {
    id: 'uad',
    name: 'Upper Ant Div',
    type: 'division',
    description: 'Anterior division of upper trunk',
    x: 250,
    y: 100,
  },
  {
    id: 'upd',
    name: 'Upper Post Div',
    type: 'division',
    description: 'Posterior division of upper trunk',
    x: 250,
    y: 150,
  },
  {
    id: 'mad',
    name: 'Mid Ant Div',
    type: 'division',
    description: 'Anterior division of middle trunk',
    x: 250,
    y: 200,
  },
  {
    id: 'mpd',
    name: 'Mid Post Div',
    type: 'division',
    description: 'Posterior division of middle trunk',
    x: 250,
    y: 220,
  },
  {
    id: 'lad',
    name: 'Lower Ant Div',
    type: 'division',
    description: 'Anterior division of lower trunk',
    x: 250,
    y: 270,
  },
  {
    id: 'lpd',
    name: 'Lower Post Div',
    type: 'division',
    description: 'Posterior division of lower trunk',
    x: 250,
    y: 290,
  },

  // Cords
  {
    id: 'lc',
    name: 'Lateral Cord',
    type: 'cord',
    description: 'Formed by anterior divisions of upper and middle trunk',
    x: 350,
    y: 150,
  },
  {
    id: 'pc',
    name: 'Posterior Cord',
    type: 'cord',
    description: 'Formed by all three posterior divisions',
    x: 350,
    y: 200,
  },
  {
    id: 'mc',
    name: 'Medial Cord',
    type: 'cord',
    description: 'Continuation of lower trunk anterior division',
    x: 350,
    y: 280,
  },

  // Terminal Branches
  {
    id: 'muscut',
    name: 'Musculocutaneous',
    type: 'branch',
    description: 'Motor: Biceps, Brachialis, Coracobrachialis. Sensory: Lateral forearm',
    musclesSupplied: ['Biceps Brachii', 'Brachialis', 'Coracobrachialis'],
    x: 500,
    y: 80,
  },
  {
    id: 'axil',
    name: 'Axillary',
    type: 'branch',
    description: 'Motor: Deltoid, Teres Minor. Sensory: Lateral shoulder',
    musclesSupplied: ['Deltoid', 'Teres Minor'],
    x: 500,
    y: 140,
  },
  {
    id: 'rad',
    name: 'Radial',
    type: 'branch',
    description: 'Motor: Triceps, Extensors. Sensory: Dorsal hand',
    musclesSupplied: ['Triceps', 'Extensor Carpi Radialis', 'Extensor Carpi Ulnaris'],
    x: 500,
    y: 200,
  },
  {
    id: 'med',
    name: 'Median',
    type: 'branch',
    description: 'Motor: Flexors, Pronators. Sensory: Lateral palm',
    musclesSupplied: ['Pronator Teres', 'Flexor Carpi Radialis', 'Palmaris Longus'],
    x: 500,
    y: 280,
  },
  {
    id: 'uln',
    name: 'Ulnar',
    type: 'branch',
    description: 'Motor: Intrinsic hand, Medial flexors. Sensory: Medial palm',
    musclesSupplied: ['Flexor Carpi Ulnaris', 'Interossei', 'Lumbricals'],
    x: 500,
    y: 340,
  },
];

const colorMap: Record<string, string> = {
  root: '#93c5fd',
  trunk: '#86efac',
  division: '#fef08a',
  cord: '#fdba74',
  branch: '#f87171',
};

const borderColorMap: Record<string, string> = {
  root: '#1e40af',
  trunk: '#15803d',
  division: '#ca8a04',
  cord: '#c2410c',
  branch: '#dc2626',
};

export function BrachialPlexusSVG() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedNode = nodes.find((n) => n.id === selectedId);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 600 400"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Lines connecting nodes */}
        <g className="stroke-gray-400 stroke-1 pointer-events-none">
          {/* Roots to Trunks */}
          <line x1="50" y1="100" x2="150" y2="125" />
          <line x1="50" y1="150" x2="150" y2="125" />
          <line x1="50" y1="200" x2="150" y2="200" />
          <line x1="50" y1="250" x2="150" y2="275" />

          {/* Trunks to Divisions */}
          <line x1="150" y1="125" x2="250" y2="100" />
          <line x1="150" y1="125" x2="250" y2="150" />
          <line x1="150" y1="200" x2="250" y2="200" />
          <line x1="150" y1="200" x2="250" y2="220" />
          <line x1="150" y1="275" x2="250" y2="270" />
          <line x1="150" y1="275" x2="250" y2="290" />

          {/* Divisions to Cords */}
          <line x1="250" y1="100" x2="350" y2="150" />
          <line x1="250" y1="150" x2="350" y2="150" />
          <line x1="250" y1="200" x2="350" y2="200" />
          <line x1="250" y1="220" x2="350" y2="200" />
          <line x1="250" y1="270" x2="350" y2="280" />
          <line x1="250" y1="290" x2="350" y2="280" />

          {/* Cords to Branches */}
          <line x1="350" y1="150" x2="500" y2="80" />
          <line x1="350" y1="150" x2="500" y2="140" />
          <line x1="350" y1="200" x2="500" y2="140" />
          <line x1="350" y1="200" x2="500" y2="200" />
          <line x1="350" y1="280" x2="500" y2="280" />
          <line x1="350" y1="280" x2="500" y2="340" />
        </g>

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            onClick={() => setSelectedId(node.id)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="28"
              fill={colorMap[node.type]}
              stroke={borderColorMap[node.type]}
              strokeWidth="2"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dy="0.3em"
              className="text-xs font-bold fill-gray-800"
            >
              {node.name.split(' ')[0]}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g className="pointer-events-none">
          <text x="50" y="380" className="text-xs font-bold fill-gray-700">
            Roots (Blue) → Trunks (Green) → Divisions (Yellow) → Cords (Orange) → Branches (Red)
          </text>
        </g>
      </svg>

      {/* Info Panel */}
      {selectedNode && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">{selectedNode.name}</h3>
          <p className="text-gray-700 mb-2">{selectedNode.description}</p>
          {selectedNode.musclesSupplied && selectedNode.musclesSupplied.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Muscles Supplied:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {selectedNode.musclesSupplied.map((muscle, idx) => (
                  <li key={idx}>{muscle}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-3 italic">
            Mnemonic: Robert Taylor Drinks Cold Beer (Roots, Trunks, Divisions, Cords, Branches)
          </p>
        </div>
      )}
    </div>
  );
}
