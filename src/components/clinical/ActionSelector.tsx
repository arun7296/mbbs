"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, MessageCircle, Stethoscope, FlaskConical, Brain, Pill, CalendarCheck } from "lucide-react";

interface Action {
  id: string;
  text: string;
  isOptimal?: boolean;
  findings?: string;
  scoreDelta: number;
}

interface ActionSelectorProps {
  actions: Action[];
  selectedActions: Set<string>;
  onSelect: (actionId: string) => void;
  stageType: string;
  disabled?: boolean;
}

const stageIcons: Record<string, typeof MessageCircle> = {
  HISTORY: MessageCircle,
  EXAMINATION: Stethoscope,
  INVESTIGATION: FlaskConical,
  DIAGNOSIS: Brain,
  TREATMENT: Pill,
  FOLLOWUP: CalendarCheck,
};

export function ActionSelector({ actions, selectedActions, onSelect, stageType, disabled }: ActionSelectorProps) {
  const Icon = stageIcons[stageType] ?? MessageCircle;

  return (
    <div className="space-y-2">
      {actions.map((action) => {
        const isSelected = selectedActions.has(action.id);
        return (
          <button
            key={action.id}
            onClick={() => onSelect(action.id)}
            disabled={disabled || isSelected}
            className={cn(
              "flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-all",
              isSelected
                ? "border-purple-300 bg-purple-50"
                : "border-gray-200 hover:border-purple-200 hover:bg-purple-50/50",
              disabled && !isSelected && "cursor-not-allowed opacity-50"
            )}
          >
            {isSelected ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
            ) : (
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
            )}
            <span className={cn("text-sm", isSelected ? "font-medium text-purple-900" : "text-gray-700")}>
              {action.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}
