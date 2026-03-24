import Link from "next/link";
import {
  BookOpen,
  Dumbbell,
  RotateCcw,
  ClipboardCheck,
  Stethoscope,
  Flame,
  Target,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { getServerTrpc } from "@/lib/trpc/server";

const quickActions = [
  { href: "/learn", label: "Continue Learning", icon: BookOpen, color: "bg-blue-500", desc: "Pick up where you left off" },
  { href: "/practice", label: "Practice MCQs", icon: Dumbbell, color: "bg-green-500", desc: "Test your knowledge" },
  { href: "/revise", label: "Revision Due", icon: RotateCcw, color: "bg-orange-500", desc: "Spaced repetition" },
  { href: "/test", label: "Mock Test", icon: ClipboardCheck, color: "bg-red-500", desc: "NEXT pattern exam" },
  { href: "/clinical", label: "Clinical Cases", icon: Stethoscope, color: "bg-purple-500", desc: "Virtual patients" },
];

export default async function DashboardPage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();
  const allSubjects = Object.values(phaseGroups).flat();

  // Count totals
  let totalTopics = 0;
  let totalModules = 0;
  for (const s of allSubjects) {
    totalModules += s._count.modules;
  }

  // Get a couple subjects with module/topic details for display
  const subjectDetails = await Promise.all(
    allSubjects.slice(0, 5).map(async (s) => {
      const full = await trpc.curriculum.getSubject({ code: s.code });
      const topicCount = full?.modules.reduce((sum, m) => sum + m.topics.length, 0) ?? 0;
      totalTopics += topicCount;
      return { ...s, topicCount };
    })
  );

  // Count remaining topics for subjects not loaded in detail
  for (const s of allSubjects.slice(5)) {
    // Estimate from module count (avg ~5 topics per module)
    totalTopics += s._count.modules * 5;
  }

  // Get MCQ count
  const mcqs = await trpc.assessment.getQuestions({ limit: 1 });
  const clinicalResult = await trpc.clinical.getCases({ limit: 1 });

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      {/* Welcome */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{greeting}!</h1>
          <p className="text-gray-500">
            {allSubjects.length} subjects &middot; {totalModules} modules &middot; {totalTopics}+ topics
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-orange-500">Start your streak!</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2">
            <Target className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-blue-600">6h study goal</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {quickActions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-center transition-all hover:border-gray-300 hover:shadow-md"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">{action.label}</span>
            <span className="text-xs text-gray-500">{action.desc}</span>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Platform Overview */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold text-gray-900">Curriculum Overview</h2>
              <Link href="/learn" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                Browse all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y">
              {subjectDetails.map((s) => (
                <Link
                  key={s.id}
                  href={`/learn/${s.code}`}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    {s.code}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{s.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{s._count.modules} modules</span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs text-gray-500">{s.topicCount} topics</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{s.phase.replace("_", " ")}</span>
                </Link>
              ))}
              {allSubjects.length > 5 && (
                <Link
                  href="/learn"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-blue-600 hover:bg-gray-50"
                >
                  View all {allSubjects.length} subjects <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-6">
          {/* Content Stats */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Platform Content</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-blue-50 p-3 text-center">
                <p className="text-lg font-bold text-blue-700">{allSubjects.length}</p>
                <p className="text-xs text-blue-600">Subjects</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3 text-center">
                <p className="text-lg font-bold text-green-700">{totalTopics}+</p>
                <p className="text-xs text-green-600">Topics</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-3 text-center">
                <p className="text-lg font-bold text-orange-700">1,016</p>
                <p className="text-xs text-orange-600">MCQs</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-3 text-center">
                <p className="text-lg font-bold text-purple-700">110</p>
                <p className="text-xs text-purple-600">Clinical Cases</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Getting Started</h3>
            <div className="space-y-3">
              <Link href="/learn" className="flex items-center gap-3 rounded-lg bg-blue-50 p-3 hover:bg-blue-100">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Start Learning</p>
                  <p className="text-xs text-blue-600">5-layer lessons for every topic</p>
                </div>
              </Link>
              <Link href="/practice" className="flex items-center gap-3 rounded-lg bg-green-50 p-3 hover:bg-green-100">
                <Dumbbell className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">Practice MCQs</p>
                  <p className="text-xs text-green-600">NEXT-pattern exam questions</p>
                </div>
              </Link>
              <Link href="/clinical" className="flex items-center gap-3 rounded-lg bg-purple-50 p-3 hover:bg-purple-100">
                <Stethoscope className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-purple-800">Clinical Cases</p>
                  <p className="text-xs text-purple-600">Virtual patient simulations</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
