// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection({ t }) {
  return (
    <section id="about" className="my-12 lg:my-16 relative">
      <h2 className="sr-only">{t.about.heading}</h2>
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span aria-hidden="true" className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          {t.about.label}
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h3 className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            {t.about.whoAmI}
          </h3>
          <p className="text-gray-200 text-sm lg:text-lg">
            {t.about.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt={t.about.photoAlt}
            loading="lazy"
            className="rounded-lg object-cover transition-all duration-300  hover:grayscale-0 hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;