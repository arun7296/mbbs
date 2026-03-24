import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface YTVideo {
  videoId: string;
  title: string;
  channelName: string;
  channelUrl: string;
  durationSeconds: number;
  viewCount: number;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  url: string;
}

/**
 * Search YouTube using yt-dlp (no API key needed).
 * Uses `ytsearch{N}:query` to search and `--dump-json` to get metadata.
 */
export async function searchYouTube(
  query: string,
  maxResults: number = 10
): Promise<YTVideo[]> {
  try {
    const { stdout } = await execAsync(
      `yt-dlp "ytsearch${maxResults}:${escapeShell(query)}" --dump-json --flat-playlist --no-download --no-warnings 2>/dev/null`,
      { maxBuffer: 10 * 1024 * 1024, timeout: 60000 }
    );

    const lines = stdout.trim().split("\n").filter(Boolean);
    const videos: YTVideo[] = [];

    for (const line of lines) {
      try {
        const data = JSON.parse(line);

        // Skip non-video results, shorts, and very long videos
        if (!data.id || !data.title) continue;
        const duration = data.duration || 0;
        if (duration < 120 || duration > 7200) continue; // Skip < 2min or > 2hrs

        videos.push({
          videoId: data.id,
          title: data.title,
          channelName: data.channel || data.uploader || "Unknown",
          channelUrl: data.channel_url || data.uploader_url || "",
          durationSeconds: duration,
          viewCount: data.view_count || 0,
          description: (data.description || "").slice(0, 500),
          thumbnailUrl:
            data.thumbnail ||
            `https://img.youtube.com/vi/${data.id}/maxresdefault.jpg`,
          publishedAt: data.upload_date
            ? `${data.upload_date.slice(0, 4)}-${data.upload_date.slice(4, 6)}-${data.upload_date.slice(6, 8)}`
            : new Date().toISOString(),
          url: `https://www.youtube.com/watch?v=${data.id}`,
        });
      } catch {
        // Skip malformed JSON lines
      }
    }

    return videos;
  } catch (error) {
    console.error(`yt-dlp search failed for "${query}":`, error);
    return [];
  }
}

/**
 * Get full metadata for a single video by URL or ID
 */
export async function getVideoMetadata(
  videoIdOrUrl: string
): Promise<YTVideo | null> {
  try {
    const url = videoIdOrUrl.startsWith("http")
      ? videoIdOrUrl
      : `https://www.youtube.com/watch?v=${videoIdOrUrl}`;

    const { stdout } = await execAsync(
      `yt-dlp "${escapeShell(url)}" --dump-json --no-download --no-warnings 2>/dev/null`,
      { maxBuffer: 5 * 1024 * 1024, timeout: 30000 }
    );

    const data = JSON.parse(stdout.trim());

    return {
      videoId: data.id,
      title: data.title,
      channelName: data.channel || data.uploader || "Unknown",
      channelUrl: data.channel_url || "",
      durationSeconds: data.duration || 0,
      viewCount: data.view_count || 0,
      description: (data.description || "").slice(0, 500),
      thumbnailUrl:
        data.thumbnail ||
        `https://img.youtube.com/vi/${data.id}/maxresdefault.jpg`,
      publishedAt: data.upload_date
        ? `${data.upload_date.slice(0, 4)}-${data.upload_date.slice(4, 6)}-${data.upload_date.slice(6, 8)}`
        : new Date().toISOString(),
      url: `https://www.youtube.com/watch?v=${data.id}`,
    };
  } catch {
    return null;
  }
}

/**
 * Get all videos from a YouTube playlist
 */
export async function getPlaylistVideos(
  playlistUrl: string
): Promise<YTVideo[]> {
  try {
    const { stdout } = await execAsync(
      `yt-dlp "${escapeShell(playlistUrl)}" --dump-json --flat-playlist --no-download --no-warnings 2>/dev/null`,
      { maxBuffer: 50 * 1024 * 1024, timeout: 120000 }
    );

    const lines = stdout.trim().split("\n").filter(Boolean);
    return lines
      .map((line) => {
        const data = JSON.parse(line);
        return {
          videoId: data.id,
          title: data.title || "Untitled",
          channelName: data.channel || data.uploader || "Unknown",
          channelUrl: data.channel_url || "",
          durationSeconds: data.duration || 0,
          viewCount: data.view_count || 0,
          description: (data.description || "").slice(0, 500),
          thumbnailUrl:
            data.thumbnail ||
            `https://img.youtube.com/vi/${data.id}/maxresdefault.jpg`,
          publishedAt: data.upload_date || new Date().toISOString(),
          url: `https://www.youtube.com/watch?v=${data.id}`,
        };
      })
      .filter((v) => v.durationSeconds >= 120);
  } catch {
    return [];
  }
}

function escapeShell(str: string): string {
  return str.replace(/['"\\$`!]/g, "\\$&");
}
