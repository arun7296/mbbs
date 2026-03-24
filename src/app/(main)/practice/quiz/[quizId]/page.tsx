import { getServerTrpc } from "@/lib/trpc/server";
import type { QuizQuestionData } from "@/components/quiz/QuizShell";
import QuizClient from "./quiz-client";

interface PageProps {
  params: Promise<{ quizId: string }>;
  searchParams: Promise<{ mode?: string; count?: string; subject?: string; topics?: string }>;
}

export default async function QuizPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const mode = sp.mode === "timed" ? "timed_test" : "practice";
  const count = Math.min(Math.max(parseInt(sp.count || "20", 10) || 20, 1), 100);
  const subjectId = sp.subject || "";
  const topicIds = sp.topics ? sp.topics.split(",").filter(Boolean) : [];

  const trpc = await getServerTrpc();

  // Fetch real questions from the database
  const dbQuestions = await trpc.assessment.getQuestions({
    ...(subjectId && { subjectId }),
    limit: count,
  });

  // If topic filter is provided, filter further
  let filtered = dbQuestions;
  if (topicIds.length > 0) {
    filtered = dbQuestions.filter((q) => q.topicId && topicIds.includes(q.topicId));
  }

  // Shuffle questions for variety
  const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, count);

  // Map DB questions to QuizQuestionData format
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

  // Fallback if no questions found
  if (questions.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">No questions available</p>
          <p className="mt-1 text-sm text-gray-500">
            No published questions found for the selected subject and topics. Try a different selection.
          </p>
          <a href="/practice" className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            Back to Practice
          </a>
        </div>
      </div>
    );
  }

  const timeLimitMin = mode === "timed_test" ? Math.ceil(questions.length * 1.5) : undefined;

  return <QuizClient questions={questions} mode={mode} timeLimitMin={timeLimitMin} />;
}
