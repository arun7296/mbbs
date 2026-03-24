import Link from "next/link";
import { Clock, FileText, Sparkles } from "lucide-react";
import { getServerTrpc } from "@/lib/trpc/server";

export default async function TestPage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();
  const allSubjects = Object.values(phaseGroups).flat();

  // Build mock exams dynamically from available subjects
  const phase1Subjects = phaseGroups["PHASE_1"] ?? [];
  const phase2Subjects = phaseGroups["PHASE_2"] ?? [];
  const phase3Subjects = [
    ...(phaseGroups["PHASE_3_PART1"] ?? []),
    ...(phaseGroups["PHASE_3_PART2"] ?? []),
  ];

  const mockExams = [
    {
      id: "phase1-weekly",
      title: "Phase I Weekly Test",
      questions: 30,
      timeMin: 45,
      subjects: phase1Subjects.map((s) => s.name),
      subjectIds: phase1Subjects.map((s) => s.id),
      type: "weekly" as const,
    },
    {
      id: "phase1-monthly",
      title: "Phase I Monthly Test",
      questions: 100,
      timeMin: 120,
      subjects: phase1Subjects.map((s) => s.name),
      subjectIds: phase1Subjects.map((s) => s.id),
      type: "monthly" as const,
    },
    {
      id: "phase2-weekly",
      title: "Phase II Weekly Test",
      questions: 30,
      timeMin: 45,
      subjects: phase2Subjects.map((s) => s.name),
      subjectIds: phase2Subjects.map((s) => s.id),
      type: "weekly" as const,
    },
    {
      id: "phase3-weekly",
      title: "Phase III Weekly Test",
      questions: 30,
      timeMin: 45,
      subjects: phase3Subjects.slice(0, 4).map((s) => s.name),
      subjectIds: phase3Subjects.map((s) => s.id),
      type: "weekly" as const,
    },
    {
      id: "full-mock",
      title: "NEXT Step 1 Full Mock",
      questions: 200,
      timeMin: 180,
      subjects: ["All Subjects"],
      subjectIds: allSubjects.map((s) => s.id),
      type: "full" as const,
    },
  ];

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

      {/* Mock Exams */}
      <div className="space-y-4">
        {mockExams.map((exam) => (
          <div
            key={exam.id}
            className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    exam.type === "weekly" ? "bg-blue-100 text-blue-700" :
                    exam.type === "monthly" ? "bg-orange-100 text-orange-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {exam.type === "weekly" ? "Weekly" : exam.type === "monthly" ? "Monthly" : "Full Mock"}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FileText className="h-4 w-4" /> {exam.questions} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {exam.timeMin} min
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {exam.subjects.slice(0, 5).map((s) => (
                    <span key={s} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{s}</span>
                  ))}
                  {exam.subjects.length > 5 && (
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                      +{exam.subjects.length - 5} more
                    </span>
                  )}
                </div>
              </div>
              <Link
                href={`/test/mock/${exam.id}?subjects=${exam.subjectIds.join(",")}&count=${exam.questions}&time=${exam.timeMin}`}
                className="shrink-0 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Start Exam
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Test */}
      <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-6 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-gray-400" />
        <p className="mt-2 text-sm font-medium text-gray-700">Want a custom test?</p>
        <p className="text-xs text-gray-500 mb-3">Use Practice mode to pick specific subjects, topics, and question count</p>
        <Link
          href="/practice"
          className="inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          Go to Practice
        </Link>
      </div>
    </div>
  );
}
