"use client";
import { questions } from "@/app/utils/questions";
import style from "./FrequentlyQuestions.module.css";
import { QuestionContainer } from "../QuestionContainer/QuestionContainer";

export default function FrequentlyQuestions() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2> <span>FAQ: </span>Dúvidas Frequentes: </h2>
      </div>
      <div className={style.faqContainer}>
        {questions.map((question, index) => (
          <QuestionContainer key={index} question={question} />
        ))}
      </div>
    </div>
  );
}
