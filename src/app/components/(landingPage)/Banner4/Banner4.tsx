"use client";
import { questions } from "@/app/utils/questions";
import style from "./Banner4.module.css";
import { QuestionContainer } from "../QuestionContainer/QuestionContainer";

export default function Banner4() {
  return (
    <div className={style.container}>
      <div className={style.banner4}>
        <h2> Dúvidas Frequentes: </h2>
      </div>
      <div className={style.faqContainer}>
        <QuestionContainer />
      </div>
    </div>
  );
}
