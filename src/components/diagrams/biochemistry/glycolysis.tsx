'use client';

import React, { useState } from 'react';

interface Step {
  id: number;
  substrate: string;
  product: string;
  enzyme: string;
  atp: number; // positive = produced, negative = consumed
  cofactors: string;
  reversible: boolean;
  regulation: string;
  clinical: string;
}

const steps: Step[] = [
  {
    id: 1,
    substrate: 'Glucose',
    product: 'Glucose-6-phosphate',
    enzyme: 'Hexokinase',
    atp: -1,
    cofactors: 'ATP → ADP',
    reversible: false,
    regulation: 'Inhibited by product (G6P)',
    clinical: 'Glycogen storage diseases affect upstream'
  },
  {
    id: 2,
    substrate: 'Glucose-6-phosphate',
    product: 'Fructose-6-phosphate',
    enzyme: 'Phosphoglucose isomerase',
    atp: 0,
    cofactors: 'None',
    reversible: true,
    regulation: 'Reversible equilibrium',
    clinical: 'Hemolytic anemia in GPI deficiency'
  },
  {
    id: 3,
    substrate: 'Fructose-6-phosphate',
    product: 'Fructose-1,6-bisphosphate',
    enzyme: 'Phosphofructokinase-1 (PFK-1)',
    atp: -1,
    cofactors: 'ATP → ADP',
    reversible: false,
    regulation: 'Rate-limiting step. Inhibited by ATP, citrate. Activated by AMP, ADP, F2,6BP',
    clinical: 'Key regulatory point in glycolysis'
  },
  {
    id: 4,
    substrate: 'Fructose-1,6-bisphosphate',
    product: 'DHAP + G3P',
    enzyme: 'Aldolase',
    atp: 0,
    cofactors: 'None',
    reversible: true,
    regulation: 'Reversible, constitutive',
    clinical: 'Aldolase deficiency causes hemolytic anemia'
  },
  {
    id: 5,
    substrate: 'DHAP',
    product: 'G3P',
    enzyme: 'Triose phosphate isomerase',
    atp: 0,
    cofactors: 'None',
    reversible: true,
    regulation: 'Reversible equilibrium',
    clinical: 'TPI deficiency → severe hemolytic anemia'
  },
  {
    id: 6,
    substrate: 'Glyceraldehyde-3-phosphate',
    product: '1,3-Bisphosphoglycerate',
    enzyme: 'GAPDH',
    atp: 0,
    cofactors: 'NAD+ → NADH',
    reversible: true,
    regulation: 'Inhibited by NADH, ATP',
    clinical: 'Oxidation step, generates reducing power'
  },
  {
    id: 7,
    substrate: '1,3-Bisphosphoglycerate',
    product: '3-Phosphoglycerate',
    enzyme: 'Phosphoglycerate kinase',
    atp: 1,
    cofactors: 'ADP → ATP',
    reversible: true,
    regulation: 'Thermodynamically favorable',
    clinical: 'Substrate-level phosphorylation'
  },
  {
    id: 8,
    substrate: '3-Phosphoglycerate',
    product: '2-Phosphoglycerate',
    enzyme: 'Phosphoglycerate mutase',
    atp: 0,
    cofactors: 'None',
    reversible: true,
    regulation: 'Reversible, constitutive',
    clinical: 'Mutase deficiency rare'
  },
  {
    id: 9,
    substrate: '2-Phosphoglycerate',
    product: 'Phosphoenolpyruvate',
    enzyme: 'Enolase',
    atp: 0,
    cofactors: 'None',
    reversible: true,
    regulation: 'Reversible, constitutive',
    clinical: 'Enolase deficiency → hemolytic anemia'
  },
  {
    id: 10,
    substrate: 'Phosphoenolpyruvate',
    product: 'Pyruvate',
    enzyme: 'Pyruvate kinase',
    atp: 1,
    cofactors: 'ADP → ATP',
    reversible: false,
    regulation: 'Inhibited by ATP, alanine. Activated by F1,6BP',
    clinical: 'Rate-limiting in fed state'
  }
];

export function GlycolysisPathway() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showNetEquation, setShowNetEquation] = useState(true);

  const activeStepData = activeStep ? steps.find(s => s.id === activeStep) : null;
  const totalATP = steps.reduce((sum, s) => sum + s.atp, 0);
  const nadh = 2; // Two GAPDH steps (steps 6), each produces 1 NADH, and we process 2 G3P

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Glycolysis Pathway</h2>
        <p className="text-gray-600">10-step glucose to pyruvate conversion</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Pathway */}
        <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-md overflow-auto">
          <svg viewBox="0 0 400 900" className="w-full max-w-sm aspect-auto">
            {/* Steps */}
            {steps.map((step, idx) => {
              const isActive = activeStep === step.id;
              const yStart = 50 + idx * 80;
              const isIrreversible = !step.reversible;
              const arrowColor = isIrreversible ? '#ef4444' : '#3b82f6';

              return (
                <g key={step.id}>
                  {/* Substrate box */}
                  <rect
                    x="20"
                    y={yStart}
                    width="120"
                    height="40"
                    rx="6"
                    fill={isActive ? '#dbeafe' : '#e8f4f8'}
                    stroke={isActive ? '#0284c7' : '#7dd3c0'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveStep(step.id)}
                  />
                  <text
                    x="80"
                    y={yStart + 24}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    {step.substrate}
                  </text>

                  {/* Arrow with enzyme label */}
                  <line
                    x1="140"
                    y1={yStart + 20}
                    x2="240"
                    y2={yStart + 20}
                    stroke={arrowColor}
                    strokeWidth="2"
                  />
                  <polygon
                    points={`240,${yStart + 20} 235,${yStart + 15} 235,${yStart + 25}`}
                    fill={arrowColor}
                  />

                  {/* Enzyme label */}
                  <text
                    x="190"
                    y={yStart - 5}
                    textAnchor="middle"
                    className="text-xs font-bold cursor-pointer hover:underline fill-purple-600"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {step.enzyme}
                  </text>

                  {/* ATP/Cofactor label */}
                  <text
                    x="190"
                    y={yStart + 35}
                    textAnchor="middle"
                    className="text-xs fill-green-700 font-semibold"
                  >
                    {step.atp !== 0 && (
                      <tspan>
                        {step.atp > 0 ? '+' : ''}{step.atp} ATP
                      </tspan>
                    )}
                    {step.cofactors && step.atp === 0 && (
                      <tspan>{step.cofactors}</tspan>
                    )}
                  </text>

                  {/* Product box */}
                  <rect
                    x="240"
                    y={yStart}
                    width="140"
                    height="40"
                    rx="6"
                    fill={isActive ? '#fef3c7' : '#fef9e7'}
                    stroke={isActive ? '#d97706' : '#f0ad4e'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveStep(step.id)}
                  />
                  <text
                    x="310"
                    y={yStart + 24}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    {step.product}
                  </text>

                  {/* Reversibility indicator */}
                  {!isIrreversible && (
                    <line
                      x1="140"
                      y1={yStart + 30}
                      x2="240"
                      y2={yStart + 30}
                      stroke={arrowColor}
                      strokeWidth="1.5"
                      strokeDasharray="3,3"
                    />
                  )}
                </g>
              );
            })}

            {/* Net equation at bottom */}
            {showNetEquation && (
              <g>
                <rect
                  x="20"
                  y="850"
                  width="360"
                  height="40"
                  rx="6"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="875"
                  textAnchor="middle"
                  className="text-sm font-bold fill-gray-800"
                >
                  Net: Glucose + 2 ATP + 2 NAD⁺ → 2 Pyruvate + 4 ATP + 2 NADH
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Info Panel */}
        <div className="w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
          {activeStepData ? (
            <>
              <div className="border-b pb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Step {activeStepData.id}: {activeStepData.enzyme}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeStepData.substrate} → {activeStepData.product}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-blue-900">REACTION TYPE</p>
                  <p className="text-sm text-blue-800">
                    {activeStepData.reversible ? '🔄 Reversible' : '→ Irreversible (Rate-limiting)'}
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-semibold text-green-900">ATP/COFACTORS</p>
                  <p className="text-sm text-green-800">
                    {activeStepData.atp !== 0 ? (
                      <>
                        {activeStepData.atp > 0 ? '⚡ Produces' : '⚡ Consumes'} {Math.abs(activeStepData.atp)} ATP
                      </>
                    ) : (
                      activeStepData.cofactors
                    )}
                  </p>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-semibold text-purple-900">REGULATION</p>
                  <p className="text-sm text-purple-800">{activeStepData.regulation}</p>
                </div>

                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-xs font-semibold text-orange-900">CLINICAL SIGNIFICANCE</p>
                  <p className="text-sm text-orange-800">{activeStepData.clinical}</p>
                </div>

                {activeStepData.id === 3 && (
                  <div className="bg-red-50 border-2 border-red-200 p-3 rounded">
                    <p className="text-xs font-bold text-red-900">⭐ RATE-LIMITING STEP</p>
                    <p className="text-sm text-red-800">
                      Most important regulatory point in glycolysis. Key for energy status sensing.
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center">Click on a step to view details</p>
            </div>
          )}

          {/* Summary stats */}
          <div className="border-t pt-4 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-100 p-3 rounded text-center">
                <p className="text-xs text-green-700 font-semibold">NET ATP</p>
                <p className="text-lg font-bold text-green-900">{totalATP}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded text-center">
                <p className="text-xs text-blue-700 font-semibold">NADH</p>
                <p className="text-lg font-bold text-blue-900">{nadh}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-red-500"></div>
            <span className="text-sm text-gray-700">Irreversible steps</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-blue-500"></div>
            <span className="text-sm text-gray-700">Reversible steps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Substrate boxes: Cyan/Blue (input)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Product boxes: Yellow/Gold (output)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
