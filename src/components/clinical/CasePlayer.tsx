"use client";

import { useState } from "react";
import { PatientCard } from "./PatientCard";
import { ActionSelector } from "./ActionSelector";
import { FindingsPanel } from "./FindingsPanel";
import { CaseTimeline } from "./CaseTimeline";
import { ChevronRight, Trophy, RotateCcw } from "lucide-react";

interface CaseAction {
  id: string;
  text: string;
  isOptimal: boolean;
  findings?: string;
  scoreDelta: number;
}

interface CaseStageData {
  id: string;
  stage: string;
  stageOrder: number;
  prompt: string;
  availableActions: CaseAction[];
}

interface CaseData {
  id: string;
  title: string;
  caseType: string;
  difficulty: string;
  patientProfile: { age: number; sex: string; occupation?: string; history?: string };
  stages: CaseStageData[];
}

interface Finding {
  actionText: string;
  findings: string;
  stageType: string;
}

interface CasePlayerProps {
  caseData: CaseData;
  onComplete: (score: number, maxScore: number, findings: Finding[]) => void;
}

export function CasePlayer({ caseData, onComplete }: CasePlayerProps) {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [selectedActions, setSelectedActions] = useState<Record<number, Set<string>>>({});
  const [allFindings, setAllFindings] = useState<Finding[]>([]);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentStage = caseData.stages[currentStageIdx];
  const stageActions = selectedActions[currentStageIdx] ?? new Set<string>();
  const stageNames = caseData.stages.map((s) => s.stage);

  const handleSelectAction = (actionId: string) => {
    const action = currentStage.availableActions.find((a) => a.id === actionId);
    if (!action || stageActions.has(actionId)) return;

    // Update selected actions for this stage
    const newStageActions = new Set(stageActions);
    newStageActions.add(actionId);
    setSelectedActions({ ...selectedActions, [currentStageIdx]: newStageActions });

    // Add finding
    if (action.findings) {
      setAllFindings([...allFindings, {
        actionText: action.text,
        findings: action.findings,
        stageType: currentStage.stage,
      }]);
    }

    // Update score
    setScore(score + action.scoreDelta);
  };

  const handleNextStage = () => {
    if (currentStageIdx < caseData.stages.length - 1) {
      setCurrentStageIdx(currentStageIdx + 1);
    } else {
      // Complete the case
      const maxScore = caseData.stages.reduce((total, stage) => {
        return total + stage.availableActions
          .filter((a) => a.isOptimal)
          .reduce((sum, a) => sum + a.scoreDelta, 0);
      }, 0);
      setIsComplete(true);
      onComplete(score, maxScore, allFindings);
    }
  };

  if (isComplete) {
    const maxScore = caseData.stages.reduce((total, stage) => {
      return total + stage.availableActions.filter((a) => a.isOptimal).reduce((sum, a) => sum + a.scoreDelta, 0);
    }, 0);
    const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

    return (
      <div className="flex flex-col items-center py-12">
        <div className={`flex h-20 w-20 items-center justify-center rounded-full ${pct >= 70 ? "bg-green-100" : "bg-orange-100"}`}>
          <Trophy className={`h-10 w-10 ${pct >= 70 ? "text-green-600" : "text-orange-600"}`} />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Case Complete!</h2>
        <p className="mt-1 text-gray-500">{caseData.title}</p>
        <div className="mt-4 rounded-lg bg-gray-50 px-8 py-4 text-center">
          <p className="text-4xl font-bold text-gray-900">{score}/{maxScore}</p>
          <p className="text-sm text-gray-500">{pct}% — {pct >= 70 ? "Good clinical reasoning!" : "Review the case to improve."}</p>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <RotateCcw className="h-4 w-4" /> Try Again
          </button>
          <button
            onClick={() => window.history.back()}
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
          >
            Back to Cases
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Patient Card */}
      <PatientCard
        profile={caseData.patientProfile}
        title={caseData.title}
        caseType={caseData.caseType}
      />

      {/* Timeline */}
      <CaseTimeline stages={stageNames} currentStage={currentStageIdx} />

      {/* Current Stage */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Left: Prompt + Actions */}
        <div className="lg:col-span-2 space-y-4">
          {/* Stage Prompt */}
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="mb-2 text-sm font-semibold uppercase text-purple-600">
              Stage {currentStageIdx + 1}: {currentStage.stage}
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">{currentStage.prompt}</p>
          </div>

          {/* Actions */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">
              Select your actions ({stageActions.size} selected):
            </p>
            <ActionSelector
              actions={currentStage.availableActions}
              selectedActions={stageActions}
              onSelect={handleSelectAction}
              stageType={currentStage.stage}
            />
          </div>

          {/* Next Stage Button */}
          <button
            onClick={handleNextStage}
            disabled={stageActions.size === 0}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 disabled:opacity-50"
          >
            {currentStageIdx < caseData.stages.length - 1 ? (
              <>Proceed to Next Stage <ChevronRight className="h-4 w-4" /></>
            ) : (
              <>Complete Case <Trophy className="h-4 w-4" /></>
            )}
          </button>
        </div>

        {/* Right: Findings */}
        <div>
          <FindingsPanel findings={allFindings} />
          <div className="mt-3 rounded-lg bg-purple-50 p-3 text-center">
            <p className="text-xs text-purple-600">Running Score</p>
            <p className="text-2xl font-bold text-purple-800">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
