import { prisma } from "#database";

export async function incrementPomodoroOnUser(userId: string) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      pomodoro: {
        increment: 1,
      },
      minutes: {
        increment: 25,
      },
      xp: {
        increment: 10,
      },
    },
    include: {
      rank: true,
    },
  });
}
