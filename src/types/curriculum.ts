import type { Phase, Difficulty, ExamTag, QuestionType, CompetencyLevel, ContentStatus } from "@/generated/prisma/client";

export type LearningLayer = 1 | 2 | 3 | 4 | 5;

export type LearningModeId = "learn" | "practice" | "revise" | "test" | "clinical";

export interface TextbookRef {
  book: string;
  chapter: string;
  page?: string;
  edition?: string;
}

export interface MnemonicItem {
  text: string;
  explanation: string;
  tags?: string[];
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface CaseAction {
  id: string;
  text: string;
  type?: string;
  isOptimal: boolean;
  findings?: string;
  scoreDelta: number;
  nextStageId?: string;
}

export interface StudyTask {
  topicId: string;
  lessonId?: string;
  mode: LearningModeId;
  durationMin: number;
  completed: boolean;
}

export interface OsceChecklistItem {
  id: string;
  description: string;
  domain: string;
  maxScore: number;
}

export interface MockExamSection {
  name: string;
  subjectIds: string[];
  questionCount: number;
}

export interface PatientProfile {
  age: number;
  sex: "Male" | "Female";
  occupation?: string;
  history?: string;
}

export type { Phase, Difficulty, ExamTag, QuestionType, CompetencyLevel, ContentStatus };
