import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "@/logger";
import {  isJsonString } from "@/utils";
import { buildInterviewSet } from "@/genAi";

/**
 * @description generateQuestions
 * @author Shakthi NR
 */
export const generateQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info("generateQuestions is called");

    const jobTitle = req.body?.jobTitle as string;
    const questionType = req.body?.questionType as string || "technical"; // generate technical questions by default
    const seniorityLevel = req.body?.experienceLevel as any;
    const jobDescription = req.body?.jobDescription as string;

    let questions = await buildInterviewSet(
      jobTitle,
      questionType,
      seniorityLevel,
      jobDescription
    );

    questions = questions?.replace(/\\n|\\/g, "");

    if (!questions || !isJsonString(questions)) {
      logger.error("Invalid response from AI model");
      
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Internal Server Error",
      });
    }

    logger.info('generateQuestions is completed: ');

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      data: JSON.parse(questions),
    });
  } catch (error) {
    logger.error("Error in generateQuestions: ", error);
    next(error);
  }
};
