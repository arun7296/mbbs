'use client';

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface APPhase {
  id: number;
  name: string;
  voltage: number;
  description: string;
  ionChannels: string;
  ionsInvolved: string[];
  clinicalSig: string;
  timeMs: number;
}

const phases: APPhase[] = [
  {
    id: 1,
    name: 'Resting Potential',
    voltage: -70,
    description: 'Stable resting state with Na+/K+ ATPase maintaining gradient.',
    ionChannels: 'All channels closed, Na+/K+ ATPase active',
    ionsInvolved: ['K+', 'Na+'],
    clinicalSig: 'Altered in hyperkalemia or hypokalemia',
    timeMs: 300,
  },
  {
    id: 2,
    name: 'Depolarization',
    voltage: 0,
    description: 'Rapid inward Na+ current causes membrane potential to rise.',
    ionChannels: 'Fast Na+ channels opening',
    ionsInvolved: ['Na+'],
    clinicalSig: 'QRS complex on ECG reflects ventricular depolarization',
    timeMs: 100,
  },
  {
    id: 3,
    name: 'Overshoot',
    voltage: 30,
    description: 'Membrane potential overshoots to +30mV due to continued Na+ influx.',
    ionChannels: 'Fast Na+ channels fully open, K+ channels opening',
    ionsInvolved: ['Na+', 'K+'],
    clinicalSig: 'Peak of the action potential spike',
    timeMs: 50,
  },
  {
    id: 4,
    name: 'Repolarization',
    voltage: -30,
    description: 'Na+ channels inactivate, K+ channels fully open causing outward K+ flow.',
    ionChannels: 'Fast Na+ channels inactivated, K+ channels open',
    ionsInvolved: ['K+'],
    clinicalSig: 'T wave on ECG represents ventricular repolarization',
    timeMs: 200,
  },
  {
    id: 5,
    name: 'Hyperpolarization',
    voltage: -90,
    description: 'Membrane potential dips below resting due to delayed K+ channel closure.',
    ionChannels: 'K+ channels closing, Na+/K+ ATPase restoring',
    ionsInvolved: ['K+'],
    clinicalSig: 'Increased excitability threshold, vulnerable period for arrhythmias',
    timeMs: 200,
  },
];

// Generate smooth curve points for the action potential
function generateAPCurve(currentPhaseIdx: number): Array<[number, number]> {
  const points: Array<[number, number]> = [];
  const totalTime = phases.reduce((sum, p) => sum + p.timeMs, 0);

  // Pre-calculate cumulative times
  let cumulativeTime = 0;
  const phaseTimes = phases.map((p) => {
    const start = cumulativeTime;
    cumulativeTime += p.timeMs;
    return [start, cumulativeTime] as [number, number];
  });

  // Create smooth voltage progression
  const voltageProgression = [-70, -70, 0, 30, -30, -90, -70];

  for (let t = 0; t <= totalTime; t += 5) {
    let voltage = -70;

    for (let i = 0; i < phases.length; i++) {
      const [start, end] = phaseTimes[i];
      if (t >= start && t < end) {
        const progress = (t - start) / (end - start);
        const startV = voltageProgression[i];
        const endV = voltageProgression[i + 1];
        voltage = startV + (endV - startV) * progress;
        break;
      }
    }

    const x = (t / totalTime) * 700 + 50;
    const y = 400 - ((voltage + 100) / 200) * 300; // Scale -100 to +100mV to SVG coords
    points.push([x, y]);
  }

  return points;
}

export function ActionPotentialAnimation() {
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentPhaseIdx((prev) => (prev + 1) % phases.length);
    }, phases[currentPhaseIdx].timeMs);

    return () => clearTimeout(timer);
  }, [isPlaying, currentPhaseIdx]);

  const phase = phases[currentPhaseIdx];
  const curve = generateAPCurve(currentPhaseIdx);
  const pathData = curve.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Action Potential Animation</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
        {/* Graph SVG */}
        <div className="lg:col-span-2">
          <svg viewBox="0 0 800 450" className="w-full border border-gray-300 rounded bg-white">
            {/* Grid lines */}
            {[-100, -50, 0, 50].map((v) => {
              const y = 400 - ((v + 100) / 200) * 300;
              return (
                <g key={`h-${v}`}>
                  <line x1="40" y1={y} x2="750" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                  <text x="15" y={y + 4} fontSize="12" fill="gray" textAnchor="end">
                    {v}mV
                  </text>
                </g>
              );
            })}

            {/* Y-axis */}
            <line x1="40" y1="50" x2="40" y2="400" stroke="#333" strokeWidth="2" />
            <text x="20" y="25" fontSize="14" fontWeight="bold" fill="#333">
              Voltage (mV)
            </text>

            {/* X-axis */}
            <line x1="40" y1="400" x2="750" y2="400" stroke="#333" strokeWidth="2" />
            <text x="750" y="425" fontSize="14" fontWeight="bold" fill="#333" textAnchor="end">
              Time
            </text>

            {/* Action potential curve */}
            <path d={pathData} stroke="#2563eb" strokeWidth="3" fill="none" />

            {/* Current phase indicator */}
            <circle
              cx={curve[Math.floor((currentPhaseIdx / phases.length) * curve.length)]?.[0] || 50}
              cy={curve[Math.floor((currentPhaseIdx / phases.length) * curve.length)]?.[1] || 400}
              r="8"
              fill="#ef4444"
              stroke="#333"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Info Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{phase.name}</h3>

          <div className="mb-4 p-3 bg-blue-100 rounded-lg">
            <p className="text-2xl font-bold text-blue-700">{phase.voltage} mV</p>
          </div>

          <p className="text-gray-700 text-sm mb-4">{phase.description}</p>

          <div className="mb-4">
            <p className="font-semibold text-gray-800 text-sm mb-2">Ion Channels:</p>
            <p className="text-sm text-gray-700 bg-white p-2 rounded border border-gray-300">
              {phase.ionChannels}
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-800 text-sm mb-2">Ions Involved:</p>
            <div className="flex gap-2 flex-wrap">
              {phase.ionsInvolved.map((ion) => (
                <span key={ion} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-bold">
                  {ion}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 text-sm">
            <p className="font-semibold text-gray-800 mb-1">Clinical Significance:</p>
            <p className="text-gray-700">{phase.clinicalSig}</p>
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
      </div>

      {/* Phase Indicator */}
      <div className="flex gap-2 justify-center flex-wrap">
        {phases.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => {
              setCurrentPhaseIdx(idx);
              setIsPlaying(false);
            }}
            className={`px-3 py-2 rounded font-semibold transition text-sm ${
              currentPhaseIdx === idx
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
