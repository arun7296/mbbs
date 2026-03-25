'use client';

import { useState } from 'react';

interface CurveShift {
  id: 'normal' | 'rightShift' | 'leftShift';
  name: string;
  label: string;
  factors: string[];
  color: string;
}

const shifts: CurveShift[] = [
  {
    id: 'rightShift',
    name: 'Right Shift',
    label: 'Increased O₂ Release',
    factors: ['Acidosis (↓pH)', 'Hypercapnia (↑CO₂)', 'Fever (↑Temp)', '↑2,3-BPG'],
    color: '#ef4444',
  },
  {
    id: 'normal',
    name: 'Normal Curve',
    label: 'Standard conditions',
    factors: ['pH 7.40', 'PCO₂ 40 mmHg', 'Temp 37°C', 'Normal 2,3-BPG'],
    color: '#2563eb',
  },
  {
    id: 'leftShift',
    name: 'Left Shift',
    label: 'Increased O₂ Binding',
    factors: ['Alkalosis (↑pH)', 'Hypocapnia (↓CO₂)', 'Hypothermia (↓Temp)', 'Fetal Hb, CO'],
    color: '#7c3aed',
  },
];

// Generate sigmoid curve points
function generateCurvePoints(shiftType: 'normal' | 'rightShift' | 'leftShift'): Array<[number, number]> {
  const points: Array<[number, number]> = [];
  const p50Shifts: Record<string, number> = {
    rightShift: 30, // P50 shifts right to 30
    normal: 26.6, // Standard P50
    leftShift: 20, // P50 shifts left to 20
  };

  const p50 = p50Shifts[shiftType];

  // Hill equation for oxygen binding (n=2.8 for normal)
  for (let pO2 = 0; pO2 <= 100; pO2 += 2) {
    const n = 2.8;
    const saturation = (100 * Math.pow(pO2 / p50, n)) / (1 + Math.pow(pO2 / p50, n));

    // SVG coordinates: X from 50 to 750 (0-100 mmHg), Y from 50 to 400 (100-0%)
    const x = 50 + (pO2 / 100) * 700;
    const y = 400 - (saturation / 100) * 350;
    points.push([x, y]);
  }

  return points;
}

export function OxygenDissociationCurve() {
  const [activeShifts, setActiveShifts] = useState<Set<'rightShift' | 'leftShift'>>(new Set());
  const [selectedPoint, setSelectedPoint] = useState<'arterial' | 'venous' | null>(null);

  const toggleShift = (shift: 'rightShift' | 'leftShift') => {
    const newShifts = new Set(activeShifts);
    if (newShifts.has(shift)) {
      newShifts.delete(shift);
    } else {
      newShifts.add(shift);
    }
    setActiveShifts(newShifts);
  };

  const normalCurve = generateCurvePoints('normal');
  const rightShiftCurve = activeShifts.has('rightShift') ? generateCurvePoints('rightShift') : null;
  const leftShiftCurve = activeShifts.has('leftShift') ? generateCurvePoints('leftShift') : null;

  const normalPath = normalCurve.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const rightShiftPath = rightShiftCurve?.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const leftShiftPath = leftShiftCurve?.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');

  // Key points
  const arterialX = 50 + (100 / 100) * 700; // 100 mmHg
  const arterialY = 400 - (98 / 100) * 350; // 98% saturation
  const venousX = 50 + (40 / 100) * 700; // 40 mmHg
  const venousY = 400 - (75 / 100) * 350; // 75% saturation
  const p50X = 50 + (26.6 / 100) * 700;
  const p50Y = 400 - (50 / 100) * 350;

  const selectedInfo = {
    arterial: {
      title: 'Arterial Point',
      pO2: '~100 mmHg',
      sat: '~98%',
      desc: 'Lung oxygenation; normal arterial oxygen',
    },
    venous: {
      title: 'Venous Point',
      pO2: '~40 mmHg',
      sat: '~75%',
      desc: 'Mixed venous return; oxygen available for tissues',
    },
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Oxygen-Hemoglobin Dissociation Curve</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
        {/* Graph */}
        <div className="lg:col-span-2">
          <svg viewBox="0 0 800 500" className="w-full border border-gray-300 rounded bg-white">
            {/* Grid */}
            {[0, 20, 40, 60, 80, 100].map((pO2) => {
              const x = 50 + (pO2 / 100) * 700;
              return (
                <g key={`v-${pO2}`}>
                  <line x1={x} y1="50" x2={x} y2="400" stroke="#e5e7eb" strokeWidth="1" />
                  <text x={x} y="425" fontSize="12" fill="gray" textAnchor="middle">
                    {pO2}
                  </text>
                </g>
              );
            })}

            {[0, 20, 40, 60, 80, 100].map((sat) => {
              const y = 400 - (sat / 100) * 350;
              return (
                <g key={`h-${sat}`}>
                  <line x1="50" y1={y} x2="750" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                  <text x="35" y={y + 4} fontSize="12" fill="gray" textAnchor="end">
                    {sat}%
                  </text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1="50" y1="50" x2="50" y2="400" stroke="#333" strokeWidth="2" />
            <line x1="50" y1="400" x2="750" y2="400" stroke="#333" strokeWidth="2" />

            {/* Axis labels */}
            <text x="15" y="25" fontSize="14" fontWeight="bold" fill="#333">
              % O₂ Saturation
            </text>
            <text x="750" y="450" fontSize="14" fontWeight="bold" fill="#333" textAnchor="end">
              PO₂ (mmHg)
            </text>

            {/* Curves */}
            <path d={normalPath} stroke="#2563eb" strokeWidth="3" fill="none" />
            {rightShiftPath && <path d={rightShiftPath} stroke="#ef4444" strokeWidth="3" fill="none" strokeDasharray="5,5" />}
            {leftShiftPath && <path d={leftShiftPath} stroke="#7c3aed" strokeWidth="3" fill="none" strokeDasharray="5,5" />}

            {/* Key points */}
            {/* P50 point */}
            <circle cx={p50X} cy={p50Y} r="6" fill="#f59e0b" stroke="#333" strokeWidth="2" />
            <text x={p50X} y={p50Y - 15} fontSize="12" fontWeight="bold" fill="#f59e0b" textAnchor="middle">
              P50
            </text>

            {/* Arterial point */}
            <circle
              cx={arterialX}
              cy={arterialY}
              r="8"
              fill={selectedPoint === 'arterial' ? '#10b981' : '#d1fae5'}
              stroke="#333"
              strokeWidth="2"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedPoint(selectedPoint === 'arterial' ? null : 'arterial')}
            />
            <text x={arterialX} y={arterialY - 20} fontSize="12" fontWeight="bold" fill="#059669" textAnchor="middle">
              Arterial
            </text>

            {/* Venous point */}
            <circle
              cx={venousX}
              cy={venousY}
              r="8"
              fill={selectedPoint === 'venous' ? '#8b5cf6' : '#ede9fe'}
              stroke="#333"
              strokeWidth="2"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedPoint(selectedPoint === 'venous' ? null : 'venous')}
            />
            <text x={venousX} y={venousY + 25} fontSize="12" fontWeight="bold" fill="#7c3aed" textAnchor="middle">
              Venous
            </text>
          </svg>
        </div>

        {/* Controls Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Bohr Effect</h3>

          <div className="space-y-3 mb-6">
            {shifts.map((shift) => (
              <div key={shift.id} className="flex items-start gap-3">
                {shift.id !== 'normal' && (
                  <input
                    type="checkbox"
                    checked={activeShifts.has(shift.id as 'rightShift' | 'leftShift')}
                    onChange={() => toggleShift(shift.id as 'rightShift' | 'leftShift')}
                    className="mt-1 cursor-pointer"
                  />
                )}
                {shift.id === 'normal' && <div className="w-6 h-6 rounded border-2 border-gray-400" />}

                <div>
                  <p className="font-bold text-gray-800" style={{ color: shift.color }}>
                    {shift.name}
                  </p>
                  <p className="text-xs text-gray-600">{shift.label}</p>
                  <div className="mt-2 space-y-1">
                    {shift.factors.map((factor, idx) => (
                      <p key={idx} className="text-xs text-gray-700">
                        • {factor}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedPoint && selectedInfo[selectedPoint] && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-bold text-gray-800 mb-2">{selectedInfo[selectedPoint].title}</p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>PO₂:</strong> {selectedInfo[selectedPoint].pO2}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Saturation:</strong> {selectedInfo[selectedPoint].sat}
              </p>
              <p className="text-sm text-gray-700">{selectedInfo[selectedPoint].desc}</p>
            </div>
          )}
        </div>
      </div>

      {/* Clinical Note */}
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
        <p className="text-sm text-gray-800">
          <strong>Clinical Pearl:</strong> The sigmoid shape reflects cooperative binding of oxygen to hemoglobin. The P50
          (partial pressure at 50% saturation) is ~26.6 mmHg at normal conditions and shifts right with acidosis,
          hypercapnia, fever, and increased 2,3-BPG, facilitating oxygen release to tissues.
        </p>
      </div>
    </div>
  );
}
