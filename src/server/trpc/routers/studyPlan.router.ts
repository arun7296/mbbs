import { z } from "zod";
import type { Prisma } from "@/generated/prisma/client";
import { router, protectedProcedure } from "../trpc";

export const studyPlanRouter = router({
  getActivePlan: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.studyPlan.findFirst({
      where: { userId: ctx.userId, isActive: true },
      include: {
        days: {
          orderBy: { date: "asc" },
          take: 7,
        },
      },
    });
  }),

  getToday: protectedProcedure.query(async ({ ctx }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const plan = await ctx.prisma.studyPlan.findFirst({
      where: { userId: ctx.userId, isActive: true },
    });
    if (!plan) return null;

    return ctx.prisma.studyPlanDay.findFirst({
      where: {
        planId: plan.id,
        date: { gte: today, lt: tomorrow },
      },
    });
  }),

  generate: protectedProcedure
    .input(
      z.object({
        availableHours: z.number().min(1).max(12).default(6),
        focusSubjectIds: z.array(z.string()).optional(),
        startDate: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Deactivate existing plans
      await ctx.prisma.studyPlan.updateMany({
        where: { userId: ctx.userId, isActive: true },
        data: { isActive: false },
      });

      const startDate = input.startDate ? new Date(input.startDate) : new Date();

      // Create new plan
      const plan = await ctx.prisma.studyPlan.create({
        data: {
          userId: ctx.userId,
          name: `Study Plan - ${startDate.toLocaleDateString()}`,
          startDate,
          isActive: true,
          generatedByAi: true,
        },
      });

      // Get user's current progress to generate smart plan
      await ctx.prisma.userProgress.findMany({
        where: { userId: ctx.userId },
        include: { topic: { include: { module: { include: { subject: true } } } } },
      });

      // Get all topics for the user's phase
      const user = await ctx.prisma.user.findUnique({ where: { id: ctx.userId } });
      const subjects = await ctx.prisma.subject.findMany({
        where: { phase: user?.currentPhase ?? "PHASE_1" },
        include: { modules: { include: { topics: true } } },
      });

      // Generate 7 days of tasks
      const allTopics = subjects.flatMap((s) =>
        s.modules.flatMap((m) =>
          m.topics.map((t) => ({
            topicId: t.id,
            topicName: t.name,
            subjectName: s.name,
            moduleId: m.id,
          }))
        )
      );

      const hoursPerDay = input.availableHours;
      const minutesPerDay = hoursPerDay * 60;

      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + day);

        // Allocate: 40% learn, 30% practice, 20% revise, 10% clinical
        const tasks = [];
        // Learning tasks (40%)
        const learnMinutes = Math.round(minutesPerDay * 0.4);
        const topicIdx = (day * 2) % allTopics.length;
        if (allTopics[topicIdx]) {
          tasks.push({
            topicId: allTopics[topicIdx].topicId,
            mode: "learn",
            durationMin: Math.min(learnMinutes, 50),
            completed: false,
            label: `${allTopics[topicIdx].topicName} - Foundation`,
          });
          if (allTopics[topicIdx + 1]) {
            tasks.push({
              topicId: allTopics[topicIdx + 1]?.topicId,
              mode: "learn",
              durationMin: Math.min(learnMinutes - 50, 40),
              completed: false,
              label: `${allTopics[topicIdx + 1]?.topicName} - Mechanism`,
            });
          }
        }

        // Practice tasks (30%)
        tasks.push({
          topicId: allTopics[topicIdx]?.topicId ?? "",
          mode: "practice",
          durationMin: Math.round(minutesPerDay * 0.3),
          completed: false,
          label: `MCQ Practice - ${subjects[0]?.name ?? "Anatomy"}`,
        });

        // Revision (20%)
        tasks.push({
          topicId: allTopics[Math.max(0, topicIdx - 2)]?.topicId ?? "",
          mode: "revise",
          durationMin: Math.round(minutesPerDay * 0.2),
          completed: false,
          label: "Spaced Repetition Review",
        });

        // Clinical (10%)
        if (day % 2 === 0) {
          tasks.push({
            topicId: "",
            mode: "clinical",
            durationMin: Math.round(minutesPerDay * 0.1),
            completed: false,
            label: "Clinical Case Practice",
          });
        }

        await ctx.prisma.studyPlanDay.create({
          data: {
            planId: plan.id,
            date,
            tasks,
            completedPct: 0,
          },
        });
      }

      return ctx.prisma.studyPlan.findUnique({
        where: { id: plan.id },
        include: { days: { orderBy: { date: "asc" } } },
      });
    }),

  completeTask: protectedProcedure
    .input(
      z.object({
        dayId: z.string(),
        taskIndex: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const day = await ctx.prisma.studyPlanDay.findUnique({
        where: { id: input.dayId },
      });
      if (!day) throw new Error("Day not found");

      const tasks = day.tasks as Array<{ completed: boolean }>;
      if (input.taskIndex < 0 || input.taskIndex >= tasks.length) throw new Error("Invalid task index");

      tasks[input.taskIndex].completed = true;
      const completedCount = tasks.filter((t) => t.completed).length;
      const completedPct = (completedCount / tasks.length) * 100;

      return ctx.prisma.studyPlanDay.update({
        where: { id: input.dayId },
        data: { tasks: tasks as unknown as Prisma.InputJsonValue, completedPct },
      });
    }),
});
