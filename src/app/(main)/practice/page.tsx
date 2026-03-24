import { getServerTrpc } from "@/lib/trpc/server";
import PracticeClient from "./practice-client";

export default async function PracticePage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();

  // Flatten all subjects from all phases
  const allSubjects = Object.values(phaseGroups).flat();

  // Get question counts per subject
  const subjectsWithCounts = await Promise.all(
    allSubjects.map(async (s) => {
      const questions = await trpc.assessment.getQuestions({
        subjectId: s.id,
        limit: 1,
      });
      // We need actual count — use a workaround: fetch with high limit
      const allQs = await trpc.assessment.getQuestions({
        subjectId: s.id,
        limit: 100,
      });
      return {
        id: s.id,
        code: s.code,
        name: s.name,
        questionCount: allQs.length,
      };
    })
  );

  // Get modules with topics for each subject that has questions
  const subjectsWithTopics = await Promise.all(
    subjectsWithCounts
      .filter((s) => s.questionCount > 0)
      .map(async (s) => {
        const subject = await trpc.curriculum.getSubject({ code: s.code });
        const modules = subject?.modules ?? [];
        const topics = modules.flatMap((m) =>
          m.topics.map((t) => ({
            id: t.id,
            name: t.name,
            code: t.code,
            moduleName: m.name,
          }))
        );
        return { ...s, topics };
      })
  );

  return (
    <PracticeClient
      subjects={subjectsWithCounts}
      subjectTopics={Object.fromEntries(
        subjectsWithTopics.map((s) => [s.id, s.topics])
      )}
    />
  );
}
