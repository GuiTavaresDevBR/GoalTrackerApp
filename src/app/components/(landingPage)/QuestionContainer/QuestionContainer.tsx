import { useState } from "react";
import style from "./QuestionContainer.module.css";

export function QuestionContainer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleContent() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.questContainer}>
      <header className={style.header} onClick={toggleContent}>
        <h3> Posso pular Corda?</h3>
      </header>
      {isOpen && (
        <div className={style.content}>
          <p> Sim , é possível pular corda.</p>
        </div>
      )}
    </div>
  );
}
