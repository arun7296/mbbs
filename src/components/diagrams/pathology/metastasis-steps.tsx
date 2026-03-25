'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const MetastasisSteps: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'Primary Tumor',
      description: 'Abnormal proliferation at origin site',
      molecularEvents: [
        'Oncogene activation',
        'Tumor suppressor loss',
        'Immortalization (telomerase)',
        'Angiogenesis induction (VEGF, FGF)',
        'Neovascularization',
      ],
      color: 'bg-red-100 border-red-500',
      outcomes: ['Tumor growth', 'Local invasion'],
    },
    {
      title: 'Local Invasion',
      description: 'Epithelial-Mesenchymal Transition (EMT)',
      molecularEvents: [
        'Loss of E-cadherin adhesion',
        'Gain of N-cadherin and vimentin',
        'MMP upregulation (collagenase)',
        'Downregulation of adhesion molecules',
        'Increased motility and invasiveness',
        'Transcription factors: Snail, Slug, Twist',
      ],
      color: 'bg-orange-100 border-orange-500',
      outcomes: ['Basement membrane breach', 'Stromal invasion'],
    },
    {
      title: 'Intravasation',
      description: 'Entry into blood vessels',
      molecularEvents: [
        'Cancer cells penetrate vessel wall',
        'Disruption of endothelial tight junctions',
        'Expression of adhesion molecules',
        'Interaction with von Willebrand factor',
        'Platelets provide shielding',
      ],
      color: 'bg-yellow-100 border-yellow-500',
      outcomes: ['Circulating tumor cells (CTCs)', 'Microemboli formation'],
    },
    {
      title: 'Circulation',
      description: 'Survival in bloodstream',
      molecularEvents: [
        'Resistance to anoikis (detachment apoptosis)',
        'Aggregation with platelets and leukocytes',
        'Evasion of immune cells',
        'Expression of homing receptors',
        'Adaptation to metabolic stress',
      ],
      color: 'bg-blue-100 border-blue-500',
      outcomes: ['CTC survival <1%', 'Distant organ targeting'],
    },
    {
      title: 'Extravasation',
      description: 'Exit from blood vessels at distant site',
      molecularEvents: [
        'Adhesion to endothelium',
        'VLA-4 and integrin interactions',
        'Leukocyte-like transmigration',
        'Disruption of endothelial barrier',
        'Penetration into tissue interstitium',
      ],
      color: 'bg-green-100 border-green-500',
      outcomes: ['Lodgment in tissue', 'Micrometastasis initiation'],
    },
    {
      title: 'Metastatic Colonization',
      description: 'Proliferation and angiogenesis in new site',
      molecularEvents: [
        'Mesenchymal-Epithelial Transition (MET)',
        'Restoration of E-cadherin',
        'Interaction with new stromal environment',
        'Angiogenesis and vascularization',
        'Macrometastasis formation',
        'Organ-specific selection and adaptation',
      ],
      color: 'bg-purple-100 border-purple-500',
      outcomes: ['Established metastasis', 'Clinical detection'],
    },
  ];

  const commonMetastases = [
    {
      cancer: 'Breast Cancer',
      sites: ['Bone (75%)', 'Lung (70%)', 'Liver (65%)', 'Brain (20%)'],
      mechanism: 'Hematogenous and lymphatic spread',
    },
    {
      cancer: 'Lung Cancer',
      sites: ['Bone (35%)', 'Brain (25%)', 'Liver (35%)', 'Adrenal (25%)'],
      mechanism: 'Early hematogenous dissemination',
    },
    {
      cancer: 'Colorectal Cancer',
      sites: ['Liver (70%)', 'Peritoneum (25%)', 'Lung (40%)', 'Ovary (5%)'],
      mechanism: 'Portal vein drainage, transcoelomic',
    },
    {
      cancer: 'Gastric Cancer',
      sites: ['Peritoneum', 'Liver', 'Bone', 'Brain'],
      mechanism: 'Lymphatic, peritoneal, hematogenous',
    },
    {
      cancer: 'Testicular Cancer',
      sites: ['Retroperitoneal lymph nodes', 'Lung', 'Liver', 'Brain'],
      mechanism: 'Lymphatic then hematogenous',
    },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Metastasis Cascade</h2>
        <p className="text-gray-600">Invasion → Intravasation → Circulation → Extravasation → Colonization</p>
      </div>

      {/* Sequential flow */}
      <div className="space-y-4 mb-12">
        {steps.map((step, idx) => (
          <div key={idx}>
            <button
              onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
              className={`w-full p-4 rounded border-l-4 text-left transition hover:shadow-md ${step.color}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-gray-900">{idx + 1}.</span>
                    <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mt-1 ml-7">{step.description}</p>
                </div>
                <ChevronRight
                  size={20}
                  className={`text-gray-600 transition ${expandedStep === idx ? 'rotate-90' : ''}`}
                />
              </div>

              {expandedStep === idx && (
                <div className="mt-4 ml-7 space-y-3 border-t-2 border-gray-300 pt-3">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Molecular Events:</p>
                    <ul className="space-y-1">
                      {step.molecularEvents.map((event, eIdx) => (
                        <li key={eIdx} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-gray-500">•</span>
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Outcomes:</p>
                    <div className="flex flex-wrap gap-2">
                      {step.outcomes.map((outcome, oIdx) => (
                        <span
                          key={oIdx}
                          className="text-xs px-3 py-1 bg-white rounded border border-gray-300 text-gray-700"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </button>

            {/* Arrow between steps */}
            {idx < steps.length - 1 && (
              <div className="flex justify-center py-2">
                <ChevronRight size={24} className="text-gray-400 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Common metastatic patterns */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Common Metastatic Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {commonMetastases.map((pattern, idx) => (
            <div key={idx} className="p-4 rounded border-2 border-gray-300 bg-gray-50">
              <h4 className="font-bold text-gray-900">{pattern.cancer}</h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">{pattern.mechanism}</p>
              <div className="space-y-1">
                {pattern.sites.map((site, sIdx) => (
                  <div key={sIdx} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                    {site}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key concepts */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-400 rounded p-4 space-y-3">
        <h3 className="font-bold text-gray-900">Key Concepts in Metastasis</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded border border-gray-300">
            <p className="font-semibold text-gray-900 text-sm">Seed and Soil Hypothesis</p>
            <p className="text-xs text-gray-700 mt-1">
              Cancer cells (seed) preferentially metastasize to organs with compatible microenvironment (soil)
            </p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <p className="font-semibold text-gray-900 text-sm">Organotropism</p>
            <p className="text-xs text-gray-700 mt-1">
              Preferential homing to specific organs based on chemokine gradients and adhesion molecules
            </p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <p className="font-semibold text-gray-900 text-sm">Anoikis Resistance</p>
            <p className="text-xs text-gray-700 mt-1">
              Cancer cells resist apoptosis triggered by detachment from extracellular matrix
            </p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <p className="font-semibold text-gray-900 text-sm">Epithelial-Mesenchymal Plasticity</p>
            <p className="text-xs text-gray-700 mt-1">
              Dynamic switching between epithelial and mesenchymal states during dissemination
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded border border-gray-300">
          <p className="font-semibold text-gray-900 text-sm">Clinical Significance</p>
          <p className="text-xs text-gray-700 mt-1">
            Understanding metastatic cascade enables targeted interventions at each step: anti-angiogenesis (primary tumor),
            anti-EMT agents, anticoagulation (circulation), and bone morphogenetic protein (BMP) inhibitors (colonization).
          </p>
        </div>
      </div>
    </div>
  );
};
