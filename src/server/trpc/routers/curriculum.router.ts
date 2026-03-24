import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { Phase } from "@/generated/prisma/client";

export const curriculumRouter = router({
  getPhases: publicProcedure.query(async ({ ctx }) => {
    const subjects = await ctx.prisma.subject.findMany({
      orderBy: [{ phase: "asc" }, { sortOrder: "asc" }],
      include: { _count: { select: { modules: true } } },
    });

    const grouped = subjects.reduce(
      (acc, s) => {
        if (!acc[s.phase]) acc[s.phase] = [];
        acc[s.phase].push(s);
        return acc;
      },
      {} as Record<string, typeof subjects>
    );

    return grouped;
  }),

  getSubject: publicProcedure
    .input(z.object({ code: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.subject.findUnique({
        where: { code: input.code },
        include: {
          modules: {
            orderBy: { sortOrder: "asc" },
            include: {
              topics: {
                orderBy: { sortOrder: "asc" },
                include: { competency: true },
              },
            },
          },
        },
      });
    }),

  getModule: publicProcedure
    .input(z.object({ code: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.module.findUnique({
        where: { code: input.code },
        include: {
          subject: true,
          topics: {
            orderBy: { sortOrder: "asc" },
            include: { competency: true, lessons: { orderBy: { layer: "asc" } } },
          },
        },
      });
    }),

  getTopic: publicProcedure
    .input(z.object({ code: z.string() }))
    .query(async ({ ctx, input }) => {
      return (ctx.prisma.topic as any).findUnique({
        where: { code: input.code },
        include: {
          module: { include: { subject: true } },
          competency: true,
          lessons: {
            orderBy: { layer: "asc" },
            where: { status: "PUBLISHED" },
            include: {
              videos: { orderBy: { sortOrder: "asc" } },
            },
          },
        },
      });
    }),

  getCompetencies: publicProcedure
    .input(
      z.object({
        subjectId: z.string().optional(),
        phase: z.nativeEnum(Phase).optional(),
        isAetcom: z.boolean().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.nmcCompetency.findMany({
        where: {
          ...(input.subjectId && { subjectId: input.subjectId }),
          ...(input.phase && { phase: input.phase }),
          ...(input.isAetcom !== undefined && { isAetcom: input.isAetcom }),
        },
        include: { subject: true },
        orderBy: { code: "asc" },
      });
    }),
});
