import { format } from 'date-fns';

const newsSlugs = ["new-budget-2025", "elections-highlights", "sports-victory"];
const storySlugs = ["dancing-dog-trends", "miracle-kid-story"];

export async function GET() {
  const baseUrl = 'https://top5shots.com';

  const staticRoutes = [
    "",
    "news",
    "viral-stories",
    "results",
    "match-score",
    "contest",
    "login",
    "signup",
  ];

  const dynamicRoutes = [
    ...newsSlugs.map((slug) => `news/${slug}`),
    ...storySlugs.map((slug) => `viral-stories/${slug}`),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX")}</lastmod>
      <priority>${route === "" ? "1.00" : "0.80"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
