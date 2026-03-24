import { getServerTrpc } from "@/lib/trpc/server";
import type { QuizQuestionData } from "@/components/quiz/QuizShell";
import MockClient from "./mock-client";

interface PageProps {
  params: Promise<{ examId: string }>;
  searchParams: Promise<{ subjects?: string; count?: string; time?: string }>;
}

export default async function MockExamPage({ params, searchParams }: PageProps) {
  const { examId } = await params;
  const sp = await searchParams;
  const subjectIds = sp.subjects ? sp.subjects.split(",").filter(Boolean) : [];
  const count = Math.min(Math.max(parseInt(sp.count || "30", 10) || 30, 1), 200);
  const timeLimitMin = parseInt(sp.time || "45", 10) || 45;

  const trpc = await getServerTrpc();

  // Fetch questions across all requested subjects
  const allQuestions = await Promise.all(
    subjectIds.length > 0
      ? subjectIds.map((sid) =>
          trpc.assessment.getQuestions({ subjectId: sid, limit: Math.ceil(count / subjectIds.length) + 5 })
        )
      : [trpc.assessment.getQuestions({ limit: count })]
  );

  // Combine, shuffle, and take the requested count
  const combined = allQuestions.flat();
  const shuffled = [...combined].sort(() => Math.random() - 0.5).slice(0, count);

  // Map to QuizQuestionData
  const questions: QuizQuestionData[] = shuffled.map((q) => {
    const opts = (q.options as Array<{ id: string; text: string; isCorrect: boolean; explanation?: string }>) ?? [];
    return {
      id: q.id,
      stem: q.stem,
      clinicalVignette: q.clinicalVignette ?? undefined,
      options: opts,
      explanation: q.explanation,
      difficulty: q.difficulty,
      bloomsLevel: q.bloomsLevel,
    };
  });

  const examTitle = examId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (questions.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">No questions available</p>
          <p className="mt-1 text-sm text-gray-500">
            No published questions found for this exam configuration. Try a different exam.
          </p>
          <a href="/test" className="mt-4 inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            Back to Tests
          </a>
        </div>
      </div>
    );
  }

  return <MockClient questions={questions} timeLimitMin={timeLimitMin} examTitle={examTitle} />;
}
