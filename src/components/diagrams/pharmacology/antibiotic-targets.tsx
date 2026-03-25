'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const AntibioticTargets: React.FC = () => {
  const [expandedTarget, setExpandedTarget] = useState<string | null>(null);

  const targets = [
    {
      id: 'cellWall',
      name: 'Cell Wall',
      color: 'bg-purple-100 border-purple-500',
      position: 'Cell wall synthesis',
      mechanism: 'Inhibits peptidoglycan cross-linking',
      drugs: [
        { name: 'Penicillins', resistance: 'Beta-lactamase production (ESBL, AmpC)', example: 'Amoxicillin, Ampicillin' },
        { name: 'Cephalosporins', resistance: 'Beta-lactamase, altered PBPs', example: '1st-4th generation; Ceftriaxone' },
        { name: 'Carbapenems', resistance: 'Carbapenemase production', example: 'Imipenem, Meropenem (broad spectrum)' },
        { name: 'Vancomycin', resistance: 'Vancomycin-resistant enterococci (VRE)', example: 'Used for MRSA, resistant strains' },
        { name: 'Bacitracin', resistance: 'Rare in clinical practice', example: 'Topical only' },
      ],
    },
    {
      id: '30sRibosome',
      name: '30S Ribosome',
      color: 'bg-blue-100 border-blue-500',
      position: 'Protein synthesis (30S subunit)',
      mechanism: 'Inhibits initiation and elongation of translation',
      drugs: [
        {
          name: 'Aminoglycosides',
          resistance: 'Enzymatic inactivation, ribosomal methylation',
          example: 'Gentamicin, Tobramycin, Amikacin (aerobic Gram-neg)',
        },
        { name: 'Tetracyclines', resistance: 'Efflux pumps, ribosomal protection', example: 'Doxycycline, Minocycline (broad)' },
        { name: 'Streptomycin', resistance: 'rRNA methylation', example: 'TB first-line agent' },
      ],
    },
    {
      id: '50sRibosome',
      name: '50S Ribosome',
      color: 'bg-green-100 border-green-500',
      position: 'Protein synthesis (50S subunit)',
      mechanism: 'Inhibits peptidyl transferase',
      drugs: [
        { name: 'Macrolides', resistance: 'rRNA methylation, efflux pumps', example: 'Erythromycin, Azithromycin, Clarithromycin' },
        { name: 'Chloramphenicol', resistance: 'Chloramphenicol acetyltransferase', example: 'Restricted use (aplastic anemia risk)' },
        { name: 'Clindamycin', resistance: 'Ribosomal methylation', example: 'Good anaerobic coverage' },
        { name: 'Oxazolidinones', resistance: 'rRNA mutations', example: 'Linezolid (MRSA, VRE)' },
      ],
    },
    {
      id: 'dna',
      name: 'DNA/RNA',
      color: 'bg-red-100 border-red-500',
      position: 'DNA/RNA interference',
      mechanism: 'Inhibits DNA gyrase or topoisomerase IV',
      drugs: [
        { name: 'Fluoroquinolones', resistance: 'DNA gyrase mutations, efflux', example: 'Ciprofloxacin, Levofloxacin (broad)' },
        { name: 'Metronidazole', resistance: 'Nitroimidazole activation defects', example: 'Anaerobes (Bacteroides, Clostridium)' },
        { name: 'Rifampin', resistance: 'RNA polymerase mutations', example: 'TB, MAC prophylaxis' },
      ],
    },
    {
      id: 'folateAcid',
      name: 'Folic Acid Synthesis',
      color: 'bg-yellow-100 border-yellow-500',
      position: 'Folate metabolism pathway',
      mechanism: 'Inhibits dihydrofolate reductase or PABA incorporation',
      drugs: [
        { name: 'Sulfonamides', resistance: 'PABA production increase', example: 'Sulfamethoxazole, TMP-SMX' },
        { name: 'Trimethoprim', resistance: 'Dihydrofolate reductase mutations', example: 'Combined as TMP-SMX (synergistic)' },
      ],
    },
  ];

  const resistanceMechanisms = [
    {
      mechanism: 'Enzymatic Inactivation',
      examples: 'Beta-lactamase, aminoglycoside-modifying enzymes',
      bacteria: 'Resistant enterobacteria, Staph aureus',
    },
    {
      mechanism: 'Reduced Permeability',
      examples: 'Altered porins, decreased cell wall permeability',
      bacteria: 'Gram-negative bacteria, atypical mycobacteria',
    },
    {
      mechanism: 'Efflux Pumps',
      examples: 'RND, MFS, MATE pumps extrude antibiotics',
      bacteria: 'Pseudomonas aeruginosa, Acinetobacter',
    },
    {
      mechanism: 'Target Modification',
      examples: 'rRNA methylation, PBP alterations, gyrase mutations',
      bacteria: 'Streptococcus (macrolide), Staph (beta-lactam), TB',
    },
    {
      mechanism: 'Target Replacement',
      examples: 'Alternative metabolic pathways',
      bacteria: 'Sulfonamide-resistant due to folate uptake',
    },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Antibiotic Target Sites</h2>
        <p className="text-gray-600">Bacterial cell with drug targets, mechanisms, and resistance</p>
      </div>

      {/* SVG diagram of bacterial cell */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded border-2 border-gray-300 mb-8">
        <svg width="100%" height="400" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
          {/* Cell wall and membrane */}
          <ellipse cx="300" cy="200" rx="200" ry="150" fill="none" stroke="#8b7355" strokeWidth="3" />
          <ellipse cx="300" cy="200" rx="190" ry="140" fill="none" stroke="#d4af37" strokeWidth="2" />

          {/* Nucleus (DNA) */}
          <circle cx="300" cy="200" r="50" fill="#ffebee" stroke="#c62828" strokeWidth="2" />
          <text x="300" y="210" fontSize="12" fill="#c62828" textAnchor="middle" fontWeight="bold">
            DNA
          </text>

          {/* Ribosomes 30S + 50S */}
          <circle cx="200" cy="150" r="15" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" />
          <text x="200" y="155" fontSize="10" fill="#2e7d32" textAnchor="middle" fontWeight="bold">
            30S
          </text>

          <circle cx="200" cy="250" r="15" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" />
          <text x="200" y="255" fontSize="10" fill="#2e7d32" textAnchor="middle" fontWeight="bold">
            50S
          </text>

          <circle cx="400" cy="150" r="15" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" />
          <text x="400" y="155" fontSize="10" fill="#2e7d32" textAnchor="middle" fontWeight="bold">
            30S
          </text>

          <circle cx="400" cy="250" r="15" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" />
          <text x="400" y="255" fontSize="10" fill="#2e7d32" textAnchor="middle" fontWeight="bold">
            50S
          </text>

          {/* Labels */}
          <text x="50" y="360" fontSize="12" fontWeight="bold" fill="#1f2937">
            CELL WALL
          </text>
          <line x1="80" y1="350" x2="120" y2="320" stroke="#1f2937" strokeWidth="2" markerEnd="url(#arrowhead)" />

          <text x="300" y="380" fontSize="12" fontWeight="bold" fill="#1f2937" textAnchor="middle">
            CYTOPLASM
          </text>

          <text x="520" y="150" fontSize="12" fontWeight="bold" fill="#1f2937">
            RIBOSOMES
          </text>
          <line x1="500" y1="150" x2="420" y2="150" stroke="#1f2937" strokeWidth="2" />
        </svg>
      </div>

      {/* Antibiotic targets */}
      <div className="space-y-4 mb-8">
        {targets.map((target) => (
          <button
            key={target.id}
            onClick={() =>
              setExpandedTarget(expandedTarget === target.id ? null : target.id)
            }
            className={`w-full p-4 rounded border-2 text-left transition hover:shadow-md ${target.color}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{target.name}</h3>
                <p className="text-sm text-gray-700 mt-1">{target.position}</p>
                <p className="text-xs text-gray-600 mt-1 italic">{target.mechanism}</p>
              </div>
              <Info size={20} className="text-gray-600" />
            </div>

            {expandedTarget === target.id && (
              <div className="mt-4 pt-4 border-t-2 border-gray-300 space-y-3">
                {target.drugs.map((drug, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-gray-300">
                    <p className="font-semibold text-gray-900">{drug.name}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      <span className="font-semibold">Examples:</span> {drug.example}
                    </p>
                    <p className="text-xs text-red-700 mt-1">
                      <span className="font-semibold">Resistance:</span> {drug.resistance}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Resistance mechanisms */}
      <div className="bg-red-50 border-2 border-red-300 rounded p-4 mb-8">
        <h3 className="font-bold text-red-900 mb-4">Bacterial Resistance Mechanisms</h3>
        <div className="space-y-2">
          {resistanceMechanisms.map((res, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-red-200">
              <p className="font-semibold text-gray-900">{res.mechanism}</p>
              <p className="text-xs text-gray-700 mt-1">
                <span className="font-semibold">Examples:</span> {res.examples}
              </p>
              <p className="text-xs text-gray-700 mt-1">
                <span className="font-semibold">Found in:</span> {res.bacteria}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical selection guide */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded p-4">
        <h3 className="font-bold text-blue-900 mb-3">Clinical Selection by Organism</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-1">Gram-positive Cocci</p>
            <p className="text-xs text-gray-700">Staph: Beta-lactams, vancomycin (MRSA)</p>
            <p className="text-xs text-gray-700">Strep: Penicillin, cephalosporins</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-1">Gram-negative Rods</p>
            <p className="text-xs text-gray-700">E. coli: Fluoroquinolones, cephalosporins</p>
            <p className="text-xs text-gray-700">Pseudomonas: Aminoglycosides + beta-lactams</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-1">Anaerobes</p>
            <p className="text-xs text-gray-700">Bacteroides: Clindamycin, metronidazole</p>
            <p className="text-xs text-gray-700">Clostridium: Metronidazole</p>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-1">Atypicals</p>
            <p className="text-xs text-gray-700">Chlamydia: Tetracyclines, macrolides</p>
            <p className="text-xs text-gray-700">Mycoplasma: Macrolides</p>
          </div>
        </div>
      </div>
    </div>
  );
};
