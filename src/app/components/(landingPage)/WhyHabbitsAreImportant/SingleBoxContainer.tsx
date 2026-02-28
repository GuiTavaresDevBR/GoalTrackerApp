import style from "./WhyHabbitsAreImportant.module.css";

import { ChartNoAxesCombined } from "lucide-react";

export default function SingleBoxContainer() {
  return (
    <div className={style.singleBoxContainer}>
      <ChartNoAxesCombined className={style.icon} />
      <h2>Aumentam sua Produtividade</h2>
      <p>
        Desenvolver hábitos positivos ajuda a manter o foco e a eficiência nas
        tarefas diárias.
      </p>
    </div>
  );
}
