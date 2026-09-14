import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { projectsData } from "@/utils/data/projects-data";
import { skillsData } from "@/utils/data/skills";
import { experiences } from "@/utils/data/experience";
import { educations } from "@/utils/data/educations";

const SITE_URL = "https://iosdev.uz";

export const metadata = {
  title: {
    absolute: "A'zamjon Abdumuxtorov — iOS va Flutter dasturchi (Toshkent)",
  },
  description:
    "A'zamjon Abdumuxtorov — Toshkentlik iOS va Flutter dasturchi. Swift, SwiftUI, UIKit, Flutter va Dart texnologiyalarida mobil ilovalar ishlab chiqaman. App Store'ga chiqarilgan loyihalar: PingTop, UzWorks, Iqro Qur'on.",
  alternates: {
    canonical: "/uz",
    languages: {
      "en-US": "/",
      "uz-UZ": "/uz",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    locale: "uz_UZ",
    alternateLocale: ["en_US"],
    url: `${SITE_URL}/uz`,
    title: {
    absolute: "A'zamjon Abdumuxtorov — iOS va Flutter dasturchi (Toshkent)",
  },
    description:
      "Toshkentlik mobil dasturchi. Swift, SwiftUI, UIKit, Flutter, Dart. App Store'ga chiqarilgan ilovalar.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const uzEducations = {
  1: "Bakalavr darajasi",
  2: "iOS dasturlash",
  3: "iOS dasturlash",
};

const uzExperience = {
  1: "Mobil dasturchi",
  2: "iOS dasturchi",
  3: "iOS dasturchi",
};

const jsonLdUz = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/uz`,
  inLanguage: "uz",
  name: "A'zamjon Abdumuxtorov — iOS va Flutter dasturchi",
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "A'zamjon Abdumuxtorov",
    jobTitle: "Mobil dasturchi",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toshkent",
      addressCountry: "UZ",
    },
  },
};

const Section = ({ id, title, children }) => (
  <section id={id} className="border-t border-[#25213b] py-10 lg:py-14">
    <h2 className="mb-6 text-2xl font-bold text-[#16f2b3] lg:text-3xl">{title}</h2>
    {children}
  </section>
);

export default function UzbekPage() {
  return (
    <div lang="uz" className="py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdUz) }}
      />

      <nav aria-label="Til tanlash" className="mb-8 text-sm text-gray-400">
        <Link href="/" className="text-[#16f2b3] hover:underline" hrefLang="en">
          English
        </Link>
        <span className="mx-2">/</span>
        <span aria-current="page">O&apos;zbekcha</span>
      </nav>

      <header className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold leading-tight lg:text-[2.6rem] lg:leading-[3.4rem]">
            A&apos;zamjon Abdumuxtorov —{" "}
            <span className="text-pink-500">iOS</span> va{" "}
            <span className="text-[#16f2b3]">Flutter</span> dasturchi
          </h1>
          <p className="mt-6 text-base text-gray-300 lg:text-lg">
            Assalomu alaykum! Men A&apos;zamjon Abdumuxtorov — Toshkent shahrida
            faoliyat yurituvchi <strong className="font-medium text-white">mobil dasturchiman</strong>.
            Native iOS ilovalarni <strong className="font-medium text-white">Swift</strong>,{" "}
            <strong className="font-medium text-white">SwiftUI</strong> va{" "}
            <strong className="font-medium text-white">UIKit</strong> yordamida,
            kross-platforma ilovalarni esa{" "}
            <strong className="font-medium text-white">Flutter</strong> va{" "}
            <strong className="font-medium text-white">Dart</strong> yordamida ishlab chiqaman.
            Ilovalarim App Store&apos;da chop etilgan va minglab foydalanuvchilarga xizmat qiladi.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalData.email}`}
              className="rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Bog&apos;lanish
            </a>
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#1b2c68a0] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:border-violet-500"
            >
              Rezyume (PDF)
            </a>
          </div>
        </div>
        <Image
          src={personalData.profile}
          width={240}
          height={240}
          alt="A'zamjon Abdumuxtorov — Toshkentlik iOS va Flutter dasturchi"
          className="rounded-lg object-cover"
          priority
        />
      </header>

      <Section id="about" title="Men haqimda">
        <p className="text-gray-300 lg:text-lg">
          2022-yildan beri mobil dasturlash bilan shug&apos;ullanaman. Toshkent axborot
          texnologiyalari universiteti (TATU) talabasiman va PDP Academy hamda Mohirdev
          kurslarida iOS dasturlashni o&apos;rganganman. Asosiy yo&apos;nalishim — toza
          arxitektura (Clean Architecture, MVVM, VIPER), reaktiv dasturlash va yuqori
          unumdorlikka ega mobil ilovalar yaratish. Hozirda{" "}
          <strong className="font-medium text-white">ALIFCO LLC</strong> kompaniyasida mobil
          dasturchi sifatida ishlayman.
        </p>
        <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-lg border border-[#1f223c] bg-[#11152c] p-4">
            <dt className="text-gray-400">Joylashuv</dt>
            <dd className="mt-1 font-medium text-white">Toshkent, O&apos;zbekiston</dd>
          </div>
          <div className="rounded-lg border border-[#1f223c] bg-[#11152c] p-4">
            <dt className="text-gray-400">Mutaxassislik</dt>
            <dd className="mt-1 font-medium text-white">iOS &amp; Flutter dasturchi</dd>
          </div>
          <div className="rounded-lg border border-[#1f223c] bg-[#11152c] p-4">
            <dt className="text-gray-400">Tillar</dt>
            <dd className="mt-1 font-medium text-white">O&apos;zbek, Ingliz, Rus</dd>
          </div>
        </dl>
      </Section>

      <Section id="experience" title="Ish tajribasi">
        <ul className="flex flex-col gap-4">
          {experiences.map((experience) => (
            <li
              key={experience.id}
              className="rounded-lg border border-[#1f223c] bg-[#11152c] p-5"
            >
              <h3 className="text-lg font-medium text-white">
                {uzExperience[experience.id] ?? experience.title}
              </h3>
              <p className="mt-1 text-gray-300">{experience.company}</p>
              <p className="mt-1 text-sm text-[#16f2b3]">{experience.duration}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Ko'nikmalar va texnologiyalar">
        <ul className="flex flex-wrap gap-2">
          {skillsData.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[#1f223c] bg-[#11152c] px-4 py-2 text-sm text-gray-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Loyihalar">
        <div className="flex flex-col gap-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-[#1f223c] bg-[#11152c] p-5 sm:flex sm:gap-6"
            >
              <img
                src={project.image}
                alt={`${project.name} mobil ilovasi — ${project.tools.slice(0, 3).join(", ")}`}
                width={project.imageWidth}
                height={project.imageHeight}
                loading="lazy"
                decoding="async"
                className="mb-4 w-28 rounded-md sm:mb-0 sm:w-32 sm:flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-medium text-[#16f2b3]">{project.name}</h3>
                <p className="mt-2 text-gray-300">{project.descriptionUz}</p>
                <p className="mt-3 text-sm text-gray-400">
                  <span className="text-white">Texnologiyalar:</span>{" "}
                  {project.tools.join(", ")}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-pink-500 hover:underline"
                  >
                    App Store&apos;da ko&apos;rish →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Ta'lim">
        <ul className="flex flex-col gap-4">
          {educations.map((education) => (
            <li
              key={education.id}
              className="rounded-lg border border-[#1f223c] bg-[#11152c] p-5"
            >
              <h3 className="text-lg font-medium text-white">
                {uzEducations[education.id] ?? education.title}
              </h3>
              <p className="mt-1 text-gray-300">{education.institution}</p>
              <p className="mt-1 text-sm text-[#16f2b3]">{education.duration}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Bog'lanish">
        <p className="text-gray-300">
          Yangi loyihalar va hamkorlik takliflari uchun ochiqman. Quyidagi manzillar
          orqali bog&apos;lanishingiz mumkin:
        </p>
        <ul className="mt-5 flex flex-col gap-3 text-gray-200">
          <li>
            Email:{" "}
            <a href={`mailto:${personalData.email}`} className="text-[#16f2b3] hover:underline">
              {personalData.email}
            </a>
          </li>
          <li>
            Telefon:{" "}
            <a href={`tel:${personalData.phone}`} className="text-[#16f2b3] hover:underline">
              {personalData.phone}
            </a>
          </li>
          <li>
            Telegram:{" "}
            <a
              href={personalData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] hover:underline"
            >
              @Azamjon_Abdumuxtorov
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] hover:underline"
            >
              linkedin.com/in/azamjonabdumuxtorov
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16f2b3] hover:underline"
            >
              github.com/AzerCoder
            </a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
