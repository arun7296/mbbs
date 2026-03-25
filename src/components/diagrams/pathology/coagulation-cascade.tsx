'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const CoagulationCascade: React.FC = () => {
  const [expandedFactor, setExpandedFactor] = useState<string | null>(null);
  const [selectedPathway, setSelectedPathway] = useState<'all' | 'intrinsic' | 'extrinsic' | 'common'>(
    'all'
  );

  const factors = {
    XII: { name: 'Factor XII', disease: 'Hageman trait (asymptomatic)', test: 'aPTT' },
    XI: { name: 'Factor XI', disease: 'Factor XI deficiency', test: 'aPTT' },
    IX: { name: 'Factor IX', disease: 'Hemophilia B (Christmas disease)', test: 'aPTT' },
    VIII: { name: 'Factor VIII', disease: 'Hemophilia A', test: 'aPTT' },
    VII: { name: 'Factor VII', disease: 'Factor VII deficiency', test: 'PT' },
    X: { name: 'Factor X', disease: 'Factor X deficiency', test: 'PT, aPTT' },
    V: { name: 'Factor V', disease: 'Factor V deficiency', test: 'PT, aPTT, TT' },
    II: { name: 'Prothrombin', disease: 'Factor II deficiency', test: 'PT, aPTT' },
    I: { name: 'Fibrinogen', disease: 'Fibrinogenemia/Dysfibrinogenemia', test: 'TT' },
  };

  const drugs = [
    { name: 'Heparin', target: 'IIa, Xa', color: 'bg-green-100 border-green-500' },
    { name: 'Warfarin', target: 'II, VII, IX, X', color: 'bg-yellow-100 border-yellow-500' },
    { name: 'DOACs', target: 'Xa or IIa', color: 'bg-blue-100 border-blue-500' },
  ];

  const pathwayStyles = {
    intrinsic: 'border-blue-500 bg-blue-50',
    extrinsic: 'border-red-500 bg-red-50',
    common: 'border-purple-500 bg-purple-50',
  };

  const shouldShow = (pathway: string) => selectedPathway === 'all' || selectedPathway === pathway;

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Coagulation Cascade</h2>
        <p className="text-gray-600">Intrinsic, Extrinsic, and Common pathways converging to fibrin formation</p>
      </div>

      {/* Pathway filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {(['all', 'intrinsic', 'extrinsic', 'common'] as const).map((pathway) => (
          <button
            key={pathway}
            onClick={() => setSelectedPathway(pathway)}
            className={`px-4 py-2 rounded font-medium transition ${
              selectedPathway === pathway
                ? pathway === 'intrinsic'
                  ? 'bg-blue-500 text-white'
                  : pathway === 'extrinsic'
                    ? 'bg-red-500 text-white'
                    : pathway === 'common'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {pathway.charAt(0).toUpperCase() + pathway.slice(1)}
          </button>
        ))}
      </div>

      {/* Main cascade diagram */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Intrinsic pathway */}
        {shouldShow('intrinsic') && (
          <div className={`p-4 rounded border-2 ${pathwayStyles.intrinsic}`}>
            <h3 className="font-bold text-blue-900 mb-4">Intrinsic Pathway</h3>
            <div className="space-y-3">
              {['XII', 'XI', 'IX', 'VIII', 'X'].map((factor) => (
                <div key={factor}>
                  <button
                    onClick={() =>
                      setExpandedFactor(expandedFactor === factor ? null : factor)
                    }
                    className="w-full text-left px-3 py-2 bg-white border border-blue-300 rounded hover:bg-blue-50 transition flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{factors[factor as keyof typeof factors].name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition ${expandedFactor === factor ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFactor === factor && (
                    <div className="mt-2 p-3 bg-blue-50 rounded text-sm text-gray-700 border-l-2 border-blue-500">
                      <p className="mb-1">
                        <span className="font-semibold">Deficiency:</span>{' '}
                        {factors[factor as keyof typeof factors].disease}
                      </p>
                      <p>
                        <span className="font-semibold">Detected by:</span>{' '}
                        {factors[factor as keyof typeof factors].test}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extrinsic pathway */}
        {shouldShow('extrinsic') && (
          <div className={`p-4 rounded border-2 ${pathwayStyles.extrinsic}`}>
            <h3 className="font-bold text-red-900 mb-4">Extrinsic Pathway</h3>
            <div className="space-y-3">
              <div className="px-3 py-2 bg-white border border-red-300 rounded text-sm">
                <p className="font-semibold text-gray-900">Tissue Factor (TF)</p>
                <p className="text-gray-600">+ Factor VII</p>
              </div>
              {['VII', 'X'].map((factor) => (
                <div key={factor}>
                  <button
                    onClick={() =>
                      setExpandedFactor(expandedFactor === factor ? null : factor)
                    }
                    className="w-full text-left px-3 py-2 bg-white border border-red-300 rounded hover:bg-red-50 transition flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{factors[factor as keyof typeof factors].name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition ${expandedFactor === factor ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFactor === factor && (
                    <div className="mt-2 p-3 bg-red-50 rounded text-sm text-gray-700 border-l-2 border-red-500">
                      <p className="mb-1">
                        <span className="font-semibold">Deficiency:</span>{' '}
                        {factors[factor as keyof typeof factors].disease}
                      </p>
                      <p>
                        <span className="font-semibold">Detected by:</span>{' '}
                        {factors[factor as keyof typeof factors].test}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common pathway */}
        {shouldShow('common') && (
          <div className={`p-4 rounded border-2 ${pathwayStyles.common}`}>
            <h3 className="font-bold text-purple-900 mb-4">Common Pathway</h3>
            <div className="space-y-3">
              {['X', 'V', 'II', 'I'].map((factor) => (
                <div key={factor}>
                  <button
                    onClick={() =>
                      setExpandedFactor(expandedFactor === factor ? null : factor)
                    }
                    className="w-full text-left px-3 py-2 bg-white border border-purple-300 rounded hover:bg-purple-50 transition flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-900">{factors[factor as keyof typeof factors].name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition ${expandedFactor === factor ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFactor === factor && (
                    <div className="mt-2 p-3 bg-purple-50 rounded text-sm text-gray-700 border-l-2 border-purple-500">
                      <p className="mb-1">
                        <span className="font-semibold">Deficiency:</span>{' '}
                        {factors[factor as keyof typeof factors].disease}
                      </p>
                      <p>
                        <span className="font-semibold">Detected by:</span>{' '}
                        {factors[factor as keyof typeof factors].test}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lab tests */}
      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-8">
        <h3 className="font-bold text-blue-900 mb-3">Coagulation Tests</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded border border-blue-300">
            <p className="font-semibold text-gray-900">PT (Prothrombin Time)</p>
            <p className="text-gray-600 text-xs mt-1">Tests extrinsic + common pathways</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-300">
            <p className="font-semibold text-gray-900">aPTT (Activated PTT)</p>
            <p className="text-gray-600 text-xs mt-1">Tests intrinsic + common pathways</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-300">
            <p className="font-semibold text-gray-900">TT (Thrombin Time)</p>
            <p className="text-gray-600 text-xs mt-1">Tests common pathway (fibrinogen)</p>
          </div>
        </div>
      </div>

      {/* Drug targets */}
      <div className="bg-gray-50 border border-gray-200 rounded p-4">
        <h3 className="font-bold text-gray-900 mb-3">Anticoagulant Drug Targets</h3>
        <div className="grid grid-cols-3 gap-4">
          {drugs.map((drug) => (
            <div key={drug.name} className={`p-3 rounded border-2 ${drug.color}`}>
              <p className="font-semibold text-gray-900">{drug.name}</p>
              <p className="text-sm text-gray-700 mt-1">Targets: {drug.target}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
