import Link from "next/link";
import { Clock, FileText, Lock } from "lucide-react";

const mockExams = [
  {
    id: "weekly-1",
    title: "Weekly Test - Anatomy (Upper Limb)",
    questions: 30,
    timeMin: 45,
    subjects: ["Anatomy"],
    available: true,
    type: "weekly",
  },
  {
    id: "monthly-1",
    title: "Monthly Test - Phase I (All Subjects)",
    questions: 100,
    timeMin: 120,
    subjects: ["Anatomy", "Physiology", "Biochemistry"],
    available: false,
    type: "monthly",
  },
  {
    id: "next-mock-1",
    title: "NEXT Step 1 Mock - Full Length",
    questions: 200,
    timeMin: 180,
    subjects: ["All Subjects"],
    available: false,
    type: "full",
  },
];

export default function TestPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mock Tests</h1>
        <p className="text-gray-500">NEXT pattern exams with strict timing</p>
      </div>

      {/* Exam Pattern Info */}
      <div className="mb-8 rounded-xl border border-red-100 bg-red-50 p-4">
        <h3 className="mb-2 text-sm font-semibold text-red-800">NEXT Exam Pattern</h3>
        <div className="grid grid-cols-3 gap-4 text-sm text-red-700">
          <div>
            <p className="font-medium">Problem Solving</p>
            <p className="text-xs">60% weightage</p>
          </div>
          <div>
            <p className="font-medium">Analysis</p>
            <p className="text-xs">30% weightage</p>
          </div>
          <div>
            <p className="font-medium">Recall</p>
            <p className="text-xs">10% weightage</p>
          </div>
        </div>
      </div>

      {/* Mock Exams List */}
      <div className="space-y-4">
        {mockExams.map((exam) => (
          <div
            key={exam.id}
            className={`rounded-xl border bg-white p-5 ${
              exam.available ? "border-gray-200 hover:border-gray-300 hover:shadow-sm" : "border-gray-100 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                  {!exam.available && <Lock className="h-4 w-4 text-gray-400" />}
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FileText className="h-4 w-4" /> {exam.questions} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {exam.timeMin} min
                  </span>
                </div>
                <div className="mt-2 flex gap-2">
                  {exam.subjects.map((s) => (
                    <span key={s} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{s}</span>
                  ))}
                </div>
              </div>
              {exam.available ? (
                <Link
                  href={`/test/mock/${exam.id}`}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Start Exam
                </Link>
              ) : (
                <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-400">Coming Soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
