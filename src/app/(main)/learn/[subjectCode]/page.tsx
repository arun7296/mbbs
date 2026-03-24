import Link from "next/link";
import { ChevronRight, BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { ProgressRing } from "@/components/shared/ProgressRing";
import { getServerTrpc } from "@/lib/trpc/server";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

export default async function SubjectPage({ params }: { params: Promise<{ subjectCode: string }> }) {
  const { subjectCode } = await params;
  const trpc = await getServerTrpc();
  const subjectRaw = await trpc.curriculum.getSubject({ code: subjectCode });
  if (!subjectRaw) return notFound();

  // Cast to access included relations
  const subject = subjectRaw as typeof subjectRaw & {
    modules: Array<{
      code: string; name: string; description: string | null;
      estimatedHours: number; sortOrder: number;
      topics: Array<{ code: string; name: string; competency: { code: string } | null }>;
    }>;
  };

  // Standard textbook mapping for all 19 subjects
  const textbookMap: Record<string, string[]> = {
    AN: ["BD Chaurasia (BDC)", "Gray's Anatomy", "Netter's Atlas", "IB Singh (Histology)", "IB Singh (Embryology)"],
    PY: ["Guyton", "AK Jain", "Ganong", "Sembulingam"],
    BI: ["Harper's Biochemistry", "Satyanarayan", "DM Vasudevan"],
    PA: ["Robbins Pathology", "Harsh Mohan", "Ramadas Nayak"],
    PH: ["KD Tripathi", "Rang & Dale", "Goodman & Gilman"],
    MI: ["Ananthanarayan", "Paniker", "Baveja"],
    FM: ["Reddy's Forensic Medicine", "Nageshkumar Rao", "Aggrawal"],
    CM: ["Park's Textbook", "AH Suryakantha", "Mahajan & Gupta"],
    EN: ["PL Dhingra", "Mohan Bansal", "Logesh Kumar"],
    OP: ["AK Khurana", "Parson's Diseases of the Eye", "Jogi"],
    IM: ["Harrison's Medicine", "Davidson's", "API Textbook"],
    SU: ["Bailey & Love", "SRB Manual", "Manipal Manual of Surgery"],
    OG: ["DC Dutta", "Sheila Balakrishnan", "Williams Obstetrics"],
    PE: ["OP Ghai", "Nelson", "Palaniappan"],
    DR: ["IADVL Textbook", "Neena Khanna", "Valia"],
    PS: ["Niraj Ahuja", "Kaplan & Sadock"],
    OR: ["Maheshwari", "Ebnezar", "Apley's Orthopedics"],
    AS: ["Ajay Yadav", "Lee's Synopsis", "Morgan & Mikhail"],
    RD: ["Sutton's Radiology", "Brant & Helms", "Dahnert"],
  };
  const textbooks = textbookMap[subjectCode] ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/learn" className="hover:text-gray-700">Learn</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-gray-900">{subject.name}</span>
      </nav>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{subject.name}</h1>
          <p className="text-gray-500">
            {subject.totalHours} hours | {subject.modules.length} modules |{" "}
            {subject.modules.reduce((sum, m) => sum + m.topics.length, 0)} topics
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ProgressRing progress={0} size={60} strokeWidth={4}>
            <span className="text-sm font-bold">0%</span>
          </ProgressRing>
        </div>
      </div>

      {textbooks.length > 0 && (
        <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-blue-800">Standard Textbooks</h3>
          <div className="flex flex-wrap gap-2">
            {textbooks.map((book) => (
              <span key={book} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">{book}</span>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {subject.modules.map((mod, i) => (
          <Link
            key={mod.code}
            href={`/learn/${subjectCode}/${mod.code}`}
            className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{mod.name}</h3>
                <ProgressRing progress={0} size={32} strokeWidth={2}>
                  <CheckCircle2 className="h-3 w-3 text-gray-300" />
                </ProgressRing>
              </div>
              <p className="mb-2 text-sm text-gray-500">{mod.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {mod.topics.length} topics</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {mod.estimatedHours}h</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
