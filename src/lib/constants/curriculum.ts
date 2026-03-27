export const PHASES = {
  PHASE_1: { label: "Phase I (1st Professional)", duration: "12 months", year: "1st Year" },
  PHASE_2: { label: "Phase II (2nd Professional)", duration: "12 months", year: "2nd Year" },
  PHASE_3_PART1: { label: "Phase III Part 1", duration: "12 months", year: "3rd Year" },
  PHASE_3_PART2: { label: "Phase III Part 2", duration: "18 months", year: "Final Year" },
} as const;

export const LEARNING_LAYERS = [
  { id: 1, name: "Foundation", color: "blue", duration: "20 min", description: "Core concepts, basic structure, analogies" },
  { id: 2, name: "Mechanism", color: "indigo", duration: "30 min", description: "How it works, physiological basis" },
  { id: 3, name: "Clinical", color: "emerald", duration: "20 min", description: "Disease correlations, clinical cases" },
  { id: 4, name: "Exam Prep", color: "amber", duration: "15 min", description: "High-yield points, mnemonics" },
  { id: 5, name: "Active Recall", color: "rose", duration: "10 min", description: "Flashcards, self-test" },
  { id: 6, name: "Videos", color: "red", duration: "varies", description: "Curated YouTube lectures from trusted channels" },
  { id: 7, name: "Visual Theory", color: "violet", duration: "varies", description: "Interactive diagrams, animations & medical illustrations" },
  { id: 8, name: "Clinical Sim", color: "indigo", duration: "15-30 min", description: "Clinical decision simulator — be the doctor" },
] as const;

export const LEARNING_MODES = [
  { id: "learn", label: "Learn", color: "blue", icon: "BookOpen" },
  { id: "practice", label: "Practice", color: "green", icon: "Dumbbell" },
  { id: "revise", label: "Revise", color: "orange", icon: "RotateCcw" },
  { id: "test", label: "Test", color: "red", icon: "ClipboardCheck" },
  { id: "clinical", label: "Clinical Sim", color: "purple", icon: "Stethoscope" },
] as const;

export const BLOOMS_LEVELS = ["Recall", "Analysis", "ProblemSolving"] as const;

export const NEXT_EXAM_WEIGHTS = {
  ProblemSolving: 0.6,
  Analysis: 0.3,
  Recall: 0.1,
} as const;
