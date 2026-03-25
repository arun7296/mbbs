'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Step {
  id: string;
  name: string;
  description: string;
  enzyme?: string;
  location?: string;
  regulation?: string;
}

interface EffectBranch {
  id: string;
  name: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 'angiotensinogen',
    name: 'Angiotensinogen',
    description: 'Produced by liver (constitutively). Circulates in blood.',
    location: 'Blood plasma',
  },
  {
    id: 'angiotensin-i',
    name: 'Angiotensin I',
    description: 'Product of renin action. Relatively inactive. Transported to lungs.',
    enzyme: 'Renin (JG cells)',
    location: 'Blood, kidneys',
  },
  {
    id: 'angiotensin-ii',
    name: 'Angiotensin II',
    description: 'Active octapeptide. Primary effector of RAAS. Potent vasoconstrictor.',
    enzyme: 'ACE (Angiotensin Converting Enzyme)',
    location: 'Pulmonary endothelium, lungs',
  },
];

const effects: EffectBranch[] = [
  {
    id: 'vasoconstriction',
    name: 'Vasoconstriction',
    description: 'Acts on AT1 receptors on vascular smooth muscle. ↑Systemic vascular resistance, ↑Blood pressure.',
    color: '#ef4444',
  },
  {
    id: 'aldosterone',
    name: 'Aldosterone Secretion',
    description: 'Stimulates aldosterone release from adrenal zona glomerulosa. ↑Na+ reabsorption, ↑Blood volume.',
    color: '#f97316',
  },
  {
    id: 'adh',
    name: 'ADH/Vasopressin Release',
    description: 'Enhances ADH release from posterior pituitary. ↑Water reabsorption. ↑Serum osmolarity sensitivity.',
    color: '#eab308',
  },
  {
    id: 'thirst',
    name: 'Thirst Mechanism',
    description: 'Acts on hypothalamic osmoreceptors. ↑Fluid intake, ↑Blood volume.',
    color: '#06b6d4',
  },
  {
    id: 'sympathetic',
    name: 'Sympathetic Activation',
    description: 'Central sympathomimetic effect. ↑HR, ↑Cardiac contractility, ↑Vasoconstriction.',
    color: '#8b5cf6',
  },
];

interface DrugTarget {
  id: string;
  name: string;
  mechanism: string;
  location: string;
  step: string;
  color: string;
}

const drugTargets: DrugTarget[] = [
  {
    id: 'renin-inhibitor',
    name: 'Direct Renin Inhibitors',
    mechanism: 'Block renin enzyme. Prevent Ang I formation.',
    location: 'Kidneys, blood',
    step: 'angiotensinogen',
    color: '#dc2626',
  },
  {
    id: 'ace-inhibitor',
    name: 'ACE Inhibitors',
    mechanism: 'Block ACE enzyme. Prevent Ang II formation. ↓Bradykinin degradation.',
    location: 'Lungs, endothelium',
    step: 'angiotensin-i',
    color: '#dc2626',
  },
  {
    id: 'arb',
    name: 'Angiotensin II Receptor Blockers (ARBs)',
    mechanism: 'Block AT1 receptors. Prevent Ang II effects.',
    location: 'Target tissues',
    step: 'angiotensin-ii',
    color: '#dc2626',
  },
  {
    id: 'aldosterone-antagonist',
    name: 'Aldosterone Antagonists',
    mechanism: 'Block mineralocorticoid receptors. ↓Na+ reabsorption.',
    location: 'Collecting duct, adrenal',
    step: 'aldosterone',
    color: '#dc2626',
  },
];

export function RAASCascade() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [expandedEffect, setExpandedEffect] = useState<string | null>(null);
  const [showDrugs, setShowDrugs] = useState(false);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Renin-Angiotensin-Aldosterone System (RAAS)</h2>
      <p className="text-gray-600 mb-6">Cascade activated by decreased renal perfusion pressure or ↓plasma sodium</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Cascade */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={step.id}>
                {/* Step Box */}
                <button
                  onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                  className="w-full bg-blue-100 border-2 border-blue-400 rounded-lg p-4 hover:bg-blue-200 transition cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{step.name}</h3>
                      <p className="text-sm text-gray-700">{step.description}</p>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-blue-600 transition-transform flex-shrink-0 ${
                        expandedStep === step.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {expandedStep === step.id && (
                    <div className="mt-3 pt-3 border-t border-blue-300 space-y-2">
                      {step.enzyme && (
                        <p className="text-sm text-gray-700">
                          <strong>Enzyme:</strong> {step.enzyme}
                        </p>
                      )}
                      {step.location && (
                        <p className="text-sm text-gray-700">
                          <strong>Location:</strong> {step.location}
                        </p>
                      )}
                      {step.regulation && (
                        <p className="text-sm text-gray-700">
                          <strong>Regulation:</strong> {step.regulation}
                        </p>
                      )}
                    </div>
                  )}
                </button>

                {/* Arrow between steps */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ChevronDown size={28} className="text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Drug Targets Toggle */}
          <button
            onClick={() => setShowDrugs(!showDrugs)}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
          >
            {showDrugs ? 'Hide' : 'Show'} Drug Targets
          </button>

          {showDrugs && (
            <div className="mt-4 bg-red-50 border-2 border-red-400 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-3">Pharmacological Interventions</h4>
              <div className="space-y-3">
                {drugTargets.map((drug) => (
                  <div key={drug.id} className="bg-white border-l-4 border-red-600 p-3 rounded">
                    <p className="font-semibold text-gray-800">{drug.name}</p>
                    <p className="text-sm text-gray-700 mt-1">{drug.mechanism}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      <strong>Location:</strong> {drug.location}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 mt-3 text-sm text-gray-700">
                <p>
                  <strong>Clinical Use:</strong> ACE inhibitors and ARBs are first-line antihypertensives, especially in
                  diabetes (renal protection). Aldosterone antagonists (spironolactone) used in heart failure. Direct renin
                  inhibitors (aliskiren) are newer agents with renal benefits.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Effects Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Ang II Effects</h3>

          <div className="space-y-3">
            {effects.map((effect) => (
              <button
                key={effect.id}
                onClick={() => setExpandedEffect(expandedEffect === effect.id ? null : effect.id)}
                className="w-full text-left bg-white border-l-4 rounded-lg p-3 hover:shadow-md transition"
                style={{ borderColor: effect.color }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{effect.name}</p>
                    {expandedEffect === effect.id && (
                      <p className="text-sm text-gray-700 mt-2">{effect.description}</p>
                    )}
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 flex-shrink-0 transition-transform ${
                      expandedEffect === effect.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm font-semibold text-gray-800 mb-2">Summary:</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              RAAS responds to <strong>↓BP</strong>, <strong>↓Na+</strong>, or <strong>↓renal perfusion</strong>. Ang II
              restores BP via vasoconstriction and fluid retention. Counterregulated by atrial natriuretic peptide (ANP),
              bradykinin, and parasympathetic tone.
            </p>
          </div>
        </div>
      </div>

      {/* Clinical Pearl */}
      <div className="mt-6 bg-amber-50 border border-amber-300 rounded-lg p-4">
        <p className="text-sm text-gray-800">
          <strong>Clinical Pearl:</strong> The RAAS is essential for blood pressure regulation and volume homeostasis, but
          chronic overactivity contributes to hypertension, left ventricular hypertrophy, fibrosis, and chronic kidney
          disease. Understanding the cascade is critical for managing hypertension, heart failure, and renal disease. ACE
          inhibitors have a unique advantage: they inhibit Ang II formation AND block bradykinin degradation, enhancing
          vasodilation.
        </p>
      </div>
    </div>
  );
}
