"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Image as ImageIcon,
  GitBranch,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Lazy load diagram components by name — keeps initial bundle small
// ---------------------------------------------------------------------------
function getDiagramComponent(componentName: string): React.ComponentType | null {
  const componentMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
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
  annotations: unknown;
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
  { bg: string; border: string; textColor: string; label: string }
> = {
  "\u{1F393}": {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-l-[5px] border-l-blue-600 dark:border-l-blue-400",
    textColor: "text-blue-900 dark:text-blue-100",
    label: "PROFESSOR\u2019S NOTE",
  },
  "\u{1F4A1}": {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-l-[5px] border-l-amber-500 dark:border-l-amber-400",
    textColor: "text-amber-900 dark:text-amber-100",
    label: "MEMORY TRICK",
  },
  "\u26A1": {
    bg: "bg-red-50 dark:bg-red-950/40",
    border: "border-l-[5px] border-l-red-600 dark:border-l-red-400",
    textColor: "text-red-900 dark:text-red-100",
    label: "EXAM ALERT",
  },
  "\u{1F914}": {
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-l-[5px] border-l-purple-600 dark:border-l-purple-400",
    textColor: "text-purple-900 dark:text-purple-100",
    label: "THINK ABOUT IT",
  },
  "\u{1F3E5}": {
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-l-[5px] border-l-emerald-600 dark:border-l-emerald-400",
    textColor: "text-emerald-900 dark:text-emerald-100",
    label: "CLINICAL PEARL",
  },
  "\u{1F4CB}": {
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-l-[5px] border-l-orange-600 dark:border-l-orange-400",
    textColor: "text-orange-900 dark:text-orange-100",
    label: "SELF-TEST",
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
      '<strong class="font-bold text-gray-950 dark:text-white">$1</strong>',
    )
    .replace(/\*(.+?)\*/g, '<em class="text-gray-800 dark:text-gray-200">$1</em>')
    .replace(
      /`(.+?)`/g,
      '<code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-violet-700 dark:bg-gray-800 dark:text-violet-300">$1</code>',
    )
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-blue-600 underline hover:text-blue-700 dark:text-blue-400" target="_blank" rel="noopener">$1</a>',
    )
    .replace(/^- (.+)/gm, '<li class="ml-6 list-disc text-gray-800 dark:text-gray-200 my-1.5 leading-relaxed">$1</li>')
    .replace(/^(\d+)\. (.+)/gm, '<li class="ml-6 list-decimal text-gray-800 dark:text-gray-200 my-1.5 leading-relaxed">$2</li>')
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
  const imageVisuals = visuals.filter((v) => v.imageUrl);
  if (imageVisuals.length === 0) return null;
  const words = description
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3);
  let best: VisualItem | null = null;
  let bestScore = 0;
  for (const v of imageVisuals) {
    const haystack = `${v.title || ""} ${v.description || ""} ${(v.tags || []).join(" ")}`.toLowerCase();
    const score = words.filter((w) => haystack.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }
  return best || imageVisuals[0] || null;
}

// ---------------------------------------------------------------------------
// Sub-component: Render a single inline diagram by component name
// ---------------------------------------------------------------------------
function InlineDiagram({ name }: { name: string }) {
  const Component = getDiagramComponent(name);
  if (!Component) {
    return (
      <div className="my-8 flex h-48 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-800/50">
        <div className="text-center">
          <GitBranch className="mx-auto h-8 w-8 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Interactive diagram: <span className="font-mono">{name}</span>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">Component coming soon</p>
        </div>
      </div>
    );
  }
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 dark:border-gray-800">
        <GitBranch className="h-4 w-4 text-violet-500" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
// Sub-component: Render an inline image for {{IMAGE: desc}} marker
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
    <figure className="my-8 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="flex justify-center">
        <img
          src={img.imageUrl}
          alt={img.imageAlt || img.title || description}
          className="max-h-80 rounded-lg object-contain"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
        {img.title || description}
        {img.attribution && (
          <span className="ml-1 text-xs italic text-gray-500 dark:text-gray-400">
            {" \u2014 "}
            {img.attribution}
          </span>
        )}
        {img.license && (
          <span className="ml-2 rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 not-italic dark:bg-gray-700 dark:text-gray-300">
            {LICENSE_LABELS[img.license] || img.license}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: Markdown with styled callouts, diagrams, and images
// ---------------------------------------------------------------------------
function MarkdownWithCallouts({
  content,
  visuals,
  imageCounter,
}: {
  content: string;
  visuals: VisualItem[];
  imageCounter: { current: number };
}) {
  const lines = content.split("\n");
  const elements: React.ReactElement[] = [];
  let idx = 0;
  const imageVisuals = visuals.filter((v) => v.imageUrl);

  while (idx < lines.length) {
    const line = lines[idx];

    // --- {{DIAGRAM: ComponentName}} marker ---
    const diagramMatch = line.trim().match(/^\{\{DIAGRAM:\s*(\w+)\s*\}\}$/);
    if (diagramMatch) {
      elements.push(
        <InlineDiagram key={`diagram-${idx}`} name={diagramMatch[1]} />,
      );
      idx++;
      continue;
    }

    // --- {{IMAGE: description}} marker ---
    const imageMatch = line.trim().match(/^\{\{IMAGE:\s*([^}]+)\s*\}\}$/);
    if (imageMatch) {
      elements.push(
        <InlineImage
          key={`image-${idx}`}
          description={imageMatch[1].trim()}
          visuals={visuals}
        />,
      );
      idx++;
      continue;
    }

    // --- Section divider (standalone --- NOT inside a table) ---
    if (/^\s*---\s*$/.test(line) && !line.includes("|")) {
      elements.push(
        <div
          key={`div-${idx}`}
          className="my-10 flex items-center justify-center gap-3"
        >
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
          <div className="flex gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-violet-400 dark:bg-violet-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 dark:bg-blue-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-violet-400 dark:bg-violet-500" />
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
        </div>,
      );

      // Auto-inject an image after each section divider if available
      if (imageCounter.current < imageVisuals.length) {
        const img = imageVisuals[imageCounter.current];
        imageCounter.current++;
        elements.push(
          <figure
            key={`autoimg-${idx}`}
            className="my-8 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50"
          >
            <div className="flex justify-center">
              <img
                src={img.imageUrl!}
                alt={img.imageAlt || img.title}
                className="max-h-80 rounded-lg object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
              {img.title}
            </figcaption>
            {img.attribution && (
              <p className="mt-1 text-center text-xs italic text-gray-500 dark:text-gray-400">
                {img.attribution}
                {img.license && (
                  <span className="ml-2 rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 not-italic dark:bg-gray-700 dark:text-gray-300">
                    {LICENSE_LABELS[img.license] || img.license}
                  </span>
                )}
              </p>
            )}
          </figure>,
        );
      }

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
        const cleanText = rawText
          .replace(matchedEmoji, "")
          .replace(/\*\*[^*]+\*\*:?\s*/, "")
          .trim();
        elements.push(
          <div
            key={`callout-${idx}`}
            className={`my-6 rounded-xl ${matched.border} ${matched.bg} p-5 shadow-sm`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">{matchedEmoji}</span>
              <span className={`text-xs font-bold uppercase tracking-wider ${matched.textColor}`}>
                {matched.label}
              </span>
            </div>
            <div
              className={`text-[15px] leading-relaxed ${matched.textColor}`}
              dangerouslySetInnerHTML={{
                __html: simpleMarkdown(cleanText),
              }}
            />
          </div>,
        );
      } else {
        elements.push(
          <blockquote
            key={`bq-${idx}`}
            className="my-4 border-l-4 border-gray-400 pl-4 italic text-gray-700 dark:border-gray-500 dark:text-gray-300"
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
        1: "text-3xl font-bold mt-8 mb-6 text-gray-950 dark:text-white leading-tight",
        2: "text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100",
        3: "text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-gray-100",
        4: "text-base font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200",
        5: "text-sm font-semibold mt-5 mb-2 text-gray-800 dark:text-gray-200",
        6: "text-sm font-medium mt-4 mb-1 text-gray-700 dark:text-gray-300",
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

    // --- Regular paragraph (collect consecutive non-special lines) ---
    const paraLines = [line];
    while (
      idx + 1 < lines.length &&
      lines[idx + 1].trim() !== "" &&
      !lines[idx + 1].startsWith("#") &&
      !lines[idx + 1].startsWith(">") &&
      !/^\s*---\s*$/.test(lines[idx + 1]) &&
      !/^\{\{DIAGRAM:/.test(lines[idx + 1].trim()) &&
      !/^\{\{IMAGE:/.test(lines[idx + 1].trim())
    ) {
      idx++;
      paraLines.push(lines[idx]);
    }
    elements.push(
      <p
        key={`p-${idx}`}
        className="my-4 text-[17px] leading-[1.8] text-gray-800 dark:text-gray-200"
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

  const wordCount = contentMd!.split(/\s+/).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 200));

  // Track which images have been auto-injected so we can show remaining at bottom
  const imageCounter = { current: 0 };
  const imageVisuals = visuals.filter((v) => v.imageUrl);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Lecture header badge */}
      <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-gray-200 pb-4 dark:border-gray-700">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
          <BookOpen className="h-3.5 w-3.5" />
          Professor&apos;s Lecture
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          ~{readMinutes} min read
        </span>
        {visuals.length > 0 && (
          <span className="text-xs text-gray-600 dark:text-gray-400">
            &middot; {visuals.length} visual
            {visuals.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Render the full lecture with inline diagrams, images, and callouts */}
      <MarkdownWithCallouts
        content={contentMd!}
        visuals={visuals}
        imageCounter={imageCounter}
      />

      {/* Remaining images not shown inline — collapsible gallery */}
      {imageCounter.current < imageVisuals.length && (
        <details className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
          <summary className="cursor-pointer text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            <ImageIcon className="mr-2 inline h-4 w-4" />
            View {imageVisuals.length - imageCounter.current} Additional Reference Image
            {imageVisuals.length - imageCounter.current !== 1 ? "s" : ""}
          </summary>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {imageVisuals.slice(imageCounter.current).map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="h-40 overflow-hidden bg-gray-50 dark:bg-gray-800">
                  <img
                    src={v.imageUrl!}
                    alt={v.imageAlt || v.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-2">
                  <p className="line-clamp-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
