import { isEmailValid } from "./isEmailValid";

export interface SignupErrors {
  noNameTyped?: string;
  noEmailTyped?: string;
  invalidEmail?: string;
  passwordTooShort?: string;
  passwordsDoNotMatch?: string;
}

export const validateSignUpForm = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
): SignupErrors => {
  const signUpErrors: SignupErrors = {};


  if (!name.trim()) {
    signUpErrors.noNameTyped = "Nome não digitado";
  }

  if (!email.trim()) {
    signUpErrors.noEmailTyped = "Email não digitado";
  } else if (!isEmailValid(email)) {
    signUpErrors.invalidEmail = "Digite um email válido";
  }

  if (password.length < 6) {
    signUpErrors.passwordTooShort = "Senha deve ter ao menos 6 caracteres";
  }

  if (password !== confirmPassword) {
    signUpErrors.passwordsDoNotMatch = "Senhas não coincidem";
  }

  return signUpErrors;
};
