// @flow strict
import AboutSection from "./about";
import Certificate from "./certificate";
import ContactSection from "./contact";
import Currently from "./currently";
import Education from "./education";
import Experience from "./experience";
import HeroSection from "./hero-section";
import MobileEngineering from "./mobile-engineering";
import Projects from "./projects";
import Skills from "./skills";

// Bosh sahifa va /uz sahifasi aynan shu tuzilmadan foydalanadi.
function HomeSections({ t }) {
  return (
    <>
      <HeroSection t={t} />
      <AboutSection t={t} />
      <Currently t={t} />
      <Experience t={t} />
      <MobileEngineering t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Education t={t} />
      <Certificate t={t} />
      <ContactSection t={t} />
    </>
  );
}

export default HomeSections;
