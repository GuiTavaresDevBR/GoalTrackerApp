" use client";

import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/(landingPage)/HeroSection/HeroSection";
import WhyHabbitsAreImportant from "./components/(landingPage)/WhyHabbitsAreImportant/WhyHabbitsAreImportant";
import FrequentlyQuestions from "./components/(landingPage)/FrequentlyQuestions/FrequentlyQuestions";
import DataInfosCounter from "./components/(landingPage)/DataInfosCounter/DataInfosCounter";
import HowDoesItWorks from "./components/(landingPage)/HowDoesItWorks/HowDoesItWorks";
import FinalInvitation from "./components/(landingPage)/FinalInvitation/FinalInvitation";
import UsersReports from "./components/(landingPage)/UsersReports/UsersReports";
import NewsLetter from "./components/(landingPage)/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <WhyHabbitsAreImportant />
      <DataInfosCounter />
      <HowDoesItWorks />
      <UsersReports />
      <FinalInvitation />
      <FrequentlyQuestions />
      <NewsLetter />
    </main>
  );
}
