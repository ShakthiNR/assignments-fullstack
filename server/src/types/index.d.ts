export type IQuestionType =
  | "technical"
  | "behavioral"
  | "situational"
  | "skillBased"
  | "factBased";

export interface IExample {
  question: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  skillAreas: string[];
  practicalApplicationContext: string;
  evaluationCriteria: EvaluationCriteria;
}


type EvaluationCriteria = {
    answerHighlights: string[];
    knowledgeLevel: 'basic' | 'intermediate' | 'advanced';
    warningSigns: string[];
  };
