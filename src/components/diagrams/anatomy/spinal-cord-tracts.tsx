'use client';

import { useState } from 'react';

interface Tract {
  id: string;
  name: string;
  direction: 'ascending' | 'descending';
  function: string;
  lesionEffects: string;
  x: number;
  y: number;
}

const tracts: Tract[] = [
  // Ascending tracts (sensory) - Blue
  {
    id: 'dc',
    name: 'Dorsal Columns',
    direction: 'ascending',
    function: 'Proprioception, vibration, fine touch (ipsilateral)',
    lesionEffects: 'Loss of proprioception and vibration below lesion (ipsilateral)',
    x: 120,
    y: 100,
  },
  {
    id: 'st',
    name: 'Spinothalamic Tract',
    direction: 'ascending',
    function: 'Pain and temperature (contralateral, crosses 1-2 levels)',
    lesionEffects: 'Loss of pain/temperature below lesion (contralateral)',
    x: 180,
    y: 120,
  },
  {
    id: 'sct',
    name: 'Spinocerebellar Tract',
    direction: 'ascending',
    function: 'Proprioception to cerebellum (ipsilateral)',
    lesionEffects: 'Ipsilateral coordination loss',
    x: 240,
    y: 100,
  },

  // Descending tracts (motor) - Red
  {
    id: 'cst',
    name: 'Corticospinal Tract',
    direction: 'descending',
    function: 'Voluntary motor control (crosses at medulla ~90%)',
    lesionEffects: 'Contralateral weakness/paralysis below lesion',
    x: 300,
    y: 140,
  },
  {
    id: 'rst',
    name: 'Rubrospinal Tract',
    direction: 'descending',
    function: 'Motor control, particularly flexor muscles',
    lesionEffects: 'Flexor weakness below lesion',
    x: 360,
    y: 120,
  },
  {
    id: 'vst',
    name: 'Vestibulospinal Tract',
    direction: 'descending',
    function: 'Balance and posture, extensor tone',
    lesionEffects: 'Ipsilateral weakness of extensors, balance loss',
    x: 420,
    y: 100,
  },
];

export function SpinalCordTractsSVG() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedTract = tracts.find((t) => t.id === selectedId);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 500"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Title */}
        <text x="400" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-800">
          Spinal Cord Tracts (Cross-Section)
        </text>

        {/* Outer dura */}
        <ellipse cx="400" cy="250" rx="180" ry="120" fill="none" stroke="#999" strokeWidth="2" />

        {/* Gray matter (butterfly shape) */}
        <g fill="#d1d5db" opacity="0.3">
          {/* Dorsal horns */}
          <path d="M 350 200 L 320 220 L 340 260 Z" />
          <path d="M 450 200 L 480 220 L 460 260 Z" />

          {/* Ventral horns */}
          <path d="M 350 280 L 320 300 L 340 320 Z" />
          <path d="M 450 280 L 480 300 L 460 320 Z" />

          {/* Central canal */}
          <circle cx="400" cy="250" r="8" fill="#e5e7eb" stroke="#999" strokeWidth="1" />
        </g>

        {/* Ascending Tracts - Blue (Sensory) - Left side */}
        <g>
          {/* Dorsal Columns */}
          <g
            onClick={() => setSelectedId('dc')}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <rect x="250" y="210" width="30" height="40" fill="#93c5fd" stroke="#1e40af" strokeWidth="2" />
            <text x="265" y="235" textAnchor="middle" className="text-xs font-bold fill-gray-800">
              DC
            </text>
          </g>

          {/* Spinothalamic Tract */}
          <g
            onClick={() => setSelectedId('st')}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <rect x="290" y="220" width="30" height="40" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
            <text x="305" y="245" textAnchor="middle" className="text-xs font-bold fill-gray-800">
              ST
            </text>
          </g>

          {/* Spinocerebellar Tract */}
          <g
            onClick={() => setSelectedId('sct')}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <rect x="330" y="210" width="30" height="40" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            <text x="345" y="235" textAnchor="middle" className="text-xs font-bold fill-gray-800">
              SC
            </text>
          </g>
        </g>

        {/* Descending Tracts - Red (Motor) - Right side */}
        <g>
          {/* Corticospinal Tract */}
          <g
            onClick={() => setSelectedId('cst')}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <rect x="470" y="210" width="30" height="40" fill="#f87171" stroke="#dc2626" strokeWidth="2" />
            <text x="485" y="235" textAnchor="middle" className="text-xs font-bold fill-gray-800">
              CST
            </text>
          </g>

          {/* Rubrospinal Tract */}
          <g
            onClick={() => setSelectedId('rst')}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <rect x="510" y="220" width="30" height="40" fill="#f472b6" stroke="#be123c" strokeWidth="2" />
            <text x="525" y="245" textAnchor="middle" className="text-xs font-bold fill-gray-800">
              RST
            </text>
          </g>

          {/* Vestibulospinal Tract */}
          <g
            onClick={() => setSelectedId('vst')}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <rect x="550" y="210" width="30" height="40" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <text x="565" y="235" textAnchor="middle" className="text-xs font-bold fill-gray-800">
              VST
            </text>
          </g>
        </g>

        {/* Arrows showing direction */}
        <g className="pointer-events-none">
          {/* Ascending arrow */}
          <path d="M 300 380 L 300 340" stroke="#1e40af" strokeWidth="2" markerEnd="url(#arrowAsc)" />
          <text x="250" y="365" className="text-sm font-semibold fill-blue-900">
            ASCENDING
          </text>
          <text x="230" y="390" className="text-xs fill-blue-700">
            (Sensory/Afferent)
          </text>

          {/* Descending arrow */}
          <path d="M 500 340 L 500 380" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowDesc)" />
          <text x="530" y="365" className="text-sm font-semibold fill-red-900">
            DESCENDING
          </text>
          <text x="520" y="390" className="text-xs fill-red-700">
            (Motor/Efferent)
          </text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowAsc"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
          >
            <polygon points="0 0, 10 5, 0 10" fill="#1e40af" />
          </marker>
          <marker
            id="arrowDesc"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
          >
            <polygon points="10 0, 0 5, 10 10" fill="#dc2626" />
          </marker>
        </defs>

        {/* Labels for orientation */}
        <g className="pointer-events-none text-xs fill-gray-600">
          <text x="220" y="145">Dorsal</text>
          <text x="220" y="365">Ventral</text>
          <text x="280" y="480">Left</text>
          <text x="700" y="480">Right</text>
        </g>
      </svg>

      {/* Info Panel */}
      {selectedTract && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">{selectedTract.name}</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Type:</span>{' '}
            <span className="capitalize">{selectedTract.direction}</span> (
            {selectedTract.direction === 'ascending' ? 'Sensory' : 'Motor'})
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Function:</span> {selectedTract.function}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Lesion Effects:</span> {selectedTract.lesionEffects}
          </p>
          <p className="text-xs text-gray-500 mt-3 italic">
            Clinical pearl: Determine which level and side is affected by testing sensory and motor
            functions to localize spinal cord lesions.
          </p>
        </div>
      )}
    </div>
  );
}
