"use client";

import { Activity, MapPin, Briefcase, User, Heart, ChevronRight } from "lucide-react";

interface Vitals {
  pulse?: number;
  bp?: string;
  temp?: number;
  rr?: number;
  spo2?: number;
}

interface IntroStepProps {
  scenario: {
    patientAge: number;
    patientSex: string;
    patientOccupation: string | null;
    patientLocation: string | null;
    chiefComplaint: string;
    vitals: unknown;
    difficulty: string;
    estimatedMinutes: number;
  };
  onNext: () => void;
}

export function IntroStep({ scenario, onNext }: IntroStepProps) {
  const vitals = scenario.vitals as Vitals;

  return (
    <div className="space-y-6">
      {/* Patient card */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Patient Presentation</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A new patient has arrived. Review their details below.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {/* Demographics */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-950/30">
              <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                {scenario.patientAge}-year-old {scenario.patientSex}
              </span>
            </div>
            {scenario.patientOccupation && (
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">
                <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{scenario.patientOccupation}</span>
              </div>
            )}
            {scenario.patientLocation && (
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">
                <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{scenario.patientLocation}</span>
              </div>
            )}
          </div>

          {/* Chief Complaint */}
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/20">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Chief Complaint
            </p>
            <p className="mt-1 text-base font-medium text-red-900 dark:text-red-100">
              &ldquo;{scenario.chiefComplaint}&rdquo;
            </p>
          </div>

          {/* Vitals */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Activity className="h-4 w-4 text-emerald-500" />
              Vitals
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {vitals.pulse !== undefined && (
                <VitalCard
                  label="Pulse"
                  value={`${vitals.pulse} bpm`}
                  abnormal={vitals.pulse > 100 || vitals.pulse < 60}
                />
              )}
              {vitals.bp && (
                <VitalCard
                  label="BP"
                  value={vitals.bp}
                  abnormal={isAbnormalBP(vitals.bp)}
                />
              )}
              {vitals.temp !== undefined && (
                <VitalCard
                  label="Temp"
                  value={`${vitals.temp}°C`}
                  abnormal={vitals.temp > 37.5 || vitals.temp < 36}
                />
              )}
              {vitals.rr !== undefined && (
                <VitalCard
                  label="RR"
                  value={`${vitals.rr}/min`}
                  abnormal={vitals.rr > 20 || vitals.rr < 12}
                />
              )}
              {vitals.spo2 !== undefined && (
                <VitalCard
                  label="SpO2"
                  value={`${vitals.spo2}%`}
                  abnormal={vitals.spo2 < 95}
                />
              )}
            </div>
          </div>

          {/* Case info */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className={`rounded-full px-2 py-1 font-medium ${
              scenario.difficulty === "EASY" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
              scenario.difficulty === "MODERATE" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
              scenario.difficulty === "HARD" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" :
              "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
            }`}>
              {scenario.difficulty}
            </span>
            <span>~{scenario.estimatedMinutes} min</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/20">
        <p className="text-sm text-indigo-800 dark:text-indigo-200">
          <strong>Your role:</strong> You are the attending doctor. Take a systematic history,
          examine the patient, order investigations, arrive at a diagnosis, and plan treatment.
          Choose wisely — you have limited time and budget, just like in a real clinical setting.
        </p>
      </div>

      {/* Start button */}
      <button
        onClick={onNext}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
      >
        Begin Clinical Assessment
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function VitalCard({ label, value, abnormal }: { label: string; value: string; abnormal: boolean }) {
  return (
    <div className={`rounded-lg border p-3 text-center ${
      abnormal
        ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
        : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
    }`}>
      <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</p>
      <p className={`mt-1 text-sm font-bold ${
        abnormal ? "text-red-700 dark:text-red-300" : "text-gray-900 dark:text-gray-100"
      }`}>
        {value}
        {abnormal && <Heart className="ml-1 inline h-3 w-3 text-red-500" />}
      </p>
    </div>
  );
}

function isAbnormalBP(bp: string): boolean {
  const parts = bp.split("/").map(Number);
  if (parts.length !== 2) return false;
  const [systolic, diastolic] = parts;
  return systolic > 140 || systolic < 90 || diastolic > 90 || diastolic < 60;
}
