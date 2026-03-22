import { router } from "./trpc";
import { curriculumRouter } from "./routers/curriculum.router";
import { contentRouter } from "./routers/content.router";
import { assessmentRouter } from "./routers/assessment.router";
import { progressRouter } from "./routers/progress.router";
import { clinicalRouter } from "./routers/clinical.router";
import { studyPlanRouter } from "./routers/studyPlan.router";

export const appRouter = router({
  curriculum: curriculumRouter,
  content: contentRouter,
  assessment: assessmentRouter,
  progress: progressRouter,
  clinical: clinicalRouter,
  studyPlan: studyPlanRouter,
});

export type AppRouter = typeof appRouter;
