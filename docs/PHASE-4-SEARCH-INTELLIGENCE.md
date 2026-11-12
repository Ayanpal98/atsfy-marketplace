# Phase 4 — Search intelligence setup

The weekly workflow creates JSON and Markdown reports as private GitHub Actions artifacts. It does not publish search analytics to the public marketplace.

## Google Search Console

1. Verify https://atsfymarketplace.atsfy.tech/ as a URL-prefix property.
2. Enable the Search Console API in Google Cloud and create a service account.
3. Grant the service-account email read access to the Search Console property.
4. Add the complete service-account JSON as the GitHub Actions repository secret GSC_SERVICE_ACCOUNT_JSON.
5. Run the Marketplace search intelligence report workflow manually.

The report queries the last 28 complete days (ending three days before the run), retrieves query and landing-page performance, and inspects up to eight sitemap URLs. Google API quotas apply.

Official references:
- https://developers.google.com/webmaster-tools/v1/api_reference_index
- https://developers.google.com/webmaster-tools/limits

## Chrome UX Report

1. Enable the Chrome UX Report API in a Google Cloud project.
2. Create an API key restricted to the Chrome UX Report API.
3. Add it as the GitHub Actions repository secret CRUX_API_KEY.

The report requests phone-form-factor origin field data. CrUX may return no record when an origin lacks sufficient eligible traffic.

## Bing Webmaster Tools

1. Add and verify https://atsfymarketplace.atsfy.tech/ in Bing Webmaster Tools.
2. Confirm the sitemap is submitted and inspect IndexNow submission activity.
3. Review Search Performance, including Web and Chat source metrics, query/page performance, crawl errors and indexed pages.
4. Export a CSV from the portal for historical comparison if needed.

Portal: https://www.bing.com/webmasters/

## AI search / RAG visibility

There is no reliable universal public API that returns citations from every AI assistant. The report does not fabricate AI citation counts. Maintain a fixed prompt set and record platform, prompt, date, cited URL and citation presence. Bing's Chat source metrics are a separately measured signal.

## Security

- Keep service-account JSON and API keys in GitHub Actions secrets only.
- Never commit credentials or publish generated reports to the public marketplace.
- The report is stored as a private GitHub Actions artifact for 90 days.
