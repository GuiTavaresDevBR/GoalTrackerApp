"use client";
import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";
import { useState } from "react";
import { LoginErrors } from "@/app/helpers/validateLogin";
import { SignupErrors, validateSignUpForm } from "@/app/helpers/validateSignUp";

export default function Signup() {
  const [errors, setErrors] = useState<SignupErrors>({});
  const [typedName, setTypedName] = useState("");
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const [typedConfirmPassword, setTypedConfirmPassword] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const validadeErrors: SignupErrors = validateSignUpForm(
      typedName,
      typedEmail,
      typedPassword,
      typedConfirmPassword,
    );
    setErrors(validadeErrors);
  }

  return (
    <div className={style.signupPage}>
      <AccountContainer title="SignUp">
        <form action="">
          <div>
            <label htmlFor="name">Informe seu Nome:</label>
            <input
              type="text"
              id="name"
              placeholder="Informe seu Nome:"
              name="name"
              value={typedName}
              onChange={(e) => setTypedName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Informe seu Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Informe seu Email:"
              name="email"
              value={typedEmail}
              onChange={(e) => setTypedEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Informe sua Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Informe sua Senha:"
              name="password"
              value={typedPassword}
              onChange={(e) => setTypedPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirme sua Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua Senha:"
              name="confirmPassword"
              value={typedConfirmPassword}
              onChange={(e) => setTypedConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Cadastrar
            </button>
          </div>
        </form>
      </AccountContainer>
    </div>
  );
}
