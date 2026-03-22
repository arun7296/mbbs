import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const contentRouter = router({
  getLesson: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.lesson.findUnique({
        where: { slug: input.slug },
        include: {
          topic: {
            include: {
              module: { include: { subject: true } },
              competency: true,
            },
          },
        },
      });
    }),

  getLessonsByTopic: publicProcedure
    .input(
      z.object({
        topicId: z.string(),
        layer: z.number().min(1).max(5).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.lesson.findMany({
        where: {
          topicId: input.topicId,
          status: "PUBLISHED",
          ...(input.layer && { layer: input.layer }),
        },
        orderBy: { layer: "asc" },
      });
    }),

  search: publicProcedure
    .input(
      z.object({
        query: z.string().min(1),
        subjectCode: z.string().optional(),
        limit: z.number().min(1).max(50).default(20),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.lesson.findMany({
        where: {
          status: "PUBLISHED",
          OR: [
            { title: { contains: input.query, mode: "insensitive" } },
            { contentMd: { contains: input.query, mode: "insensitive" } },
            { summary: { contains: input.query, mode: "insensitive" } },
          ],
          ...(input.subjectCode && {
            module: { subject: { code: input.subjectCode } },
          }),
        },
        include: {
          topic: { include: { module: { include: { subject: true } } } },
        },
        take: input.limit,
      });
    }),
});
