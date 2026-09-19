// @flow strict

import { currentlyStack } from "@/utils/data/stack";
import HighlightText from "../../helper/highlight-text";
import TechChip from "../../helper/tech-chip";

/**
 * "Currently" — bugungi kunda qaysi texnologiyalar bilan ishlayotganimni
 * bir qarashda ko'rsatadigan qisqa blok. Flutter shu yerda birinchi turadi.
 */
function Currently({ t }) {
  return (
    <section id="currently" className="my-12 lg:my-16">
      <div className="relative overflow-hidden rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16f2b3] opacity-60"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16f2b3]"></span>
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16f2b3]">
                {t.currently.title}
              </h2>
            </div>
            <p className="mt-3 text-base text-gray-200 lg:text-lg">
              <HighlightText text={t.currently.description} />
            </p>
          </div>

          <ul className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {currentlyStack.map((item) => (
              <li key={item}>
                <TechChip label={item} size="sm" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Currently;
