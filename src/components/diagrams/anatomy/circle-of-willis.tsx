'use client';

import { useState } from 'react';

interface Artery {
  id: string;
  name: string;
  circulation: 'anterior' | 'posterior';
  territory: string;
  x: number;
  y: number;
}

const arteries: Artery[] = [
  {
    id: 'lica',
    name: 'Left Internal Carotid Artery',
    circulation: 'anterior',
    territory: 'Enters circle from left. Supplies anterior circulation',
    x: 150,
    y: 200,
  },
  {
    id: 'rica',
    name: 'Right Internal Carotid Artery',
    circulation: 'anterior',
    territory: 'Enters circle from right. Supplies anterior circulation',
    x: 650,
    y: 200,
  },
  {
    id: 'ba',
    name: 'Basilar Artery',
    circulation: 'posterior',
    territory: 'Enters circle from below. Supplies posterior circulation',
    x: 400,
    y: 450,
  },
  {
    id: 'laca',
    name: 'Left ACA',
    circulation: 'anterior',
    territory: 'Anterior Cerebral Artery. Supplies medial frontal and parietal lobes',
    x: 280,
    y: 150,
  },
  {
    id: 'raca',
    name: 'Right ACA',
    circulation: 'anterior',
    territory: 'Anterior Cerebral Artery. Supplies medial frontal and parietal lobes',
    x: 520,
    y: 150,
  },
  {
    id: 'lmca',
    name: 'Left MCA',
    circulation: 'anterior',
    territory: 'Middle Cerebral Artery. Supplies lateral hemispheres',
    x: 200,
    y: 300,
  },
  {
    id: 'rmca',
    name: 'Right MCA',
    circulation: 'anterior',
    territory: 'Middle Cerebral Artery. Supplies lateral hemispheres',
    x: 600,
    y: 300,
  },
  {
    id: 'lpca',
    name: 'Left PCA',
    circulation: 'posterior',
    territory: 'Posterior Cerebral Artery. Supplies occipital and temporal lobes',
    x: 320,
    y: 350,
  },
  {
    id: 'rpca',
    name: 'Right PCA',
    circulation: 'posterior',
    territory: 'Posterior Cerebral Artery. Supplies occipital and temporal lobes',
    x: 480,
    y: 350,
  },
  {
    id: 'lacomm',
    name: 'Left AComm',
    circulation: 'anterior',
    territory: 'Anterior Communicating Artery. Connects left and right ACA',
    x: 340,
    y: 120,
  },
  {
    id: 'racomm',
    name: 'Right AComm',
    circulation: 'anterior',
    territory: 'Anterior Communicating Artery. Connects left and right ACA',
    x: 460,
    y: 120,
  },
  {
    id: 'lpcomm',
    name: 'Left PComm',
    circulation: 'posterior',
    territory: 'Posterior Communicating Artery. Connects ICA and PCA',
    x: 240,
    y: 280,
  },
  {
    id: 'rpcomm',
    name: 'Right PComm',
    circulation: 'posterior',
    territory: 'Posterior Communicating Artery. Connects ICA and PCA',
    x: 560,
    y: 280,
  },
];

export function CircleOfWillisSVG() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedArtery = arteries.find((a) => a.id === selectedId);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Brain outline (simplified) */}
        <g className="pointer-events-none">
          <ellipse
            cx="400"
            cy="100"
            rx="150"
            ry="80"
            fill="#e5e7eb"
            stroke="#999"
            strokeWidth="1"
          />
        </g>

        {/* Circle of Willis connections */}
        <g className="stroke-gray-400 stroke-2 pointer-events-none">
          {/* Left ACA to Left AComm */}
          <line x1="280" y1="150" x2="340" y2="120" />
          {/* Left AComm to Right AComm */}
          <line x1="340" y1="120" x2="460" y2="120" />
          {/* Right AComm to Right ACA */}
          <line x1="460" y1="120" x2="520" y2="150" />

          {/* Left PComm to Left PCA */}
          <line x1="240" y1="280" x2="320" y2="350" />
          {/* Right PComm to Right PCA */}
          <line x1="560" y1="280" x2="480" y2="350" />

          {/* Basilar to Left PCA */}
          <line x1="400" y1="450" x2="320" y2="350" />
          {/* Basilar to Right PCA */}
          <line x1="400" y1="450" x2="480" y2="350" />

          {/* Left PCA connection (loop) */}
          <path d="M 320 350 Q 300 300 320 250" fill="none" stroke="none" />
          {/* Right PCA connection (loop) */}
          <path d="M 480 350 Q 500 300 480 250" fill="none" stroke="none" />
        </g>

        {/* Arteries - Anterior Circulation (Red) */}
        <g>
          {arteries
            .filter((a) => a.circulation === 'anterior')
            .map((artery) => (
              <g
                key={artery.id}
                onClick={() => setSelectedId(artery.id)}
                className="cursor-pointer transition-opacity hover:opacity-70"
              >
                <circle
                  cx={artery.x}
                  cy={artery.y}
                  r="16"
                  fill="#fca5a5"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <text
                  x={artery.x}
                  y={artery.y}
                  textAnchor="middle"
                  dy="0.3em"
                  className="text-xs font-bold fill-gray-800"
                >
                  {artery.name.includes('ACA') ? 'ACA' : artery.name.includes('AComm') ? 'AC' : 'MCA'}
                </text>
              </g>
            ))}
        </g>

        {/* Arteries - Posterior Circulation (Blue) */}
        <g>
          {arteries
            .filter((a) => a.circulation === 'posterior')
            .map((artery) => (
              <g
                key={artery.id}
                onClick={() => setSelectedId(artery.id)}
                className="cursor-pointer transition-opacity hover:opacity-70"
              >
                <circle
                  cx={artery.x}
                  cy={artery.y}
                  r="16"
                  fill="#93c5fd"
                  stroke="#1e40af"
                  strokeWidth="2"
                />
                <text
                  x={artery.x}
                  y={artery.y}
                  textAnchor="middle"
                  dy="0.3em"
                  className="text-xs font-bold fill-gray-800"
                >
                  {artery.name.includes('PCA') ? 'PCA' : artery.name.includes('PComm') ? 'PC' : 'BA'}
                </text>
              </g>
            ))}
        </g>

        {/* Legend */}
        <g className="pointer-events-none">
          <circle cx="50" cy="540" r="8" fill="#fca5a5" stroke="#dc2626" strokeWidth="1" />
          <text x="70" y="545" className="text-sm font-semibold fill-gray-700">
            Anterior Circulation
          </text>

          <circle cx="350" cy="540" r="8" fill="#93c5fd" stroke="#1e40af" strokeWidth="1" />
          <text x="370" y="545" className="text-sm font-semibold fill-gray-700">
            Posterior Circulation
          </text>
        </g>
      </svg>

      {/* Info Panel */}
      {selectedArtery && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">{selectedArtery.name}</h3>
          <p className="text-gray-700">{selectedArtery.territory}</p>
          <p className="text-xs text-gray-500 mt-3 italic">
            The Circle of Willis allows blood to flow between anterior and posterior circulations,
            providing collateral supply if one major artery becomes occluded.
          </p>
        </div>
      )}
    </div>
  );
}
