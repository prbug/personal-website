"use client";

import Header from "./components/Header";
import Title from "./components/Title";
import FeatureGrid from "./components/FeatureGrid";
import MessageSection from "./components/MessageSection";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Header name="Chandler King" />
      <Title text="Full-Stack Hello World" />
      <FeatureGrid />
      <MessageSection />
    </main>
  );
}
