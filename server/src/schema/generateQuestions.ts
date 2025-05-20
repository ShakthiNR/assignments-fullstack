import Joi, { ObjectSchema } from 'joi'

export const generateQuestionsSchema: ObjectSchema<ISchema> =
  Joi.object({
    jobTitle: Joi.string().required(),
    experienceLevel: Joi.string().valid('junior', 'mid', 'senior').insensitive().optional(),
   // questionType: Joi.string().valid('technical', 'behavioral', 'situational', 'skillBased', 'factBased').insensitive().optional(),
    jobDescription: Joi.string().optional(),
  })


  interface ISchema {
    cycle: string
    start: Date
    end: Date
    status: 'start' | 'end'
  }
  