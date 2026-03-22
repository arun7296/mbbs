"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LEARNING_LAYERS } from "@/lib/constants/curriculum";
import { MarkdownRenderer } from "@/components/shared/MarkdownRenderer";
import { MnemonicCard } from "./MnemonicCard";
import { KeyPointsList } from "./KeyPointsList";
import { TextbookRefBadge } from "./TextbookRefBadge";
import { BookOpen, Clock, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface LessonData {
  layer: number;
  title: string;
  contentMd: string;
  summary?: string;
  mnemonics?: Array<{ text: string; explanation: string }>;
  keyPoints?: string[];
  textbookRefs?: Array<{ book: string; chapter: string; page?: string; edition?: string }>;
  estimatedMinutes: number;
  examTags?: string[];
}

interface LessonViewerProps {
  topicName: string;
  lessons: LessonData[];
  competencyCode?: string;
}

const layerColors = [
  { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700", activeBg: "bg-blue-600", activeText: "text-white" },
  { bg: "bg-indigo-50", border: "border-indigo-300", text: "text-indigo-700", activeBg: "bg-indigo-600", activeText: "text-white" },
  { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700", activeBg: "bg-emerald-600", activeText: "text-white" },
  { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700", activeBg: "bg-amber-600", activeText: "text-white" },
  { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-700", activeBg: "bg-rose-600", activeText: "text-white" },
];

export function LessonViewer({ topicName, lessons, competencyCode }: LessonViewerProps) {
  void topicName;
  const [activeLayer, setActiveLayer] = useState(1);
  const currentLesson = lessons.find((l) => l.layer === activeLayer);

  return (
    <div className="flex flex-col">
      {/* Layer Tabs */}
      <div className="sticky top-0 z-10 border-b bg-white">
        <div className="flex gap-1 overflow-x-auto px-4 py-3">
          {LEARNING_LAYERS.map((layer, i) => {
            const isActive = activeLayer === layer.id;
            const hasLesson = lessons.some((l) => l.layer === layer.id);
            const colors = layerColors[i];

            return (
              <button
                key={layer.id}
                onClick={() => hasLesson && setActiveLayer(layer.id)}
                disabled={!hasLesson}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  isActive ? `${colors.activeBg} ${colors.activeText}` : `${colors.bg} ${colors.text}`,
                  !hasLesson && "cursor-not-allowed opacity-40"
                )}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                  {layer.id}
                </span>
                {layer.name}
                <span className="hidden text-xs opacity-70 sm:inline">{layer.duration}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lesson Content */}
      {currentLesson ? (
        <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
          {/* Lesson Header */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <span className={cn(
                "rounded-full px-2 py-0.5 text-xs font-medium",
                layerColors[activeLayer - 1].bg,
                layerColors[activeLayer - 1].text
              )}>
                Layer {activeLayer}: {LEARNING_LAYERS[activeLayer - 1].name}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="h-3 w-3" /> {currentLesson.estimatedMinutes} min
              </span>
              {currentLesson.examTags?.map((tag) => (
                <span key={tag} className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-600">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-xl font-bold text-gray-900">{currentLesson.title}</h1>
            {competencyCode && (
              <p className="text-sm text-gray-400">NMC Competency: {competencyCode}</p>
            )}
          </div>

          {/* Textbook References */}
          {currentLesson.textbookRefs && currentLesson.textbookRefs.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {currentLesson.textbookRefs.map((ref, i) => (
                <TextbookRefBadge key={i} {...ref} />
              ))}
            </div>
          )}

          {/* Summary */}
          {currentLesson.summary && (
            <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-blue-800">Quick Summary</h3>
              <p className="text-sm leading-relaxed text-blue-700">{currentLesson.summary}</p>
            </div>
          )}

          {/* Main Content */}
          <MarkdownRenderer content={currentLesson.contentMd} className="prose-medical" />

          {/* Key Points */}
          {currentLesson.keyPoints && currentLesson.keyPoints.length > 0 && (
            <KeyPointsList points={currentLesson.keyPoints} />
          )}

          {/* Mnemonics */}
          {currentLesson.mnemonics && currentLesson.mnemonics.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Mnemonics</h3>
              <div className="space-y-3">
                {currentLesson.mnemonics.map((m, i) => (
                  <MnemonicCard key={i} text={m.text} explanation={m.explanation} />
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t pt-4">
            <button
              onClick={() => setActiveLayer(Math.max(1, activeLayer - 1))}
              disabled={activeLayer === 1}
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Previous Layer
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              <CheckCircle2 className="h-4 w-4" /> Mark Complete
            </button>
            <button
              onClick={() => setActiveLayer(Math.min(5, activeLayer + 1))}
              disabled={activeLayer === 5}
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-40"
            >
              Next Layer <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <BookOpen className="h-12 w-12 text-gray-300" />
          <p className="mt-4 text-gray-500">This layer is coming soon</p>
        </div>
      )}
    </div>
  );
}
