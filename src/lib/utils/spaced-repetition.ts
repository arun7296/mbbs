/**
 * SM-2 Spaced Repetition Algorithm
 * Based on SuperMemo SM-2 by Piotr Wozniak
 *
 * Quality ratings:
 * 0 - Complete blackout
 * 1 - Incorrect, but remembered upon seeing answer
 * 2 - Incorrect, but answer seemed easy to recall
 * 3 - Correct with serious difficulty
 * 4 - Correct with some hesitation
 * 5 - Perfect recall
 */

export interface SM2State {
  easeFactor: number;   // >= 1.3
  interval: number;     // days until next review
  repetitions: number;  // consecutive correct answers
}

export interface SM2Result extends SM2State {
  nextReviewAt: Date;
}

export function calculateSM2(quality: number, current: SM2State): SM2Result {
  const q = Math.max(0, Math.min(5, Math.round(quality)));
  let { easeFactor, interval, repetitions } = current;

  if (q >= 3) {
    // Correct response
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
  } else {
    // Incorrect — reset
    repetitions = 0;
    interval = 1;
  }

  // Update ease factor
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  );

  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + interval);

  return { easeFactor, interval, repetitions, nextReviewAt };
}

/**
 * Map user-friendly grades to SM-2 quality scores
 */
export const GRADE_MAP = {
  again: 1,   // Forgot completely
  hard: 3,    // Correct but difficult
  good: 4,    // Correct with some effort
  easy: 5,    // Perfect recall
} as const;

export type Grade = keyof typeof GRADE_MAP;

export function gradeToQuality(grade: Grade): number {
  return GRADE_MAP[grade];
}
