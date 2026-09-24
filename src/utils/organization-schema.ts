import { getSiteUrl } from './site-url';

export const ORGANIZATION_ID = `${getSiteUrl()}/#organization`;
export const BRAND_NAME = 'Clearion Labs';

export function buildOrganizationSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    alternateName: ['Clearion Labs HOCl', 'HOCl OEM Clearion', 'hocl.tradeglo.net'],
    url: `${siteUrl}/`,
    logo: `${siteUrl}/favicon.svg`,
    description:
      'Clearion Labs is a B2B OEM / private-label and wholesale partner for cosmetics-grade hypochlorous acid (HOCl) facial spray and supporting skincare assortment SKUs for salons, retailers, and distributors.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Private label hypochlorous acid spray',
      'HOCl manufacturer OEM',
      'Wholesale HOCl spray',
      'Private label skincare',
      'Cosmetics-grade facial mist',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: `${siteUrl}/contact`,
        availableLanguage: ['English', 'Chinese'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function buildManufacturingPlantSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/about/#location`,
    name: BRAND_NAME,
    url: `${siteUrl}/about`,
    parentOrganization: { '@id': ORGANIZATION_ID },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
    },
    description:
      'Partner manufacturing for cosmetics-grade HOCl facial mist OEM / private label and wholesale spray programs — cosmetics / personal care framing only.',
    areaServed: 'Worldwide',
    knowsAbout: [
      'HOCl facial mist filling',
      'Private label cosmetics packaging',
      'Wholesale spray formats',
    ],
  };
}

export function buildAboutPageSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${siteUrl}/about/#webpage`,
    url: `${siteUrl}/about`,
    name: 'About Clearion Labs — HOCl OEM & Wholesale',
    description:
      'Clearion Labs helps brands and channel partners launch cosmetics-grade HOCl facial spray via OEM private label and wholesale supply.',
    isPartOf: { '@type': 'WebSite', url: `${siteUrl}/` },
    about: { '@id': ORGANIZATION_ID },
  };
}

export function buildContactPageSchema() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/contact/#webpage`,
    url: `${siteUrl}/contact`,
    name: 'Contact Clearion Labs',
    description:
      'Request HOCl spray OEM / private label quotes, wholesale price lists, and samples from Clearion Labs.',
    isPartOf: { '@type': 'WebSite', url: `${siteUrl}/` },
    mainEntity: { '@id': ORGANIZATION_ID },
  };
}

export function buildWebsiteSchema(description: string, inLanguage = 'en') {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND_NAME,
    url: `${siteUrl}/`,
    description,
    inLanguage,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function buildFaqPageSchema(items: { title: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ title, description }) => ({
      '@type': 'Question',
      name: title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: description.replace(/<[^>]+>/g, ''),
      },
    })),
  };
}
