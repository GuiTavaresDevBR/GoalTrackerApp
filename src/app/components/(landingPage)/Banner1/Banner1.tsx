import style from "./Banner1.module.css";
import Link from "next/link";
export default function Banner1() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.leftSide}>
        <div className={style.titleContainer}>
          <h2>
            {" "}
            Pequenos <span>Hábitos</span> <br /> constroem grandes <br />
            <span>Resultados</span>.{" "}
          </h2>
          <h4>
            Transforme objetivos em hábitos diários <br /> e acompanhe seu
            progresso.
          </h4>
          <button>
            <Link href="/signup">Comece Agora</Link>
          </button>
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.imageContainer}>

        </div>
      </div>
    </div>
  );
}
