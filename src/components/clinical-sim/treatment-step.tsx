"use client";

import { useState } from "react";
import { Pill, ChevronRight, AlertTriangle, Check, Shield } from "lucide-react";

interface TreatmentStepProps {
  onSubmit: (treatments: string[], lifestyle: string[]) => Promise<void>;
  result: {
    correctPlan: {
      immediateActions?: Array<{ action: string; reasoning: string; priority: string }>;
      pharmacological?: Array<{
        drugClass: string; examples: string[]; route: string;
        duration: string; reasoning: string; contraindications: string[];
        indianContext?: string;
      }>;
      nonPharmacological?: Array<{ intervention: string; reasoning: string; duration: string }>;
      monitoring?: Array<{ parameter: string; frequency: string; target: string; escalation: string }>;
      lifestyle?: { dos: string[]; donts: string[]; indianSpecific?: string[] };
      followUp?: { when: string; what: string[] };
      referral?: { needed: boolean; to: string; urgency: string };
    };
    redFlags: Array<{ flag: string; action: string; urgency: string }>;
    keyLearningPoints: string[];
    commonMistakes: string[];
    score: number;
    feedback: string[];
    disclaimer: string;
  } | null;
  onNext: (score: number) => void;
}

// Treatment option categories for student to select from
const TREATMENT_CATEGORIES = [
  {
    name: "Immediate Actions",
    options: [
      "Start oxygen supplementation",
      "Secure IV access",
      "Monitor vitals continuously",
      "Position the patient (head elevation / recovery)",
      "NPO (nil per oral)",
      "Catheterize if needed",
      "Call for senior help",
      "Prepare for emergency intervention",
    ],
  },
  {
    name: "Pharmacological (Drug Classes)",
    options: [
      "Antiplatelet therapy",
      "Anticoagulant therapy",
      "Analgesic (pain relief)",
      "Antipyretic (fever reduction)",
      "Antibiotic therapy",
      "Antihypertensive therapy",
      "Antidiabetic therapy",
      "Bronchodilator therapy",
      "Corticosteroid therapy",
      "Anti-emetic therapy",
      "Proton pump inhibitor",
      "Diuretic therapy",
      "Vasopressor/inotrope support",
      "Thrombolytic therapy",
      "Anti-arrhythmic therapy",
      "Insulin therapy",
      "Fluid resuscitation (IV fluids)",
      "Blood products/transfusion",
      "Anti-epileptic therapy",
      "Anxiolytic/sedative",
    ],
  },
  {
    name: "Non-Pharmacological",
    options: [
      "Bed rest",
      "Dietary modification",
      "Physiotherapy",
      "Wound care / dressing",
      "Splinting / immobilization",
      "Nasogastric tube insertion",
      "Chest tube insertion",
      "Central venous catheterization",
      "Intubation and ventilation",
      "Surgical consultation",
    ],
  },
];

const LIFESTYLE_OPTIONS = [
  "Low salt diet",
  "Low fat diet",
  "High protein diet",
  "Smoking cessation",
  "Alcohol abstinence",
  "Regular exercise (after recovery)",
  "Weight management",
  "Stress reduction / yoga",
  "Regular follow-up visits",
  "Medication compliance counseling",
  "Avoid heavy lifting",
  "Avoid traditional/unproven remedies",
];

export function TreatmentStep({ onSubmit, result, onNext }: TreatmentStepProps) {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [selectedLifestyle, setSelectedLifestyle] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  function toggleTreatment(option: string) {
    setSelectedTreatments((prev) =>
      prev.includes(option) ? prev.filter((t) => t !== option) : [...prev, option],
    );
  }

  function toggleLifestyle(option: string) {
    setSelectedLifestyle((prev) =>
      prev.includes(option) ? prev.filter((t) => t !== option) : [...prev, option],
    );
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      await onSubmit(selectedTreatments, selectedLifestyle);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/20">
        <div className="flex items-start gap-2">
          <Pill className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              Plan Treatment — Select your management approach
            </p>
            <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-300">
              Choose immediate actions, drug classes, and lifestyle advice for this patient.
              Remember: this is an educational exercise only.
            </p>
          </div>
        </div>
      </div>

      {!result ? (
        <>
          {/* Treatment categories */}
          {TREATMENT_CATEGORIES.map((cat) => (
            <div key={cat.name} className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.options.map((option) => {
                  const isSelected = selectedTreatments.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => toggleTreatment(option)}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                        isSelected
                          ? "border-indigo-300 bg-indigo-100 text-indigo-800 dark:border-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-200"
                          : "border-gray-200 bg-white text-gray-600 hover:border-indigo-200 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {isSelected && <Check className="mr-1 inline h-3 w-3" />}
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Lifestyle */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Lifestyle Advice</h3>
            <div className="flex flex-wrap gap-2">
              {LIFESTYLE_OPTIONS.map((option) => {
                const isSelected = selectedLifestyle.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggleLifestyle(option)}
                    className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                      isSelected
                        ? "border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200"
                        : "border-gray-200 bg-white text-gray-600 hover:border-emerald-200 hover:bg-emerald-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    }`}
                  >
                    {isSelected && <Check className="mr-1 inline h-3 w-3" />}
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={selectedTreatments.length === 0 || submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Evaluating..." : "Submit Treatment Plan"}
          </button>
        </>
      ) : (
        <>
          {/* Correct plan */}
          <div className="space-y-4">
            {/* Disclaimer */}
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 dark:bg-amber-950/20 dark:border-amber-800">
              <p className="text-xs font-bold text-amber-800 dark:text-amber-200 flex items-center gap-1">
                <Shield className="h-3.5 w-3.5" /> {result.disclaimer}
              </p>
            </div>

            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Score: {result.score}/20
            </p>

            {/* Red flags */}
            {result.redFlags.length > 0 && (
              <div className="rounded-xl border-2 border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-1 text-sm font-bold text-red-800 dark:text-red-200">
                  <AlertTriangle className="h-4 w-4" /> Red Flags
                </h4>
                <div className="space-y-2">
                  {result.redFlags.map((rf, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-medium text-red-700 dark:text-red-300">{rf.flag}</p>
                      <p className="text-xs text-red-600 dark:text-red-400">
                        Action: {rf.action} (Urgency: {rf.urgency})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Immediate actions */}
            {result.correctPlan.immediateActions && result.correctPlan.immediateActions.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Immediate Actions</h4>
                {result.correctPlan.immediateActions.map((a, i) => (
                  <div key={i} className="mb-2 text-sm">
                    <span className={`mr-2 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                      a.priority === "STAT" ? "bg-red-100 text-red-700" :
                      a.priority === "URGENT" ? "bg-orange-100 text-orange-700" :
                      "bg-gray-100 text-gray-600"
                    }`}>{a.priority}</span>
                    <span className="text-gray-800 dark:text-gray-200">{a.action}</span>
                    <p className="ml-14 text-xs italic text-gray-500">{a.reasoning}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Pharmacological */}
            {result.correctPlan.pharmacological && result.correctPlan.pharmacological.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Pharmacological Management (Educational Only)
                </h4>
                {result.correctPlan.pharmacological.map((d, i) => (
                  <div key={i} className="mb-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                    <p className="font-medium text-gray-900 dark:text-gray-100">{d.drugClass}</p>
                    <p className="text-xs text-gray-500">
                      e.g., {d.examples.join(", ")} — {d.route} for {d.duration}
                    </p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{d.reasoning}</p>
                    {d.indianContext && (
                      <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                        🇮🇳 {d.indianContext}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Feedback */}
            {result.feedback.length > 0 && (
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/20">
                {result.feedback.map((f, i) => (
                  <p key={i} className="text-sm text-blue-700 dark:text-blue-300">{f}</p>
                ))}
              </div>
            )}
          </div>

          {/* Proceed to feedback */}
          <button
            onClick={() => onNext(result.score)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            View Senior Doctor&apos;s Feedback
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
}
