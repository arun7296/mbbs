"use client";

import { useState } from "react";
import { Calendar, Brain, CheckCircle2, BookOpen, Dumbbell, RotateCcw, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

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

// Sample generated plan
const sampleDays = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    id: `day-${i}`,
    date: date.toISOString(),
    completedPct: i === 0 ? 0 : 0,
    tasks: [
      { label: `${["Pectoral Region", "Axilla", "Shoulder Joint", "Arm Muscles", "Brachial Plexus", "Forearm", "Hand"][i % 7]} - Foundation`, mode: "learn", durationMin: 50, completed: false },
      { label: `${["Pectoral Region", "Axilla", "Shoulder Joint", "Arm Muscles", "Brachial Plexus", "Forearm", "Hand"][i % 7]} - Mechanism`, mode: "learn", durationMin: 40, completed: false },
      { label: "MCQ Practice - Anatomy", mode: "practice", durationMin: Math.round(360 * 0.3), completed: false },
      { label: "Spaced Repetition Review", mode: "revise", durationMin: Math.round(360 * 0.2), completed: false },
      ...(i % 2 === 0 ? [{ label: "Clinical Case Practice", mode: "clinical", durationMin: 36, completed: false }] : []),
    ] as PlanTask[],
  };
});

export default function StudyPlanPage() {
  const [plan, setPlan] = useState<typeof sampleDays | null>(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    // In production: call studyPlan.generate via tRPC
    setTimeout(() => {
      setPlan(sampleDays);
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
          <p className="text-gray-500">AI-powered daily schedule based on your progress</p>
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
          { label: "New Learning", pct: 40, color: "bg-blue-500", time: "2h 24m", icon: BookOpen },
          { label: "Practice", pct: 30, color: "bg-green-500", time: "1h 48m", icon: Dumbbell },
          { label: "Revision", pct: 20, color: "bg-orange-500", time: "1h 12m", icon: RotateCcw },
          { label: "Clinical", pct: 10, color: "bg-purple-500", time: "36m", icon: Stethoscope },
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
          <p className="text-sm text-gray-400">Click &quot;Generate AI Plan&quot; to create a personalized 7-day study schedule.</p>
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
    </div>
  );
}
