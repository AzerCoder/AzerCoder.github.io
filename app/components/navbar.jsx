"use client";

import Link from "next/link";

function Navbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            onClick={scrollToTop}
            className=" text-[#16f2b3] text-3xl font-bold">
            A&apos;zamjon Abdumuxtorov
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => scrollToSection(e, "education")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </a>
          </li>
          <li>
            <a
              href="#certificate"
              onClick={(e) => scrollToSection(e, "certificate")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATE</div>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;