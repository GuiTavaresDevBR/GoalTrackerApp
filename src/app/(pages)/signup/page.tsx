"use client";
import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const signUpSchema = z
  .object({
    name: z.string().min(2, "O nome deve conter no mínimo 2 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A confirmação de senha deve conter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
  });

type signUpFormData = z.infer<typeof signUpSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  function handleSubtmit(data: signUpFormData) {
    console.log(data);
  }

  return (
    <div className={style.signupPage}>
      <AccountContainer title="SignUp">
        <form onSubmit={handleSubmit(handleSubtmit)}>
          <div>
            <label htmlFor="name">Informe seu Nome:</label>
            <input
              type="text"
              placeholder="Informe seu Nome:"
              {...register("name")}
            />
            <div className={style.errorContainer}>
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="email">Informe seu Email:</label>
            <input
              type="email"
              placeholder="Informe seu Email:"
              {...register("email")}
            />
            <div className={style.errorContainer}>
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="password">Informe sua Senha:</label>
            <input
              type="password"
              placeholder="Informe sua Senha:"
              {...register("password")}
            />
            <div className={style.errorContainer}>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirme sua Senha:</label>
            <input
              type="password"
              placeholder="Confirme sua Senha:"
              {...register("confirmPassword")}
            />
            <div className={style.errorContainer}>
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </AccountContainer>
    </div>
  );
}
