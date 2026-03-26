import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const visualRouter = router({
  getVisualsForLesson: publicProcedure
    .input(z.object({ lessonId: z.string() }))
    .query(async ({ ctx, input }) => {
      return (ctx.prisma as any).visualResource.findMany({
        where: { lessonId: input.lessonId },
        orderBy: { sortOrder: "asc" },
      });
    }),

  getVisualsForTopic: publicProcedure
    .input(z.object({ topicId: z.string() }))
    .query(async ({ ctx, input }) => {
      // Get all Layer 7 lessons for this topic, then their visuals
      const lessons = await (ctx.prisma as any).lesson.findMany({
        where: { topicId: input.topicId, layer: 7 },
        include: {
          visuals: { orderBy: { sortOrder: "asc" } },
        },
      });
      return lessons.flatMap((l: any) => l.visuals);
    }),

  addVisual: protectedProcedure
    .input(
      z.object({
        lessonId: z.string(),
        type: z.enum(["SVG_DIAGRAM", "ANIMATED", "IMAGE", "FLOWCHART", "COMPARISON_TABLE"]),
        title: z.string(),
        description: z.string().optional(),
        componentName: z.string().optional(),
        imageUrl: z.string().optional(),
        imageAlt: z.string().optional(),
        attribution: z.string().optional(),
        license: z.enum(["PUBLIC_DOMAIN", "CC_BY", "CC_BY_SA", "CC_BY_NC"]).optional(),
        category: z.string().default("ANATOMY"),
        tags: z.array(z.string()).default([]),
        svgContent: z.string().optional(),
        annotations: z.any().optional(),
        sortOrder: z.number().default(0),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return (ctx.prisma as any).visualResource.create({
        data: input,
      });
    }),

  removeVisual: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return (ctx.prisma as any).visualResource.delete({
        where: { id: input.id },
      });
    }),

  updateVisual: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        description: z.string().optional(),
        componentName: z.string().optional(),
        imageUrl: z.string().optional(),
        imageAlt: z.string().optional(),
        attribution: z.string().optional(),
        license: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        svgContent: z.string().optional(),
        annotations: z.any().optional(),
        sortOrder: z.number().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return (ctx.prisma as any).visualResource.update({
        where: { id },
        data,
      });
    }),

  reorderVisuals: protectedProcedure
    .input(
      z.object({
        lessonId: z.string(),
        order: z.array(z.object({ id: z.string(), sortOrder: z.number() })),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updates = input.order.map((item) =>
        (ctx.prisma as any).visualResource.update({
          where: { id: item.id },
          data: { sortOrder: item.sortOrder },
        })
      );
      return Promise.all(updates);
    }),

  getVisualStats: publicProcedure.query(async ({ ctx }) => {
    const total = await (ctx.prisma as any).visualResource.count();
    const byType = await (ctx.prisma as any).visualResource.groupBy({
      by: ["type"],
      _count: true,
    });
    const byCategory = await (ctx.prisma as any).visualResource.groupBy({
      by: ["category"],
      _count: true,
    });
    return { total, byType, byCategory };
  }),
});
