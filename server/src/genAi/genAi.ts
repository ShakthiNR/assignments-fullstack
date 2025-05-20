import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "@/secrets";
import logger from "@/logger";
import { isJsonString } from "@/utils";
import { IExample, IQuestionType } from "@/types";
import {  questions } from "@/utils";


const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function inferSkillsFromJobTitle(jobTitle: string, jobDescription: string) {
  logger.info(
    `Inferring skills from job title: ${jobTitle}`
  );
  const prompt = `Given the job title '${jobTitle}', and job description'${jobDescription}' list 4 to 6 core technical skills in JSON array format.
     Example Output: ["Python", "Django", "REST APIs"]
    `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      temperature: 0.2, // For deterministic output
      responseMimeType: "application/json",
    },
  });

  if (!response.text) {
    logger.error("No response from AI model");
    return [""];
  }
  const result = response.text.replace(/\\n|\\/g, "");
  if (!result || !isJsonString(result)) {
    logger.error("Invalid response from AI model");
    return [""];
  }
  return JSON.parse(result);
}

// For Retrieval-Augmented Generation (RAG)
function retrieveRelevantQuestions(
  derivedSkills: string[]
) {
  logger.info(
    `Retrieving relevant questions for skills: ${derivedSkills}`
  );
  if (!derivedSkills || derivedSkills.length === 0) {
    logger.error("No skills provided for question retrieval");
    return [];
  }
  return questions
    .filter((q) => {
      const skills = q.skillAreas.map((skill) => skill.toLowerCase());
      return derivedSkills.some(
        (skill) =>
          skills.includes(skill.toLowerCase()) 
      );
    }) as IExample[];
}

async function generateQuestions({
  jobTitle,
  skills,
  experienceLevel,
  questionType,
  retrievedExamples,
  jobDescription
}: {
  jobTitle: string;
  skills: string[];
  experienceLevel: string;
  questionType: IQuestionType;
  retrievedExamples: IExample[];
  jobDescription: string;
}) {
  logger.info(
    `Generating questions for job title: ${jobTitle}, ${experienceLevel ? `experience level: ${experienceLevel}` : ''}, question type: ${questionType}`
  );
  const prompt = `
  You are an expert in technical interview question generator and analysing job requirements. Return only JSON output.
  
  Instructions:
  - Generate exactly 4 ${questionType} questions based on the job role and experience level and job requirements.
  - From that generate 2 easy, 1 medium, and 1 hard question in difficulty level.
  - Analyze the job description and generate interview questions relevant to the role. 
  - Ensure the questions are relevant to the skills: ${skills.join(", ")}.
  
  Job Title: ${jobTitle}
  ${experienceLevel ? `Experience Level: ${experienceLevel}` : ''}
  ${jobDescription ? `Job Description: ${jobDescription}` : ''}
  Skills: ${skills.join(", ")}

  ${
    retrievedExamples.length > 0
      ? `Use the following examples of questions as a reference: Examples: ${JSON.stringify(
          retrievedExamples
        )}`
      : ""
  }
 
For each question, you MUST provide (refer to the example or sample output):
  - question: The interview question text
  - difficulty: One of "easy", "medium", or "hard"
  - category: Main topic (e.g., API Design, Performance Optimization)
  - skillAreas: Array of skill areas being tested
  - practicalApplicationContext: Real-world use case the question maps to
  - evaluationCriteria:
      - answerHighlights: Minimum 3 key points to expect in a good answer
      - knowledgeLevel: One of "basic", "intermediate", or "advanced"
      - warningSigns: Minimum 2 red flags indicating weak or flawed answers
  - answer: The expected answer to the question

  Sample Output: ${questions[0]}
  
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      temperature: 0.9, // For more creative output
      responseMimeType: "application/json",
    },
  });

  return response.text;
}

export async function buildInterviewSet(
  jobTitle: string,
  experienceLevel: string = "",
  questionType: IQuestionType = "technical",
  jobDescription: string = ""
) {
  logger.info(
    `Generating interview set for job title: ${jobTitle}, experience level: ${experienceLevel}, question type: ${questionType}`
  );
  const skills = await inferSkillsFromJobTitle(jobTitle, jobDescription);
  const retrievedExamples = retrieveRelevantQuestions(skills);

  const generatedSet = await generateQuestions({
    jobTitle,
    skills,
    experienceLevel,
    questionType,
    retrievedExamples,
    jobDescription
  });
  logger.info(`Interview set generated}`);
  return generatedSet;
}