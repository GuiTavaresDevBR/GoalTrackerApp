import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1><span>Goal</span>Track</h1>
      <div>
        <h2>Login</h2>
        <h2>Signup</h2>
      </div>
    </header>
  );
}
