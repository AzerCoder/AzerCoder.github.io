"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { useLocale } from "./helper/use-locale";

function Navbar() {
  const { locale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  const homeHref = locale === "uz" ? "/uz" : "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) {
      window.location.href = `${homeHref}#${id}`;
      return;
    }
    {
      const navHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "mobile", label: t.nav.mobile },
    { id: "skills", label: t.nav.skills },
    { id: "education", label: t.nav.education },
    { id: "certificate", label: t.nav.certificate },
    { id: "projects", label: t.nav.projects },
  ];

  return (
    <header
      className={`sticky top-0 z-[999] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1224]/95 backdrop-blur-md border-b border-[#1b2c68a0] shadow-lg shadow-black/40"
          : "bg-[#0d1224]/80 backdrop-blur-md border-b border-[#1b2c68a0]/30"
      }`}
    >
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <nav className="flex items-center justify-between py-2.5 sm:py-3">
          <div className="flex min-w-0 items-center">
            <Link
              href={homeHref}
              onClick={scrollToTop}
              className="truncate text-[#16f2b3] text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-all duration-300 hover:opacity-90">
              <span className="md:hidden lg:inline">A&apos;zamjon Abdumuxtorov</span>
              <span className="hidden md:inline lg:hidden">A&apos;zamjon A.</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <ul className="mt-2 flex h-screen max-h-0 w-0 overflow-hidden flex-col items-start text-xs sm:text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:overflow-visible md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="block px-2 py-1.5 no-underline outline-none hover:no-underline cursor-pointer lg:px-3"
                  >
                    <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">
                      {link.label}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href={t.switchTo.href}
              hrefLang={t.switchTo.hrefLang}
              aria-label={`${t.nav.language}: ${t.switchTo.label}`}
              title={t.switchTo.label}
              className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-[#1b2c68a0] bg-[#11152c] px-3 py-1.5 text-xs font-semibold tracking-wider text-white transition-colors duration-300 hover:border-violet-500 hover:text-[#16f2b3]"
            >
              <TbWorld size={15} />
              {t.switchTo.code}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
