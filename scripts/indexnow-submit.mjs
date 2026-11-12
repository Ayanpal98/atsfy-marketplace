import { execFileSync } from "node:child_process";
import fs from "node:fs";

const [base, head] = process.argv.slice(2);
if (!base || !head) throw new Error("Usage: node scripts/indexnow-submit.mjs <base-sha> <head-sha>");

const keyFile = fs.readdirSync(".").find((name) => /^atsfy-[a-f0-9]{32}\.txt$/i.test(name));
if (!keyFile) throw new Error("IndexNow key file not found at repository root.");
const key = fs.readFileSync(keyFile, "utf8").trim();
if (key !== keyFile.slice(0, -4)) throw new Error("IndexNow key file content does not match its filename.");

const diff = execFileSync("git", ["diff", "--name-status", base, head, "--", "*.html"], { encoding: "utf8" });
const urls = new Set();
for (const line of diff.split(/\r?\n/).filter(Boolean)) {
  const [status, ...parts] = line.split("\t");
  const file = status.startsWith("R") ? parts[1] : parts[0];
  if (!file || file.includes("lexora") || file.startsWith("admin/") || file.startsWith("network/")) continue;
  if (file === "index.html") urls.add("https://atsfymarketplace.atsfy.tech/");
  else if (/^(products|services|industries)\/[^/]+\/index\.html$/.test(file)) {
    urls.add("https://atsfymarketplace.atsfy.tech/" + file.replace(/index\.html$/, ""));
  } else if (/^(products|services|industries)\/index\.html$/.test(file)) {
    urls.add("https://atsfymarketplace.atsfy.tech/" + file.replace(/index\.html$/, ""));
  }
}

const urlList = [...urls];
if (!urlList.length) {
  console.log("No public SEO landing pages changed; IndexNow submission skipped.");
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "atsfymarketplace.atsfy.tech",
    key,
    keyLocation: "https://atsfymarketplace.atsfy.tech/" + keyFile,
    urlList
  })
});
if (![200, 202].includes(response.status)) {
  const detail = await response.text();
  throw new Error("IndexNow rejected submission (" + response.status + "): " + detail);
}
console.log("IndexNow accepted " + urlList.length + " changed URL(s). HTTP " + response.status);
console.log(urlList.join("\n"));
