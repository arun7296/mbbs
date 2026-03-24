import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const searchRouter = router({
  searchTopics: publicProcedure
    .input(z.object({ query: z.string().min(2) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.topic.findMany({
        where: {
          OR: [
            { name: { contains: input.query, mode: "insensitive" } },
            { code: { contains: input.query, mode: "insensitive" } },
          ],
        },
        include: { module: { include: { subject: true } } },
        take: 20,
      });
    }),

  searchLessons: publicProcedure
    .input(z.object({ query: z.string().min(2) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.lesson.findMany({
        where: {
          OR: [
            { title: { contains: input.query, mode: "insensitive" } },
            { slug: { contains: input.query, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          slug: true,
          title: true,
          layer: true,
          topic: {
            select: {
              code: true,
              name: true,
              module: {
                select: {
                  code: true,
                  subject: { select: { code: true, name: true } },
                },
              },
            },
          },
        },
        take: 20,
      });
    }),

  searchAll: publicProcedure
    .input(z.object({ query: z.string().min(2) }))
    .query(async ({ ctx, input }) => {
      const [topics, lessons] = await Promise.all([
        ctx.prisma.topic.findMany({
          where: {
            OR: [
              { name: { contains: input.query, mode: "insensitive" } },
              { code: { contains: input.query, mode: "insensitive" } },
            ],
          },
          include: { module: { include: { subject: true } } },
          take: 10,
        }),
        ctx.prisma.lesson.findMany({
          where: {
            OR: [
              { title: { contains: input.query, mode: "insensitive" } },
              { slug: { contains: input.query, mode: "insensitive" } },
            ],
          },
          select: {
            id: true,
            slug: true,
            title: true,
            layer: true,
            topic: {
              select: {
                code: true,
                name: true,
                module: {
                  select: {
                    code: true,
                    subject: { select: { code: true, name: true } },
                  },
                },
              },
            },
          },
          take: 10,
        }),
      ]);

      return { topics, lessons };
    }),
});
