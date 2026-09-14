import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://iosdev.uz'),
  title: {
    default: "A'zamjon Abdumuxtorov | Mobile Engineer Portfolio",
    template: "%s | A'zamjon Abdumuxtorov",
  },
  description:
    "Portfolio of A'zamjon Abdumuxtorov (AzerCoder) - Professional Mobile Engineer based in Tashkent, Uzbekistan. Specializing in Swift, SwiftUI, Flutter, and high-performance mobile applications.",
  keywords: [
    "A'zamjon Abdumuxtorov",
    "Azamjon Abdumuxtorov",
    "AzerCoder",
    "iOS Developer",
    "iOS Developer Uzbekistan",
    "iOS Developer Tashkent",
    "iOS dasturchi",
    "iOS dasturchi O'zbekiston",
    "Swift",
    "SwiftUI",
    "Flutter Developer",
    "Flutter Uzbekistan",
    "Mobile Developer Uzbekistan",
    "iosdev.uz"
  ],
  authors: [{ name: "A'zamjon Abdumuxtorov", url: "https://iosdev.uz" }],
  creator: "A'zamjon Abdumuxtorov",
  alternates: {
    canonical: "https://iosdev.uz",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iosdev.uz",
    siteName: "A'zamjon Abdumuxtorov - iOS Developer",
    title: "A'zamjon Abdumuxtorov | iOS & Flutter Developer Portfolio",
    description:
      "Explore projects, skills, and experience of A'zamjon Abdumuxtorov - Professional iOS & Mobile Developer.",
  },
  twitter: {
    card: "summary",
    title: "A'zamjon Abdumuxtorov | iOS & Flutter Developer",
    description: "Professional iOS & Flutter Developer based in Tashkent, Uzbekistan.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "A'zamjon Abdumuxtorov",
  "alternateName": ["Azamjon Abdumuxtorov", "AzerCoder"],
  "url": "https://iosdev.uz",
  "jobTitle": "Mobile Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "ALIFCO LLC"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tashkent",
    "addressCountry": "Uzbekistan"
  },
  "sameAs": [
    "https://github.com/AzerCoder",
    "https://www.linkedin.com/in/azamjonabdumuxtorov/",
    "https://t.me/Azamjon_Abdumuxtorov",
    "https://instagram.com/azamjon_abdumuxtorov",
    "https://www.facebook.com/profile.php?id=100087191440460"
  ],
  "knowsAbout": [
    "iOS Development",
    "Swift",
    "SwiftUI",
    "UIKit",
    "Flutter",
    "Dart",
    "Mobile App Development",
    "REST APIs"
  ]
};

export default function RootLayout({ children }) {
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
                if (window.location.hash) {
                  history.replaceState(null, '', window.location.pathname);
                }
                window.scrollTo(0, 0);
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
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
