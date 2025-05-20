import { Schema } from "joi";

export const validator =
  <T>(schema: Schema<T>) =>
  (payload: T) =>
    schema.validate(payload, { abortEarly: false });

export { isJsonString } from "./utils";
export { questions } from "./dataset";