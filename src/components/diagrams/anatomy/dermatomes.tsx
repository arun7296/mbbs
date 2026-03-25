'use client';

import { useState } from 'react';

interface Dermatome {
  id: string;
  level: string;
  region: string;
  landmark?: string;
  color: string;
  borderColor: string;
  pathData: string;
}

const dermatomes: Dermatome[] = [
  // Cervical (C1-C8) - Blue shades
  {
    id: 'c1',
    level: 'C1',
    region: 'Vertex of head',
    color: '#dbeafe',
    borderColor: '#0284c7',
    pathData: 'M 200 20 L 220 40 L 220 60 L 200 50 Z',
  },
  {
    id: 'c2',
    level: 'C2',
    region: 'Occipital region and ear',
    landmark: 'Upper neck',
    color: '#bfdbfe',
    borderColor: '#0284c7',
    pathData: 'M 200 50 L 220 60 L 240 80 L 220 70 Z',
  },
  {
    id: 'c3',
    level: 'C3',
    region: 'Lateral neck',
    color: '#93c5fd',
    borderColor: '#0284c7',
    pathData: 'M 180 70 L 200 80 L 220 100 L 200 90 Z',
  },
  {
    id: 'c4',
    level: 'C4',
    region: 'Shoulder and arm',
    color: '#60a5fa',
    borderColor: '#0284c7',
    pathData: 'M 170 90 L 190 100 L 210 120 L 190 110 Z',
  },
  {
    id: 'c5',
    level: 'C5',
    region: 'Lateral arm',
    color: '#3b82f6',
    borderColor: '#0284c7',
    pathData: 'M 160 110 L 180 120 L 200 140 L 180 130 Z',
  },
  {
    id: 'c6',
    level: 'C6',
    region: 'Thumb and radial forearm',
    landmark: 'Thumb area',
    color: '#2563eb',
    borderColor: '#0284c7',
    pathData: 'M 150 130 L 170 140 L 190 160 L 170 150 Z',
  },
  {
    id: 'c7',
    level: 'C7',
    region: 'Middle finger',
    color: '#1d4ed8',
    borderColor: '#0284c7',
    pathData: 'M 140 150 L 160 160 L 180 180 L 160 170 Z',
  },
  {
    id: 'c8',
    level: 'C8',
    region: 'Medial forearm',
    color: '#1e40af',
    borderColor: '#0284c7',
    pathData: 'M 130 170 L 150 180 L 170 200 L 150 190 Z',
  },

  // Thoracic (T1-T12) - Green shades
  {
    id: 't1',
    level: 'T1',
    region: 'Medial arm',
    color: '#dcfce7',
    borderColor: '#15803d',
    pathData: 'M 140 190 L 160 200 L 180 220 L 160 210 Z',
  },
  {
    id: 't4',
    level: 'T4',
    region: 'Chest',
    landmark: 'Nipple level',
    color: '#bbf7d0',
    borderColor: '#15803d',
    pathData: 'M 200 200 L 240 210 L 260 240 L 220 230 Z',
  },
  {
    id: 't10',
    level: 'T10',
    region: 'Abdomen',
    landmark: 'Umbilicus',
    color: '#6ee7b7',
    borderColor: '#15803d',
    pathData: 'M 200 280 L 240 290 L 260 320 L 220 310 Z',
  },
  {
    id: 't12',
    level: 'T12',
    region: 'Lower abdomen',
    color: '#34d399',
    borderColor: '#15803d',
    pathData: 'M 200 330 L 240 340 L 260 370 L 220 360 Z',
  },

  // Lumbar (L1-L5) - Yellow shades
  {
    id: 'l1',
    level: 'L1',
    region: 'Inguinal region',
    landmark: 'Groin area',
    color: '#fef3c7',
    borderColor: '#ca8a04',
    pathData: 'M 190 360 L 230 370 L 250 390 L 210 380 Z',
  },
  {
    id: 'l2',
    level: 'L2',
    region: 'Anterior thigh',
    color: '#fde68a',
    borderColor: '#ca8a04',
    pathData: 'M 180 380 L 220 390 L 240 410 L 200 400 Z',
  },
  {
    id: 'l3',
    level: 'L3',
    region: 'Medial thigh',
    color: '#fcd34d',
    borderColor: '#ca8a04',
    pathData: 'M 170 400 L 210 410 L 230 430 L 190 420 Z',
  },
  {
    id: 'l4',
    level: 'L4',
    region: 'Lateral thigh',
    color: '#fbbf24',
    borderColor: '#ca8a04',
    pathData: 'M 160 420 L 200 430 L 220 450 L 180 440 Z',
  },
  {
    id: 'l5',
    level: 'L5',
    region: 'Leg and foot',
    color: '#f59e0b',
    borderColor: '#ca8a04',
    pathData: 'M 150 440 L 190 450 L 210 470 L 170 460 Z',
  },

  // Sacral (S1-S5) - Orange shades
  {
    id: 's1',
    level: 'S1',
    region: 'Posterior leg',
    color: '#fed7aa',
    borderColor: '#c2410c',
    pathData: 'M 220 440 L 260 450 L 280 470 L 240 460 Z',
  },
  {
    id: 's2',
    level: 'S2',
    region: 'Buttock',
    color: '#fdba74',
    borderColor: '#c2410c',
    pathData: 'M 210 420 L 250 430 L 270 450 L 230 440 Z',
  },
  {
    id: 's3',
    level: 'S3',
    region: 'Perineum',
    color: '#fb923c',
    borderColor: '#c2410c',
    pathData: 'M 200 400 L 240 410 L 260 430 L 220 420 Z',
  },
  {
    id: 's4',
    level: 'S4',
    region: 'Perineum',
    color: '#f97316',
    borderColor: '#c2410c',
    pathData: 'M 190 380 L 230 390 L 250 410 L 210 400 Z',
  },
];

export function DermatomeMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedDermatome = dermatomes.find((d) => d.id === selectedId);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 400 500"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Body outline */}
        <g className="pointer-events-none">
          {/* Head */}
          <circle cx="200" cy="40" r="25" fill="#e5e7eb" stroke="#999" strokeWidth="1" />
          {/* Neck */}
          <rect x="185" y="65" width="30" height="20" fill="#e5e7eb" stroke="#999" strokeWidth="1" />
          {/* Trunk */}
          <rect x="160" y="85" width="80" height="160" fill="#f3f4f6" stroke="#999" strokeWidth="1" />
          {/* Arms */}
          <rect x="120" y="95" width="30" height="120" fill="#f3f4f6" stroke="#999" strokeWidth="1" />
          <rect x="250" y="95" width="30" height="120" fill="#f3f4f6" stroke="#999" strokeWidth="1" />
          {/* Legs */}
          <rect x="170" y="245" width="25" height="200" fill="#f3f4f6" stroke="#999" strokeWidth="1" />
          <rect x="205" y="245" width="25" height="200" fill="#f3f4f6" stroke="#999" strokeWidth="1" />
        </g>

        {/* Dermatome regions */}
        {dermatomes.map((derm) => (
          <g
            key={derm.id}
            onClick={() => setSelectedId(derm.id)}
            className="cursor-pointer transition-opacity hover:opacity-70"
          >
            <path
              d={derm.pathData}
              fill={derm.color}
              stroke={derm.borderColor}
              strokeWidth="2"
            />
            <text
              x={200}
              y={parseInt(derm.pathData.split(' ')[1]) + 10}
              textAnchor="middle"
              className="text-xs font-bold fill-gray-800"
            >
              {derm.level}
            </text>
          </g>
        ))}

        {/* Legend text */}
        <g className="pointer-events-none">
          <text x="10" y="490" className="text-xs font-semibold fill-gray-700">
            C = Cervical, T = Thoracic, L = Lumbar, S = Sacral
          </text>
        </g>
      </svg>

      {/* Info Panel */}
      {selectedDermatome && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">
            Dermatome {selectedDermatome.level}
          </h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Region:</span> {selectedDermatome.region}
          </p>
          {selectedDermatome.landmark && (
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Key Landmark:</span> {selectedDermatome.landmark}
            </p>
          )}
          <p className="text-xs text-gray-500 mt-3 italic">
            Dermatomes are areas of skin supplied by a single spinal nerve. Clinically important for
            assessing spinal cord lesions and locating neurological deficits.
          </p>
        </div>
      )}
    </div>
  );
}
