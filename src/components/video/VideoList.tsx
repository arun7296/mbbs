"use client";

import { useState } from "react";
import { YouTubePlayer } from "./YouTubePlayer";
import { Clock, Eye, Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VideoItem {
  youtubeVideoId: string;
  youtubeUrl: string;
  title: string;
  channelName: string;
  channelUrl?: string | null;
  durationSeconds: number;
  description?: string | null;
  startTimestamp?: number | null;
  quality: string;
  thumbnailUrl?: string | null;
  viewCount?: number | null;
  sortOrder: number;
}

interface VideoListProps {
  videos: VideoItem[];
  topicName: string;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const hrs = Math.floor(mins / 60);
  const remainMins = mins % 60;
  return `${hrs}h ${remainMins}m`;
}

function formatViews(views: number): string {
  if (views >= 1_000_000) return `${(views / 1_000_000).toFixed(1)}M`;
  if (views >= 1_000) return `${(views / 1_000).toFixed(0)}K`;
  return views.toString();
}

export function VideoList({ videos, topicName }: VideoListProps) {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const sortedVideos = [...videos].sort((a, b) => a.sortOrder - b.sortOrder);
  const activeVideo = sortedVideos[activeVideoIdx];
  const totalMinutes = Math.round(
    sortedVideos.reduce((sum, v) => sum + v.durationSeconds, 0) / 60
  );

  const displayVideos = showAll ? sortedVideos : sortedVideos.slice(0, 5);

  if (!activeVideo) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Video Lectures: {topicName}
          </h2>
          <p className="text-sm text-gray-500">
            {sortedVideos.length} curated videos &middot; {totalMinutes} min
            total
          </p>
        </div>
      </div>

      {/* Main Player */}
      <YouTubePlayer
        videoId={activeVideo.youtubeVideoId}
        title={activeVideo.title}
        thumbnailUrl={activeVideo.thumbnailUrl ?? undefined}
        startTimestamp={activeVideo.startTimestamp ?? undefined}
      />

      {/* Now Playing Info */}
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {activeVideo.quality === "RECOMMENDED" && (
                <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
                  <Star className="h-3 w-3" fill="currentColor" /> Recommended
                </span>
              )}
              <span className="text-xs text-gray-500">
                Now Playing ({activeVideoIdx + 1}/{sortedVideos.length})
              </span>
            </div>
            <h3 className="mt-1 font-semibold text-gray-900">
              {activeVideo.title}
            </h3>
            <p className="mt-0.5 text-sm text-gray-600">
              {activeVideo.channelName}
            </p>
            <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />{" "}
                {formatDuration(activeVideo.durationSeconds)}
              </span>
              {activeVideo.viewCount && (
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />{" "}
                  {formatViews(activeVideo.viewCount)} views
                </span>
              )}
            </div>
          </div>
          <a
            href={activeVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100"
          >
            <ExternalLink className="h-3 w-3" /> YouTube
          </a>
        </div>
        {activeVideo.description && (
          <p className="mt-2 text-sm text-gray-500">
            {activeVideo.description}
          </p>
        )}
      </div>

      {/* Playlist */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">
          All Videos ({sortedVideos.length})
        </h3>
        {displayVideos.map((video, idx) => {
          const isActive = idx === activeVideoIdx;
          return (
            <button
              key={video.youtubeVideoId}
              onClick={() => setActiveVideoIdx(idx)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all",
                isActive
                  ? "border-blue-300 bg-blue-50"
                  : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
              )}
            >
              {/* Thumbnail */}
              <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-md bg-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    video.thumbnailUrl ||
                    `https://img.youtube.com/vi/${video.youtubeVideoId}/default.jpg`
                  }
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0.5 right-0.5 rounded bg-black/80 px-1 py-0.5 text-[10px] text-white">
                  {formatDuration(video.durationSeconds)}
                </span>
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-600/30">
                    <span className="text-xs font-bold text-white">
                      Playing
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium text-gray-400">
                    {idx + 1}.
                  </span>
                  {video.quality === "RECOMMENDED" && (
                    <Star
                      className="h-3 w-3 text-yellow-500"
                      fill="currentColor"
                    />
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                  {video.title}
                </p>
                <p className="text-xs text-gray-500">{video.channelName}</p>
                {video.viewCount && (
                  <span className="text-[10px] text-gray-400">
                    {formatViews(video.viewCount)} views
                  </span>
                )}
              </div>
            </button>
          );
        })}

        {/* Show more/less */}
        {sortedVideos.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-gray-200 py-2 text-sm text-gray-500 hover:bg-gray-50"
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4" /> Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" /> Show{" "}
                {sortedVideos.length - 5} more
              </>
            )}
          </button>
        )}
      </div>

      {/* Tips */}
      <div className="rounded-lg border border-green-100 bg-green-50 p-4">
        <h4 className="text-sm font-semibold text-green-800">
          Study Tips for Video Learning
        </h4>
        <ul className="mt-2 space-y-1 text-sm text-green-700">
          <li>
            1. Watch the ⭐ Recommended video first for the best overview
          </li>
          <li>2. Pause frequently and take notes in your own words</li>
          <li>
            3. After watching, test yourself with Layer 5 (Active Recall)
          </li>
          <li>4. Revisit videos before exams for quick revision</li>
        </ul>
      </div>
    </div>
  );
}
