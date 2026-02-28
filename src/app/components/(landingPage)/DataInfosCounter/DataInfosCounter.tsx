"use client";
import style from "./DataInfosCounter.module.css";
import CountUp from "react-countup";

export default function DataInfosCounter() {
  return (
    <div className={style.container}>
      <div className={style.singleCounterContainer}>
        <h2>
          +{" "}
          <CountUp
            end={1200}
            duration={1}
            enableScrollSpy
            scrollSpyOnce
            separator="."
          />
        </h2>
        <p>Usuários ativos</p>
      </div>
      <div className={style.singleCounterContainer}>
        <h2>
          +{" "}
          <CountUp
            end={10000}
            duration={1}
            enableScrollSpy
            scrollSpyOnce
            separator="."
          />
        </h2>
        <p>Hábitos criados</p>
      </div>
      <div className={style.singleCounterContainer}>
        <h2>
          +{" "}
          <CountUp
            end={200}
            duration={1}
            enableScrollSpy
            scrollSpyOnce
            separator="."
          />
        </h2>
        <p>Feedbacks Positivos</p>
      </div>
    </div>
  );
}
