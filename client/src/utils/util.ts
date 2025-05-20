import axios from "axios";
import type { IParams, IResult } from "../types";

export const generateQuestion = async (params: IParams) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/generate-questions`,
    {
      ...params
    }
  );
  return response.data;
};
