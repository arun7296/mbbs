import Link from "next/link";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";
import { getServerTrpc } from "@/lib/trpc/server";
import { PHASES } from "@/lib/constants/curriculum";

const colorCycle = ["blue", "green", "purple", "red", "teal", "indigo"] as const;
const iconCycle = ["🦴", "🫀", "🧬", "🔬", "💊", "🦠"];
const colorMap: Record<string, { bg: string; text: string; progressColor: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", progressColor: "#2563eb" },
  green: { bg: "bg-green-50", text: "text-green-700", progressColor: "#16a34a" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", progressColor: "#9333ea" },
  red: { bg: "bg-red-50", text: "text-red-700", progressColor: "#dc2626" },
  teal: { bg: "bg-teal-50", text: "text-teal-700", progressColor: "#0d9488" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", progressColor: "#4f46e5" },
};

export default async function LearnPage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();

  // Cast to access _count from include
  type SubjectWithCount = { _count: { modules: number }; [key: string]: unknown };

  // Flatten all subjects across phases
  const allSubjects = Object.entries(phaseGroups).flatMap(([phase, subjects]) =>
    subjects.map((s, i) => ({
      ...s,
      moduleCount: ((s as unknown as SubjectWithCount)._count?.modules) ?? 0,
      phaseLabel: PHASES[phase as keyof typeof PHASES]?.label ?? phase,
      color: colorCycle[i % colorCycle.length],
      icon: iconCycle[i % iconCycle.length],
    }))
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Learn</h1>
        <p className="text-gray-500">Select a subject to start studying</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allSubjects.map((subject) => {
          const colors = colorMap[subject.color] ?? colorMap.blue;
          return (
            <Link
              key={subject.code}
              href={`/learn/${subject.code}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span className="text-3xl">{subject.icon}</span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{subject.name}</h3>
                  <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}>
                    {subject.phaseLabel}
                  </span>
                </div>
                <ProgressRing progress={0} size={48} strokeWidth={3} color={colors.progressColor}>
                  <span className="text-xs font-bold text-gray-600">0%</span>
                </ProgressRing>
              </div>
              <p className="mb-4 text-sm text-gray-500">{subject.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" /> {subject.moduleCount} modules
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {subject.totalHours}h
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                Start learning <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
