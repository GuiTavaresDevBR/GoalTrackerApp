import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.leftSide}>
        <p>1</p>
      </div>
      <div className={style.center}>
        <p>2</p>
      </div>
      <div className={style.rightSide}>
        <p>3</p>
      </div>
    </footer>
  );
}
