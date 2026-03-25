'use client';

import React, { useState } from 'react';

interface DNAComponent {
  id: number;
  name: string;
  function: string;
  location: 'fork' | 'both' | 'leading' | 'lagging';
  inhibitors?: string[];
  essentiality: 'essential' | 'critical' | 'regulatory';
  clinical: string;
  structure?: string;
}

const components: DNAComponent[] = [
  {
    id: 1,
    name: 'Helicase (DnaB)',
    function: 'Unwinds double helix by breaking hydrogen bonds between base pairs',
    location: 'fork',
    inhibitors: ['Netropsin', 'Actinomycin D'],
    essentiality: 'essential',
    clinical: 'Required for DNA access. Helicase mutations → Werner syndrome (premature aging)',
    structure: 'Hexameric ATPase'
  },
  {
    id: 2,
    name: 'Single-Strand Binding Proteins (SSB)',
    function: 'Coat single strands to prevent re-annealing and protect from nucleases',
    location: 'both',
    essentiality: 'critical',
    clinical: 'Mutations rare but can cause genomic instability',
    structure: 'Oligomeric DNA-binding proteins'
  },
  {
    id: 3,
    name: 'Primase',
    function: 'Synthesizes short RNA primers (10-12 nucleotides) to initiate synthesis',
    location: 'both',
    essentiality: 'essential',
    clinical: 'DnaG mutations affect replication initiation',
    structure: 'RNA polymerase-like enzyme'
  },
  {
    id: 4,
    name: 'DNA Polymerase III (Core)',
    function: 'Main replicase: synthesizes DNA 5\'→3\' direction with 3\'→5\' exonuclease activity',
    location: 'both',
    inhibitors: ['Dideoxyribonucleotides (ddNTPs)', 'Azidothymidine (AZT)'],
    essentiality: 'essential',
    clinical: 'Most common target for antiviral drugs (HIV, HBV). AZT → inhibits RT',
    structure: '10 subunits, holoenzyme complex'
  },
  {
    id: 5,
    name: 'DNA Polymerase I',
    function: 'Removes RNA primers and fills gaps; 5\'→3\' exonuclease and polymerase',
    location: 'lagging',
    essentiality: 'critical',
    clinical: 'Nick translation. Deficiency affects lagging strand synthesis',
    structure: '103 kDa, three catalytic domains'
  },
  {
    id: 6,
    name: 'DNA Ligase',
    function: 'Seals 3\'-OH to 5\'-PO4 nicks between Okazaki fragments on lagging strand',
    location: 'lagging',
    inhibitors: ['Nicotinamide (NAD+ inhibitor)'],
    essentiality: 'essential',
    clinical: 'Mutations → DNA ligase deficiency (rare). Affects both replication and repair',
    structure: 'ATP/NAD+ dependent'
  },
  {
    id: 7,
    name: 'Topoisomerase II (DNA Gyrase)',
    function: 'Relieves topological stress by transient cutting and rejoining DNA strands',
    location: 'fork',
    inhibitors: ['Fluoroquinolones', 'Etoposide', 'Doxorubicin'],
    essentiality: 'critical',
    clinical: 'Fluoroquinolones (cipro): antibiotics targeting bacterial Topo II. Etoposide: chemotherapy',
    structure: 'Creates transient double-strand breaks'
  },
  {
    id: 8,
    name: 'Clamp Loader Complex (γ-complex)',
    function: 'Loads β-clamp onto primer-template junction for rapid polymerase loading',
    location: 'both',
    essentiality: 'critical',
    clinical: 'Involved in coordinating leading/lagging strand synthesis',
    structure: '5 core subunits'
  }
];

export function DNAReplicationDiagram() {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);
  const [showOkazaki, setShowOkazaki] = useState(true);

  const activeData = activeComponent ? components.find(c => c.id === activeComponent) : null;

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 flex flex-col gap-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">DNA Replication Fork</h2>
        <p className="text-gray-600">Semi-conservative replication: leading and lagging strand synthesis</p>
      </div>

      {/* Main diagram area */}
      <div className="flex gap-8 flex-1 min-h-0">
        {/* SVG Diagram */}
        <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-md overflow-auto p-4">
          <svg viewBox="0 0 600 500" className="w-full max-w-lg">
            {/* Parent DNA strands (entering from top) */}
            <g>
              {/* Top-left strand (3' to 5') */}
              <line x1="100" y1="20" x2="250" y2="150" stroke="#1e40af" strokeWidth="3" />
              <text x="70" y="80" className="text-xs font-bold fill-blue-900">3\'</text>
              <text x="260" y="155" className="text-xs font-bold fill-blue-900">5\'</text>

              {/* Top-right strand (5' to 3') */}
              <line x1="500" y1="20" x2="350" y2="150" stroke="#1e40af" strokeWidth="3" />
              <text x="520" y="80" className="text-xs font-bold fill-blue-900">5\'</text>
              <text x="340" y="155" className="text-xs font-bold fill-blue-900">3\'</text>

              {/* Replication fork indicator */}
              <text x="300" y="140" textAnchor="middle" className="text-sm font-bold fill-red-600 bg-yellow-200">
                Fork →
              </text>
            </g>

            {/* Helicase */}
            <g onClick={() => setActiveComponent(1)} style={{ cursor: 'pointer' }}>
              <circle cx="300" cy="120" r="20" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
              <text x="300" y="127" textAnchor="middle" className="text-xs font-bold fill-gray-800">
                Hel
              </text>
            </g>

            {/* Single-strand binding proteins */}
            <g>
              {/* Left strand SSB */}
              {[130, 160, 190].map((x, idx) => (
                <g key={`ssb-l-${idx}`} onClick={() => setActiveComponent(2)} style={{ cursor: 'pointer' }}>
                  <circle cx={x} cy={220 + idx*20} r="8" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
                  <text x={x} y={223 + idx*20} textAnchor="middle" className="text-xs font-bold fill-green-900">
                    SSB
                  </text>
                </g>
              ))}

              {/* Right strand SSB */}
              {[470, 440, 410].map((x, idx) => (
                <g key={`ssb-r-${idx}`} onClick={() => setActiveComponent(2)} style={{ cursor: 'pointer' }}>
                  <circle cx={x} cy={220 + idx*20} r="8" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
                  <text x={x} y={223 + idx*20} textAnchor="middle" className="text-xs font-bold fill-green-900">
                    SSB
                  </text>
                </g>
              ))}
            </g>

            {/* LEADING STRAND (3' → 5' template, synthesized 5' → 3') */}
            <g>
              {/* Primer */}
              <g onClick={() => setActiveComponent(3)} style={{ cursor: 'pointer' }}>
                <rect x="280" y="250" width="60" height="20" fill="#fecaca" stroke="#dc2626" strokeWidth="1" />
                <text x="310" y="263" textAnchor="middle" className="text-xs font-bold fill-red-900">
                  Primer
                </text>
              </g>

              {/* Polymerase III on leading */}
              <g onClick={() => setActiveComponent(4)} style={{ cursor: 'pointer' }}>
                <polygon points="320,280 360,280 380,310 300,310" fill="#bfdbfe" stroke="#0284c7" strokeWidth="2" />
                <text x="340" y="298" textAnchor="middle" className="text-xs font-bold fill-blue-900">
                  Pol III
                </text>
              </g>

              {/* Direction arrow */}
              <path d="M 380 300 L 450 300" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrowBlue)" />
              <text x="415" y="290" className="text-xs font-bold fill-blue-900">5\'→3\'</text>

              {/* Clamp loader */}
              <g onClick={() => setActiveComponent(8)} style={{ cursor: 'pointer' }}>
                <rect x="450" y="285" width="40" height="30" rx="3" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
                <text x="470" y="303" textAnchor="middle" className="text-xs font-bold fill-indigo-900">
                  β-clamp
                </text>
              </g>

              {/* Strand label */}
              <text x="550" y="300" className="text-xs font-bold fill-blue-900">LEADING</text>
            </g>

            {/* LAGGING STRAND (5' → 3' template, synthesized 5' → 3' in fragments) */}
            <g>
              {/* Multiple Okazaki fragments */}
              {showOkazaki && (
                <>
                  {[340, 380, 420].map((y, idx) => (
                    <g key={`okazaki-${idx}`}>
                      {/* Primer for each fragment */}
                      <g onClick={() => setActiveComponent(3)} style={{ cursor: 'pointer' }}>
                        <rect x="150" y={y - 10} width="40" height="15" fill="#fecaca" stroke="#dc2626" strokeWidth="1" />
                        <text x="170" y={y + 0} textAnchor="middle" className="text-xs fill-red-900">
                          P
                        </text>
                      </g>

                      {/* Pol III on lagging fragment */}
                      <g onClick={() => setActiveComponent(4)} style={{ cursor: 'pointer' }}>
                        <polygon
                          points={`200,${y - 10} 240,${y - 10} 250,${y + 10} 190,${y + 10}`}
                          fill="#bfdbfe"
                          stroke="#0284c7"
                          strokeWidth="2"
                        />
                        <text x="220" y={y + 2} textAnchor="middle" className="text-xs fill-blue-900">
                          P3
                        </text>
                      </g>

                      {/* Fragment direction */}
                      <path d={`M 250 ${y} L 280 ${y}`} stroke="#0284c7" strokeWidth="1.5" />
                    </g>
                  ))}
                </>
              )}

              {/* Ligase sealing nicks */}
              <g onClick={() => setActiveComponent(6)} style={{ cursor: 'pointer' }}>
                <circle cx="100" cy="380" r="12" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2" />
                <text x="100" y="385" textAnchor="middle" className="text-xs font-bold fill-indigo-900">
                  Lig
                </text>
              </g>

              {/* Pol I removing primers and filling gaps */}
              <g onClick={() => setActiveComponent(5)} style={{ cursor: 'pointer' }}>
                <rect x="100" y="410" width="50" height="25" rx="4" fill="#fed7aa" stroke="#d97706" strokeWidth="2" />
                <text x="125" y="427" textAnchor="middle" className="text-xs font-bold fill-amber-900">
                  Pol I
                </text>
              </g>

              {/* Topoisomerase */}
              <g onClick={() => setActiveComponent(7)} style={{ cursor: 'pointer' }}>
                <rect x="450" y="380" width="50" height="30" rx="4" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
                <text x="475" y="398" textAnchor="middle" className="text-xs font-bold fill-purple-900">
                  Topo II
                </text>
              </g>

              {/* Strand label */}
              <text x="530" y="380" className="text-xs font-bold fill-blue-900">LAGGING</text>
            </g>

            {/* Direction and orientation labels */}
            <g>
              {/* Coordinate arrows */}
              <text x="300" y="30" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                DNA Replication Fork (Bidirectional)
              </text>

              <text x="50" y="450" className="text-xs font-semibold fill-gray-700">
                Legend: Primer = RNA, P3 = Polymerase III, P1 = Polymerase I
              </text>
            </g>

            {/* Arrow markers */}
            <defs>
              <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#0284c7" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="w-80 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 overflow-y-auto">
          {activeData ? (
            <>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {activeData.name}
                </h3>
                <p className="text-xs text-gray-600 capitalize">
                  {activeData.location.replace(/_/g, ' ')}
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-semibold text-blue-900">FUNCTION</p>
                  <p className="text-sm text-blue-800">{activeData.function}</p>
                </div>

                {activeData.structure && (
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-xs font-semibold text-purple-900">STRUCTURE</p>
                    <p className="text-sm text-purple-800">{activeData.structure}</p>
                  </div>
                )}

                {activeData.inhibitors && activeData.inhibitors.length > 0 && (
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-xs font-semibold text-red-900">INHIBITORS/DRUGS</p>
                    <p className="text-sm text-red-800">
                      {activeData.inhibitors.join(', ')}
                    </p>
                  </div>
                )}

                <div className={`p-3 rounded ${
                  activeData.essentiality === 'essential'
                    ? 'bg-red-50'
                    : activeData.essentiality === 'critical'
                    ? 'bg-orange-50'
                    : 'bg-yellow-50'
                }`}>
                  <p className={`text-xs font-semibold ${
                    activeData.essentiality === 'essential'
                      ? 'text-red-900'
                      : activeData.essentiality === 'critical'
                      ? 'text-orange-900'
                      : 'text-yellow-900'
                  }`}>
                    ESSENTIALITY: {activeData.essentiality.toUpperCase()}
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-semibold text-green-900">⚕️ CLINICAL SIGNIFICANCE</p>
                  <p className="text-sm text-green-800">{activeData.clinical}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p className="text-center text-sm">Click on components to view details and drug targets</p>
            </div>
          )}

          {/* Options */}
          <div className="border-t pt-4 mt-4">
            <button
              onClick={() => setShowOkazaki(!showOkazaki)}
              className="w-full py-2 px-4 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold rounded transition text-sm"
            >
              {showOkazaki ? '🔒 Hide Okazaki' : '🔓 Show Okazaki'}
            </button>
          </div>
        </div>
      </div>

      {/* Key concepts panel */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-3">Replication Key Concepts</h3>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-2 rounded">
            <p className="font-semibold text-blue-800">Semi-Conservative</p>
            <p className="text-gray-700">Each strand serves as template for new strand</p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="font-semibold text-blue-800">5\'→3\' Synthesis</p>
            <p className="text-gray-700">All DNA polymerases synthesize in this direction only</p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="font-semibold text-blue-800">Okazaki Fragments</p>
            <p className="text-gray-700">1000-2000 nt in eukaryotes; lagging strand</p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="font-semibold text-blue-800">Primer Removal</p>
            <p className="text-gray-700">Pol I removes RNA, fills with DNA; Ligase seals</p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="font-semibold text-blue-800">Speed</p>
            <p className="text-gray-700">~1000 nt/sec (prokaryotes); ~50 nt/sec (eukaryotes)</p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="font-semibold text-blue-800">Proofreading</p>
            <p className="text-gray-700">3\'→5\' exonuclease activity; error rate 10⁻¹⁰</p>
          </div>
        </div>
      </div>
    </div>
  );
}
