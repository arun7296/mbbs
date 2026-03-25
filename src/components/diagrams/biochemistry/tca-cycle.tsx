'use client';

import React, { useState } from 'react';

interface Intermediate {
  id: number;
  name: string;
  carbons: number;
  enzyme: string;
  cofactor_in?: string;
  cofactor_out?: string;
  co2_release: boolean;
  atp_gtp: boolean;
  regulation: string;
  clinical: string;
}

const intermediates: Intermediate[] = [
  {
    id: 0,
    name: 'Acetyl-CoA',
    carbons: 2,
    enzyme: 'Pyruvate Dehydrogenase',
    cofactor_out: 'NADH',
    co2_release: false,
    atp_gtp: false,
    regulation: 'Inhibited by NADH, Acetyl-CoA, ATP. Activated by Ca²⁺',
    clinical: 'Key entry point from glycolysis and amino acid metabolism'
  },
  {
    id: 1,
    name: 'Citrate',
    carbons: 6,
    enzyme: 'Citrate Synthase',
    cofactor_in: 'Acetyl-CoA + OAA',
    co2_release: false,
    atp_gtp: false,
    regulation: 'Inhibited by ATP, NADH, Succinyl-CoA. Activated by ADP',
    clinical: 'Entry substrate. Forms citrate which is allosteric inhibitor of PFK-1'
  },
  {
    id: 2,
    name: 'Isocitrate',
    carbons: 6,
    enzyme: 'Aconitase',
    co2_release: false,
    atp_gtp: false,
    regulation: 'Reversible interconversion with citrate',
    clinical: 'Iron-sulfur cluster enzyme. Sensitive to ROS'
  },
  {
    id: 3,
    name: 'α-Ketoglutarate',
    carbons: 5,
    enzyme: 'Isocitrate Dehydrogenase',
    cofactor_out: 'NADH + CO₂',
    co2_release: true,
    atp_gtp: false,
    regulation: 'Rate-limiting enzyme. Inhibited by ATP, NADH. Activated by ADP, Ca²⁺',
    clinical: 'Most important regulatory enzyme. Marks first CO₂ release'
  },
  {
    id: 4,
    name: 'Succinyl-CoA',
    carbons: 4,
    enzyme: 'α-KG Dehydrogenase',
    cofactor_out: 'NADH + CO₂',
    co2_release: true,
    atp_gtp: true,
    regulation: 'Complex regulation similar to Isocitrate DH. Inhibited by NADH, ATP, Succinyl-CoA',
    clinical: 'Second CO₂ release. GTP produced = ATP energy'
  },
  {
    id: 5,
    name: 'Succinate',
    carbons: 4,
    enzyme: 'Succinyl-CoA Synthetase',
    cofactor_out: 'GTP/ATP',
    co2_release: false,
    atp_gtp: true,
    regulation: 'Equilibrium-driven. Substrate-level phosphorylation',
    clinical: 'Only step yielding GTP directly. Links to amino acid metabolism'
  },
  {
    id: 6,
    name: 'Fumarate',
    carbons: 4,
    enzyme: 'Succinate Dehydrogenase',
    cofactor_out: 'FADH₂',
    co2_release: false,
    atp_gtp: false,
    regulation: 'Most irreversible step due to FADH₂ formation',
    clinical: 'Only FAD-dependent step. Part of Complex II of ETC'
  },
  {
    id: 7,
    name: 'Malate',
    carbons: 4,
    enzyme: 'Fumarase',
    co2_release: false,
    atp_gtp: false,
    regulation: 'Reversible equilibrium',
    clinical: 'Can exit cycle to gluconeogenesis'
  },
  {
    id: 8,
    name: 'Oxaloacetate',
    carbons: 4,
    enzyme: 'Malate Dehydrogenase',
    cofactor_out: 'NADH',
    co2_release: false,
    atp_gtp: false,
    regulation: 'Last step, regenerates OAA for next cycle',
    clinical: 'Low OAA can limit cycle. Replenished by anaplerotic reactions'
  }
];

export function TCACycleDiagram() {
  const [activeIntermediate, setActiveIntermediate] = useState<number | null>(null);

  const activeData = activeIntermediate !== null ? intermediates[activeIntermediate] : null;

  // Count cofactors per cycle
  const nadh = intermediates.filter(i => i.cofactor_out?.includes('NADH')).length;
  const fadh2 = intermediates.filter(i => i.cofactor_out?.includes('FADH₂')).length;
  const gtp = intermediates.filter(i => i.atp_gtp).length;
  const co2 = intermediates.filter(i => i.co2_release).length;

  // Calculate positions for circular layout
  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">TCA Cycle (Krebs Cycle)</h2>
        <p className="text-gray-600">8-step citric acid cycle for energy and biosynthesis</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Pathway */}
        <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-md overflow-auto">
          <svg viewBox="0 0 400 400" className="w-full max-w-md aspect-square">
            {/* Defs for arrows and styling */}
            <defs>
              <marker
                id="arrowNADH"
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
                id="arrowFADH2"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
              </marker>
              <marker
                id="arrowGTP"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Cycle nodes */}
            {intermediates.map((intermediate, idx) => {
              const angle = (idx / intermediates.length) * 2 * Math.PI - Math.PI / 2;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              const isActive = activeIntermediate === intermediate.id;

              return (
                <g key={intermediate.id}>
                  {/* Node circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 28 : 24}
                    fill={isActive ? '#dbeafe' : '#e8f4f8'}
                    stroke={isActive ? '#0284c7' : '#7dd3c0'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveIntermediate(intermediate.id)}
                  />

                  {/* Intermediate name */}
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-gray-800 pointer-events-none"
                  >
                    {intermediate.name.split('-')[0]}
                  </text>

                  {/* Enzyme label on arc */}
                  {idx < intermediates.length - 1 && (
                    <text
                      x={(x + centerX) / 2}
                      y={(y + centerY) / 2}
                      textAnchor="middle"
                      className="text-xs font-semibold fill-purple-600 cursor-pointer hover:underline"
                      onClick={() => setActiveIntermediate(intermediate.id)}
                    >
                      {intermediate.enzyme.split(' ')[0]}
                    </text>
                  )}

                  {/* Cofactor indicators */}
                  {intermediate.cofactor_out && (
                    <>
                      {intermediate.cofactor_out.includes('NADH') && (
                        <circle
                          cx={x + 35}
                          cy={y - 10}
                          r="6"
                          fill="#3b82f6"
                          opacity="0.8"
                        />
                      )}
                      {intermediate.cofactor_out.includes('FADH₂') && (
                        <circle
                          cx={x + 35}
                          cy={y + 10}
                          r="6"
                          fill="#f59e0b"
                          opacity="0.8"
                        />
                      )}
                      {intermediate.cofactor_out.includes('ATP') && (
                        <circle
                          cx={x + 35}
                          cy={y}
                          r="6"
                          fill="#10b981"
                          opacity="0.8"
                        />
                      )}
                    </>
                  )}

                  {/* CO₂ release indicator */}
                  {intermediate.co2_release && (
                    <text
                      x={x - 35}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs font-bold fill-red-600"
                    >
                      CO₂
                    </text>
                  )}
                </g>
              );
            })}

            {/* Connection arrows between nodes */}
            {intermediates.map((_, idx) => {
              const current = idx;
              const next = (idx + 1) % intermediates.length;

              const angle1 = (current / intermediates.length) * 2 * Math.PI - Math.PI / 2;
              const angle2 = (next / intermediates.length) * 2 * Math.PI - Math.PI / 2;

              const x1 = centerX + radius * Math.cos(angle1);
              const y1 = centerY + radius * Math.sin(angle1);
              const x2 = centerX + radius * Math.cos(angle2);
              const y2 = centerY + radius * Math.sin(angle2);

              return (
                <line
                  key={`arrow-${idx}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#7dd3c0"
                  strokeWidth="2"
                  markerEnd="url(#arrowDefault)"
                  pointerEvents="none"
                />
              );
            })}

            {/* Center label */}
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-bold fill-gray-400 pointer-events-none"
            >
              TCA Cycle
            </text>
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
                  {activeData.carbons}-carbon molecule
                </p>
                <p className="text-sm font-semibold text-purple-700 mt-2">
                  Enzyme: {activeData.enzyme}
                </p>
              </div>

              <div className="space-y-3">
                {activeData.cofactor_in && (
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-xs font-semibold text-blue-900">INPUT</p>
                    <p className="text-sm text-blue-800">{activeData.cofactor_in}</p>
                  </div>
                )}

                {activeData.cofactor_out && (
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-xs font-semibold text-blue-900">COFACTORS PRODUCED</p>
                    <p className="text-sm text-blue-800">{activeData.cofactor_out}</p>
                  </div>
                )}

                {activeData.co2_release && (
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-xs font-semibold text-red-900">CO₂ RELEASED</p>
                    <p className="text-sm text-red-800">One CO₂ released at this step</p>
                  </div>
                )}

                {activeData.atp_gtp && (
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-xs font-semibold text-green-900">ENERGY YIELD</p>
                    <p className="text-sm text-green-800">GTP/ATP produced (substrate-level phosphorylation)</p>
                  </div>
                )}

                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-semibold text-purple-900">REGULATION</p>
                  <p className="text-sm text-purple-800">{activeData.regulation}</p>
                </div>

                {activeData.id === 3 && (
                  <div className="bg-red-50 border-2 border-red-200 p-3 rounded">
                    <p className="text-xs font-bold text-red-900">⭐ RATE-LIMITING ENZYME</p>
                    <p className="text-sm text-red-800">
                      Isocitrate dehydrogenase - key control point for TCA cycle flux
                    </p>
                  </div>
                )}

                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-xs font-semibold text-orange-900">CLINICAL SIGNIFICANCE</p>
                  <p className="text-sm text-orange-800">{activeData.clinical}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center">Click on a molecule to view details</p>
            </div>
          )}

          {/* Summary stats */}
          <div className="border-t pt-4 mt-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">PER TURN YIELD:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-100 p-2 rounded text-center">
                <p className="text-xs text-blue-700 font-semibold">NADH</p>
                <p className="text-lg font-bold text-blue-900">{nadh}</p>
              </div>
              <div className="bg-amber-100 p-2 rounded text-center">
                <p className="text-xs text-amber-700 font-semibold">FADH₂</p>
                <p className="text-lg font-bold text-amber-900">{fadh2}</p>
              </div>
              <div className="bg-green-100 p-2 rounded text-center">
                <p className="text-xs text-green-700 font-semibold">GTP</p>
                <p className="text-lg font-bold text-green-900">{gtp}</p>
              </div>
              <div className="bg-red-100 p-2 rounded text-center">
                <p className="text-xs text-red-700 font-semibold">CO₂</p>
                <p className="text-lg font-bold text-red-900">{co2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-700">NADH produced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            <span className="text-sm text-gray-700">FADH₂ produced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-700">GTP/ATP produced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-red-700 font-semibold">CO₂</span>
            <span className="text-sm text-gray-700">CO₂ release point</span>
          </div>
        </div>
      </div>
    </div>
  );
}
