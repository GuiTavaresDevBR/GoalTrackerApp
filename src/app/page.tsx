import Image from "next/image";
import styles from "./page.module.css";
import AccountContainer from "./components/AccountContainer/AccountContainer";
import Banner1 from "./components/(landingPage)/Banner1/Banner1";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner1 />
    </main>
  );
}
