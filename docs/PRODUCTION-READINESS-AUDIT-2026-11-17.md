# ATSFY Marketplace — Production Readiness Audit

**Audit date:** 17 November 2026  
**Repository:** https://github.com/Ayanpal98/atsfy-marketplace  
**Audited branch:** `main`  
**Audited commit:** `644c6c21178cef659ce1889320e585834268f2d5`  
**Vercel project:** `atsfy-marketplace`  
**Production domain:** https://atsfymarketplace.atsfy.tech/

## Executive summary

The repository contains a substantial static catalogue and a separate marketplace-network prototype, plus a Supabase-backed internal employee/revenue admin app and a server-side quote-floor endpoint. Vercel reports the latest production deployment as **READY**, and the custom domain is verified.

**The public marketplace network is not yet a production transactional marketplace.** Its accounts, provider profiles, requirements, membership selection and dashboard values are browser-local/demo state. The UI itself labels secure authentication and billing as a later phase. Publishing this experience as a live marketplace without clear demo labelling risks confusing users and presenting fabricated sample identities, reviews, verification badges and activity figures as real marketplace data.

The audit was performed read-only against the repository and Vercel metadata. No production code, database schema, RLS policy, environment variable, or live deployment was changed.

## Verified findings

### P0 — Public marketplace network is demo-only, not multi-user

**Evidence:** `network/index.html`

- Uses `localStorage` under key `atsfy_network_v1` for all network state.
- Seeds sample providers and requirements (including named businesses/people, ratings, project counts, verified badges, budgets and posted times).
- Sign-in displays “Demo sign-in successful”; no authentication request is made.
- Profile publishing and requirement posting only update browser-local state.
- Provider quote/profile actions and proposal actions only display toast messages.
- Messaging is explicitly deferred to Phase 2.
- Membership selection only changes a local value; the UI explicitly says billing integration is Phase 2.
- Dashboard shows fixed sample metrics (e.g. profile views, leads, percentage change) rather than measured events.

**Impact:** Data is not shared between users/devices and can be edited or cleared by the browser user. Sample provider identities, ratings, verification status, opportunity listings and dashboard figures must not be represented as actual marketplace activity.

**Recommendation:** Keep this clearly labelled as a prototype/demo until authentication, server-persisted profiles, requirements, proposals, messaging, moderation and event-backed metrics are implemented. Replace sample entities with clearly marked demo fixtures or remove them from public production views.

### P0 — Supabase project/RLS access could not be verified

**Evidence:** `admin/app.js` references Supabase project URL `ogkhaomdfrmyqxmhutkd.supabase.co` and uses a publishable browser key. The connected Supabase account's project list did not include this project. A direct project inspection returned a permissions error.

- Admin frontend calls `auth.getUser()` and checks `user.app_metadata.role === 'admin'` before rendering the admin UI.
- Admin CRUD requests are made directly from the browser against `employees`, `products_services`, `monthly_targets`, `employee_tasks`, `sales`, and `revenue_entries`.
- The quote endpoint independently validates the bearer token and the same `app_metadata.role` claim.
- These client-side checks are not a substitute for database RLS.

**Impact:** Actual table grants, RLS enablement, policy predicates, foreign keys, and data exposure could not be confirmed. Do not assume the admin data is secure solely because the UI checks an admin role.

**Recommendation:** Obtain authorized access to the exact Supabase project, inspect all exposed tables and policies, run Supabase security/performance advisors, and test access as anonymous, regular authenticated, and admin users before changing schema or policies. Do not substitute another project.

### P1 — Production security headers are incomplete

**Evidence:** `vercel.json` currently configures rewrites and `X-Robots-Tag` rules, but no general response security headers were found.

**Recommendation:** Evaluate and add appropriate `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and a carefully tested Content Security Policy. A CSP must account for the current inline scripts and third-party CDNs; do not deploy a restrictive policy without testing all pages.

### P1 — External frontend dependencies are not consistently pinned

**Evidence:** `index.html` loads Tailwind from its CDN, Lucide from `unpkg.com/lucide@latest`, and GSAP 3.12.5. `admin/index.html` loads Supabase JS from `@supabase/supabase-js@2`.

**Impact:** Floating CDN versions can change independently of the repository and increase supply-chain and regression risk. Tailwind CDN is also not an optimized production build.

**Recommendation:** Pin exact versions, self-host or bundle critical dependencies where practical, and add a dependency/build process with lockfile and automated checks.

### P1 — Quote validation is fail-closed but has operational gaps to test

**Evidence:** `api/quote-check.js` requires a bearer token, validates it against Supabase Auth, requires the admin app-metadata role, and returns 503 when private price-floor configuration is absent or invalid. Missing item/tier floors remain custom-quote/manual-review only.

**Positive control:** Private price floors are not shipped in the public catalogue and the evaluator does not create a contract, invoice or payment.

**Follow-up tests:** Verify exact production environment-variable configuration without printing secret values; exercise invalid/expired tokens, non-admin tokens, missing floors, malformed JSON, boundary prices, unsupported methods and CORS preflight. Consider rate limiting and request-size limits.

### P2 — Documentation is stale

**Evidence:** `README.md` describes the implementation as a simple HTML/CSS/vanilla-JS static site and lists a much smaller project structure. The current repository includes a network application, admin app, API endpoint, product/service pages, industry pages, SEO automation and quote configuration documentation.

**Recommendation:** Update the README after the architecture and product status are agreed. Document demo vs production capabilities, deployment, environment variables by name (never values), Supabase ownership, and test commands.

### P2 — SEO and content claims need a truth pass

**Evidence:** `index.html` contains JSON-LD listing 14 products/ventures and descriptive capabilities. The catalogue and product pages include multiple statuses and destination URLs.

**Recommendation:** Verify every destination, current product status, feature claim, pricing statement, and structured-data item against the actual product. Keep prototype, in-development, live/beta and available-for-sale states distinct. Reconcile sitemap entries with canonical and noindex rules.

## Architecture inventory

- `index.html`: main ATSFY catalogue and marketing surface.
- `catalog.json`, `pricing.js`, product and service directories: catalogue/pricing content.
- `network/index.html`: localStorage-backed network demo.
- `admin/index.html`, `admin/app.js`: Supabase Auth-backed internal employee/revenue admin UI.
- `admin/quote.html`, `api/quote-check.js`: quote desk and server-side price-floor evaluator.
- `industries/`: industry landing pages.
- `scripts/` and `.github/workflows/`: SEO/search automation.
- `vercel.json`: rewrites and crawler directives.

## Deployment verification

- Vercel project lookup succeeded.
- Latest production deployment ID: `dpl_2endktojFi3AFtGEoGbRVzYRBY4f`.
- Deployment state: `READY`.
- Deployment source: Git, branch `main`, commit `644c6c21178cef659ce1889320e585834268f2d5`.
- `atsfymarketplace.atsfy.tech` is attached and reported verified.
- The Vercel project reports SSO protection enabled for deployments except custom domains. Verify the custom production domain and all admin routes from a logged-out browser.
- A browser-level live smoke test could not be completed in this audit environment. READY confirms build/deployment state, not end-to-end application correctness.

## Test coverage and limitations

- Repository tree and key source files were inspected.
- Vercel project, latest production deployment metadata and custom-domain verification were inspected.
- No repository test/build script or lockfile was visible in the audited root listing.
- No SQL/RLS policy inspection was possible because the Supabase project referenced by the admin app was not available to the connected Supabase account.
- No production writes, database mutations, environment-variable reads, or deployments were performed.

## Recommended remediation order

1. Decide whether the public Network remains a clearly labelled demo or is taken out of transactional claims until production services are ready.
2. Restore authorized access to the exact Supabase project and complete the RLS/security audit.
3. Add baseline security headers and pin/bundle frontend dependencies.
4. Add automated syntax, link, SEO, API and browser smoke tests.
5. Update product/status claims and repository documentation.
6. Only then implement and deploy transactional marketplace features behind a tested staging deployment.
