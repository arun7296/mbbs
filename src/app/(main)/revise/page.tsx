import Link from "next/link";
import { RotateCcw, AlertTriangle, BookOpen } from "lucide-react";
import { getServerTrpc } from "@/lib/trpc/server";

export default async function RevisePage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();
  const allSubjects = Object.values(phaseGroups).flat();

  // Get a sample of topics across subjects for the revision overview
  const subjectSample = allSubjects.slice(0, 6);
  const topicsBySubject = await Promise.all(
    subjectSample.map(async (s) => {
      const full = await trpc.curriculum.getSubject({ code: s.code });
      const topics = full?.modules.flatMap((m) =>
        m.topics.map((t) => ({
          id: t.id,
          name: t.name,
          code: t.code,
          moduleName: m.name,
          moduleCode: m.code,
          subjectName: s.name,
          subjectCode: s.code,
        }))
      ) ?? [];
      return { subject: s, topics };
    })
  );

  const totalTopics = topicsBySubject.reduce((sum, s) => sum + s.topics.length, 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Revise</h1>
        <p className="text-gray-500">Spaced repetition and weak area targeted review</p>
      </div>

      {/* Spaced Repetition Info */}
      <div className="mb-8 rounded-xl border border-orange-200 bg-orange-50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <RotateCcw className="h-6 w-6 text-orange-600" />
          <h2 className="text-lg font-semibold text-orange-800">Spaced Repetition</h2>
        </div>
        <p className="text-sm text-orange-700 mb-4">
          Topics are scheduled for review at optimal intervals using the SM-2 algorithm to maximize retention.
          Sign in to track your review schedule and see personalized due cards.
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-orange-600">{allSubjects.length}</p>
            <p className="text-xs text-gray-500">Subjects</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-amber-600">{totalTopics}+</p>
            <p className="text-xs text-gray-500">Topics Available</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-gray-600">5</p>
            <p className="text-xs text-gray-500">Layers per Topic</p>
          </div>
        </div>
      </div>

      {/* Browse Topics by Subject */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900">Browse Topics for Review</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Select any topic to start reviewing. Each topic has 5 learning layers from Foundation to Active Recall.
        </p>
        <div className="space-y-6">
          {topicsBySubject.map(({ subject, topics }) => (
            <div key={subject.code}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700">
                  {subject.name} ({subject.code})
                </h3>
                <Link
                  href={`/learn/${subject.code}`}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  View all →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.slice(0, 8).map((t) => (
                  <Link
                    key={t.id}
                    href={`/learn/${t.subjectCode}/${t.moduleCode}/${t.code}`}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                  >
                    {t.name}
                  </Link>
                ))}
                {topics.length > 8 && (
                  <span className="rounded-full border border-dashed border-gray-200 px-3 py-1 text-xs text-gray-400">
                    +{topics.length - 8} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-400">
        Sign in to enable personalized spaced repetition scheduling and weak area detection
      </p>
    </div>
  );
}
