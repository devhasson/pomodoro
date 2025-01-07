import { createEmbed } from "@magicyan/discord";
import { selectImageFromList } from "utils/select-image-from-list.js";

export function finishingPomodoroEmbed(name: string) {
  return createEmbed({
    title: "Pomodoro Concluído ✅",
    timestamp: new Date(),
    description: `Parabéns, **${name}**! 🎉\n\n\
    
    Você **concluiu um ciclo pomodoro** com sucesso!\n\
    Continue assim e você irá alcançar todos os seus objetivos!\n\n\
    
    Você recebeu ⭐️ __***10XP***__ ⭐️ por concluir o ciclo pomodoro!`,
    color: "Green",
    image: {
      url: selectImageFromList([
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExajV1amNneHAwc28wNHBrdnFzdzVwaDN2a2ZjaWVzeXo1Y25yb2RlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sp685iuIEGuys/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjEweHJxNjlmODRuNXd3YnR0a3I0NmI5ZTkzaTM0Mmhnd3lkcWY1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jJQC2puVZpTMO4vUs0/giphy.gif",
      ]),
    },
  });
}
