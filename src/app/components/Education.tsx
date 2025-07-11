import React from "react";

interface EducationProps {
  school: string;
  period: string;
  degree: string;
  major: string;
  extracurricular?: string;
}

export default function Education({
  school,
  period,
  degree,
  major,
  extracurricular,
}: EducationProps): JSX.Element {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-fira-code font-bold mb-4 sm:mb-6 text-[#7dcfff] tracking-tight border-b border-[#7dcfff]/30 pb-2">
        ## Education
      </h2>
      <div className="border-l-4 border-[#7aa2f7]/60 pl-4 sm:pl-6 py-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
          <h3 className="text-lg sm:text-xl font-fira-code font-bold text-[#7aa2f7]">
            **{school}**
          </h3>
          <span className="text-xs sm:text-sm font-fira-code text-[#e0af68]/80 font-medium">
            {period}
          </span>
        </div>
        <div className="text-sm font-fira-code italic text-[#7aa2f7]/80 mb-3">
          *{degree}*
        </div>
        <ul className="list-none space-y-2 text-[#a9b1d6] font-fira-code">
          <li className="flex items-start">
            <span className="text-[#7aa2f7] mr-2">•</span>
            <span className="text-sm sm:text-base">{major}</span>
          </li>
        </ul>
        {extracurricular && (
          <div className="text-xs font-fira-code text-[#e0af68]/70 italic mt-2">
            {extracurricular}
          </div>
        )}
      </div>
    </section>
  );
}
