// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Scoring Algorithm
// ---------------------------------------------------------------------------

export interface ScoringResult {
  historyScore: number;       // /20
  examScore: number;          // /20
  investigationScore: number; // /15
  diagnosisScore: number;     // /25
  treatmentScore: number;     // /20
  totalScore: number;         // /100
  grade: "A" | "B" | "C" | "D" | "F";
  feedback: string[];
}

// ---------------------------------------------------------------------------
// History scoring (/20)
// ---------------------------------------------------------------------------
export function calculateHistoryScore(
  askedQuestions: string[],
  relevantQuestions: string[],
): { score: number; feedback: string[] } {
  if (relevantQuestions.length === 0) return { score: 20, feedback: ["No specific history questions required for this case."] };

  const relevant = askedQuestions.filter((q) => relevantQuestions.includes(q));
  const irrelevant = askedQuestions.filter((q) => !relevantQuestions.includes(q));
  const missed = relevantQuestions.filter((q) => !askedQuestions.includes(q));

  let score = Math.round((relevant.length / relevantQuestions.length) * 20);

  // Penalty for asking too many irrelevant questions (wastes time)
  if (irrelevant.length > relevantQuestions.length) {
    score = Math.max(0, score - 3);
  }

  const feedback: string[] = [];
  if (missed.length > 0) {
    feedback.push(`You missed asking about: ${missed.join(", ")} — these were relevant for this case.`);
  }
  if (irrelevant.length > 3) {
    feedback.push("You asked too many irrelevant questions — in a real setting, this wastes valuable time.");
  }
  if (relevant.length === relevantQuestions.length) {
    feedback.push("Excellent history taking — you asked all the right questions!");
  }

  return { score: Math.min(20, Math.max(0, score)), feedback };
}

// ---------------------------------------------------------------------------
// Examination scoring (/20)
// ---------------------------------------------------------------------------
export function calculateExamScore(
  performedExams: string[],
  relevantExams: string[],
): { score: number; feedback: string[] } {
  if (relevantExams.length === 0) return { score: 20, feedback: ["No specific examinations required."] };

  const relevant = performedExams.filter((e) => relevantExams.includes(e));
  const irrelevant = performedExams.filter((e) => !relevantExams.includes(e));
  const missed = relevantExams.filter((e) => !performedExams.includes(e));

  let score = Math.round((relevant.length / relevantExams.length) * 20);

  if (irrelevant.length > relevantExams.length) {
    score = Math.max(0, score - 3);
  }

  const feedback: string[] = [];
  if (missed.length > 0) {
    feedback.push(`You missed examining: ${missed.join(", ")} — these were important findings.`);
  }
  if (irrelevant.length > 4) {
    feedback.push("You performed many unnecessary examinations — focus on the relevant system.");
  }
  if (relevant.length === relevantExams.length) {
    feedback.push("Great clinical examination — you covered all the important signs!");
  }

  return { score: Math.min(20, Math.max(0, score)), feedback };
}

// ---------------------------------------------------------------------------
// Investigation scoring (/15)
// ---------------------------------------------------------------------------
export function calculateInvestigationScore(
  orderedInvestigations: string[],
  availableInvestigations: Array<{ id: string; cost: number; isEssential?: boolean }>,
  budget: number,
): { score: number; feedback: string[] } {
  const essential = availableInvestigations.filter((inv) => inv.isEssential);
  const orderedEssential = essential.filter((inv) => orderedInvestigations.includes(inv.id));
  const totalCost = orderedInvestigations.reduce((sum, id) => {
    const inv = availableInvestigations.find((i) => i.id === id);
    return sum + (inv?.cost || 0);
  }, 0);

  let score = essential.length > 0
    ? Math.round((orderedEssential.length / essential.length) * 12)
    : 12;

  // Cost-effectiveness bonus (up to 3 points)
  if (totalCost <= budget * 0.5) {
    score += 3; // Under half budget — very cost-effective
  } else if (totalCost <= budget) {
    score += 2; // Within budget
  } else if (totalCost <= budget * 1.5) {
    score += 1; // Slightly over
  }

  const feedback: string[] = [];
  const missedEssential = essential.filter((inv) => !orderedInvestigations.includes(inv.id));
  if (missedEssential.length > 0) {
    feedback.push(`You missed essential investigations: ${missedEssential.map((i) => i.id).join(", ")}`);
  }
  if (totalCost > budget) {
    feedback.push(`You exceeded the investigation budget (₹${totalCost.toLocaleString("en-IN")} vs ₹${budget.toLocaleString("en-IN")}). In Indian healthcare, cost-effectiveness matters.`);
  }
  if (orderedInvestigations.length > essential.length * 2) {
    feedback.push("You ordered many unnecessary investigations — think about what each test will add to your diagnosis.");
  }

  return { score: Math.min(15, Math.max(0, score)), feedback };
}

// ---------------------------------------------------------------------------
// Diagnosis scoring (/25)
// ---------------------------------------------------------------------------
export function calculateDiagnosisScore(
  finalDiagnosis: string,
  correctDiagnosis: string,
  studentDifferentials: Array<{ diagnosis: string; confidence: string }>,
  correctDifferentials: Array<{ diagnosis: string; likelihood: string }>,
): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 0;

  // Final diagnosis match (15 points)
  const isCorrect = finalDiagnosis.toLowerCase().trim().includes(correctDiagnosis.toLowerCase().trim())
    || correctDiagnosis.toLowerCase().trim().includes(finalDiagnosis.toLowerCase().trim());

  if (isCorrect) {
    score += 15;
    feedback.push("Correct diagnosis! Well done.");
  } else {
    // Partial credit if correct diagnosis is in differentials
    const inDifferentials = studentDifferentials.some(
      (d) => d.diagnosis.toLowerCase().includes(correctDiagnosis.toLowerCase())
        || correctDiagnosis.toLowerCase().includes(d.diagnosis.toLowerCase()),
    );
    if (inDifferentials) {
      score += 8;
      feedback.push(`The correct diagnosis (${correctDiagnosis}) was in your differential list but not your final answer.`);
    } else {
      score += 2; // Participation points
      feedback.push(`Incorrect. The correct diagnosis is: ${correctDiagnosis}`);
    }
  }

  // Differential quality (10 points)
  const highLikelihood = correctDifferentials.filter((d) => d.likelihood === "HIGH");
  const matchedHighLikelihood = highLikelihood.filter((cd) =>
    studentDifferentials.some(
      (sd) => sd.diagnosis.toLowerCase().includes(cd.diagnosis.toLowerCase())
        || cd.diagnosis.toLowerCase().includes(sd.diagnosis.toLowerCase()),
    ),
  );

  if (highLikelihood.length > 0) {
    const diffScore = Math.round((matchedHighLikelihood.length / highLikelihood.length) * 10);
    score += diffScore;
    if (matchedHighLikelihood.length < highLikelihood.length) {
      const missed = highLikelihood.filter(
        (cd) => !matchedHighLikelihood.includes(cd),
      );
      feedback.push(`Missed important differentials: ${missed.map((d) => d.diagnosis).join(", ")}`);
    }
  } else {
    score += 5;
  }

  return { score: Math.min(25, Math.max(0, score)), feedback };
}

// ---------------------------------------------------------------------------
// Treatment scoring (/20)
// ---------------------------------------------------------------------------
export function calculateTreatmentScore(
  selectedTreatments: string[],
  correctImmediate: Array<{ action: string; priority: string }>,
  correctPharmacological: Array<{ drugClass: string }>,
): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 0;

  // Immediate actions (8 points)
  const statActions = correctImmediate.filter((a) => a.priority === "STAT");
  const matchedStat = statActions.filter((a) =>
    selectedTreatments.some((t) => t.toLowerCase().includes(a.action.toLowerCase().split(" ")[0])),
  );
  if (statActions.length > 0) {
    score += Math.round((matchedStat.length / statActions.length) * 8);
    if (matchedStat.length < statActions.length) {
      feedback.push("You missed critical immediate actions that could be life-saving.");
    }
  } else {
    score += 8;
  }

  // Drug classes (8 points)
  const matchedDrugs = correctPharmacological.filter((d) =>
    selectedTreatments.some((t) => t.toLowerCase().includes(d.drugClass.toLowerCase())),
  );
  if (correctPharmacological.length > 0) {
    score += Math.round((matchedDrugs.length / correctPharmacological.length) * 8);
  } else {
    score += 8;
  }

  // General treatment awareness (4 points — base credit for attempting)
  score += Math.min(4, selectedTreatments.length);

  return { score: Math.min(20, Math.max(0, score)), feedback };
}

// ---------------------------------------------------------------------------
// Aggregate scoring
// ---------------------------------------------------------------------------
export function calculateTotalScore(
  historyScore: number,
  examScore: number,
  investigationScore: number,
  diagnosisScore: number,
  treatmentScore: number,
): ScoringResult {
  const totalScore = historyScore + examScore + investigationScore + diagnosisScore + treatmentScore;

  let grade: ScoringResult["grade"];
  if (totalScore >= 90) grade = "A";
  else if (totalScore >= 75) grade = "B";
  else if (totalScore >= 60) grade = "C";
  else if (totalScore >= 40) grade = "D";
  else grade = "F";

  const feedback: string[] = [];
  if (grade === "A") feedback.push("Outstanding performance! You demonstrated excellent clinical reasoning.");
  else if (grade === "B") feedback.push("Good clinical approach. A few areas to improve.");
  else if (grade === "C") feedback.push("Passing performance. Review the feedback for each section carefully.");
  else if (grade === "D") feedback.push("Below expectations. Focus on systematic clinical approach — revisit Layers 1-3.");
  else feedback.push("Significant improvement needed. Start with the Foundation and Clinical layers for this topic.");

  return {
    historyScore,
    examScore,
    investigationScore,
    diagnosisScore,
    treatmentScore,
    totalScore,
    grade,
    feedback,
  };
}
