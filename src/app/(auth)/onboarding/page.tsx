"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, ChevronRight, Clock, Target, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  { id: "PHASE_1", label: "Phase I (1st Professional)", desc: "Anatomy, Physiology, Biochemistry", year: "1st Year" },
  { id: "PHASE_2", label: "Phase II (2nd Professional)", desc: "Pathology, Pharmacology, Microbiology", year: "2nd Year" },
  { id: "PHASE_3_PART1", label: "Phase III Part 1", desc: "Forensic Medicine, Community Medicine, ENT, Ophthalmology", year: "3rd Year" },
  { id: "PHASE_3_PART2", label: "Phase III Part 2", desc: "Medicine, Surgery, OBG, Pediatrics", year: "Final Year" },
];

const studyHours = [
  { value: 2, label: "2 hours" },
  { value: 4, label: "4 hours" },
  { value: 6, label: "6 hours" },
  { value: 8, label: "8+ hours" },
];

const targetExams = [
  { id: "NEXT_STEP1", label: "NEXT Step 1", desc: "National Exit Test" },
  { id: "NEET_PG", label: "NEET PG", desc: "PG entrance exam" },
  { id: "UNIVERSITY", label: "University Exams", desc: "Internal/University" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState("PHASE_1");
  const [hours, setHours] = useState(6);
  const [exams, setExams] = useState<string[]>(["NEXT_STEP1"]);

  const toggleExam = (id: string) => {
    setExams((prev) => prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]);
  };

  const handleComplete = async () => {
    // In production, this would call tRPC to update user profile
    router.push("/dashboard");
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
          <GraduationCap className="h-7 w-7 text-white" />
        </div>
        <h1 className="mt-4 text-xl font-bold text-gray-900">Set up your profile</h1>
        <p className="text-sm text-gray-500">Step {step} of 3</p>
      </div>

      {/* Progress bar */}
      <div className="mb-8 flex gap-1">
        {[1, 2, 3].map((s) => (
          <div key={s} className={cn("h-1.5 flex-1 rounded-full", s <= step ? "bg-blue-600" : "bg-gray-200")} />
        ))}
      </div>

      {/* Step 1: Phase Selection */}
      {step === 1 && (
        <div>
          <h2 className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <BookOpen className="h-4 w-4" /> Which phase are you in?
          </h2>
          <p className="mb-4 text-xs text-gray-400">Select your current MBBS year</p>
          <div className="space-y-2">
            {phases.map((p) => (
              <button
                key={p.id}
                onClick={() => setPhase(p.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all",
                  phase === p.id ? "border-blue-400 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                )}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{p.label}</p>
                  <p className="text-xs text-gray-500">{p.desc}</p>
                </div>
                <span className="text-xs text-gray-400">{p.year}</span>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="mt-6 flex w-full items-center justify-center gap-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Step 2: Study Hours */}
      {step === 2 && (
        <div>
          <h2 className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Clock className="h-4 w-4" /> Daily study time?
          </h2>
          <p className="mb-4 text-xs text-gray-400">How many hours can you study per day?</p>
          <div className="grid grid-cols-2 gap-3">
            {studyHours.map((h) => (
              <button
                key={h.value}
                onClick={() => setHours(h.value)}
                className={cn(
                  "rounded-lg border p-4 text-center transition-all",
                  hours === h.value ? "border-blue-400 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                )}
              >
                <p className="text-2xl font-bold text-gray-900">{h.value}{h.value === 8 ? "+" : ""}</p>
                <p className="text-xs text-gray-500">hours/day</p>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">Back</button>
            <button onClick={() => setStep(3)} className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Target Exams */}
      {step === 3 && (
        <div>
          <h2 className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Target className="h-4 w-4" /> Target exams?
          </h2>
          <p className="mb-4 text-xs text-gray-400">Select all exams you&apos;re preparing for</p>
          <div className="space-y-2">
            {targetExams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => toggleExam(exam.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all",
                  exams.includes(exam.id) ? "border-blue-400 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                )}
              >
                <input type="checkbox" checked={exams.includes(exam.id)} readOnly className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{exam.label}</p>
                  <p className="text-xs text-gray-500">{exam.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button onClick={() => setStep(2)} className="flex-1 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">Back</button>
            <button onClick={handleComplete} className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-green-600 py-2.5 text-sm font-medium text-white hover:bg-green-700">
              Start Learning <GraduationCap className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
