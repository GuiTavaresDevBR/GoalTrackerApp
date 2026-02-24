import { useState } from "react";
import style from "./QuestionContainer.module.css";
import { QuestionsType } from "@/app/utils/questions";

export function QuestionContainer({ question }: { question: QuestionsType }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleContent() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.questContainer}>
      <header className={style.header} onClick={toggleContent}>
        <h3>{question.question + (isOpen ? " ▲" : " ▼")} </h3>
      </header>
      {isOpen && (
        <div className={style.content}>
          <p>{question.answer}</p>
        </div>
      )}
    </div>
  );
}
