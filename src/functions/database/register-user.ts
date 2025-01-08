import { prisma } from "#database";
import { User } from "discord.js";

export async function registerUser(user: User) {
  return await prisma.user.create({
    data: {
      id: user.id,
      username: user.username,
      name: user.displayName,
      rank: {
        connect: {
          level: 1,
        },
      },
    },
    include: {
      rank: true,
    },
  });
}
