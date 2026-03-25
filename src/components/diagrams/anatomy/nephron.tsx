'use client';

import { useState } from 'react';

interface NephronSegment {
  id: string;
  name: string;
  description: string;
  reabsorbed: string[];
  secreted: string[];
  color: string;
  pathData?: string;
}

const segments: NephronSegment[] = [
  {
    id: 'bowman',
    name: "Bowman's Capsule",
    description:
      'Filters blood from the glomerulus. Collects filtered fluid (filtrate) containing water, ions, glucose, urea.',
    reabsorbed: [],
    secreted: [],
    color: '#fecaca',
  },
  {
    id: 'pct',
    name: 'Proximal Convoluted Tubule (PCT)',
    description:
      'Main site of reabsorption. Cubical cells with numerous mitochondria for active transport.',
    reabsorbed: ['Glucose', 'Amino acids', 'Na+, K+, Cl-', 'Water (via osmosis)', 'Proteins'],
    secreted: ['H+', 'Penicillin', 'Uric acid'],
    color: '#fbbf24',
  },
  {
    id: 'dlohe',
    name: 'Loop of Henle - Descending Limb',
    description:
      'Permeable to water, impermeable to ions. Creates osmotic gradient. Increases filtrate osmolarity.',
    reabsorbed: ['Water'],
    secreted: [],
    color: '#60a5fa',
  },
  {
    id: 'alohe',
    name: 'Loop of Henle - Ascending Limb',
    description:
      'Impermeable to water, actively transports ions. Decreases filtrate osmolarity (dilute urine).',
    reabsorbed: [],
    secreted: [],
    color: '#a78bfa',
  },
  {
    id: 'dct',
    name: 'Distal Convoluted Tubule (DCT)',
    description:
      'Fine-tunes electrolyte balance. Regulated by aldosterone and ADH. Not very permeable to water initially.',
    reabsorbed: ['Na+, K+, Ca2+ (regulated by PTH)'],
    secreted: ['H+', 'K+', 'NH4+'],
    color: '#34d399',
  },
  {
    id: 'cd',
    name: 'Collecting Duct',
    description:
      'Final adjustment of water balance. Permeability regulated by ADH. Concentrates final urine.',
    reabsorbed: ['Water (regulated by ADH)', 'Na+ (regulated by aldosterone)'],
    secreted: [],
    color: '#f87171',
  },
];

export function NephronDiagram() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedSegment = segments.find((s) => s.id === selectedId);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 900 700"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Bowman's Capsule */}
        <g
          onClick={() => setSelectedId('bowman')}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="#fecaca"
            stroke="#dc2626"
            strokeWidth="2"
          />
          <circle cx="100" cy="100" r="20" fill="#fee2e2" stroke="#991b1b" strokeWidth="1" />
          <text x="100" y="105" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            Bowman's
          </text>
          <text x="60" y="155" className="text-xs font-semibold fill-gray-700">
            Glomerulus
          </text>
        </g>

        {/* PCT - Proximal Convoluted Tubule */}
        <g
          onClick={() => setSelectedId('pct')}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <path
            d="M 100 140 Q 150 150 200 140 Q 250 130 300 140"
            stroke="#fbbf24"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
          />
          <text x="200" y="135" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            PCT
          </text>
        </g>

        {/* Descending Limb of Loop of Henle */}
        <g
          onClick={() => setSelectedId('dlohe')}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <path
            d="M 300 140 L 350 200 L 350 340"
            stroke="#60a5fa"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <text x="365" y="240" className="text-xs font-bold fill-gray-800">
            DescLimb
          </text>
        </g>

        {/* Ascending Limb of Loop of Henle */}
        <g
          onClick={() => setSelectedId('alohe')}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <path
            d="M 350 340 L 350 500 L 300 560"
            stroke="#a78bfa"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <text x="365" y="420" className="text-xs font-bold fill-gray-800">
            AscLimb
          </text>
        </g>

        {/* DCT - Distal Convoluted Tubule */}
        <g
          onClick={() => setSelectedId('dct')}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <path
            d="M 300 560 Q 250 570 200 560 Q 150 550 100 560"
            stroke="#34d399"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <text x="200" y="555" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            DCT
          </text>
        </g>

        {/* Collecting Duct */}
        <g
          onClick={() => setSelectedId('cd')}
          className="cursor-pointer transition-opacity hover:opacity-80"
        >
          <path
            d="M 100 560 L 100 640"
            stroke="#f87171"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
          />
          <text x="130" y="600" className="text-xs font-bold fill-gray-800">
            Collecting
          </text>
          <text x="130" y="615" className="text-xs font-bold fill-gray-800">
            Duct
          </text>
        </g>

        {/* Urine output */}
        <g className="pointer-events-none">
          <text x="100" y="670" textAnchor="middle" className="text-sm font-bold fill-gray-800">
            Urine to Ureter
          </text>
        </g>

        {/* Peritubular capillaries indication */}
        <g className="pointer-events-none">
          <text x="500" y="50" className="text-xs font-semibold fill-gray-700">
            Reabsorption occurs into peritubular capillaries
          </text>
        </g>

        {/* Legend */}
        <g className="pointer-events-none">
          <text x="500" y="100" className="text-sm font-bold fill-gray-800">
            Key Reabsorption Sites:
          </text>
          <rect x="500" y="110" width="20" height="20" fill="#fbbf24" stroke="#ca8a04" strokeWidth="1" />
          <text x="530" y="125" className="text-xs fill-gray-700">
            PCT: 65% of Na+, glucose, amino acids
          </text>

          <rect x="500" y="135" width="20" height="20" fill="#60a5fa" stroke="#1e40af" strokeWidth="1" />
          <text x="530" y="150" className="text-xs fill-gray-700">
            Desc Limb: Water reabsorption
          </text>

          <rect x="500" y="160" width="20" height="20" fill="#a78bfa" stroke="#7e22ce" strokeWidth="1" />
          <text x="530" y="175" className="text-xs fill-gray-700">
            Asc Limb: Na+/K+/Cl- active transport
          </text>

          <rect x="500" y="185" width="20" height="20" fill="#34d399" stroke="#059669" strokeWidth="1" />
          <text x="530" y="200" className="text-xs fill-gray-700">
            DCT: Fine-tuning (regulated)
          </text>

          <rect x="500" y="210" width="20" height="20" fill="#f87171" stroke="#dc2626" strokeWidth="1" />
          <text x="530" y="225" className="text-xs fill-gray-700">
            CD: Final water balance (ADH)
          </text>
        </g>
      </svg>

      {/* Info Panel */}
      {selectedSegment && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">{selectedSegment.name}</h3>
          <p className="text-gray-700 mb-3">{selectedSegment.description}</p>

          {selectedSegment.reabsorbed.length > 0 && (
            <div className="mb-2">
              <p className="text-sm font-semibold text-gray-700">Reabsorbed:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {selectedSegment.reabsorbed.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedSegment.secreted.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-gray-700">Secreted:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {selectedSegment.secreted.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
