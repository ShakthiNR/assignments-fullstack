export interface IParams { 
    jobTitle: string
    jobDescription: string
    experienceLevel: string 
}

export interface IResult {
    id?: number;
    toggled?: boolean
    question: string;
    difficulty: "easy" | "medium" | "hard";
    category: string;
    skillAreas: string[];
    practicalApplicationContext: string;
    evaluationCriteria: EvaluationCriteria;
    answer: string;
  }
  
  
  type EvaluationCriteria = {
      answerHighlights: string[];
      knowledgeLevel: 'basic' | 'intermediate' | 'advanced';
      warningSigns: string[];
    };
  