import Link from "next/link";
import { Stethoscope, User, Clock, Activity } from "lucide-react";
import { getServerTrpc } from "@/lib/trpc/server";

const difficultyColors: Record<string, string> = {
  EASY: "bg-green-100 text-green-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  HARD: "bg-red-100 text-red-700",
  EXPERT: "bg-purple-100 text-purple-700",
};

const typeColors: Record<string, string> = {
  OPD: "bg-blue-100 text-blue-600",
  Emergency: "bg-red-100 text-red-600",
  Ward: "bg-green-100 text-green-600",
  ICU: "bg-purple-100 text-purple-600",
};

export default async function ClinicalPage() {
  const trpc = await getServerTrpc();
  const cases = await trpc.clinical.getCases({});

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Clinical Simulation</h1>
        <p className="text-gray-500">Virtual patient cases and OSCE practice</p>
      </div>

      <div className="mb-8 rounded-xl border border-purple-100 bg-purple-50 p-4">
        <div className="flex items-start gap-3">
          <Activity className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-purple-800">How it works</h3>
            <p className="text-sm text-purple-700">
              Navigate through a virtual patient encounter step by step: take history, examine, investigate, diagnose, and treat. AI provides feedback on your clinical reasoning.
            </p>
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-gray-900">Available Cases ({cases.length})</h2>
      <div className="space-y-4">
        {cases.map((c) => {
          const profile = c.patientProfile as { age: number; sex: string } | null;
          return (
            <div key={c.id} className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{c.title}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyColors[c.difficulty] ?? ""}`}>
                      {c.difficulty}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColors[c.caseType] ?? "bg-gray-100"}`}>
                      {c.caseType}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    <User className="inline h-3.5 w-3.5 mr-1" />
                    {c.presentingComplaint}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.estimatedMinutes} min</span>
                    {profile && <span>{profile.age}y {profile.sex}</span>}
                  </div>
                </div>
                <Link
                  href={`/clinical/case/${c.id}`}
                  className="shrink-0 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                >
                  Start Case
                </Link>
              </div>
            </div>
          );
        })}
        {cases.length === 0 && (
          <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
            <Stethoscope className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-4 text-gray-500">No clinical cases available yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
