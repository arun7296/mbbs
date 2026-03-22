import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const progressRouter = router({
  getOverview: protectedProcedure.query(async ({ ctx }) => {
    const [progress, streak, quizzes, abilities] = await Promise.all([
      ctx.prisma.userProgress.findMany({
        where: { userId: ctx.userId },
        include: { topic: { include: { module: { include: { subject: true } } } } },
      }),
      ctx.prisma.userStreak.findUnique({ where: { userId: ctx.userId } }),
      ctx.prisma.quiz.findMany({
        where: { userId: ctx.userId, completedAt: { not: null } },
        orderBy: { completedAt: "desc" },
        take: 10,
      }),
      ctx.prisma.subjectAbility.findMany({
        where: { userId: ctx.userId },
        include: { subject: true },
      }),
    ]);

    // Group progress by subject
    const subjectProgress = progress.reduce(
      (acc, p) => {
        const subjectCode = p.topic.module.subject.code;
        if (!acc[subjectCode]) {
          acc[subjectCode] = {
            subject: p.topic.module.subject,
            topics: [],
            avgMastery: 0,
            totalTimeMin: 0,
          };
        }
        acc[subjectCode].topics.push(p);
        acc[subjectCode].totalTimeMin += p.timeSpentMin;
        return acc;
      },
      {} as Record<string, { subject: typeof progress[0]["topic"]["module"]["subject"]; topics: typeof progress; avgMastery: number; totalTimeMin: number }>
    );

    // Calculate average mastery per subject
    for (const key of Object.keys(subjectProgress)) {
      const sp = subjectProgress[key];
      sp.avgMastery = sp.topics.reduce((sum, t) => sum + t.masteryLevel, 0) / sp.topics.length;
    }

    return { subjectProgress, streak, recentQuizzes: quizzes, abilities };
  }),

  getWeakAreas: protectedProcedure.query(async ({ ctx }) => {
    const progress = await ctx.prisma.userProgress.findMany({
      where: { userId: ctx.userId },
      include: {
        topic: {
          include: {
            module: { include: { subject: true } },
            competency: true,
          },
        },
      },
    });

    // Calculate weakness score per topic
    const now = new Date();
    const weakAreas = progress
      .map((p) => {
        const daysSinceReview = p.lastAccessedAt
          ? (now.getTime() - p.lastAccessedAt.getTime()) / (1000 * 60 * 60 * 24)
          : 30;
        const weaknessScore =
          0.3 * (1 - p.masteryLevel) +
          0.25 * (1 - (p.completionPct / 100)) +
          0.15 * Math.min(daysSinceReview / 30, 1) +
          0.1 * (1 - Math.min(p.timeSpentMin / 120, 1)); // assume 120 min expected per topic

        return {
          ...p,
          weaknessScore,
          daysSinceReview: Math.round(daysSinceReview),
        };
      })
      .filter((p) => p.weaknessScore > 0.4)
      .sort((a, b) => b.weaknessScore - a.weaknessScore);

    return weakAreas;
  }),

  updateProgress: protectedProcedure
    .input(
      z.object({
        topicId: z.string(),
        subjectId: z.string(),
        lessonId: z.string().optional(),
        completionPct: z.number().min(0).max(100).optional(),
        timeSpentMin: z.number().min(0).optional(),
        masteryLevel: z.number().min(0).max(1).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.prisma.userProgress.findUnique({
        where: { userId_topicId: { userId: ctx.userId, topicId: input.topicId } },
      });

      if (existing) {
        return ctx.prisma.userProgress.update({
          where: { id: existing.id },
          data: {
            ...(input.completionPct !== undefined && { completionPct: input.completionPct }),
            ...(input.timeSpentMin !== undefined && { timeSpentMin: existing.timeSpentMin + input.timeSpentMin }),
            ...(input.masteryLevel !== undefined && { masteryLevel: input.masteryLevel }),
            ...(input.lessonId && { lessonId: input.lessonId }),
            lastAccessedAt: new Date(),
          },
        });
      }

      return ctx.prisma.userProgress.create({
        data: {
          userId: ctx.userId,
          topicId: input.topicId,
          subjectId: input.subjectId,
          lessonId: input.lessonId,
          completionPct: input.completionPct ?? 0,
          timeSpentMin: input.timeSpentMin ?? 0,
          masteryLevel: input.masteryLevel ?? 0,
        },
      });
    }),

  updateStreak: protectedProcedure.mutation(async ({ ctx }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existing = await ctx.prisma.userStreak.findUnique({
      where: { userId: ctx.userId },
    });

    if (!existing) {
      return ctx.prisma.userStreak.create({
        data: {
          userId: ctx.userId,
          currentStreak: 1,
          longestStreak: 1,
          lastActiveDate: today,
        },
      });
    }

    const lastActive = new Date(existing.lastActiveDate);
    lastActive.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return existing; // Already counted today
    if (diffDays === 1) {
      // Consecutive day
      const newStreak = existing.currentStreak + 1;
      return ctx.prisma.userStreak.update({
        where: { userId: ctx.userId },
        data: {
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, existing.longestStreak),
          lastActiveDate: today,
        },
      });
    }

    // Streak broken
    return ctx.prisma.userStreak.update({
      where: { userId: ctx.userId },
      data: {
        currentStreak: 1,
        lastActiveDate: today,
      },
    });
  }),

  getRevisionQueue: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    return ctx.prisma.userProgress.findMany({
      where: {
        userId: ctx.userId,
        nextReviewAt: { lte: now },
      },
      include: {
        topic: {
          include: {
            module: { include: { subject: true } },
          },
        },
      },
      orderBy: { nextReviewAt: "asc" },
      take: 20,
    });
  }),

  submitReview: protectedProcedure
    .input(
      z.object({
        topicId: z.string(),
        quality: z.number().min(0).max(5),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.prisma.userProgress.findUnique({
        where: { userId_topicId: { userId: ctx.userId, topicId: input.topicId } },
      });

      if (!existing) throw new Error("No progress record found for this topic");

      const q = input.quality;
      let { easeFactor, interval, repetitions } = existing;

      if (q >= 3) {
        if (repetitions === 0) interval = 1;
        else if (repetitions === 1) interval = 6;
        else interval = Math.round(interval * easeFactor);
        repetitions++;
      } else {
        repetitions = 0;
        interval = 1;
      }

      easeFactor = Math.max(
        1.3,
        easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
      );

      const nextReviewAt = new Date();
      nextReviewAt.setDate(nextReviewAt.getDate() + interval);

      // Update mastery based on quality
      const masteryDelta = q >= 4 ? 0.05 : q === 3 ? 0.02 : -0.1;
      const newMastery = Math.max(0, Math.min(1, existing.masteryLevel + masteryDelta));

      return ctx.prisma.userProgress.update({
        where: { id: existing.id },
        data: {
          easeFactor,
          interval,
          repetitions,
          nextReviewAt,
          masteryLevel: newMastery,
          lastAccessedAt: new Date(),
        },
      });
    }),
});
