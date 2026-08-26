export type PageImage = {
  page: number;
  dataUrl: string; // base64 data url, image/png or image/jpeg
  width: number;
  height: number;
};

export type ExtractedQuestion = {
  id: string; // e.g. "q11a"
  number: string; // printed label, e.g. "11 (a)"
  text: string;
  maxMarks: number | null;
  page: number;
  topic?: string;
};

export type BoundingBox = {
  x: number; // 0-1 normalized, left
  y: number; // 0-1 normalized, top
  width: number; // 0-1 normalized
  height: number; // 0-1 normalized
};

export type Correctness = "correct" | "partial" | "incorrect" | "ungraded";

export type MappedAnswer = {
  questionId: string | null; // null if unmatched to any known question
  matched: boolean;
  text: string;
  page: number;
  boundingBox: BoundingBox | null;
  marksAwarded: number | null;
  maxMarks: number | null;
  correctness: Correctness;
  feedback: string;
  transcriptionConfidence?: number; // 0 - 100 percentage
  conceptsIdentified?: string[];
  strengths?: string;
  improvements?: string;
  spansMultiplePages?: boolean;
  continuationPage?: number;
};

export type GradeDistribution = {
  correct: number;
  partial: number;
  incorrect: number;
  ungraded: number;
};

export type GradingSummary = {
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
  unmatchedCount: number;
  totalMarksAwarded: number;
  totalMaxMarks: number;
  overallFeedback: string;
  gradeDistribution?: GradeDistribution;
  topStrengths?: string[];
  topWeaknesses?: string[];
  averageLegibilityScore?: number;
};

export type ProcessResult = {
  questions: ExtractedQuestion[];
  answers: MappedAnswer[];
  unmatchedAnswers: MappedAnswer[];
  answerSheetPages: { page: number; width: number; height: number }[];
  summary: GradingSummary;
  isDemo?: boolean;
};

export type ProcessingStage =
  | "idle"
  | "uploading"
  | "extracting-questions"
  | "extracting-answers"
  | "mapping"
  | "grading"
  | "done"
  | "error";
