// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href={personalData.telegram} className="text-[#16f2b3]">  A&apos;zamjon Abdumuxtorov</Link>
          </p>
          <nav aria-label="Til tanlash" className="flex items-center gap-3 text-sm">
            <Link href="/" hrefLang="en" className="text-gray-300 transition-colors hover:text-[#16f2b3]">
              English
            </Link>
            <span className="text-[#353951]">|</span>
            <Link href="/uz" hrefLang="uz" className="text-gray-300 transition-colors hover:text-[#16f2b3]">
              O&apos;zbekcha
            </Link>
          </nav>
        </div>
      </div>
    </div >
  );
};

export default Footer;