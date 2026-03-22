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
import { ProgressRing } from "@/components/shared/ProgressRing";

const quickActions = [
  { href: "/learn", label: "Continue Learning", icon: BookOpen, color: "bg-blue-500", desc: "Pick up where you left off" },
  { href: "/practice", label: "Practice MCQs", icon: Dumbbell, color: "bg-green-500", desc: "Test your knowledge" },
  { href: "/revise", label: "Revision Due", icon: RotateCcw, color: "bg-orange-500", desc: "5 topics need review" },
  { href: "/test", label: "Mock Test", icon: ClipboardCheck, color: "bg-red-500", desc: "NEXT pattern exam" },
  { href: "/clinical", label: "Clinical Case", icon: Stethoscope, color: "bg-purple-500", desc: "Virtual patient" },
];

const todayTasks = [
  { time: "9:00 AM", topic: "Brachial Plexus - Foundation", mode: "Learn", duration: "20 min", done: false },
  { time: "9:30 AM", topic: "Brachial Plexus - Mechanism", mode: "Learn", duration: "30 min", done: false },
  { time: "10:15 AM", topic: "Upper Limb MCQs", mode: "Practice", duration: "30 min", done: false },
  { time: "11:00 AM", topic: "Axilla & Shoulder - Review", mode: "Revise", duration: "20 min", done: false },
  { time: "11:30 AM", topic: "Arm Muscles - Foundation", mode: "Learn", duration: "20 min", done: false },
  { time: "12:00 PM", topic: "Shoulder Injury Case", mode: "Clinical", duration: "15 min", done: false },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      {/* Welcome + Streak */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good Morning!</h1>
          <p className="text-gray-500">Phase I - Anatomy</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-lg font-bold text-orange-600">1</span>
            <span className="text-sm text-orange-500">day streak</span>
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
        {/* Today's Plan */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold text-gray-900">Today&apos;s Study Plan</h2>
              <Link href="/study-plan" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                View full plan <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y">
              {todayTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                  <span className="w-20 text-xs text-gray-400">{task.time}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.topic}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${
                        task.mode === "Learn" ? "text-blue-600" :
                        task.mode === "Practice" ? "text-green-600" :
                        task.mode === "Revise" ? "text-orange-600" :
                        "text-purple-600"
                      }`}>{task.mode}</span>
                      <span className="text-xs text-gray-400">|</span>
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{task.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Overall Progress */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Anatomy Progress</h3>
            <div className="flex items-center justify-center">
              <ProgressRing progress={3} size={120} strokeWidth={8} color="#2563eb">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-900">3%</span>
                  <p className="text-xs text-gray-500">Complete</p>
                </div>
              </ProgressRing>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-lg font-bold text-gray-900">0/50</p>
                <p className="text-xs text-gray-500">Topics</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 text-center">
                <p className="text-lg font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-500">MCQs Done</p>
              </div>
            </div>
          </div>

          {/* Weak Areas */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Focus Areas</h3>
            <p className="text-sm text-gray-500">
              Complete a few topics and practice MCQs to see your weak areas here.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-blue-600">
              <TrendingUp className="h-4 w-4" />
              <span>AI-powered analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
