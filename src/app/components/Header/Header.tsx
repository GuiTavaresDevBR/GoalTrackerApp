import Link from "next/link";
import style from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";

export default function Header() {
  const ctx = useContext(AuthContext);
  return (
    <header className={style.header}>
      <h1>
        <Link {...(ctx?.loggedUser ? { href: "/dashboard" } : { href: "/" })}>
          <span>Goal</span>Tracker
        </Link>
      </h1>
      <div>
        {ctx?.loggedUser ? (
          <h2 onClick={ctx.executeLogout}>Logout</h2>
        ) : (
          <>
            <h2>
              <Link href="/login">Login</Link>
            </h2>
            <h2>
              <Link href="/signup">Signup</Link>
            </h2>
          </>
        )}
      </div>
    </header>
  );
}
