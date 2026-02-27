export type UsersReportType = {
  id: number;
  name: string;
  message: string;
  stars: number;
  avatarUrl: string;
  profession: string;
};

export const usersReport: UsersReportType[] = [
  {
    id: 1,
    name: "Maria Silva",
    message:
      "O GoalTracker me ajudou a organizar meus objetivos e acompanhar meu progresso de forma eficiente. Recomendo para quem quer alcançar suas metas!",
    stars: 5,
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Designer Gráfico",
  },
  {
    id: 2,
    name: "João Santos",
    message:
      "Com o GoalTracker, consegui definir metas claras e manter minha motivação. A interface é fácil de usar e os recursos são incríveis!",
    stars: 4,
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Desenvolvedor Web",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    message:
      "O GoalTracker é uma ferramenta essencial para quem quer alcançar seus objetivos. Ele me ajudou a manter o foco, e melhorar nitidamente de vida.",
    stars: 5,
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Empreendedora",
  },
  {
    id: 4,
    name: "Carlos Pereira",
    message:
      "O GoalTracker é uma ótima maneira de acompanhar meu progresso e me manter motivado. Ele me ajudou a alcançar metas que eu achava impossíveis!",
    stars: 4,
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    profession: "Analista de Marketing",
  },
  {
    id: 5,
    name: "Fernanda Costa",
    message:
      "O GoalTracker é uma ferramenta incrível para quem quer alcançar seus objetivos. Ele me ajudou a manter o foco e conquistar minhas metas.",
    stars: 5,
    avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    profession: "Engenheira de Software",
  },
  {
    id: 6,
    name: "Ricardo Almeida",
    message:
      "O GoalTracker é uma ótima maneira de acompanhar meu progresso e me manter motivado. Ele me ajudou a alcançar metas que eu achava impossíveis!",
    stars: 4,
    avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    profession: "Consultor Financeiro",
  },
];
