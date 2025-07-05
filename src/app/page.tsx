"use client";

import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import FeatureGrid from "./components/FeatureGrid";
import MessageSection from "./components/MessageSection";
import styles from "./page.module.css";

/**
 * Main Home page component that orchestrates the full-stack application layout.
 * Combines Header, Title, FeatureGrid, and MessageSection components to create
 * the complete user interface.
 */
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
