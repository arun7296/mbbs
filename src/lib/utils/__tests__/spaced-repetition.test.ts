import { describe, it, expect } from "vitest";
import { calculateSM2, gradeToQuality, type SM2State } from "../spaced-repetition";

describe("SM-2 Spaced Repetition Algorithm", () => {
  const defaultState: SM2State = {
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
  };

  describe("calculateSM2", () => {
    it("first correct answer sets interval to 1 day", () => {
      const result = calculateSM2(4, defaultState);
      expect(result.interval).toBe(1);
      expect(result.repetitions).toBe(1);
    });

    it("second correct answer sets interval to 6 days", () => {
      const state: SM2State = { easeFactor: 2.5, interval: 1, repetitions: 1 };
      const result = calculateSM2(4, state);
      expect(result.interval).toBe(6);
      expect(result.repetitions).toBe(2);
    });

    it("third correct answer multiplies interval by ease factor", () => {
      const state: SM2State = { easeFactor: 2.5, interval: 6, repetitions: 2 };
      const result = calculateSM2(4, state);
      expect(result.interval).toBe(15); // 6 * 2.5 = 15
      expect(result.repetitions).toBe(3);
    });

    it("incorrect answer resets repetitions and interval", () => {
      const state: SM2State = { easeFactor: 2.5, interval: 15, repetitions: 3 };
      const result = calculateSM2(2, state);
      expect(result.interval).toBe(1);
      expect(result.repetitions).toBe(0);
    });

    it("quality 3 (barely correct) still counts as correct", () => {
      const result = calculateSM2(3, defaultState);
      expect(result.repetitions).toBe(1);
      expect(result.interval).toBe(1);
    });

    it("quality 2 (incorrect) resets to 0", () => {
      const result = calculateSM2(2, { easeFactor: 2.5, interval: 6, repetitions: 2 });
      expect(result.repetitions).toBe(0);
      expect(result.interval).toBe(1);
    });

    it("ease factor decreases with lower quality", () => {
      const result = calculateSM2(3, defaultState);
      expect(result.easeFactor).toBeLessThan(2.5);
    });

    it("ease factor increases with high quality", () => {
      const result = calculateSM2(5, defaultState);
      expect(result.easeFactor).toBeGreaterThan(2.5);
    });

    it("ease factor never goes below 1.3", () => {
      let state = defaultState;
      // Repeatedly give quality 0 to drive ease factor down
      for (let i = 0; i < 20; i++) {
        const result = calculateSM2(0, state);
        state = { easeFactor: result.easeFactor, interval: result.interval, repetitions: result.repetitions };
      }
      expect(state.easeFactor).toBeGreaterThanOrEqual(1.3);
    });

    it("nextReviewAt is in the future", () => {
      const result = calculateSM2(4, defaultState);
      expect(result.nextReviewAt.getTime()).toBeGreaterThan(Date.now());
    });

    it("clamps quality to 0-5 range", () => {
      const resultLow = calculateSM2(-1, defaultState);
      expect(resultLow.repetitions).toBe(0); // quality 0 = incorrect

      const resultHigh = calculateSM2(10, defaultState);
      expect(resultHigh.repetitions).toBe(1); // quality 5 = correct
    });
  });

  describe("gradeToQuality", () => {
    it("maps again to 1", () => {
      expect(gradeToQuality("again")).toBe(1);
    });

    it("maps hard to 3", () => {
      expect(gradeToQuality("hard")).toBe(3);
    });

    it("maps good to 4", () => {
      expect(gradeToQuality("good")).toBe(4);
    });

    it("maps easy to 5", () => {
      expect(gradeToQuality("easy")).toBe(5);
    });
  });

  describe("interval progression", () => {
    it("correct answers produce increasing intervals", () => {
      let state = defaultState;
      const intervals: number[] = [];

      for (let i = 0; i < 6; i++) {
        const result = calculateSM2(4, state);
        intervals.push(result.interval);
        state = { easeFactor: result.easeFactor, interval: result.interval, repetitions: result.repetitions };
      }

      // Each interval should be >= previous (with quality 4)
      for (let i = 1; i < intervals.length; i++) {
        expect(intervals[i]).toBeGreaterThanOrEqual(intervals[i - 1]);
      }
    });
  });
});
