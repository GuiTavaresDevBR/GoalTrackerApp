import style from "./WhyHabbitsAreImportant.module.css";
export default function WhyHabbitsAreImportant() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>
          Porque Hábitos <span>são Importantes ?</span>
        </h2>
      </div>
      <div className={style.boxesContainer}>
        <div className={style.singleBox}></div>
        <div className={style.singleBox}></div>
        <div className={style.singleBox}></div>
      </div>
    </div>
  );
}
