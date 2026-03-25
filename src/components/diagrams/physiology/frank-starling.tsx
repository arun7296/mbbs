'use client';

import { useState } from 'react';

type CurveState = 'normal' | 'exercise' | 'heartFailure';

interface CardiacState {
  id: CurveState;
  name: string;
  label: string;
  color: string;
  pointY: number; // Operating point Y value
  pointX: number; // Operating point X value
  description: string;
  clinical: string;
}

const states: CardiacState[] = [
  {
    id: 'normal',
    name: 'Normal',
    label: 'Healthy heart',
    color: '#2563eb',
    pointX: 140,
    pointY: 70,
    description: 'Normal cardiac function with optimal preload-afterload relationship.',
    clinical:
      'Baseline function; normal SV and HR maintain adequate cardiac output for resting metabolism.',
  },
  {
    id: 'exercise',
    name: 'Exercise',
    label: 'Increased contractility',
    color: '#16a34a',
    pointX: 160,
    pointY: 90,
    description: 'Sympathetic stimulation increases contractility. Curve shifts up and left.',
    clinical: 'Increased CO via both increased SV and HR; enhanced by catecholamines (noradrenaline, epinephrine).',
  },
  {
    id: 'heartFailure',
    name: 'Heart Failure',
    label: 'Decreased contractility',
    color: '#dc2626',
    pointX: 160,
    pointY: 40,
    description: 'Depressed contractility shifts curve downward. Same preload yields lower SV.',
    clinical:
      'Reduced CO despite elevated preload; often compensates with increased HR and vasoconstriction.',
  },
];

// Generate Frank-Starling curve points
function generateFrankStarlingCurve(state: CurveState): Array<[number, number]> {
  const points: Array<[number, number]> = [];

  // Base parameters
  const baseMultipliers: Record<CurveState, number> = {
    normal: 1,
    exercise: 1.3,
    heartFailure: 0.6,
  };

  const multiplier = baseMultipliers[state];

  // SVG coordinates: X from 50 to 750 (0-250 mL EDV), Y from 50 to 400 (0-150 mL SV)
  for (let edv = 0; edv <= 250; edv += 10) {
    // Frank-Starling relationship: SV increases with EDV
    // Using a simplified model: SV = a * EDV + b * EDV^2
    let sv = 20 + 0.25 * edv + 0.001 * Math.pow(edv, 2);
    sv = Math.min(sv * multiplier, 150); // Cap at 150 mL

    const x = 50 + (edv / 250) * 700;
    const y = 400 - (sv / 150) * 350;
    points.push([x, y]);
  }

  return points;
}

// Generate ESPVR (End-Systolic Pressure-Volume Relationship) line
function generateESPVR(): Array<[number, number]> {
  return [
    [50, 400],
    [700, 100],
  ];
}

// Generate EDPVR (End-Diastolic Pressure-Volume Relationship) curve
function generateEDPVR(): Array<[number, number]> {
  const points: Array<[number, number]> = [];
  for (let edv = 0; edv <= 250; edv += 10) {
    const edp = 5 + 0.05 * Math.pow(edv / 100, 2);
    const x = 50 + (edv / 250) * 700;
    const y = 400 - (edp / 150) * 350;
    points.push([x, y]);
  }
  return points;
}

export function FrankStarlingCurve() {
  const [selectedState, setSelectedState] = useState<CurveState>('normal');

  const normalCurve = generateFrankStarlingCurve('normal');
  const exerciseCurve = generateFrankStarlingCurve('exercise');
  const hfCurve = generateFrankStarlingCurve('heartFailure');
  const espvr = generateESPVR();
  const edpvr = generateEDPVR();

  const normalPath = normalCurve.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const exercisePath = exerciseCurve.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const hfPath = hfCurve.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const espvrPath = espvr.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const edpvrPath = edpvr.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  const state = states.find((s) => s.id === selectedState);
  const operatingPointX = 50 + (state!.pointX / 250) * 700;
  const operatingPointY = 400 - (state!.pointY / 150) * 350;

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frank-Starling Curve</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
        {/* Graph */}
        <div className="lg:col-span-2">
          <svg viewBox="0 0 800 500" className="w-full border border-gray-300 rounded bg-white">
            {/* Grid */}
            {[0, 50, 100, 150, 200, 250].map((edv) => {
              const x = 50 + (edv / 250) * 700;
              return (
                <g key={`v-${edv}`}>
                  <line x1={x} y1="50" x2={x} y2="400" stroke="#e5e7eb" strokeWidth="1" />
                  <text x={x} y="425" fontSize="12" fill="gray" textAnchor="middle">
                    {edv}
                  </text>
                </g>
              );
            })}

            {[0, 30, 60, 90, 120, 150].map((sv) => {
              const y = 400 - (sv / 150) * 350;
              return (
                <g key={`h-${sv}`}>
                  <line x1="50" y1={y} x2="750" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                  <text x="35" y={y + 4} fontSize="12" fill="gray" textAnchor="end">
                    {sv}
                  </text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1="50" y1="50" x2="50" y2="400" stroke="#333" strokeWidth="2" />
            <line x1="50" y1="400" x2="750" y2="400" stroke="#333" strokeWidth="2" />

            {/* Axis labels */}
            <text x="15" y="25" fontSize="14" fontWeight="bold" fill="#333">
              SV (mL)
            </text>
            <text x="750" y="450" fontSize="14" fontWeight="bold" fill="#333" textAnchor="end">
              EDV (mL)
            </text>

            {/* EDPVR (diastolic curve) */}
            <path d={edpvrPath} stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="3,3" opacity="0.6" />
            <text x="100" y="95" fontSize="11" fill="gray" opacity="0.7">
              EDPVR
            </text>

            {/* ESPVR (systolic line) */}
            <path d={espvrPath} stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="3,3" opacity="0.6" />
            <text x="680" y="130" fontSize="11" fill="gray" opacity="0.7">
              ESPVR
            </text>

            {/* Curves */}
            <path d={normalPath} stroke="#2563eb" strokeWidth="3" fill="none" opacity={selectedState === 'normal' ? 1 : 0.3} />
            <path d={exercisePath} stroke="#16a34a" strokeWidth="3" fill="none" opacity={selectedState === 'exercise' ? 1 : 0.3} />
            <path d={hfPath} stroke="#dc2626" strokeWidth="3" fill="none" opacity={selectedState === 'heartFailure' ? 1 : 0.3} />

            {/* Operating point */}
            <circle cx={operatingPointX} cy={operatingPointY} r="8" fill={state!.color} stroke="#333" strokeWidth="2" />

            {/* Arrow from origin to operating point */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill={state!.color} />
              </marker>
            </defs>
            <line x1="50" y1="400" x2={operatingPointX - 15} y2={operatingPointY + 15} stroke={state!.color} strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.5" />
          </svg>
        </div>

        {/* Controls Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Cardiac States</h3>

          <div className="space-y-3 mb-6">
            {states.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedState(s.id)}
                className={`w-full text-left p-3 rounded-lg transition border-2 ${
                  selectedState === s.id
                    ? `border-${s.color === '#2563eb' ? 'blue-600' : s.color === '#16a34a' ? 'green-600' : 'red-600'} bg-white shadow-lg`
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
                style={selectedState === s.id ? { borderColor: s.color, boxShadow: `0 0 0 3px ${s.color}22` } : {}}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: s.color }} />
                  <p className="font-bold text-gray-800">{s.name}</p>
                </div>
                <p className="text-xs text-gray-600">{s.label}</p>
              </button>
            ))}
          </div>

          {state && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-bold text-gray-800 mb-2">{state.name}</p>
              <p className="text-sm text-gray-700 mb-3">{state.description}</p>

              <div className="space-y-2 mb-3">
                <p className="text-sm text-gray-700">
                  <strong>Operating Point:</strong> EDV {state.pointX} mL, SV {state.pointY} mL
                </p>
              </div>

              <p className="text-sm text-gray-700 bg-white p-2 rounded border border-gray-300">
                <strong>Clinical:</strong> {state.clinical}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Clinical Pearl */}
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
        <p className="text-sm text-gray-800">
          <strong>Frank-Starling Mechanism:</strong> The left ventricle's stroke volume increases with end-diastolic
          volume (preload) due to optimal sarcomere overlap. In heart failure, the curve flattens and shifts downward;
          in exercise, sympathetic activation and inotropic agents shift it upward. The PV loop corners define the
          ejection fraction and myocardial performance.
        </p>
      </div>
    </div>
  );
}
