'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const ECGWavesDiagram: React.FC = () => {
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);

  const labels = [
    {
      id: 'p-wave',
      name: 'P Wave',
      description: 'Atrial depolarization',
      normalValue: 'Duration < 120 ms, Amplitude < 2.5 mm',
      represents: 'Electrical activity of both atria contracting',
      abnormalities: [
        'Peaked P wave: Right atrial enlargement (pulmonary hypertension)',
        'Biphasic P wave: Left atrial enlargement (mitral stenosis)',
        'Absent P: Atrial fibrillation, junctional rhythm',
        'Inverted P: Ectopic atrial rhythm, LBBB, LVH',
      ],
    },
    {
      id: 'pr-interval',
      name: 'PR Interval',
      description: 'From P wave onset to QRS onset',
      normalValue: '120-200 ms (3-5 small squares)',
      represents: 'Atrial depolarization + AV node delay + ventricular conduction start',
      abnormalities: [
        'Prolonged (>200 ms): 1st degree AV block (medications, hyperkalemia)',
        'Shortened (<120 ms): WPW syndrome, LGL syndrome (preexcitation)',
        'Variable: 2nd or 3rd degree AV block',
      ],
    },
    {
      id: 'qrs-complex',
      name: 'QRS Complex',
      description: 'Ventricular depolarization',
      normalValue: 'Duration 80-120 ms; Amplitude varies by lead',
      represents: 'Electrical activation of both ventricles',
      abnormalities: [
        'Widened (>120 ms): RBBB, LBBB, hyperkalemia, drug effects (TCAs)',
        'Tall R in V1: RVH, lateral MI',
        'Deep Q waves: Myocardial infarction (pathologic if >40 ms or 1/3 R height)',
        'Absent/low voltage: Pulmonary embolism, obesity, effusion, emphysema',
      ],
    },
    {
      id: 'st-segment',
      name: 'ST Segment',
      description: 'From QRS end to T wave start',
      normalValue: 'Should be isoelectric (on baseline)',
      represents: 'Interval between ventricular depolarization and repolarization',
      abnormalities: [
        'ST elevation: Acute MI (ST-elevation MI), Brugada, early repolarization',
        'ST depression: Ischemia, NSTEMI, LVH, digitalis effect',
        'ST scooping: Digitalis toxicity',
      ],
    },
    {
      id: 't-wave',
      name: 'T Wave',
      description: 'Ventricular repolarization',
      normalValue: 'Usually upright in most leads; inverted in aVR, V1',
      represents: 'Electrical recovery of ventricular muscle',
      abnormalities: [
        'Inverted T waves: MI (evolving), ischemia, LVH, PE, pulmonary embolism',
        'Peaked/tall T waves: Hyperkalemia, acute MI',
        'Flattened T waves: Hypokalemia, chronic ischemia',
      ],
    },
    {
      id: 'qt-interval',
      name: 'QT Interval',
      description: 'From QRS onset to T wave end',
      normalValue: 'Varies with HR; Corrected QTc < 440 ms (men), < 460 ms (women)',
      represents: 'Total time for ventricular depolarization and repolarization',
      abnormalities: [
        'Prolonged QT: Antiarrhythmics, macrolides, antipsychotics, hypokalemia, hypocalcemia',
        'Risk: Torsades de pointes (polymorphic VT)',
        'Short QT: Hypercalcemia, digitalis toxicity',
      ],
    },
    {
      id: 'rr-interval',
      name: 'RR Interval',
      description: 'Between two consecutive R waves',
      normalValue: 'Regular rhythm: constant; Sinus variation < 10%',
      represents: 'Heart rate and rhythm regularity',
      abnormalities: [
        'Irregular: Atrial fibrillation, ectopic beats, heart blocks',
        'Fixed slow: Bradycardia (HR < 60); 2nd/3rd degree block',
        'Fixed fast: Tachycardia (HR > 100); SVT',
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">ECG Waveforms and Intervals</h2>
        <p className="text-gray-600">Labeled ECG components with normal values and clinical significance</p>
      </div>

      {/* ECG tracing SVG */}
      <div className="bg-white p-4 rounded border-2 border-gray-300 mb-8 overflow-x-auto">
        <svg width="900" height="250" viewBox="0 0 900 250" preserveAspectRatio="xMidYMid meet">
          {/* Grid background */}
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="url(#smallGrid)" />
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e0e0e0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="900" height="250" fill="url(#grid)" />

          {/* Baseline */}
          <line x1="20" y1="125" x2="880" y2="125" stroke="#ff6b6b" strokeWidth="2" />

          {/* P Wave and interval */}
          <path d="M70,125 Q75,110 80,125" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
          <line x1="70" y1="130" x2="90" y2="130" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
          <text x="80" y="150" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">
            P
          </text>

          {/* PR Interval line */}
          <line x1="70" y1="140" x2="100" y2="140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="85" y="155" fontSize="10" fill="#10b981" fontWeight="bold" textAnchor="middle">
            PR
          </text>

          {/* QRS Complex */}
          <path d="M100,125 L105,105 L110,140 L115,100 L120,125" fill="none" stroke="#ef4444" strokeWidth="3" />
          <text x="110" y="160" fontSize="11" fill="#ef4444" fontWeight="bold" textAnchor="middle">
            QRS
          </text>

          {/* ST Segment */}
          <line x1="120" y1="125" x2="180" y2="125" stroke="#8b5cf6" strokeWidth="2" />
          <text x="150" y="145" fontSize="10" fill="#8b5cf6" fontWeight="bold" textAnchor="middle">
            ST
          </text>

          {/* T Wave */}
          <path d="M180,125 Q190,85 200,125" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="190" y="155" fontSize="11" fill="#f59e0b" fontWeight="bold" textAnchor="middle">
            T
          </text>

          {/* QT Interval bracket */}
          <line x1="100" y1="20" x2="100" y2="30" stroke="#06b6d4" strokeWidth="2" />
          <line x1="100" y1="25" x2="200" y2="25" stroke="#06b6d4" strokeWidth="2" />
          <line x1="200" y1="20" x2="200" y2="30" stroke="#06b6d4" strokeWidth="2" />
          <text x="150" y="15" fontSize="10" fill="#06b6d4" fontWeight="bold" textAnchor="middle">
            QT Interval
          </text>

          {/* RR Interval (2 complexes) */}
          {/* Second complex */}
          <path d="M350,125 Q355,110 360,125" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
          <line x1="350" y1="130" x2="370" y2="130" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />

          <line x1="350" y1="140" x2="380" y2="140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />

          <path d="M380,125 L385,105 L390,140 L395,100 L400,125" fill="none" stroke="#ef4444" strokeWidth="3" />

          <line x1="400" y1="125" x2="460" y2="125" stroke="#8b5cf6" strokeWidth="2" />

          <path d="M460,125 Q470,85 480,125" fill="none" stroke="#f59e0b" strokeWidth="2.5" />

          {/* RR interval bracket */}
          <line x1="110" y1="210" x2="110" y2="200" stroke="#ec4899" strokeWidth="2" />
          <line x1="110" y1="205" x2="390" y2="205" stroke="#ec4899" strokeWidth="2" />
          <line x1="390" y1="210" x2="390" y2="200" stroke="#ec4899" strokeWidth="2" />
          <text x="250" y="225" fontSize="10" fill="#ec4899" fontWeight="bold" textAnchor="middle">
            RR Interval
          </text>

          {/* Axis label */}
          <text x="20" y="240" fontSize="12" fill="#6b7280" fontWeight="bold">
            Heart rate calculated from RR interval
          </text>
        </svg>
      </div>

      {/* Detailed labels */}
      <div className="space-y-3 mb-8">
        {labels.map((label) => (
          <button
            key={label.id}
            onClick={() =>
              setExpandedLabel(expandedLabel === label.id ? null : label.id)
            }
            className="w-full p-4 rounded border-2 border-gray-300 bg-gray-50 text-left transition hover:shadow-md hover:bg-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg text-gray-900">{label.name}</h4>
                <p className="text-sm text-gray-700 mt-1">{label.description}</p>
                <p className="text-xs text-gray-600 mt-1 font-mono bg-white px-2 py-1 rounded inline-block">
                  Normal: {label.normalValue}
                </p>
              </div>
              <Info size={20} className="text-gray-600" />
            </div>

            {expandedLabel === label.id && (
              <div className="mt-4 pt-4 border-t-2 border-gray-300 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What it represents:</p>
                  <p className="text-sm text-gray-700">{label.represents}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Abnormal findings:</p>
                  <ul className="space-y-1">
                    {label.abnormalities.map((abnorm, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{abnorm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ECG analysis steps */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded p-4">
        <h3 className="font-bold text-blue-900 mb-3">Systematic ECG Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">1. Rate</p>
            <p className="text-xs text-gray-700">Count large squares between two R waves. HR = 300 / # squares</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">2. Rhythm</p>
            <p className="text-xs text-gray-700">Regular vs irregular RR intervals. Identify P waves and relationship to QRS.</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">3. Axis</p>
            <p className="text-xs text-gray-700">Determine QRS axis by examining QRS in limb leads. Normal: -30° to +90°</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">4. Intervals</p>
            <p className="text-xs text-gray-700">Measure PR, QRS, QTc. Compare to normal ranges.</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">5. Segments</p>
            <p className="text-xs text-gray-700">Evaluate ST segments for elevation or depression by lead location.</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">6. Waves</p>
            <p className="text-xs text-gray-700">Assess P, QRS, T wave morphology. Look for pathologic Q waves.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
