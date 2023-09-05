import { z } from "zod";

const commonSchema = z.object({
  APP_ENV: z.enum(["development", "production", "staging"]),
  PORT: z.number().default(3001),
});
const developmentSchema = z.object({});
const productionSchema = z.object({});
const stagingSchema = z.object({});
export const Schemas = {
  common: commonSchema,
  development: developmentSchema,
  production: productionSchema,
  staging: stagingSchema,
};
