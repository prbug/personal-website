import React from "react";

interface SummaryProps {
  content: string;
}

export default function Summary({ content }: SummaryProps): JSX.Element {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-fira-code font-bold mb-4 sm:mb-6 text-[#7dcfff] tracking-tight border-b border-[#7dcfff]/30 pb-2">
        ## Summary
      </h2>
      <p className="text-base sm:text-lg text-[#a9b1d6] leading-relaxed font-fira-code">
        {content}
      </p>
    </section>
  );
}
