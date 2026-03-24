import { getServerTrpc } from "@/lib/trpc/server";
import StudyPlanClient from "./study-plan-client";

export default async function StudyPlanPage() {
  const trpc = await getServerTrpc();
  const phaseGroups = await trpc.curriculum.getPhases();
  const allSubjects = Object.values(phaseGroups).flat();

  // Gather a sample of real topics across subjects for the plan generator
  const sampleSubjects = allSubjects.slice(0, 8);
  const topicSamples = await Promise.all(
    sampleSubjects.map(async (s) => {
      const full = await trpc.curriculum.getSubject({ code: s.code });
      return (
        full?.modules.flatMap((m) =>
          m.topics.slice(0, 3).map((t) => ({
            name: t.name,
            subjectName: s.name,
          }))
        ) ?? []
      );
    })
  );

  const topics = topicSamples.flat();

  // Count total topics across all subjects
  let totalTopics = 0;
  for (const s of allSubjects) {
    totalTopics += s._count.modules * 5; // estimate
  }

  return (
    <StudyPlanClient
      topics={topics}
      subjectCount={allSubjects.length}
      topicCount={totalTopics}
    />
  );
}
