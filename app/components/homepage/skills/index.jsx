// @flow strict

import { skillsData } from "@/utils/data/skills";
import Marquee from "react-fast-marquee";
import SectionGlow from "../../helper/section-glow";
import SkillIcon from "./skill-icon";

function Skills({ t }) {
  return (
    <section id="skills" className="relative z-10 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionGlow size={360} opacity={0.2} className="left-1/2 top-[78px] -translate-x-1/2 -translate-y-1/2" />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {t.skills.title}
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 h-36 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 flex flex-col justify-between">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-4 flex-1">
                  <div className="h-11 w-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <SkillIcon skill={skill} size={44} />
                  </div>
                  <div className="h-10 flex items-center justify-center w-full">
                    <p className={`text-white text-center font-medium line-clamp-2 px-1 ${
                      skill.length > 13
                        ? 'text-xs leading-tight'
                        : skill.length > 9
                        ? 'text-xs sm:text-sm leading-snug'
                        : 'text-sm sm:text-base leading-normal'
                    }`}>
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 h-36 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 flex flex-col justify-between">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-4 flex-1">
                  <div className="h-11 w-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <SkillIcon skill={skill} size={44} />
                  </div>
                  <div className="h-10 flex items-center justify-center w-full">
                    <p className={`text-white text-center font-medium line-clamp-2 px-1 ${
                      skill.length > 13
                        ? 'text-xs leading-tight'
                        : skill.length > 9
                        ? 'text-xs sm:text-sm leading-snug'
                        : 'text-sm sm:text-base leading-normal'
                    }`}>
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;