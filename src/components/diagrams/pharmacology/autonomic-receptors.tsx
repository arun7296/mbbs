'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const AutonomicReceptorMap: React.FC = () => {
  const [expandedReceptor, setExpandedReceptor] = useState<string | null>(null);

  const receptors = {
    sympathetic: [
      {
        id: 'alpha1',
        name: 'Alpha-1 (α1)',
        color: 'bg-red-100 border-red-500',
        effects: 'Vasoconstriction, mydriasis, increased BP',
        organs: ['Blood vessels', 'Eye', 'Prostate'],
        drugs: ['Phenylephrine', 'Norepinephrine', 'Pseudoephedrine'],
        blockers: ['Prazosin', 'Doxazosin', 'Terazosin'],
      },
      {
        id: 'alpha2',
        name: 'Alpha-2 (α2)',
        color: 'bg-orange-100 border-orange-500',
        effects: 'Vasodilation (arteries), decreased HR, decreased secretions',
        organs: ['CNS', 'Presynaptic terminals', 'Vasculature'],
        drugs: ['Clonidine', 'Dexmedetomidine', 'Methyldopa'],
        blockers: ['Yohimbine'],
      },
      {
        id: 'beta1',
        name: 'Beta-1 (β1)',
        color: 'bg-pink-100 border-pink-500',
        effects: 'Increased HR, increased contractility, increased AV conduction',
        organs: ['Heart', 'AV node', 'Kidney (renin)'],
        drugs: ['Dobutamine', 'Isoproterenol', 'Epinephrine (high dose)'],
        blockers: ['Metoprolol', 'Atenolol', 'Bisoprolol', 'Propranolol'],
      },
      {
        id: 'beta2',
        name: 'Beta-2 (β2)',
        color: 'bg-fuchsia-100 border-fuchsia-500',
        effects: 'Bronchodilation, vasodilation, increased contractility, hyperglycemia',
        organs: ['Airways', 'Blood vessels', 'Uterus', 'Skeletal muscle'],
        drugs: ['Albuterol', 'Terbutaline', 'Epinephrine'],
        blockers: ['Non-selective: Propranolol; Selective: Atenolol (less effect)'],
      },
    ],
    parasympathetic: [
      {
        id: 'M1',
        name: 'Muscarinic-1 (M1)',
        color: 'bg-blue-100 border-blue-500',
        effects: 'Cognitive function, gastric secretion, excitement',
        organs: ['CNS', 'Stomach', 'Salivary glands'],
        drugs: ['Acetylcholine (at M1)'],
        blockers: ['Atropine', 'Scopolamine', 'Benztropine'],
      },
      {
        id: 'M2',
        name: 'Muscarinic-2 (M2)',
        color: 'bg-cyan-100 border-cyan-500',
        effects: 'Decreased HR, decreased AV conduction, bronchoconstriction',
        organs: ['Heart', 'Airways', 'Presynaptic terminals'],
        drugs: ['Acetylcholine (at M2)'],
        blockers: ['Atropine', 'Propantheline'],
      },
      {
        id: 'M3',
        name: 'Muscarinic-3 (M3)',
        color: 'bg-indigo-100 border-indigo-500',
        effects: 'Bronchoconstriction, GI contractions, miosis, accommodation',
        organs: ['Airways', 'GI tract', 'Eye', 'Bladder', 'Glands'],
        drugs: ['Bethanechol', 'Pilocarpine', 'Carbachol'],
        blockers: ['Atropine', 'Darifenacin (M3 selective)'],
      },
      {
        id: 'N',
        name: 'Nicotinic (N)',
        color: 'bg-teal-100 border-teal-500',
        effects: 'Skeletal muscle contraction, ganglionic transmission',
        organs: ['Skeletal muscle (NMJ)', 'Autonomic ganglia', 'CNS'],
        drugs: ['Nicotine', 'Acetylcholine'],
        blockers: ['Curare (nondepolarizing)', 'Succinylcholine (depolarizing)'],
      },
    ],
  };

  const targetOrgans = [
    {
      organ: 'Eye',
      sympathetic: 'Mydriasis (α1)',
      parasympathetic: 'Miosis (M3)',
    },
    {
      organ: 'Heart',
      sympathetic: 'Increased HR & contractility (β1)',
      parasympathetic: 'Decreased HR (M2)',
    },
    {
      organ: 'Lungs',
      sympathetic: 'Bronchodilation (β2)',
      parasympathetic: 'Bronchoconstriction (M3)',
    },
    {
      organ: 'GI Tract',
      sympathetic: 'Decreased motility (α, β)',
      parasympathetic: 'Increased motility (M3)',
    },
    {
      organ: 'Bladder',
      sympathetic: 'Relaxation (β)',
      parasympathetic: 'Contraction (M3)',
    },
    {
      organ: 'Blood Vessels',
      sympathetic: 'Vasoconstriction (α1)',
      parasympathetic: 'No direct innervation',
    },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Autonomic Receptor Map</h2>
        <p className="text-gray-600">Sympathetic vs Parasympathetic: Receptor types and effects</p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sympathetic section */}
        <div>
          <h3 className="text-lg font-bold text-red-900 mb-4 p-2 bg-red-100 rounded border-l-4 border-red-500">
            Sympathetic Division
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Neurotransmitter: Norepinephrine (NE) and Epinephrine (Epi)
          </p>
          <div className="space-y-3">
            {receptors.sympathetic.map((receptor) => (
              <button
                key={receptor.id}
                onClick={() =>
                  setExpandedReceptor(
                    expandedReceptor === receptor.id ? null : receptor.id
                  )
                }
                className={`w-full p-4 rounded border-2 text-left transition hover:shadow-md ${receptor.color}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">{receptor.name}</h4>
                    <p className="text-sm text-gray-700 mt-1">{receptor.effects}</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition ${expandedReceptor === receptor.id ? 'rotate-180' : ''}`}
                  />
                </div>

                {expandedReceptor === receptor.id && (
                  <div className="mt-3 pt-3 border-t-2 border-gray-300 space-y-2">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Found in:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {receptor.organs.map((organ, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-white rounded border border-gray-300 text-gray-700"
                          >
                            {organ}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Agonist Drugs:</p>
                      <p className="text-xs text-gray-700 mt-1">{receptor.drugs.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Antagonist Drugs:</p>
                      <p className="text-xs text-gray-700 mt-1">{receptor.blockers.join(', ')}</p>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Parasympathetic section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-4 p-2 bg-blue-100 rounded border-l-4 border-blue-500">
            Parasympathetic Division
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Neurotransmitter: Acetylcholine (ACh)
          </p>
          <div className="space-y-3">
            {receptors.parasympathetic.map((receptor) => (
              <button
                key={receptor.id}
                onClick={() =>
                  setExpandedReceptor(
                    expandedReceptor === receptor.id ? null : receptor.id
                  )
                }
                className={`w-full p-4 rounded border-2 text-left transition hover:shadow-md ${receptor.color}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">{receptor.name}</h4>
                    <p className="text-sm text-gray-700 mt-1">{receptor.effects}</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition ${expandedReceptor === receptor.id ? 'rotate-180' : ''}`}
                  />
                </div>

                {expandedReceptor === receptor.id && (
                  <div className="mt-3 pt-3 border-t-2 border-gray-300 space-y-2">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Found in:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {receptor.organs.map((organ, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-white rounded border border-gray-300 text-gray-700"
                          >
                            {organ}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Agonist Drugs:</p>
                      <p className="text-xs text-gray-700 mt-1">{receptor.drugs.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Antagonist Drugs:</p>
                      <p className="text-xs text-gray-700 mt-1">{receptor.blockers.join(', ')}</p>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Target organs comparison */}
      <div className="bg-gray-50 border-2 border-gray-300 rounded p-4">
        <h3 className="font-bold text-gray-900 mb-4">Target Organ Effects</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-3 py-2 text-left font-bold text-gray-900">Organ System</th>
                <th className="px-3 py-2 text-left font-bold text-red-900">Sympathetic Effect</th>
                <th className="px-3 py-2 text-left font-bold text-blue-900">Parasympathetic Effect</th>
              </tr>
            </thead>
            <tbody>
              {targetOrgans.map((organ, idx) => (
                <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                  <td className="px-3 py-2 font-semibold text-gray-900">{organ.organ}</td>
                  <td className="px-3 py-2 text-gray-700">{organ.sympathetic}</td>
                  <td className="px-3 py-2 text-gray-700">{organ.parasympathetic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clinical mnemonic */}
      <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded p-4">
        <h3 className="font-bold text-yellow-900 mb-3">Clinical Mnemonics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-900 mb-2">Sympathetic Effects (FIGHT)</p>
            <ul className="text-gray-700 space-y-1">
              <li>• Increased Heart rate</li>
              <li>• Increased Blood pressure</li>
              <li>• Bronchodilation</li>
              <li>• Dilated pupils</li>
              <li>• Decreased GI motility</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">Parasympathetic Effects (REST)</p>
            <ul className="text-gray-700 space-y-1">
              <li>• Decreased Heart rate</li>
              <li>• Decreased Blood pressure</li>
              <li>• Bronchoconstriction</li>
              <li>• Constricted pupils</li>
              <li>• Increased GI motility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
