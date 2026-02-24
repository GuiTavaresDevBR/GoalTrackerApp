"use client";
import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
});

type loginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className={style.loginPage}>
      <AccountContainer title="Login">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Informe seu Email..."
            />
            <div>{errors.email && <span>{errors.email.message}</span>}</div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" {...register("password")} placeholder="Informe sua senha..." />
            <div>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </AccountContainer>
    </div>
  );
}
