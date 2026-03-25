'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const PharmacokineticsDiagram: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const phases = [
    {
      id: 'absorption',
      name: 'Absorption',
      color: 'bg-blue-100 border-blue-500',
      textColor: 'text-blue-900',
      description: 'Drug entry into systemic circulation',
      keyPoints: [
        'Route of administration determines bioavailability',
        'Oral: 0-100% (first-pass effect)',
        'IV: 100% (no absorption needed)',
        'IM/SC: 50-100%',
        'Transdermal: Slow, prolonged absorption',
        'Passive diffusion is most common mechanism',
      ],
      parameters: ['Bioavailability (F)', 'Absorption rate constant (Ka)'],
      route: 'GI tract → Portal circulation',
    },
    {
      id: 'distribution',
      name: 'Distribution',
      color: 'bg-green-100 border-green-500',
      textColor: 'text-green-900',
      description: 'Drug movement from blood to tissues',
      keyPoints: [
        'Volume of Distribution (Vd): theoretical volume drug distributes into',
        'Affected by: protein binding, lipophilicity, tissue affinity',
        'Highly lipophilic drugs: high Vd (CNS penetration)',
        'Highly protein bound: low Vd (remains in plasma)',
        'Different organs have different perfusion rates',
        'Blood-brain barrier limits CNS distribution of many drugs',
      ],
      parameters: ['Volume of Distribution (Vd)', 'Protein binding %'],
      route: 'Systemic circulation → Tissues, CNS, adipose',
    },
    {
      id: 'metabolism',
      name: 'Metabolism',
      color: 'bg-yellow-100 border-yellow-500',
      textColor: 'text-yellow-900',
      description: 'Drug chemical transformation (usually in liver)',
      keyPoints: [
        'Phase I (CYP450): Oxidation, reduction, hydrolysis',
        'Phase II: Conjugation (glucuronidation, sulfation, acetylation)',
        'Phase III: Active transport (P-glycoprotein, OATP)',
        'First-pass metabolism: Drug metabolized before reaching systemic circulation',
        'Can produce active or inactive metabolites',
        'CYP3A4 metabolizes >50% of drugs',
      ],
      parameters: ['Clearance (CL)', 'Extraction ratio', 'Half-life (t1/2)'],
      route: 'Liver (primary) → Kidneys, lungs, GI, skin (secondary)',
    },
    {
      id: 'excretion',
      name: 'Excretion',
      color: 'bg-purple-100 border-purple-500',
      textColor: 'text-purple-900',
      description: 'Drug and metabolite elimination from body',
      keyPoints: [
        'Kidneys: Most common excretion route (glomerular filtration, active secretion)',
        'Liver: Via bile (into GI tract)',
        'Lungs: Volatile compounds',
        'Metabolism produces metabolites that are often more polar',
        'Renal function affects elimination of many drugs',
        'Dose adjustment needed in renal/hepatic impairment',
      ],
      parameters: ['Renal clearance (Cr)', 'Hepatic clearance', 'Total body clearance'],
      route: 'Kidneys (urine) → Liver (bile) → GI tract → Feces',
    },
  ];

  const pharmacokinetics = [
    {
      parameter: 'Bioavailability (F)',
      definition: '% of administered dose reaching systemic circulation',
      formula: '(AUC_oral / AUC_IV) × (Dose_IV / Dose_oral)',
      significance: 'Determines effective drug concentration',
    },
    {
      parameter: 'Volume of Distribution (Vd)',
      definition: 'Theoretical volume in which drug distributes',
      formula: 'Vd = Dose / C0 (C0 = initial concentration)',
      significance: 'If Vd > plasma volume = extensive tissue binding',
    },
    {
      parameter: 'Clearance (CL)',
      definition: 'Volume of plasma cleared of drug per unit time',
      formula: 'CL = Rate of elimination / Concentration',
      significance: 'Determines how quickly drug is removed',
    },
    {
      parameter: 'Half-life (t1/2)',
      definition: 'Time for plasma concentration to decrease by 50%',
      formula: 't1/2 = 0.693 / ke (ke = elimination rate constant)',
      significance: 'Determines dosing interval',
    },
    {
      parameter: 'Area Under Curve (AUC)',
      definition: 'Total drug exposure over time',
      formula: 'AUC = Dose / CL',
      significance: 'Correlates with drug efficacy and safety',
    },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pharmacokinetics (ADME)</h2>
        <p className="text-gray-600">Absorption, Distribution, Metabolism, and Excretion</p>
      </div>

      {/* ADME pathway diagram */}
      <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded border-2 border-gray-300">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <div className="text-center">
            <div className="px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded font-bold text-gray-900">
              DRUG DOSE
            </div>
            <p className="text-xs text-gray-600 mt-1">Administration route</p>
          </div>

          <ChevronRight className="text-gray-400" size={24} />

          <div className="text-center">
            <div className="px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded font-bold text-gray-900">
              ABSORPTION
            </div>
            <p className="text-xs text-gray-600 mt-1">GI tract or injection site</p>
          </div>

          <ChevronRight className="text-gray-400" size={24} />

          <div className="text-center">
            <div className="px-4 py-2 bg-orange-100 border-2 border-orange-500 rounded font-bold text-gray-900">
              1st PASS METABOLISM
            </div>
            <p className="text-xs text-gray-600 mt-1">Liver, then systemic</p>
          </div>

          <ChevronRight className="text-gray-400" size={24} />

          <div className="text-center">
            <div className="px-4 py-2 bg-green-100 border-2 border-green-500 rounded font-bold text-gray-900">
              DISTRIBUTION
            </div>
            <p className="text-xs text-gray-600 mt-1">To tissues & organs</p>
          </div>

          <ChevronRight className="text-gray-400" size={24} />

          <div className="text-center">
            <div className="px-4 py-2 bg-yellow-100 border-2 border-yellow-500 rounded font-bold text-gray-900">
              METABOLISM
            </div>
            <p className="text-xs text-gray-600 mt-1">Liver & other tissues</p>
          </div>

          <ChevronRight className="text-gray-400" size={24} />

          <div className="text-center">
            <div className="px-4 py-2 bg-purple-100 border-2 border-purple-500 rounded font-bold text-gray-900">
              EXCRETION
            </div>
            <p className="text-xs text-gray-600 mt-1">Urine, bile, breath</p>
          </div>
        </div>
      </div>

      {/* ADME phases detail */}
      <div className="mb-8 space-y-4">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            className={`w-full p-4 rounded border-2 text-left transition hover:shadow-md ${phase.color}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-bold text-lg ${phase.textColor}`}>{phase.name}</h3>
                <p className="text-sm text-gray-700 mt-1">{phase.description}</p>
                <p className="text-xs text-gray-600 mt-1 italic">{phase.route}</p>
              </div>
              <ChevronRight
                size={20}
                className={`text-gray-600 transition ${expandedPhase === phase.id ? 'rotate-90' : ''}`}
              />
            </div>

            {expandedPhase === phase.id && (
              <div className="mt-4 pt-4 border-t-2 border-gray-300 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Key Points:</p>
                  <ul className="space-y-1">
                    {phase.keyPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-gray-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Parameters:</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.parameters.map((param, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white rounded border border-gray-300 text-gray-700">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Plasma concentration-time curve */}
      <div className="mb-8 p-4 bg-gray-50 rounded border-2 border-gray-300">
        <h3 className="font-bold text-gray-900 mb-4">Plasma Concentration vs Time</h3>
        <div className="bg-white p-4 rounded border border-gray-300">
          <svg width="100%" height="250" viewBox="0 0 600 250" preserveAspectRatio="xMidYMid meet">
            {/* Axes */}
            <line x1="40" y1="200" x2="580" y2="200" stroke="#1f2937" strokeWidth="2" />
            <line x1="40" y1="200" x2="40" y2="20" stroke="#1f2937" strokeWidth="2" />

            {/* Grid lines */}
            {[40, 140, 240, 340, 440, 540].map((x) => (
              <line key={`v-${x}`} x1={x} y1="200" x2={x} y2="195" stroke="#1f2937" strokeWidth="1" />
            ))}
            {[60, 100, 140, 180].map((y) => (
              <line key={`h-${y}`} x1="40" y1={y} x2="45" y2={y} stroke="#1f2937" strokeWidth="1" />
            ))}

            {/* Concentration curve */}
            <path
              d="M60,180 Q140,100 220,65 Q300,50 380,55 Q460,65 540,120"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* Tmax marker */}
            <circle cx="220" cy="65" r="4" fill="#ef4444" />
            <line x1="220" y1="65" x2="220" y2="205" stroke="#ef4444" strokeWidth="1" strokeDasharray="5,5" />
            <text x="220" y="220" fontSize="12" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              Tmax
            </text>

            {/* Cmax marker */}
            <line x1="35" y1="65" x2="40" y2="65" stroke="#ef4444" strokeWidth="2" />
            <text x="25" y="70" fontSize="12" fill="#dc2626" textAnchor="end" fontWeight="bold">
              Cmax
            </text>

            {/* Half-life markers */}
            <line x1="380" y1="50" x2="380" y2="205" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" />
            <text x="380" y="220" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="bold">
              t1/2
            </text>
            <circle cx="380" cy="50" r="3" fill="#10b981" />

            {/* AUC shading */}
            <defs>
              <linearGradient id="aucGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path
              d="M60,180 Q140,100 220,65 Q300,50 380,55 Q460,65 540,120 L540,200 L60,200 Z"
              fill="url(#aucGradient)"
            />
            <text x="300" y="130" fontSize="14" fill="#1e40af" fontWeight="bold" opacity="0.6">
              AUC
            </text>

            {/* Axis labels */}
            <text x="560" y="220" fontSize="13" fill="#1f2937" fontWeight="bold">
              Time
            </text>
            <text x="20" y="30" fontSize="13" fill="#1f2937" fontWeight="bold">
              Conc
            </text>
          </svg>
        </div>
        <p className="text-sm text-gray-700 mt-3">
          <span className="font-semibold">Cmax:</span> Maximum plasma concentration (absorption phase)
          <span className="ml-4 font-semibold">Tmax:</span> Time to reach Cmax
          <span className="ml-4 font-semibold">AUC:</span> Area under curve = total drug exposure
          <span className="ml-4 font-semibold">t1/2:</span> Time for concentration to halve (elimination)
        </p>
      </div>

      {/* Key parameters table */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded p-4">
        <h3 className="font-bold text-blue-900 mb-4">Key Pharmacokinetic Parameters</h3>
        <div className="space-y-3">
          {pharmacokinetics.map((pk, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-blue-200">
              <p className="font-bold text-gray-900">{pk.parameter}</p>
              <p className="text-sm text-gray-700 mt-1">{pk.definition}</p>
              <p className="text-xs font-mono text-gray-600 mt-1 bg-gray-50 p-1 rounded">{pk.formula}</p>
              <p className="text-xs text-gray-700 mt-1 italic">{pk.significance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
