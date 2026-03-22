import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const assessmentRouter = router({
  getQuestions: publicProcedure
    .input(
      z.object({
        subjectId: z.string().optional(),
        topicId: z.string().optional(),
        difficulty: z.enum(["EASY", "MEDIUM", "HARD", "EXPERT"]).optional(),
        limit: z.number().min(1).max(100).default(20),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.question.findMany({
        where: {
          status: "PUBLISHED",
          ...(input.subjectId && { subjectId: input.subjectId }),
          ...(input.topicId && { topicId: input.topicId }),
          ...(input.difficulty && { difficulty: input.difficulty }),
        },
        take: input.limit,
        orderBy: { createdAt: "desc" },
      });
    }),

  startQuiz: protectedProcedure
    .input(
      z.object({
        mode: z.enum(["practice", "timed_test", "mock_exam", "adaptive"]),
        subjectIds: z.array(z.string()).min(1),
        topicIds: z.array(z.string()).optional(),
        count: z.number().min(1).max(200).default(20),
        timeLimitMin: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Fetch questions matching criteria
      const questions = await ctx.prisma.question.findMany({
        where: {
          status: "PUBLISHED",
          subjectId: { in: input.subjectIds },
          ...(input.topicIds?.length && { topicId: { in: input.topicIds } }),
        },
        take: input.count * 2, // fetch extra for randomization
      });

      // Shuffle and take requested count
      const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, input.count);

      // Create quiz
      const quiz = await ctx.prisma.quiz.create({
        data: {
          userId: ctx.userId,
          title: `${input.mode} - ${new Date().toLocaleDateString()}`,
          mode: input.mode,
          subjectIds: input.subjectIds,
          topicIds: input.topicIds ?? [],
          totalQs: shuffled.length,
          timeLimitMin: input.timeLimitMin,
        },
      });

      // Create quiz questions
      await ctx.prisma.quizQuestion.createMany({
        data: shuffled.map((q, i) => ({
          quizId: quiz.id,
          questionId: q.id,
          sequenceNum: i + 1,
        })),
      });

      // Increment usage counts
      await ctx.prisma.question.updateMany({
        where: { id: { in: shuffled.map((q) => q.id) } },
        data: { usageCount: { increment: 1 } },
      });

      return ctx.prisma.quiz.findUnique({
        where: { id: quiz.id },
        include: {
          questions: {
            orderBy: { sequenceNum: "asc" },
            include: {
              question: {
                select: {
                  id: true,
                  type: true,
                  stem: true,
                  options: true,
                  difficulty: true,
                  clinicalVignette: true,
                  imageUrls: true,
                  bloomsLevel: true,
                },
              },
            },
          },
        },
      });
    }),

  submitAnswer: protectedProcedure
    .input(
      z.object({
        quizQuestionId: z.string(),
        selectedAnswer: z.string(),
        timeSpentSec: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const qq = await ctx.prisma.quizQuestion.findUnique({
        where: { id: input.quizQuestionId },
        include: { question: true },
      });

      if (!qq) throw new Error("Quiz question not found");

      // Determine correctness
      let isCorrect = false;
      if (qq.question.type === "MCQ_SINGLE" || qq.question.type === "CASE_BASED_MCQ") {
        const options = qq.question.options as Array<{ id: string; isCorrect: boolean }>;
        const correctOption = options.find((o) => o.isCorrect);
        isCorrect = correctOption?.id === input.selectedAnswer;
      } else if (qq.question.correctAnswer) {
        isCorrect = qq.question.correctAnswer === input.selectedAnswer;
      }

      await ctx.prisma.quizQuestion.update({
        where: { id: input.quizQuestionId },
        data: {
          selectedAnswer: input.selectedAnswer,
          isCorrect,
          timeSpentSec: input.timeSpentSec,
        },
      });

      return {
        isCorrect,
        explanation: qq.question.explanation,
        correctOption: (qq.question.options as Array<{ id: string; isCorrect: boolean }>)?.find(
          (o) => o.isCorrect
        ),
      };
    }),

  completeQuiz: protectedProcedure
    .input(z.object({ quizId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const quiz = await ctx.prisma.quiz.findUnique({
        where: { id: input.quizId },
        include: { questions: { include: { question: true } } },
      });

      if (!quiz) throw new Error("Quiz not found");

      const answered = quiz.questions.filter((q) => q.selectedAnswer !== null);
      const correct = answered.filter((q) => q.isCorrect);
      const score = answered.length > 0 ? (correct.length / answered.length) * 100 : 0;

      return ctx.prisma.quiz.update({
        where: { id: input.quizId },
        data: {
          completedAt: new Date(),
          score,
        },
        include: {
          questions: {
            orderBy: { sequenceNum: "asc" },
            include: { question: true },
          },
        },
      });
    }),

  getQuizResults: protectedProcedure
    .input(z.object({ quizId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.quiz.findUnique({
        where: { id: input.quizId, userId: ctx.userId },
        include: {
          questions: {
            orderBy: { sequenceNum: "asc" },
            include: { question: true },
          },
        },
      });
    }),

  getUserQuizzes: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(50).default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.quiz.findMany({
        where: { userId: ctx.userId },
        orderBy: { startedAt: "desc" },
        take: input.limit,
      });
    }),
});
