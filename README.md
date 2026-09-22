# Clearion Labs

Lean Astro + Tailwind site for **HOCl (hypochlorous acid) spray OEM / private label and wholesale** (B2B, US English). Temporary brand name.

## Stack

- Astro (static output)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Cloudflare Pages (`wrangler.toml` + optional `functions/api/inquiry.ts`)

## Pages

| Path | Purpose |
|------|---------|
| `/` | Dual CTA home (OEM \| Wholesale) |
| `/oem` | Private label / OEM RFQ |
| `/wholesale` | Wholesale / price list / MOQ |
| `/contact` | Inquiry form (`#inquiry-form`) |
| `/privacy` | Privacy stub + cosmetics disclaimer |
| `/terms` | Terms stub + cosmetics disclaimer |

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# output → dist/
```

## Deploy (Cloudflare Pages)

```bash
npx wrangler login   # if needed
npx wrangler pages deploy dist --project-name=clearion-labs
```

Or connect the GitHub repo in the Cloudflare dashboard (build command `npm run build`, output `dist`).

The optional Pages Function at `functions/api/inquiry.ts` accepts `POST` JSON and returns `200`. The contact form uses `data-inquiry-form`, tries `/api/inquiry`, then falls back to `mailto:` + `localStorage`.

## Compliance

Cosmetics / personal care framing only. No disease treatment claims. No FDA-cleared drug/device wording for these products.

## Follow-ups

- Real brand name & logo
- Replace `inquiries@clearionlabs.example`
- Custom domain
- Wire CRM/email on the inquiry function (secrets via Cloudflare)
