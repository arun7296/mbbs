'use client';

import React, { useState } from 'react';

interface Reaction {
  id: number;
  name: string;
  type: 'transamination' | 'oxidativeDeamination' | 'connection';
  enzyme: string;
  substrates: string[];
  products: string[];
  cofactors: string;
  clinical: string;
  regulation: string;
}

const reactions: Reaction[] = [
  {
    id: 1,
    name: 'Transamination',
    type: 'transamination',
    enzyme: 'Aminotransferases (ALT, AST)',
    substrates: ['Amino Acid', 'α-Ketoglutarate'],
    products: ['Keto Acid', 'Glutamate'],
    cofactors: 'Pyridoxal-5-phosphate (B6)',
    clinical: 'ALT in liver, AST in heart/liver. Elevated in hepatitis (ALT > AST) or myocardial infarction',
    regulation: 'No allosteric regulation. Substrate availability determines flux'
  },
  {
    id: 2,
    name: 'Oxidative Deamination',
    type: 'oxidativeDeamination',
    enzyme: 'Glutamate Dehydrogenase (GDH)',
    substrates: ['Glutamate', 'NAD+/NADP+'],
    products: ['α-Ketoglutarate', 'NH4+', 'NADH/NADPH'],
    cofactors: 'NAD+ or NADP+, Zn²⁺',
    clinical: 'Reversible. Primary step for ammonia release. GDH activity indicates mitochondrial integrity',
    regulation: 'Inhibited by ATP, GTP, NADH. Activated by ADP, AMP'
  },
  {
    id: 3,
    name: 'NH4+ to Urea',
    type: 'connection',
    enzyme: 'Urea Cycle',
    substrates: ['NH4+', 'CO2'],
    products: ['Urea', 'H2O'],
    cofactors: '8 steps, multiple enzymes',
    clinical: 'Detoxifies ammonia. Defects → hyperammonemia → encephalopathy',
    regulation: 'N-acetylglutamate (NAG) is allosteric activator of CPS-I'
  },
  {
    id: 4,
    name: 'Gluconeogenesis',
    type: 'connection',
    enzyme: 'Multiple gluconeogenic enzymes',
    substrates: ['Keto Acids (like pyruvate)'],
    products: ['Glucose'],
    cofactors: 'NADH, ATP, GTP',
    clinical: 'Branched-chain amino acids → glucose in starvation. Glucose-6-phosphatase deficiency → hypoglycemia',
    regulation: 'Increased in fasting, decreased in fed state'
  },
  {
    id: 5,
    name: 'Lipogenesis',
    type: 'connection',
    enzyme: 'Fatty acid synthase',
    substrates: ['Acetyl-CoA (from amino acids)'],
    products: ['Fatty Acids', 'Triglycerides'],
    cofactors: 'Malonyl-CoA, NADPH',
    clinical: 'Excess amino acids converted to fat in fed state. Contributes to obesity',
    regulation: 'Activated by insulin, glucose. Inhibited by glucagon, AMP'
  }
];

const enzymes = [
  {
    name: 'Aspartate Aminotransferase (AST)',
    isoforms: 'Cytoplasmic (cAST) and Mitochondrial (mAST)',
    substrate: 'Aspartate ↔ Oxaloacetate',
    clinicalSig: 'Elevated in myocardial infarction, hepatitis. mAST elevation suggests mitochondrial damage',
    ratio: 'AST/ALT ratio >2 suggests cirrhosis; <1 suggests acute hepatitis'
  },
  {
    name: 'Alanine Aminotransferase (ALT)',
    isoforms: 'Primarily cytoplasmic in liver',
    substrate: 'Alanine ↔ Pyruvate',
    clinicalSig: 'Elevated in viral hepatitis (ALT >> AST). More liver-specific than AST',
    ratio: 'More specific for liver disease than AST'
  },
  {
    name: 'Glutamate Dehydrogenase (GDH)',
    isoforms: 'Mitochondrial only',
    substrate: 'Glutamate ↔ α-Ketoglutarate + NH4+',
    clinicalSig: 'Indicates mitochondrial integrity. Elevated levels suggest hepatocellular necrosis',
    ratio: 'Part of Ritis index calculation (AST/ALT ratio)'
  }
];

export function AminoAcidMetabolism() {
  const [activeReaction, setActiveReaction] = useState<number | null>(1);
  const [activeEnzyme, setActiveEnzyme] = useState<number | null>(null);

  const activeReactionData = reactions.find(r => r.id === activeReaction);

  return (
    <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Amino Acid Metabolism</h2>
        <p className="text-gray-600">Transamination, deamination, and nitrogen disposal</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Pathway */}
        <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-md overflow-auto">
          <svg viewBox="0 0 500 400" className="w-full max-w-md">
            {/* Central glutamate hub */}
            <circle cx="250" cy="150" r="40" fill="#ffedd5" stroke="#ea580c" strokeWidth="3" />
            <text x="250" y="150" textAnchor="middle" dominantBaseline="middle" className="text-sm font-bold fill-gray-800">
              Glutamate
            </text>
            <text x="250" y="165" textAnchor="middle" dominantBaseline="middle" className="text-xs fill-gray-600">
              (Hub)
            </text>

            {/* Left side: Transamination from amino acids */}
            <g>
              {/* Amino acid input */}
              <rect x="30" y="130" width="90" height="40" rx="6" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" />
              <text x="75" y="155" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                Amino Acid
              </text>

              {/* Alpha-ketoglutarate input */}
              <rect x="30" y="200" width="90" height="40" rx="6" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" />
              <text x="75" y="220" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                α-KG
              </text>

              {/* Transamination arrow */}
              <line x1="120" y1="150" x2="210" y2="150" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowPurple)" />
              <text x="165" y="135" textAnchor="middle" className="text-xs font-bold cursor-pointer fill-purple-600 hover:underline" onClick={() => setActiveReaction(1)}>
                ALT/AST
              </text>

              {/* Keto acid output */}
              <rect x="320" y="130" width="90" height="40" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
              <text x="365" y="155" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                Keto Acid
              </text>

              {/* Output arrow */}
              <line x1="290" y1="150" x2="320" y2="150" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowPurple)" />
            </g>

            {/* Right side: Oxidative deamination */}
            <g>
              {/* Glutamate to α-KG + NH4+ */}
              <line x1="290" y1="150" x2="380" y2="50" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowGreen)" />
              <text x="330" y="95" textAnchor="middle" className="text-xs font-bold cursor-pointer fill-green-600 hover:underline" onClick={() => setActiveReaction(2)}>
                GDH
              </text>

              {/* α-KG product */}
              <rect x="380" y="20" width="80" height="35" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <text x="420" y="37" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                α-KG
              </text>

              {/* NH4+ product */}
              <rect x="380" y="65" width="80" height="35" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
              <text x="420" y="82" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                NH4+
              </text>

              {/* TCA cycle connection for α-KG */}
              <line x1="460" y1="37" x2="490" y2="37" stroke="#16a34a" strokeWidth="2" strokeDasharray="3,3" />
              <text x="480" y="25" textAnchor="middle" className="text-xs fill-gray-600">→ TCA</text>
            </g>

            {/* Bottom: Urea cycle connection */}
            <g>
              <line x1="420" y1="100" x2="420" y2="250" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="440" y="175" className="text-xs font-bold fill-red-600" onClick={() => setActiveReaction(3)} style={{ cursor: 'pointer' }}>
                Urea Cycle
              </text>

              <rect x="360" y="250" width="120" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" onClick={() => setActiveReaction(3)} style={{ cursor: 'pointer' }} />
              <text x="420" y="270" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                Urea → Urine
              </text>
            </g>

            {/* Left bottom: Glucose synthesis connection */}
            <g>
              <line x1="120" y1="200" x2="120" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              <text x="100" y="240" className="text-xs font-bold fill-blue-600" onClick={() => setActiveReaction(4)} style={{ cursor: 'pointer' }}>
                Gluconeogenesis
              </text>

              <rect x="40" y="280" width="160" height="40" rx="6" fill="#dbeafe" stroke="#0284c7" strokeWidth="2" onClick={() => setActiveReaction(4)} style={{ cursor: 'pointer' }} />
              <text x="120" y="305" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                Glucose (alanine cycle)
              </text>
            </g>

            {/* Fed state: Lipogenesis */}
            <g>
              <line x1="365" y1="155" x2="365" y2="280" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowAmber)" />
              <text x="385" y="220" className="text-xs font-bold fill-amber-600" onClick={() => setActiveReaction(5)} style={{ cursor: 'pointer' }}>
                Lipogenesis
              </text>

              <rect x="300" y="280" width="130" height="40" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" onClick={() => setActiveReaction(5)} style={{ cursor: 'pointer' }} />
              <text x="365" y="305" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                Fatty Acids
              </text>
            </g>

            {/* Arrow definitions */}
            <defs>
              <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
              </marker>
              <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
              </marker>
              <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
              </marker>
              <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
              </marker>
              <marker id="arrowAmber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 overflow-y-auto">
          {activeReactionData ? (
            <>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {activeReactionData.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeReactionData.enzyme}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-blue-900">SUBSTRATES</p>
                  <p className="text-sm text-blue-800">
                    {activeReactionData.substrates.join(' + ')}
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-semibold text-green-900">PRODUCTS</p>
                  <p className="text-sm text-green-800">
                    {activeReactionData.products.join(' + ')}
                  </p>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-semibold text-purple-900">COFACTORS</p>
                  <p className="text-sm text-purple-800">{activeReactionData.cofactors}</p>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs font-semibold text-gray-900">REGULATION</p>
                  <p className="text-sm text-gray-800">{activeReactionData.regulation}</p>
                </div>

                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-xs font-semibold text-orange-900">⚕️ CLINICAL SIGNIFICANCE</p>
                  <p className="text-sm text-orange-800">{activeReactionData.clinical}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center">Click on arrows to view reaction details</p>
            </div>
          )}
        </div>
      </div>

      {/* Enzyme panel */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Key Aminotransferases</h3>
        <div className="grid grid-cols-3 gap-3">
          {enzymes.map((enzyme, idx) => (
            <button
              key={idx}
              onClick={() => setActiveEnzyme(activeEnzyme === idx ? null : idx)}
              className={`p-3 rounded border-2 transition text-left ${
                activeEnzyme === idx
                  ? 'bg-orange-50 border-orange-500'
                  : 'bg-gray-50 border-gray-200 hover:border-orange-300'
              }`}
            >
              <p className="text-sm font-semibold text-gray-800">{enzyme.name}</p>
              <p className="text-xs text-gray-600 mt-1">{enzyme.substrate}</p>
            </button>
          ))}
        </div>

        {activeEnzyme !== null && enzymes[activeEnzyme] && (
          <div className="mt-4 p-4 bg-orange-50 rounded border-2 border-orange-200">
            <h4 className="font-bold text-orange-900 mb-2">{enzymes[activeEnzyme].name}</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-orange-800">Isoforms:</p>
                <p className="text-orange-700">{enzymes[activeEnzyme].isoforms}</p>
              </div>
              <div>
                <p className="font-semibold text-orange-800">Substrate Reaction:</p>
                <p className="text-orange-700">{enzymes[activeEnzyme].substrate}</p>
              </div>
              <div>
                <p className="font-semibold text-orange-800">Clinical Significance:</p>
                <p className="text-orange-700">{enzymes[activeEnzyme].clinicalSig}</p>
              </div>
              <div>
                <p className="font-semibold text-orange-800">Clinical Application:</p>
                <p className="text-orange-700">{enzymes[activeEnzyme].ratio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
