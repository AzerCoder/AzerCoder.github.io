// @flow strict

/**
 * Bo'lim sarlavhasi ortidagi yumshoq binafsha yorug'lik.
 *
 * Avval `bg-violet-100` + `blur-3xl` ishlatilgan edi. Qorong'i fonda past
 * shaffoflikdagi kuchli blur 8-bitli ranglarda "banding" hosil qiladi —
 * yorug'lik doira emas, bosqichli to'rtburchak bo'lib ko'rinardi.
 * radial-gradient filtrsiz chiziladi: chekkasi aniq shaffoflikka yetadi,
 * shuning uchun hech qanday chegara ko'rinmaydi.
 */
function SectionGlow({ size = 340, opacity = 0.18, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle closest-side, rgba(167,139,250,${opacity}), rgba(167,139,250,${(opacity * 0.4).toFixed(3)}) 45%, rgba(167,139,250,0) 100%)`,
      }}
    />
  );
}

export default SectionGlow;
