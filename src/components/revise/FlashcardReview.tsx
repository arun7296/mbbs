"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { RotateCcw, Eye, BookOpen } from "lucide-react";
import type { Grade } from "@/lib/utils/spaced-repetition";

interface FlashcardData {
  topicId: string;
  topicName: string;
  subjectName: string;
  question: string;
  answer: string;
  masteryLevel: number;
}

interface FlashcardReviewProps {
  cards: FlashcardData[];
  onGrade: (topicId: string, grade: Grade) => void;
  onComplete: () => void;
}

const gradeButtons: Array<{ grade: Grade; label: string; color: string; desc: string }> = [
  { grade: "again", label: "Again", color: "bg-red-500 hover:bg-red-600", desc: "< 1 day" },
  { grade: "hard", label: "Hard", color: "bg-orange-500 hover:bg-orange-600", desc: "1-2 days" },
  { grade: "good", label: "Good", color: "bg-green-500 hover:bg-green-600", desc: "3-7 days" },
  { grade: "easy", label: "Easy", color: "bg-blue-500 hover:bg-blue-600", desc: "1-2 weeks" },
];

export function FlashcardReview({ cards, onGrade, onComplete }: FlashcardReviewProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <BookOpen className="h-12 w-12 text-gray-300" />
        <p className="mt-4 text-lg font-medium text-gray-600">No cards to review!</p>
        <p className="text-sm text-gray-400">All caught up. Check back later.</p>
      </div>
    );
  }

  if (currentIdx >= cards.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <RotateCcw className="h-8 w-8 text-green-600" />
        </div>
        <p className="mt-4 text-lg font-medium text-gray-900">Review Complete!</p>
        <p className="text-sm text-gray-500">You reviewed {cards.length} topics</p>
        <button
          onClick={onComplete}
          className="mt-6 rounded-lg bg-orange-500 px-6 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          Done
        </button>
      </div>
    );
  }

  const card = cards[currentIdx];

  const handleGrade = (grade: Grade) => {
    onGrade(card.topicId, grade);
    setFlipped(false);
    setCurrentIdx(currentIdx + 1);
  };

  return (
    <div className="mx-auto max-w-lg">
      {/* Progress */}
      <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
        <span>{currentIdx + 1} / {cards.length}</span>
        <span className="text-xs text-gray-400">{card.subjectName}</span>
      </div>
      <div className="mb-6 h-1.5 rounded-full bg-gray-200">
        <div
          className="h-1.5 rounded-full bg-orange-500 transition-all"
          style={{ width: `${((currentIdx + 1) / cards.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div
        onClick={() => !flipped && setFlipped(true)}
        className={cn(
          "min-h-[250px] cursor-pointer rounded-2xl border-2 p-8 text-center transition-all",
          flipped
            ? "border-orange-300 bg-orange-50"
            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
        )}
      >
        {!flipped ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xs font-medium text-gray-400 mb-4">{card.topicName}</p>
            <p className="text-lg font-medium text-gray-900 leading-relaxed">{card.question}</p>
            <div className="mt-6 flex items-center gap-1 text-sm text-gray-400">
              <Eye className="h-4 w-4" /> Tap to reveal answer
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xs font-medium text-orange-500 mb-4">Answer</p>
            <p className="text-lg text-gray-800 leading-relaxed">{card.answer}</p>
          </div>
        )}
      </div>

      {/* Grade Buttons (shown only when flipped) */}
      {flipped && (
        <div className="mt-6 grid grid-cols-4 gap-2">
          {gradeButtons.map((btn) => (
            <button
              key={btn.grade}
              onClick={() => handleGrade(btn.grade)}
              className={`flex flex-col items-center rounded-lg px-3 py-3 text-white transition-colors ${btn.color}`}
            >
              <span className="text-sm font-semibold">{btn.label}</span>
              <span className="text-[10px] opacity-80">{btn.desc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
