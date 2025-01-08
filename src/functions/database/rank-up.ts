import { prisma } from "#database";

interface RankUpParams {
  userId: string;
  rank: number;
}

export async function rankUp({ userId, rank }: RankUpParams) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      rank: {
        connect: {
          level: rank,
        },
      },
    },
    include: {
      rank: true,
    },
  });
}
