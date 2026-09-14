// @flow strict
import Image from "next/image";

const certificates = [
  {
    src: "/pdp.webp",
    width: 1000,
    height: 708,
    alt: "iOS Development certificate from PDP Academy awarded to A'zamjon Abdumuxtorov",
    issuer: "PDP Academy",
  },
  {
    src: "/mohirdev.webp",
    width: 1000,
    height: 707,
    alt: "iOS Development certificate from Mohirdev awarded to A'zamjon Abdumuxtorov",
    issuer: "Mohirdev",
  },
  {
    src: "/coursera.webp",
    width: 1000,
    height: 773,
    alt: "Coursera course completion certificate awarded to A'zamjon Abdumuxtorov",
    issuer: "Coursera",
  },
  {
    src: "/udemy.webp",
    width: 1000,
    height: 744,
    alt: "Udemy course completion certificate awarded to A'zamjon Abdumuxtorov",
    issuer: "Udemy",
  },
];

function Certificate() {
  return (
    <section id="certificate" className="relative z-10 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt=""
        aria-hidden="true"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificate
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {certificates.map((certificate) => (
            <figure key={certificate.src} className="flex flex-col">
              <img
                src={certificate.src}
                alt={certificate.alt}
                width={certificate.width}
                height={certificate.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-md"
              />
              <figcaption className="sr-only">{certificate.issuer}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
