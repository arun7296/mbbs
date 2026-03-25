"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Image as ImageIcon, Play, GitBranch, Maximize2, ExternalLink } from "lucide-react";

// Lazy load diagram components by name — keeps initial bundle small
function getDiagramComponent(componentName: string): React.ComponentType | null {
  const componentMap: Record<string, () => Promise<any>> = {
    // Anatomy
    "HeartChambersDiagram": () => import("@/components/diagrams/anatomy/heart-chambers").then(m => ({ default: m.HeartChambersDiagram })),
    "BrachialPlexusSVG": () => import("@/components/diagrams/anatomy/brachial-plexus").then(m => ({ default: m.BrachialPlexusSVG })),
    "CircleOfWillisSVG": () => import("@/components/diagrams/anatomy/circle-of-willis").then(m => ({ default: m.CircleOfWillisSVG })),
    "CranialNervesDiagram": () => import("@/components/diagrams/anatomy/cranial-nerves").then(m => ({ default: m.CranialNervesDiagram })),
    "DermatomeMap": () => import("@/components/diagrams/anatomy/dermatomes").then(m => ({ default: m.DermatomeMap })),
    "NephronDiagram": () => import("@/components/diagrams/anatomy/nephron").then(m => ({ default: m.NephronDiagram })),
    "SarcomereDiagram": () => import("@/components/diagrams/anatomy/sarcomere").then(m => ({ default: m.SarcomereDiagram })),
    "SpinalCordTractsSVG": () => import("@/components/diagrams/anatomy/spinal-cord-tracts").then(m => ({ default: m.SpinalCordTractsSVG })),
    "ThoraxCrossSection": () => import("@/components/diagrams/anatomy/thorax-cross-section").then(m => ({ default: m.ThoraxCrossSection })),
    // Physiology
    "CardiacCycleAnimation": () => import("@/components/diagrams/physiology/cardiac-cycle").then(m => ({ default: m.CardiacCycleAnimation })),
    "ActionPotentialAnimation": () => import("@/components/diagrams/physiology/action-potential").then(m => ({ default: m.ActionPotentialAnimation })),
    "OxygenDissociationCurve": () => import("@/components/diagrams/physiology/oxygen-dissociation").then(m => ({ default: m.OxygenDissociationCurve })),
    "FrankStarlingCurve": () => import("@/components/diagrams/physiology/frank-starling").then(m => ({ default: m.FrankStarlingCurve })),
    "PressureVolumeLoop": () => import("@/components/diagrams/physiology/pressure-volume-loop").then(m => ({ default: m.PressureVolumeLoop })),
    "JGAFeedbackDiagram": () => import("@/components/diagrams/physiology/jga-feedback").then(m => ({ default: m.JGAFeedbackDiagram })),
    "RAASCascade": () => import("@/components/diagrams/physiology/renin-angiotensin").then(m => ({ default: m.RAASCascade })),
    "CountercurrentAnimation": () => import("@/components/diagrams/physiology/countercurrent").then(m => ({ default: m.CountercurrentAnimation })),
    // Biochemistry
    "GlycolysisPathway": () => import("@/components/diagrams/biochemistry/glycolysis").then(m => ({ default: m.GlycolysisPathway })),
    "TCACycleDiagram": () => import("@/components/diagrams/biochemistry/tca-cycle").then(m => ({ default: m.TCACycleDiagram })),
    "ETCChainDiagram": () => import("@/components/diagrams/biochemistry/etc-chain").then(m => ({ default: m.ETCChainDiagram })),
    "UreaCycleDiagram": () => import("@/components/diagrams/biochemistry/urea-cycle").then(m => ({ default: m.UreaCycleDiagram })),
    "HemeSynthesisPathway": () => import("@/components/diagrams/biochemistry/heme-synthesis").then(m => ({ default: m.HemeSynthesisPathway })),
    "AminoAcidMetabolism": () => import("@/components/diagrams/biochemistry/amino-acid-metabolism").then(m => ({ default: m.AminoAcidMetabolism })),
    "DNAReplicationDiagram": () => import("@/components/diagrams/biochemistry/dna-replication").then(m => ({ default: m.DNAReplicationDiagram })),
    // Pathology
    "InflammationCascade": () => import("@/components/diagrams/pathology/inflammation-cascade").then(m => ({ default: m.InflammationCascade })),
    "CoagulationCascade": () => import("@/components/diagrams/pathology/coagulation-cascade").then(m => ({ default: m.CoagulationCascade })),
    "ComplementPathway": () => import("@/components/diagrams/pathology/complement-pathway").then(m => ({ default: m.ComplementPathway })),
    "CellCycleDiagram": () => import("@/components/diagrams/pathology/cell-cycle").then(m => ({ default: m.CellCycleDiagram })),
    "MetastasisSteps": () => import("@/components/diagrams/pathology/metastasis-steps").then(m => ({ default: m.MetastasisSteps })),
    // Pharmacology
    "DrugReceptorCurves": () => import("@/components/diagrams/pharmacology/drug-receptor").then(m => ({ default: m.DrugReceptorCurves })),
    "PharmacokineticsDiagram": () => import("@/components/diagrams/pharmacology/pharmacokinetics").then(m => ({ default: m.PharmacokineticsDiagram })),
    "AutonomicReceptorMap": () => import("@/components/diagrams/pharmacology/autonomic-receptors").then(m => ({ default: m.AutonomicReceptorMap })),
    "AntibioticTargets": () => import("@/components/diagrams/pharmacology/antibiotic-targets").then(m => ({ default: m.AntibioticTargets })),
    // Clinical
    "ECGWavesDiagram": () => import("@/components/diagrams/clinical/ecg-waves").then(m => ({ default: m.ECGWavesDiagram })),
    "ABGAlgorithm": () => import("@/components/diagrams/clinical/abg-interpretation").then(m => ({ default: m.ABGAlgorithm })),
    "GCSChart": () => import("@/components/diagrams/clinical/glasgow-coma-scale").then(m => ({ default: m.GCSChart })),
    "TraumaAssessment": () => import("@/components/diagrams/clinical/trauma-assessment").then(m => ({ default: m.TraumaAssessment })),
  };

  if (!componentMap[componentName]) return null;

  return dynamic(componentMap[componentName], {
    loading: () => (
      <div className="flex h-64 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-violet-600 border-t-transparent" />
          <span className="text-xs text-gray-500">Loading diagram...</span>
        </div>
      </div>
    ),
    ssr: false,
  });
}

export interface VisualItem {
  id: string;
  type: string;
  title: string;
  description: string | null;
  componentName: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  attribution: string | null;
  license: string | null;
  svgContent: string | null;
  annotations: any;
  category: string;
  tags: string[];
  sortOrder: number;
}

interface VisualTheoryLayerProps {
  visuals: VisualItem[];
  topicName: string;
  contentMd?: string;
}

const TYPE_ICONS: Record<string, { icon: typeof ImageIcon; label: string; color: string }> = {
  SVG_DIAGRAM: { icon: GitBranch, label: "Interactive Diagram", color: "blue" },
  ANIMATED: { icon: Play, label: "Animation", color: "violet" },
  IMAGE: { icon: ImageIcon, label: "Medical Image", color: "green" },
  FLOWCHART: { icon: GitBranch, label: "Flowchart", color: "orange" },
  COMPARISON_TABLE: { icon: GitBranch, label: "Comparison", color: "amber" },
};

const LICENSE_LABELS: Record<string, string> = {
  PUBLIC_DOMAIN: "Public Domain",
  CC_BY: "CC BY",
  CC_BY_SA: "CC BY-SA",
  CC_BY_NC: "CC BY-NC",
};

export function VisualTheoryLayer({ visuals, topicName, contentMd }: VisualTheoryLayerProps) {
  const [activeVisualId, setActiveVisualId] = useState<string | null>(visuals[0]?.id || null);
  const [filter, setFilter] = useState<string | null>(null);

  // Group visuals by type
  const diagrams = visuals.filter(v => v.type === "SVG_DIAGRAM" || v.type === "ANIMATED");
  const images = visuals.filter(v => v.type === "IMAGE");
  const flowcharts = visuals.filter(v => v.type === "FLOWCHART");
  const tables = visuals.filter(v => v.type === "COMPARISON_TABLE");

  const filteredVisuals = filter
    ? visuals.filter(v => v.type === filter || (filter === "DIAGRAM" && (v.type === "SVG_DIAGRAM" || v.type === "ANIMATED")))
    : visuals;

  const activeVisual = visuals.find(v => v.id === activeVisualId);

  if (visuals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <ImageIcon className="h-12 w-12 text-gray-300" />
        <p className="mt-4 text-gray-500">Visual content for {topicName} is coming soon</p>
        <p className="text-sm text-gray-400">Interactive diagrams and medical illustrations will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            <ImageIcon className="h-5 w-5 text-violet-600" />
            Visual Theory
          </h3>
          <p className="text-sm text-gray-500">{visuals.length} visual resource{visuals.length !== 1 ? "s" : ""} for {topicName}</p>
        </div>
      </div>

      {/* Type filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
            !filter ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          All ({visuals.length})
        </button>
        {diagrams.length > 0 && (
          <button
            onClick={() => setFilter("DIAGRAM")}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              filter === "DIAGRAM" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
            }`}
          >
            <GitBranch className="h-3 w-3" />
            Diagrams ({diagrams.length})
          </button>
        )}
        {images.length > 0 && (
          <button
            onClick={() => setFilter("IMAGE")}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              filter === "IMAGE" ? "bg-green-600 text-white" : "bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300"
            }`}
          >
            <ImageIcon className="h-3 w-3" />
            Images ({images.length})
          </button>
        )}
        {flowcharts.length > 0 && (
          <button
            onClick={() => setFilter("FLOWCHART")}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              filter === "FLOWCHART" ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300"
            }`}
          >
            Flowcharts ({flowcharts.length})
          </button>
        )}
      </div>

      {/* Visual cards grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVisuals.map(visual => {
          const typeInfo = TYPE_ICONS[visual.type] || TYPE_ICONS.IMAGE;
          const isActive = visual.id === activeVisualId;

          return (
            <button
              key={visual.id}
              onClick={() => setActiveVisualId(visual.id)}
              className={`group rounded-xl border p-3 text-left transition-all ${
                isActive
                  ? "border-violet-300 bg-violet-50 ring-2 ring-violet-200 dark:border-violet-600 dark:bg-violet-900/20 dark:ring-violet-800"
                  : "border-gray-200 hover:border-violet-200 hover:shadow-sm dark:border-gray-700 dark:hover:border-violet-700"
              }`}
            >
              {/* Thumbnail area */}
              {visual.imageUrl ? (
                <div className="mb-2 h-28 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img
                    src={visual.imageUrl}
                    alt={visual.imageAlt || visual.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mb-2 flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/20 dark:to-blue-900/20">
                  <typeInfo.icon className="h-8 w-8 text-violet-400" />
                </div>
              )}

              {/* Type badge */}
              <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                isActive ? "bg-violet-200 text-violet-800" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
              }`}>
                {typeInfo.label}
              </span>

              <h4 className="mt-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">{visual.title}</h4>
              {visual.description && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{visual.description}</p>
              )}

              {/* Tags */}
              {visual.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {visual.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      {tag.replace(/_/g, " ")}
                    </span>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active visual display */}
      {activeVisual && (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          {/* Visual header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3 dark:border-gray-800">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">{activeVisual.title}</h4>
              {activeVisual.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{activeVisual.description}</p>
              )}
            </div>
            <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              {TYPE_ICONS[activeVisual.type]?.label || activeVisual.type}
            </span>
          </div>

          {/* Visual content */}
          <div className="p-5">
            {/* React component diagram */}
            {activeVisual.componentName && (() => {
              const Component = getDiagramComponent(activeVisual.componentName);
              if (!Component) {
                return (
                  <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-500">Diagram component &quot;{activeVisual.componentName}&quot; not found</p>
                  </div>
                );
              }
              return <Component />;
            })()}

            {/* External image */}
            {activeVisual.imageUrl && !activeVisual.componentName && (
              <div className="space-y-3">
                <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800">
                  <img
                    src={activeVisual.imageUrl}
                    alt={activeVisual.imageAlt || activeVisual.title}
                    className="mx-auto max-h-[60vh] object-contain"
                  />
                </div>
                {/* Attribution */}
                {activeVisual.attribution && (
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 dark:bg-gray-800">
                    <p className="text-xs text-gray-400 italic">
                      {activeVisual.attribution}
                    </p>
                    {activeVisual.license && (
                      <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {LICENSE_LABELS[activeVisual.license] || activeVisual.license}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Inline SVG content */}
            {activeVisual.svgContent && !activeVisual.componentName && !activeVisual.imageUrl && (
              <div
                className="mx-auto max-w-2xl [&_svg]:mx-auto [&_svg]:max-h-[60vh]"
                dangerouslySetInnerHTML={{ __html: activeVisual.svgContent }}
              />
            )}
          </div>
        </div>
      )}

      {/* Study tips */}
      <div className="rounded-lg border border-violet-100 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-900/20">
        <h4 className="text-sm font-semibold text-violet-800 dark:text-violet-300">Study Tips</h4>
        <ul className="mt-2 space-y-1 text-xs text-violet-700 dark:text-violet-400">
          <li>Click on diagram labels to see detailed descriptions</li>
          <li>Use zoom controls to examine fine details in diagrams</li>
          <li>Animated diagrams have play/pause controls — study each phase</li>
          <li>Try to redraw diagrams from memory for active recall</li>
        </ul>
      </div>
    </div>
  );
}
