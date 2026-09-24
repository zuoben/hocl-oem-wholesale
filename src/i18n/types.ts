export type FaqItem = { title: string; description: string };
export type Card = { t: string; d: string; href?: string };
export type Step = { n: string; title: string; text: string };
export type TrustItem = { label: string; hint: string };

export type ProductItemCopy = {
  name: string;
  tagline: string;
  formats: string[];
  bullets: string[];
};

export type ProductsUi = {
  heroBadge: string;
  sideBadge: string;
  formatsLabel: string;
  ctaNote: string;
  ctaButton: string;
  defaultTitle: string;
  defaultTagline: string;
  introAll: string;
  introHero: string;
  introSide: string;
  items: Record<string, ProductItemCopy>;
};

export type FormCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  name: string;
  namePh: string;
  email: string;
  emailPh: string;
  company: string;
  companyPh: string;
  buyerType: string;
  select: string;
  buyerOem: string;
  buyerWholesale: string;
  buyerBoth: string;
  buyerSalon: string;
  buyerRetailer: string;
  buyerDistributor: string;
  productInterest: string;
  productHocl: string;
  productPackaging: string;
  productSide: string;
  productOther: string;
  quantity: string;
  quantityPh: string;
  country: string;
  countryPh: string;
  message: string;
  messagePh: string;
  consent: string;
  submit: string;
  successOk: string;
  successFallback: string;
  error: string;
};

export type HomeCopy = {
  title: string;
  description: string;
  badge: string;
  h1a: string;
  h1b: string;
  lead: string;
  ctaOem: string;
  ctaWholesale: string;
  orRfq: string;
  funnelKicker: string;
  funnelTitle: string;
  oemBadge: string;
  oemTitle: string;
  oemBody: string;
  oemLink: string;
  wholesaleBadge: string;
  wholesaleTitle: string;
  wholesaleBody: string;
  wholesaleLink: string;
  productsTitle: string;
  productsTagline: string;
  inquiryKicker: string;
  inquiryItems: string[];
  inquiryNote: string;
  inquiryCta: string;
  faqTitle: string;
  faqItems: FaqItem[];
  formTitle: string;
};

export type OemCopy = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lead: string;
  ctaQuote: string;
  ctaWholesale: string;
  specifyTitle: string;
  cards: Card[];
  processTitle: string;
  steps: Step[];
  productsTitle: string;
  productsTagline: string;
  productsIntro: string;
  faqTitle: string;
  faqItems: FaqItem[];
  formTitle: string;
};

export type WholesaleCopy = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lead: string;
  ctaPrice: string;
  ctaOem: string;
  highlightsTitle: string;
  cards: Card[];
  channelTitle: string;
  channelBody: string;
  channelItems: string[];
  productsTitle: string;
  productsTagline: string;
  productsIntro: string;
  faqTitle: string;
  faqItems: FaqItem[];
  formTitle: string;
};

export type ContactCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  pills: string[];
  goForm: string;
  cards: Card[];
  learnMore: string;
  faqTitle: string;
  faqItems: FaqItem[];
};

export type LegalCopy = {
  title: string;
  description: string;
  h1: string;
  updated: string;
  paragraphs: string[];
  disclaimerTitle: string;
  disclaimerBody: string;
};

export type UiCopy = {
  brand: string;
  home: string;
  oem: string;
  wholesale: string;
  contact: string;
  requestQuote: string;
  programs: string;
  legal: string;
  privacy: string;
  terms: string;
  blurb: string;
  disclaimerTitle: string;
  disclaimerBody: string;
  copyright: string;
};

export type LocaleDictionary = {
  ui: UiCopy;
  form: FormCopy;
  trust: TrustItem[];
  products: ProductsUi;
  home: HomeCopy;
  oem: OemCopy;
  wholesale: WholesaleCopy;
  contact: ContactCopy;
  privacy: LegalCopy;
  terms: LegalCopy;
};
