'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const ComplementPathway: React.FC = () => {
  const [expandedFunction, setExpandedFunction] = useState<string | null>(null);
  const [selectedPathway, setSelectedPathway] = useState<'all' | 'classical' | 'alternative' | 'lectin'>(
    'all'
  );

  const pathways = {
    classical: {
      color: 'border-blue-500 bg-blue-50',
      bgColor: 'bg-blue-100',
      initiation: 'Antigen-Antibody Complex',
      steps: [
        { label: 'Ag-Ab', details: 'Immune complex formation' },
        { label: 'C1', details: 'C1q, C1r, C1s activation' },
        { label: 'C4, C2', details: 'Cleavage and binding' },
        { label: 'C3 convertase (C4b2a)', details: 'Cleaves C3' },
      ],
    },
    alternative: {
      color: 'border-green-500 bg-green-50',
      bgColor: 'bg-green-100',
      initiation: 'Microbial Surface',
      steps: [
        { label: 'C3', details: 'Spontaneous hydrolysis' },
        { label: 'C3b, Factor B', details: 'Binding to microbial surface' },
        { label: 'C3bBb', details: 'Properdin stabilizes complex' },
        { label: 'C3 convertase (C3bBb)', details: 'Cleaves more C3' },
      ],
    },
    lectin: {
      color: 'border-purple-500 bg-purple-50',
      bgColor: 'bg-purple-100',
      initiation: 'Mannose Residues',
      steps: [
        { label: 'MBL/FICOLIN', details: 'Mannose-binding lectin or ficolins bind' },
        { label: 'MASP-1, MASP-2', details: 'MBL-associated serine proteases' },
        { label: 'C4, C2', details: 'Same as classical pathway' },
        { label: 'C3 convertase', details: 'Forms C4b2a complex' },
      ],
    },
  };

  const effectorFunctions = [
    {
      name: 'MAC (C5b-9)',
      description: 'Membrane Attack Complex',
      effect: 'Cell lysis and death',
      color: 'bg-red-100 border-red-500',
    },
    {
      name: 'C3b',
      description: 'Opsonin fragment',
      effect: 'Tags pathogens for phagocytosis',
      color: 'bg-yellow-100 border-yellow-500',
    },
    {
      name: 'C3a/C5a',
      description: 'Anaphylatoxins',
      effect: 'Mast cell degranulation, inflammation',
      color: 'bg-orange-100 border-orange-500',
    },
    {
      name: 'C5a',
      description: 'Chemotactic factor',
      effect: 'Recruits leukocytes to infection site',
      color: 'bg-pink-100 border-pink-500',
    },
  ];

  const shouldShow = (pathway: string) => selectedPathway === 'all' || selectedPathway === pathway;

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complement Cascade</h2>
        <p className="text-gray-600">Classical, Alternative, and Lectin pathways converging on MAC formation</p>
      </div>

      {/* Pathway filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {(['all', 'classical', 'alternative', 'lectin'] as const).map((pathway) => (
          <button
            key={pathway}
            onClick={() => setSelectedPathway(pathway)}
            className={`px-4 py-2 rounded font-medium transition ${
              selectedPathway === pathway
                ? pathway === 'classical'
                  ? 'bg-blue-500 text-white'
                  : pathway === 'alternative'
                    ? 'bg-green-500 text-white'
                    : pathway === 'lectin'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {pathway.charAt(0).toUpperCase() + pathway.slice(1)}
          </button>
        ))}
      </div>

      {/* Cascade flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Classical pathway */}
        {shouldShow('classical') && (
          <div className={`p-4 rounded border-2 ${pathways.classical.color}`}>
            <h3 className="font-bold text-blue-900 mb-2">Classical Pathway</h3>
            <div className="mb-3 p-2 bg-blue-100 rounded text-sm font-semibold text-blue-900">
              {pathways.classical.initiation}
            </div>
            <div className="space-y-2">
              {pathways.classical.steps.map((step, idx) => (
                <div key={idx}>
                  <div className="px-3 py-2 bg-white border border-blue-300 rounded text-sm">
                    <p className="font-semibold text-gray-900">{step.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{step.details}</p>
                  </div>
                  {idx < pathways.classical.steps.length - 1 && (
                    <div className="text-center py-1 text-blue-600 font-bold">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alternative pathway */}
        {shouldShow('alternative') && (
          <div className={`p-4 rounded border-2 ${pathways.alternative.color}`}>
            <h3 className="font-bold text-green-900 mb-2">Alternative Pathway</h3>
            <div className="mb-3 p-2 bg-green-100 rounded text-sm font-semibold text-green-900">
              {pathways.alternative.initiation}
            </div>
            <div className="space-y-2">
              {pathways.alternative.steps.map((step, idx) => (
                <div key={idx}>
                  <div className="px-3 py-2 bg-white border border-green-300 rounded text-sm">
                    <p className="font-semibold text-gray-900">{step.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{step.details}</p>
                  </div>
                  {idx < pathways.alternative.steps.length - 1 && (
                    <div className="text-center py-1 text-green-600 font-bold">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lectin pathway */}
        {shouldShow('lectin') && (
          <div className={`p-4 rounded border-2 ${pathways.lectin.color}`}>
            <h3 className="font-bold text-purple-900 mb-2">Lectin Pathway</h3>
            <div className="mb-3 p-2 bg-purple-100 rounded text-sm font-semibold text-purple-900">
              {pathways.lectin.initiation}
            </div>
            <div className="space-y-2">
              {pathways.lectin.steps.map((step, idx) => (
                <div key={idx}>
                  <div className="px-3 py-2 bg-white border border-purple-300 rounded text-sm">
                    <p className="font-semibold text-gray-900">{step.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{step.details}</p>
                  </div>
                  {idx < pathways.lectin.steps.length - 1 && (
                    <div className="text-center py-1 text-purple-600 font-bold">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Convergence point */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border-2 border-gray-400 rounded p-4 mb-8">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-2">All pathways converge on:</p>
          <div className="flex justify-center gap-4">
            <div className="px-4 py-2 bg-yellow-100 border-2 border-yellow-500 rounded font-bold text-gray-900">
              C3 Convertase
            </div>
            <div className="text-2xl text-gray-600">→</div>
            <div className="px-4 py-2 bg-orange-100 border-2 border-orange-500 rounded font-bold text-gray-900">
              C5 Convertase
            </div>
            <div className="text-2xl text-gray-600">→</div>
            <div className="px-4 py-2 bg-red-100 border-2 border-red-500 rounded font-bold text-gray-900">
              MAC (C5b-9)
            </div>
          </div>
        </div>
      </div>

      {/* Effector functions */}
      <div className="mb-8">
        <h3 className="font-bold text-gray-900 mb-4">Effector Functions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {effectorFunctions.map((func, idx) => (
            <button
              key={idx}
              onClick={() =>
                setExpandedFunction(expandedFunction === func.name ? null : func.name)
              }
              className={`p-4 rounded border-2 text-left transition ${func.color} hover:shadow-md`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900">{func.name}</p>
                  <p className="text-sm text-gray-700">{func.description}</p>
                  <p className="text-sm font-medium text-gray-800 mt-2">{func.effect}</p>
                </div>
                <Info size={18} className="text-gray-600" />
              </div>
              {expandedFunction === func.name && (
                <div className="mt-3 pt-3 border-t-2 border-gray-300">
                  <p className="text-sm text-gray-700">
                    {func.name === 'MAC (C5b-9)' &&
                      'Forms pores in cell membranes leading to osmotic lysis and cell death. Especially important against gram-negative bacteria.'}
                    {func.name === 'C3b' &&
                      'Covalently binds to pathogen surface. Recognized by complement receptors (CR1) on phagocytes. Enhances opsonization and immune response.'}
                    {func.name === 'C3a/C5a' &&
                      'Small peptide fragments that activate mast cells and basophils. Causes histamine release, increased vascular permeability, and systemic inflammation.'}
                    {func.name === 'C5a' &&
                      'Potent chemotactic agent. Attracts neutrophils, eosinophils, and macrophages to the site of complement activation and infection.'}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Clinical note */}
      <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
        <h3 className="font-bold text-yellow-900 mb-2">Clinical Significance</h3>
        <p className="text-sm text-gray-700">
          Complement deficiencies (C1-C9) increase susceptibility to infections. C5 inhibitors used in certain diseases.
          Complement activation implicated in autoimmune disorders, post-ischemic reperfusion injury, and sepsis.
        </p>
      </div>
    </div>
  );
};
