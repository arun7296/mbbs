'use client';

import React, { useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export const InflammationCascade: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'Injury',
      description: 'Tissue damage triggers inflammatory response',
      mediators: [],
      color: 'bg-red-100',
      borderColor: 'border-red-500',
    },
    {
      title: 'Vascular Changes',
      description: 'Vasodilation and increased permeability',
      mediators: ['Histamine', 'Bradykinin', 'Prostaglandins', 'NO'],
      color: 'bg-orange-100',
      borderColor: 'border-orange-500',
    },
    {
      title: 'Cellular Events',
      description: 'Margination → Rolling → Adhesion → Diapedesis',
      mediators: ['Selectins', 'Integrins', 'ICAM-1', 'VCAM-1'],
      color: 'bg-yellow-100',
      borderColor: 'border-yellow-500',
    },
    {
      title: 'Chemotaxis',
      description: 'Leukocyte migration towards injury',
      mediators: ['C5a', 'LTB4', 'IL-8', 'TNF-α'],
      color: 'bg-green-100',
      borderColor: 'border-green-500',
    },
    {
      title: 'Phagocytosis',
      description: 'Removal of pathogens and debris',
      mediators: ['Opsonins', 'C3b', 'IgG', 'Complement'],
      color: 'bg-blue-100',
      borderColor: 'border-blue-500',
    },
    {
      title: 'Resolution/Repair',
      description: 'Tissue healing and remodeling',
      mediators: ['TGF-β', 'Fibroblasts', 'Collagen', 'Angiogenesis'],
      color: 'bg-purple-100',
      borderColor: 'border-purple-500',
    },
  ];

  React.useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Acute Inflammation Cascade</h2>
        <p className="text-gray-600">Sequential steps in the inflammatory response</p>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 flex-1 mx-1 rounded transition ${
                idx <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-gray-600">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      {/* Sequential visualization */}
      <div className="space-y-4 mb-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {/* Step indicator */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition ${
                idx < currentStep
                  ? 'bg-green-500'
                  : idx === currentStep
                    ? 'bg-blue-500 scale-110'
                    : 'bg-gray-300'
              }`}
            >
              {idx < currentStep ? '✓' : idx + 1}
            </div>

            {/* Step card */}
            <div
              onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
              className={`flex-1 p-4 rounded border-l-4 cursor-pointer transition ${step.color} ${step.borderColor} hover:shadow-md`}
            >
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>

              {/* Mediators */}
              {step.mediators.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {step.mediators.map((mediator, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-xs px-2 py-1 bg-white rounded border border-gray-300 text-gray-700"
                    >
                      {mediator}
                    </span>
                  ))}
                </div>
              )}

              {/* Expanded details */}
              {expandedStep === idx && step.mediators.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Mediators:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {step.mediators.map((mediator, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                        {mediator}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Arrow */}
            {idx < steps.length - 1 && (
              <div className="text-2xl text-gray-400">→</div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Clinical Significance</h3>
        <p className="text-sm text-gray-700">
          The inflammatory cascade is essential for clearing pathogens and initiating tissue repair.
          Dysregulation leads to chronic inflammation and tissue damage. NSAIDs and corticosteroids
          target different mediators to modulate this response.
        </p>
      </div>
    </div>
  );
};
