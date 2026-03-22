"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Brain, Clock } from "lucide-react";

const subjects = [
  { id: "anatomy", name: "Anatomy", questionCount: 200, icon: "🦴" },
  { id: "physiology", name: "Physiology", questionCount: 0, icon: "🫀" },
  { id: "biochemistry", name: "Biochemistry", questionCount: 0, icon: "🧬" },
];

const topicsBySubject: Record<string, Array<{ id: string; name: string; questionCount: number }>> = {
  anatomy: [
    { id: "upper-limb", name: "Upper Limb", questionCount: 50 },
    { id: "lower-limb", name: "Lower Limb", questionCount: 30 },
    { id: "thorax", name: "Thorax", questionCount: 25 },
    { id: "abdomen", name: "Abdomen", questionCount: 30 },
    { id: "head-neck", name: "Head & Neck", questionCount: 35 },
    { id: "neuroanatomy", name: "Neuroanatomy", questionCount: 20 },
    { id: "histology", name: "Histology", questionCount: 10 },
  ],
};

export default function PracticePage() {
  const [selectedSubject, setSelectedSubject] = useState("anatomy");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState(20);
  const [mode, setMode] = useState<"practice" | "timed">("practice");

  const topics = topicsBySubject[selectedSubject] ?? [];

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Practice MCQs</h1>
        <p className="text-gray-500">Test your knowledge with NEXT-pattern questions</p>
      </div>

      {/* Subject Selection */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Select Subject</h3>
        <div className="grid grid-cols-3 gap-3">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => { setSelectedSubject(s.id); setSelectedTopics([]); }}
              disabled={s.questionCount === 0}
              className={`flex flex-col items-center gap-1 rounded-xl border p-4 transition-all ${
                selectedSubject === s.id
                  ? "border-green-300 bg-green-50"
                  : s.questionCount > 0
                  ? "border-gray-200 hover:border-gray-300"
                  : "cursor-not-allowed border-gray-100 opacity-50"
              }`}
            >
              <span className="text-2xl">{s.icon}</span>
              <span className="text-sm font-medium">{s.name}</span>
              <span className="text-xs text-gray-400">{s.questionCount} Qs</span>
            </button>
          ))}
        </div>
      </div>

      {/* Topic Selection */}
      {topics.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-gray-700">Select Topics (optional)</h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => toggleTopic(t.id)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                  selectedTopics.includes(t.id)
                    ? "border-green-300 bg-green-50 text-green-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {t.name} ({t.questionCount})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mode Selection */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Mode</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setMode("practice")}
            className={`flex items-center gap-3 rounded-xl border p-4 ${
              mode === "practice" ? "border-green-300 bg-green-50" : "border-gray-200"
            }`}
          >
            <Brain className="h-6 w-6 text-green-600" />
            <div className="text-left">
              <p className="text-sm font-medium">Practice</p>
              <p className="text-xs text-gray-500">Instant feedback after each question</p>
            </div>
          </button>
          <button
            onClick={() => setMode("timed")}
            className={`flex items-center gap-3 rounded-xl border p-4 ${
              mode === "timed" ? "border-green-300 bg-green-50" : "border-gray-200"
            }`}
          >
            <Clock className="h-6 w-6 text-red-500" />
            <div className="text-left">
              <p className="text-sm font-medium">Timed Test</p>
              <p className="text-xs text-gray-500">Exam simulation, no feedback until end</p>
            </div>
          </button>
        </div>
      </div>

      {/* Question Count */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Number of Questions</h3>
        <div className="flex gap-2">
          {[10, 20, 30, 50].map((n) => (
            <button
              key={n}
              onClick={() => setQuestionCount(n)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium ${
                questionCount === n
                  ? "border-green-300 bg-green-50 text-green-700"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <Link
        href={`/practice/quiz/demo?mode=${mode}&count=${questionCount}&subject=${selectedSubject}`}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700"
      >
        <Play className="h-5 w-5" /> Start Practice
      </Link>
    </div>
  );
}
