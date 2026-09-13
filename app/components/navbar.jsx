"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    if (element) {
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
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-[#16f2b3] text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300 hover:opacity-90">
              A&apos;zamjon Abdumuxtorov
            </Link>
          </div>

          <ul className="mt-2 flex h-screen max-h-0 w-full flex-col items-start text-xs sm:text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="block px-3 py-1.5 no-underline outline-none hover:no-underline cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="block px-3 py-1.5 no-underline outline-none hover:no-underline cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="block px-3 py-1.5 no-underline outline-none hover:no-underline cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => scrollToSection(e, "education")}
                className="block px-3 py-1.5 no-underline outline-none hover:no-underline cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                onClick={(e) => scrollToSection(e, "certificate")}
                className="block px-3 py-1.5 no-underline outline-none hover:no-underline cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATE</div>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="block px-3 py-1.5 no-underline outline-none hover:no-underline cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;