'use client';

import { useState } from 'react';

interface Band {
  id: string;
  name: string;
  composition: string;
  description: string;
  normalWidth: number;
  contractedWidth: number;
}

const bands: Band[] = [
  {
    id: 'zline',
    name: 'Z Line (Z Disc)',
    composition: 'Alpha-actinin protein anchors',
    description:
      'Boundary of sarcomere. Anchors thin filaments. Passes perpendicular to fiber axis.',
    normalWidth: 0,
    contractedWidth: 0,
  },
  {
    id: 'iband',
    name: 'I Band (Isotropic)',
    composition: 'Thin filaments only',
    description:
      'Contains actin filaments only. Light microscopy appearance. Shortens during contraction.',
    normalWidth: 60,
    contractedWidth: 30,
  },
  {
    id: 'aband',
    name: 'A Band (Anisotropic)',
    composition: 'Thick and thin filaments overlap',
    description:
      'Thick filaments with overlapping thin filaments. Dark under light microscopy. Does not change length.',
    normalWidth: 150,
    contractedWidth: 150,
  },
  {
    id: 'hzone',
    name: 'H Zone',
    composition: 'Thick filaments only',
    description:
      'Contains thick (myosin) filaments only. Central region of A band. Disappears during full contraction.',
    normalWidth: 60,
    contractedWidth: 0,
  },
  {
    id: 'mline',
    name: 'M Line (M Disc)',
    composition: 'Myomesin protein',
    description:
      'Center of thick filaments. Anchors myosin filaments. Perpendicular midline of sarcomere.',
    normalWidth: 0,
    contractedWidth: 0,
  },
];

export function SarcomereDiagram() {
  const [isContracted, setIsContracted] = useState(false);

  const getWidth = (band: Band) => (isContracted ? band.contractedWidth : band.normalWidth);

  // Calculate positions dynamically based on state
  let positions: Record<string, number> = {
    z1: 50,
  };

  positions.ibandb1 = positions.z1 + getWidth(bands[1]) / 2;
  positions.aband1 = positions.ibandb1 + (getWidth(bands[1]) + getWidth(bands[2])) / 2;
  positions.hzone = positions.aband1;
  positions.mline = positions.aband1;
  positions.z2 = positions.z1 + getWidth(bands[1]) + getWidth(bands[2]);

  const selectedBand = bands[0]; // Default for display

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 800 500"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Title */}
        <text x="400" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-800">
          Sarcomere Structure
          {isContracted ? ' (Contracted)' : ' (Relaxed)'}
        </text>

        {/* Relax/Contract toggle display */}
        <text x="400" y="60" textAnchor="middle" className="text-sm fill-gray-600">
          Click "Toggle Contraction" below to see changes
        </text>

        {/* Z Lines */}
        <line x1="80" y1="120" x2="80" y2="280" stroke="#000" strokeWidth="4" />
        <text x="80" y="310" textAnchor="middle" className="text-xs font-bold fill-gray-800">
          Z
        </text>

        <line x1="530" y1="120" x2="530" y2="280" stroke="#000" strokeWidth="4" />
        <text x="530" y="310" textAnchor="middle" className="text-xs font-bold fill-gray-800">
          Z
        </text>

        {/* M Line */}
        <line x1="305" y1="150" x2="305" y2="250" stroke="#999" strokeWidth="2" strokeDasharray="4" />
        <text x="305" y="320" textAnchor="middle" className="text-xs font-bold fill-gray-700">
          M
        </text>

        {/* I Band - Thin filaments only (left side) */}
        <g>
          <rect
            x="80"
            y="170"
            width={getWidth(bands[1]) * 2}
            height="60"
            fill="#e0e7ff"
            stroke="#4f46e5"
            strokeWidth="2"
          />
          <text
            x={80 + getWidth(bands[1])}
            y="200"
            textAnchor="middle"
            className="text-xs font-bold fill-indigo-900"
          >
            I
          </text>
        </g>

        {/* A Band - overlapping thick and thin filaments */}
        <g>
          <rect
            x={80 + getWidth(bands[1]) * 2}
            y="140"
            width={getWidth(bands[2]) * 2}
            height="120"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="2"
          />
          <text
            x={80 + getWidth(bands[1]) * 2 + getWidth(bands[2])}
            y="200"
            textAnchor="middle"
            className="text-xs font-bold fill-amber-900"
          >
            A
          </text>
        </g>

        {/* H Zone - thick filaments only (center of A band) */}
        <g>
          <rect
            x={305 - getWidth(bands[3])}
            y="160"
            width={getWidth(bands[3]) * 2}
            height="80"
            fill="#fca5a5"
            stroke="#dc2626"
            strokeWidth="2"
            opacity="0.6"
          />
          <text
            x="305"
            y="200"
            textAnchor="middle"
            className="text-xs font-bold fill-red-900"
          >
            H
          </text>
        </g>

        {/* I Band - Thin filaments only (right side) */}
        <g>
          <rect
            x={530 - getWidth(bands[1]) * 2}
            y="170"
            width={getWidth(bands[1]) * 2}
            height="60"
            fill="#e0e7ff"
            stroke="#4f46e5"
            strokeWidth="2"
          />
          <text
            x={530 - getWidth(bands[1])}
            y="200"
            textAnchor="middle"
            className="text-xs font-bold fill-indigo-900"
          >
            I
          </text>
        </g>

        {/* Thin filaments (actin) visualization */}
        <g className="pointer-events-none">
          <text x="80" y="360" className="text-xs font-semibold fill-gray-700">
            Thin Filaments (Actin):
          </text>
          <circle cx="95" cy="370" r="5" fill="#4f46e5" />
          <text x="110" y="375" className="text-xs fill-gray-700">
            Extend from Z lines
          </text>

          <text x="80" y="395" className="text-xs font-semibold fill-gray-700">
            Thick Filaments (Myosin):
          </text>
          <circle cx="95" cy="405" r="5" fill="#d97706" />
          <text x="110" y="410" className="text-xs fill-gray-700">
            Centered at M line
          </text>
        </g>

        {/* Measurements - Relaxed */}
        {!isContracted && (
          <g className="pointer-events-none">
            <text x="650" y="80" className="text-sm font-bold fill-gray-800">
              Relaxed State
            </text>
            <text x="650" y="100" className="text-xs fill-gray-700">
              Sarcomere length: ~2.5 μm
            </text>
            <text x="650" y="120" className="text-xs fill-gray-700">
              I band: Normal width
            </text>
            <text x="650" y="140" className="text-xs fill-gray-700">
              H zone: Visible
            </text>
            <text x="650" y="160" className="text-xs fill-gray-700">
              A band: Unchanged
            </text>
          </g>
        )}

        {/* Measurements - Contracted */}
        {isContracted && (
          <g className="pointer-events-none">
            <text x="650" y="80" className="text-sm font-bold fill-gray-800">
              Contracted State
            </text>
            <text x="650" y="100" className="text-xs fill-gray-700">
              Sarcomere length: ~1.5 μm
            </text>
            <text x="650" y="120" className="text-xs fill-gray-700">
              I band: Narrower
            </text>
            <text x="650" y="140" className="text-xs fill-gray-700">
              H zone: Minimal/absent
            </text>
            <text x="650" y="160" className="text-xs fill-gray-700">
              A band: Unchanged
            </text>
          </g>
        )}
      </svg>

      {/* Controls and Info */}
      <div className="mt-4 flex justify-center mb-4">
        <button
          onClick={() => setIsContracted(!isContracted)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {isContracted ? 'Relax Sarcomere' : 'Contract Sarcomere'}
        </button>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold text-lg text-blue-900 mb-2">Sarcomere Bands and Zones</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Bands (Light Microscopy):</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">I Band:</span> Isotropic (light), thin filaments
              </li>
              <li>
                <span className="font-semibold">A Band:</span> Anisotropic (dark), all filaments
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Zones (EM):</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">H Zone:</span> Thick filaments only
              </li>
              <li>
                <span className="font-semibold">M Line:</span> Myosin anchoring center
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3 italic">
          During contraction, thick filaments pull thin filaments toward the M line, shortening the I
          band and H zone while A band length remains constant. This is the sliding filament theory.
        </p>
      </div>
    </div>
  );
}
