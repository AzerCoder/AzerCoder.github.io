import { personalData } from "@/utils/data/personal-data";

const SITE_URL = "https://iosdev.uz";

export const metadata = {
  title: "AI & Automated Access Policy",
  description:
    "Rules for AI systems and automated agents accessing iosdev.uz: AI crawling, scraping and training on this website's content are prohibited without written permission.",
  alternates: { canonical: `${SITE_URL}/ai-policy` },
};

// Mashina o'qiy oladigan signallar — /public ichidagi fayllar va layout.js'dagi meta teglar
const SIGNALS = ["/robots.txt", "/ai.txt", "/llms.txt", "/.well-known/tdmrep.json"];

const policy = [
  {
    lang: "en",
    title: "AI & Automated Access Policy",
    effective: "Effective date: 25 October 2026",
    intro:
      "This policy governs access to iosdev.uz (the “Website”) by artificial-intelligence systems and other automated agents. It applies to every page and file on the Website — text, images, source code, the PDF résumé and metadata — and to the operators of such systems.",
    sections: [
      {
        heading: "1. Prohibited without prior written permission",
        items: [
          "Crawling, scraping, fetching or browsing the Website with an AI crawler, LLM agent, AI search or answer engine, dataset builder or any similar automated tool.",
          "Using any content of the Website to train, fine-tune, evaluate or ground AI models.",
          "Storing the content in datasets, embeddings, vector stores or retrieval indexes.",
          "Reproducing, summarizing or paraphrasing the content in AI-generated output.",
          "Collecting personal data published on the Website (name, photo, contact details, work history).",
        ],
      },
      {
        heading: "2. Reservation of rights",
        text: "All rights in the Website’s content belong to A’zamjon Abdumuxtorov. Text and data mining rights are expressly reserved, including under Article 4(3) of EU Directive 2019/790. This reservation is also expressed in machine-readable form in the files below and in the page’s tdm-reservation meta tag.",
        signals: true,
      },
      {
        heading: "3. Permitted access",
        items: [
          "People visiting the Website in a web browser.",
          "Conventional search engine indexing (Googlebot, Bingbot, YandexBot and similar) that complies with robots.txt.",
          "Link previews generated when a link to the Website is shared (Telegram, LinkedIn, Facebook and similar).",
        ],
      },
      {
        heading: "4. Legal liability",
        text: "Any operator that accesses the Website through an automated agent is deemed to have notice of this policy. Unauthorized use may result in legal action under the laws of the Republic of Uzbekistan — including the Law “On Copyright and Related Rights” and the Law “On Personal Data” — and under other applicable laws. Remedies may include removal of the content from models, datasets and indexes, compensation for damages, and reports to hosting providers and platform operators.",
      },
      {
        heading: "5. Requesting permission",
        text: "Permission is valid only when granted in writing. To request it, contact:",
        contact: true,
      },
    ],
  },
  {
    lang: "uz",
    title: "AI va avtomatlashtirilgan kirish siyosati",
    effective: "Kuchga kirgan sana: 2026-yil 25-oktabr",
    intro:
      "Ushbu siyosat iosdev.uz saytiga (“Sayt”) sun’iy intellekt tizimlari va boshqa avtomatlashtirilgan agentlar orqali kirishni tartibga soladi. U Saytdagi barcha sahifa va fayllarga — matn, rasm, kod, PDF rezyume va metama’lumotlarga — hamda bunday tizimlarning egalariga tatbiq etiladi.",
    sections: [
      {
        heading: "1. Yozma ruxsatsiz taqiqlanadi",
        items: [
          "Saytni AI crawler, LLM agent, AI qidiruv yoki javob tizimi, dataset yig‘uvchi yoki shunga o‘xshash avtomatlashtirilgan vosita bilan skanerlash, ko‘chirib olish yoki o‘qish.",
          "Sayt kontentidan AI modellarini o‘qitish, sozlash (fine-tune), baholash yoki javobga asos qilish uchun foydalanish.",
          "Kontentni datasetlar, embedding, vektor bazalar yoki qidiruv indekslarida saqlash.",
          "Kontentni AI javoblarida takrorlash, qisqartirish yoki qayta bayon qilish.",
          "Saytdagi shaxsiy ma’lumotlarni (ism, rasm, aloqa ma’lumotlari, ish tajribasi) yig‘ish.",
        ],
      },
      {
        heading: "2. Huquqlar himoyasi",
        text: "Sayt kontentiga oid barcha huquqlar A’zamjon Abdumuxtorovga tegishli. Matn va ma’lumotlarni qazib olish (TDM) huquqi, jumladan Yevropa Ittifoqining 2019/790-sonli Direktivasi 4(3)-moddasiga muvofiq, saqlab qolinadi. Bu cheklov quyidagi fayllarda va sahifadagi tdm-reservation meta tegida mashina o‘qiy oladigan shaklda ham ko‘rsatilgan.",
        signals: true,
      },
      {
        heading: "3. Ruxsat etilgan kirish",
        items: [
          "Saytni brauzer orqali ko‘rayotgan odamlar.",
          "robots.txt qoidalariga amal qiladigan oddiy qidiruv tizimlari (Googlebot, Bingbot, YandexBot va boshqalar).",
          "Sayt havolasi ulashilganda yaratiladigan havola ko‘rinishlari (Telegram, LinkedIn, Facebook va boshqalar).",
        ],
      },
      {
        heading: "4. Qonuniy javobgarlik",
        text: "Saytga avtomatlashtirilgan agent orqali kirgan har qanday tizim egasi ushbu siyosatdan xabardor hisoblanadi. Ruxsatsiz foydalanish O‘zbekiston Respublikasi qonunlari — jumladan “Mualliflik huquqi va turdosh huquqlar to‘g‘risida”gi hamda “Shaxsga doir ma’lumotlar to‘g‘risida”gi qonunlar — va boshqa amaldagi qonunlar asosida qonuniy javobgarlikka olib kelishi mumkin. Bunda kontentni modellar, datasetlar va indekslardan o‘chirish, zararni qoplash hamda hosting va platforma egalariga shikoyat qilish talab etilishi mumkin.",
      },
      {
        heading: "5. Ruxsat so‘rash",
        text: "Ruxsat faqat yozma ravishda berilgan bo‘lsa amal qiladi. Ruxsat so‘rash uchun:",
        contact: true,
      },
    ],
  },
];

const linkClass = "text-[#16f2b3] hover:underline";

function AiPolicyPage() {
  return (
    <div className="max-w-3xl py-16 lg:py-24 space-y-20">
      {policy.map((doc) => (
        <article key={doc.lang} lang={doc.lang} id={doc.lang}>
          <h1 className="text-3xl lg:text-4xl font-bold">{doc.title}</h1>
          <p className="mt-2 text-sm text-[#16f2b3]">{doc.effective}</p>
          <p className="mt-6 text-[#d3d8e8] leading-relaxed">{doc.intro}</p>

          {doc.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              {section.text ? (
                <p className="mt-3 text-[#d3d8e8] leading-relaxed">{section.text}</p>
              ) : null}
              {section.items ? (
                <ul className="mt-3 list-disc pl-6 space-y-2 text-[#d3d8e8] leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.signals ? (
                <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                  {SIGNALS.map((path) => (
                    <li key={path}>
                      <a href={path} className={`${linkClass} font-mono`}>
                        {path}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.contact ? (
                <ul className="mt-3 space-y-1 text-[#d3d8e8]">
                  <li>
                    <a href={`mailto:${personalData.email}`} className={linkClass}>
                      {personalData.email}
                    </a>
                  </li>
                  <li>
                    <a href={personalData.telegram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {personalData.telegram.replace("https://", "")}
                    </a>
                  </li>
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      ))}
    </div>
  );
}

export default AiPolicyPage;
