import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LessonViewer } from "@/components/lesson/LessonViewer";
import { getServerTrpc } from "@/lib/trpc/server";
import { notFound } from "next/navigation";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subjectCode: string; moduleCode: string; topicSlug: string }>;
}) {
  const { subjectCode, moduleCode, topicSlug } = await params;
  const trpc = await getServerTrpc();

  const topicRaw = await trpc.curriculum.getTopic({ code: topicSlug });
  if (!topicRaw) return notFound();

  // Cast to access included relations (Prisma Accelerate strips include types)
  const topic = topicRaw as typeof topicRaw & {
    module: { name: string; subject: { name: string } };
    competency: { code: string } | null;
    lessons: Array<{
      layer: number; title: string; contentMd: string; summary: string | null;
      mnemonics: unknown; keyPoints: unknown; textbookRefs: unknown;
      estimatedMinutes: number; examTags: string[];
      videos?: Array<{
        youtubeVideoId: string; youtubeUrl: string; title: string;
        channelName: string; channelUrl: string | null;
        durationSeconds: number; description: string | null;
        startTimestamp: number | null; quality: string;
        thumbnailUrl: string | null; viewCount: number | null;
        sortOrder: number;
      }>;
      visuals?: Array<{
        id: string; type: string; title: string; description: string | null;
        componentName: string | null; imageUrl: string | null;
        imageAlt: string | null; attribution: string | null;
        license: string | null; svgContent: string | null;
        annotations: any; category: string; tags: string[];
        sortOrder: number;
      }>;
      scenarios?: Array<{
        id: string; patientAge: number; patientSex: string;
        patientOccupation: string | null; patientLocation: string | null;
        chiefComplaint: string; historyOfPresent: string;
        pastHistory: string | null; familyHistory: string | null;
        socialHistory: string | null; drugHistory: string | null;
        vitals: unknown; generalExam: string | null; systemicExam: unknown;
        availableInvestigations: unknown; correctDiagnosis: string;
        differentials: unknown; diagnosticReasoning: string;
        managementPlan: unknown; redFlags: unknown; keyLearningPoints: unknown;
        commonMistakes: unknown; relevantHistoryQs: unknown;
        relevantExamIds: unknown; difficulty: string; estimatedMinutes: number;
        subjectTags: string[]; examRelevance: string[];
        nmcCompetencyCode: string | null; maxScore: number; passingScore: number;
      }>;
    }>;
  };

  // Use lessons from the include, or fetch separately
  const lessons = topic.lessons ?? await trpc.content.getLessonsByTopic({ topicId: topic.id });

  const lessonData = lessons.map((l: Record<string, unknown>) => ({
    layer: l.layer as number,
    title: l.title as string,
    contentMd: l.contentMd as string,
    summary: (l.summary as string | null) ?? undefined,
    mnemonics: (l.mnemonics as Array<{ text: string; explanation: string }>) ?? undefined,
    keyPoints: (l.keyPoints as string[]) ?? undefined,
    textbookRefs: (l.textbookRefs as Array<{ book: string; chapter: string; page?: string; edition?: string }>) ?? undefined,
    estimatedMinutes: l.estimatedMinutes as number,
    examTags: l.examTags as string[],
    videos: (l.videos as Record<string, unknown>[] | undefined)?.map((v) => ({
      youtubeVideoId: v.youtubeVideoId as string,
      youtubeUrl: v.youtubeUrl as string,
      title: v.title as string,
      channelName: v.channelName as string,
      channelUrl: v.channelUrl as string | null,
      durationSeconds: v.durationSeconds as number,
      description: v.description as string | null,
      startTimestamp: v.startTimestamp as number | null,
      quality: v.quality as string,
      thumbnailUrl: v.thumbnailUrl as string | null,
      viewCount: v.viewCount as number | null,
      sortOrder: v.sortOrder as number,
    })),
    visuals: (l.visuals as Record<string, unknown>[] | undefined)?.map((v) => ({
      id: v.id as string,
      type: v.type as string,
      title: v.title as string,
      description: v.description as string | null,
      componentName: v.componentName as string | null,
      imageUrl: v.imageUrl as string | null,
      imageAlt: v.imageAlt as string | null,
      attribution: v.attribution as string | null,
      license: v.license as string | null,
      svgContent: v.svgContent as string | null,
      annotations: v.annotations,
      category: v.category as string,
      tags: v.tags as string[],
      sortOrder: v.sortOrder as number,
    })),
    clinicalScenario: (() => {
      const scenarios = l.scenarios as Array<Record<string, unknown>> | undefined;
      const s = scenarios?.[0];
      if (!s) return undefined;
      return {
        id: s.id as string,
        patientAge: s.patientAge as number,
        patientSex: s.patientSex as string,
        patientOccupation: s.patientOccupation as string | null,
        patientLocation: s.patientLocation as string | null,
        chiefComplaint: s.chiefComplaint as string,
        historyOfPresent: s.historyOfPresent as string,
        pastHistory: s.pastHistory as string | null,
        familyHistory: s.familyHistory as string | null,
        socialHistory: s.socialHistory as string | null,
        drugHistory: s.drugHistory as string | null,
        vitals: s.vitals,
        generalExam: s.generalExam as string | null,
        difficulty: s.difficulty as string,
        estimatedMinutes: s.estimatedMinutes as number,
        examRelevance: s.examRelevance as string[],
        maxScore: s.maxScore as number,
        disclaimer: "This is an educational simulation only. Not for real patient care.",
      };
    })(),
  }));

  const subjectName = topic.module?.subject?.name ?? "Subject";
  const moduleName = topic.module?.name ?? "Module";

  return (
    <div>
      <div className="border-b bg-white px-4 py-3 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/learn" className="hover:text-gray-700">Learn</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/learn/${subjectCode}`} className="hover:text-gray-700">{subjectName}</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/learn/${subjectCode}/${moduleCode}`} className="hover:text-gray-700">{moduleName}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-900">{topic.name}</span>
        </nav>
      </div>

      {lessonData.length > 0 ? (
        <LessonViewer
          topicName={topic.name}
          lessons={lessonData}
          competencyCode={topic.competency?.code}
        />
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg font-medium text-gray-600">Content coming soon</p>
          <p className="text-sm text-gray-400">Lessons for {topic.name} are being authored.</p>
          <Link href={`/learn/${subjectCode}/${moduleCode}`} className="mt-4 text-sm text-blue-600 hover:underline">
            ← Back to {moduleName}
          </Link>
        </div>
      )}
    </div>
  );
}
