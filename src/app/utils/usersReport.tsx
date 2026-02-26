export type UsersReportType = {
  name: string;
  message: string;
  stars: number;
  avatarUrl: string;
  profession: string;
};

export const usersReport: UsersReportType[] = [
  {
    name: "Maria Silva",
    message:
      "O GoalTracker me ajudou a organizar meus objetivos e acompanhar meu progresso de forma eficiente. Recomendo para quem quer alcançar suas metas!",
    stars: 5,
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Designer Gráfico",
  },
  {
    name: "João Santos",
    message:
      "Com o GoalTracker, consegui definir metas claras e manter minha motivação. A interface é fácil de usar e os recursos são incríveis!",
    stars: 4,
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Desenvolvedor Web",
  },
  {
    name: "Ana Oliveira",
    message:
      "O GoalTracker é uma ferramenta essencial para quem quer alcançar seus objetivos. Ele me ajudou a manter o foco e a disciplina necessária para atingir minhas metas.",
    stars: 5,
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Empreendedora",
  },
];
