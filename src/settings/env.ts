import { z } from "zod";

const envSchema = z.object({
  BOT_TOKEN: z.string({ description: "Discord Bot Token is required" }).min(1),
  WEBHOOK_LOGS_URL: z.string().url().optional(),
  DISCORD_GUILD_ID: z
    .string({ description: "Discord Guild ID is required" })
    .min(1),
  DISCORD_POMODORO_CHANNEL_ID: z
    .string({ description: "Discord Pomodoro Channel ID is required" })
    .min(1),
  DISCORD_OPENCODE_CATEGORY_ID: z
    .string({ description: "Discord Open Code Category ID is required" })
    .min(1),
  DISCORD_OPENCODE_CHANNEL_ID: z
    .string({ description: "Discord Open Code Channel ID is required" })
    .min(1),
  DATABASE_URL: z.string({ description: "Database URL is required" }).min(1),
});

type EnvSchema = z.infer<typeof envSchema>;

export { envSchema, type EnvSchema };
