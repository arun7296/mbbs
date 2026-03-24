import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const progressRouter = router({
  // ─── Mark a lesson as complete ─────────────────────────────────────
  markLessonComplete: protectedProcedure
    .input(
      z.object({
        lessonId: z.string(),
        topicId: z.string(),
        timeSpentMin: z.number().min(0).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Get topic with its lessons to calculate completion
      const topic = await ctx.prisma.topic.findUnique({
        where: { id: input.topicId },
        include: {
          lessons: { select: { id: true } },
          module: { select: { subjectId: true } },
        },
      });
      if (!topic) throw new Error("Topic not found");

      const totalLayers = topic.lessons.length;

      // Upsert progress for this topic
      const existing = await ctx.prisma.userProgress.findUnique({
        where: { userId_topicId: { userId: ctx.userId, topicId: input.topicId } },
      });

      // Track which lesson layer was completed
      const completedLessonIds = new Set<string>();
      if (existing?.lessonId) completedLessonIds.add(existing.lessonId);
      completedLessonIds.add(input.lessonId);

      // Increment completion based on layers done
      const completionPct = Math.min(100, Math.round((completedLessonIds.size / Math.max(totalLayers, 1)) * 100));
      const isMastered = completionPct >= 100;

      const progress = await ctx.prisma.userProgress.upsert({
        where: { userId_topicId: { userId: ctx.userId, topicId: input.topicId } },
        update: {
          lessonId: input.lessonId,
          completionPct,
          timeSpentMin: { increment: input.timeSpentMin ?? 0 },
          masteryLevel: isMastered ? 1.0 : Math.min(0.9, completionPct / 100),
          lastAccessedAt: new Date(),
          nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Review tomorrow
        },
        create: {
          userId: ctx.userId,
          topicId: input.topicId,
          subjectId: topic.module.subjectId,
          lessonId: input.lessonId,
          completionPct,
          timeSpentMin: input.timeSpentMin ?? 0,
          masteryLevel: completionPct / 100,
          lastAccessedAt: new Date(),
          nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
      });

      // Update streak
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const streak = await ctx.prisma.userStreak.findUnique({ where: { userId: ctx.userId } });

      if (!streak) {
        await ctx.prisma.userStreak.create({
          data: { userId: ctx.userId, currentStreak: 1, longestStreak: 1, lastActiveDate: today },
        });
      } else {
        const lastActive = new Date(streak.lastActiveDate);
        lastActive.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          const newStreak = streak.currentStreak + 1;
          await ctx.prisma.userStreak.update({
            where: { userId: ctx.userId },
            data: {
              currentStreak: newStreak,
              longestStreak: Math.max(newStreak, streak.longestStreak),
              lastActiveDate: today,
            },
          });
        } else if (diffDays > 1) {
          await ctx.prisma.userStreak.update({
            where: { userId: ctx.userId },
            data: { currentStreak: 1, lastActiveDate: today },
          });
        }
      }

      return progress;
    }),

  // ─── Get subject-level progress ────────────────────────────────────
  getSubjectProgress: protectedProcedure
    .input(z.object({ subjectCode: z.string() }))
    .query(async ({ ctx, input }) => {
      const subject = await ctx.prisma.subject.findUnique({
        where: { code: input.subjectCode },
        include: {
          modules: {
            include: {
              topics: {
                include: {
                  _count: { select: { lessons: true } },
                },
              },
            },
            orderBy: { sortOrder: "asc" },
          },
        },
      });
      if (!subject) throw new Error("Subject not found");

      const progress = await ctx.prisma.userProgress.findMany({
        where: { userId: ctx.userId, subjectId: subject.id },
      });
      const progressMap = new Map(progress.map((p) => [p.topicId, p]));

      const quizzes = await ctx.prisma.quiz.findMany({
        where: { userId: ctx.userId, subjectIds: { has: subject.id }, completedAt: { not: null } },
        orderBy: { completedAt: "desc" },
        take: 5,
      });

      const totalTopics = subject.modules.reduce((sum, m) => sum + m.topics.length, 0);
      const completedTopics = progress.filter((p) => p.completionPct >= 100).length;
      const totalLessons = subject.modules.reduce(
        (sum, m) => sum + m.topics.reduce((tSum, t) => tSum + t._count.lessons, 0),
        0
      );
      const avgMastery = progress.length > 0
        ? progress.reduce((sum, p) => sum + p.masteryLevel, 0) / progress.length
        : 0;

      // Weak areas: topics with low mastery or incomplete
      const weakTopics = progress
        .filter((p) => p.masteryLevel < 0.5 || p.completionPct < 50)
        .sort((a, b) => a.masteryLevel - b.masteryLevel)
        .slice(0, 10);

      return {
        subject,
        totalTopics,
        completedTopics,
        totalLessons,
        avgMastery: Math.round(avgMastery * 100),
        recentQuizzes: quizzes,
        weakTopics,
        modules: subject.modules.map((m) => ({
          ...m,
          topics: m.topics.map((t) => ({
            ...t,
            progress: progressMap.get(t.id) ?? null,
          })),
        })),
      };
    }),

  // ─── Dashboard stats ───────────────────────────────────────────────
  getDashboardStats: protectedProcedure.query(async ({ ctx }) => {
    const [
      totalSubjects,
      totalTopics,
      totalLessons,
      progress,
      streak,
      recentQuizzes,
    ] = await Promise.all([
      ctx.prisma.subject.count(),
      ctx.prisma.topic.count(),
      ctx.prisma.lesson.count(),
      ctx.prisma.userProgress.findMany({ where: { userId: ctx.userId } }),
      ctx.prisma.userStreak.findUnique({ where: { userId: ctx.userId } }),
      ctx.prisma.quiz.findMany({
        where: { userId: ctx.userId, completedAt: { not: null } },
        orderBy: { completedAt: "desc" },
        take: 5,
        select: { id: true, title: true, score: true, completedAt: true, totalQs: true },
      }),
    ]);

    const subjectsStarted = new Set(progress.map((p) => p.subjectId)).size;
    const topicsCompleted = progress.filter((p) => p.completionPct >= 100).length;
    const topicsInProgress = progress.filter((p) => p.completionPct > 0 && p.completionPct < 100).length;
    const overallProgress = totalTopics > 0
      ? Math.round((topicsCompleted / totalTopics) * 100)
      : 0;
    const totalStudyTimeMin = progress.reduce((sum, p) => sum + p.timeSpentMin, 0);

    // Weak topics: lowest mastery + incomplete
    const weakTopicIds = progress
      .filter((p) => p.masteryLevel < 0.5)
      .sort((a, b) => a.masteryLevel - b.masteryLevel)
      .slice(0, 5)
      .map((p) => p.topicId);

    const weakTopics = weakTopicIds.length > 0
      ? await ctx.prisma.topic.findMany({
          where: { id: { in: weakTopicIds } },
          include: { module: { include: { subject: true } } },
        })
      : [];

    // Due for review count
    const dueForReview = await ctx.prisma.userProgress.count({
      where: { userId: ctx.userId, nextReviewAt: { lte: new Date() } },
    });

    return {
      totalSubjects,
      totalTopics,
      totalLessons,
      subjectsStarted,
      topicsCompleted,
      topicsInProgress,
      overallProgress,
      totalStudyTimeMin,
      streak: streak ?? { currentStreak: 0, longestStreak: 0 },
      recentQuizzes,
      weakTopics,
      dueForReview,
    };
  }),

  // ─── Record quiz attempt ───────────────────────────────────────────
  recordQuizAttempt: protectedProcedure
    .input(
      z.object({
        quizId: z.string(),
        answers: z.array(
          z.object({
            questionId: z.string(),
            selectedOption: z.string(),
          })
        ),
        score: z.number(),
        timeTaken: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Update each quiz question with the answer
      for (const answer of input.answers) {
        const question = await ctx.prisma.question.findUnique({
          where: { id: answer.questionId },
        });
        const isCorrect = question?.correctAnswer === answer.selectedOption;

        await ctx.prisma.quizQuestion.updateMany({
          where: {
            quizId: input.quizId,
            questionId: answer.questionId,
          },
          data: {
            selectedAnswer: answer.selectedOption,
            isCorrect,
          },
        });
      }

      // Complete the quiz
      const quiz = await ctx.prisma.quiz.update({
        where: { id: input.quizId },
        data: {
          completedAt: new Date(),
          score: input.score,
        },
      });

      return quiz;
    }),

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
