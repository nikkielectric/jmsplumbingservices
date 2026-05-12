/**
 * Prerender script — runs after `vite build`.
 * For each route, copies dist/index.html into dist/{route}/index.html
 * with the correct <title>, meta description, OG tags, and canonical URL
 * baked in so Google crawls the right content on every page.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "../dist");
const BASE_URL = "https://www.jmsplumbingservicesllc.com";

const ROUTES = [
  {
    path: "about",
    title: "About JMS Plumbing | Family-Owned Plumber in Sunrise, FL",
    description:
      "Meet the team behind JMS Plumbing — licensed, insured & based in Sunrise, FL since 2018. Honest work, upfront pricing, serving all of South Florida.",
  },
  {
    path: "contact",
    title: "Contact JMS Plumbing Services | Sunrise, FL | (954) 910-6883",
    description:
      "Get a free plumbing quote from JMS Plumbing Services. Call (954) 910-6883 or fill out our form. Serving Broward, Miami-Dade & Palm Beach Counties.",
  },
  {
    path: "gallery",
    title: "Work Gallery | JMS Plumbing Services | Sunrise, FL",
    description:
      "See real plumbing work and customer reviews from JMS Plumbing across South Florida. Licensed plumber serving Broward, Miami-Dade & Palm Beach Counties.",
  },
  // Service pages — titles and descriptions match ServicePage.tsx useEffect exactly
  {
    path: "drain-cleaning",
    title: "Drain Cleaning Services in Sunrise, FL | JMS Plumbing",
    description:
      "Professional drain cleaning in Broward, Miami-Dade & Palm Beach Counties. Clogs, hydro flushing & drain pump outs cleared fast. Call JMS Plumbing at (954) 910-6883.",
  },
  {
    path: "gas-line-services",
    title: "Gas Line Installation & Repair in Sunrise, FL | JMS Plumbing",
    description:
      "Licensed gas line installation, repair & leak detection in South Florida. Safety-certified technicians, upfront pricing. Call JMS Plumbing at (954) 910-6883.",
  },
  {
    path: "plumbing-repairs",
    title: "Plumbing Repairs & Replacements | JMS Plumbing Sunrise, FL",
    description:
      "Expert plumbing repairs in Broward, Miami-Dade & Palm Beach Counties. Leak detection, pipe repair & fixture replacement with upfront pricing. Call JMS Plumbing at (954) 910-6883.",
  },
  {
    path: "plumbing-remodels",
    title: "Plumbing Remodel Services | JMS Plumbing | Sunrise, FL",
    description:
      "Full bathroom & kitchen plumbing remodels across South Florida. Shower pans, valves, fixture installs & complete gut remodels. Call JMS Plumbing at (954) 910-6883.",
  },
  {
    path: "backflow-prevention",
    title: "Backflow Prevention Testing & Repair | JMS Plumbing FL",
    description:
      "Certified backflow prevention testing, installation & repair in Broward County. Annual inspections, code-compliant & documented. Call JMS Plumbing at (954) 910-6883.",
  },
  {
    path: "emergency-plumbing",
    title: "24/7 Emergency Plumber in Sunrise, FL | JMS Plumbing",
    description:
      "Emergency plumbing 24/7 across South Florida. Burst pipes, gas leaks & flooding — fast response, upfront pricing. Call JMS Plumbing at (954) 910-6883 now.",
  },
  {
    path: "water-heaters",
    title: "Water Heater Repair & Replacement | JMS Plumbing Sunrise, FL",
    description:
      "Water heater repair, replacement & installation in South Florida. Tankless, gas, electric & hybrid models. Same-day service available. Call JMS Plumbing at (954) 910-6883.",
  },
  {
    path: "septic-leach-fields",
    title: "Septic & Leach Field Services | JMS Plumbing Sunrise, FL",
    description:
      "Licensed septic system repair & leach field services in South Florida. Inspections, pump outs & repairs available. Call JMS Plumbing Services at (954) 910-6883.",
  },
  {
    path: "toilet-faucet-pipe-repairs",
    title: "Toilet, Faucet & Pipe Repairs | JMS Plumbing Sunrise, FL",
    description:
      "Fix running toilets, dripping faucets & leaking pipes in South Florida. Fast, affordable service from JMS Plumbing. Call (954) 910-6883 today.",
  },
];

function injectMeta(html, { path: routePath, title, description }) {
  const url = `${BASE_URL}/${routePath}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${title}$2`
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${url}$2`
    )
    .replace(
      /(<meta name="twitter:title" content=")[^"]*(")/,
      `$1${title}$2`
    )
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(")/,
      `$1${description}$2`
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${url}$2`
    );
}

const baseHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

let count = 0;
for (const route of ROUTES) {
  const html = injectMeta(baseHtml, route);
  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  console.log(`  ✓ /${route.path}`);
  count++;
}

console.log(`\nPrerendering complete — ${count} pages generated.\n`);
