"use client";

import { useEffect } from "react";
import style from "./page.module.css";
import { useContext } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const ctx = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!ctx?.loggedUser) {
      router.push("/login");
    }
  }, [ctx]);
  return <div className={style.container}>Dashboard Page - Private Route</div>;
}
