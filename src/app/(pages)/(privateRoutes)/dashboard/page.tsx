"use client";
import { useEffect } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    alert("Voce não está logado, Redirecionar....");
    router.push("/login");
  }, [router]);
  return <div className={style.container}>Dashboard Page - Private Route</div>;
}
