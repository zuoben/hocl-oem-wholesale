/**
 * /llms.txt — LLM-oriented site guide (https://llmstxt.org/)
 */
import { tagSiteLinksForLlm } from '../utils/llm-urls';

export const prerender = true;

const BODY = `# Clearion Labs

> B2B OEM / private-label and wholesale partner for cosmetics-grade hypochlorous acid (HOCl) facial spray. Site: https://hocl.tradeglo.net/

Clearion Labs supplies HOCl facial mist programs for salons, retailers, distributors, and brand builders — not consumer checkout. Cosmetics / personal care framing only; no disease-treatment claims.

## Core pages

- [Home](https://hocl.tradeglo.net/): Dual OEM + wholesale overview and RFQ
- [OEM / Private Label](https://hocl.tradeglo.net/oem): Branded HOCl spray packaging, fill, and sampling
- [Wholesale](https://hocl.tradeglo.net/wholesale): Bulk spray supply and price-list requests
- [Contact](https://hocl.tradeglo.net/contact): Structured RFQ / inquiry form

## Company

- [About](https://hocl.tradeglo.net/about): Who Clearion Labs is and who we serve
- [FAQ](https://hocl.tradeglo.net/faq): Buyer FAQ for OEM and wholesale

## Legal

- [Privacy](https://hocl.tradeglo.net/privacy)
- [Terms](https://hocl.tradeglo.net/terms)
- [Sitemap](https://hocl.tradeglo.net/sitemap-index.xml)
`;

export const GET = async () => {
  const body = tagSiteLinksForLlm(BODY.replace(/^\uFEFF/, '').trimStart()) + '\n';

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
