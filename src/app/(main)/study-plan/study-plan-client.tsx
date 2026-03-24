"use client";

import { useState } from "react";
import { Calendar, Brain, CheckCircle2, BookOpen, Dumbbell, RotateCcw, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopicInfo {
  name: string;
  subjectName: string;
}

interface PlanTask {
  label: string;
  mode: string;
  durationMin: number;
  completed: boolean;
}

const modeIcons: Record<string, typeof BookOpen> = {
  learn: BookOpen,
  practice: Dumbbell,
  revise: RotateCcw,
  clinical: Stethoscope,
};

const modeColors: Record<string, string> = {
  learn: "text-blue-600 bg-blue-100",
  practice: "text-green-600 bg-green-100",
  revise: "text-orange-600 bg-orange-100",
  clinical: "text-purple-600 bg-purple-100",
};

function generatePlanFromTopics(topics: TopicInfo[]) {
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    // Rotate through available topics
    const topicIdx = (i * 2) % topics.length;
    const topic1 = topics[topicIdx];
    const topic2 = topics[(topicIdx + 1) % topics.length];
    const subjectForPractice = topic1?.subjectName || "Mixed";

    return {
      id: `day-${i}`,
      date: date.toISOString(),
      completedPct: 0,
      tasks: [
        { label: `${topic1?.name || "Topic"} - Foundation & Mechanism`, mode: "learn", durationMin: 50, completed: false },
        { label: `${topic2?.name || "Topic"} - Clinical & Exam Prep`, mode: "learn", durationMin: 40, completed: false },
        { label: `MCQ Practice - ${subjectForPractice}`, mode: "practice", durationMin: 36, completed: false },
        { label: "Spaced Repetition Review", mode: "revise", durationMin: 24, completed: false },
        ...(i % 2 === 0 ? [{ label: "Clinical Case Practice", mode: "clinical", durationMin: 30, completed: false }] : []),
      ] as PlanTask[],
    };
  });
}

export default function StudyPlanClient({
  topics,
  subjectCount,
  topicCount,
}: {
  topics: TopicInfo[];
  subjectCount: number;
  topicCount: number;
}) {
  const [plan, setPlan] = useState<ReturnType<typeof generatePlanFromTopics> | null>(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    // In production: call studyPlan.generate via tRPC with AI
    setTimeout(() => {
      setPlan(generatePlanFromTopics(topics));
      setGenerating(false);
    }, 1500);
  };

  const handleToggleTask = (dayIdx: number, taskIdx: number) => {
    if (!plan) return;
    const newPlan = [...plan];
    const day = { ...newPlan[dayIdx] };
    const tasks = [...day.tasks];
    tasks[taskIdx] = { ...tasks[taskIdx], completed: !tasks[taskIdx].completed };
    day.tasks = tasks;
    day.completedPct = (tasks.filter((t) => t.completed).length / tasks.length) * 100;
    newPlan[dayIdx] = day;
    setPlan(newPlan);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Study Plan</h1>
          <p className="text-gray-500">
            AI-powered daily schedule &middot; {subjectCount} subjects &middot; {topicCount}+ topics available
          </p>
        </div>
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
        >
          <Brain className={cn("h-4 w-4", generating && "animate-pulse")} />
          {generating ? "Generating..." : plan ? "Regenerate Plan" : "Generate AI Plan"}
        </button>
      </div>

      {/* Allocation Summary */}
      <div className="mb-8 grid grid-cols-4 gap-3">
        {[
          { label: "New Learning", pct: 40, time: "2h 24m", icon: BookOpen },
          { label: "Practice", pct: 30, time: "1h 48m", icon: Dumbbell },
          { label: "Revision", pct: 20, time: "1h 12m", icon: RotateCcw },
          { label: "Clinical", pct: 10, time: "36m", icon: Stethoscope },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-3 text-center">
            <item.icon className="mx-auto h-5 w-5 text-gray-400 mb-1" />
            <p className="text-lg font-bold text-gray-900">{item.time}</p>
            <p className="text-[10px] text-gray-500">{item.label} ({item.pct}%)</p>
          </div>
        ))}
      </div>

      {!plan ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No plan generated yet</h3>
          <p className="text-sm text-gray-400">
            Click &quot;Generate AI Plan&quot; to create a personalized 7-day study schedule
            covering topics across {subjectCount} subjects.
          </p>
        </div>
      ) : (
        <div>
          {/* Day Selector */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {plan.map((day, i) => {
              const d = new Date(day.date);
              const isToday = i === 0;
              return (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(i)}
                  className={cn(
                    "flex shrink-0 flex-col items-center rounded-lg border px-4 py-2 transition-all",
                    selectedDay === i ? "border-teal-400 bg-teal-50" : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <span className="text-xs text-gray-500">{d.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                  <span className="text-lg font-bold text-gray-900">{d.getDate()}</span>
                  {isToday && <span className="text-[10px] font-medium text-teal-600">Today</span>}
                  {day.completedPct > 0 && (
                    <div className="mt-1 h-1 w-8 rounded-full bg-gray-200">
                      <div className="h-1 rounded-full bg-teal-500" style={{ width: `${day.completedPct}%` }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tasks for selected day */}
          <div className="rounded-xl border border-gray-200 bg-white">
            <div className="border-b p-4">
              <h3 className="font-semibold text-gray-900">
                {new Date(plan[selectedDay].date).toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" })}
              </h3>
              <p className="text-sm text-gray-500">
                {plan[selectedDay].tasks.filter((t) => t.completed).length}/{plan[selectedDay].tasks.length} tasks completed
              </p>
            </div>
            <div className="divide-y">
              {plan[selectedDay].tasks.map((task, i) => {
                const Icon = modeIcons[task.mode] ?? BookOpen;
                const colorClass = modeColors[task.mode] ?? "text-gray-600 bg-gray-100";
                return (
                  <div key={i} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50">
                    <button onClick={() => handleToggleTask(selectedDay, i)}>
                      <CheckCircle2 className={cn("h-5 w-5", task.completed ? "text-green-500" : "text-gray-300")} />
                    </button>
                    <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", colorClass)}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className={cn("text-sm font-medium", task.completed ? "text-gray-400 line-through" : "text-gray-900")}>
                        {task.label}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{task.durationMin} min</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-sm text-gray-400">
        Sign in to get personalized study plans based on your progress and weak areas
      </p>
    </div>
  );
}
