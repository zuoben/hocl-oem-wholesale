# HOCl OEM & Wholesale (Clearion Labs)

Lean Astro + Tailwind B2B site for **HOCl (hypochlorous acid) spray OEM / private label and wholesale** (US English).

- **Repo / Worker name:** `hocl-oem-wholesale`
- **Brand (copy):** Clearion Labs (temporary)

## Stack

- Astro (static output)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Cloudflare Workers static assets (`wrangler.toml`)

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

## Deploy (Cloudflare Workers)

```bash
# CLOUDFLARE_API_TOKEN or `npx wrangler login`
npm run deploy
# equivalent: npm run build && npx wrangler deploy
```

Worker name: `hocl-oem-wholesale` (see `wrangler.toml`).

## Notes

- Cosmetics / personal care only — no disease treatment claims, no FDA-cleared drug/device wording.
- Replace `inquiries@clearionlabs.example` before go-live.
- Form posts to `/api/inquiry` (Pages/Workers Function) with mailto + localStorage fallback.
