"use client";

import { useState } from "react";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { FlashcardReview } from "@/components/revise/FlashcardReview";
import { WeakAreaCard } from "@/components/revise/WeakAreaCard";
import type { Grade } from "@/lib/utils/spaced-repetition";
import { gradeToQuality } from "@/lib/utils/spaced-repetition";

interface RevisionItem {
  topicId: string;
  topicName: string;
  subjectName: string;
  subjectCode: string;
  moduleName: string;
  moduleCode: string;
  topicCode: string;
  masteryLevel: number;
  question: string;
  answer: string;
}

// Sample revision cards generated from lesson key points
const sampleCards: RevisionItem[] = [
  { topicId: "t1", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "What spinal nerve roots form the brachial plexus?", answer: "C5, C6, C7, C8, T1 (ventral rami)" },
  { topicId: "t2", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "Name the 5 terminal branches of the brachial plexus.", answer: "Musculocutaneous, Axillary, Radial, Median, Ulnar (MARMU)" },
  { topicId: "t3", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "What nerve injury causes wrist drop? Where is it damaged?", answer: "Radial nerve, at the spiral groove of the humerus (mid-shaft fracture)" },
  { topicId: "t4", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "Describe the position in Erb's palsy and the roots involved.", answer: "Waiter's tip: arm medially rotated, forearm pronated. Upper trunk (C5, C6)." },
  { topicId: "t5", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "What passes through the quadrangular space?", answer: "Axillary nerve + posterior circumflex humeral artery" },
  { topicId: "t6", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "Which nerve has NO branches in the arm?", answer: "Median nerve — it only starts branching in the cubital fossa" },
  { topicId: "t7", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "What is the ulnar paradox?", answer: "Higher ulnar nerve injury = LESS clawing (because FDP is also paralyzed)" },
  { topicId: "t8", topicName: "Brachial Plexus", subjectName: "Anatomy", subjectCode: "AN", moduleName: "Upper Limb", moduleCode: "AN-MOD-01", topicCode: "AN-MOD-01-TOP-05", masteryLevel: 0.4,
    question: "Which nerve injury causes winging of scapula?", answer: "Long thoracic nerve (C5, C6, C7) — supplies serratus anterior" },
];

export default function RevisePage() {
  const [mode, setMode] = useState<"overview" | "review">("overview");
  const [dueCount] = useState(sampleCards.length);
  const [weeklyDue] = useState(12);

  const handleGrade = (topicId: string, grade: Grade) => {
    const quality = gradeToQuality(grade);
    // In production: call progress.submitReview via tRPC
    console.log(`Graded topic ${topicId}: ${grade} (quality: ${quality})`);
  };

  if (mode === "review") {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
        <button
          onClick={() => setMode("overview")}
          className="mb-4 text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to overview
        </button>
        <FlashcardReview
          cards={sampleCards}
          onGrade={handleGrade}
          onComplete={() => setMode("overview")}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Revise</h1>
        <p className="text-gray-500">Spaced repetition and weak area targeted review</p>
      </div>

      {/* Spaced Repetition Queue */}
      <div className="mb-8 rounded-xl border border-orange-200 bg-orange-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <RotateCcw className="h-6 w-6 text-orange-600" />
            <h2 className="text-lg font-semibold text-orange-800">Spaced Repetition</h2>
          </div>
          {dueCount > 0 && (
            <button
              onClick={() => setMode("review")}
              className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
            >
              Start Review ({dueCount} cards)
            </button>
          )}
        </div>
        <p className="text-sm text-orange-700 mb-4">
          Topics are scheduled for review at optimal intervals to maximize retention. Grade each card to update its schedule.
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-orange-600">{dueCount}</p>
            <p className="text-xs text-gray-500">Due Today</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-amber-600">{weeklyDue}</p>
            <p className="text-xs text-gray-500">Due This Week</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-gray-600">60</p>
            <p className="text-xs text-gray-500">Total Topics</p>
          </div>
        </div>
      </div>

      {/* Weak Areas */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-500" />
          <h2 className="text-lg font-semibold text-gray-900">Weak Areas</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Topics below 60% mastery, sorted by urgency. Review these first for maximum improvement.
        </p>
        <div className="space-y-3">
          {sampleCards.slice(0, 4).map((card, i) => (
            <WeakAreaCard
              key={i}
              topicName={card.topicName}
              subjectName={card.subjectName}
              moduleName={card.moduleName}
              masteryLevel={card.masteryLevel}
              weaknessScore={0.7 - i * 0.05}
              daysSinceReview={3 + i * 2}
              topicCode={card.topicCode}
              subjectCode={card.subjectCode}
              moduleCode={card.moduleCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
