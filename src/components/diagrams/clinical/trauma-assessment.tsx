'use client';

import React, { useState } from 'react';
import { ChevronDown, AlertTriangle } from 'lucide-react';

export const TraumaAssessment: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const steps = [
    {
      id: 'airway',
      letter: 'A',
      title: 'Airway (with C-spine protection)',
      color: 'bg-red-100 border-red-500',
      assessment: [
        'Assess responsiveness: AVPU (Alert, Voice, Pain, Unresponsive)',
        'Check for signs of airway obstruction (stridor, choking, drooling)',
        'Look for foreign bodies, blood, vomit, facial injuries',
        'Perform jaw thrust (NOT head tilt) to protect C-spine',
      ],
      findings: {
        normal: 'Patent airway, patient alert and speaking',
        abnormal: 'Altered consciousness, stridor, drooling, airway obstruction',
      },
      interventions: [
        'Suction (gentle) if secretions present',
        'Position: Recovery position or head-up if possible',
        'Insert nasopharyngeal or oropharyngeal airway if needed',
        'Prepare for intubation if GCS ≤ 8 or unable to protect airway',
        'Maintain C-spine immobilization throughout',
      ],
      redFlags: ['GCS ≤ 8', 'Stridor', 'Severe facial trauma', 'Risk of aspiration'],
    },
    {
      id: 'breathing',
      letter: 'B',
      title: 'Breathing (Ventilation and Oxygenation)',
      color: 'bg-orange-100 border-orange-500',
      assessment: [
        'Observe respiratory rate, depth, effort (normal: 12-20 breaths/min)',
        'Listen for bilateral breath sounds (pneumothorax, hemothorax)',
        'Percuss for resonance (check for tension pneumothorax, hemothorax)',
        'Inspect chest for wounds, paradoxical movement (flail chest)',
        'Palpate for subcutaneous emphysema, rib fractures',
        'Assess oxygenation: SpO2 ≥ 94% (mild hypoxia), < 90% is concerning',
      ],
      findings: {
        normal: 'Regular respirations, bilateral breath sounds, SpO2 > 94%',
        abnormal: 'Absent breath sounds, tension physiology, flail chest, cyanosis',
      },
      interventions: [
        'Supplemental O2 via nasal cannula or mask (target SpO2 ≥ 94%)',
        'Tension pneumothorax: Needle decompression at 2nd ICS midclavicular line, then chest tube',
        'Flail chest: Adequate analgesia (epidural, multimodal), pulmonary hygiene',
        'Hemothorax: Chest tube (32-40 Fr)',
        'Assist ventilation with bag-valve-mask if needed',
      ],
      redFlags: [
        'Absent breath sounds',
        'JVD + hypotension + tracheal deviation (tension pneumothorax)',
        'Respiratory distress',
        'SpO2 < 90%',
      ],
    },
    {
      id: 'circulation',
      letter: 'C',
      title: 'Circulation (Hemorrhage Control)',
      color: 'bg-yellow-100 border-yellow-500',
      assessment: [
        'Check central pulse (carotid) - present or absent?',
        'Assess blood pressure (normal: SBP ≥ 90 mmHg)',
        'Determine pulse rate: normal < 100, tachycardia > 100',
        'Assess skin perfusion: warm/dry (normal) vs cold/clammy (shock)',
        'Check for major external hemorrhage: scalp, neck, axilla, groin, extremities',
        'Assess for internal hemorrhage sites: abdomen, pelvis, thighs',
      ],
      findings: {
        normal: 'Carotid pulse present, SBP > 90, HR < 100, warm/dry skin',
        abnormal: 'Absent pulse, SBP < 90, HR > 100, cool/clammy, external bleeding',
      },
      interventions: [
        'Control external hemorrhage: Direct pressure, elevation, tourniquet if needed',
        'Establish IV access: 2 large-bore IVs (18 or 16 gauge)',
        'Fluid resuscitation: 1-2 L bolus LR for Shock (target SBP ≥ 90)',
        'Type and crossmatch; consider PRBC transfusion if ongoing shock',
        'Pelvic binder if pelvic fracture suspected (stabilize fracture)',
        'Position supine; elevate legs (Trendelenburg) if shock',
        'Arrest hemorrhage: Vascular repair or hemostasis, OR if needed',
      ],
      redFlags: [
        'Absent carotid pulse',
        'SBP < 90 (Shock)',
        'Severe external bleeding',
        'Mechanism suggests major internal bleeding',
      ],
    },
    {
      id: 'disability',
      letter: 'D',
      title: 'Disability (Neurological Status)',
      color: 'bg-blue-100 border-blue-500',
      assessment: [
        'Glasgow Coma Scale (GCS): E + V + M (3-15)',
        'Pupil size and reactivity: both pupils should be equal, round, reactive to light (PEARL)',
        'Focal neurological deficits: motor/sensory loss, weakness',
        'Assess for spinal cord injury: loss of sensation/motor below injury level',
      ],
      findings: {
        normal: 'GCS 15, PEARL pupils, normal motor/sensory, no focal deficits',
        abnormal: 'GCS < 15, unequal pupils, focal deficits, paralysis',
      },
      interventions: [
        'Maintain C-spine precautions if GCS < 15 or mechanism suggests spinal injury',
        'Intubate if GCS ≤ 8 (cannot protect airway)',
        'Head elevation 30° to reduce ICP',
        'Maintain normothermia, normoxia, normocapnia (PaCO2 35-40)',
        'Repeat GCS frequently (trends important)',
        'Pupil changes: consider emergent neurosurgery consult',
        'Spinal cord injury: high-dose steroids (methylprednisolone) if < 3 hours from injury',
      ],
      redFlags: [
        'GCS < 8',
        'Unequal or non-reactive pupils',
        'Focal neurological deficit',
        'Declining GCS (sign of increased ICP)',
      ],
    },
    {
      id: 'exposure',
      letter: 'E',
      title: 'Exposure (Complete Examination)',
      color: 'bg-purple-100 border-purple-500',
      assessment: [
        'Undress completely in warm environment (prevent hypothermia)',
        'Log-roll patient (maintain C-spine precautions) to inspect back, buttocks, perineum',
        'Inspect for bruising, lacerations, penetrating wounds, abdominal distention',
        'Palpate abdomen for tenderness, rigidity, guarding (peritoneal signs)',
        'Assess for pelvic fracture: compress pelvis, assess for instability',
        'Document all injuries: photograph if needed (medicolegal)',
        'Cover patient after examination to prevent hypothermia',
      ],
      findings: {
        normal: 'No obvious injuries, soft/non-tender abdomen, stable pelvis',
        abnormal: 'Multiple injuries, abdominal tenderness/rigidity, unstable pelvis',
      },
      interventions: [
        'Keep environment warm (hypothermia worsens outcomes)',
        'Active rewarming if hypothermic (blankets, warm fluids, extracorporeal if severe)',
        'Abdominal injury: NPO status, prepare for possible operation',
        'Pelvic fracture: Pelvic binder, consider angiography/embolization',
        'Tetanus status: Update if needed',
        'Pain control: Analgesia as appropriate',
      ],
      redFlags: [
        'Abdominal rigidity/rebound (peritonitis)',
        'Pelvic instability',
        'Multiple severe injuries',
        'Hypothermia',
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">ATLS Primary Survey</h2>
        <p className="text-gray-600">Systematic ABCDE approach to trauma assessment</p>
      </div>

      {/* Overview banner */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-400 rounded p-4 mb-8">
        <h3 className="font-bold text-red-900 mb-2">Golden Hour: First 60 minutes</h3>
        <p className="text-sm text-gray-700">
          Early recognition and rapid intervention in life-threatening injuries significantly improve survival. The primary
          survey follows a strict ABCDE sequence to prevent overlooking critical conditions.
        </p>
      </div>

      {/* ABCDE steps */}
      <div className="space-y-4 mb-8">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() =>
              setExpandedStep(expandedStep === step.id ? null : step.id)
            }
            className={`w-full p-4 rounded border-2 border-l-4 text-left transition hover:shadow-md ${step.color}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center font-bold text-lg text-gray-900">
                  {step.letter}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {step.findings.normal}
                  </p>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`text-gray-600 transition flex-shrink-0 ${expandedStep === step.id ? 'rotate-180' : ''}`}
              />
            </div>

            {expandedStep === step.id && (
              <div className="mt-4 pt-4 border-t-2 border-gray-300 space-y-4">
                {/* Assessment */}
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Assessment:</p>
                  <ul className="space-y-1">
                    {step.assessment.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-gray-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Findings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white bg-opacity-50 p-3 rounded border border-gray-300">
                    <p className="font-semibold text-green-700 text-sm mb-1">Normal Findings:</p>
                    <p className="text-xs text-gray-700">{step.findings.normal}</p>
                  </div>
                  <div className="bg-white bg-opacity-50 p-3 rounded border border-gray-300">
                    <p className="font-semibold text-red-700 text-sm mb-1">Abnormal Findings:</p>
                    <p className="text-xs text-gray-700">{step.findings.abnormal}</p>
                  </div>
                </div>

                {/* Interventions */}
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Interventions (if abnormal findings):</p>
                  <ul className="space-y-1">
                    {step.interventions.map((intervention, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-blue-500">→</span>
                        <span>{intervention}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Red flags */}
                <div className="bg-red-50 border border-red-300 rounded p-3">
                  <div className="flex gap-2 items-start">
                    <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900 text-sm mb-1">Red Flags (Requires Immediate Action):</p>
                      <ul className="text-xs text-red-800 space-y-1">
                        {step.redFlags.map((flag, idx) => (
                          <li key={idx}>• {flag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Shock classification */}
      <div className="bg-gray-50 border-2 border-gray-400 rounded p-4 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">Classes of Hemorrhagic Shock</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-2 border-gray-400">
                <th className="px-2 py-2 text-left font-bold text-gray-900">Class</th>
                <th className="px-2 py-2 text-left font-bold text-gray-900">% Blood Loss</th>
                <th className="px-2 py-2 text-left font-bold text-gray-900">HR</th>
                <th className="px-2 py-2 text-left font-bold text-gray-900">BP</th>
                <th className="px-2 py-2 text-left font-bold text-gray-900">RR</th>
                <th className="px-2 py-2 text-left font-bold text-gray-900">Urine Output</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  class: 'I',
                  loss: '< 15%',
                  hr: '< 100',
                  bp: 'Normal',
                  rr: 'Normal',
                  urine: '> 30 mL/h',
                  color: 'bg-green-50',
                },
                {
                  class: 'II',
                  loss: '15-30%',
                  hr: '100-120',
                  bp: 'Normal',
                  rr: '20-30',
                  urine: '20-30 mL/h',
                  color: 'bg-yellow-50',
                },
                {
                  class: 'III',
                  loss: '30-40%',
                  hr: '120-140',
                  bp: 'Decreased',
                  rr: '30-40',
                  urine: '5-15 mL/h',
                  color: 'bg-orange-50',
                },
                {
                  class: 'IV',
                  loss: '> 40%',
                  hr: '> 140',
                  bp: 'Markedly low',
                  rr: '> 40',
                  urine: 'Minimal/none',
                  color: 'bg-red-50',
                },
              ].map((row) => (
                <tr key={row.class} className={`border-b border-gray-300 ${row.color}`}>
                  <td className="px-2 py-2 font-bold text-gray-900">Class {row.class}</td>
                  <td className="px-2 py-2 text-gray-700">{row.loss}</td>
                  <td className="px-2 py-2 text-gray-700">{row.hr}</td>
                  <td className="px-2 py-2 text-gray-700">{row.bp}</td>
                  <td className="px-2 py-2 text-gray-700">{row.rr}</td>
                  <td className="px-2 py-2 text-gray-700">{row.urine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key protocols */}
      <div className="bg-blue-50 border-2 border-blue-400 rounded p-4">
        <h3 className="font-bold text-blue-900 mb-4">Critical Protocols</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Massive Transfusion Protocol</p>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• Activation: Class III/IV shock with massive hemorrhage</li>
              <li>• 1:1:1 ratio PRBC:FFP:Platelets</li>
              <li>• Call blood bank immediately</li>
              <li>• Consider TXA (tranexamic acid) within 3 hours</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Permissive Hypotension</p>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• Target SBP 80-90 mmHg (NOT 120) before hemorrhage control</li>
              <li>• Avoid over-resuscitation → dilutional coagulopathy</li>
              <li>• Raise target after hemorrhage control or massive transfusion</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Damage Control Surgery</p>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• Early surgical intervention for uncontrolled hemorrhage</li>
              <li>• Goal: Temporary hemostasis + resuscitation</li>
              <li>• Definitive repair after stabilization (ICU)</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">C-Spine Immobilization</p>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• Maintain until cervical spine cleared</li>
              <li>• Rule out injury: imaging + clinical examination</li>
              <li>• Do NOT clear if GCS &lt; 15 or altered mental status</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
