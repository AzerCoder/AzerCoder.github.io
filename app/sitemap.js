const SITE_URL = "https://iosdev.uz";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          uz: `${SITE_URL}/uz`,
        },
      },
    },
    {
      url: `${SITE_URL}/uz`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          uz: `${SITE_URL}/uz`,
        },
      },
    },
  ];
}
