"use client";
import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";
import { useState } from "react";
import { validateLoginForm, LoginErrors } from "@/app/helpers/validateLogin";

export default function Login() {
  const email = "gui@gui.com";
  const password = "123";

  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const validationErrors = validateLoginForm(
      typedEmail,
      typedPassword,
      email,
      password,
    );
    setErrors(validationErrors);

    // Lógica de autenticação aqui
  }

  return (
    <div className={style.loginPage}>
      <AccountContainer title="Login">
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Informe seu Email"
              name="email"
              value={typedEmail}
              onChange={(e) => setTypedEmail(e.target.value)}
            />
            {(errors.email || errors.isEmailValid) && (
              <div className={style.errorMessageContainer}>
                <span>{errors.email}</span>
                {!errors.email && <span>{errors.isEmailValid}</span>}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Informe sua Senha:"
              name="password"
              value={typedPassword}
              onChange={(e) => setTypedPassword(e.target.value)}
            />
            {errors.password && (
              <div className={style.errorMessageContainer}>
                <span>{errors.password}</span>
              </div>
            )}
          </div>
          {errors.credentials && (
            <div className={style.errorMessageContainer}>
              <span>{errors.credentials}</span>
            </div>
          )}
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </AccountContainer>
    </div>
  );
}
