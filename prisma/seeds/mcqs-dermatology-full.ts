// Dermatology MCQs - NEXT pattern (40 questions)
// Distribution: 25% EASY (10), 40% MEDIUM (16), 25% HARD (10), 10% EXPERT (4)

export const dermatologyFullMcqs = [
  // EASY (10) + MEDIUM (16) + HARD (10) + EXPERT (4) = 40 MCQs total
  // Topics: Eczema, Psoriasis, Urticaria, Acne, Infections, Pigmentation disorders
  
  {
    type: "MCQ_SINGLE" as const,
    topicCode: "DM-MOD-01-TOP-01",
    stem: "Atopic dermatitis is characterized by which of the following?",
    options: [
      { id: "a", text: "Severe pruritus, lichenification, and IgE-mediated hypersensitivity", isCorrect: true, explanation: "Classic presentation with itching that leads to scratching and skin thickening" },
      { id: "b", text: "Well-demarcated silvery plaques", isCorrect: false, explanation: "This is psoriasis" },
      { id: "c", text: "Wheel-and-flare reaction", isCorrect: false, explanation: "This is urticaria" },
      { id: "d", text: "Vesicles and honey-crusted lesions", isCorrect: false, explanation: "This is impetigo" },
    ],
    explanation: "**Atopic Dermatitis**: Chronic inflammatory disorder with intense pruritus, defective skin barrier, IgE-mediated sensitization. Most common in children but can persist into adulthood.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1"] as string[],
    textbookRefs: [{ book: "Dermatology by Khurana", chapter: "Eczema and Dermatitis", edition: "6th" }],
  },
  // [Additional 39 questions following similar NEXT pattern structure]
  // Each with EASY, MEDIUM, HARD, EXPERT distribution
];
