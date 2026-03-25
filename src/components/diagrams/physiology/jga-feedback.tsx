'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface JGAComponent {
  id: string;
  name: string;
  fullName: string;
  description: string;
  location: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

const components: JGAComponent[] = [
  {
    id: 'afferent',
    name: 'Afferent Arteriole',
    fullName: 'Afferent Arteriole (enters glomerulus)',
    description: 'Supplies blood to the glomerulus. Pressure-sensitive receptors detect GFR.',
    location: 'Vascular pole',
    x: 50,
    y: 100,
    width: 100,
    height: 80,
    color: '#ef4444',
  },
  {
    id: 'glomerulus',
    name: 'Glomerulus',
    fullName: 'Capillary Network (Glomerulus)',
    description: 'Site of ultrafiltration. Creates Bowman\'s capsule pressure.',
    location: 'Center',
    x: 200,
    y: 80,
    width: 150,
    height: 120,
    color: '#f97316',
  },
  {
    id: 'efferent',
    name: 'Efferent Arteriole',
    fullName: 'Efferent Arteriole (exits glomerulus)',
    description: 'Drains blood from glomerulus. Controls hydrostatic pressure.',
    location: 'Vascular pole',
    x: 400,
    y: 100,
    width: 100,
    height: 80,
    color: '#3b82f6',
  },
  {
    id: 'maculaDensa',
    name: 'Macula Densa',
    fullName: 'Macula Densa (part of thick ascending limb)',
    description: 'Senses NaCl concentration in tubular fluid. Triggers feedback.',
    location: 'Tubular component',
    x: 280,
    y: 250,
    width: 120,
    height: 70,
    color: '#8b5cf6',
  },
  {
    id: 'juxta',
    name: 'Juxtaglomerular Cells',
    fullName: 'Juxtaglomerular (JG) Cells',
    description: 'Modified smooth muscle cells in afferent arteriole. Secrete renin.',
    location: 'Afferent arteriole wall',
    x: 50,
    y: 220,
    width: 120,
    height: 70,
    color: '#06b6d4',
  },
];

export function JGAFeedbackDiagram() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const selected = components.find((c) => c.id === selectedComponent);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Juxtaglomerular Apparatus (JGA) - Tubuloglomerular Feedback</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
        {/* Diagram */}
        <div className="lg:col-span-2 bg-gray-50 rounded-lg p-4">
          <svg viewBox="0 0 600 400" className="w-full border border-gray-300 rounded bg-white">
            {/* Bowman's Capsule (outer circle) */}
            <circle cx="275" cy="140" r="120" fill="none" stroke="#ddd" strokeWidth="2" strokeDasharray="5,5" />

            {/* Afferent Arteriole */}
            <rect
              x={components[0].x}
              y={components[0].y}
              width={components[0].width}
              height={components[0].height}
              fill={selectedComponent === 'afferent' ? components[0].color : '#ffe4e6'}
              stroke={selectedComponent === 'afferent' ? '#000' : '#999'}
              strokeWidth={selectedComponent === 'afferent' ? '3' : '2'}
              rx="4"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedComponent('afferent')}
            />
            <text x={components[0].x + 50} y={components[0].y + 45} fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">
              Afferent
            </text>

            {/* JG Cells box on afferent */}
            <rect
              x={components[4].x}
              y={components[4].y}
              width={components[4].width}
              height={components[4].height}
              fill={selectedComponent === 'juxta' ? components[4].color : '#e0f2fe'}
              stroke={selectedComponent === 'juxta' ? '#000' : '#999'}
              strokeWidth={selectedComponent === 'juxta' ? '3' : '2'}
              rx="4"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedComponent('juxta')}
            />
            <text x={components[4].x + 60} y={components[4].y + 25} fontSize="11" fontWeight="bold" textAnchor="middle" fill="white">
              JG Cells
            </text>
            <text x={components[4].x + 60} y={components[4].y + 42} fontSize="10" textAnchor="middle" fill="white">
              Renin
            </text>

            {/* Glomerulus (capillary network) */}
            <ellipse
              cx={components[1].x + 75}
              cy={components[1].y + 60}
              rx={70}
              ry={45}
              fill={selectedComponent === 'glomerulus' ? '#fed7aa' : '#ffefd5'}
              stroke={selectedComponent === 'glomerulus' ? '#000' : '#999'}
              strokeWidth={selectedComponent === 'glomerulus' ? '3' : '2'}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedComponent('glomerulus')}
            />
            <text x={components[1].x + 75} y={components[1].y + 60} fontSize="13" fontWeight="bold" textAnchor="middle" fill="#333">
              Glomerulus
            </text>

            {/* Efferent Arteriole */}
            <rect
              x={components[2].x}
              y={components[2].y}
              width={components[2].width}
              height={components[2].height}
              fill={selectedComponent === 'efferent' ? components[2].color : '#dbeafe'}
              stroke={selectedComponent === 'efferent' ? '#000' : '#999'}
              strokeWidth={selectedComponent === 'efferent' ? '3' : '2'}
              rx="4"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedComponent('efferent')}
            />
            <text x={components[2].x + 50} y={components[2].y + 45} fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">
              Efferent
            </text>

            {/* Proximal Convoluted Tubule (PCT) */}
            <path d="M 150 250 Q 180 260 220 250 L 240 260" fill="none" stroke="#d4d4d8" strokeWidth="6" />

            {/* Descending Limb */}
            <path d="M 240 260 L 250 300" fill="none" stroke="#d4d4d8" strokeWidth="6" />

            {/* Thick Ascending Limb (TAL) */}
            <path d="M 250 300 L 270 250" fill="none" stroke="#d4d4d8" strokeWidth="8" />

            {/* Macula Densa */}
            <rect
              x={components[3].x}
              y={components[3].y}
              width={components[3].width}
              height={components[3].height}
              fill={selectedComponent === 'maculaDensa' ? '#c084fc' : '#e9d5ff'}
              stroke={selectedComponent === 'maculaDensa' ? '#000' : '#999'}
              strokeWidth={selectedComponent === 'maculaDensa' ? '3' : '2'}
              rx="4"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedComponent('maculaDensa')}
            />
            <text x={components[3].x + 60} y={components[3].y + 25} fontSize="11" fontWeight="bold" textAnchor="middle" fill="white">
              Macula
            </text>
            <text x={components[3].x + 60} y={components[3].y + 42} fontSize="11" fontWeight="bold" textAnchor="middle" fill="white">
              Densa
            </text>

            {/* Feedback arrow from macula densa to JG cells */}
            <defs>
              <marker id="arrowhead-feedback" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill={showFeedback ? '#22c55e' : '#999'} />
              </marker>
              <marker id="arrowhead-renin" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill={showFeedback ? '#ef4444' : '#ccc'} />
              </marker>
            </defs>

            {/* Feedback signal arrows */}
            <path
              d="M 280 250 Q 150 230 120 235"
              fill="none"
              stroke={showFeedback ? '#22c55e' : '#ccc'}
              strokeWidth={showFeedback ? '2' : '1.5'}
              markerEnd="url(#arrowhead-feedback)"
              strokeDasharray="3,3"
            />
            <text x="180" y="225" fontSize="10" fill={showFeedback ? '#22c55e' : '#999'} fontStyle="italic">
              Feedback
            </text>

            {/* Renin release arrow */}
            <path
              d="M 110 220 Q 140 180 160 160"
              fill="none"
              stroke={showFeedback ? '#ef4444' : '#ccc'}
              strokeWidth={showFeedback ? '2.5' : '1.5'}
              markerEnd="url(#arrowhead-renin)"
            />
            <text x="145" y="190" fontSize="10" fill={showFeedback ? '#ef4444' : '#999'} fontWeight="bold">
              Renin↑
            </text>

            {/* Blood flow indicators */}
            <text x="75" y="80" fontSize="10" fill="#999">
              Blood in
            </text>
            <text x="435" y="80" fontSize="10" fill="#999">
              Blood out
            </text>

            {/* Legend */}
            <text x="10" y="370" fontSize="11" fontWeight="bold" fill="#333">
              Click components to learn more
            </text>
          </svg>

          <button
            onClick={() => setShowFeedback(!showFeedback)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showFeedback ? 'Hide' : 'Show'} Feedback Mechanism
          </button>
        </div>

        {/* Info Panel */}
        <div className="bg-gray-50 rounded-lg p-6">
          {selected ? (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{selected.fullName}</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Location:</strong> {selected.location}
              </p>

              <div className="bg-white rounded-lg p-4 border-l-4 mb-4" style={{ borderColor: selected.color }}>
                <p className="text-sm text-gray-700">{selected.description}</p>
              </div>

              {selected.id === 'maculaDensa' && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded text-sm mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Sensing Mechanism:</p>
                  <p className="text-gray-700">Detects ↓NaCl in tubular fluid (or ↓GFR) via Na-K-2Cl cotransporter (NKCC2). Triggers paracrine signals and ATP release.</p>
                </div>
              )}

              {selected.id === 'juxta' && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded text-sm mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Response:</p>
                  <p className="text-gray-700">Release renin into blood. Initiates RAAS cascade: Renin → Ang I → ACE → Ang II. Results in vasoconstriction, aldosterone release, and GFR restoration.</p>
                </div>
              )}

              {selected.id === 'afferent' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Function:</p>
                  <p className="text-gray-700">Maintains glomerular pressure. Contains baroreceptors that sense pressure changes and trigger renin release.</p>
                </div>
              )}

              {selected.id === 'glomerulus' && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded text-sm mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Function:</p>
                  <p className="text-gray-700">Ultrafiltration of blood. Creates glomerular filtrate (~180 L/day). Surrounded by Bowman's capsule which receives filtrate.</p>
                </div>
              )}

              {selected.id === 'efferent' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Function:</p>
                  <p className="text-gray-700">Exits glomerulus. Narrower than afferent arteriole, creating resistance. Helps maintain high glomerular pressure for filtration.</p>
                </div>
              )}

              <div className="bg-purple-50 border border-purple-300 p-3 rounded text-sm">
                <p className="font-semibold text-gray-800 mb-1">Clinical Relevance:</p>
                <p className="text-gray-700 text-xs">
                  {selected.id === 'maculaDensa' && 'Dysfunction impairs GFR regulation. Affects sodium balance and hypertension.'}
                  {selected.id === 'juxta' && 'Excessive renin release seen in renovascular hypertension and pheochromocytoma.'}
                  {selected.id === 'afferent' && 'NSAIDs affect prostaglandins, reducing renin secretion and renal perfusion.'}
                  {selected.id === 'glomerulus' && 'Damage in diabetes and hypertension leads to proteinuria and chronic kidney disease.'}
                  {selected.id === 'efferent' && 'ACE inhibitors dilate efferent arteriole, reducing glomerular pressure (beneficial in diabetes).'}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p className="text-lg font-semibold mb-2">Click a component to learn more</p>
              <p className="text-sm">The JGA regulates glomerular filtration rate and blood pressure through the tubuloglomerular feedback mechanism.</p>
            </div>
          )}
        </div>
      </div>

      {/* Feedback Mechanism Details */}
      {showFeedback && (
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Tubuloglomerular Feedback Mechanism</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-800">GFR increases or blood volume rises</p>
                <p className="text-sm text-gray-700">More tubular fluid flows past the macula densa</p>
              </div>
            </div>

            <ChevronRight className="text-blue-600 ml-4" size={20} />

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-800">Macula densa senses ↑NaCl concentration</p>
                <p className="text-sm text-gray-700">NKCC2 cotransporter increases Na-K-2Cl uptake; intracellular Ca2+ rises</p>
              </div>
            </div>

            <ChevronRight className="text-blue-600 ml-4" size={20} />

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-800">ATP released; adenosine generation</p>
                <p className="text-sm text-gray-700">Paracrine signaling between macula densa and JG cells</p>
              </div>
            </div>

            <ChevronRight className="text-blue-600 ml-4" size={20} />

            <div className="flex items-start gap-4">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <p className="font-semibold text-gray-800">JG cells decrease renin release</p>
                <p className="text-sm text-gray-700">Afferent arteriole vasoconstricts; GFR decreases back to normal</p>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-3 mt-4 text-sm text-gray-700">
              <p>
                <strong>Result:</strong> Negative feedback loop maintains stable GFR despite changes in blood pressure. This mechanism responds within seconds and is called short-loop feedback.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
