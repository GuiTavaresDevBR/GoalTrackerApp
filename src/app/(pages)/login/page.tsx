import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";

export default function login() {
  return (
    <div className={style.loginPage}>
      <AccountContainer title="Login">
        <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </AccountContainer>
    </div>
  );
}
