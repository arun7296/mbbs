import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const clinicalRouter = router({
  getCases: publicProcedure
    .input(
      z.object({
        caseType: z.string().optional(),
        difficulty: z.enum(["EASY", "MEDIUM", "HARD", "EXPERT"]).optional(),
        subjectId: z.string().optional(),
        limit: z.number().min(1).max(200).default(100),
        cursor: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const items = await ctx.prisma.clinicalCase.findMany({
        where: {
          status: "PUBLISHED",
          ...(input.caseType && { caseType: input.caseType }),
          ...(input.difficulty && { difficulty: input.difficulty }),
          ...(input.subjectId && { subjectIds: { has: input.subjectId } }),
        },
        orderBy: { createdAt: "desc" },
        take: input.limit + 1,
        ...(input.cursor && { cursor: { id: input.cursor }, skip: 1 }),
      });

      let nextCursor: string | undefined;
      if (items.length > input.limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return { items, nextCursor };
    }),

  getCase: publicProcedure
    .input(z.object({ caseId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.clinicalCase.findUnique({
        where: { id: input.caseId },
        include: { stages: { orderBy: { stageOrder: "asc" } } },
      });
    }),

  startCase: protectedProcedure
    .input(z.object({ caseId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const attempt = await ctx.prisma.caseAttempt.create({
        data: {
          userId: ctx.userId,
          caseId: input.caseId,
          decisions: [],
        },
      });

      const firstStage = await ctx.prisma.caseStage.findFirst({
        where: { caseId: input.caseId },
        orderBy: { stageOrder: "asc" },
      });

      return { attempt, firstStage };
    }),

  submitDecision: protectedProcedure
    .input(
      z.object({
        attemptId: z.string(),
        stageId: z.string(),
        actionId: z.string(),
        timeSpentSec: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const attempt = await ctx.prisma.caseAttempt.findUnique({
        where: { id: input.attemptId },
      });
      if (!attempt) throw new Error("Attempt not found");

      const stage = await ctx.prisma.caseStage.findUnique({
        where: { id: input.stageId },
      });
      if (!stage) throw new Error("Stage not found");

      const actions = stage.availableActions as Array<{
        id: string;
        text: string;
        isOptimal: boolean;
        findings?: string;
        scoreDelta: number;
      }>;

      const chosenAction = actions.find((a) => a.id === input.actionId);
      if (!chosenAction) throw new Error("Action not found");

      const decisions = attempt.decisions as Array<Record<string, unknown>>;
      decisions.push({
        stageId: input.stageId,
        actionChosen: input.actionId,
        actionText: chosenAction.text,
        timeSpentSec: input.timeSpentSec,
        scoreAwarded: chosenAction.scoreDelta,
        isOptimal: chosenAction.isOptimal,
      });

      await ctx.prisma.caseAttempt.update({
        where: { id: input.attemptId },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: { decisions: decisions as any },
      });

      return {
        findings: chosenAction.findings,
        scoreDelta: chosenAction.scoreDelta,
        isOptimal: chosenAction.isOptimal,
      };
    }),

  completeCase: protectedProcedure
    .input(z.object({ attemptId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const attempt = await ctx.prisma.caseAttempt.findUnique({
        where: { id: input.attemptId },
        include: { clinicalCase: { include: { stages: true } } },
      });
      if (!attempt) throw new Error("Attempt not found");

      const decisions = attempt.decisions as Array<{ scoreAwarded: number }>;
      const totalScore = decisions.reduce((sum, d) => sum + (d.scoreAwarded || 0), 0);

      // Calculate max possible score from all optimal actions
      let maxScore = 0;
      for (const stage of attempt.clinicalCase.stages) {
        const actions = stage.availableActions as Array<{ scoreDelta: number; isOptimal: boolean }>;
        maxScore += actions.filter((a) => a.isOptimal).reduce((sum, a) => sum + a.scoreDelta, 0);
      }

      return ctx.prisma.caseAttempt.update({
        where: { id: input.attemptId },
        data: {
          completedAt: new Date(),
          totalScore,
          maxScore,
          feedback: `You scored ${totalScore}/${maxScore}. ${totalScore / maxScore > 0.7 ? "Good clinical reasoning!" : "Review the case to identify missed findings."}`,
        },
      });
    }),

  getOsceStations: publicProcedure
    .input(z.object({ subjectId: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.osceStation.findMany({
        where: {
          status: "PUBLISHED",
          ...(input.subjectId && { subjectId: input.subjectId }),
        },
      });
    }),
});
