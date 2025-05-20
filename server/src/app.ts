import express from "express";
import { healthRoute, generateQuestions} from "@/routers";
import { PORT } from "@/secrets";
import cors from 'cors'
import logger from "@/logger";
import { errorHandler } from "@/middlewares";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", healthRoute);
app.use("/api/v1",generateQuestions)

app.use(errorHandler)

app.listen(PORT, async() => {
  logger.info(`Server is running on ${PORT}`);
});