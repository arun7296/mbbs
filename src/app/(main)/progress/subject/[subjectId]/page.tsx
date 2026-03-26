import Link from "next/link";
import { ArrowLeft, BookOpen, Target, Layers } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";
import { getServerTrpc } from "@/lib/trpc/server";

interface PageProps {
  params: Promise<{ subjectId: string }>;
}

export default async function SubjectProgressPage({ params }: PageProps) {
  const { subjectId } = await params;
  const trpc = await getServerTrpc();

  // Try to find the subject — subjectId could be either id or code
  const phaseGroups = await trpc.curriculum.getPhases();
  const allSubjects = Object.values(phaseGroups).flat();
  const subjectMeta = allSubjects.find((s) => s.id === subjectId || s.code === subjectId);

  if (!subjectMeta) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
        <Link href="/progress" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4" /> Back to Progress
        </Link>
        <p className="text-lg font-semibold text-gray-700">Subject not found</p>
      </div>
    );
  }

  // Fetch full subject details with modules and topics
  const subject = await trpc.curriculum.getSubject({ code: subjectMeta.code });
  if (!subject) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
        <Link href="/progress" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4" /> Back to Progress
        </Link>
        <p className="text-lg font-semibold text-gray-700">Subject details not found</p>
      </div>
    );
  }

  const totalTopics = subject.modules.reduce((sum, m) => sum + m.topics.length, 0);
  const totalLessons = subject.modules.reduce(
    (sum, m) => sum + m.topics.reduce((ts, t) => ts + ((t as { lessons?: unknown[] }).lessons?.length ?? 0), 0),
    0
  );

  // Fetch question count for this subject
  const questions = await trpc.assessment.getQuestions({ subjectId: subject.id, limit: 1 });

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <Link href="/progress" className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-4 w-4" /> Back to Progress
      </Link>

      <h1 className="mb-2 text-2xl font-bold text-gray-900">{subject.name}</h1>
      <p className="mb-6 text-sm text-gray-500">
        {subject.code} &middot; {subjectMeta.phase.replace("_", " ")}
      </p>

      {/* Overview Stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {[
          { label: "Modules", value: String(subject.modules.length), icon: Layers, color: "text-blue-600" },
          { label: "Topics", value: String(totalTopics), icon: BookOpen, color: "text-green-600" },
          { label: "MCQs Available", value: questions.length > 0 ? "Yes" : "None", icon: Target, color: "text-purple-600" },
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
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Modules &amp; Topics</h3>
        <div className="space-y-4">
          {subject.modules.map((mod) => (
            <Link
              key={mod.id}
              href={`/learn/${subject.code}/${mod.code}`}
              className="block rounded-lg p-3 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <ProgressRing progress={0} size={40} strokeWidth={3}>
                  <span className="text-[10px] font-bold text-gray-400">—</span>
                </ProgressRing>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{mod.name}</p>
                  <p className="text-xs text-gray-500">{mod.code}</p>
                  <div className="mt-1 h-2 rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-blue-500" style={{ width: "0%" }} />
                  </div>
                </div>
                <span className="text-xs text-gray-400">{mod.topics.length} topics</span>
              </div>
              {/* Show topic names */}
              <div className="ml-14 mt-2 flex flex-wrap gap-1">
                {mod.topics.slice(0, 6).map((t) => (
                  <span key={t.id} className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500">
                    {t.name}
                  </span>
                ))}
                {mod.topics.length > 6 && (
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-gray-400">
                    +{mod.topics.length - 6} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-400">
        Sign in to track your personal progress for {subject.name}
      </p>
    </div>
  );
}
