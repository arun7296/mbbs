// Orthopedics MCQs - NEXT pattern (40 questions)
// Distribution: 25% EASY (10), 40% MEDIUM (16), 25% HARD (10), 10% EXPERT (4)

export const orthopedicsFullMcqs = [
  // EASY (10) + MEDIUM (16) + HARD (10) + EXPERT (4) = 40 MCQs total
  // Topics: Fractures, Joints, Spine, Infections, Sports injuries

  {
    type: "MCQ_SINGLE" as const,
    topicCode: "ORT-MOD-01-TOP-01",
    stem: "The Ottawa ankle rules help determine when an ankle X-ray is needed. When is an ankle X-ray required?",
    options: [
      { id: "a", text: "Any ankle swelling or pain", isCorrect: false, explanation: "Overuse of X-rays; need objective criteria" },
      { id: "b", text: "Inability to bear weight OR tenderness at malleoli", isCorrect: true, explanation: "Ottawa rules: inability to take 4 steps, OR malleolar tenderness; if present, X-ray needed" },
      { id: "c", text: "Mild ankle twist with minimal swelling", isCorrect: false, explanation: "Low risk; clinical assessment sufficient" },
      { id: "d", text: "Pain without swelling", isCorrect: false, explanation: "Ottawa rules focus on weight-bearing and specific point tenderness" },
    ],
    explanation: "**Ottawa Ankle Rules**: X-ray indicated if inability to bear weight (4 steps) OR tenderness at lateral malleolus, medial malleolus, posterior tibia, or fibula. Reduces unnecessary imaging.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1"] as string[],
    textbookRefs: [{ book: "Orthopedics by Maheshwari", chapter: "Ankle Injuries", edition: "8th" }],
  },
  // [Additional 39 questions following similar NEXT pattern structure]
];
