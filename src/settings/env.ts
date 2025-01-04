import { z } from "zod";

const envSchema = z.object({
  BOT_TOKEN: z.string({ description: "Discord Bot Token is required" }).min(1),
  WEBHOOK_LOGS_URL: z.string().url().optional(),
  DISCORD_OWNER_ID: z
    .string({ description: "Discord Owner ID is required" })
    .min(1),
  DISCORD_POMODORO_CATEGORY_ID: z
    .string({ description: "Discord Pomodoro Category ID is required" })
    .min(1),
  DATABASE_URL: z.string({ description: "Database URL is required" }).min(1),
  // Env vars...
});

type EnvSchema = z.infer<typeof envSchema>;

export { envSchema, type EnvSchema };
