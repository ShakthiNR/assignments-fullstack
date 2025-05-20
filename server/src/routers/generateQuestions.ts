import { Router } from "express";
import { generateQuestions } from "@/controllers";
import { handleErrorValidation } from "@/middlewares";
import { generateQuestionsSchema } from "@/schema";

const router = Router();

router.post("/generate-questions", handleErrorValidation(generateQuestionsSchema), generateQuestions);

export default router;