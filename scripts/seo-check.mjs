import fs from "node:fs";
import path from "node:path";

const origin = "https://atsfymarketplace.atsfy.tech";
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const errors = [];
const warnings = [];
const seenUrls = new Set();
const seenCanonicals = new Map();
const seenTitles = new Map();

if (!urls.length) errors.push("sitemap.xml contains no <loc> entries");

for (const url of urls) {
  if (!url.startsWith(origin + "/") && url !== origin + "/") {
    errors.push("Non-canonical sitemap host: " + url);
    continue;
  }
  if (seenUrls.has(url)) errors.push("Duplicate sitemap URL: " + url);
  seenUrls.add(url);

  const pathname = new URL(url).pathname;
  const relative = pathname.endsWith("/") ? pathname + "index.html" : pathname;
  const file = path.join(process.cwd(), relative.replace(/^\//, ""));
  if (!fs.existsSync(file)) {
    errors.push("Sitemap URL has no matching static file: " + url + " -> " + relative);
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i)?.[1]
    ?? html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["'][^>]*>/i)?.[1];
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i)?.[1];
  const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["'][^>]*>/i)?.[1] || "";

  if (!title) errors.push("Missing title: " + relative);
  if (!description) errors.push("Missing meta description: " + relative);
  if (!canonical) errors.push("Missing canonical URL: " + relative);
  if (canonical && canonical !== url) errors.push("Canonical does not match sitemap URL: " + relative + " -> " + canonical);
  if (/noindex/i.test(robots)) errors.push("Noindex page is listed in sitemap: " + relative);

  if (title) {
    const normalized = title.replace(/\s+/g, " ").toLowerCase();
    if (seenTitles.has(normalized)) warnings.push("Duplicate title: " + relative + " and " + seenTitles.get(normalized));
    else seenTitles.set(normalized, relative);
  }
  if (canonical) {
    if (seenCanonicals.has(canonical)) errors.push("Duplicate canonical: " + canonical);
    else seenCanonicals.set(canonical, relative);
  }

  for (const match of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch { errors.push("Invalid JSON-LD: " + relative); }
  }
}

if (errors.length) {
  console.error("SEO validation failed:");
  for (const item of errors) console.error(" - " + item);
  process.exitCode = 1;
} else {
  console.log("SEO validation passed for " + urls.length + " sitemap URLs.");
}
for (const item of warnings) console.warn("WARN: " + item);
