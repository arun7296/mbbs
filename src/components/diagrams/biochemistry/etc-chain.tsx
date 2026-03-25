'use client';

import React, { useState } from 'react';

interface Complex {
  id: number;
  name: string;
  location: string;
  substrate: string;
  product: string;
  protonsPumped: number;
  inhibitors: string[];
  function: string;
  clinical: string;
  cofactors: string;
}

const complexes: Complex[] = [
  {
    id: 1,
    name: 'Complex I',
    location: 'NADH Dehydrogenase',
    substrate: 'NADH + CoQ',
    product: 'NAD⁺ + CoQH₂',
    protonsPumped: 4,
    inhibitors: ['Rotenone', 'Amytal', 'CN⁻'],
    function: 'Accepts electrons from NADH, pumps protons via CoQ',
    clinical: 'Rotenone: pesticide. Complex I deficiency → Leigh syndrome',
    cofactors: 'Fe-S clusters, flavin'
  },
  {
    id: 2,
    name: 'Complex II',
    location: 'Succinate Dehydrogenase',
    substrate: 'FADH₂ + CoQ',
    product: 'FAD + CoQH₂',
    protonsPumped: 0,
    inhibitors: ['Malonate', 'Carboxin'],
    function: 'Accepts electrons from succinate (TCA cycle), enters at CoQ',
    clinical: 'Does not pump protons. Links TCA cycle to ETC. SDH mutations in cancer',
    cofactors: 'FAD, Fe-S clusters'
  },
  {
    id: 3,
    name: 'Complex III',
    location: 'Cytochrome bc1 Complex',
    substrate: 'CoQH₂ + Cyt c',
    product: 'CoQ + Cyt c(red)',
    protonsPumped: 4,
    inhibitors: ['Antimycin A', 'Myxothiazol'],
    function: 'Q-cycle: electron transfer via cytochrome b, c1, and Rieske protein',
    clinical: 'Antimycin A: research tool, toxic. Complex III deficiency rare',
    cofactors: 'Heme b, heme c1, Fe-S cluster'
  },
  {
    id: 4,
    name: 'Complex IV',
    location: 'Cytochrome c Oxidase',
    substrate: 'Cyt c + O₂',
    product: 'Cyt c(ox) + H₂O',
    protonsPumped: 2,
    inhibitors: ['CN⁻', 'CO', 'H₂S'],
    function: 'Final electron acceptor. Reduces O₂ to H₂O. Pumps 2 H⁺',
    clinical: 'Cyanide blocks this step → death. CO poisoning. H₂S toxic at high levels',
    cofactors: 'Heme a, Heme a3, Cu centers (CuA, CuB)'
  },
  {
    id: 5,
    name: 'Complex V',
    location: 'ATP Synthase',
    substrate: 'H⁺ gradient + ADP + Pi',
    product: 'ATP + H₂O',
    protonsPumped: -3,
    inhibitors: ['Oligomycin', 'Dicyclohexylcarbodiimide'],
    function: 'Chemiosmotic ATP synthesis. Uses proton gradient to phosphorylate ADP',
    clinical: 'Oligomycin: research tool. Complex V deficiency → energy crisis. Nystatin: blocks ATP synthase',
    cofactors: 'F1, F0 subunits with rotary mechanism'
  }
];

export function ETCChainDiagram() {
  const [activeComplex, setActiveComplex] = useState<number | null>(null);

  const activeData = activeComplex ? complexes.find(c => c.id === activeComplex) : null;
  const totalProtonsPerTurn = complexes
    .filter(c => c.id !== 5)
    .reduce((sum, c) => sum + c.protonsPumped, 0);

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Electron Transport Chain</h2>
        <p className="text-gray-600">Inner mitochondrial membrane complexes I-V</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Pathway */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg shadow-md overflow-auto p-4">
          <svg viewBox="0 0 900 300" className="w-full max-w-4xl">
            {/* Membrane layer */}
            <rect x="0" y="100" width="900" height="100" fill="#ffe4b5" opacity="0.3" stroke="#daa520" strokeWidth="2" />
            <text x="10" y="95" className="text-sm font-bold fill-gray-700">Intermembrane Space (Low pH)</text>
            <text x="10" y="215" className="text-sm font-bold fill-gray-700">Matrix (High pH)</text>

            {/* Complexes */}
            {complexes.map((complex, idx) => {
              const x = 80 + idx * 160;
              const isActive = activeComplex === complex.id;

              return (
                <g key={complex.id}>
                  {/* Complex box */}
                  <rect
                    x={x}
                    y={complex.id === 5 ? 130 : 120}
                    width="120"
                    height="60"
                    rx="8"
                    fill={isActive ? '#fef3c7' : '#fef9e7'}
                    stroke={isActive ? '#d97706' : '#fcd34d'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveComplex(complex.id)}
                  />

                  {/* Complex name */}
                  <text
                    x={x + 60}
                    y={complex.id === 5 ? 150 : 140}
                    textAnchor="middle"
                    className="text-xs font-bold fill-gray-800"
                  >
                    {complex.name}
                  </text>

                  {/* Location label */}
                  <text
                    x={x + 60}
                    y={complex.id === 5 ? 167 : 157}
                    textAnchor="middle"
                    className="text-xs fill-gray-600"
                  >
                    {complex.location.split(' ')[0]}
                  </text>

                  {/* Protons pumped indicator (except Complex II) */}
                  {complex.id !== 2 && complex.id !== 5 && (
                    <text
                      x={x + 60}
                      y={105}
                      textAnchor="middle"
                      className="text-xs font-bold fill-red-600"
                    >
                      {complex.protonsPumped} H⁺
                    </text>
                  )}

                  {complex.id === 5 && (
                    <text
                      x={x + 60}
                      y={105}
                      textAnchor="middle"
                      className="text-xs font-bold fill-green-600"
                    >
                      ATP ⚡
                    </text>
                  )}
                </g>
              );
            })}

            {/* Electron flow arrows */}
            <defs>
              <marker
                id="electronArrow"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
              </marker>
              <marker
                id="protonArrow"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
              </marker>
            </defs>

            {/* Electron transfer path */}
            <g>
              {/* NADH → Complex I */}
              <line x1="30" y1="150" x2="80" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#electronArrow)" />
              <text x="30" y="135" className="text-xs font-semibold fill-blue-600">NADH</text>

              {/* Complex I → CoQ */}
              <path d="M 200 150 L 230 150 L 240 130" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <text x="220" y="115" className="text-xs fill-blue-600">CoQ</text>

              {/* FADH₂ → Complex II (at CoQ junction) */}
              <line x1="30" y1="180" x2="240" y2="170" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#electronArrow)" />
              <text x="30" y="195" className="text-xs font-semibold fill-amber-600">FADH₂</text>

              {/* Complex II to Complex III via CoQ */}
              <line x1="260" y1="150" x2="320" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#electronArrow)" />

              {/* Complex I, II → Complex III via CoQ */}
              <line x1="200" y1="150" x2="320" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#electronArrow)" />

              {/* Complex III → Cytochrome c */}
              <path d="M 440 150 L 470 150 L 480 130" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <text x="470" y="115" className="text-xs fill-blue-600">Cyt c</text>

              {/* Complex III → Complex IV via Cyt c */}
              <line x1="480" y1="150" x2="560" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#electronArrow)" />

              {/* Complex IV → O₂ */}
              <line x1="680" y1="150" x2="730" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#electronArrow)" />
              <text x="750" y="145" className="text-xs font-semibold fill-blue-600">O₂ → H₂O</text>
            </g>

            {/* Proton pumping arrows */}
            {[1, 3, 4].map((complexId) => {
              const complex = complexes.find(c => c.id === complexId);
              if (!complex) return null;

              const x = 80 + (complexId - 1) * 160 + 60;

              return (
                <g key={`proton-${complexId}`}>
                  {/* Upward arrow for H+ pumping */}
                  <line
                    x1={x}
                    y1="120"
                    x2={x}
                    y2="90"
                    stroke="#ef4444"
                    strokeWidth="2"
                    markerEnd="url(#protonArrow)"
                  />
                  <text x={x} y="75" textAnchor="middle" className="text-xs font-bold fill-red-600">
                    {complex.protonsPumped}H⁺
                  </text>
                </g>
              );
            })}

            {/* Complex V: ATP synthesis */}
            {/* Downward proton flow through ATP synthase */}
            <path
              d="M 640 90 L 640 50 Q 660 30 680 50 L 680 160"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#protonArrow)"
              strokeDasharray="5,5"
            />
            <text x="665" y="65" className="text-xs font-bold fill-red-600">H⁺ gradient</text>

            {/* Proton gradient visualization */}
            <text x="50" y="40" className="text-xs font-semibold fill-red-600">H⁺ Concentration Higher</text>
            <text x="50" y="220" className="text-xs font-semibold fill-blue-600">Lower H⁺ Concentration</text>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
          {activeData ? (
            <>
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {activeData.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeData.location}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-blue-900">SUBSTRATE</p>
                  <p className="text-sm text-blue-800">{activeData.substrate}</p>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-semibold text-green-900">PRODUCT</p>
                  <p className="text-sm text-green-800">{activeData.product}</p>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-semibold text-purple-900">COFACTORS</p>
                  <p className="text-sm text-purple-800">{activeData.cofactors}</p>
                </div>

                {activeData.id !== 2 && (
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-xs font-semibold text-red-900">PROTONS PUMPED</p>
                    <p className="text-sm text-red-800">
                      {activeData.id === 5 ? '3 H⁺ per ATP synthesized' : `${activeData.protonsPumped} H⁺ per NADH/FADH₂`}
                    </p>
                  </div>
                )}

                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-xs font-semibold text-orange-900">INHIBITORS</p>
                  <p className="text-sm text-orange-800">
                    {activeData.inhibitors.join(', ')}
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs font-semibold text-gray-900">FUNCTION</p>
                  <p className="text-sm text-gray-800">{activeData.function}</p>
                </div>

                <div className="bg-red-50 p-3 rounded">
                  <p className="text-xs font-semibold text-red-900">⚠️ CLINICAL SIGNIFICANCE</p>
                  <p className="text-sm text-red-800">{activeData.clinical}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center">Click on a complex to view details</p>
            </div>
          )}

          {/* Summary stats */}
          <div className="border-t pt-4 mt-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">ETC SUMMARY:</p>
            <div className="space-y-2">
              <div className="bg-red-100 p-2 rounded">
                <p className="text-xs text-red-700 font-semibold">Total H⁺ pumped per NADH</p>
                <p className="text-lg font-bold text-red-900">{totalProtonsPerTurn}</p>
              </div>
              <div className="bg-green-100 p-2 rounded">
                <p className="text-xs text-green-700 font-semibold">ATP yield ratio (H⁺/ATP)</p>
                <p className="text-lg font-bold text-green-900">2.5-3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-blue-500"></div>
            <span className="text-sm text-gray-700">Electron flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-red-500"></div>
            <span className="text-sm text-gray-700">Proton pumping to intermembrane space</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-200 border border-yellow-600"></div>
            <span className="text-sm text-gray-700">Inner mitochondrial membrane</span>
          </div>
        </div>
      </div>
    </div>
  );
}
