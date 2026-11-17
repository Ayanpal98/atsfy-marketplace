#!/usr/bin/env node
/**
 * Validate the static SEO surface of ATSFY Marketplace.
 * Run from the repository root: node scripts/validate-seo.mjs
 * No third-party dependencies are required.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];
const read = (file) => readFileSync(join(root, file), "utf8");
const normalize = (value) => value.replace(/\/$/, "") || "/";
const sitemap = read("sitemap.xml");
const robots = read("robots.txt");
const llms = read("llms.txt");
const urls = [...sitemap.matchAll(/<loc>\s*(https?:\/\/[^<]+)\s*<\/loc>/gi)].map((m) => m[1].trim());

if (!urls.length) errors.push("sitemap.xml contains no <loc> URLs.");
if (!robots.includes("https://atsfymarketplace.atsfy.tech/sitemap.xml")) {
  errors.push("robots.txt does not reference the canonical sitemap.");
}
if (!llms.includes("https://atsfymarketplace.atsfy.tech/answers/")) {
  errors.push("llms.txt does not reference the FAQ / answers page.");
}
if (!llms.includes("https://atsfymarketplace.atsfy.tech/catalog.json")) {
  errors.push("llms.txt does not reference catalog.json.");
}

const seen = new Set();
for (const url of urls) {
  if (seen.has(url)) {
    errors.push(`Duplicate sitemap URL: ${url}`);
    continue;
  }
  seen.add(url);

  let pathname;
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "atsfymarketplace.atsfy.tech") {
      errors.push(`Unexpected sitemap host: ${url}`);
    }
    pathname = decodeURIComponent(parsed.pathname);
  } catch {
    errors.push(`Invalid sitemap URL: ${url}`);
    continue;
  }

  const relative = pathname === "/"
    ? "index.html"
    : pathname.endsWith("/")
      ? join(pathname.slice(1), "index.html")
      : pathname.slice(1);
  const file = join(root, relative);
  if (!existsSync(file)) {
    errors.push(`Sitemap URL has no matching static file: ${url} -> ${relative}`);
    continue;
  }

  const html = read(relative);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i)?.[1]?.trim();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i)?.[1]?.trim();

  if (!title) errors.push(`Missing title: ${relative}`);
  if (!description) errors.push(`Missing meta description: ${relative}`);
  if (!canonical) errors.push(`Missing canonical URL: ${relative}`);
  if (title && title.length > 70) warnings.push(`Long title (${title.length} chars): ${relative}`);
  if (description && description.length > 170) warnings.push(`Long description (${description.length} chars): ${relative}`);
  if (canonical && normalize(new URL(canonical).pathname) !== normalize(pathname)) {
    errors.push(`Canonical does not match sitemap URL: ${relative}`);
  }

  const jsonLdBlocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [index, block] of jsonLdBlocks.entries()) {
    try {
      JSON.parse(block[1].trim());
    } catch (error) {
      errors.push(`Invalid JSON-LD block ${index + 1} in ${relative}: ${error.message}`);
    }
  }
}

if (!seen.has("https://atsfymarketplace.atsfy.tech/answers/")) {
  errors.push("The FAQ / answers page is missing from sitemap.xml.");
}

console.log(`Checked ${urls.length} sitemap URLs.`);
console.log(`Parsed JSON-LD on all sitemap pages where present.`);
for (const warning of warnings) console.warn("WARN:", warning);
if (errors.length) {
  for (const error of errors) console.error("ERROR:", error);
  process.exitCode = 1;
} else {
  console.log("SEO validation passed.");
}
