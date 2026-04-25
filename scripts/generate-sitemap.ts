import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const SITE_URL = "https://jmsplumbingservices.com";

const staticRoutes: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/gallery", changefreq: "weekly", priority: "0.7" },
];

export function generateSitemap(): string {
  // Extract slugs from servicePages.ts as the single source of truth
  const servicePagesSrc = readFileSync(
    resolve(process.cwd(), "src/data/servicePages.ts"),
    "utf-8"
  );
  const slugMatches = [...servicePagesSrc.matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)];
  const serviceSlugs = slugMatches.map((m) => m[1]);

  const allRoutes = [
    ...staticRoutes,
    ...serviceSlugs.map((slug) => ({
      path: `/${slug}`,
      changefreq: "monthly",
      priority: "0.9",
    })),
  ];

  const urls = allRoutes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function writeSitemap() {
  const xml = generateSitemap();
  const outPath = resolve(process.cwd(), "public/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  return { outPath, count: (xml.match(/<url>/g) || []).length };
}

// Allow running directly: `bun scripts/generate-sitemap.ts`
if (import.meta.url === `file://${process.argv[1]}`) {
  const { outPath, count } = writeSitemap();
  console.log(`✓ Sitemap written: ${outPath} (${count} URLs)`);
}
