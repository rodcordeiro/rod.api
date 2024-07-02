import 'dotenv/config';
import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.string(),
  HOST: z.string(),
  PORT: z.string(),
  ENC_SECRET: z.string(),
  JWT_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_EXPIRES: z.string(),

  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USER: z.string(),
  DB_PWD: z.string(),
  DB_NAME: z.string(),

  DISCORD_WEBHOOK: z.string(),

  NEW_RELIC_LICENSE_KEY: z.string(),
  NEW_RELIC_APP_NAME: z.string(),

  RABBIT_URL: z.string(),
  RABBIT_QUEUE: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;

export const ENV_VARIABLES = envSchema.parse(process.env);
