'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const ABGAlgorithm: React.FC = () => {
  const [currentNode, setCurrentNode] = useState('start');

  const nodes = {
    start: {
      type: 'decision',
      question: 'What is the pH?',
      info: 'Normal: 7.35-7.45',
      options: [
        { text: 'pH < 7.35', next: 'acidosis', value: 'Acidemia' },
        { text: 'pH 7.35-7.45', next: 'normal', value: 'Normal' },
        { text: 'pH > 7.45', next: 'alkalosis', value: 'Alkalemia' },
      ],
    },
    normal: {
      type: 'normal',
      title: 'Normal Acid-Base Status',
      values: ['pH: 7.35-7.45', 'PaCO2: 35-45 mmHg', 'HCO3: 22-26 mEq/L'],
      action: 'Continue monitoring',
      goBack: true,
    },
    acidosis: {
      type: 'decision',
      question: 'Is the PRIMARY problem respiratory or metabolic?',
      info: 'Check PaCO2 (35-45) and HCO3 (22-26)',
      options: [
        { text: 'PaCO2 > 45 (elevated)', next: 'respAcidosis', value: 'Respiratory Acidosis' },
        { text: 'HCO3 < 22 (low)', next: 'metAcidosis', value: 'Metabolic Acidosis' },
      ],
    },
    alkalosis: {
      type: 'decision',
      question: 'Is the PRIMARY problem respiratory or metabolic?',
      info: 'Check PaCO2 (35-45) and HCO3 (22-26)',
      options: [
        { text: 'PaCO2 < 35 (low)', next: 'respAlkalosis', value: 'Respiratory Alkalosis' },
        { text: 'HCO3 > 26 (high)', next: 'metAlkalosis', value: 'Metabolic Alkalosis' },
      ],
    },
    respAcidosis: {
      type: 'disorder',
      title: 'Respiratory Acidosis',
      primary: 'High PaCO2 (>45)',
      secondary: 'Low HCO3 due to respiratory failure',
      values: 'pH < 7.35, PaCO2 > 45, HCO3 < 24 (compensatory)',
      causes: [
        'COPD exacerbation',
        'Asthma exacerbation',
        'Pneumonia',
        'Respiratory depression (drugs, CNS)',
        'Chest wall problems (flail chest, obesity)',
        'Neuromuscular weakness (ALS, Guillain-Barré)',
      ],
      compensation: 'HCO3 increases by 3-4 mEq/L per 10 mmHg PaCO2 increase (chronic)',
      treatment: 'Improve ventilation; address underlying cause',
      goBack: true,
    },
    respAlkalosis: {
      type: 'disorder',
      title: 'Respiratory Alkalosis',
      primary: 'Low PaCO2 (<35)',
      secondary: 'High HCO3 due to hyperventilation',
      values: 'pH > 7.45, PaCO2 < 35, HCO3 > 28 (compensatory)',
      causes: [
        'Anxiety/panic attacks',
        'Pain',
        'Fever',
        'Hypoxia (PE, pneumonia)',
        'Pregnancy',
        'High altitude',
        'CNS stimulation',
        'Salicylate toxicity',
      ],
      compensation: 'HCO3 decreases by 2-3 mEq/L per 10 mmHg PaCO2 decrease (chronic)',
      treatment: 'Address underlying cause; reassure patient; rebreather bag if severe',
      goBack: true,
    },
    metAcidosis: {
      type: 'disorder',
      title: 'Metabolic Acidosis',
      primary: 'Low HCO3 (<22)',
      secondary: 'Respiratory compensation (hyperventilation)',
      values: 'pH < 7.35, HCO3 < 22, PaCO2 < 35 (compensatory)',
      causes: [
        'MUDPILES: Methanol, Uremia, DKA, Paraldehyde, Isoniazid, Lactic acidosis, Ethylene glycol, Salicylates',
        'Diarrhea (bicarbonate loss)',
        'Renal tubular acidosis (RTA)',
      ],
      compensation: 'PaCO2 decreases 1.2-1.3 mmHg per 1 mEq/L HCO3 decrease (Winter\'s formula)',
      treatment: 'Treat underlying cause; IV bicarbonate if severe (pH < 7.1)',
      goBack: true,
    },
    metAlkalosis: {
      type: 'disorder',
      title: 'Metabolic Alkalosis',
      primary: 'High HCO3 (>26)',
      secondary: 'Respiratory compensation (hypoventilation)',
      values: 'pH > 7.45, HCO3 > 26, PaCO2 > 45 (compensatory)',
      causes: [
        'Vomiting/NG suction (HCl loss)',
        'Diuretics (loop, thiazide)',
        'Hypokalemia',
        'Contraction alkalosis',
        'Excessive alkali ingestion',
        'Hyperaldosteronism',
      ],
      compensation: 'PaCO2 increases 0.6 mmHg per 1 mEq/L HCO3 increase',
      treatment: 'IV normal saline, potassium replacement; address underlying cause',
      goBack: true,
    },
  };

  // Node data has variant shapes depending on `type` — use Record for dynamic access
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentNodeData: any = nodes[currentNode as keyof typeof nodes];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">ABG Interpretation Algorithm</h2>
        <p className="text-gray-600">Step-by-step decision tree for acid-base disorders</p>
      </div>

      {/* Algorithm visualization */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-gray-300 mb-8 min-h-96">
        {currentNodeData.type === 'decision' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-lg">
              <p className="text-sm text-blue-700 font-semibold mb-2">Decision Point</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{currentNodeData.question}</h3>
              <p className="text-sm text-gray-700 italic mb-4">{currentNodeData.info}</p>

              <div className="space-y-2">
                {(currentNodeData.options as Array<{ text: string; next: string; value: string }>).map((option) => (
                  <button
                    key={option.next}
                    onClick={() => setCurrentNode(option.next)}
                    className="w-full p-3 text-left bg-gradient-to-r from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 border-2 border-blue-400 rounded-lg transition font-semibold text-gray-900 flex justify-between items-center"
                  >
                    {option.text}
                    <ChevronRight size={20} className="text-blue-600" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentNodeData.type === 'normal' && (
          <div className="bg-white p-6 rounded-lg border-2 border-green-500 shadow-lg">
            <p className="text-sm text-green-700 font-semibold mb-2">Result</p>
            <h3 className="text-2xl font-bold text-green-900 mb-4">{currentNodeData.title}</h3>
            <div className="space-y-3 mb-6">
              {(currentNodeData.values as string[]).map((value, idx) => (
                <div key={idx} className="p-2 bg-green-50 border border-green-300 rounded">
                  <p className="text-sm font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 font-semibold">{currentNodeData.action}</p>
          </div>
        )}

        {currentNodeData.type === 'disorder' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border-2 border-red-500 shadow-lg">
              <p className="text-sm text-red-700 font-semibold mb-2">Acid-Base Disorder</p>
              <h3 className="text-2xl font-bold text-red-900 mb-4">{currentNodeData.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-red-50 border border-red-300 rounded">
                  <p className="text-sm font-semibold text-gray-900">Primary Problem:</p>
                  <p className="text-sm text-gray-700 mt-1">{currentNodeData.primary}</p>
                </div>
                <div className="p-3 bg-orange-50 border border-orange-300 rounded">
                  <p className="text-sm font-semibold text-gray-900">Respiratory Compensation:</p>
                  <p className="text-sm text-gray-700 mt-1">{currentNodeData.secondary}</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-300 rounded mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">ABG Values:</p>
                <p className="text-sm text-gray-700 font-mono">{currentNodeData.values}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Common Causes:</p>
                <ul className="space-y-1">
                  {(currentNodeData.causes as string[]).map((cause, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 border border-blue-300 rounded">
                  <p className="text-sm font-semibold text-gray-900">Compensation:</p>
                  <p className="text-xs text-gray-700 mt-1">{currentNodeData.compensation}</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-300 rounded">
                  <p className="text-sm font-semibold text-gray-900">Treatment:</p>
                  <p className="text-xs text-gray-700 mt-1">{currentNodeData.treatment}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back button */}
        {currentNodeData.goBack && currentNode !== 'start' && (
          <button
            onClick={() => setCurrentNode('start')}
            className="mt-6 w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-semibold transition"
          >
            Back to Start
          </button>
        )}
      </div>

      {/* Quick reference tables */}
      <div className="space-y-6">
        {/* Normal values */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded p-4">
          <h3 className="font-bold text-blue-900 mb-3">Normal ABG Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded border border-blue-200">
              <p className="text-xs text-gray-600">pH</p>
              <p className="text-sm font-bold text-gray-900">7.35-7.45</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-200">
              <p className="text-xs text-gray-600">PaCO2</p>
              <p className="text-sm font-bold text-gray-900">35-45 mmHg</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-200">
              <p className="text-xs text-gray-600">HCO3</p>
              <p className="text-sm font-bold text-gray-900">22-26 mEq/L</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-200">
              <p className="text-xs text-gray-600">PaO2</p>
              <p className="text-sm font-bold text-gray-900">80-100 mmHg</p>
            </div>
          </div>
        </div>

        {/* Winter's formula */}
        <div className="bg-green-50 border-2 border-green-300 rounded p-4">
          <h3 className="font-bold text-green-900 mb-3">Winter's Formula</h3>
          <p className="text-sm text-gray-700 mb-2">
            For metabolic acidosis, calculate expected respiratory compensation:
          </p>
          <div className="bg-white p-3 rounded border border-green-200 font-mono text-sm mb-2">
            Expected PaCO2 = 1.5 × [HCO3] + 8 ± 2
          </div>
          <p className="text-xs text-gray-700">
            If actual PaCO2 is higher than expected: concurrent respiratory acidosis
          </p>
          <p className="text-xs text-gray-700">
            If actual PaCO2 is lower than expected: concurrent respiratory alkalosis
          </p>
        </div>

        {/* MUDPILES mnemonic */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded p-4">
          <h3 className="font-bold text-yellow-900 mb-3">MUDPILES: Causes of High Anion Gap Metabolic Acidosis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">M - Methanol</p>
              <p className="text-xs text-gray-600">Antifreeze, toxic ingestion</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">U - Uremia</p>
              <p className="text-xs text-gray-600">Renal failure (cannot excrete acids)</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">D - DKA</p>
              <p className="text-xs text-gray-600">Diabetes, starvation ketoacidosis</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">P - Paraldehyde</p>
              <p className="text-xs text-gray-600">Rare sedative use</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">I - Isoniazid/INH</p>
              <p className="text-xs text-gray-600">TB medication toxicity</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">L - Lactic Acidosis</p>
              <p className="text-xs text-gray-600">Hypoxia, metformin (rare), sepsis</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">E - Ethylene Glycol</p>
              <p className="text-xs text-gray-600">Antifreeze, brake fluid</p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">S - Salicylates</p>
              <p className="text-xs text-gray-600">Aspirin overdose</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
