"use client";

import { User } from "lucide-react";

interface PatientCardProps {
  profile: { age: number; sex: string; occupation?: string; history?: string };
  title: string;
  caseType: string;
}

const typeColors: Record<string, string> = {
  Emergency: "bg-red-100 text-red-700",
  OPD: "bg-blue-100 text-blue-700",
  Ward: "bg-green-100 text-green-700",
  ICU: "bg-purple-100 text-purple-700",
};

export function PatientCard({ profile, title, caseType }: PatientCardProps) {
  return (
    <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-200">
          <User className="h-5 w-5 text-purple-700" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-purple-900">{title}</h3>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColors[caseType] ?? "bg-gray-100 text-gray-700"}`}>
              {caseType}
            </span>
          </div>
          <p className="text-sm text-purple-700">
            {profile.age}-year-old {profile.sex} | {profile.occupation ?? "Unknown occupation"}
          </p>
          {profile.history && (
            <p className="mt-1 text-xs text-purple-600">PMH: {profile.history}</p>
          )}
        </div>
      </div>
    </div>
  );
}
