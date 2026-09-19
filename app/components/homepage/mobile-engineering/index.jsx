// @flow strict

import { mobileCapabilities, platformStacks } from "@/utils/data/stack";
import { projectsData } from "@/utils/data/projects-data";
import Image from "next/image";
import SectionGlow from "../../helper/section-glow";
import TechChip from "../../helper/tech-chip";
import CapabilityIcon from "./capability-icon";
import { SiApple, SiFlutter } from "react-icons/si";

// Platforma panelining bezagi: iOS va Flutter bir xil vaznda ko'rinadi.
const PLATFORM_STYLE = {
  ios: {
    Icon: SiApple,
    iconClass: "text-white",
    ring: "group-hover:border-[#16f2b3]/50",
    halo: "bg-[#16f2b3]/10",
  },
  flutter: {
    Icon: SiFlutter,
    iconClass: "text-[#47C5FB]",
    ring: "group-hover:border-[#47C5FB]/50",
    halo: "bg-[#47C5FB]/10",
  },
};

// Real loyihalarni platformaga qarab ajratadi — hech narsa to'qib chiqarilmaydi.
function projectsFor(platformId) {
  const needle = platformId === "ios" ? "iOS" : "Flutter";
  return projectsData.filter((project) => project.platforms?.includes(needle));
}

function MobileEngineering({ t }) {
  return (
    <section
      id="mobile"
      className="relative z-10 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt=""
        aria-hidden="true"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <SectionGlow
        size={360}
        opacity={0.2}
        className="left-1/2 top-[78px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {t.mobile.title}
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="mx-auto max-w-2xl text-center text-sm text-gray-400 lg:text-base">
        {t.mobile.intro}
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mobileCapabilities.map((capability) => (
          <li
            key={capability.id}
            className="group rounded-xl border border-[#1f223c] bg-[#11152c] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a1443] text-violet-400 transition-colors duration-300 group-hover:text-[#16f2b3]">
                <CapabilityIcon name={capability.icon} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {t.locale === "uz" ? capability.titleUz : capability.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400 sm:text-sm">
                  {t.locale === "uz"
                    ? capability.descriptionUz
                    : capability.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
        {t.mobile.platformsTitle}
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {platformStacks.map((platform) => {
          const style = PLATFORM_STYLE[platform.id];
          const shipped = projectsFor(platform.id);

          return (
            <div
              key={platform.id}
              className={`group flex flex-col rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] p-6 transition-all duration-300 ${style.ring}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${style.halo}`}
                >
                  <style.Icon size={24} className={style.iconClass} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {t.locale === "uz" ? platform.labelUz : platform.label}
                  </h4>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    {t.locale === "uz" ? platform.summaryUz : platform.summary}
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {platform.items.map((item) => (
                  <li key={item}>
                    <TechChip label={item} size="sm" />
                  </li>
                ))}
              </ul>

              {shipped.length > 0 && (
                <div className="mt-auto pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                    {t.mobile.shippedWith}
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    {shipped.map((project, index) => (
                      <span key={project.id}>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#16f2b3] transition-opacity duration-300 hover:opacity-80"
                          >
                            {project.name}
                          </a>
                        ) : (
                          project.name
                        )}
                        {index < shipped.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MobileEngineering;
