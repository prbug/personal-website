import React from "react";

interface JobExperience {
  company: string;
  period: string;
  title: string;
  responsibilities?: string[];
  roles?: Array<{
    title: string;
    period: string;
    description: string;
  }>;
}

interface WorkExperienceProps {
  experiences: JobExperience[];
}

export default function WorkExperience({
  experiences,
}: WorkExperienceProps): JSX.Element {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-fira-code font-bold mb-4 sm:mb-6 text-[#7dcfff] tracking-tight border-b border-[#7dcfff]/30 pb-2">
        ## Work Experience
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="border-l-4 border-[#7aa2f7]/60 pl-4 sm:pl-6 py-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-fira-code font-bold text-[#7aa2f7]">
                **{experience.company}**
              </h3>
              <span className="text-xs sm:text-sm font-fira-code text-[#e0af68]/80 font-medium">
                {experience.period}
              </span>
            </div>
            <div className="text-sm font-fira-code italic text-[#7aa2f7]/80 mb-3">
              *{experience.title}*
            </div>

            {experience.roles ? (
              <ul className="list-none space-y-3 sm:space-y-4 text-[#a9b1d6] font-fira-code">
                {experience.roles.map((role, roleIndex) => (
                  <li key={roleIndex}>
                    <div className="text-sm font-fira-code font-semibold text-[#7aa2f7] mb-1">
                      {role.title} ({role.period})
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#7aa2f7] mr-2">•</span>
                      <span className="text-sm sm:text-base">{role.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="list-none space-y-2 text-[#a9b1d6] font-fira-code">
                {experience.responsibilities?.map(
                  (responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="text-[#7aa2f7] mr-2">•</span>
                      <span className="text-sm sm:text-base">{responsibility}</span>
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
