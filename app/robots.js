const SITE_URL = "https://iosdev.uz";

export const dynamic = "force-static";

export default function robots() {
  return {
    // JS/CSS bloklanmaydi — Googlebot sahifani to'liq render qila olishi shart
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
