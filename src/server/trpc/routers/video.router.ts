import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const videoRouter = router({
  /**
   * Get all videos for a lesson
   */
  getVideosForLesson: publicProcedure
    .input(z.object({ lessonId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.videoResource.findMany({
        where: { lessonId: input.lessonId },
        orderBy: { sortOrder: "asc" },
      });
    }),

  /**
   * Get all videos for a topic (across all lessons)
   */
  getVideosForTopic: publicProcedure
    .input(z.object({ topicId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.videoResource.findMany({
        where: { lesson: { topicId: input.topicId } },
        orderBy: { sortOrder: "asc" },
        include: { lesson: { select: { layer: true, title: true } } },
      });
    }),

  /**
   * Add a video to a lesson by YouTube URL — extracts metadata via yt-dlp on the server.
   * Falls back to manual metadata if yt-dlp is not available.
   */
  addVideoByUrl: protectedProcedure
    .input(
      z.object({
        lessonId: z.string(),
        youtubeUrl: z.string().url(),
        title: z.string().optional(),
        channelName: z.string().optional(),
        durationSeconds: z.number().optional(),
        quality: z.enum(["RECOMMENDED", "SUPPLEMENTARY", "ADVANCED"]).default("SUPPLEMENTARY"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Extract video ID from URL
      const videoId = extractVideoId(input.youtubeUrl);
      if (!videoId) throw new Error("Invalid YouTube URL");

      // Check for duplicate
      const existing = await ctx.prisma.videoResource.findUnique({
        where: {
          lessonId_youtubeVideoId: {
            lessonId: input.lessonId,
            youtubeVideoId: videoId,
          },
        },
      });
      if (existing) throw new Error("Video already added to this lesson");

      // Get max sort order
      const maxSort = await ctx.prisma.videoResource.findFirst({
        where: { lessonId: input.lessonId },
        orderBy: { sortOrder: "desc" },
        select: { sortOrder: true },
      });

      return ctx.prisma.videoResource.create({
        data: {
          lessonId: input.lessonId,
          youtubeVideoId: videoId,
          youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
          title: input.title || "Untitled Video",
          channelName: input.channelName || "Unknown",
          durationSeconds: input.durationSeconds || 0,
          quality: input.quality,
          sortOrder: (maxSort?.sortOrder ?? -1) + 1,
          thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        },
      });
    }),

  /**
   * Remove a video from a lesson
   */
  removeVideo: protectedProcedure
    .input(z.object({ videoId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.videoResource.delete({
        where: { id: input.videoId },
      });
    }),

  /**
   * Reorder videos within a lesson
   */
  reorderVideos: protectedProcedure
    .input(
      z.object({
        lessonId: z.string(),
        videoIds: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updates = input.videoIds.map((id, idx) =>
        ctx.prisma.videoResource.update({
          where: { id },
          data: { sortOrder: idx },
        })
      );
      await ctx.prisma.$transaction(updates);
      return { success: true };
    }),

  /**
   * Update video metadata (quality, timestamps, etc.)
   */
  updateVideo: protectedProcedure
    .input(
      z.object({
        videoId: z.string(),
        quality: z.enum(["RECOMMENDED", "SUPPLEMENTARY", "ADVANCED"]).optional(),
        startTimestamp: z.number().nullable().optional(),
        endTimestamp: z.number().nullable().optional(),
        description: z.string().nullable().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { videoId, ...data } = input;
      return ctx.prisma.videoResource.update({
        where: { id: videoId },
        data,
      });
    }),

  /**
   * Get video stats — how many topics have videos
   */
  getVideoStats: publicProcedure.query(async ({ ctx }) => {
    const totalVideos = await ctx.prisma.videoResource.count();
    const lessonsWithVideos = await ctx.prisma.lesson.count({
      where: { layer: 6, videos: { some: {} } },
    });
    const topicsWithVideos = await ctx.prisma.topic.count({
      where: { lessons: { some: { layer: 6, videos: { some: {} } } } },
    });

    return {
      totalVideos,
      lessonsWithVideos,
      topicsWithVideos,
    };
  }),
});

/**
 * Extract YouTube video ID from various URL formats
 */
function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  // If it's just an 11-character ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;

  return null;
}
