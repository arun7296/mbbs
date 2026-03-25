'use client';

import { useState } from 'react';

interface CranialNerve {
  id: string;
  romanNumeral: string;
  name: string;
  type: 'sensory' | 'motor' | 'mixed';
  foramen: string;
  function: string;
  x: number;
  y: number;
}

const cranialNerves: CranialNerve[] = [
  {
    id: 'cn1',
    romanNumeral: 'I',
    name: 'Olfactory',
    type: 'sensory',
    foramen: 'Olfactory foramina',
    function: 'Smell',
    x: 150,
    y: 100,
  },
  {
    id: 'cn2',
    romanNumeral: 'II',
    name: 'Optic',
    type: 'sensory',
    foramen: 'Optic canal',
    function: 'Vision',
    x: 250,
    y: 100,
  },
  {
    id: 'cn3',
    romanNumeral: 'III',
    name: 'Oculomotor',
    type: 'motor',
    foramen: 'Superior orbital fissure',
    function: 'Eye movement (medial, up, down), pupil constriction',
    x: 350,
    y: 100,
  },
  {
    id: 'cn4',
    romanNumeral: 'IV',
    name: 'Trochlear',
    type: 'motor',
    foramen: 'Superior orbital fissure',
    function: 'Superior oblique eye movement',
    x: 450,
    y: 100,
  },
  {
    id: 'cn5',
    romanNumeral: 'V',
    name: 'Trigeminal',
    type: 'mixed',
    foramen: 'Foramen ovale',
    function: 'Facial sensation (3 divisions), Mastication',
    x: 550,
    y: 100,
  },
  {
    id: 'cn6',
    romanNumeral: 'VI',
    name: 'Abducens',
    type: 'motor',
    foramen: 'Superior orbital fissure',
    function: 'Lateral rectus eye movement',
    x: 650,
    y: 100,
  },
  {
    id: 'cn7',
    romanNumeral: 'VII',
    name: 'Facial',
    type: 'mixed',
    foramen: 'Stylomastoid foramen',
    function: 'Facial expression, Taste (anterior 2/3 tongue), Lacrimation',
    x: 150,
    y: 220,
  },
  {
    id: 'cn8',
    romanNumeral: 'VIII',
    name: 'Vestibulocochlear',
    type: 'sensory',
    foramen: 'Internal acoustic meatus',
    function: 'Hearing and balance',
    x: 250,
    y: 220,
  },
  {
    id: 'cn9',
    romanNumeral: 'IX',
    name: 'Glossopharyngeal',
    type: 'mixed',
    foramen: 'Jugular foramen',
    function: 'Taste (posterior 1/3 tongue), Pharyngeal sensation, Swallowing',
    x: 350,
    y: 220,
  },
  {
    id: 'cn10',
    romanNumeral: 'X',
    name: 'Vagus',
    type: 'mixed',
    foramen: 'Jugular foramen',
    function: 'Voice, Swallowing, Parasympathetic, Laryngeal innervation',
    x: 450,
    y: 220,
  },
  {
    id: 'cn11',
    romanNumeral: 'XI',
    name: 'Accessory',
    type: 'motor',
    foramen: 'Jugular foramen',
    function: 'Shoulder shrug (trapezius), Head turning (SCM)',
    x: 550,
    y: 220,
  },
  {
    id: 'cn12',
    romanNumeral: 'XII',
    name: 'Hypoglossal',
    type: 'motor',
    foramen: 'Hypoglossal canal',
    function: 'Tongue movement',
    x: 650,
    y: 220,
  },
];

const colorMap: Record<string, string> = {
  sensory: '#93c5fd',
  motor: '#f87171',
  mixed: '#d8b4fe',
};

const borderColorMap: Record<string, string> = {
  sensory: '#1e40af',
  motor: '#dc2626',
  mixed: '#7e22ce',
};

const mnemonics = [
  'Oh Oh Oh To Touch And Feel Very Good Velvet AH',
  'Olfactory Optic Oculomotor Trochlear Trigeminal Abducens Facial Vestibulocochlear Glossopharyngeal Vagus Accessory Hypoglossal',
];

export function CranialNervesDiagram() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedNerve = cranialNerves.find((n) => n.id === selectedId);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <svg
        viewBox="0 0 800 400"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Skull base outline (simplified) */}
        <g className="pointer-events-none">
          <ellipse cx="400" cy="50" rx="200" ry="40" fill="#e5e7eb" stroke="#999" strokeWidth="1" />
          <line x1="200" y1="90" x2="600" y2="90" stroke="#ccc" strokeWidth="1" />
        </g>

        {/* Cranial Nerves - Top row */}
        <g>
          {cranialNerves.slice(0, 6).map((nerve) => (
            <g
              key={nerve.id}
              onClick={() => setSelectedId(nerve.id)}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <circle
                cx={nerve.x}
                cy={nerve.y}
                r="20"
                fill={colorMap[nerve.type]}
                stroke={borderColorMap[nerve.type]}
                strokeWidth="2"
              />
              <text
                x={nerve.x}
                y={nerve.y}
                textAnchor="middle"
                dy="0.3em"
                className="text-xs font-bold fill-gray-800"
              >
                {nerve.romanNumeral}
              </text>
            </g>
          ))}
        </g>

        {/* Cranial Nerves - Bottom row */}
        <g>
          {cranialNerves.slice(6).map((nerve) => (
            <g
              key={nerve.id}
              onClick={() => setSelectedId(nerve.id)}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <circle
                cx={nerve.x}
                cy={nerve.y}
                r="20"
                fill={colorMap[nerve.type]}
                stroke={borderColorMap[nerve.type]}
                strokeWidth="2"
              />
              <text
                x={nerve.x}
                y={nerve.y}
                textAnchor="middle"
                dy="0.3em"
                className="text-xs font-bold fill-gray-800"
              >
                {nerve.romanNumeral}
              </text>
            </g>
          ))}
        </g>

        {/* Legend */}
        <g className="pointer-events-none">
          <circle cx="50" cy="320" r="8" fill="#93c5fd" stroke="#1e40af" strokeWidth="1" />
          <text x="70" y="325" className="text-sm font-semibold fill-gray-700">
            Sensory
          </text>

          <circle cx="250" cy="320" r="8" fill="#f87171" stroke="#dc2626" strokeWidth="1" />
          <text x="270" y="325" className="text-sm font-semibold fill-gray-700">
            Motor
          </text>

          <circle cx="400" cy="320" r="8" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="1" />
          <text x="420" y="325" className="text-sm font-semibold fill-gray-700">
            Mixed
          </text>
        </g>

        <text x="50" y="365" className="text-xs fill-gray-600">
          Mnemonic: {mnemonics[0]}
        </text>
      </svg>

      {/* Info Panel */}
      {selectedNerve && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">
            CN {selectedNerve.romanNumeral} - {selectedNerve.name}
          </h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Type:</span>{' '}
            <span className="capitalize">{selectedNerve.type}</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Foramen/Canal:</span> {selectedNerve.foramen}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Function:</span> {selectedNerve.function}
          </p>
        </div>
      )}
    </div>
  );
}
