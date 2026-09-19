// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { heroBadges } from "@/utils/data/stack";
import HighlightText from "../../helper/highlight-text";
import TechChip from "../../helper/tech-chip";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { FaTelegram, FaInstagram } from "react-icons/fa"

function HeroSection({ t }) {
  return (
    <section id="home" className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt=""
        aria-hidden="true"
        priority
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            {t.hero.greeting}
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-pink-500 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.25rem]">
            {personalData.name}
          </h1>

          <p className="mt-2 text-2xl font-semibold leading-tight text-[#16f2b3] lg:text-[2rem]">
            {t.hero.designation}
          </p>

          <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-gray-400">
            <span className="font-medium text-gray-200">{t.hero.years}</span>
            <span aria-hidden="true" className="text-gray-600">&middot;</span>
            <span>{t.hero.location}</span>
          </p>

          <p className="mt-5 max-w-xl text-base text-gray-300 lg:text-lg">
            <HighlightText text={t.hero.tagline} />
          </p>

          <ul aria-label={t.hero.badgesLabel} className="mt-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <li key={badge}>
                <TechChip label={badge} />
              </li>
            ))}
          </ul>

          <div className="my-9 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              aria-label="GitHub"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              aria-label="LinkedIn"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              aria-label="Facebook"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              aria-label="Instagram"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href={personalData.telegram}
              target='_blank'
              aria-label="Telegram"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTelegram size={30} />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            >
              <span>{t.hero.viewProjects}</span>
              <HiArrowRight size={16} />
            </Link>

            <Link
              href={personalData.github}
              target="_blank"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <span className="px-4 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <BsGithub size={16} />
                <span>{t.hero.github}</span>
              </span>
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link href="#contact" className="transition-colors duration-300 hover:text-[#16f2b3]">
              {t.hero.contactMe}
            </Link>
            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-1.5 transition-colors duration-300 hover:text-[#16f2b3]"
            >
              <MdDownload size={16} />
              {t.hero.getResume}
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">let</span>
                <span className="mr-2 text-white">AzerCoder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="mr-2 text-green-500">MobileEngineer</span>
                <span className="text-gray-400">{'('}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`"`}</span>
                <span className="text-amber-300">A&apos;zamjon Abdumuxtorov</span>
                <span className="text-gray-400">{`",`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">experience:</span>
                <span className="text-gray-400">{`"`}</span>
                <span className="text-amber-300">{t.hero.yearsShort}</span>
                <span className="text-gray-400">{`",`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">platforms:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">iOS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Android</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">native:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Swift</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">SwiftUI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">UIKit</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Combine</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">crossPlatform:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Flutter</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Dart</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">BLoC</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">architecture:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">MVVM</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">VIPER</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Clean</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">shipsToStores:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">AzerCoder.</span>
                <span className="mr-2 text-white">shipsToStores</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">AzerCoder.</span>
                <span className="mr-2 text-white">platforms.count</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">2</span>
              </div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`}`}</span></div>
              <div><span className="text-gray-400">{`)`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
