"use client";

import { useRouter } from "next/navigation";
import { QuizShell, type QuizQuestionData } from "@/components/quiz/QuizShell";

// Sample Anatomy MCQs for MVP demo
const sampleQuestions: QuizQuestionData[] = [
  {
    id: "q1",
    stem: "A newborn presents with the arm adducted, medially rotated, and the forearm pronated. The most likely nerve injury is:",
    options: [
      { id: "a", text: "Upper trunk of brachial plexus (C5, C6)", isCorrect: true, explanation: "Erb-Duchenne palsy" },
      { id: "b", text: "Lower trunk of brachial plexus (C8, T1)", isCorrect: false },
      { id: "c", text: "Posterior cord", isCorrect: false },
      { id: "d", text: "Long thoracic nerve", isCorrect: false },
    ],
    explanation: "This is the classic **Waiter's tip** position seen in **Erb-Duchenne palsy** (upper trunk injury, C5-C6). It occurs due to excessive lateral flexion of the neck away from the shoulder during delivery, damaging the upper trunk. The affected muscles include deltoid, biceps, brachialis, and supraspinatus.",
    difficulty: "MEDIUM",
    bloomsLevel: "ProblemSolving",
    topic: "Brachial Plexus",
  },
  {
    id: "q2",
    stem: "The nerve passing through the quadrangular space is:",
    options: [
      { id: "a", text: "Radial nerve", isCorrect: false },
      { id: "b", text: "Axillary nerve", isCorrect: true },
      { id: "c", text: "Suprascapular nerve", isCorrect: false },
      { id: "d", text: "Long thoracic nerve", isCorrect: false },
    ],
    explanation: "The **quadrangular space** is bounded by teres minor (above), teres major (below), long head of triceps (medially), and surgical neck of humerus (laterally). It transmits the **axillary nerve** and **posterior circumflex humeral artery**.",
    difficulty: "EASY",
    bloomsLevel: "Recall",
    topic: "Brachial Plexus",
  },
  {
    id: "q3",
    stem: "A patient with fracture of the shaft of humerus presents with wrist drop. Which nerve is most likely injured?",
    options: [
      { id: "a", text: "Median nerve", isCorrect: false },
      { id: "b", text: "Ulnar nerve", isCorrect: false },
      { id: "c", text: "Radial nerve", isCorrect: true },
      { id: "d", text: "Musculocutaneous nerve", isCorrect: false },
    ],
    explanation: "The **radial nerve** runs in the **spiral groove** on the posterior surface of the humerus shaft. Fracture of the mid-shaft of humerus can damage this nerve, leading to **wrist drop** (inability to extend the wrist and fingers) and loss of sensation over the dorsum of hand (first web space).",
    difficulty: "MEDIUM",
    bloomsLevel: "ProblemSolving",
    topic: "Brachial Plexus",
  },
  {
    id: "q4",
    stem: "Which nerve has NO branches in the arm?",
    options: [
      { id: "a", text: "Radial nerve", isCorrect: false },
      { id: "b", text: "Musculocutaneous nerve", isCorrect: false },
      { id: "c", text: "Ulnar nerve", isCorrect: false },
      { id: "d", text: "Median nerve", isCorrect: true },
    ],
    explanation: "The **median nerve** gives NO branches in the arm. It passes through the arm alongside the brachial artery without giving any muscular or cutaneous branches. It starts giving branches only in the cubital fossa and forearm, supplying most of the flexors and pronators.",
    difficulty: "EASY",
    bloomsLevel: "Recall",
    topic: "Brachial Plexus",
  },
  {
    id: "q5",
    stem: "A patient presents with inability to flex the elbow and loss of sensation over the lateral aspect of the forearm. Which nerve is injured?",
    clinicalVignette: "A 25-year-old male presents after a stab wound to the anterior aspect of the arm. On examination, there is weakness of elbow flexion and supination, and loss of sensation over the lateral forearm.",
    options: [
      { id: "a", text: "Radial nerve", isCorrect: false },
      { id: "b", text: "Musculocutaneous nerve", isCorrect: true },
      { id: "c", text: "Median nerve", isCorrect: false },
      { id: "d", text: "Axillary nerve", isCorrect: false },
    ],
    explanation: "The **musculocutaneous nerve** (C5,C6,C7) pierces coracobrachialis, supplies biceps and brachialis (elbow flexors), and continues as the **lateral cutaneous nerve of the forearm** providing sensation to the lateral forearm. Loss of both elbow flexion and lateral forearm sensation localizes the injury to this nerve.",
    difficulty: "HARD",
    bloomsLevel: "Analysis",
    topic: "Brachial Plexus",
  },
  {
    id: "q6",
    stem: "The nerve supply of serratus anterior muscle is:",
    options: [
      { id: "a", text: "Thoracodorsal nerve", isCorrect: false },
      { id: "b", text: "Long thoracic nerve", isCorrect: true },
      { id: "c", text: "Subscapular nerve", isCorrect: false },
      { id: "d", text: "Suprascapular nerve", isCorrect: false },
    ],
    explanation: "The **long thoracic nerve** (nerve of Bell, C5,C6,C7) arises from the roots of the brachial plexus and supplies the **serratus anterior** muscle. Injury leads to **winging of the scapula** — the medial border of the scapula becomes prominent, especially when pushing against a wall.",
    difficulty: "EASY",
    bloomsLevel: "Recall",
    topic: "Brachial Plexus",
  },
  {
    id: "q7",
    stem: "Claw hand deformity is seen in injury to which nerve?",
    options: [
      { id: "a", text: "Median nerve at wrist", isCorrect: false },
      { id: "b", text: "Radial nerve at spiral groove", isCorrect: false },
      { id: "c", text: "Ulnar nerve at elbow", isCorrect: true },
      { id: "d", text: "Musculocutaneous nerve", isCorrect: false },
    ],
    explanation: "**Claw hand** (hyperextension at MCP joints, flexion at IP joints of ring and little fingers) is classically seen in **ulnar nerve injury at the elbow**. The interossei and medial 2 lumbricals are paralyzed, but FDP is intact — so the fingers are pulled into flexion at IP joints while MCP joints are hyperextended due to unopposed long extensors.",
    difficulty: "MEDIUM",
    bloomsLevel: "Recall",
    topic: "Brachial Plexus",
  },
  {
    id: "q8",
    stem: "A patient cannot abduct the arm between 0 to 15 degrees. Which muscle is paralyzed?",
    options: [
      { id: "a", text: "Deltoid", isCorrect: false },
      { id: "b", text: "Supraspinatus", isCorrect: true },
      { id: "c", text: "Infraspinatus", isCorrect: false },
      { id: "d", text: "Trapezius", isCorrect: false },
    ],
    explanation: "**Supraspinatus** initiates abduction of the shoulder (0-15 degrees). It is supplied by the **suprascapular nerve** (C5,C6) from the upper trunk. After 15 degrees, the **deltoid** (axillary nerve) takes over abduction up to 90 degrees, and then trapezius and serratus anterior continue beyond 90 degrees.",
    difficulty: "MEDIUM",
    bloomsLevel: "Analysis",
    topic: "Upper Limb",
  },
  {
    id: "q9",
    stem: "In Klumpke's palsy, if T1 root is involved, which additional finding may be present?",
    options: [
      { id: "a", text: "Winging of scapula", isCorrect: false },
      { id: "b", text: "Horner's syndrome", isCorrect: true },
      { id: "c", text: "Wrist drop", isCorrect: false },
      { id: "d", text: "Foot drop", isCorrect: false },
    ],
    explanation: "In **Klumpke's palsy** (lower trunk injury, C8-T1), if the T1 root is involved, the **sympathetic fibers** that travel with T1 to the stellate ganglion may be damaged, causing **Horner's syndrome** — ptosis (drooping eyelid), miosis (constricted pupil), anhidrosis (loss of sweating), and enophthalmos (sunken eye) on the ipsilateral side.",
    difficulty: "HARD",
    bloomsLevel: "ProblemSolving",
    topic: "Brachial Plexus",
  },
  {
    id: "q10",
    stem: "The lateral cord of the brachial plexus is formed by:",
    options: [
      { id: "a", text: "Anterior divisions of upper and middle trunks", isCorrect: true },
      { id: "b", text: "Posterior divisions of all three trunks", isCorrect: false },
      { id: "c", text: "Anterior division of lower trunk only", isCorrect: false },
      { id: "d", text: "Posterior divisions of upper and middle trunks", isCorrect: false },
    ],
    explanation: "The **lateral cord** is formed by the union of the **anterior divisions of the upper and middle trunks** (carrying fibers from C5, C6, C7). It lies lateral to the second part of the axillary artery. It gives rise to the lateral pectoral nerve, musculocutaneous nerve, and the lateral root of the median nerve.",
    difficulty: "EASY",
    bloomsLevel: "Recall",
    topic: "Brachial Plexus",
  },
];

export default function QuizPage() {
  const router = useRouter();

  const handleComplete = (answers: Record<string, string>) => {
    // In production, this would save to the server via tRPC
    const correct = Object.entries(answers).filter(([qId, optId]) => {
      const q = sampleQuestions.find((q) => q.id === qId);
      return q?.options.find((o) => o.id === optId)?.isCorrect;
    }).length;

    const total = Object.keys(answers).length;
    alert(`Quiz Complete! Score: ${correct}/${total} (${Math.round((correct / total) * 100)}%)`);
    router.push("/practice");
  };

  return (
    <div className="h-full">
      <QuizShell
        questions={sampleQuestions}
        mode="practice"
        onComplete={handleComplete}
      />
    </div>
  );
}
