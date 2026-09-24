export type ProductRole = 'hero' | 'side';

export interface Product {
  id: string;
  name: string;
  role: ProductRole;
  tagline: string;
  formats: string[];
  bullets: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 'hocl-facial-mist',
    name: 'HOCl Facial Mist',
    role: 'hero',
    tagline: 'Daily facial cleansing mist for cosmetics channels',
    formats: [
      'Retail spray ~60–120 ml',
      'Travel / mini card spray ~20 ml',
    ],
    bullets: [
      'Cosmetics-grade hypochlorous acid facial mist — refreshing, lightweight skin-care spray',
      'OEM / private label artwork & packaging options',
      'Wholesale-ready spray formats for salon and retail shelves',
      'Discuss concentration & pH as disclosed specs on RFQ',
    ],
    image: '/products/hocl-spray.svg',
  },
  {
    id: 'pdrn-peptide-serum',
    name: 'PDRN + Peptide Serum',
    role: 'side',
    tagline: 'Hydrating serum for assortment planning',
    formats: [
      'Pump bottle ~30 ml',
      'Optional ampoule sampling ~1.5–2 ml',
    ],
    bullets: [
      'Facial serum with PDRN and peptide ingredients in cosmetic framing',
      'Pump bottle suited to retail and DTC shelves',
      'Ampoule format available to discuss for sampling or travel kits',
    ],
    image: '/products/pdrn-serum.svg',
  },
  {
    id: 'jelly-cream',
    name: 'Jelly Cream',
    role: 'side',
    tagline: 'Fresh water-gel cream texture',
    formats: ['Water-gel cream jar ~50 g'],
    bullets: [
      'Light jelly / water-gel cream feel for moisturizing skin care',
      'Jar format commonly discussed with OEM partners',
      'Private-label artwork available on RFQ',
    ],
    image: '/products/jelly-cream.svg',
  },
  {
    id: 'milk-toner',
    name: 'Milk Toner / Milky Lotion',
    role: 'side',
    tagline: 'Soft milky hydration formats',
    formats: [
      'Essence-water / toner ~30 ml',
      'Milky lotion ~100 ml',
    ],
    bullets: [
      'Milky toner and lotion formats for a soft hydration story',
      'Two fill sizes commonly discussed with OEM partners',
      'Suitable as a supporting SKU alongside the HOCl hero mist',
    ],
    image: '/products/milk-toner.svg',
  },
];

export const heroProducts = products.filter((p) => p.role === 'hero');
export const sideProducts = products.filter((p) => p.role === 'side');
