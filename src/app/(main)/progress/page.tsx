import Link from "next/link";
import { TrendingUp, Clock, Target, BookOpen } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";
import { getServerTrpc } from "@/lib/trpc/server";

const subjectColors: Record<string, string> = {
  AN: "#2563eb", PY: "#16a34a", BI: "#9333ea", PA: "#dc2626",
  PH: "#ea580c", MI: "#0891b2", FM: "#4f46e5", CM: "#059669",
  EN: "#d97706", OP: "#7c3aed", IM: "#0284c7", SU: "#be123c",
  OG: "#db2777", PE: "#4338ca", DR: "#c026d3", PS: "#65a30d",
  OR: "#0d9488", AS: "#6366f1", RD: "#f59e0b",
};

export default async function ProgressPage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();
  const allSubjects = Object.values(phaseGroups).flat();

  // Get topic counts per subject
  const subjectData = await Promise.all(
    allSubjects.map(async (s) => {
      const full = await trpc.curriculum.getSubject({ code: s.code });
      const topicCount = full?.modules.reduce((sum, m) => sum + m.topics.length, 0) ?? 0;
      const lessonCount = full?.modules.reduce(
        (sum, m) => sum + m.topics.reduce((ts, t) => ts + ((t as { lessons?: unknown[] }).lessons?.length ?? 0), 0),
        0
      ) ?? 0;
      return {
        ...s,
        topicCount,
        lessonCount,
        color: subjectColors[s.code] ?? "#6b7280",
      };
    })
  );

  const totalTopics = subjectData.reduce((sum, s) => sum + s.topicCount, 0);
  const totalModules = subjectData.reduce((sum, s) => sum + s._count.modules, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Progress Analytics</h1>
        <p className="text-gray-500">Track your learning journey across all subjects</p>
      </div>

      {/* Overview Cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total Topics", value: String(totalTopics), icon: BookOpen, color: "text-blue-600" },
          { label: "Subjects", value: String(allSubjects.length), icon: Target, color: "text-green-600" },
          { label: "Modules", value: String(totalModules), icon: Clock, color: "text-purple-600" },
          { label: "MCQs Available", value: "1,016", icon: TrendingUp, color: "text-orange-600" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5">
            <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Subject Progress */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Subject Overview</h3>
        <div className="space-y-5">
          {subjectData.map((subject) => (
            <Link
              key={subject.code}
              href={`/learn/${subject.code}`}
              className="flex items-center gap-5 rounded-lg p-2 hover:bg-gray-50"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: subject.color }}
              >
                {subject.code}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{subject.name}</h4>
                  <span className="text-xs text-gray-400">{subject.phase.replace("_", " ")}</span>
                </div>
                <div className="mt-1 flex gap-4 text-xs text-gray-500">
                  <span>{subject._count.modules} modules</span>
                  <span>{subject.topicCount} topics</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${Math.min(100, (subject.topicCount / Math.max(totalTopics, 1)) * 100 * 10)}%`,
                      backgroundColor: subject.color,
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-400">
        Sign in to track your personal progress, streaks, and weak areas
      </p>
    </div>
  );
}
