"use client";

import React from "react";
import Header from "./components/Header";
import Background from "./components/Background";
import CategoryCarousel from "./components/CategoryCarousel";
import Intro from "./components/Intro";

/**
 * Main Home page component that orchestrates the full-stack application layout.
 * Combines Header, Title, FeatureGrid, and MessageSection components to create
 * the complete user interface.
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Background />
      <main className="relative min-h-screen flex flex-col items-center justify-start gap-8 p-12 bg-transparent font-sans">
        <Intro
          text="# Chandler King - (Senior Full-Stack Engineer)"
          fileName="~/candidates/chandler_king/résumé.md"
        />
        <Header name="Chandler King" />
        {/* Summary Section */}
        <section className="w-full max-w-2xl bg-[rgba(13,17,23,0.98)] backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 transition-all duration-150 p-8 hover:-translate-y-1 hover:shadow-3xl hover:border-white/15">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-white/98 to-white/85 bg-clip-text text-transparent tracking-tight">
            Summary
          </h2>
          <p className="text-lg text-white/85 leading-relaxed font-normal">
            Experienced Machine Learning Engineer with a strong background in
            full-stack development, MLOps, and scalable system design, proven
            ability to take projects from 0 to 1, optimize performance and act
            as a technical lead for engineering teams.
          </p>
        </section>
        {/* Carousel Section */}
        <section className="w-full max-w-2xl bg-[rgba(13,17,23,0.98)] backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 transition-all duration-150 p-8 hover:-translate-y-1 hover:shadow-3xl hover:border-white/15">
          <CategoryCarousel
            categories={[
              {
                label: "Work Experience",
                content: (
                  <div className="flex flex-col gap-8 relative pl-8">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-400/40 to-blue-300 rounded-sm"></div>

                    {/* Experience cards */}
                    <div className="relative bg-[rgba(13,17,23,0.98)] backdrop-blur-xl rounded-lg p-6 shadow-xl border border-white/10 transition-all duration-150 ml-4 hover:translate-x-2 hover:-translate-y-1 hover:shadow-2xl hover:border-white/15">
                      {/* Timeline dot */}
                      <div className="absolute -left-10 top-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full border-2 border-white/15 shadow-lg shadow-blue-400/30 z-10"></div>
                      {/* Timeline connector */}
                      <div className="absolute -left-6 top-7 w-4 h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-400/15 rounded-sm"></div>

                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-lg text-blue-300">
                          Accrete AI
                        </span>
                        <span className="text-sm text-white/60 font-medium">
                          March 2025 → Present
                        </span>
                      </div>
                      <div className="text-sm italic text-white/70 mt-1 font-medium">
                        Senior Full Stack Engineer • Machine Learning
                        Engineering
                      </div>
                      <ul className="list-disc ml-5 mt-3 text-white/85 flex flex-col gap-2 leading-relaxed">
                        <li>
                          Technical lead, overseeing the optimization and
                          implementation of machine learning model services in
                          production, yielding 10-50x speed improvement on
                          research code as well as improved maintainability and
                          reliability. Leverages asynchronous programming and
                          Rust extension modules for heavily CPU-bound logic.
                        </li>
                        <li>
                          Implemented Dagster for the orchestration of ML
                          training, model storage, and inference. Alleviated
                          reliance on AWS Lambda, and dramatically reduced costs
                          as a result.
                        </li>
                        <li>
                          Regularly creates technical design documentation for
                          new projects and onboarding materials for new
                          engineers.
                        </li>
                      </ul>
                    </div>

                    <div className="relative bg-[rgba(13,17,23,0.98)] backdrop-blur-xl rounded-lg p-6 shadow-xl border border-white/10 transition-all duration-150 ml-4 hover:translate-x-2 hover:-translate-y-1 hover:shadow-2xl hover:border-white/15">
                      {/* Timeline dot */}
                      <div className="absolute -left-10 top-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full border-2 border-white/15 shadow-lg shadow-blue-400/30 z-10"></div>
                      {/* Timeline connector */}
                      <div className="absolute -left-6 top-7 w-4 h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-400/15 rounded-sm"></div>

                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-lg text-blue-400">
                          Oscar Health
                        </span>
                        <span className="text-sm text-white/60 font-medium">
                          July 2021 → March 2025
                        </span>
                      </div>
                      <div className="text-sm italic text-white/70 mt-1 font-medium">
                        Software Engineer II • Provider Insurance Operations
                        Engineering
                      </div>
                      <ul className="list-disc ml-5 mt-3 text-white/85 flex flex-col gap-2 leading-relaxed">
                        <li>
                          Technical lead, creating technical designs,
                          documentation, and training, as well as code review
                          and establishing new best practices (unit test
                          coverage, type hints, CI/CD automations, etc.).
                          Facilitated the team's migration to several new
                          technologies, including Github, Kubernetes, and Bazel.
                        </li>
                        <li>
                          Developed a suite of 10 internal tools as a full-stack
                          web application, leveraging React.js and Flask.
                        </li>
                        <li>
                          Created dozens of net-new business automations,
                          including analytics dashboarding, alerting, and
                          project management. Built 50+ SFTP feeds and 50+
                          unique ETL processes, using a combination of Python
                          and SQL.
                        </li>
                        <li>
                          Leveraged Golang for the creation of performant GRPC
                          microservices.
                        </li>
                      </ul>
                    </div>

                    <div className="relative bg-[rgba(13,17,23,0.98)] backdrop-blur-xl rounded-lg p-6 shadow-xl border border-white/10 transition-all duration-150 ml-4 hover:translate-x-2 hover:-translate-y-1 hover:shadow-2xl hover:border-white/15">
                      {/* Timeline dot */}
                      <div className="absolute -left-10 top-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full border-2 border-white/15 shadow-lg shadow-blue-400/30 z-10"></div>
                      {/* Timeline connector */}
                      <div className="absolute -left-6 top-7 w-4 h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-400/15 rounded-sm"></div>

                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-lg text-yellow-400">
                          GEICO
                        </span>
                        <span className="text-sm text-white/60 font-medium">
                          June 2019 → July 2021
                        </span>
                      </div>
                      <div className="text-sm italic text-white/70 mt-1 font-medium">
                        Research Analytics and Development
                      </div>
                      <ul className="list-disc ml-5 mt-3 text-white/85 flex flex-col gap-2 leading-relaxed">
                        <li>
                          <span className="font-bold text-blue-400">
                            Product Modeling Analyst • June 2020 → July 2021
                          </span>
                          : Built predictive models for underwriting and rating,
                          analytics dashboards, and regularly reported on
                          findings to drive large-scale business decision
                          making.
                        </li>
                        <li>
                          <span className="font-bold text-blue-400">
                            Product Management Intern • June 2019 → August 2019
                          </span>
                          : Performed analysis of risk for drivers with
                          learner's permits and assessed GEICO's competitive
                          positioning in the state of Illinois based on analysis
                          of competitors' quotes and application processes.
                        </li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: "Skills",
                content: (
                  <div className="grid grid-cols-2 gap-6 text-white/85">
                    <div className="flex flex-col gap-2 p-4 bg-[rgba(13,17,23,0.95)] rounded-md border border-white/10">
                      <div className="font-bold text-blue-400 text-sm uppercase tracking-wider">
                        Programming Languages
                      </div>
                      <div>
                        Python, Javascript, Go (Golang), Rust, SQL, HTML, CSS
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-[rgba(13,17,23,0.95)] rounded-md border border-white/10">
                      <div className="font-bold text-blue-400 text-sm uppercase tracking-wider">
                        Frameworks
                      </div>
                      <div>React, Flask, FastAPI, Dagster</div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-[rgba(13,17,23,0.95)] rounded-md border border-white/10">
                      <div className="font-bold text-blue-400 text-sm uppercase tracking-wider">
                        Libraries
                      </div>
                      <div>
                        Pandas, Polars, Numpy, Scikit Learn, Scipy, PyTorch
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-[rgba(13,17,23,0.95)] rounded-md border border-white/10">
                      <div className="font-bold text-blue-400 text-sm uppercase tracking-wider">
                        Tools/Tech
                      </div>
                      <div>
                        AWS (S3, Aurora, Lambda, SQS, etc.), Google Cloud
                        Storage, BigQuery, Git, Kubernetes, Bazel, Github,
                        Gitlab, Bitbucket, Datadog, Grafana, Terraform,
                        Postgres, Tableau
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                label: "Education",
                content: (
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-blue-400 text-lg">
                      Boston College
                    </div>
                    <div className="text-sm text-white/70 font-medium">
                      Carroll School of Management, 2016 → 2020
                    </div>
                    <div className="text-white/90 font-semibold">
                      B.S. Information Systems & Business Analytics
                    </div>
                    <div className="text-xs text-white/60 italic">
                      Extracurricular: BC Music Dept., study abroad (Venice,
                      IT), study abroad peer mentor, GLBTQIA+ Leadership Council
                      (GLC)
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </section>
        {/* End Carousel Section */}
      </main>
    </>
  );
}
