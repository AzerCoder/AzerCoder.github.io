"use client";

import { usePathname } from "next/navigation";
import { getDictionary } from "@/utils/i18n";

// URL'dan joriy tilni aniqlaydi: /uz -> "uz", qolgani -> "en"
export function useLocale() {
  const pathname = usePathname() || "/";
  const locale = pathname === "/uz" || pathname.startsWith("/uz/") ? "uz" : "en";
  return { locale, t: getDictionary(locale) };
}
