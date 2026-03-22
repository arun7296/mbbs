"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BarChart3, BookOpen, Target } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";

export default function SubjectProgressPage() {
  const params = useParams();
  const subjectId = params.subjectId as string;
  void subjectId;

  // In production, fetch from tRPC: progress.getSubjectDetail(subjectId)
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <Link href="/progress" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4" /> Back to Progress
      </Link>

      <h1 className="mb-6 text-2xl font-bold text-gray-900">Anatomy - Detailed Progress</h1>

      {/* Overall Stats */}
      <div className="mb-8 grid grid-cols-4 gap-4">
        {[
          { label: "Topics Complete", value: "1/60", icon: BookOpen, color: "text-blue-600" },
          { label: "MCQs Attempted", value: "10", icon: Target, color: "text-green-600" },
          { label: "Avg Accuracy", value: "70%", icon: BarChart3, color: "text-purple-600" },
          { label: "Study Hours", value: "1.5h", icon: BarChart3, color: "text-orange-600" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4">
            <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Module Breakdown */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Module Progress</h3>
        <div className="space-y-4">
          {["Upper Limb", "Lower Limb", "Thorax", "Abdomen", "Pelvis & Perineum", "Head & Neck", "Neuroanatomy", "General Anatomy", "Histology", "Embryology"].map((mod, i) => (
            <div key={mod} className="flex items-center gap-4">
              <ProgressRing progress={i === 0 ? 12 : 0} size={40} strokeWidth={3}>
                <span className="text-[10px] font-bold">{i === 0 ? "12%" : "0%"}</span>
              </ProgressRing>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{mod}</p>
                <div className="mt-1 h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: `${i === 0 ? 12 : 0}%` }} />
                </div>
              </div>
              <span className="text-xs text-gray-400">{i === 0 ? "1/8 topics" : "0 topics"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
