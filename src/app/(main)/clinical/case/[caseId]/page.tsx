"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CasePlayer } from "@/components/clinical/CasePlayer";
import { Stethoscope } from "lucide-react";

interface CaseAction {
  id: string;
  text: string;
  isOptimal: boolean;
  findings?: string;
  scoreDelta: number;
}

interface CaseStage {
  id: string;
  stage: string;
  stageOrder: number;
  prompt: string;
  availableActions: CaseAction[];
}

interface ClinicalCaseData {
  id: string;
  title: string;
  caseType: string;
  difficulty: string;
  patientProfile: { age: number; sex: string; occupation?: string; history?: string };
  stages: CaseStage[];
}

export default function ClinicalCasePage() {
  const params = useParams();
  const router = useRouter();
  const caseId = params.caseId as string;
  const [caseData, setCaseData] = useState<ClinicalCaseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCase() {
      try {
        // Fetch case via tRPC HTTP endpoint
        const res = await fetch(`/api/trpc/clinical.getCase?input=${encodeURIComponent(JSON.stringify({ json: { caseId } }))}`);
        const data = await res.json();

        if (data.result?.data?.json) {
          const c = data.result.data.json;
          setCaseData({
            id: c.id,
            title: c.title,
            caseType: c.caseType,
            difficulty: c.difficulty,
            patientProfile: c.patientProfile as ClinicalCaseData["patientProfile"],
            stages: (c.stages ?? []).map((s: Record<string, unknown>) => ({
              id: s.id,
              stage: s.stage,
              stageOrder: s.stageOrder,
              prompt: s.prompt,
              availableActions: s.availableActions as CaseAction[],
            })),
          });
        } else {
          setError("Case not found");
        }
      } catch {
        setError("Failed to load case");
      } finally {
        setLoading(false);
      }
    }

    fetchCase();
  }, [caseId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Stethoscope className="h-8 w-8 animate-pulse text-purple-400" />
        <p className="mt-4 text-gray-500">Loading clinical case...</p>
      </div>
    );
  }

  if (error || !caseData) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-red-500">{error || "Case not found"}</p>
        <button onClick={() => router.push("/clinical")} className="mt-4 text-sm text-blue-600 hover:underline">
          Back to cases
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8">
      <CasePlayer
        caseData={caseData}
        onComplete={async (score, maxScore) => {
          try {
            // Save attempt via tRPC
            const startRes = await fetch(`/api/trpc/clinical.startCase`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ json: { caseId } }),
            });
            const startData = await startRes.json();
            const attemptId = startData?.result?.data?.json?.attempt?.id;

            if (attemptId) {
              await fetch(`/api/trpc/clinical.completeCase`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ json: { attemptId } }),
              });
            }
          } catch {
            // Silently fail — the UI already shows the score
          }
        }}
      />
    </div>
  );
}
