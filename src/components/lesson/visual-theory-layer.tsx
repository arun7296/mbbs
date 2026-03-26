"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Image as ImageIcon,
  Play,
  GitBranch,
  Maximize2,
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Lazy load diagram components by name — keeps initial bundle small
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Callout style map
// ---------------------------------------------------------------------------
const CALLOUT_STYLES: Record<
  string,
  { bg: string; border: string; iconBg: string; label: string }
> = {
  "\u{1F393}": {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-l-blue-500",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    label: "Professor\u2019s Note",
  },
  "\u{1F4A1}": {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-l-amber-500",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    label: "Memory Trick",
  },
  "\u26A1": {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-l-red-500",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    label: "Exam Alert",
  },
  "\u{1F914}": {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-l-purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    label: "Think About It",
  },
  "\u{1F3E5}": {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-l-emerald-500",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    label: "Clinical Pearl",
  },
  "\u{1F4CB}": {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-l-orange-500",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    label: "Self-Test",
  },
};

const LICENSE_LABELS: Record<string, string> = {
  PUBLIC_DOMAIN: "Public Domain",
  CC_BY: "CC BY",
  CC_BY_SA: "CC BY-SA",
  CC_BY_NC: "CC BY-NC",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert simple markdown to HTML (bold, italic, code, links, list items). */
function simpleMarkdown(text: string): string {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>',
    )
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code class="rounded bg-gray-100 px-1 py-0.5 text-sm font-mono text-violet-700 dark:bg-gray-800 dark:text-violet-300">$1</code>',
    )
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-blue-600 underline hover:text-blue-700 dark:text-blue-400" target="_blank" rel="noopener">$1</a>',
    )
    .replace(/^- (.+)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^(\d+)\. (.+)/gm, '<li class="ml-4 list-decimal">$2</li>')
    .replace(/\n/g, "<br />");
}

/**
 * Find the best matching image from the visuals array for an
 * {{IMAGE: description}} marker using keyword overlap.
 */
function findBestImage(
  visuals: VisualItem[],
  description: string,
): VisualItem | null {
  if (!visuals.length) return null;
  const words = description
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3);
  let best: VisualItem | null = null;
  let bestScore = 0;
  for (const v of visuals) {
    if (!v.imageUrl) continue;
    const haystack = `${v.title || ""} ${v.description || ""} ${(v.tags || []).join(" ")}`.toLowerCase();
    const score = words.filter((w) => haystack.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }
  // If no keyword match, return first image available
  return best || visuals.find((v) => v.imageUrl) || null;
}

// ---------------------------------------------------------------------------
// Sub-component: Markdown with styled callouts
// ---------------------------------------------------------------------------
function MarkdownWithCallouts({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactElement[] = [];
  let idx = 0;

  while (idx < lines.length) {
    const line = lines[idx];

    // --- Section divider ---
    if (line.trim() === "---") {
      elements.push(
        <div
          key={`div-${idx}`}
          className="my-10 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
        </div>,
      );
      idx++;
      continue;
    }

    // --- Callout block (> emoji ...) ---
    if (line.startsWith(">")) {
      const calloutLines = [line];
      while (
        idx + 1 < lines.length &&
        lines[idx + 1].startsWith(">")
      ) {
        idx++;
        calloutLines.push(lines[idx]);
      }
      const rawText = calloutLines
        .map((l) => l.replace(/^>\s*/, ""))
        .join("\n");

      // Detect which emoji callout this is
      let matched: (typeof CALLOUT_STYLES)[string] | null = null;
      let matchedEmoji = "";
      for (const [emoji, style] of Object.entries(CALLOUT_STYLES)) {
        if (rawText.includes(emoji)) {
          matched = style;
          matchedEmoji = emoji;
          break;
        }
      }

      if (matched) {
        // Remove the bold label like **Professor's Note:** from the visible text
        const cleanText = rawText
          .replace(matchedEmoji, "")
          .replace(/\*\*[^*]+\*\*:?\s*/, "")
          .trim();
        elements.push(
          <div
            key={`callout-${idx}`}
            className={`my-6 rounded-xl border-l-4 ${matched.border} ${matched.bg} p-4 shadow-sm`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-lg text-sm ${matched.iconBg}`}
              >
                {matchedEmoji}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {matched.label}
              </span>
            </div>
            <div
              className="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: simpleMarkdown(cleanText),
              }}
            />
          </div>,
        );
      } else {
        // Generic blockquote
        elements.push(
          <blockquote
            key={`bq-${idx}`}
            className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:border-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: simpleMarkdown(rawText),
            }}
          />,
        );
      }
      idx++;
      continue;
    }

    // --- Headings ---
    if (line.startsWith("#")) {
      const level = line.match(/^#+/)?.[0].length || 1;
      const text = line.replace(/^#+\s*/, "");
      const sizeClasses: Record<number, string> = {
        1: "text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100",
        2: "text-xl font-bold mt-8 mb-3 text-gray-800 dark:text-gray-200",
        3: "text-lg font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200",
        4: "text-base font-semibold mt-5 mb-2 text-gray-700 dark:text-gray-300",
        5: "text-sm font-semibold mt-4 mb-1 text-gray-700 dark:text-gray-300",
        6: "text-sm font-medium mt-3 mb-1 text-gray-600 dark:text-gray-400",
      };
      const Tag = `h${Math.min(level, 6)}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      elements.push(
        <Tag
          key={`h-${idx}`}
          className={sizeClasses[level] || sizeClasses[4]}
          dangerouslySetInnerHTML={{ __html: simpleMarkdown(text) }}
        />,
      );
      idx++;
      continue;
    }

    // --- Empty line ---
    if (line.trim() === "") {
      idx++;
      continue;
    }

    // --- Regular paragraph (collect consecutive lines) ---
    const paraLines = [line];
    while (
      idx + 1 < lines.length &&
      lines[idx + 1].trim() !== "" &&
      !lines[idx + 1].startsWith("#") &&
      !lines[idx + 1].startsWith(">") &&
      lines[idx + 1].trim() !== "---"
    ) {
      idx++;
      paraLines.push(lines[idx]);
    }
    elements.push(
      <p
        key={`p-${idx}`}
        className="my-3 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{
          __html: simpleMarkdown(paraLines.join("\n")),
        }}
      />,
    );
    idx++;
  }

  return <>{elements}</>;
}

// ---------------------------------------------------------------------------
// Sub-component: Inline diagram renderer
// ---------------------------------------------------------------------------
function InlineDiagram({ name }: { name: string }) {
  const Component = getDiagramComponent(name);
  if (!Component) {
    return (
      <div className="my-6 flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="text-center">
          <GitBranch className="mx-auto h-8 w-8 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500">
            Diagram: {name}
          </p>
          <p className="text-xs text-gray-400">Coming soon</p>
        </div>
      </div>
    );
  }
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2 dark:border-gray-800">
        <GitBranch className="h-4 w-4 text-violet-500" />
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Interactive Diagram
        </span>
      </div>
      <div className="p-4">
        <Component />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: Inline image from {{IMAGE: desc}} marker
// ---------------------------------------------------------------------------
function InlineImage({
  description,
  visuals,
}: {
  description: string;
  visuals: VisualItem[];
}) {
  const img = findBestImage(visuals, description);
  if (!img?.imageUrl) return null;

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
        <img
          src={img.imageUrl}
          alt={img.imageAlt || img.title || description}
          className="mx-auto max-h-96 w-auto object-contain p-2"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
        {img.title || description}
        {img.attribution && (
          <span className="ml-1 italic text-gray-400">
            {" \u2014 "}
            {img.attribution}
          </span>
        )}
        {img.license && (
          <span className="ml-1.5 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            {LICENSE_LABELS[img.license] || img.license}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: Image gallery (shown below lecture or as fallback)
// ---------------------------------------------------------------------------
function ImageGallery({
  visuals,
  topicName,
  collapsible = false,
}: {
  visuals: VisualItem[];
  topicName: string;
  collapsible?: boolean;
}) {
  const [expanded, setExpanded] = useState(!collapsible);
  const imageVisuals = visuals.filter((v) => v.imageUrl);
  const diagramVisuals = visuals.filter(
    (v) => v.componentName && (v.type === "SVG_DIAGRAM" || v.type === "ANIMATED"),
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  if (imageVisuals.length === 0 && diagramVisuals.length === 0) return null;

  return (
    <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
      <button
        onClick={() => collapsible && setExpanded(!expanded)}
        className={`mb-4 flex w-full items-center justify-between ${
          collapsible ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          <ImageIcon className="h-4 w-4" />
          Visual Resources ({visuals.length})
        </h3>
        {collapsible && (
          <span className="text-gray-400">
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        )}
      </button>

      {expanded && (
        <>
          {/* Diagram components */}
          {diagramVisuals.length > 0 && (
            <div className="mb-6 space-y-4">
              {diagramVisuals.map((v) => {
                const Component = v.componentName
                  ? getDiagramComponent(v.componentName)
                  : null;
                if (!Component) return null;
                return (
                  <div
                    key={v.id}
                    className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
                  >
                    <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2 dark:border-gray-800">
                      <GitBranch className="h-4 w-4 text-violet-500" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {v.title}
                      </span>
                    </div>
                    <div className="p-4">
                      <Component />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Image grid */}
          {imageVisuals.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {imageVisuals.map((v) => (
                <div
                  key={v.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 transition hover:shadow-md dark:border-gray-700"
                >
                  <div className="h-40 overflow-hidden bg-gray-50 dark:bg-gray-800">
                    <img
                      src={v.imageUrl!}
                      alt={v.imageAlt || v.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2">
                    <p className="line-clamp-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                      {v.title}
                    </p>
                    {v.attribution && (
                      <p className="text-[10px] italic text-gray-400">
                        {v.attribution}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: Fallback image gallery (used when no lecture content)
// ---------------------------------------------------------------------------
function ImageGalleryFallback({
  visuals,
  topicName,
}: {
  visuals: VisualItem[];
  topicName: string;
}) {
  const [activeVisualId, setActiveVisualId] = useState<string | null>(
    visuals[0]?.id || null,
  );
  const [filter, setFilter] = useState<string | null>(null);

  const diagrams = visuals.filter(
    (v) => v.type === "SVG_DIAGRAM" || v.type === "ANIMATED",
  );
  const images = visuals.filter((v) => v.type === "IMAGE");
  const flowcharts = visuals.filter((v) => v.type === "FLOWCHART");

  const filteredVisuals = filter
    ? visuals.filter(
        (v) =>
          v.type === filter ||
          (filter === "DIAGRAM" &&
            (v.type === "SVG_DIAGRAM" || v.type === "ANIMATED")),
      )
    : visuals;

  const activeVisual = visuals.find((v) => v.id === activeVisualId);

  if (visuals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <ImageIcon className="h-12 w-12 text-gray-300" />
        <p className="mt-4 text-gray-500">
          Visual content for {topicName} is coming soon
        </p>
        <p className="text-sm text-gray-400">
          Interactive diagrams and medical illustrations will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          <ImageIcon className="h-5 w-5 text-violet-600" />
          Visual Theory
        </h3>
        <p className="text-sm text-gray-500">
          {visuals.length} visual resource{visuals.length !== 1 ? "s" : ""} for{" "}
          {topicName}
        </p>
      </div>

      {/* Type filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
            !filter
              ? "bg-violet-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          All ({visuals.length})
        </button>
        {diagrams.length > 0 && (
          <button
            onClick={() => setFilter("DIAGRAM")}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              filter === "DIAGRAM"
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
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
              filter === "IMAGE"
                ? "bg-green-600 text-white"
                : "bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-300"
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
              filter === "FLOWCHART"
                ? "bg-orange-600 text-white"
                : "bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300"
            }`}
          >
            Flowcharts ({flowcharts.length})
          </button>
        )}
      </div>

      {/* Visual cards grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVisuals.map((visual) => {
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
                  <GitBranch className="h-8 w-8 text-violet-400" />
                </div>
              )}
              <h4 className="mt-1.5 line-clamp-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {visual.title}
              </h4>
              {visual.description && (
                <p className="mt-1 line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                  {visual.description}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Active visual display */}
      {activeVisual && (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3 dark:border-gray-800">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              {activeVisual.title}
            </h4>
          </div>
          <div className="p-5">
            {activeVisual.componentName &&
              (() => {
                const Component = getDiagramComponent(
                  activeVisual.componentName,
                );
                return Component ? (
                  <Component />
                ) : (
                  <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-500">
                      Diagram not found
                    </p>
                  </div>
                );
              })()}
            {activeVisual.imageUrl && !activeVisual.componentName && (
              <div className="space-y-3">
                <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800">
                  <img
                    src={activeVisual.imageUrl}
                    alt={activeVisual.imageAlt || activeVisual.title}
                    className="mx-auto max-h-[60vh] object-contain"
                  />
                </div>
                {activeVisual.attribution && (
                  <p className="text-center text-xs italic text-gray-400">
                    {activeVisual.attribution}
                    {activeVisual.license && (
                      <span className="ml-2 rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {LICENSE_LABELS[activeVisual.license] ||
                          activeVisual.license}
                      </span>
                    )}
                  </p>
                )}
              </div>
            )}
            {activeVisual.svgContent &&
              !activeVisual.componentName &&
              !activeVisual.imageUrl && (
                <div
                  className="mx-auto max-w-2xl [&_svg]:mx-auto [&_svg]:max-h-[60vh]"
                  dangerouslySetInnerHTML={{
                    __html: activeVisual.svgContent,
                  }}
                />
              )}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export: VisualTheoryLayer
// ---------------------------------------------------------------------------
export function VisualTheoryLayer({
  visuals,
  topicName,
  contentMd,
}: VisualTheoryLayerProps) {
  // Determine if we have real lecture content
  const hasLecture =
    contentMd &&
    contentMd.length > 500 &&
    !contentMd.includes("# " + topicName + " - Video Lectures");

  // Fallback to image gallery when no lecture content exists
  if (!hasLecture) {
    return (
      <ImageGalleryFallback visuals={visuals} topicName={topicName} />
    );
  }

  // -----------------------------------------------------------------------
  // Parse contentMd into segments: text | diagram | image
  // -----------------------------------------------------------------------
  const segmentRegex = /(\{\{DIAGRAM:\s*\w+\}\}|\{\{IMAGE:[^}]+\}\})/;
  const rawSegments = contentMd!.split(segmentRegex);

  const segments = rawSegments.map((segment) => {
    const diagramMatch = segment.match(/\{\{DIAGRAM:\s*(\w+)\}\}/);
    if (diagramMatch) {
      return { type: "diagram" as const, name: diagramMatch[1] };
    }

    const imageMatch = segment.match(/\{\{IMAGE:\s*([^}]+)\}\}/);
    if (imageMatch) {
      return { type: "image" as const, desc: imageMatch[1].trim() };
    }

    return { type: "text" as const, content: segment };
  });

  const wordCount = contentMd!.split(/\s+/).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="mx-auto max-w-3xl">
      {/* Lecture header badge */}
      <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-gray-200 pb-4 dark:border-gray-700">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
          <BookOpen className="h-3.5 w-3.5" />
          Professor&apos;s Lecture
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          ~{readMinutes} min read
        </span>
        {visuals.length > 0 && (
          <span className="text-xs text-gray-400 dark:text-gray-500">
            &middot; {visuals.length} visual
            {visuals.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Render segments */}
      {segments.map((seg, i) => {
        if (seg.type === "diagram") {
          return <InlineDiagram key={`seg-${i}`} name={seg.name} />;
        }

        if (seg.type === "image") {
          return (
            <InlineImage
              key={`seg-${i}`}
              description={seg.desc}
              visuals={visuals}
            />
          );
        }

        // Text segment — only render if non-empty
        if (!seg.content.trim()) return null;
        return (
          <MarkdownWithCallouts key={`seg-${i}`} content={seg.content} />
        );
      })}

      {/* Image gallery at bottom */}
      {visuals.length > 0 && (
        <ImageGallery
          visuals={visuals}
          topicName={topicName}
          collapsible
        />
      )}
    </div>
  );
}
