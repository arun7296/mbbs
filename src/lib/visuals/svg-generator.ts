/**
 * Generate SVG diagrams programmatically for topics with no external images.
 * These ensure 100% visual coverage across all 660 topics.
 *
 * Types generated:
 * 1. Concept Maps — radial layout with topic center and key points as satellites
 * 2. Comparison Tables — side-by-side visual comparisons
 * 3. Hierarchy Diagrams — tree structures for classification topics
 * 4. Timeline/Sequence — linear flow for clinical algorithms
 */

// Color palettes by subject
const SUBJECT_COLORS: Record<string, { primary: string; secondary: string; bg: string; text: string }> = {
  AN: { primary: "#3B82F6", secondary: "#93C5FD", bg: "#EFF6FF", text: "#1E40AF" },  // Blue - Anatomy
  PY: { primary: "#8B5CF6", secondary: "#C4B5FD", bg: "#F5F3FF", text: "#5B21B6" },  // Violet - Physiology
  BI: { primary: "#10B981", secondary: "#6EE7B7", bg: "#ECFDF5", text: "#065F46" },  // Green - Biochemistry
  PA: { primary: "#EF4444", secondary: "#FCA5A5", bg: "#FEF2F2", text: "#991B1B" },  // Red - Pathology
  PH: { primary: "#F59E0B", secondary: "#FCD34D", bg: "#FFFBEB", text: "#92400E" },  // Amber - Pharmacology
  MI: { primary: "#06B6D4", secondary: "#67E8F9", bg: "#ECFEFF", text: "#155E75" },  // Cyan - Microbiology
  CM: { primary: "#14B8A6", secondary: "#5EEAD4", bg: "#F0FDFA", text: "#134E4A" },  // Teal - Community Med
  IM: { primary: "#6366F1", secondary: "#A5B4FC", bg: "#EEF2FF", text: "#3730A3" },  // Indigo - Internal Med
  SU: { primary: "#EC4899", secondary: "#F9A8D4", bg: "#FDF2F8", text: "#9D174D" },  // Pink - Surgery
  OG: { primary: "#D946EF", secondary: "#E879F9", bg: "#FDF4FF", text: "#86198F" },  // Fuchsia - OBG
  PE: { primary: "#22C55E", secondary: "#86EFAC", bg: "#F0FDF4", text: "#166534" },  // Green - Pediatrics
  EN: { primary: "#0EA5E9", secondary: "#7DD3FC", bg: "#F0F9FF", text: "#0C4A6E" },  // Sky - ENT
  OP: { primary: "#A855F7", secondary: "#C084FC", bg: "#FAF5FF", text: "#6B21A8" },  // Purple - Ophthalmology
  DR: { primary: "#F97316", secondary: "#FDBA74", bg: "#FFF7ED", text: "#9A3412" },  // Orange - Dermatology
  PS: { primary: "#0891B2", secondary: "#22D3EE", bg: "#ECFEFF", text: "#164E63" },  // Cyan - Psychiatry
  OR: { primary: "#84CC16", secondary: "#BEF264", bg: "#F7FEE7", text: "#3F6212" },  // Lime - Orthopedics
  AS: { primary: "#64748B", secondary: "#94A3B8", bg: "#F8FAFC", text: "#1E293B" },  // Slate - Anesthesia
  RD: { primary: "#475569", secondary: "#94A3B8", bg: "#F1F5F9", text: "#0F172A" },  // Gray - Radiology
};

function getColors(subjectCode: string) {
  return SUBJECT_COLORS[subjectCode] || SUBJECT_COLORS.AN;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + "…";
}

function wrapText(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    if ((currentLine + " " + word).trim().length > maxCharsPerLine) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += " " + word;
    }
  }
  if (currentLine.trim()) lines.push(currentLine.trim());
  return lines.slice(0, 3); // Max 3 lines
}

/**
 * Generate a radial concept map SVG.
 * Center node = topic name, satellite nodes = key points.
 */
export function generateConceptMapSVG(
  topicName: string,
  keyPoints: string[],
  subjectCode: string = "AN"
): string {
  const colors = getColors(subjectCode);
  const centerX = 400, centerY = 300;
  const points = keyPoints.slice(0, 8);
  const radius = points.length <= 4 ? 170 : points.length <= 6 ? 190 : 210;
  const nodeRadius = points.length <= 4 ? 55 : points.length <= 6 ? 48 : 42;

  let svg = `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, -apple-system, sans-serif;">`;

  // Background
  svg += `<rect width="800" height="600" fill="${colors.bg}" rx="12"/>`;

  // Title
  svg += `<text x="400" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="${colors.text}">Concept Map</text>`;

  // Connection lines (drawn first, behind nodes)
  points.forEach((_, i) => {
    const angle = (2 * Math.PI * i) / points.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    svg += `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="${colors.secondary}" stroke-width="2" stroke-dasharray="6,3"/>`;
  });

  // Center node
  const centerR = 65;
  svg += `<circle cx="${centerX}" cy="${centerY}" r="${centerR}" fill="${colors.primary}" opacity="0.15" stroke="${colors.primary}" stroke-width="2.5"/>`;
  const centerLines = wrapText(topicName, 16);
  centerLines.forEach((line, i) => {
    const y = centerY + (i - (centerLines.length - 1) / 2) * 14;
    svg += `<text x="${centerX}" y="${y}" text-anchor="middle" dy="0.35em" font-size="12" font-weight="bold" fill="${colors.text}">${escapeXml(truncate(line, 18))}</text>`;
  });

  // Satellite nodes
  points.forEach((point, i) => {
    const angle = (2 * Math.PI * i) / points.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    svg += `<circle cx="${x}" cy="${y}" r="${nodeRadius}" fill="white" stroke="${colors.primary}" stroke-width="1.5"/>`;

    const lines = wrapText(point, 12);
    lines.forEach((line, j) => {
      const ly = y + (j - (lines.length - 1) / 2) * 11;
      svg += `<text x="${x}" y="${ly}" text-anchor="middle" dy="0.35em" font-size="9" fill="${colors.text}">${escapeXml(truncate(line, 14))}</text>`;
    });

    // Number badge
    svg += `<circle cx="${x + nodeRadius * 0.7}" cy="${y - nodeRadius * 0.7}" r="9" fill="${colors.primary}"/>`;
    svg += `<text x="${x + nodeRadius * 0.7}" y="${y - nodeRadius * 0.7}" text-anchor="middle" dy="0.35em" font-size="8" font-weight="bold" fill="white">${i + 1}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

/**
 * Generate a comparison table SVG.
 * Two-column visual comparison for medical topics.
 */
export function generateComparisonSVG(
  title: string,
  leftLabel: string,
  rightLabel: string,
  items: Array<{ label: string; left: string; right: string }>,
  subjectCode: string = "AN"
): string {
  const colors = getColors(subjectCode);
  const headerY = 60;
  const startY = 100;
  const rowHeight = 40;
  const height = startY + items.length * rowHeight + 30;

  let svg = `<svg viewBox="0 0 800 ${height}" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, -apple-system, sans-serif;">`;

  // Background
  svg += `<rect width="800" height="${height}" fill="${colors.bg}" rx="12"/>`;

  // Title
  svg += `<text x="400" y="35" text-anchor="middle" font-size="16" font-weight="bold" fill="${colors.text}">${escapeXml(title)}</text>`;

  // Header row
  svg += `<rect x="20" y="${headerY}" width="200" height="30" fill="${colors.primary}" rx="6"/>`;
  svg += `<text x="120" y="${headerY + 18}" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Feature</text>`;

  svg += `<rect x="230" y="${headerY}" width="260" height="30" fill="${colors.primary}" rx="6"/>`;
  svg += `<text x="360" y="${headerY + 18}" text-anchor="middle" font-size="11" font-weight="bold" fill="white">${escapeXml(leftLabel)}</text>`;

  svg += `<rect x="500" y="${headerY}" width="280" height="30" fill="${colors.secondary}" rx="6"/>`;
  svg += `<text x="640" y="${headerY + 18}" text-anchor="middle" font-size="11" font-weight="bold" fill="${colors.text}">${escapeXml(rightLabel)}</text>`;

  // Data rows
  items.forEach((item, i) => {
    const y = startY + i * rowHeight;
    const bgColor = i % 2 === 0 ? "white" : colors.bg;

    svg += `<rect x="20" y="${y}" width="200" height="${rowHeight}" fill="${bgColor}" stroke="#E5E7EB" stroke-width="0.5"/>`;
    svg += `<text x="120" y="${y + rowHeight / 2}" text-anchor="middle" dy="0.35em" font-size="10" font-weight="600" fill="${colors.text}">${escapeXml(truncate(item.label, 22))}</text>`;

    svg += `<rect x="230" y="${y}" width="260" height="${rowHeight}" fill="${bgColor}" stroke="#E5E7EB" stroke-width="0.5"/>`;
    svg += `<text x="360" y="${y + rowHeight / 2}" text-anchor="middle" dy="0.35em" font-size="9" fill="#374151">${escapeXml(truncate(item.left, 30))}</text>`;

    svg += `<rect x="500" y="${y}" width="280" height="${rowHeight}" fill="${bgColor}" stroke="#E5E7EB" stroke-width="0.5"/>`;
    svg += `<text x="640" y="${y + rowHeight / 2}" text-anchor="middle" dy="0.35em" font-size="9" fill="#374151">${escapeXml(truncate(item.right, 32))}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

/**
 * Generate a hierarchy/classification tree SVG.
 * Good for taxonomy, classification, and organizational topics.
 */
export function generateHierarchySVG(
  rootLabel: string,
  children: Array<{ label: string; children?: string[] }>,
  subjectCode: string = "AN"
): string {
  const colors = getColors(subjectCode);
  const nodeW = 130, nodeH = 32;
  const levelGap = 70;
  const startY = 50;

  // Calculate layout
  const totalLeaves = children.reduce((sum, c) => sum + Math.max((c.children?.length || 0), 1), 0);
  const leafWidth = 140;
  const svgWidth = Math.max(800, totalLeaves * leafWidth + 40);
  const svgHeight = startY + levelGap * 3 + 30;

  let svg = `<svg viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, -apple-system, sans-serif;">`;
  svg += `<rect width="${svgWidth}" height="${svgHeight}" fill="${colors.bg}" rx="12"/>`;

  // Root node
  const rootX = svgWidth / 2;
  const rootY = startY;
  svg += `<rect x="${rootX - nodeW / 2}" y="${rootY}" width="${nodeW}" height="${nodeH}" rx="16" fill="${colors.primary}" stroke="${colors.primary}" stroke-width="2"/>`;
  svg += `<text x="${rootX}" y="${rootY + nodeH / 2}" text-anchor="middle" dy="0.35em" font-size="11" font-weight="bold" fill="white">${escapeXml(truncate(rootLabel, 16))}</text>`;

  // Level 2 nodes
  const l2Y = startY + levelGap;
  const l2Width = svgWidth / children.length;

  children.forEach((child, ci) => {
    const cx = l2Width * ci + l2Width / 2;

    // Connection line to root
    svg += `<line x1="${rootX}" y1="${rootY + nodeH}" x2="${cx}" y2="${l2Y}" stroke="${colors.secondary}" stroke-width="1.5"/>`;

    // Node
    svg += `<rect x="${cx - nodeW / 2}" y="${l2Y}" width="${nodeW}" height="${nodeH}" rx="6" fill="white" stroke="${colors.primary}" stroke-width="1.5"/>`;
    svg += `<text x="${cx}" y="${l2Y + nodeH / 2}" text-anchor="middle" dy="0.35em" font-size="10" font-weight="600" fill="${colors.text}">${escapeXml(truncate(child.label, 16))}</text>`;

    // Level 3 nodes (leaves)
    if (child.children && child.children.length > 0) {
      const l3Y = l2Y + levelGap;
      const leafsPerChild = child.children.length;
      const leafSpacing = Math.min(leafWidth, l2Width / leafsPerChild);

      child.children.forEach((leaf, li) => {
        const lx = cx + (li - (leafsPerChild - 1) / 2) * leafSpacing;

        svg += `<line x1="${cx}" y1="${l2Y + nodeH}" x2="${lx}" y2="${l3Y}" stroke="${colors.secondary}" stroke-width="1"/>`;
        svg += `<rect x="${lx - 55}" y="${l3Y}" width="110" height="26" rx="4" fill="${colors.bg}" stroke="${colors.secondary}" stroke-width="1"/>`;
        svg += `<text x="${lx}" y="${l3Y + 13}" text-anchor="middle" dy="0.35em" font-size="8" fill="${colors.text}">${escapeXml(truncate(leaf, 14))}</text>`;
      });
    }
  });

  svg += `</svg>`;
  return svg;
}

/**
 * Generate a linear sequence/timeline SVG.
 * Good for clinical algorithms, step-by-step processes.
 */
export function generateSequenceSVG(
  title: string,
  steps: Array<{ label: string; description?: string }>,
  subjectCode: string = "AN"
): string {
  const colors = getColors(subjectCode);
  const stepW = 130, stepH = 60;
  const gapX = 30;
  const startX = 40;
  const centerY = 180;
  const svgWidth = Math.max(800, startX * 2 + steps.length * (stepW + gapX));

  let svg = `<svg viewBox="0 0 ${svgWidth} 360" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, -apple-system, sans-serif;">`;
  svg += `<rect width="${svgWidth}" height="360" fill="${colors.bg}" rx="12"/>`;

  // Title
  svg += `<text x="${svgWidth / 2}" y="35" text-anchor="middle" font-size="16" font-weight="bold" fill="${colors.text}">${escapeXml(title)}</text>`;

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gapX);
    const y = centerY - stepH / 2;

    // Arrow between steps
    if (i > 0) {
      const arrowX = x - gapX;
      svg += `<line x1="${arrowX - 5}" y1="${centerY}" x2="${x - 5}" y2="${centerY}" stroke="${colors.primary}" stroke-width="2" marker-end="url(#seqArrow)"/>`;
    }

    // Step box
    svg += `<rect x="${x}" y="${y}" width="${stepW}" height="${stepH}" rx="8" fill="white" stroke="${colors.primary}" stroke-width="2"/>`;

    // Step number
    svg += `<circle cx="${x + 16}" cy="${y + 16}" r="10" fill="${colors.primary}"/>`;
    svg += `<text x="${x + 16}" y="${y + 16}" text-anchor="middle" dy="0.35em" font-size="9" font-weight="bold" fill="white">${i + 1}</text>`;

    // Label
    const lines = wrapText(step.label, 14);
    lines.forEach((line, j) => {
      svg += `<text x="${x + stepW / 2}" y="${y + 35 + j * 12}" text-anchor="middle" font-size="9" font-weight="600" fill="${colors.text}">${escapeXml(line)}</text>`;
    });

    // Description below
    if (step.description) {
      const descLines = wrapText(step.description, 18);
      descLines.forEach((line, j) => {
        svg += `<text x="${x + stepW / 2}" y="${y + stepH + 16 + j * 11}" text-anchor="middle" font-size="8" fill="#6B7280">${escapeXml(line)}</text>`;
      });
    }
  });

  // Arrow marker
  svg += `<defs><marker id="seqArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="${colors.primary}"/></marker></defs>`;

  svg += `</svg>`;
  return svg;
}

/**
 * Default key points for topics that lack Layer 4 data.
 * Maps subject codes to generic key points for concept map generation.
 */
export function getDefaultKeyPoints(topicName: string, subjectCode: string): string[] {
  const generic: Record<string, string[]> = {
    AN: ["Structure", "Relations", "Blood Supply", "Nerve Supply", "Development", "Clinical Anatomy"],
    PY: ["Mechanism", "Regulation", "Normal Values", "Clinical Significance", "Applied Physiology"],
    BI: ["Structure", "Function", "Regulation", "Clinical Significance", "Lab Tests"],
    PA: ["Etiology", "Pathogenesis", "Morphology", "Clinical Features", "Diagnosis", "Prognosis"],
    PH: ["Mechanism of Action", "Pharmacokinetics", "Indications", "Side Effects", "Contraindications", "Drug Interactions"],
    MI: ["Morphology", "Culture", "Pathogenesis", "Clinical Features", "Diagnosis", "Treatment"],
    CM: ["Epidemiology", "Risk Factors", "Prevention", "Control Measures", "National Programs"],
    IM: ["Etiology", "Pathophysiology", "Clinical Features", "Diagnosis", "Treatment", "Complications"],
    SU: ["Indications", "Anatomy", "Procedure", "Complications", "Postoperative Care"],
    OG: ["Risk Factors", "Diagnosis", "Management", "Complications", "Prognosis"],
    PE: ["Etiology", "Clinical Features", "Diagnosis", "Treatment", "Prevention"],
    EN: ["Anatomy", "Pathology", "Clinical Features", "Diagnosis", "Treatment"],
    OP: ["Anatomy", "Pathology", "Clinical Features", "Diagnosis", "Treatment"],
    DR: ["Morphology", "Distribution", "Diagnosis", "Differentials", "Treatment"],
    PS: ["Etiology", "Clinical Features", "Diagnosis", "Treatment", "Prognosis"],
    OR: ["Mechanism", "Classification", "Clinical Features", "Imaging", "Treatment"],
    AS: ["Indications", "Technique", "Monitoring", "Complications", "Pharmacology"],
    RD: ["Modality", "Indications", "Normal Findings", "Abnormal Findings", "Interpretation"],
  };

  // Combine generic + topic-specific words
  const base = generic[subjectCode] || generic.IM;
  const topicWords = topicName.split(/[\s&,]+/).filter(w => w.length > 3).slice(0, 2);
  return [...base, ...topicWords].slice(0, 8);
}
