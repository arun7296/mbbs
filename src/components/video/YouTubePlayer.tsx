"use client";

import { useState, useCallback } from "react";
import { Play } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  startTimestamp?: number;
  className?: string;
}

/**
 * Lazy-loaded YouTube embed — shows thumbnail first, loads iframe on click.
 * This saves bandwidth and improves page load performance.
 */
export function YouTubePlayer({
  videoId,
  title,
  thumbnailUrl,
  startTimestamp,
  className = "",
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnail =
    thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0${
    startTimestamp ? `&start=${startTimestamp}` : ""
  }`;

  const handlePlay = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-lg bg-black ${className}`}
    >
      {isLoaded ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          onClick={handlePlay}
          className="group relative h-full w-full cursor-pointer"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault not available
              const target = e.target as HTMLImageElement;
              if (target.src.includes("maxresdefault")) {
                target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }
            }}
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <p className="text-sm font-medium text-white line-clamp-2">
              {title}
            </p>
          </div>
        </button>
      )}
    </div>
  );
}
