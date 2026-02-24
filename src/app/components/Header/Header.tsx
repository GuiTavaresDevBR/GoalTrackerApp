import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1>
        <Link href="/">
          <span>Goal</span>Tracker
        </Link>
      </h1>
      <div>
        <h2>
          <Link href="/login">Login</Link>
        </h2>
        <h2>
          <Link href="/signup">Signup</Link>
        </h2>
      </div>
    </header>
  );
}
