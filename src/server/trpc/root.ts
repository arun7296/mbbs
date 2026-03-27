import { router } from "./trpc";
import { curriculumRouter } from "./routers/curriculum.router";
import { contentRouter } from "./routers/content.router";
import { assessmentRouter } from "./routers/assessment.router";
import { progressRouter } from "./routers/progress.router";
import { clinicalRouter } from "./routers/clinical.router";
import { clinicalDecisionRouter } from "./routers/clinical-decision.router";
import { studyPlanRouter } from "./routers/studyPlan.router";
import { searchRouter } from "./routers/search.router";
import { videoRouter } from "./routers/video.router";
import { visualRouter } from "./routers/visual.router";

export const appRouter = router({
  curriculum: curriculumRouter,
  content: contentRouter,
  assessment: assessmentRouter,
  progress: progressRouter,
  clinical: clinicalRouter,
  clinicalDecision: clinicalDecisionRouter,
  studyPlan: studyPlanRouter,
  search: searchRouter,
  video: videoRouter,
  visual: visualRouter,
});

export type AppRouter = typeof appRouter;
