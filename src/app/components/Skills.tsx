import React from "react";

interface SkillCategory {
  title: string;
  skills: string;
}

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps): JSX.Element {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-fira-code font-bold mb-4 sm:mb-6 text-[#7dcfff] tracking-tight border-b border-[#7dcfff]/30 pb-2">
        ## Skills
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#16161e]/60 backdrop-blur-md rounded-md border border-[#7aa2f7]/20 p-3 sm:p-4"
          >
            <h3 className="font-fira-code font-bold text-[#7aa2f7] text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
              **{category.title}**
            </h3>
            <p className="text-sm sm:text-base text-[#a9b1d6] font-fira-code">{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
