"use client";

import { useState, useRef, useCallback } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface SVGContainerProps {
  children: React.ReactNode;
  viewBox?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SVGContainer({
  children,
  viewBox = "0 0 800 600",
  title,
  description,
  className,
}: SVGContainerProps) {
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleZoomIn = () => setScale(s => Math.min(3, s + 0.25));
  const handleZoomOut = () => setScale(s => Math.max(0.5, s - 0.25));
  const handleReset = () => { setScale(1); setPan({ x: 0, y: 0 }); };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsPanning(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setPan(p => ({ x: p.x + dx / scale, y: p.y + dy / scale }));
  }, [isPanning, scale]);

  const handleMouseUp = useCallback(() => setIsPanning(false), []);

  return (
    <div className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 ${className || ""}`}>
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-700">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
          {description && <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>}
        </div>
        <div className="flex gap-1">
          <button onClick={handleZoomOut} className="rounded p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Zoom out">
            <ZoomOut className="h-4 w-4" />
          </button>
          <button onClick={handleReset} className="rounded p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Reset zoom">
            <RotateCcw className="h-4 w-4" />
          </button>
          <button onClick={handleZoomIn} className="rounded p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Zoom in">
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="cursor-grab overflow-hidden active:cursor-grabbing"
        style={{ maxHeight: "70vh" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          viewBox={viewBox}
          width="100%"
          height="auto"
          className="mx-auto"
          style={{
            transform: `scale(${scale}) translate(${pan.x}px, ${pan.y}px)`,
            transformOrigin: "center center",
            transition: isPanning ? "none" : "transform 0.2s ease",
          }}
          role="img"
          aria-label={title}
        >
          {children}
        </svg>
      </div>

      <div className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-0.5 text-xs text-white">
        {Math.round(scale * 100)}%
      </div>
    </div>
  );
}
