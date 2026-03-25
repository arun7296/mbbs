'use client';

import React, { useState } from 'react';

interface UreaStep {
  id: number;
  step: number;
  substrate: string;
  product: string;
  enzyme: string;
  cofactors: string;
  compartment: 'matrix' | 'cytoplasm';
  regulation: string;
  deficiencyDisease: string;
  deficiencySymptoms: string;
}

const steps: UreaStep[] = [
  {
    id: 1,
    step: 1,
    substrate: 'Glutamine + CO₂ + 2 ATP',
    product: 'Carbamoyl Phosphate',
    enzyme: 'Carbamoyl Phosphate Synthetase I (CPS-I)',
    cofactors: 'NH₃ source, N-acetylglutamate (activator)',
    compartment: 'matrix',
    regulation: 'Activated by N-acetylglutamate (NAG). Rate-limiting step',
    deficiencyDisease: 'CPS-I deficiency (autosomal recessive)',
    deficiencySymptoms: 'Hyperammonemia, encephalopathy, developmental delay'
  },
  {
    id: 2,
    step: 2,
    substrate: 'Carbamoyl Phosphate + Ornithine',
    product: 'Citrulline',
    enzyme: 'Ornithine Transcarbamylase (OTC)',
    cofactors: 'None',
    compartment: 'matrix',
    regulation: 'No regulation',
    deficiencyDisease: 'OTC deficiency (X-linked, most common urea cycle disorder)',
    deficiencySymptoms: 'Hyperammonemia, encephalopathy, lethal in males if severe'
  },
  {
    id: 3,
    step: 3,
    substrate: 'Citrulline (matrix) → Cytoplasm',
    product: 'Citrulline in cytoplasm',
    enzyme: 'Citrulline-Malate Antiporter',
    cofactors: 'Transporter',
    compartment: 'matrix',
    regulation: 'Compartmentalization',
    deficiencyDisease: 'Transport defects rare',
    deficiencySymptoms: 'Not typically seen'
  },
  {
    id: 4,
    step: 4,
    substrate: 'Citrulline + Aspartate + ATP',
    product: 'Argininosuccinate',
    enzyme: 'Argininosuccinate Synthetase (ASS)',
    cofactors: 'Provides second nitrogen (from aspartate)',
    compartment: 'cytoplasm',
    regulation: 'Repressed by arginine',
    deficiencyDisease: 'Citrullinemia Type I (ASS deficiency)',
    deficiencySymptoms: 'Elevated citrulline, hyperammonemia, developmental delay'
  },
  {
    id: 5,
    step: 5,
    substrate: 'Argininosuccinate',
    product: 'Arginine + Fumarate',
    enzyme: 'Argininosuccinate Lyase (ASL)',
    cofactors: 'Releases fumarate (links to TCA cycle)',
    compartment: 'cytoplasm',
    regulation: 'Reversible',
    deficiencyDisease: 'Argininosuccinic Aciduria (ASL deficiency)',
    deficiencySymptoms: 'Elevated argininosuccinate in urine, developmental delay, seizures'
  },
  {
    id: 6,
    step: 6,
    substrate: 'Arginine + H₂O',
    product: 'Urea + Ornithine',
    enzyme: 'Arginase',
    cofactors: 'Mn²⁺ cofactor',
    compartment: 'cytoplasm',
    regulation: 'Slow enzyme, may be rate-limiting',
    deficiencyDisease: 'Arginase deficiency (hyperargininemia)',
    deficiencySymptoms: 'Elevated arginine, spastic paraplegia, developmental delay'
  }
];

export function UreaCycleDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showDiseases, setShowDiseases] = useState(true);

  const activeData = activeStep ? steps.find(s => s.id === activeStep) : null;

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Urea Cycle</h2>
        <p className="text-gray-600">Nitrogen disposal and ammonia detoxification</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Pathway */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg shadow-md overflow-auto p-4">
          <svg viewBox="0 0 600 500" className="w-full max-w-md">
            {/* Compartment backgrounds */}
            {/* Mitochondrial matrix */}
            <rect x="20" y="20" width="560" height="200" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
            <text x="30" y="40" className="text-sm font-bold fill-indigo-700">Mitochondrial Matrix</text>

            {/* Cytoplasm */}
            <rect x="20" y="240" width="560" height="240" rx="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" />
            <text x="30" y="260" className="text-sm font-bold fill-pink-700">Cytoplasm</text>

            {/* Steps visualization */}
            {steps.map((step, idx) => {
              const isActive = activeStep === step.id;
              const isMatrixStep = step.compartment === 'matrix';

              if (step.step === 3) return null; // Skip transport step in visualization

              const baseY = isMatrixStep ? 80 + (step.step - 1) * 45 : 280 + (step.step - 4) * 45;
              const xStart = 60;
              const xEnd = 260;

              return (
                <g key={step.id}>
                  {/* Substrate box */}
                  <rect
                    x={xStart}
                    y={baseY}
                    width="80"
                    height="30"
                    rx="4"
                    fill={isActive ? '#dbeafe' : '#e8f4f8'}
                    stroke={isActive ? '#0284c7' : '#7dd3c0'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveStep(step.id)}
                  />
                  <text
                    x={xStart + 40}
                    y={baseY + 18}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    {step.step === 1 ? 'NH₃' : step.step === 2 ? 'Orn' : step.step === 4 ? 'Cit + Asp' : step.step === 5 ? 'ArgSucc' : 'Arg'}
                  </text>

                  {/* Arrow with enzyme label */}
                  <line
                    x1={xStart + 80}
                    y1={baseY + 15}
                    x2={xEnd - 20}
                    y2={baseY + 15}
                    stroke="#9333ea"
                    strokeWidth="2"
                  />
                  <polygon points={`${xEnd - 20},${baseY + 15} ${xEnd - 25},${baseY + 10} ${xEnd - 25},${baseY + 20}`} fill="#9333ea" />

                  {/* Enzyme label */}
                  <text
                    x={(xStart + 80 + xEnd - 20) / 2}
                    y={baseY - 5}
                    textAnchor="middle"
                    className="text-xs font-bold cursor-pointer hover:underline fill-purple-600"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {step.enzyme.split(' ')[0]}
                  </text>

                  {/* Product box */}
                  <rect
                    x={xEnd - 20}
                    y={baseY}
                    width="100"
                    height="30"
                    rx="4"
                    fill={isActive ? '#fef3c7' : '#fef9e7'}
                    stroke={isActive ? '#d97706' : '#f0ad4e'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveStep(step.id)}
                  />
                  <text
                    x={xEnd + 30}
                    y={baseY + 18}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    {step.step === 1 ? 'CPS' : step.step === 2 ? 'Cit' : step.step === 4 ? 'ArgS' : step.step === 5 ? 'Arg + Fum' : 'Urea + Orn'}
                  </text>

                  {/* Step number circle */}
                  <circle cx="25" cy={baseY + 15} r="12" fill="#a78bfa" />
                  <text x="25" y={baseY + 19} textAnchor="middle" className="text-xs font-bold fill-white">
                    {step.step}
                  </text>
                </g>
              );
            })}

            {/* Arrow from matrix to cytoplasm for citrulline */}
            <path d="M 300 220 L 300 240" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowDown)" />
            <text x="330" y="233" className="text-xs fill-purple-600">Citrulline</text>

            {/* Feedback arrow - Fumarate to TCA cycle */}
            <path d="M 420 365 L 480 365 Q 500 365 500 340" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
            <text x="450" y="380" className="text-xs fill-blue-600">Fumarate → TCA</text>

            {/* Legend - inputs and outputs */}
            <g>
              <text x="50" y="470" className="text-xs font-semibold fill-gray-700">Inputs:</text>
              <text x="100" y="470" className="text-xs fill-gray-600">NH₃ + CO₂ + 2 ATP</text>
              <text x="50" y="490" className="text-xs font-semibold fill-gray-700">Output:</text>
              <text x="100" y="490" className="text-xs fill-gray-600">1 Urea + H₂O</text>
            </g>

            <defs>
              <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10" fill="#9333ea" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 overflow-y-auto">
          {activeData ? (
            <>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Step {activeData.step}: {activeData.enzyme}
                </h3>
                <p className="text-xs text-gray-600">
                  {activeData.substrate} → {activeData.product}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="text-xs font-semibold text-indigo-900">LOCATION</p>
                  <p className="text-sm text-indigo-800 capitalize">
                    {activeData.compartment === 'matrix' ? '🧬 Mitochondrial Matrix' : '🔲 Cytoplasm'}
                  </p>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-semibold text-purple-900">COFACTORS & REGULATION</p>
                  <p className="text-sm text-purple-800">{activeData.cofactors}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-blue-900">REGULATION</p>
                  <p className="text-sm text-blue-800">{activeData.regulation}</p>
                </div>

                {showDiseases && (
                  <>
                    <div className="bg-red-50 border-2 border-red-200 p-3 rounded">
                      <p className="text-xs font-bold text-red-900">⚠️ ENZYME DEFICIENCY</p>
                      <p className="text-sm text-red-800 font-semibold">{activeData.deficiencyDisease}</p>
                      <p className="text-xs text-red-700 mt-1">{activeData.deficiencySymptoms}</p>
                    </div>

                    {activeData.step === 2 && (
                      <div className="bg-orange-50 border-2 border-orange-200 p-3 rounded">
                        <p className="text-xs font-bold text-orange-900">📊 MOST COMMON UREA CYCLE DISORDER</p>
                        <p className="text-xs text-orange-800">OTC deficiency accounts for ~50% of all cases. X-linked inheritance → more severe in males.</p>
                      </div>
                    )}
                  </>
                )}

                {activeData.step === 1 && (
                  <div className="bg-green-50 border-2 border-green-200 p-3 rounded">
                    <p className="text-xs font-bold text-green-900">⭐ RATE-LIMITING STEP</p>
                    <p className="text-xs text-green-800">Activated by N-acetylglutamate (NAG) which senses amino acid levels</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center">Click on a step to view enzyme details and genetic diseases</p>
            </div>
          )}

          {/* Toggle diseases */}
          <div className="border-t pt-4 mt-4">
            <button
              onClick={() => setShowDiseases(!showDiseases)}
              className="w-full py-2 px-4 bg-red-100 hover:bg-red-200 text-red-800 font-semibold rounded transition"
            >
              {showDiseases ? '🔒 Hide Diseases' : '🔓 Show Diseases'}
            </button>
          </div>

          {/* Summary */}
          <div className="border-t pt-4 mt-4 text-xs">
            <p className="font-semibold text-gray-700 mb-2">CYCLE FUNCTION:</p>
            <p className="text-gray-600">Converts 2 equivalents of ammonia (NH₃) to non-toxic urea for excretion in urine. Also regenerates ornithine.</p>
          </div>
        </div>
      </div>

      {/* Clinical summary box */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
        <h3 className="font-bold text-red-900 mb-2">Urea Cycle Disorders - Clinical Overview</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-red-800">Presentation:</p>
            <p className="text-red-700">Hyperammonemia → encephalopathy, seizures, coma, death</p>
          </div>
          <div>
            <p className="font-semibold text-red-800">Lab findings:</p>
            <p className="text-red-700">Elevated ammonia, specific amino acids by defect</p>
          </div>
          <div>
            <p className="font-semibold text-red-800">Treatment:</p>
            <p className="text-red-700">Protein restriction, nitrogen scavengers, medication</p>
          </div>
          <div>
            <p className="font-semibold text-red-800">Prognosis:</p>
            <p className="text-red-700">Early diagnosis and treatment improve outcomes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
