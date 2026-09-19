// @flow strict
import SkillIcon from "../homepage/skills/skill-icon";

/**
 * Sayt bo'ylab bir xil ko'rinadigan texnologiya "chip"i.
 * Hero badge'lari, stack guruhlari, iOS/Flutter panellari va
 * "Currently" bo'limi shu komponentdan foydalanadi.
 */
function TechChip({ label, withIcon = true, size = "md", accent = false }) {
  const sizing =
    size === "sm"
      ? "gap-1.5 px-2.5 py-1 text-[11px]"
      : "gap-2 px-3 py-1.5 text-xs sm:text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-colors duration-300 ${sizing} ${
        accent
          ? "border-[#16f2b3]/40 bg-[#16f2b3]/10 text-[#16f2b3] hover:border-[#16f2b3]/70"
          : "border-[#1b2c68a0] bg-[#11152c] text-gray-200 hover:border-violet-500 hover:text-white"
      }`}
    >
      {withIcon ? (
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
          <SkillIcon skill={label} size={size === "sm" ? 14 : 16} />
        </span>
      ) : null}
      {label}
    </span>
  );
}

export default TechChip;
