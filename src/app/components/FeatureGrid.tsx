import React from "react";

/**
 * FeatureGrid component that displays a grid of feature cards.
 * Each card represents a different aspect of the full-stack application.
 */
export default function FeatureGrid(): JSX.Element {
  return (
    <div className="mb-32 lg:mb-0 grid text-center max-w-5xl w-full lg:grid-cols-4 lg:text-left">
      <div className="rounded-lg border border-transparent p-5 transition-all duration-150 hover:border-gray-600 hover:bg-gray-600/30">
        <h2 className="mb-3 text-2xl font-semibold">
          Frontend <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </h2>
        <p className="m-0 max-w-30ch text-sm opacity-50">
          Built with Next.js, TypeScript, and React
        </p>
      </div>

      <div className="rounded-lg border border-transparent p-5 transition-all duration-150 hover:border-gray-600 hover:bg-gray-600/30">
        <h2 className="mb-3 text-2xl font-semibold">
          Backend <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </h2>
        <p className="m-0 max-w-30ch text-sm opacity-50">
          Powered by Go and Gin framework
        </p>
      </div>

      <div className="rounded-lg border border-transparent p-5 transition-all duration-150 hover:border-gray-600 hover:bg-gray-600/30">
        <h2 className="mb-3 text-2xl font-semibold">
          Deployment <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </h2>
        <p className="m-0 max-w-30ch text-sm opacity-50">
          Hosted on Vercel with serverless functions
        </p>
      </div>

      <div className="rounded-lg border border-transparent p-5 transition-all duration-150 hover:border-gray-600 hover:bg-gray-600/30">
        <h2 className="mb-3 text-2xl font-semibold">
          API <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </h2>
        <p className="m-0 max-w-30ch text-sm opacity-50">
          RESTful API with JSON responses
        </p>
      </div>
    </div>
  );
}
