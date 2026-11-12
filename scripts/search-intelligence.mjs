import fs from "node:fs";
import crypto from "node:crypto";
const ORIGIN = "https://atsfymarketplace.atsfy.tech";
const SITE_URL = ORIGIN + "/";
const OUTPUT_DIR = "reports/search-intelligence";
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
const report = {
  generatedAt: new Date().toISOString(), property: SITE_URL, period: {},
  googleSearchConsole: { connected: false }, urlInspection: [],
  chromeUx: { connected: false },
  bing: { connected: false, note: "Verify the property in Bing Webmaster Tools and review its Search Performance and Chat source reports.", portal: "https://www.bing.com/webmasters/" },
  limitations: [
    "Search Console reports measured Google search data; it does not prove rankings for every query.",
    "URL Inspection is a sampled page-level inspection, not a full-site indexing guarantee.",
    "CrUX data is field data and may be unavailable for low-traffic origins or individual URLs.",
    "AI citations across assistants are not comprehensively exposed through a single public API."
  ]
};
function b64url(value) { return Buffer.from(value).toString("base64url"); }
async function getGoogleAccessToken(account) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" })) + "." +
    b64url(JSON.stringify({ iss: account.client_email, scope: "https://www.googleapis.com/auth/webmasters.readonly", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 }));
  const signer = crypto.createSign("RSA-SHA256"); signer.update(unsigned); signer.end();
  const assertion = unsigned + "." + signer.sign(account.private_key).toString("base64url");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion })
  });
  if (!response.ok) throw new Error("Google OAuth failed: HTTP " + response.status + " " + (await response.text()).slice(0, 400));
  return (await response.json()).access_token;
}
async function googlePost(url, token, body) {
  const response = await fetch(url, { method: "POST", headers: { authorization: "Bearer " + token, "content-type": "application/json" }, body: JSON.stringify(body) });
  const raw = await response.text();
  if (!response.ok) throw new Error("Google API failed: HTTP " + response.status + " " + raw.slice(0, 500));
  return raw ? JSON.parse(raw) : {};
}
function dateAgo(days) { const d = new Date(); d.setUTCDate(d.getUTCDate() - days); return d.toISOString().slice(0, 10); }
function sitemapUrls() {
  const xml = fs.readFileSync("sitemap.xml", "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}
function buildMarkdown(d) {
  const out = ["# ATSFY Marketplace — Search intelligence", "", "- Generated: " + d.generatedAt, "- Property: " + d.property,
    "- Period: " + (d.period.startDate || "—") + " to " + (d.period.endDate || "—"), "", "## Google Search Console", ""];
  if (!d.googleSearchConsole.connected) out.push(d.googleSearchConsole.note || d.googleSearchConsole.error || "Not connected. Configure GSC_SERVICE_ACCOUNT_JSON.");
  else {
    const t = d.googleSearchConsole.totals;
    out.push("| Metric | Value |", "|---|---:|", "| Clicks | " + t.clicks + " |", "| Impressions | " + t.impressions + " |",
      "| CTR | " + (t.ctr * 100).toFixed(2) + "% |", "| Average position | " + t.position.toFixed(2) + " |", "",
      "### Top queries", "", "| Query | Clicks | Impressions | CTR | Position |", "|---|---:|---:|---:|---:|");
    for (const r of d.googleSearchConsole.topQueries) out.push("| " + r.keys[0].replace(/\|/g, "\\|") + " | " + r.clicks + " | " + r.impressions + " | " + (r.ctr * 100).toFixed(2) + "% | " + r.position.toFixed(1) + " |");
    out.push("", "### Top landing pages", "", "| Page | Clicks | Impressions | CTR | Position |", "|---|---:|---:|---:|---:|");
    for (const r of d.googleSearchConsole.topPages) out.push("| [" + r.keys[0] + "](" + r.keys[0] + ") | " + r.clicks + " | " + r.impressions + " | " + (r.ctr * 100).toFixed(2) + "% | " + r.position.toFixed(1) + " |");
  }
  out.push("", "## URL inspection sample", "", "| URL | Verdict | Coverage | Last crawl |", "|---|---|---|---|");
  for (const r of d.urlInspection) out.push("| " + r.url + " | " + (r.verdict || r.error || "—") + " | " + (r.coverageState || "—") + " | " + (r.lastCrawlTime || "—") + " |");
  out.push("", "## Core Web Vitals — Chrome UX Report", "");
  if (!d.chromeUx.connected) out.push(d.chromeUx.note || d.chromeUx.error || "Not connected.");
  else {
    out.push("| Metric | P75 |", "|---|---:|");
    for (const [k,v] of Object.entries(d.chromeUx.metrics)) out.push("| " + k + " | " + v + " |");
  }
  out.push("", "## Bing Webmaster Tools", "", "Portal: " + d.bing.portal, "", d.bing.note, "",
    "## AI-search visibility", "", "No universal public API provides complete citations across AI assistants. Track a fixed prompt set manually, recording platform, prompt, date, cited URL and citation presence. Bing Chat source performance is a separate useful signal.", "",
    "## Limitations", "");
  for (const note of d.limitations) out.push("- " + note);
  return out.join("\n") + "\n";
}
if (!process.env.GSC_SERVICE_ACCOUNT_JSON) {
  report.googleSearchConsole.note = "Missing GSC_SERVICE_ACCOUNT_JSON. Add a service-account JSON secret and grant its email read access to the Search Console property.";
  report.period = { startDate: dateAgo(31), endDate: dateAgo(3) };
} else {
  try {
    const account = JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
    const token = await getGoogleAccessToken(account);
    const startDate = dateAgo(31), endDate = dateAgo(3);
    report.period = { startDate, endDate };
    const endpoint = "https://www.googleapis.com/webmasters/v3/sites/" + encodeURIComponent(SITE_URL) + "/searchAnalytics/query";
    const [totals, queries, pages] = await Promise.all([
      googlePost(endpoint, token, { startDate, endDate, type: "web", dataState: "final", rowLimit: 1 }),
      googlePost(endpoint, token, { startDate, endDate, type: "web", dataState: "final", dimensions: ["query"], rowLimit: 100 }),
      googlePost(endpoint, token, { startDate, endDate, type: "web", dataState: "final", dimensions: ["page"], rowLimit: 100 })
    ]);
    const rows = totals.rows || [];
    const t = rows.reduce((a,r) => { a.clicks += r.clicks || 0; a.impressions += r.impressions || 0; a.ctr += (r.ctr || 0) * (r.impressions || 0); a.position += (r.position || 0) * (r.impressions || 0); return a; }, { clicks:0, impressions:0, ctr:0, position:0 });
    report.googleSearchConsole = { connected: true, totals: { clicks:t.clicks, impressions:t.impressions, ctr:t.impressions ? t.ctr/t.impressions : 0, position:t.impressions ? t.position/t.impressions : 0 }, topQueries:queries.rows || [], topPages:pages.rows || [] };
    for (const url of sitemapUrls().slice(0,8)) {
      try {
        const r = await googlePost("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", token, { inspectionUrl:url, siteUrl:SITE_URL, languageCode:"en-US" });
        const i = r.inspectionResult?.indexStatusResult || {};
        report.urlInspection.push({ url, verdict:i.verdict, coverageState:i.coverageState, robotsTxtState:i.robotsTxtState, indexingState:i.indexingState, lastCrawlTime:i.lastCrawlTime });
      } catch (e) { report.urlInspection.push({ url, error:e.message }); }
    }
  } catch (e) { report.googleSearchConsole = { connected:false, error:e.message }; }
}
if (process.env.CRUX_API_KEY) {
  try {
    const response = await fetch("https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=" + encodeURIComponent(process.env.CRUX_API_KEY), {
      method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify({ origin:ORIGIN, formFactor:"PHONE" })
    });
    const raw = await response.text();
    if (!response.ok) throw new Error("CrUX HTTP " + response.status + " " + raw.slice(0,400));
    const body = JSON.parse(raw), metrics = body.record?.metrics || {};
    report.chromeUx = { connected:true, collectionPeriod:body.record?.collectionPeriod, metrics:Object.fromEntries(Object.entries(metrics).map(([k,v]) => [k, v.percentiles?.p75 ?? null])) };
  } catch (e) { report.chromeUx = { connected:false, error:e.message, note:"CrUX query did not return usable field data." }; }
} else report.chromeUx.note = "Missing CRUX_API_KEY. Add a restricted Chrome UX Report API key to collect field data.";
fs.writeFileSync(OUTPUT_DIR + "/report.json", JSON.stringify(report,null,2) + "\n");
fs.writeFileSync(OUTPUT_DIR + "/report.md", buildMarkdown(report));
console.log("Search intelligence report written. GSC=" + report.googleSearchConsole.connected + "; CrUX=" + report.chromeUx.connected);
