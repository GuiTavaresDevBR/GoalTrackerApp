import style from "./DataInfosCounter.module.css";
export default function DataInfosCounter() {
  return (
    <div className={style.container}>
      <div className={style.singleCounterContainer}>
        <h2>+1.200 </h2>
        <p>Usuários ativos</p>
      </div>
      <div className={style.singleCounterContainer}>
        <h2>+10.000</h2>
        <p>Hábitos criados</p>
      </div>
      <div className={style.singleCounterContainer}>
        <h2>+200</h2>
        <p>Feedbacks Positivos</p>
      </div>
    </div>
  );
}
