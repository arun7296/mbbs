import { TrendingUp, Clock, Target, BookOpen } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Progress Analytics</h1>
        <p className="text-gray-500">Track your learning journey across all subjects</p>
      </div>

      {/* Overview Cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Topics Completed", value: "0/50", icon: BookOpen, color: "text-blue-600" },
          { label: "MCQs Attempted", value: "0", icon: Target, color: "text-green-600" },
          { label: "Study Hours", value: "0h", icon: Clock, color: "text-purple-600" },
          { label: "Avg Accuracy", value: "—", icon: TrendingUp, color: "text-orange-600" },
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
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Subject-wise Progress</h3>
        <div className="space-y-6">
          {[
            { name: "Anatomy", code: "AN", progress: 0, topics: "0/50", mcqs: 0, color: "#2563eb" },
            { name: "Physiology", code: "PY", progress: 0, topics: "0/40", mcqs: 0, color: "#16a34a" },
            { name: "Biochemistry", code: "BI", progress: 0, topics: "0/35", mcqs: 0, color: "#9333ea" },
          ].map((subject) => (
            <div key={subject.code} className="flex items-center gap-6">
              <ProgressRing progress={subject.progress} size={56} strokeWidth={4} color={subject.color}>
                <span className="text-xs font-bold">{subject.progress}%</span>
              </ProgressRing>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{subject.name}</h4>
                <div className="mt-1 flex gap-4 text-xs text-gray-500">
                  <span>Topics: {subject.topics}</span>
                  <span>MCQs: {subject.mcqs}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full" style={{ width: `${subject.progress}%`, backgroundColor: subject.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
