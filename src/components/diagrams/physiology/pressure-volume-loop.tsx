'use client';

import { useState } from 'react';

type LoopVariation = 'normal' | 'preload' | 'afterload' | 'contractility';

interface LoopState {
  id: LoopVariation;
  name: string;
  label: string;
  color: string;
  description: string;
  clinical: string;
  edv: number;
  esv: number;
  maxPressure: number;
}

const loopStates: LoopState[] = [
  {
    id: 'normal',
    name: 'Normal PV Loop',
    label: 'Baseline cardiac cycle',
    color: '#2563eb',
    description: 'Normal ejection with typical preload and afterload.',
    clinical: 'Healthy adult; normal EF ~60-70%, SV ~70 mL',
    edv: 120,
    esv: 50,
    maxPressure: 120,
  },
  {
    id: 'preload',
    name: 'Increased Preload',
    label: 'Volume overload / Diastolic dysfunction',
    color: '#16a34a',
    description: 'Loop shifts right with higher EDV. SV increases via Frank-Starling.',
    clinical: 'Seen in MR, AR, VSD, pregnancy. EF maintained but stroke volume higher.',
    edv: 160,
    esv: 60,
    maxPressure: 120,
  },
  {
    id: 'afterload',
    name: 'Increased Afterload',
    label: 'Hypertension / Aortic stenosis',
    color: '#dc2626',
    description: 'Loop shifts upward with higher pressure needed for ejection.',
    clinical: 'Hypertension, AS; EF reduced, higher wall stress, LVH develops',
    edv: 120,
    esv: 70,
    maxPressure: 180,
  },
  {
    id: 'contractility',
    name: 'Increased Contractility',
    label: 'Sympathetic activation / Inotropes',
    color: '#7c3aed',
    description: 'Loop shifts up-left; lower ESV for same EDV.',
    clinical: 'Exercise, catecholamines, dobutamine; higher EF, lower ESV',
    edv: 120,
    esv: 30,
    maxPressure: 140,
  },
];

// Generate PV loop path
function generatePVLoop(state: LoopState): Array<[number, number]> {
  const points: Array<[number, number]> = [];

  // Simplified PV loop: 4 phases
  // 1. Isovolumetric contraction (volume constant, pressure rising)
  // 2. Ejection (both volume and pressure changing)
  // 3. Isovolumetric relaxation (volume constant, pressure falling)
  // 4. Filling (both volume and pressure rising)

  const edv = state.edv;
  const esv = state.esv;
  const maxPressure = state.maxPressure;

  // SVG coordinates: X from 50 to 750 (0-200 mL), Y from 50 to 400 (0-200 mmHg)
  const x = (vol: number) => 50 + (vol / 200) * 700;
  const y = (press: number) => 400 - (press / 200) * 350;

  // Phase 1: Isovolumetric contraction (A to B)
  for (let p = 0; p <= maxPressure; p += 5) {
    points.push([x(edv), y(p)]);
  }

  // Phase 2: Ejection (B to C) - pressure and volume decrease
  const ejectSteps = 20;
  for (let i = 0; i <= ejectSteps; i++) {
    const progress = i / ejectSteps;
    const vol = edv - progress * (edv - esv);
    const press = maxPressure * (1 - progress * 0.7); // Pressure drops during ejection
    points.push([x(vol), y(press)]);
  }

  // Phase 3: Isovolumetric relaxation (C to D) - volume constant, pressure falling
  for (let p = maxPressure * 0.3; p >= 0; p -= 5) {
    points.push([x(esv), y(p)]);
  }

  // Phase 4: Filling (D to A) - volume and pressure rise
  const fillSteps = 20;
  for (let i = fillSteps; i >= 0; i--) {
    const progress = (fillSteps - i) / fillSteps;
    const vol = esv + progress * (edv - esv);
    const press = 8 + progress * 5; // Diastolic pressure gradient
    points.push([x(vol), y(press)]);
  }

  return points;
}

export function PressureVolumeLoop() {
  const [selectedState, setSelectedState] = useState<LoopVariation>('normal');

  const normalLoop = generatePVLoop(loopStates[0]);
  const preloadLoop = generatePVLoop(loopStates[1]);
  const afterloadLoop = generatePVLoop(loopStates[2]);
  const contractilityLoop = generatePVLoop(loopStates[3]);

  const normalPath = normalLoop.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const preloadPath = preloadLoop.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const afterloadPath = afterloadLoop.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const contractilityPath = contractilityLoop.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  const state = loopStates.find((s) => s.id === selectedState);
  const sv = state!.edv - state!.esv;
  const ef = ((sv / state!.edv) * 100).toFixed(1);

  // Calculate loop area (work) - simplified
  const loopArea = sv * state!.maxPressure * 0.5;

  // X,Y coordinates for key points
  const edvx = 50 + (state!.edv / 200) * 700;
  const edvy = 400 - (8 / 200) * 350;
  const esvx = 50 + (state!.esv / 200) * 700;
  const esvy = 400 - (state!.maxPressure / 200) * 350;

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cardiac Pressure-Volume Loop</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
        {/* Graph */}
        <div className="lg:col-span-2">
          <svg viewBox="0 0 800 500" className="w-full border border-gray-300 rounded bg-white">
            {/* Grid */}
            {[0, 40, 80, 120, 160, 200].map((vol) => {
              const x = 50 + (vol / 200) * 700;
              return (
                <g key={`v-${vol}`}>
                  <line x1={x} y1="50" x2={x} y2="400" stroke="#e5e7eb" strokeWidth="1" />
                  <text x={x} y="425" fontSize="12" fill="gray" textAnchor="middle">
                    {vol}
                  </text>
                </g>
              );
            })}

            {[0, 40, 80, 120, 160, 200].map((press) => {
              const y = 400 - (press / 200) * 350;
              return (
                <g key={`p-${press}`}>
                  <line x1="50" y1={y} x2="750" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                  <text x="35" y={y + 4} fontSize="12" fill="gray" textAnchor="end">
                    {press}
                  </text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1="50" y1="50" x2="50" y2="400" stroke="#333" strokeWidth="2" />
            <line x1="50" y1="400" x2="750" y2="400" stroke="#333" strokeWidth="2" />

            {/* Axis labels */}
            <text x="15" y="25" fontSize="14" fontWeight="bold" fill="#333">
              Pressure (mmHg)
            </text>
            <text x="750" y="450" fontSize="14" fontWeight="bold" fill="#333" textAnchor="end">
              Volume (mL)
            </text>

            {/* Loops with reduced opacity for non-selected */}
            <path d={normalPath} stroke="#2563eb" strokeWidth="3" fill="none" opacity={selectedState === 'normal' ? 1 : 0.2} />
            <path d={preloadPath} stroke="#16a34a" strokeWidth="3" fill="none" opacity={selectedState === 'preload' ? 1 : 0.2} />
            <path d={afterloadPath} stroke="#dc2626" strokeWidth="3" fill="none" opacity={selectedState === 'afterload' ? 1 : 0.2} />
            <path d={contractilityPath} stroke="#7c3aed" strokeWidth="3" fill="none" opacity={selectedState === 'contractility' ? 1 : 0.2} />

            {/* Key points for selected loop */}
            {/* EDV corner (bottom-right) */}
            <circle cx={edvx} cy={edvy} r="6" fill="#10b981" stroke="#333" strokeWidth="2" />
            <text x={edvx + 30} y={edvy - 10} fontSize="11" fontWeight="bold" fill="#059669">
              EDV ({state!.edv})
            </text>

            {/* ESV corner (top-left) */}
            <circle cx={esvx} cy={esvy} r="6" fill="#f59e0b" stroke="#333" strokeWidth="2" />
            <text x={esvx - 60} y={esvy - 10} fontSize="11" fontWeight="bold" fill="#d97706">
              ESV ({state!.esv})
            </text>
          </svg>
        </div>

        {/* Controls Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Load Conditions</h3>

          <div className="space-y-3 mb-6">
            {loopStates.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedState(s.id)}
                className={`w-full text-left p-3 rounded-lg transition border-2 ${
                  selectedState === s.id
                    ? 'border-current bg-white shadow-lg'
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
              <p className="font-bold text-gray-800 mb-3">{state.name}</p>
              <p className="text-sm text-gray-700 mb-3">{state.description}</p>

              <div className="space-y-2 mb-3 text-sm bg-white p-3 rounded border border-gray-300">
                <p>
                  <strong>EDV:</strong> {state.edv} mL
                </p>
                <p>
                  <strong>ESV:</strong> {state.esv} mL
                </p>
                <p>
                  <strong>SV:</strong> {sv} mL
                </p>
                <p>
                  <strong>EF:</strong> {ef}%
                </p>
                <p>
                  <strong>Max Pressure:</strong> {state.maxPressure} mmHg
                </p>
                <p>
                  <strong>Loop Work:</strong> ~{Math.round(loopArea)} mmHg·mL
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
          <strong>PV Loop Interpretation:</strong> The area enclosed by the PV loop represents the external work done by
          the ventricle. The bottom-right corner (EDV) represents end-diastolic volume; the top-left corner (ESV)
          represents end-systolic volume. The slope of the ESPVR (end-systolic pressure-volume relation) reflects
          contractility. Increased preload shifts the loop rightward; increased afterload shifts it upward.
        </p>
      </div>
    </div>
  );
}
