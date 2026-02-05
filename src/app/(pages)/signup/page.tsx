import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";

export default function signup() {
  return (
    <div className={style.signupPage}>
      <AccountContainer title="SignUp">
        <form action="">
          <div>
            <label htmlFor="name">Informe seu Nome:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Informe seu Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Informe sua Senha:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirme sua Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </AccountContainer>
    </div>
  );
}
