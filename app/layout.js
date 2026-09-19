import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import { projectsData } from "@/utils/data/projects-data";
import { skillsData } from "@/utils/data/skills";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://iosdev.uz";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "A'zamjon Abdumuxtorov — Mobile Engineer",
    template: "%s | A'zamjon Abdumuxtorov",
  },
  description:
    "A'zamjon Abdumuxtorov is a Mobile Engineer building production applications with Swift, SwiftUI and Flutter. 3+ years of experience, based in Tashkent, Uzbekistan. Shipped apps: PingTop, UzWorks, Iqro Qur'an.",
  applicationName: "iosdev.uz",
  authors: [{ name: "A'zamjon Abdumuxtorov", url: SITE_URL }],
  creator: "A'zamjon Abdumuxtorov",
  publisher: "A'zamjon Abdumuxtorov",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "uz-UZ": "/uz",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    firstName: "A'zamjon",
    lastName: "Abdumuxtorov",
    username: "AzerCoder",
    locale: "en_US",
    alternateLocale: ["uz_UZ"],
    url: SITE_URL,
    siteName: "A'zamjon Abdumuxtorov — Mobile Engineer",
    title: "A'zamjon Abdumuxtorov — Mobile Engineer",
    description:
      "A'zamjon Abdumuxtorov is a Mobile Engineer with 3+ years of experience building production applications with Swift, SwiftUI and Flutter. Strong iOS foundation, hands-on cross-platform development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A'zamjon Abdumuxtorov — Mobile Engineer, Tashkent",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A'zamjon Abdumuxtorov — Mobile Engineer",
    description:
      "Mobile Engineer with 3+ years of experience building production applications with Swift, SwiftUI and Flutter. Based in Tashkent, Uzbekistan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console tasdiqlash kodini shu yerga qo'ying:
  // verification: { google: "XXXXXXXXXXXXXXXXXXXX" },
};

export const viewport = {
  themeColor: "#0d1224",
  width: "device-width",
  initialScale: 1,
};

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "A'zamjon Abdumuxtorov",
  alternateName: ["Azamjon Abdumuxtorov", "AzerCoder", "Азамжон Абдумухторов"],
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Mobile Engineer",
  description:
    "Mobile Engineer with 3+ years of experience, based in Tashkent, Uzbekistan, building production applications with Swift, SwiftUI and Flutter. Strong iOS foundation, hands-on cross-platform development.",
  hasOccupation: {
    "@type": "Occupation",
    name: "Mobile Engineer",
    occupationalCategory: "15-1252.00",
    skills: "Swift, SwiftUI, UIKit, Flutter, Dart, iOS, Android",
  },
  email: "mailto:azamjonabdumuxtorov1220@gmail.com",
  nationality: { "@type": "Country", name: "Uzbekistan" },
  worksFor: { "@type": "Organization", name: "ALIFCO LLC" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tashkent University of Information Technologies named after Muhammad al-Khwarizmi",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tashkent",
    addressRegion: "Tashkent",
    addressCountry: "UZ",
  },
  sameAs: [
    "https://github.com/AzerCoder",
    "https://www.linkedin.com/in/azamjonabdumuxtorov/",
    "https://t.me/Azamjon_Abdumuxtorov",
    "https://instagram.com/azamjon_abdumuxtorov",
    "https://www.facebook.com/profile.php?id=100087191440460",
  ],
  knowsLanguage: ["uz", "en", "ru"],
  knowsAbout: skillsData,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "A'zamjon Abdumuxtorov — Mobile Engineer",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "A'zamjon Abdumuxtorov — Mobile Engineer",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: `${SITE_URL}/og-image.jpg`,
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: "Selected mobile projects by A'zamjon Abdumuxtorov",
      itemListElement: projectsData.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.name,
          description: project.description,
          applicationCategory: "MobileApplication",
          operatingSystem: project.platforms?.includes("Cross-platform")
            ? "iOS, Android"
            : "iOS",
          image: `${SITE_URL}${project.image}`,
          ...(project.link ? { url: project.link } : {}),
          author: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                // Faqat sahifa QAYTA YUKLANGANDA hash tozalanadi.
                // Boshqa sahifadan kelgan anchor havolalar (/#projects) ishlashda davom etadi.
                var nav = performance.getEntriesByType('navigation')[0];
                var isReload = nav ? nav.type === 'reload' : false;
                if (isReload && window.location.hash) {
                  history.replaceState(null, '', window.location.pathname);
                  window.scrollTo(0, 0);
                } else if (!window.location.hash) {
                  window.scrollTo(0, 0);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
    </html>
  );
}
