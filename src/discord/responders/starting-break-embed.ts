import { createEmbed } from "@magicyan/discord";
import { addMinutes } from "date-fns";
import { selectImageFromList } from "utils/select-image-from-list.js";

export function startingBreakEmbed(name: string) {
  return createEmbed({
    title: "Iniciando Pausa ⏱️",
    timestamp: addMinutes(new Date(), 5),
    description: `Hora de descansar, **${name}**! 🛌\n\n\
    
    Agora é hora de descansar um pouco e depois voltar com tudo!\n
    Aproveite esse tempo para relaxar e se preparar para o próximo ciclo pomodoro!`,
    footer: {
      text: "Horário de término da pausa",
    },
    color: "White",
    image: {
      url: selectImageFromList([
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDRmcWE1MGx4aXcwNHJhcGh4Z2x3MG12bWpud20zN2l0bWFzNGhreSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1msBxvEtlSaub37nqi/giphy.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Ryb3N6NG05bGl1NTNoY2wzeHhibWtycDVta2V1MnI3aGl0cWdyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jap1tdjahS0rm/giphy.gif",
      ]),
    },
  });
}
