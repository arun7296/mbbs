"use client";

import { useRouter } from "next/navigation";
import { QuizShell, type QuizQuestionData } from "@/components/quiz/QuizShell";

// Timed mock exam questions — reuses QuizShell in timed mode
const mockQuestions: QuizQuestionData[] = [
  {
    id: "m1", stem: "A 45-year-old male presents with sudden onset chest pain radiating to the left arm. ECG shows ST elevation in leads II, III, aVF. The most likely diagnosis is:",
    options: [
      { id: "a", text: "Anterior wall MI", isCorrect: false, explanation: "Anterior MI shows changes in V1-V4" },
      { id: "b", text: "Inferior wall MI", isCorrect: true, explanation: "ST elevation in II, III, aVF indicates inferior wall" },
      { id: "c", text: "Lateral wall MI", isCorrect: false, explanation: "Lateral MI shows changes in I, aVL, V5-V6" },
      { id: "d", text: "Posterior wall MI", isCorrect: false, explanation: "Posterior MI shows reciprocal changes in V1-V3" },
    ],
    explanation: "ST elevation in leads **II, III, aVF** indicates **inferior wall MI**, supplied by the right coronary artery (RCA) in 85% of people.",
    difficulty: "MEDIUM", bloomsLevel: "ProblemSolving", topic: "Cardiology",
  },
  {
    id: "m2", stem: "The muscle that initiates abduction of the shoulder joint is:",
    options: [
      { id: "a", text: "Deltoid", isCorrect: false, explanation: "Deltoid acts after 15 degrees" },
      { id: "b", text: "Supraspinatus", isCorrect: true, explanation: "Initiates first 15 degrees of abduction" },
      { id: "c", text: "Infraspinatus", isCorrect: false, explanation: "Lateral rotator of shoulder" },
      { id: "d", text: "Subscapularis", isCorrect: false, explanation: "Medial rotator of shoulder" },
    ],
    explanation: "**Supraspinatus** initiates abduction (0-15°). Supplied by suprascapular nerve (C5,C6).",
    difficulty: "EASY", bloomsLevel: "Recall", topic: "Anatomy",
  },
  {
    id: "m3", stem: "A 30-year-old female presents with fatigue, weight gain, and cold intolerance. TSH is elevated and free T4 is low. The most likely diagnosis is:",
    options: [
      { id: "a", text: "Graves' disease", isCorrect: false, explanation: "Graves shows low TSH and high T4" },
      { id: "b", text: "Hashimoto's thyroiditis", isCorrect: true, explanation: "Most common cause of hypothyroidism" },
      { id: "c", text: "Toxic multinodular goiter", isCorrect: false, explanation: "Causes hyperthyroidism" },
      { id: "d", text: "Subacute thyroiditis", isCorrect: false, explanation: "Usually self-limiting, initial hyperthyroid phase" },
    ],
    explanation: "**Hashimoto's thyroiditis** is the most common cause of hypothyroidism. It's autoimmune with anti-TPO antibodies. High TSH + low T4 = primary hypothyroidism.",
    difficulty: "MEDIUM", bloomsLevel: "ProblemSolving", topic: "Endocrinology",
  },
  {
    id: "m4", stem: "Which of the following is NOT a feature of nephrotic syndrome?",
    options: [
      { id: "a", text: "Proteinuria > 3.5 g/day", isCorrect: false, explanation: "This is a defining feature" },
      { id: "b", text: "Hypoalbuminemia", isCorrect: false, explanation: "Due to massive protein loss" },
      { id: "c", text: "Hypertension", isCorrect: true, explanation: "Hypertension is a feature of nephritic syndrome" },
      { id: "d", text: "Hyperlipidemia", isCorrect: false, explanation: "Compensatory hepatic synthesis" },
    ],
    explanation: "Nephrotic syndrome features: massive proteinuria, hypoalbuminemia, edema, hyperlipidemia, lipiduria. **Hypertension** and hematuria are features of **nephritic** syndrome.",
    difficulty: "MEDIUM", bloomsLevel: "Analysis", topic: "Nephrology",
  },
  {
    id: "m5", stem: "The drug of choice for acute anaphylaxis is:",
    options: [
      { id: "a", text: "Hydrocortisone", isCorrect: false, explanation: "Used as adjunct but acts too slowly" },
      { id: "b", text: "Adrenaline (Epinephrine)", isCorrect: true, explanation: "First-line — IM 0.5mg (1:1000)" },
      { id: "c", text: "Chlorpheniramine", isCorrect: false, explanation: "Antihistamine, used as adjunct" },
      { id: "d", text: "Salbutamol", isCorrect: false, explanation: "For bronchospasm component only" },
    ],
    explanation: "**Adrenaline (Epinephrine)** is the FIRST-LINE drug for anaphylaxis. Given IM in anterolateral thigh, 0.5mg of 1:1000 solution. Acts on alpha (vasoconstriction) and beta (bronchodilation) receptors.",
    difficulty: "EASY", bloomsLevel: "Recall", topic: "Pharmacology",
  },
];

export default function MockExamPage() {
  const router = useRouter();

  return (
    <div className="h-full">
      <QuizShell
        questions={mockQuestions}
        mode="timed_test"
        timeLimitMin={10}
        onComplete={(answers) => {
          const correct = Object.entries(answers).filter(([qId, optId]) => {
            const q = mockQuestions.find((q) => q.id === qId);
            return q?.options.find((o) => o.id === optId)?.isCorrect;
          }).length;
          alert(`Mock Exam Complete! Score: ${correct}/${Object.keys(answers).length}`);
          router.push("/test");
        }}
      />
    </div>
  );
}
