# Private quote-floor configuration

The quote desk is at `/admin/quote.html`; API: `POST /api/quote-check`.

## Required Vercel environment variable

Add `ATSFY_PRICE_FLOORS_JSON` as an **Encrypted** (or Sensitive) environment variable for **Production** only. Never put this JSON in `pricing.js`, `catalog.json`, HTML, GitHub Actions logs, or a public file.

Example shape (illustrative values only — DO NOT use these example amounts as ATSFY's real prices):

```json
{
  "website-development:starter": {
    "active": true,
    "listPrice": 25000,
    "minimumPrice": 18000,
    "deliveryCost": 12000,
    "thirdPartyCost": 1500
  },
  "whatsapp-automation:starter": {
    "active": true,
    "listPrice": 25000,
    "minimumPrice": 20000,
    "deliveryCost": 14000,
    "thirdPartyCost": 2000
  }
}
```

For each key, set `listPrice` to the exact public tier price, `minimumPrice` to management's approved minimum, `deliveryCost` to estimated direct delivery cost, and `thirdPartyCost` to unavoidable third-party cost. The evaluator uses the higher of `minimumPrice` and `deliveryCost + thirdPartyCost`. All amounts are INR. Use keys in the form `catalogue-id:tier-slug`.

No floor is active merely because a public catalogue price exists. Missing keys fail closed and remain custom-quote / management-review only. Do not use the illustrative values above.

## Authentication

The API validates the bearer token against Supabase Auth and requires `app_metadata.role === "admin"`, matching the existing ATSFY Admin access rule. Do not use user-editable `user_metadata` for authorization.

After changing the Vercel environment variable, redeploy Production for the function to receive it. Start with a small approved set of service tiers; add products and custom-quote offers only after their actual delivery costs and renewal obligations are known.

## Current limitations

The quote check does not create a contract, invoice, payment, or customer record. It does not automatically discount a proposal. A passing check still requires a written scope, schedule, tax treatment, third-party charges, and payment milestones.
