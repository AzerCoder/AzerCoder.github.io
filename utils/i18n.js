export const LOCALES = ["en", "uz"];
export const DEFAULT_LOCALE = "en";

const en = {
  locale: "en",
  htmlLang: "en",
  switchTo: { href: "/uz", label: "O'zbekcha", code: "UZ", hrefLang: "uz" },
  nav: {
    about: "ABOUT",
    experience: "EXPERIENCE",
    mobile: "MOBILE",
    skills: "STACK",
    education: "EDUCATION",
    certificate: "CERTIFICATE",
    projects: "PROJECTS",
    language: "Language",
  },
  hero: {
    greeting: "Hello, I'm",
    designation: "Mobile Engineer",
    years: "3+ years of experience",
    yearsShort: "3+ years",
    location: "Tashkent, Uzbekistan",
    tagline:
      "Building production mobile applications with Swift, SwiftUI and Flutter. Strong iOS foundation, hands-on cross-platform development.",
    badgesLabel: "Core technologies",
    viewProjects: "View Mobile Projects",
    github: "GitHub",
    contactMe: "Contact me",
    getResume: "Download résumé",
  },
  about: {
    label: "ABOUT ME",
    heading: "About A'zamjon Abdumuxtorov — Mobile Engineer",
    whoAmI: "Who I am?",
    description:
      "I'm a Mobile Engineer with 3+ years of experience building production-quality applications across iOS and cross-platform environments. My strongest foundation is in Swift and SwiftUI, where I have shipped native apps to the App Store; alongside that I work with Flutter and Dart to build scalable cross-platform products. I care about clear architecture — MVVM, VIPER, Clean Architecture and BLoC — predictable state, and interfaces that stay fast on real devices. Problem-solving drives me, and I'm open to opportunities where I can build mobile products end to end.",
    photoAlt:
      "A'zamjon Abdumuxtorov — Mobile Engineer (iOS & Flutter) in Tashkent, Uzbekistan",
  },
  currently: {
    label: "CURRENTLY",
    title: "Currently",
    description:
      "Building mobile applications with Flutter and Dart while continuing to work with Swift and SwiftUI.",
  },
  mobile: {
    title: "Mobile Engineering",
    intro:
      "What I build across platforms — not limited to Apple's ecosystem.",
    platformsTitle: "Platform depth",
    shippedWith: "Shipped with this stack",
  },
  experience: {
    title: "Experiences",
    identity: "Mobile Engineer · 3+ years — roles are listed with their official historical titles.",
  },
  skills: {
    title: "Stack",
    stackIntro: "The technologies I reach for first.",
    allTitle: "Everything else I work with",
  },
  projects: {
    title: "PROJECTS",
    heading: "Selected Mobile Projects",
    imageAlt: "{name} — {tools} mobile app screenshot by A'zamjon Abdumuxtorov",
  },
  education: { title: "Educations" },
  certificate: {
    title: "Certificate",
    alt: {
      pdp: "iOS Development certificate from PDP Academy awarded to A'zamjon Abdumuxtorov",
      mohirdev: "iOS Development certificate from Mohirdev awarded to A'zamjon Abdumuxtorov",
      coursera: "Coursera course completion certificate awarded to A'zamjon Abdumuxtorov",
      udemy: "Udemy course completion certificate awarded to A'zamjon Abdumuxtorov",
    },
  },
  contact: {
    label: "CONTACT",
    heading: "Contact A'zamjon Abdumuxtorov",
    formTitle: "Contact with me",
    formIntro:
      "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.",
    name: "Your Name: ",
    contactField: "Your Number or Telegram: ",
    message: "Your Message: ",
    requiredError: "All fields are required!",
    send: "Send Message",
    sending: "Sending Message...",
    success: "Message sent successfully!",
    failure: "Failed to send message. Please try again.",
  },
  footer: { by: "© Developer Portfolio by" },
};

const uz = {
  locale: "uz",
  htmlLang: "uz",
  switchTo: { href: "/", label: "English", code: "EN", hrefLang: "en" },
  nav: {
    about: "HAQIMDA",
    experience: "TAJRIBA",
    mobile: "MOBIL",
    skills: "STACK",
    education: "TA'LIM",
    certificate: "SERTIFIKAT",
    projects: "LOYIHALAR",
    language: "Til",
  },
  hero: {
    greeting: "Assalomu alaykum, men",
    designation: "Mobile Engineer",
    years: "3+ yillik tajriba",
    yearsShort: "3+ yil",
    location: "Toshkent, O'zbekiston",
    tagline:
      "Swift, SwiftUI va Flutter yordamida ishlab chiqarishga tayyor mobil ilovalar yarataman. Mustahkam iOS poydevori va amaliy kross-platforma tajribasi.",
    badgesLabel: "Asosiy texnologiyalar",
    viewProjects: "Mobil loyihalarni ko'rish",
    github: "GitHub",
    contactMe: "Bog'lanish",
    getResume: "Rezyumeni yuklash",
  },
  about: {
    label: "MEN HAQIMDA",
    heading: "A'zamjon Abdumuxtorov haqida — Mobile Engineer",
    whoAmI: "Men kimman?",
    description:
      "Men 3+ yillik tajribaga ega mobil dasturchiman (Mobile Engineer) va iOS hamda kross-platforma muhitlarida ishlab chiqarish sifatidagi ilovalar yarataman. Eng mustahkam poydevorim — Swift va SwiftUI: native ilovalarim App Store'da chop etilgan. Shu bilan birga kengaytiriladigan kross-platforma mahsulotlar uchun Flutter va Dart bilan ishlayman. Menga aniq arxitektura — MVVM, VIPER, Clean Architecture va BLoC — bashorat qilinadigan holat hamda real qurilmada tez ishlaydigan interfeys muhim. Muammolarni hal qilish meni ilhomlantiradi va mobil mahsulotni boshidan oxirigacha qurish imkoniyatlariga ochiqman.",
    photoAlt:
      "A'zamjon Abdumuxtorov — Toshkentlik mobil dasturchi (iOS va Flutter)",
  },
  currently: {
    label: "HOZIR",
    title: "Hozirda",
    description:
      "Flutter va Dart yordamida mobil ilovalar yaratyapman, shu bilan birga Swift va SwiftUI bilan ishlashni davom ettiryapman.",
  },
  mobile: {
    title: "Mobil muhandislik",
    intro:
      "Platformalar bo'ylab nimalar quraman — faqat Apple ekotizimi bilan cheklanmagan holda.",
    platformsTitle: "Platforma bo'yicha chuqurlik",
    shippedWith: "Shu stack bilan chiqarilgan loyihalar",
  },
  experience: {
    title: "Tajriba",
    identity: "Mobile Engineer · 3+ yil — lavozimlar rasmiy tarixiy nomlari bilan keltirilgan.",
  },
  skills: {
    title: "Texnologiyalar",
    stackIntro: "Birinchi navbatda foydalanadigan texnologiyalarim.",
    allTitle: "Yana nimalar bilan ishlayman",
  },
  projects: {
    title: "LOYIHALAR",
    heading: "Tanlangan mobil loyihalar",
    imageAlt: "{name} — {tools} mobil ilovasi, muallif A'zamjon Abdumuxtorov",
  },
  education: { title: "Ta'lim" },
  certificate: {
    title: "Sertifikatlar",
    alt: {
      pdp: "PDP Academy'dan A'zamjon Abdumuxtorovga berilgan iOS dasturlash sertifikati",
      mohirdev: "Mohirdev'dan A'zamjon Abdumuxtorovga berilgan iOS dasturlash sertifikati",
      coursera: "Coursera kursini tamomlaganlik uchun A'zamjon Abdumuxtorovga berilgan sertifikat",
      udemy: "Udemy kursini tamomlaganlik uchun A'zamjon Abdumuxtorovga berilgan sertifikat",
    },
  },
  contact: {
    label: "BOG'LANISH",
    heading: "A'zamjon Abdumuxtorov bilan bog'lanish",
    formTitle: "Men bilan bog'laning",
    formIntro:
      "Savollaringiz yoki takliflaringiz bo'lsa, bemalol murojaat qiling. Ko'nikmalarim va qiziqishlarimga mos keladigan har qanday ish takliflariga ochiqman.",
    name: "Ismingiz: ",
    contactField: "Telefon raqamingiz yoki Telegram: ",
    message: "Xabaringiz: ",
    requiredError: "Barcha maydonlar to'ldirilishi shart!",
    send: "Xabar yuborish",
    sending: "Yuborilmoqda...",
    success: "Xabar muvaffaqiyatli yuborildi!",
    failure: "Xabar yuborilmadi. Iltimos, qayta urinib ko'ring.",
  },
  footer: { by: "© Portfolio muallifi:" },
};

const dictionaries = { en, uz };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
