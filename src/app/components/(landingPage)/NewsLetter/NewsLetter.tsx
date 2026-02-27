import style from "./NewsLetter.module.css";
import { Mail } from "lucide-react";

export default function NewsLetter() {
  return (
    <div className={style.container}>
      <div className={style.leftSide}>
        <div className={style.imageContainer}>
          <Mail size={80} color="gray" />
        </div>
        <div className={style.txtContainer}>
          <h3> NEWSLETTER</h3>
          <h2>Receba conteúdos inéditos e novidades gratuitamente</h2>
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.upSide}>
          <input type="text" placeholder="Digite seu e-mail" />
          <button>Enviar</button>
        </div>
        <div className={style.downSide}>
          <input type="checkbox" />
          <small>
            Autorizo o envio de comunicações por e-mail ou qualquer outro meio e
            concordo com os Termos e Políticas de privacidade.
          </small>
        </div>
      </div>
      <div className={style.rightSide}></div>
    </div>
  );
}
