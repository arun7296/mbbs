'use client';

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface Phase {
  id: number;
  name: string;
  description: string;
  ecgPhase: string;
  durationMs: number;
  laPress: number;
  lvPress: number;
  aoPress: number;
  mitralStatus: 'open' | 'closed';
  aorticStatus: 'open' | 'closed';
}

const phases: Phase[] = [
  {
    id: 1,
    name: 'Atrial Systole',
    description: 'Atria contract, pushing blood into ventricles. P wave on ECG.',
    ecgPhase: 'P wave',
    durationMs: 200,
    laPress: 8,
    lvPress: 5,
    aoPress: 80,
    mitralStatus: 'open',
    aorticStatus: 'closed',
  },
  {
    id: 2,
    name: 'Isovolumetric Contraction',
    description: 'Ventricular contraction begins, both valves close. QRS complex.',
    ecgPhase: 'QRS (start)',
    durationMs: 100,
    laPress: 5,
    lvPress: 25,
    aoPress: 80,
    mitralStatus: 'closed',
    aorticStatus: 'closed',
  },
  {
    id: 3,
    name: 'Ventricular Ejection',
    description: 'Aortic valve opens, blood ejected into aorta. ST segment.',
    ecgPhase: 'ST segment',
    durationMs: 250,
    laPress: 5,
    lvPress: 120,
    aoPress: 120,
    mitralStatus: 'closed',
    aorticStatus: 'open',
  },
  {
    id: 4,
    name: 'Isovolumetric Relaxation',
    description: 'Ventricular relaxation begins, aortic valve closes. T wave.',
    ecgPhase: 'T wave',
    durationMs: 100,
    laPress: 5,
    lvPress: 20,
    aoPress: 80,
    mitralStatus: 'closed',
    aorticStatus: 'closed',
  },
  {
    id: 5,
    name: 'Rapid Ventricular Filling',
    description: 'Mitral valve opens, rapid ventricular filling from atrium.',
    ecgPhase: 'After T wave',
    durationMs: 150,
    laPress: 5,
    lvPress: 10,
    aoPress: 80,
    mitralStatus: 'open',
    aorticStatus: 'closed',
  },
  {
    id: 6,
    name: 'Diastasis',
    description: 'Slow ventricular filling phase. No electrical activity.',
    ecgPhase: 'TP interval',
    durationMs: 200,
    laPress: 5,
    lvPress: 8,
    aoPress: 80,
    mitralStatus: 'open',
    aorticStatus: 'closed',
  },
];

export function CardiacCycleAnimation() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, phases[currentPhase].durationMs / speed);

    return () => clearTimeout(timer);
  }, [isPlaying, currentPhase, speed]);

  const phase = phases[currentPhase];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cardiac Cycle Animation</h2>

      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* Heart SVG */}
        <div className="flex justify-center items-center">
          <svg viewBox="0 0 400 500" className="w-full max-w-sm h-auto border border-gray-300 rounded">
            {/* Valves labels */}
            <text x="120" y="30" fontSize="14" fill="gray" textAnchor="middle">
              Mitral Valve
            </text>
            <text x="280" y="30" fontSize="14" fill="gray" textAnchor="middle">
              Aortic Valve
            </text>

            {/* Left Atrium */}
            <rect x="100" y="50" width="100" height="80" fill="#ff6b6b" stroke="#333" strokeWidth="2" />
            <text x="150" y="95" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">
              LA
            </text>

            {/* Right Atrium */}
            <rect x="200" y="50" width="100" height="80" fill="#ff9999" stroke="#333" strokeWidth="2" />
            <text x="250" y="95" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">
              RA
            </text>

            {/* Left Ventricle */}
            <rect x="80" y="180" width="120" height="200" fill="#4ecdc4" stroke="#333" strokeWidth="2" />
            <text x="140" y="285" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">
              LV
            </text>

            {/* Right Ventricle */}
            <rect x="220" y="180" width="120" height="200" fill="#95e1d3" stroke="#333" strokeWidth="2" />
            <text x="280" y="285" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">
              RV
            </text>

            {/* Valve indicators */}
            <circle
              cx="150"
              cy="145"
              r="8"
              fill={phase.mitralStatus === 'open' ? '#22c55e' : '#ef4444'}
              stroke="#333"
              strokeWidth="2"
            />
            <circle
              cx="280"
              cy="145"
              r="8"
              fill={phase.aorticStatus === 'open' ? '#22c55e' : '#ef4444'}
              stroke="#333"
              strokeWidth="2"
            />

            {/* Pressure values */}
            <text x="50" y="220" fontSize="12" fill="gray">
              LA: {phase.laPress} mmHg
            </text>
            <text x="50" y="245" fontSize="12" fill="gray">
              LV: {phase.lvPress} mmHg
            </text>
            <text x="50" y="270" fontSize="12" fill="gray">
              Ao: {phase.aoPress} mmHg
            </text>

            {/* Legend */}
            <circle cx="50" cy="330" r="6" fill="#22c55e" stroke="#333" strokeWidth="1" />
            <text x="65" y="335" fontSize="12" fill="gray">
              Open
            </text>

            <circle cx="150" cy="330" r="6" fill="#ef4444" stroke="#333" strokeWidth="1" />
            <text x="165" y="335" fontSize="12" fill="gray">
              Closed
            </text>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{phase.name}</h3>

          <div className="mb-6">
            <p className="text-gray-700 mb-3">{phase.description}</p>
            <p className="text-sm text-gray-600">
              <strong>ECG Phase:</strong> {phase.ecgPhase}
            </p>
          </div>

          <table className="w-full text-sm border border-gray-300 mb-6">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2 text-left">Valve</th>
                <th className="border p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Mitral Valve</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs font-bold ${
                      phase.mitralStatus === 'open' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {phase.mitralStatus.toUpperCase()}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border p-2">Aortic Valve</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs font-bold ${
                      phase.aorticStatus === 'open' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {phase.aorticStatus.toUpperCase()}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-sm text-gray-700">
            <strong>Duration:</strong> {phase.durationMs}ms
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <div className="flex gap-2">
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-3 py-2 rounded font-semibold transition ${
                speed === s
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Phase Indicator */}
      <div className="flex gap-2 justify-center flex-wrap">
        {phases.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => {
              setCurrentPhase(idx);
              setIsPlaying(false);
            }}
            className={`w-10 h-10 rounded-full font-bold transition ${
              currentPhase === idx
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            {p.id}
          </button>
        ))}
      </div>
    </div>
  );
}
