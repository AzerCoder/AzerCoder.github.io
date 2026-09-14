export const LOCALES = ["en", "uz"];
export const DEFAULT_LOCALE = "en";

const en = {
  locale: "en",
  htmlLang: "en",
  switchTo: { href: "/uz", label: "O'zbekcha", code: "UZ", hrefLang: "uz" },
  nav: {
    about: "ABOUT",
    experience: "EXPERIENCE",
    skills: "SKILLS",
    education: "EDUCATION",
    certificate: "CERTIFICATE",
    projects: "PROJECTS",
    language: "Language",
  },
  hero: {
    greeting: "Hello,",
    beforeName: "This is ",
    afterName: " , I'm a Professional ",
    afterRole: ".",
    designation: "Mobile Engineer",
    tagline:
      "iOS & Flutter developer based in Tashkent, Uzbekistan. I build native iOS apps with Swift, SwiftUI and UIKit, and cross-platform apps with Flutter and Dart — shipped to the App Store.",
    contactMe: "Contact me",
    getResume: "Get Resume",
  },
  about: {
    label: "ABOUT ME",
    heading: "About A'zamjon Abdumuxtorov — iOS & Flutter Mobile Engineer",
    whoAmI: "Who I am?",
    description:
      "My name is A'zamjon Abdumuxtorov. I am a professional and passionate Mobile Engineer dedicated to building high-quality iOS and Flutter applications. I have a strong self-learning attitude and continuously explore modern architectures to enhance my engineering skills. Crafting seamless, scalable, and visually appealing mobile experiences while following best coding practices is what drives me. Problem-solving excites me, and I always strive to build efficient and innovative mobile solutions. I am open to exciting opportunities that align with my skills and passion for mobile engineering.",
    photoAlt:
      "A'zamjon Abdumuxtorov — Mobile Engineer (iOS & Flutter) in Tashkent, Uzbekistan",
  },
  experience: { title: "Experiences" },
  skills: { title: "Skills" },
  projects: {
    title: "PROJECTS",
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
    skills: "KO'NIKMALAR",
    education: "TA'LIM",
    certificate: "SERTIFIKAT",
    projects: "LOYIHALAR",
    language: "Til",
  },
  hero: {
    greeting: "Assalomu alaykum,",
    beforeName: "Men ",
    afterName: ", professional ",
    afterRole: "man.",
    designation: "Mobil dasturchi",
    tagline:
      "Toshkentda faoliyat yurituvchi iOS va Flutter dasturchiman. Native iOS ilovalarni Swift, SwiftUI va UIKit yordamida, kross-platforma ilovalarni esa Flutter va Dart yordamida ishlab chiqaman — ilovalarim App Store'da chop etilgan.",
    contactMe: "Bog'lanish",
    getResume: "Rezyume",
  },
  about: {
    label: "MEN HAQIMDA",
    heading: "A'zamjon Abdumuxtorov haqida — iOS va Flutter mobil dasturchi",
    whoAmI: "Men kimman?",
    description:
      "Mening ismim A'zamjon Abdumuxtorov. Men yuqori sifatli iOS va Flutter ilovalarini yaratishga bag'ishlangan professional mobil dasturchiman. Mustaqil o'rganishga moyilman va muhandislik ko'nikmalarimni oshirish uchun zamonaviy arxitekturalarni doimiy o'rganib boraman. Eng yaxshi kod yozish amaliyotlariga amal qilgan holda silliq, kengaytiriladigan va chiroyli mobil tajribalar yaratish meni ilhomlantiradi. Muammolarni hal qilish menga qiziq va har doim samarali hamda innovatsion mobil yechimlar yaratishga intilaman. Ko'nikmalarim va mobil muhandislikka bo'lgan qiziqishimga mos keladigan qiziqarli imkoniyatlarga ochiqman.",
    photoAlt:
      "A'zamjon Abdumuxtorov — Toshkentlik iOS va Flutter mobil dasturchi",
  },
  experience: { title: "Tajriba" },
  skills: { title: "Ko'nikmalar" },
  projects: {
    title: "LOYIHALAR",
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
