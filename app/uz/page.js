import HomeSections from "../components/homepage/sections";
import { getDictionary } from "@/utils/i18n";

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
    title: "A'zamjon Abdumuxtorov — iOS va Flutter dasturchi (Toshkent)",
    description:
      "Toshkentlik mobil dasturchi. Swift, SwiftUI, UIKit, Flutter, Dart. App Store'ga chiqarilgan ilovalar.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
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

export default function UzbekPage() {
  return (
    <div lang="uz">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdUz) }}
      />
      <HomeSections t={getDictionary("uz")} />
    </div>
  );
}
