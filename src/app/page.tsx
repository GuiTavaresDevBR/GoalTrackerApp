" use client";

import Image from "next/image";
import styles from "./page.module.css";
import AccountContainer from "./components/AccountContainer/AccountContainer";
import Banner1 from "./components/(landingPage)/Banner1/Banner1";
import Banner2 from "./components/(landingPage)/Banner2/Banner2";
import Banner3 from "./components/(landingPage)/Banner3/Banner3";
import Banner4 from "./components/(landingPage)/Banner4/Banner4";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner1 />
      <Banner3 />
      <Banner4 />
      <Banner2 />
    </main>
  );
}
