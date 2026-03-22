import Link from "next/link";
import { ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { getServerTrpc } from "@/lib/trpc/server";
import { notFound } from "next/navigation";

const layerColors = [
  "bg-blue-100 text-blue-700",
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
];
const layerNames = ["Foundation", "Mechanism", "Clinical", "Exam Prep", "Active Recall"];

export default async function ModulePage({ params }: { params: Promise<{ subjectCode: string; moduleCode: string }> }) {
  const { subjectCode, moduleCode } = await params;
  const trpc = await getServerTrpc();
  const modRaw = await trpc.curriculum.getModule({ code: moduleCode });
  if (!modRaw) return notFound();

  // Cast to access included relations (Prisma Accelerate may strip types)
  const mod = modRaw as typeof modRaw & {
    subject: { name: string };
    topics: Array<{
      code: string; name: string; sortOrder: number;
      competency: { code: string } | null;
      lessons: Array<{ layer: number }>;
    }>;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/learn" className="hover:text-gray-700">Learn</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/learn/${subjectCode}`} className="hover:text-gray-700">{mod.subject.name}</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-gray-900">{mod.name}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{mod.name}</h1>
        <p className="text-gray-500">{mod.topics.length} topics | {mod.estimatedHours} hours</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {layerNames.map((name, i) => (
          <span key={name} className={`rounded-full px-3 py-1 text-xs font-medium ${layerColors[i]}`}>
            Layer {i + 1}: {name}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        {mod.topics.map((topic, i) => {
          const lessonCount = topic.lessons?.length ?? 0;
          return (
            <div key={topic.code} className="rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm">
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{topic.name}</h3>
                    {lessonCount === 5 && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                  </div>
                  {topic.competency && (
                    <p className="text-xs text-gray-400">NMC: {topic.competency.code}</p>
                  )}
                </div>
                <Link
                  href={`/learn/${subjectCode}/${moduleCode}/${topic.code}`}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <Play className="h-4 w-4" /> {lessonCount > 0 ? "Start" : "Coming Soon"}
                </Link>
              </div>

              {lessonCount > 0 && (
                <div className="flex gap-1 border-t px-4 py-2">
                  {layerNames.map((name, j) => {
                    const hasLayer = topic.lessons?.some((l) => l.layer === j + 1);
                    return (
                      <div key={name} className="flex-1">
                        <div className="h-1.5 rounded-full bg-gray-100">
                          <div className={`h-1.5 rounded-full ${hasLayer ? "bg-blue-500" : "bg-gray-200"}`} style={{ width: hasLayer ? "100%" : "0%" }} />
                        </div>
                        <p className="mt-1 text-center text-[10px] text-gray-400">{name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
