"use client";
import AccountContainer from "@/app/components/AccountContainer/AccountContainer";
import style from "./page.module.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";
import MessageModal from "@/app/components/Modals/MessageModal/MessageModal";

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
    path: ["confirmPassword"],
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

  const ctx = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isDanger, setIsDanger] = useState(false);

  function handleSubtmit(data: signUpFormData) {
    if (ctx?.verifyIfUserExists(data.email)) {
      setMessage("Email já cadastrado");
      setIsDanger(true);
      setIsModalOpen(true);
      return;
    }
    ctx?.createUser(data.name, data.email, data.password);
    setMessage("Usuário criado com sucesso!");
    setIsModalOpen(true);
  }

  return (
    <div className={style.signupPage}>
      <AccountContainer title="SignUp">
        <form onSubmit={handleSubmit(handleSubtmit)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="Informe seu Nome..."
            />
            <div>{errors.name && <span>{errors.name.message}</span>}</div>
          </div>

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
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Informe sua senha..."
            />
            <div>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirme sua senha..."
            />
            <div>
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </AccountContainer>
      {isModalOpen && <MessageModal message={message} isDanger={isDanger} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
