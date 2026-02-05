import { isEmailValid } from "./isEmailValid";

export interface LoginErrors {
  email?: string;
  isEmailValid?: string;
  password?: string;
  credentials?: string;
}

export const validateLoginForm = (
  email: string,
  password: string,
  correctEmail: string,
  correctPassword: string,
): LoginErrors => {
  const errors: LoginErrors = {};

  if (!email.trim()) {
    errors.email = "Email não digitado";
  }

  if (!isEmailValid(email)) {
    errors.isEmailValid = "Digite um email válido";
  }

  if (!password.trim()) {
    errors.password = "Senha não digitada";
  }

  if (email.trim() && password.trim()) {
    if (email !== correctEmail || password !== correctPassword) {
      errors.credentials = "Email ou senha incorretos";
    }
  }

  return errors;
};
