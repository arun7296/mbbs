'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const CellCycleDiagram: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [expandedCheckpoint, setExpandedCheckpoint] = useState<string | null>(null);

  const phases = [
    {
      id: 'G1',
      name: 'G1 Phase',
      description: 'Gap 1 - Cell growth and preparation',
      duration: '5-6 hours (variable)',
      cdkCyclin: 'CDK4/6 + Cyclin D',
      keyEvents: [
        'Cell growth and increase in organelles',
        'Accumulation of nutrients and energy',
        'Synthesis of enzymes and proteins needed for DNA replication',
        'Cell reaches critical size and nutrient threshold',
      ],
      color: 'bg-blue-100 border-blue-500',
      position: 'top-1/4 left-1/4',
    },
    {
      id: 'S',
      name: 'S Phase',
      description: 'Synthesis - DNA replication',
      duration: '6-8 hours',
      cdkCyclin: 'CDK2 + Cyclin E → CDK2 + Cyclin A',
      keyEvents: [
        'DNA replication (S = Synthesis)',
        'Centrosome duplication',
        'Histone protein synthesis',
        'DNA damage checkpoint monitoring',
      ],
      color: 'bg-green-100 border-green-500',
      position: 'top-1/4 right-1/4',
    },
    {
      id: 'G2',
      name: 'G2 Phase',
      description: 'Gap 2 - Preparation for mitosis',
      duration: '2-3 hours',
      cdkCyclin: 'CDK1 + Cyclin A → CDK1 + Cyclin B',
      keyEvents: [
        'Continued cell growth',
        'Tubulin synthesis for spindle fibers',
        'Further checking of DNA integrity',
        'Preparation for mitosis',
      ],
      color: 'bg-yellow-100 border-yellow-500',
      position: 'bottom-1/4 right-1/4',
    },
    {
      id: 'M',
      name: 'M Phase',
      description: 'Mitosis - Cell division',
      duration: '0.5-1 hour',
      cdkCyclin: 'CDK1 + Cyclin B (until metaphase)',
      keyEvents: [
        'Prophase: Chromosomes condense, spindle forms',
        'Metaphase: Chromosomes align at metaphase plate',
        'Anaphase: Sister chromatids separate',
        'Telophase: Nuclear envelope reforms, cytokinesis',
      ],
      color: 'bg-purple-100 border-purple-500',
      position: 'bottom-1/4 left-1/4',
    },
    {
      id: 'G0',
      name: 'G0 Phase',
      description: 'Gap 0 - Exit from cycle',
      duration: 'Variable',
      cdkCyclin: 'No active CDK-Cyclin',
      keyEvents: [
        'Cell cycle arrest',
        'Differentiation or senescence',
        'G1/S checkpoint arrest due to p53 or Rb',
        'Can be reversible (re-entry to G1)',
      ],
      color: 'bg-gray-100 border-gray-500',
      position: 'center',
    },
  ];

  const checkpoints = [
    {
      id: 'G1/S',
      name: 'G1/S Checkpoint',
      location: 'Between G1 and S',
      description: 'Restriction Point',
      monitoring: [
        'Cell size and nutrients',
        'DNA damage (p53)',
        'Growth factor signals',
      ],
      proteins: ['Rb protein', 'p53', 'CDK2'],
      consequence: 'If failed: cell cycle arrest or apoptosis',
      color: 'border-blue-600 bg-blue-50',
    },
    {
      id: 'G2/M',
      name: 'G2/M Checkpoint',
      location: 'Between G2 and M',
      description: 'DNA Damage Checkpoint',
      monitoring: [
        'DNA damage from replication',
        'Incomplete DNA synthesis',
        'Proper spindle formation',
      ],
      proteins: ['p53', 'CHK2', 'CDK1'],
      consequence: 'If failed: progression with damaged DNA',
      color: 'border-yellow-600 bg-yellow-50',
    },
    {
      id: 'Spindle',
      name: 'Spindle Checkpoint',
      location: 'During Metaphase',
      description: 'Metaphase-Anaphase Checkpoint',
      monitoring: [
        'Kinetochore attachment to spindle fibers',
        'Tension on sister chromatids',
        'Chromosome alignment',
      ],
      proteins: ['Mad2', 'BubR1', 'APC/C'],
      consequence: 'If failed: unequal chromosome segregation',
      color: 'border-purple-600 bg-purple-50',
    },
  ];

  const suppressors = [
    { name: 'p53 (Guardian of the Genome)', role: 'Detects DNA damage; induces arrest or apoptosis', mutated: 'Li-Fraumeni syndrome, 50% cancers' },
    { name: 'Rb (Retinoblastoma protein)', role: 'Controls G1/S checkpoint; suppresses transcription', mutated: 'Retinoblastoma, many cancers' },
    { name: 'p16', role: 'CDK4/6 inhibitor; arrests G1/S', mutated: 'CDKN2A deletion in cancers' },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Cell Cycle Regulation</h2>
        <p className="text-gray-600">Phases, checkpoints, and control mechanisms</p>
      </div>

      {/* Cell cycle phases */}
      <div className="mb-12">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Cell Cycle Phases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.filter((p) => p.id !== 'G0').map((phase) => (
            <button
              key={phase.id}
              onClick={() =>
                setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
              }
              className={`p-4 rounded border-2 text-left transition hover:shadow-md ${phase.color}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900">{phase.name}</h4>
                <span className="text-xs font-bold text-gray-600 bg-white px-2 py-1 rounded">
                  {phase.id}
                </span>
              </div>
              <p className="text-sm text-gray-700">{phase.description}</p>
              <p className="text-xs text-gray-600 mt-2">{phase.duration}</p>
              <p className="text-xs font-semibold text-gray-700 mt-2 bg-white bg-opacity-50 p-1 rounded">
                {phase.cdkCyclin}
              </p>

              {expandedPhase === phase.id && (
                <div className="mt-3 pt-3 border-t-2 border-gray-300">
                  <p className="font-semibold text-gray-900 text-sm mb-2">Key Events:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    {phase.keyEvents.map((event, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-gray-500">•</span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* G0 phase box */}
        <div className="mt-4 p-4 rounded border-2 bg-gray-50 border-gray-400">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-gray-900">G0 Phase (Exit from Cycle)</h4>
            <span className="text-xs font-bold text-gray-600 bg-white px-2 py-1 rounded">
              G0
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{phases[4].description}</p>
          <p className="text-xs text-gray-600 mb-3">{phases[4].duration}</p>
          <div className="grid grid-cols-2 gap-2">
            {phases[4].keyEvents.map((event, idx) => (
              <div key={idx} className="text-xs text-gray-700 bg-white p-2 rounded border border-gray-300">
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checkpoints */}
      <div className="mb-12">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Cell Cycle Checkpoints</h3>
        <div className="space-y-3">
          {checkpoints.map((checkpoint) => (
            <button
              key={checkpoint.id}
              onClick={() =>
                setExpandedCheckpoint(
                  expandedCheckpoint === checkpoint.id ? null : checkpoint.id
                )
              }
              className={`w-full p-4 rounded border-2 text-left transition hover:shadow-md ${checkpoint.color}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-900">{checkpoint.name}</h4>
                  <p className="text-sm text-gray-700 mt-1">{checkpoint.location}</p>
                  <p className="text-xs font-semibold text-gray-600 mt-1 italic">
                    {checkpoint.description}
                  </p>
                </div>
                <Info size={20} className="text-gray-600" />
              </div>

              {expandedCheckpoint === checkpoint.id && (
                <div className="mt-3 pt-3 border-t-2 border-gray-300 space-y-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Monitoring:</p>
                    <ul className="text-xs text-gray-700 mt-1 space-y-1">
                      {checkpoint.monitoring.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Key Proteins:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {checkpoint.proteins.map((protein, idx) => (
                        <span key={idx} className="text-xs bg-white px-2 py-1 rounded border border-gray-300">
                          {protein}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-50 p-2 rounded text-xs text-gray-800 font-semibold">
                    {checkpoint.consequence}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tumor suppressors */}
      <div className="bg-red-50 border-2 border-red-300 rounded p-4">
        <h3 className="font-bold text-red-900 mb-4">Tumor Suppressors at Checkpoints</h3>
        <div className="space-y-3">
          {suppressors.map((suppressor, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-red-200">
              <p className="font-semibold text-gray-900">{suppressor.name}</p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Role:</span> {suppressor.role}
              </p>
              <p className="text-sm text-red-700 mt-1">
                <span className="font-semibold">If mutated:</span> {suppressor.mutated}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
