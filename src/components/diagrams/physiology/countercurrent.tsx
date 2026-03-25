'use client';

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface LoopSegment {
  depth: number;
  descendingOsm: number;
  ascendingOsm: number;
  interstitialOsm: number;
}

const generateLoopGradient = (step: number): LoopSegment[] => {
  const segments: LoopSegment[] = [];
  const maxSteps = 6;
  const progressRatio = Math.min(step / maxSteps, 1);

  for (let i = 0; i < 6; i++) {
    // Simplified countercurrent multiplier model
    const baseInterstitial = 300 + i * (1200 - 300) * progressRatio / 6;
    const descendingOsm = 300 + (i * 150 * progressRatio);
    const ascendingOsm = 300 + (i * 200 * progressRatio);

    segments.push({
      depth: i,
      descendingOsm: Math.round(descendingOsm),
      ascendingOsm: Math.round(ascendingOsm),
      interstitialOsm: Math.round(baseInterstitial),
    });
  }

  return segments;
};

export function CountercurrentAnimation() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (step < 6) {
        setStep(step + 1);
      } else {
        setIsPlaying(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const segments = generateLoopGradient(step);

  // SVG layout
  const svgWidth = 900;
  const svgHeight = 600;
  const loopLeftX = 100;
  const loopRightX = 400;
  const loopTopY = 80;
  const loopBottomY = 500;
  const segmentHeight = (loopBottomY - loopTopY) / 6;

  const vasaLeftX = 500;
  const vasaRightX = 700;

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Countercurrent Multiplier Animation</h2>
      <p className="text-gray-600 mb-6">
        Building the osmotic gradient in the medullary interstitium via the Loop of Henle and vasa recta
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Main Diagram */}
        <div className="lg:col-span-3">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full border border-gray-300 rounded bg-white">
            {/* Title */}
            <text x="450" y="30" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">
              Loop of Henle Countercurrent Mechanism
            </text>

            {/* Gradient bar (interstitial osmolarity scale) */}
            <text x="50" y="60" fontSize="12" fontWeight="bold" fill="#666">
              Osmolarity (mOsm/kg):
            </text>

            {/* Draw Loop of Henle with segments */}
            {segments.map((seg, idx) => {
              const y = loopTopY + idx * segmentHeight;

              return (
                <g key={`segment-${idx}`}>
                  {/* Descending limb (left side) - water permeable, impermeable to NaCl */}
                  <rect
                    x={loopLeftX}
                    y={y}
                    width="60"
                    height={segmentHeight - 2}
                    fill={selectedSegment === idx ? '#dbeafe' : '#e0f2fe'}
                    stroke={selectedSegment === idx ? '#2563eb' : '#7dd3fc'}
                    strokeWidth={selectedSegment === idx ? '2' : '1'}
                    rx="3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedSegment(idx)}
                  />
                  <text x={loopLeftX + 30} y={y + segmentHeight / 2 + 4} fontSize="11" fontWeight="bold" fill="#1e40af" textAnchor="middle">
                    {seg.descendingOsm}
                  </text>

                  {/* Water movement arrows in descending limb */}
                  <path
                    d={`M ${loopLeftX + 65} ${y + 5} L ${loopLeftX + 75} ${y + segmentHeight / 2 - 5}`}
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    markerEnd="url(#arrowblue)"
                  />

                  {/* Ascending limb (right side) - water impermeable, NaCl permeable (thick segment) */}
                  <rect
                    x={loopRightX}
                    y={y}
                    width="60"
                    height={segmentHeight - 2}
                    fill={selectedSegment === idx ? '#fef3c7' : '#fef9e7'}
                    stroke={selectedSegment === idx ? '#d97706' : '#fcd34d'}
                    strokeWidth={selectedSegment === idx ? '2' : '1'}
                    rx="3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedSegment(idx)}
                  />
                  <text x={loopRightX + 30} y={y + segmentHeight / 2 + 4} fontSize="11" fontWeight="bold" fill="#92400e" textAnchor="middle">
                    {seg.ascendingOsm}
                  </text>

                  {/* NaCl transport arrows in ascending limb (active transport) */}
                  <path
                    d={`M ${loopRightX - 15} ${y + segmentHeight / 2} L ${loopRightX - 5} ${y + 5}`}
                    stroke="#ef4444"
                    strokeWidth="2"
                    markerEnd="url(#arrowred)"
                  />

                  {/* Interstitial space (middle) */}
                  <rect
                    x={loopLeftX + 65}
                    y={y}
                    width={loopRightX - (loopLeftX + 65) - 5}
                    height={segmentHeight - 2}
                    fill="#f3e8ff"
                    stroke="#ddd6fe"
                    strokeWidth="1"
                    rx="2"
                  />
                  <text x={(loopLeftX + loopRightX) / 2} y={y + segmentHeight / 2 + 4} fontSize="10" fontWeight="bold" fill="#7c3aed" textAnchor="middle">
                    {seg.interstitialOsm}
                  </text>

                  {/* Vasa recta (simplified, flowing blood) */}
                  <circle cx={vasaLeftX} cy={y + segmentHeight / 2} r="8" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
                  <circle cx={vasaRightX} cy={y + segmentHeight / 2} r="8" fill="#fed7aa" stroke="#f97316" strokeWidth="2" />

                  {/* Labels for each segment */}
                  {idx === 0 && (
                    <>
                      <text x={loopLeftX + 30} y={loopTopY - 10} fontSize="11" fontWeight="bold" fill="#1e40af" textAnchor="middle">
                        Descending
                      </text>
                      <text x={loopRightX + 30} y={loopTopY - 10} fontSize="11" fontWeight="bold" fill="#92400e" textAnchor="middle">
                        Ascending
                      </text>
                      <text x={(loopLeftX + loopRightX) / 2} y={loopTopY - 10} fontSize="11" fontWeight="bold" fill="#7c3aed" textAnchor="middle">
                        Interstitium
                      </text>
                      <text x={vasaLeftX} y={loopTopY - 10} fontSize="10" fill="#dc2626" textAnchor="middle">
                        Vasa
                      </text>
                    </>
                  )}
                </g>
              );
            })}

            {/* Depth labels */}
            <text x="40" y={loopTopY + 10} fontSize="10" fill="#666">
              Cortex
            </text>
            <text x="30" y={loopBottomY - 20} fontSize="10" fill="#666">
              Medulla
            </text>

            {/* Gradient scale at bottom */}
            <rect x={loopLeftX} y={loopBottomY + 20} width="280" height="30" fill="url(#gradientScale)" stroke="#333" strokeWidth="1" rx="3" />
            <text x={loopLeftX} y={loopBottomY + 65} fontSize="10" fill="#666">
              300 mOsm
            </text>
            <text x={loopLeftX + 140} y={loopBottomY + 65} fontSize="10" fill="#666" textAnchor="middle">
              ~{Math.round(300 + (1200 - 300) * (step / 6))} mOsm
            </text>
            <text x={loopLeftX + 280} y={loopBottomY + 65} fontSize="10" fill="#666" textAnchor="end">
              1200 mOsm
            </text>

            {/* Legend and arrows */}
            <defs>
              <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#0ea5e9" />
              </marker>
              <marker id="arrowred" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
              </marker>
              <linearGradient id="gradientScale" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="50%" stopColor="#f3e8ff" />
                <stop offset="100%" stopColor="#fef9e7" />
              </linearGradient>
            </defs>

            {/* Legend */}
            <text x="50" y={loopBottomY + 120} fontSize="11" fontWeight="bold" fill="#333">
              Legend:
            </text>
            <line x1="50" y1={loopBottomY + 130} x2="70" y2={loopBottomY + 130} stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrowblue)" />
            <text x="80" y={loopBottomY + 135} fontSize="10" fill="#666">
              Water movement
            </text>

            <line x1="50" y1={loopBottomY + 150} x2="70" y2={loopBottomY + 150} stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowred)" />
            <text x="80" y={loopBottomY + 155} fontSize="10" fill="#666">
              Active NaCl transport
            </text>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Mechanism</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm mb-1">Descending Limb</p>
              <p className="text-xs text-gray-700">Water permeable, NaCl impermeable. Osmolarity ↑ as water leaves.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm mb-1">Thick Ascending Limb</p>
              <p className="text-xs text-gray-700">
                NaCl permeable (NKCC2), water impermeable. Osmolarity ↓ as NaCl is pumped out (active transport).
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm mb-1">Vasa Recta</p>
              <p className="text-xs text-gray-700">
                Hairpin capillaries that run parallel. Equilibrate osmolarity with interstitium.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-300 p-3 rounded">
              <p className="text-xs text-gray-700">
                <strong>Result:</strong> Progressive osmotic gradient building (300 → 1200 mOsm) driving water reabsorption in
                collecting duct.
              </p>
            </div>
          </div>

          {selectedSegment !== null && (
            <div className="mt-4 bg-blue-100 border-l-4 border-blue-600 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm mb-2">Segment {selectedSegment + 1}</p>
              <p className="text-xs text-gray-700">
                <strong>Descending:</strong> {segments[selectedSegment].descendingOsm} mOsm
              </p>
              <p className="text-xs text-gray-700">
                <strong>Ascending:</strong> {segments[selectedSegment].ascendingOsm} mOsm
              </p>
              <p className="text-xs text-gray-700">
                <strong>Interstitium:</strong> {segments[selectedSegment].interstitialOsm} mOsm
              </p>
            </div>
          )}
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

        <button
          onClick={() => {
            setStep(0);
            setIsPlaying(false);
          }}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>

        <span className="text-sm text-gray-700 font-semibold">
          Step: {step} / 6
        </span>
      </div>

      {/* Step Indicator */}
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {[0, 1, 2, 3, 4, 5, 6].map((s) => (
          <button
            key={s}
            onClick={() => {
              setStep(s);
              setIsPlaying(false);
            }}
            className={`w-10 h-10 rounded-full font-bold transition ${
              step === s ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Clinical Pearl */}
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
        <p className="text-sm text-gray-800">
          <strong>Countercurrent Mechanism:</strong> The Loop of Henle acts as a countercurrent multiplier, establishing a
          progressively increasing osmotic gradient from cortex (300 mOsm/kg) to medulla (1200 mOsm/kg). This gradient
          enables the collecting duct (when ADH is present) to produce concentrated urine up to 1200 mOsm/kg. Loop
          diuretics block NKCC2 in the thick ascending limb, destroying the gradient and causing significant diuresis.
        </p>
      </div>
    </div>
  );
}
