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
    }>;
  };

  // Use lessons from the include, or fetch separately
  const lessons = topic.lessons ?? await trpc.content.getLessonsByTopic({ topicId: topic.id });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lessonData = lessons.map((l: any) => ({
    layer: l.layer,
    title: l.title,
    contentMd: l.contentMd,
    summary: l.summary ?? undefined,
    mnemonics: (l.mnemonics as Array<{ text: string; explanation: string }>) ?? undefined,
    keyPoints: (l.keyPoints as string[]) ?? undefined,
    textbookRefs: (l.textbookRefs as Array<{ book: string; chapter: string; page?: string; edition?: string }>) ?? undefined,
    estimatedMinutes: l.estimatedMinutes,
    examTags: l.examTags as string[],
    videos: l.videos?.map((v: any) => ({
      youtubeVideoId: v.youtubeVideoId,
      youtubeUrl: v.youtubeUrl,
      title: v.title,
      channelName: v.channelName,
      channelUrl: v.channelUrl,
      durationSeconds: v.durationSeconds,
      description: v.description,
      startTimestamp: v.startTimestamp,
      quality: v.quality,
      thumbnailUrl: v.thumbnailUrl,
      viewCount: v.viewCount,
      sortOrder: v.sortOrder,
    })),
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
