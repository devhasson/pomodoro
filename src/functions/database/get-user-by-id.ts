import { prisma } from "#database";

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    include: { rank: true },
  });
}
