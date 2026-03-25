'use client';

import React, { useState } from 'react';

interface HemeStep {
  id: number;
  step: number;
  substrate: string;
  product: string;
  enzyme: string;
  cofactors: string;
  compartment: 'mitochondria' | 'cytoplasm';
  regulation: string;
  rateLimiting: boolean;
  porphyriaType?: string;
  porphyriaName?: string;
  porphyriaSymptoms?: string;
  leadTarget?: boolean;
  clinical: string;
}

const steps: HemeStep[] = [
  {
    id: 1,
    step: 1,
    substrate: 'Glycine + Succinyl-CoA',
    product: 'δ-Aminolevulinic Acid (ALA)',
    enzyme: 'ALA Synthase',
    cofactors: 'Pyridoxal-5-phosphate (B6), CoA',
    compartment: 'mitochondria',
    regulation: 'Inhibited by heme, ATP. Activated by drugs, fasting',
    rateLimiting: true,
    leadTarget: true,
    clinical: 'Rate-limiting enzyme. Induces acute porphyrias with certain drugs'
  },
  {
    id: 2,
    step: 2,
    substrate: 'δ-Aminolevulinic Acid (2 molecules)',
    product: 'Porphobilinogen (PBG)',
    enzyme: 'ALA Dehydratase (PBGD)',
    cofactors: 'Zn²⁺ cofactor',
    compartment: 'cytoplasm',
    regulation: 'Inhibited by lead → accumulates ALA',
    rateLimiting: false,
    leadTarget: true,
    porphyriaType: 'Early Steps',
    porphyriaName: 'Lead poisoning targets this step',
    porphyriaSymptoms: 'Peripheral neuropathy, blue line on gums',
    clinical: 'Lead inhibition → elevated urinary ALA. Causes neuropathy in lead workers'
  },
  {
    id: 3,
    step: 3,
    substrate: 'Porphobilinogen (4 molecules)',
    product: 'Hydroxymethylbilane (HMB)',
    enzyme: 'Hydroxymethylbilane Synthase (HMBS)',
    cofactors: 'None',
    compartment: 'cytoplasm',
    regulation: 'No regulation',
    rateLimiting: false,
    porphyriaType: 'Acute Intermittent Porphyria (AIP)',
    porphyriaName: 'Acute Intermittent Porphyria (AIP)',
    porphyriaSymptoms: 'Abdominal pain, neuropsychiatric symptoms, autonomic dysfunction',
    clinical: 'Most common acute porphyria. Autosomal dominant with incomplete penetrance'
  },
  {
    id: 4,
    step: 4,
    substrate: 'Hydroxymethylbilane',
    product: 'Uroporphyrinogen III',
    enzyme: 'Uroporphyrinogen III Synthase',
    cofactors: 'None',
    compartment: 'cytoplasm',
    regulation: 'No regulation',
    rateLimiting: false,
    clinical: 'Forms tetrapyrrole ring structure. Type I isoform is non-enzymatic'
  },
  {
    id: 5,
    step: 5,
    substrate: 'Uroporphyrinogen III',
    product: 'Coproporphyrinogen III',
    enzyme: 'Uroporphyrinogen Decarboxylase (UROD)',
    cofactors: 'None',
    compartment: 'cytoplasm',
    regulation: 'No regulation',
    rateLimiting: false,
    porphyriaType: 'Porphyria Cutanea Tarda (PCT)',
    porphyriaName: 'Porphyria Cutanea Tarda (PCT)',
    porphyriaSymptoms: 'Photosensitive skin lesions, blistering, hyperpigmentation',
    clinical: 'Most common porphyria overall. Type I = acquired (liver disease, HCV, hepatitis). Type III = familial'
  },
  {
    id: 6,
    step: 6,
    substrate: 'Coproporphyrinogen III',
    product: 'Protoporphyrinogen IX',
    enzyme: 'Coproporphyrinogen Oxidase',
    cofactors: 'FAD, Fe²⁺',
    compartment: 'mitochondria',
    regulation: 'No regulation',
    rateLimiting: false,
    porphyriaType: 'Hereditary Coproporphyria (HCP)',
    porphyriaName: 'Hereditary Coproporphyria (HCP)',
    porphyriaSymptoms: 'Photosensitivity, neuropsychiatric symptoms (like AIP)',
    clinical: 'Rare acute porphyria. Can cause acute neurovisceral attacks'
  },
  {
    id: 7,
    step: 7,
    substrate: 'Protoporphyrinogen IX',
    product: 'Protoporphyrin IX',
    enzyme: 'Protoporphyrinogen Oxidase',
    cofactors: 'FAD',
    compartment: 'mitochondria',
    regulation: 'No regulation',
    rateLimiting: false,
    porphyriaType: 'Variegate Porphyria (VP)',
    porphyriaName: 'Variegate Porphyria (VP)',
    porphyriaSymptoms: 'Both photosensitivity AND acute attacks',
    clinical: 'Combines acute neurologic symptoms with cutaneous photosensitivity'
  },
  {
    id: 8,
    step: 8,
    substrate: 'Protoporphyrin IX + Fe²⁺',
    product: 'Heme',
    enzyme: 'Ferrochelatase',
    cofactors: 'Fe²⁺ iron',
    compartment: 'mitochondria',
    regulation: 'Inhibited by lead',
    rateLimiting: false,
    leadTarget: true,
    porphyriaType: 'Erythropoietic Protoporphyria (EPP)',
    porphyriaName: 'Erythropoietic Protoporphyria (EPP)',
    porphyriaSymptoms: 'Severe photosensitivity with burning/pain, may lack blistering',
    clinical: 'Photosensitivity can be severely debilitating. Iron supplementation may worsen it'
  }
];

export function HemeSynthesisPathway() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showPorphyrias, setShowPorphyrias] = useState(true);

  const activeData = activeStep ? steps.find(s => s.id === activeStep) : null;

  return (
    <div className="w-full h-full bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Heme Synthesis Pathway</h2>
        <p className="text-gray-600">8-step synthesis from glycine to heme iron protoporphyrin</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Pathway */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg shadow-md overflow-auto p-4">
          <svg viewBox="0 0 500 700" className="w-full max-w-sm">
            {/* Compartment backgrounds */}
            {/* Mitochondrial matrix */}
            <g>
              <rect x="20" y="20" width="460" height="100" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" />
              <text x="30" y="40" className="text-xs font-bold fill-pink-700">Mitochondrial Matrix</text>
            </g>

            {/* Cytoplasm */}
            <g>
              <rect x="20" y="140" width="460" height="360" rx="8" fill="#ede9fe" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5,5" />
              <text x="30" y="160" className="text-xs font-bold fill-purple-700">Cytoplasm</text>
            </g>

            {/* Final mitochondrial step */}
            <g>
              <rect x="20" y="530" width="460" height="150" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" />
              <text x="30" y="550" className="text-xs font-bold fill-pink-700">Mitochondrial Inner Membrane</text>
            </g>

            {/* Steps visualization */}
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const yStart = step.compartment === 'mitochondria' && step.step === 1 ? 60 : step.step === 8 ? 570 : 180 + (step.step - 2) * 50;
              const xStart = 40;
              const xEnd = 260;

              return (
                <g key={step.id}>
                  {/* Substrate box */}
                  <rect
                    x={xStart}
                    y={yStart}
                    width="90"
                    height="28"
                    rx="4"
                    fill={isActive ? '#dbeafe' : '#e8f4f8'}
                    stroke={isActive ? '#0284c7' : '#7dd3c0'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveStep(step.id)}
                  />
                  <text
                    x={xStart + 45}
                    y={yStart + 16}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    {step.step === 1 ? 'Glycine' : `Step ${step.step - 1}`}
                  </text>

                  {/* Arrow with enzyme label */}
                  <line x1={xStart + 90} y1={yStart + 14} x2={xEnd - 10} y2={yStart + 14} stroke="#10b981" strokeWidth="2" />
                  <polygon points={`${xEnd - 10},${yStart + 14} ${xEnd - 15},${yStart + 9} ${xEnd - 15},${yStart + 19}`} fill="#10b981" />

                  {/* Enzyme label (clickable) */}
                  <text
                    x={(xStart + 90 + xEnd - 10) / 2}
                    y={yStart - 8}
                    textAnchor="middle"
                    className="text-xs font-bold cursor-pointer hover:underline fill-green-700"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {step.enzyme.split(' ')[0]}
                  </text>

                  {/* Markers for special steps */}
                  {step.rateLimiting && (
                    <circle cx={xStart - 10} cy={yStart + 14} r="5" fill="red" opacity="0.7" />
                  )}

                  {step.leadTarget && (
                    <path
                      d={`M ${xEnd + 15} ${yStart + 5} L ${xEnd + 25} ${yStart + 23}`}
                      stroke="#fbbf24"
                      strokeWidth="3"
                    />
                  )}

                  {/* Product box */}
                  <rect
                    x={xEnd - 10}
                    y={yStart}
                    width="110"
                    height="28"
                    rx="4"
                    fill={isActive ? '#fef3c7' : '#fef9e7'}
                    stroke={isActive ? '#d97706' : '#f0ad4e'}
                    strokeWidth={isActive ? '3' : '2'}
                    cursor="pointer"
                    onClick={() => setActiveStep(step.id)}
                  />
                  <text
                    x={xEnd + 45}
                    y={yStart + 16}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    {step.product.split('(')[0].trim()}
                  </text>

                  {/* Step number circle */}
                  <circle cx="20" cy={yStart + 14} r="10" fill="#10b981" />
                  <text x="20" y={yStart + 18} textAnchor="middle" className="text-xs font-bold fill-white">
                    {step.step}
                  </text>

                  {/* Connector arrow to next step */}
                  {step.id < steps.length && (
                    <line
                      x1={xStart + 45}
                      y1={yStart + 28}
                      x2={xStart + 45}
                      y2={yStart + 42}
                      stroke="#999"
                      strokeWidth="1"
                    />
                  )}
                </g>
              );
            })}

            {/* Legend */}
            <g>
              <circle cx="340" cy="680" r="4" fill="red" opacity="0.7" />
              <text x="350" y="683" className="text-xs fill-gray-700">Rate-limiting</text>

              <line x1="340" y1="668" x2="350" y2="668" stroke="#fbbf24" strokeWidth="3" />
              <text x="355" y="671" className="text-xs fill-gray-700">Lead target</text>
            </g>
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
                  {activeData.substrate.split('+')[0].trim()} →
                </p>
                <p className="text-xs text-gray-600 font-semibold">
                  {activeData.product.split('(')[0].trim()}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-pink-50 p-3 rounded">
                  <p className="text-xs font-semibold text-pink-900">LOCATION</p>
                  <p className="text-sm text-pink-800">
                    {activeData.compartment === 'mitochondria' ? '🧬 Mitochondrial Matrix' : '🔲 Cytoplasm'}
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-blue-900">COFACTORS</p>
                  <p className="text-sm text-blue-800">{activeData.cofactors}</p>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-semibold text-green-900">REGULATION</p>
                  <p className="text-sm text-green-800">{activeData.regulation}</p>
                </div>

                {activeData.rateLimiting && (
                  <div className="bg-red-50 border-2 border-red-200 p-3 rounded">
                    <p className="text-xs font-bold text-red-900">⭐ RATE-LIMITING STEP</p>
                    <p className="text-sm text-red-800">ALA Synthase controls flux through entire pathway</p>
                  </div>
                )}

                {activeData.leadTarget && (
                  <div className="bg-yellow-50 border-2 border-yellow-300 p-3 rounded">
                    <p className="text-xs font-bold text-yellow-900">☠️ LEAD POISONING TARGET</p>
                    <p className="text-sm text-yellow-800">Lead inhibits this enzyme → toxic effects</p>
                  </div>
                )}

                {showPorphyrias && activeData.porphyriaName && (
                  <div className="bg-red-50 border-2 border-red-300 p-3 rounded">
                    <p className="text-xs font-bold text-red-900">🧬 PORPHYRIA DEFICIENCY</p>
                    <p className="text-sm text-red-800 font-semibold">{activeData.porphyriaName}</p>
                    <p className="text-xs text-red-700 mt-1">{activeData.porphyriaSymptoms}</p>
                  </div>
                )}

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs font-semibold text-gray-900">CLINICAL NOTES</p>
                  <p className="text-sm text-gray-800">{activeData.clinical}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center">Click on a step to view enzyme details and associated porphyrias</p>
            </div>
          )}

          {/* Toggle porphyrias */}
          <div className="border-t pt-4 mt-4">
            <button
              onClick={() => setShowPorphyrias(!showPorphyrias)}
              className="w-full py-2 px-4 bg-red-100 hover:bg-red-200 text-red-800 font-semibold rounded transition text-sm"
            >
              {showPorphyrias ? '🔒 Hide Porphyrias' : '🔓 Show Porphyrias'}
            </button>
          </div>
        </div>
      </div>

      {/* Porphyrias summary */}
      {showPorphyrias && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-2">Porphyrias Summary</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-2 rounded border border-red-200">
              <p className="font-semibold text-red-800">Acute Porphyrias</p>
              <p className="text-gray-700">AIP, HCP, VP: neuropsychiatric attacks</p>
            </div>
            <div className="bg-white p-2 rounded border border-red-200">
              <p className="font-semibold text-red-800">Cutaneous Porphyrias</p>
              <p className="text-gray-700">PCT, EPP: photosensitive skin lesions</p>
            </div>
            <div className="bg-white p-2 rounded border border-red-200">
              <p className="font-semibold text-red-800">Lead Poisoning</p>
              <p className="text-gray-700">Inhibits steps 2 & 8 → elevated ALA & protoporphyrin</p>
            </div>
            <div className="bg-white p-2 rounded border border-red-200">
              <p className="font-semibold text-red-800">Drug Triggers</p>
              <p className="text-gray-700">Barbiturates, sulfonamides induce ALA synthase</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
