import { createEmbed } from "@magicyan/discord";
import { addMinutes } from "date-fns";
import { selectImageFromList } from "utils/select-image-from-list.js";

export function startingPomodoroEmbed(name: string) {
  return createEmbed({
    title: "Iniciando Pomodoro 🍅",
    timestamp: addMinutes(new Date(), 25),
    description: `Hora de focar no trabalho, **${name}**! 🔥\n\n\
    
      Teremos um ciclo de **25 minutos** de trabalho intenso!\n\
      Aproveite esse tempo para se concentrar e realizar suas tarefas!`,
    footer: {
      text: "Horário de término do pomodoro",
    },
    color: "Red",
    image: {
      url: selectImageFromList([
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDV5dHYwOW5pYnA1a2VyZjFrandxeWJrcGtueWFzajdmc3R1MXY1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7srpeY4TZMrO8/200.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjMxYmFyMng3azdjcTFxaHFiNGl4cG12NDZxZTIweHp4anNvbXNieCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/toXKzaJP3WIgM/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGk2a2s3bzdrcGdsb3hoZmJxaGUwNGwwY2luaGE3aTVkN2NnN2prZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4hO8mVvq8Oygjm/giphy.gif",
      ]),
    },
  });
}
