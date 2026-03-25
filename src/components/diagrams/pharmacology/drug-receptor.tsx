'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const DrugReceptorCurves: React.FC = () => {
  const [visibleCurves, setVisibleCurves] = useState({
    fullAgonist: true,
    partialAgonist: true,
    competitiveAntagonist: true,
    nonCompetitiveAntagonist: true,
  });
  const [hoveredCurve, setHoveredCurve] = useState<string | null>(null);

  const toggleCurve = (curve: keyof typeof visibleCurves) => {
    setVisibleCurves((prev) => ({
      ...prev,
      [curve]: !prev[curve],
    }));
  };

  const curves = [
    {
      id: 'fullAgonist',
      name: 'Full Agonist',
      color: '#10b981',
      description: 'Maximum efficacy (Emax = 100%), high potency',
      details: 'Binds receptor and produces full response. Examples: Isoproterenol (beta-2), Morphine (mu receptor)',
      path: 'M50,250 Q100,200 150,150 Q200,100 250,50 Q300,30 350,25 Q400,23 450,22',
    },
    {
      id: 'partialAgonist',
      name: 'Partial Agonist',
      color: '#f59e0b',
      description: 'Reduced efficacy (Emax = 50-70%), can antagonize full agonists',
      details: 'Produces submaximal response even at high concentrations. Examples: Buprenorphine (mu receptor), Pindolol (beta-blocker with intrinsic activity)',
      path: 'M50,250 Q100,210 150,170 Q200,140 250,120 Q300,110 350,105 Q400,103 450,102',
    },
    {
      id: 'competitiveAntagonist',
      name: 'Competitive Antagonist',
      color: '#ef4444',
      description: 'Right-shift curve (EC50 increases), same Emax',
      details: 'Competes with agonist for receptor binding. Surmountable by increasing agonist. Examples: Propranolol (beta-blocker), Atropine (muscarinic)',
      path: 'M100,250 Q150,210 200,170 Q250,140 300,120 Q350,110 400,105 Q450,103 500,102',
    },
    {
      id: 'nonCompetitiveAntagonist',
      name: 'Non-competitive Antagonist',
      color: '#8b5cf6',
      description: 'Down-shift curve (Emax decreases), EC50 unchanged',
      details: 'Binds irreversibly or allosterically. Cannot be overcome by increasing agonist. Examples: Phenoxybenzamine (alpha-blocker)',
      path: 'M50,250 Q100,220 150,190 Q200,160 250,140 Q300,130 350,128 Q400,127 450,127',
    },
  ];

  const concepts = [
    { term: 'Efficacy (Emax)', definition: 'Maximum response produced by a drug. Intrinsic property.', value: 'Measured as % of full agonist' },
    { term: 'Potency (EC50)', definition: 'Concentration at which drug produces 50% of Emax. Lower = more potent.', value: 'Determined by receptor affinity and drug concentration' },
    { term: 'Affinity', definition: 'Ability of drug to bind to receptor.', value: 'High affinity = low EC50' },
    { term: 'Therapeutic Index', definition: 'Ratio of toxic dose to therapeutic dose (TD50/ED50).', value: 'Higher = safer drug' },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Drug-Receptor Dose-Response Curves</h2>
        <p className="text-gray-600">Agonists vs Antagonists: Efficacy and Potency</p>
      </div>

      {/* Toggle buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(visibleCurves).map(([key, value]) => {
          const curve = curves.find((c) => c.id === key);
          if (!curve) return null;
          return (
            <button
              key={key}
              onClick={() => toggleCurve(key as keyof typeof visibleCurves)}
              className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                value
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onMouseEnter={() => setHoveredCurve(value ? key : null)}
              onMouseLeave={() => setHoveredCurve(null)}
            >
              {value ? <Eye size={16} /> : <EyeOff size={16} />}
              {curve.name}
            </button>
          );
        })}
      </div>

      {/* SVG Graph */}
      <div className="bg-gray-50 p-4 rounded border border-gray-300 mb-8 overflow-x-auto">
        <svg width="700" height="400" viewBox="0 0 700 400" className="mx-auto">
          {/* Background grid */}
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d1d5db" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="700" height="400" fill="url(#grid)" />

          {/* Axes */}
          <line x1="50" y1="350" x2="650" y2="350" stroke="#1f2937" strokeWidth="2" />
          <line x1="50" y1="350" x2="50" y2="20" stroke="#1f2937" strokeWidth="2" />

          {/* Axis labels */}
          <text x="620" y="375" fontSize="14" fill="#1f2937" fontWeight="bold">
            Log [Drug]
          </text>
          <text x="10" y="40" fontSize="14" fill="#1f2937" fontWeight="bold">
            % Response
          </text>

          {/* Y-axis ticks and labels */}
          {[0, 25, 50, 75, 100].map((value) => (
            <g key={`y-${value}`}>
              <line
                x1="45"
                y1={350 - (value / 100) * 330}
                x2="50"
                y2={350 - (value / 100) * 330}
                stroke="#1f2937"
                strokeWidth="1"
              />
              <text
                x="30"
                y={350 - (value / 100) * 330 + 5}
                fontSize="12"
                fill="#6b7280"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          ))}

          {/* X-axis ticks and labels */}
          {[-3, -2, -1, 0, 1, 2, 3].map((value) => {
            const x = 50 + ((value + 3) / 6) * 600;
            return (
              <g key={`x-${value}`}>
                <line
                  x1={x}
                  y1="350"
                  x2={x}
                  y2="355"
                  stroke="#1f2937"
                  strokeWidth="1"
                />
                <text x={x} y="375" fontSize="12" fill="#6b7280" textAnchor="middle">
                  {value}
                </text>
              </g>
            );
          })}

          {/* Curve paths */}
          {curves.map((curve) => (
            visibleCurves[curve.id as keyof typeof visibleCurves] && (
              <g key={curve.id}>
                <path
                  d={curve.path}
                  fill="none"
                  stroke={curve.color}
                  strokeWidth={hoveredCurve === curve.id ? 4 : 3}
                  opacity={hoveredCurve === null || hoveredCurve === curve.id ? 1 : 0.3}
                  className="transition-all cursor-pointer"
                  onMouseEnter={() => setHoveredCurve(curve.id)}
                  onMouseLeave={() => setHoveredCurve(null)}
                />
              </g>
            )
          ))}

          {/* EC50 reference lines (for full agonist) */}
          {visibleCurves.fullAgonist && (
            <>
              <line x1="300" y1="350" x2="300" y2="185" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              <line x1="50" y1="185" x2="300" y2="185" stroke="#10b981" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              <text x="310" y="190" fontSize="11" fill="#059669" fontWeight="bold">
                EC50
              </text>
            </>
          )}
        </svg>
      </div>

      {/* Curve descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {curves.map((curve) => (
          <button
            key={curve.id}
            onClick={() => toggleCurve(curve.id as keyof typeof visibleCurves)}
            className={`p-4 rounded border-2 text-left transition ${
              visibleCurves[curve.id as keyof typeof visibleCurves]
                ? `border-[${curve.color}] bg-opacity-10`
                : 'border-gray-300 bg-gray-50'
            }`}
            style={{
              borderColor: visibleCurves[curve.id as keyof typeof visibleCurves] ? curve.color : '#d1d5db',
              backgroundColor: visibleCurves[curve.id as keyof typeof visibleCurves]
                ? `${curve.color}15`
                : '#f9fafb',
            }}
          >
            <h4 className="font-bold text-gray-900">{curve.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{curve.description}</p>
            <p className="text-xs text-gray-700 mt-2 italic">{curve.details}</p>
          </button>
        ))}
      </div>

      {/* Key concepts */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded p-4 mb-8">
        <h3 className="font-bold text-blue-900 mb-4">Key Pharmacological Concepts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concepts.map((concept, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-blue-200">
              <p className="font-semibold text-gray-900 text-sm">{concept.term}</p>
              <p className="text-xs text-gray-700 mt-1">{concept.definition}</p>
              <p className="text-xs text-blue-700 font-semibold mt-1">{concept.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical application */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded p-4">
        <h3 className="font-bold text-yellow-900 mb-2">Clinical Application: Therapeutic Index</h3>
        <p className="text-sm text-gray-700 mb-3">
          The therapeutic index (TI) is the ratio of the toxic dose to the effective dose. A wider gap between
          effective and toxic doses (high TI) makes a drug safer. Understanding drug-receptor interactions helps
          optimize dosing and predict drug interactions.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-2 rounded border border-yellow-200">
            <p className="font-semibold text-gray-900">Wide TI (Safe)</p>
            <p className="text-gray-600">Penicillin, Acetaminophen</p>
          </div>
          <div className="bg-white p-2 rounded border border-yellow-200">
            <p className="font-semibold text-gray-900">Narrow TI (Careful dosing)</p>
            <p className="text-gray-600">Digoxin, Warfarin, Lithium</p>
          </div>
        </div>
      </div>
    </div>
  );
};
