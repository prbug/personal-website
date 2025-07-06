"use client";

import React from "react";
import Background from "./components/Background";
import Intro from "./components/Intro";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { resumeData } from "./data/resumeData";

/**
 * Main Home page component that orchestrates the full-stack application layout.
 * Combines Header, Title, FeatureGrid, and MessageSection components to create
 * the complete user interface.
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Background />
      <main className="relative min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-8 p-4 sm:p-8 lg:p-12 bg-transparent font-fira-code">
        <Intro
          text="# Chandler King - (Senior Full-Stack Engineer)"
          fileName="~/candidates/chandler_king/résumé.md"
        />

        {/* Markdown-style document content */}
        <div className="w-full max-w-4xl bg-[#1a1b26]/40 backdrop-blur-xl rounded-lg shadow-2xl border border-[#7aa2f7]/20 transition-all duration-150 p-4 sm:p-8 lg:p-12 hover:-translate-y-1 hover:shadow-3xl hover:border-[#7aa2f7]/40">
          <Summary content={resumeData.summary} />
          <WorkExperience experiences={resumeData.workExperience} />
          <Skills categories={resumeData.skills} />
          <Education {...resumeData.education} />
        </div>
      </main>
    </>
  );
}
