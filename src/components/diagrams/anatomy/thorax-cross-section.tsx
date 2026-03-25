'use client';

import { useState } from 'react';

interface ThoracicStructure {
  id: string;
  name: string;
  description: string;
  clinicalNote?: string;
  x: number;
  y: number;
}

const structures: ThoracicStructure[] = [
  {
    id: 'sternum',
    name: 'Sternum',
    description: 'Flat bone in the anterior chest. Site of sternal puncture for bone marrow aspiration.',
    clinicalNote: 'Median sternotomy is surgical approach to mediastinum',
    x: 120,
    y: 250,
  },
  {
    id: 'heart',
    name: 'Heart',
    description:
      'Four-chambered organ in mediastinum, mostly left of midline. In fibrous and serous pericardium.',
    clinicalNote: 'Cardiac tamponade occurs with fluid in pericardial sac',
    x: 300,
    y: 250,
  },
  {
    id: 'llung',
    name: 'Left Lung',
    description:
      'Two lobes separated by oblique fissure. Smaller than right due to cardiac impression.',
    clinicalNote: 'Cardiac notch on left lung superior lobe',
    x: 480,
    y: 200,
  },
  {
    id: 'rlung',
    name: 'Right Lung',
    description:
      'Three lobes (superior, middle, inferior) separated by fissures. Larger and wider than left.',
    clinicalNote: 'Right mainstem bronchus more vertical, higher aspiration risk',
    x: 480,
    y: 300,
  },
  {
    id: 'ao',
    name: 'Aorta',
    description: 'Largest artery, exits left ventricle. Curves posteriorly (arch) before descending.',
    clinicalNote: 'Aortic aneurysm rupture is life-threatening emergency',
    x: 350,
    y: 180,
  },
  {
    id: 'svc',
    name: 'Superior Vena Cava',
    description: 'Returns deoxygenated blood from head, neck, and upper extremities to right atrium.',
    clinicalNote: 'SVC syndrome causes facial swelling and venous congestion',
    x: 280,
    y: 150,
  },
  {
    id: 'ivc',
    name: 'Inferior Vena Cava',
    description: 'Returns deoxygenated blood from lower body to right atrium. Passes through diaphragm.',
    clinicalNote: 'IVC filter placed to prevent PE in high-risk patients',
    x: 320,
    y: 320,
  },
  {
    id: 'pv',
    name: 'Pulmonary Artery',
    description: 'Carries deoxygenated blood from RV to lungs. Divides into left and right branches.',
    clinicalNote: 'Pulmonary embolism blocks PA causing acute cor pulmonale',
    x: 380,
    y: 220,
  },
  {
    id: 'esoph',
    name: 'Esophagus',
    description:
      'Muscular tube behind trachea and heart. Passes through diaphragm at T10 level. Travels posteriorly.',
    clinicalNote: 'Esophageal cancer presents with progressive dysphagia',
    x: 550,
    y: 250,
  },
  {
    id: 'trachea',
    name: 'Trachea',
    description: 'Cartilaginous tube anterior to esophagus. Divides into left and right mainstem bronchi.',
    clinicalNote: 'Tracheal deviation indicates tension pneumothorax',
    x: 300,
    y: 100,
  },
  {
    id: 'vertebra',
    name: 'Vertebra (T4)',
    description: 'Thoracic vertebra with spinous process pointing posteriorly. Spinal cord runs through.',
    clinicalNote: 'Spinal cord injury levels determined by vertebral level',
    x: 560,
    y: 270,
  },
  {
    id: 'azv',
    name: 'Azygos Vein',
    description:
      'Unpaired vein on right side. Drains posterior chest wall. Enters right atrium via SVC.',
    clinicalNote: 'Azygos continuation occurs when IVC is absent',
    x: 540,
    y: 150,
  },
];

export function ThoraxCrossSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedStructure = structures.find((s) => s.id === selectedId);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 700 500"
        className="w-full border border-gray-300 rounded-lg bg-white"
      >
        {/* Title */}
        <text x="350" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-800">
          Thoracic Cross-Section (CT Level)
        </text>

        {/* Chest wall outline */}
        <ellipse cx="350" cy="260" rx="200" ry="150" fill="#f3f4f6" stroke="#999" strokeWidth="2" />

        {/* Sternum - light gray */}
        <g
          onClick={() => setSelectedId('sternum')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect x="80" y="220" width="40" height="80" fill="#d1d5db" stroke="#666" strokeWidth="2" />
          <text x="100" y="265" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            ST
          </text>
        </g>

        {/* Heart - Red */}
        <g
          onClick={() => setSelectedId('heart')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <ellipse cx="300" cy="260" rx="60" ry="55" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="300" y="265" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            Heart
          </text>
        </g>

        {/* Pericardium outline (dashed) */}
        <ellipse
          cx="300"
          cy="260"
          rx="75"
          ry="70"
          fill="none"
          stroke="#fca5a5"
          strokeWidth="1"
          strokeDasharray="4"
          className="pointer-events-none"
        />

        {/* Left Lung - Blue */}
        <g
          onClick={() => setSelectedId('llung')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <ellipse cx="220" cy="200" rx="45" ry="60" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" />
          <text x="220" y="205" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            LLung
          </text>
        </g>

        {/* Right Lung - Blue */}
        <g
          onClick={() => setSelectedId('rlung')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <ellipse cx="480" cy="260" rx="50" ry="65" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" />
          <text x="480" y="265" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            RLung
          </text>
        </g>

        {/* Aorta - Dark Red */}
        <g
          onClick={() => setSelectedId('ao')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="330" cy="180" r="15" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
          <text x="330" y="185" textAnchor="middle" className="text-xs font-bold fill-white">
            Ao
          </text>
        </g>

        {/* Superior Vena Cava - Blue */}
        <g
          onClick={() => setSelectedId('svc')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect x="265" y="140" width="20" height="30" fill="#93c5fd" stroke="#0c4a6e" strokeWidth="2" />
          <text x="275" y="160" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            SVC
          </text>
        </g>

        {/* Inferior Vena Cava - Blue */}
        <g
          onClick={() => setSelectedId('ivc')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <rect x="280" y="300" width="20" height="30" fill="#93c5fd" stroke="#0c4a6e" strokeWidth="2" />
          <text x="290" y="320" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            IVC
          </text>
        </g>

        {/* Pulmonary Artery - Dark Red */}
        <g
          onClick={() => setSelectedId('pv')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="370" cy="220" r="12" fill="#f87171" stroke="#dc2626" strokeWidth="2" />
          <text x="370" y="225" textAnchor="middle" className="text-xs font-bold fill-white">
            PA
          </text>
        </g>

        {/* Esophagus - Brown */}
        <g
          onClick={() => setSelectedId('esoph')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <ellipse cx="560" cy="260" rx="12" ry="18" fill="#ddd6d2" stroke="#92400e" strokeWidth="2" />
          <text x="560" y="265" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            E
          </text>
        </g>

        {/* Trachea - Light Gray */}
        <g
          onClick={() => setSelectedId('trachea')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="300" cy="100" r="12" fill="#e5e7eb" stroke="#666" strokeWidth="2" />
          <text x="300" y="105" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            Tr
          </text>
        </g>

        {/* Vertebra - Gray */}
        <g
          onClick={() => setSelectedId('vertebra')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="580" cy="270" r="20" fill="#e5e7eb" stroke="#666" strokeWidth="2" />
          <circle cx="580" cy="270" r="10" fill="#f3f4f6" stroke="#999" strokeWidth="1" />
          <text x="580" y="275" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            V
          </text>
        </g>

        {/* Azygos Vein - Light Blue */}
        <g
          onClick={() => setSelectedId('azv')}
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          <circle cx="540" cy="150" r="10" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2" />
          <text x="540" y="155" textAnchor="middle" className="text-xs font-bold fill-gray-800">
            Az
          </text>
        </g>

        {/* Ribs outline (stylized) */}
        <g className="pointer-events-none stroke-gray-300 stroke-1" opacity="0.5">
          <path d="M 80 200 Q 200 150 450 160" fill="none" />
          <path d="M 85 320 Q 200 370 450 360" fill="none" />
        </g>

        {/* Legend */}
        <g className="pointer-events-none text-xs fill-gray-600">
          <text x="20" y="480">
            Anterior (Sternum) ← → Posterior (Vertebra)
          </text>
        </g>
      </svg>

      {/* Info Panel */}
      {selectedStructure && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-2">{selectedStructure.name}</h3>
          <p className="text-gray-700 mb-2">{selectedStructure.description}</p>
          {selectedStructure.clinicalNote && (
            <p className="text-sm bg-amber-50 border border-amber-200 rounded p-2 text-amber-900">
              <span className="font-semibold">Clinical Pearl:</span> {selectedStructure.clinicalNote}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
