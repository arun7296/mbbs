'use client';

import { useState } from 'react';

interface Label {
  id: string;
  name: string;
  description: string;
}

const labels: Label[] = [
  {
    id: 'ra',
    name: 'Right Atrium',
    description: 'Receives deoxygenated blood from SVC and IVC. Thin-walled chamber.',
  },
  {
    id: 'rv',
    name: 'Right Ventricle',
    description: 'Pumps blood to pulmonary circulation. Thicker than atrium but thinner than LV.',
  },
  {
    id: 'la',
    name: 'Left Atrium',
    description: 'Receives oxygenated blood from pulmonary veins.',
  },
  {
    id: 'lv',
    name: 'Left Ventricle',
    description: 'Pumps oxygenated blood to systemic circulation. Thickest and most muscular chamber.',
  },
  {
    id: 'septum',
    name: 'Interventricular Septum',
    description: 'Separates left and right ventricles. Mostly muscular with membranous part.',
  },
  {
    id: 'tricuspid',
    name: 'Tricuspid Valve',
    description: 'Between RA and RV. Has 3 cusps. Prevents backflow into RA.',
  },
  {
    id: 'mitral',
    name: 'Mitral Valve (Bicuspid)',
    description: 'Between LA and LV. Has 2 cusps. Prevents backflow into LA.',
  },
  {
    id: 'aortic',
    name: 'Aortic Valve',
    description: 'Between LV and aorta. Has 3 cusps. Prevents backflow into LV.',
  },
  {
    id: 'pulmonary',
    name: 'Pulmonary Valve',
    description: 'Between RV and pulmonary artery. Has 3 cusps. Prevents backflow into RV.',
  },
];

export function HeartChambersDiagram() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedLabel = labels.find((l) => l.id === selectedId);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Heart outline */}
        <path
          d="M 400 150 C 350 150 300 180 300 250 L 300 450 Q 300 500 350 520 L 450 520 Q 500 500 500 450 L 500 250 C 500 180 450 150 400 150"
          fill="none"
          stroke="#333"
          strokeWidth="2"
        />

        {/* Right Atrium - light blue */}
        <g
          onClick={() => setSelectedId('ra')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect
            x="320"
            y="170"
            width="60"
            height="70"
            rx="8"
            fill="#93c5fd"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <text x="350" y="215" textAnchor="middle" className="text-xs font-bold fill-black">
            RA
          </text>
        </g>

        {/* Right Ventricle - darker blue */}
        <g
          onClick={() => setSelectedId('rv')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect
            x="320"
            y="280"
            width="60"
            height="100"
            rx="8"
            fill="#60a5fa"
            stroke="#0c4a6e"
            strokeWidth="2"
          />
          <text x="350" y="335" textAnchor="middle" className="text-xs font-bold fill-white">
            RV
          </text>
        </g>

        {/* Left Atrium - light red */}
        <g
          onClick={() => setSelectedId('la')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect
            x="420"
            y="170"
            width="60"
            height="70"
            rx="8"
            fill="#fca5a5"
            stroke="#dc2626"
            strokeWidth="2"
          />
          <text x="450" y="215" textAnchor="middle" className="text-xs font-bold fill-black">
            LA
          </text>
        </g>

        {/* Left Ventricle - darker red */}
        <g
          onClick={() => setSelectedId('lv')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect
            x="420"
            y="280"
            width="60"
            height="100"
            rx="8"
            fill="#f87171"
            stroke="#7f1d1d"
            strokeWidth="2"
          />
          <text x="450" y="335" textAnchor="middle" className="text-xs font-bold fill-white">
            LV
          </text>
        </g>

        {/* Interventricular Septum */}
        <g
          onClick={() => setSelectedId('septum')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <line
            x1="390"
            y1="280"
            x2="390"
            y2="380"
            stroke="#666"
            strokeWidth="3"
            strokeDasharray="5,5"
          />
          <text x="395" y="335" className="text-xs font-bold fill-gray-700">
            Septum
          </text>
        </g>

        {/* Tricuspid Valve */}
        <g
          onClick={() => setSelectedId('tricuspid')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="350" cy="270" r="8" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
          <text x="350" y="255" textAnchor="middle" className="text-xs fill-blue-700 font-bold">
            TV
          </text>
        </g>

        {/* Mitral Valve */}
        <g
          onClick={() => setSelectedId('mitral')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="450" cy="270" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
          <text x="450" y="255" textAnchor="middle" className="text-xs fill-red-700 font-bold">
            MV
          </text>
        </g>

        {/* Aortic Valve */}
        <g
          onClick={() => setSelectedId('aortic')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="480" cy="330" r="8" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" />
          <text x="505" y="335" className="text-xs fill-red-700 font-bold">
            AoV
          </text>
        </g>

        {/* Pulmonary Valve */}
        <g
          onClick={() => setSelectedId('pulmonary')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="320" cy="330" r="8" fill="#60a5fa" stroke="#0c4a6e" strokeWidth="2" />
          <text x="295" y="335" textAnchor="end" className="text-xs fill-blue-700 font-bold">
            PV
          </text>
        </g>

        {/* Blood flow arrows and labels */}

        {/* SVC */}
        <g className="pointer-events-none">
          <path d="M 280 200 L 320 200" stroke="#0c4a6e" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="270" y="190" className="text-sm font-bold fill-blue-900">
            SVC
          </text>
        </g>

        {/* IVC */}
        <g className="pointer-events-none">
          <path d="M 280 330 L 320 330" stroke="#0c4a6e" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="270" y="350" className="text-sm font-bold fill-blue-900">
            IVC
          </text>
        </g>

        {/* Pulmonary Artery */}
        <g className="pointer-events-none">
          <path d="M 320 330 L 220 330" stroke="#0c4a6e" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="210" y="315" className="text-sm font-bold fill-blue-900">
            PA
          </text>
        </g>

        {/* Pulmonary Veins */}
        <g className="pointer-events-none">
          <path d="M 480 200 L 420 200" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="525" y="190" className="text-sm font-bold fill-red-900">
            PV
          </text>
        </g>

        {/* Aorta */}
        <g className="pointer-events-none">
          <path d="M 480 330 L 580 330" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <text x="590" y="315" className="text-sm font-bold fill-red-900">
            Aorta
          </text>
        </g>

        {/* Arrowhead marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#333" />
          </marker>
        </defs>
      </svg>

      {/* Info Panel */}
      {selectedLabel && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">{selectedLabel.name}</h3>
          <p className="text-gray-700">{selectedLabel.description}</p>
        </div>
      )}
    </div>
  );
}
