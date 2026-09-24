import type { LocaleDictionary } from '../types';

const en: LocaleDictionary = {
  ui: {
    brand: 'Clearion Labs',
    home: 'Home',
    oem: 'OEM / Private Label',
    wholesale: 'Wholesale',
    contact: 'Contact',
    requestQuote: 'Request Quote',
    programs: 'Programs',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    blurb:
      'HOCl (hypochlorous acid) facial spray OEM, private label, and wholesale for salons, retailers, and distributors. Cosmetics / personal care framing only.',
    disclaimerTitle: 'Cosmetics disclaimer:',
    disclaimerBody:
      'Clearion Labs products are intended as cosmetics / personal care (e.g. facial cleansing mists and daily skin sprays). They are not drugs, are not intended to diagnose, treat, cure, or prevent any disease, and marketing claims must remain within cosmetics regulations applicable to your market.',
    copyright: '© {year} Clearion Labs. All rights reserved. Temporary brand for B2B OEM / wholesale inquiries.',
  },
  form: {
    kicker: 'Inquiry',
    title: 'Request a quote',
    subtitle: 'Tell us your program needs — we typically reply within ~24 hours on business days.',
    name: 'Name',
    namePh: 'Your name',
    email: 'Email',
    emailPh: 'you@company.com',
    company: 'Company',
    companyPh: 'Company / brand name',
    buyerType: 'Buyer type',
    select: 'Select…',
    buyerOem: 'OEM / Private Label',
    buyerWholesale: 'Wholesale',
    buyerBoth: 'Both / Exploring',
    buyerSalon: 'Salon / Spa',
    buyerRetailer: 'Retailer',
    buyerDistributor: 'Distributor',
    productInterest: 'Product interest',
    productHocl: 'HOCl spray (hero)',
    productPackaging: 'HOCl spray + packaging only',
    productSide: 'HOCl + side SKUs (PDRN etc.)',
    productOther: 'Other / discuss',
    quantity: 'Quantity / MOQ notes',
    quantityPh: 'e.g. sample, 500 pcs, 5,000+/mo',
    country: 'Destination country',
    countryPh: 'e.g. United States',
    message: 'Message',
    messagePh: 'Concentration target, bottle size, private-label artwork, timeline, compliance markets…',
    consent:
      'I agree to be contacted by Clearion Labs about this OEM / wholesale inquiry. Cosmetics / personal care inquiries only.',
    submit: 'Submit Inquiry',
    successOk: 'Thanks — your inquiry was received. We typically reply within ~24 hours on business days.',
    successFallback:
      'Opening your email client as a fallback. You can also email inquiries@clearionlabs.example.',
    error: 'Something went wrong. Please email inquiries@clearionlabs.example.',
  },
  trust: [
    { label: 'Sample-first', hint: 'Approve before bulk' },
    { label: 'Quote ~24h', hint: 'Business-day replies' },
    { label: 'Cosmetics compliance', hint: 'Personal care framing' },
    { label: 'Export-ready', hint: 'Packaging & logistics' },
  ],
  products: {
    heroBadge: 'Hero',
    sideBadge: 'Side assortment · discuss on RFQ',
    formatsLabel: 'Formats commonly discussed with OEM partners',
    ctaNote:
      'Concentration, pH, fill, and packaging are discussed as disclosed specs on RFQ — not published as fixed offers here.',
    ctaButton: 'Request assortment RFQ',
    defaultTitle: 'Product assortment',
    defaultTagline: 'Formats',
    introAll:
      'HOCl Facial Mist is the hero. Side SKUs below are a secondary assortment — discuss formats, fill, and private-label options on RFQ. We do not publish unverified concentrations or unit prices as offers.',
    introHero: 'Our lead cosmetics SKU. Formats commonly discussed with OEM and wholesale partners.',
    introSide:
      'Secondary SKUs for assortment planning — discuss on RFQ. HOCl Facial Mist remains the lead.',
    items: {
      'hocl-facial-mist': {
        name: 'HOCl Facial Mist',
        tagline: 'Daily facial cleansing mist for cosmetics channels',
        formats: ['Retail spray ~60–120 ml', 'Travel / mini card spray ~20 ml'],
        bullets: [
          'Cosmetics-grade hypochlorous acid facial mist — refreshing, lightweight skin-care spray',
          'OEM / private label artwork & packaging options',
          'Wholesale-ready spray formats for salon and retail shelves',
          'Discuss concentration & pH as disclosed specs on RFQ',
        ],
      },
      'pdrn-peptide-serum': {
        name: 'PDRN + Peptide Serum',
        tagline: 'Hydrating serum for assortment planning',
        formats: ['Pump bottle ~30 ml', 'Optional ampoule sampling ~1.5–2 ml'],
        bullets: [
          'Facial serum with PDRN and peptide ingredients in cosmetic framing',
          'Pump bottle suited to retail and DTC shelves',
          'Ampoule format available to discuss for sampling or travel kits',
        ],
      },
      'jelly-cream': {
        name: 'Jelly Cream',
        tagline: 'Fresh water-gel cream texture',
        formats: ['Water-gel cream jar ~50 g'],
        bullets: [
          'Light jelly / water-gel cream feel for moisturizing skin care',
          'Jar format commonly discussed with OEM partners',
          'Private-label artwork available on RFQ',
        ],
      },
      'milk-toner': {
        name: 'Milk Toner / Milky Lotion',
        tagline: 'Soft milky hydration formats',
        formats: ['Essence-water / toner ~30 ml', 'Milky lotion ~100 ml'],
        bullets: [
          'Milky toner and lotion formats for a soft hydration story',
          'Two fill sizes commonly discussed with OEM partners',
          'Suitable as a supporting SKU alongside the HOCl hero mist',
        ],
      },
    },
  },
  home: {
    title: 'HOCl OEM & Wholesale Skincare',
    description:
      'Clearion Labs — private label skincare and HOCl manufacturer for cosmetics-grade hypochlorous acid spray. OEM / private label and wholesale for salons, retailers, and distributors. Sample-first.',
    badge: 'B2B · Cosmetics OEM · US market focus',
    h1a: 'HOCl spray OEM & wholesale',
    h1b: 'for salons, retail & distributors',
    lead: 'Clearion Labs is a private label skincare and HOCl manufacturer partner for cosmetics-grade hypochlorous acid facial sprays — private-label packaging, fill options, and export-ready wholesale. Side assortment SKUs available to discuss on RFQ.',
    ctaOem: 'OEM / Private Label',
    ctaWholesale: 'Wholesale',
    orRfq: 'Or <a href="{rfq}" class="text-link">send a structured RFQ</a> — quote typically within ~24 hours.',
    funnelKicker: 'Two ways to buy',
    funnelTitle: 'Pick the program that fits',
    oemBadge: 'OEM',
    oemTitle: 'Private Label / OEM',
    oemBody:
      'Your brand on bottle & carton. Discuss concentration, pH specs, fill volume, spray actuator, and sampling before mass production.',
    oemLink: 'Explore OEM →',
    wholesaleBadge: 'Wholesale',
    wholesaleTitle: 'Wholesale / Open Account',
    wholesaleBody:
      'Bulk HOCl spray for salon chains, retailers, and distributors. Price lists, MOQ tiers, and replenishment-friendly supply.',
    wholesaleLink: 'Explore wholesale →',
    productsTitle: 'Product assortment',
    productsTagline: 'Hero + side SKUs',
    inquiryKicker: 'Typical inquiry includes',
    inquiryItems: [
      'Target market (US retail / salon / DTC brand)',
      'Bottle size & estimated monthly volume',
      'Private label vs white-label wholesale',
      'Sample request before bulk PO',
    ],
    inquiryNote: 'Specs such as concentration and pH are disclosed on RFQ — not published as fixed product facts here.',
    inquiryCta: 'Start RFQ',
    faqTitle: 'Common questions',
    faqItems: [
      {
        title: 'What is your hero product?',
        description:
          'Hypochlorous acid (<strong>HOCl</strong>) facial mist for cosmetics / personal care — daily facial cleansing mist and skin-care spray. Typical retail sizes ~60–120&nbsp;ml; travel ~20&nbsp;ml card/mini spray. Side SKUs (PDRN + peptide serum, jelly cream, milk toner / milky lotion) are a secondary assortment — discuss on RFQ.',
      },
      {
        title: 'Do you support private label and wholesale?',
        description:
          'Yes. Choose <a href="{oem}" class="text-link">OEM / Private Label</a> for branded packaging and formulation specs, or <a href="{wholesale}" class="text-link">Wholesale</a> for bulk supply to salons, retailers, and distributors.',
      },
      {
        title: 'Can I get samples before a production run?',
        description:
          'Sample-first is our recommended path. Share bottle size, destination, and any preferred specs on the <a href="{rfq}" class="text-link">inquiry form</a>. Discuss concentration &amp; pH as disclosed specs on RFQ.',
      },
      {
        title: 'Are these products drugs or medical devices?',
        description:
          'No. Clearion Labs positions HOCl sprays as <strong>cosmetics / personal care</strong>. We do not make disease treatment claims and do not use FDA-cleared drug/device wording for these products.',
      },
    ],
    formTitle: 'Get a factory-style quote',
  },
  oem: {
    title: 'HOCl Private Label OEM',
    description:
      'Private label skincare OEM and HOCl manufacturer for hypochlorous acid facial spray. Concentration, packaging, sampling RFQ for brands and salon lines. Cosmetics / personal care only.',
    kicker: 'OEM / Private Label',
    h1: 'Your brand on HOCl spray — from sample to shelf',
    lead: 'Build a cosmetics-grade hypochlorous acid facial mist under your label. Packaging RFQ, sampling path, and export-ready production for US-facing brands. Side assortment SKUs available to private-label on request.',
    ctaQuote: 'Request OEM Quote',
    ctaWholesale: 'Need wholesale instead?',
    specifyTitle: 'What OEM buyers usually specify',
    cards: [
      { t: 'Concentration & pH', d: 'Disclose as product specs for your formula brief — cosmetics framing only.' },
      { t: 'Packaging', d: 'Bottle volume, spray actuator, label stock, carton, and shipper cartons.' },
      { t: 'Sampling', d: 'Approve mist and artwork before committing a branded bulk run.' },
      { t: 'Brand artwork', d: 'Your logo and claim set within cosmetics regulations for your market.' },
      { t: 'Fill & QC', d: 'Batch documentation and QC checkpoints aligned to the agreed brief.' },
      { t: 'Export pack', d: 'Export packing guidance when you share destination and courier preference.' },
    ],
    processTitle: 'OEM process',
    steps: [
      { n: '01', title: 'Brief', text: 'Buyer type, market, bottle size, concentration preferences, artwork status.' },
      { n: '02', title: 'Sample', text: 'Approve mist feel, packaging mockups, and label layout before locking bulk.' },
      { n: '03', title: 'Quote', text: 'Volume tiers, lead time, and export packing options — typically within ~24h after a complete brief.' },
      { n: '04', title: 'Produce', text: 'Deposit / PO, production, QC checkpoints, and shipment to your destination.' },
    ],
    productsTitle: 'Assortment you can private-label',
    productsTagline: 'OEM formats',
    productsIntro:
      'Lead with HOCl Facial Mist. Side SKUs are clearly labeled as secondary — formats commonly discussed with OEM partners. Specs and pricing via RFQ.',
    faqTitle: 'OEM FAQ',
    faqItems: [
      {
        title: 'What can I customize on an HOCl spray OEM project?',
        description:
          'Typical levers: concentration / pH as disclosed specs, fill volume (retail ~60–120&nbsp;ml or travel ~20&nbsp;ml), bottle &amp; actuator, label &amp; carton artwork, and inner/outer packaging. Share your target channel (salon vs retail) for packaging guidance.',
      },
      {
        title: 'Is there a high MOQ before private label?',
        description:
          'Pilots and samples can start smaller; branded mass production MOQs depend on packaging complexity. Tell us your launch quantity on the RFQ.',
      },
      {
        title: 'Do you help with cosmetics labeling language?',
        description:
          'We can support cosmetics / personal care framing for labels. We do not provide disease-treatment claims or FDA-cleared drug/device wording for these products.',
      },
      {
        title: 'What about PDRN or other side SKUs?',
        description:
          'HOCl Facial Mist is the hero. Side assortment (PDRN + peptide serum, jelly cream, milk toner / milky lotion) can be private-labeled for assortment planning — ask on the inquiry form if relevant.',
      },
    ],
    formTitle: 'OEM / private label RFQ',
  },
  wholesale: {
    title: 'Wholesale HOCl Spray Supply',
    description:
      'Wholesale HOCl spray and bulk cosmetics-grade hypochlorous acid facial mist for salons, retailers, and distributors. Open account, price list, and MOQ inquiry.',
    kicker: 'Wholesale',
    h1: 'Bulk HOCl spray for commercial buyers',
    lead: 'Open a wholesale conversation for cosmetics-grade hypochlorous acid facial sprays — price list by volume tier, MOQ clarity, and replenishment-friendly supply.',
    ctaPrice: 'Request Price List',
    ctaOem: 'Need private label?',
    highlightsTitle: 'Wholesale program highlights',
    cards: [
      { t: 'Price list / volume tiers', d: 'Share monthly volume and destination for tiered FOB or landed guidance.' },
      { t: 'Open account path', d: 'Sample approval → first PO → repeat replenishment for qualified buyers.' },
      { t: 'MOQ transparency', d: 'Carton-based MOQs by SKU; sample packs available before commitment.' },
    ],
    channelTitle: 'Built for salon & retail channels',
    channelBody:
      'Position HOCl spray as a daily facial cleansing mist / skin care spray — clean cosmetics language for US-facing wholesale, without disease or drug claims.',
    channelItems: [
      'Salon back-bar & take-home formats',
      'Retail-ready outer packaging options',
      'Distributor multi-carton shipping',
      'Optional path to branded OEM later',
    ],
    productsTitle: 'Wholesale-ready formats',
    productsTagline: 'Assortment',
    productsIntro:
      'Formats commonly discussed with wholesale partners. HOCl Facial Mist is the lead; side SKUs are secondary and available to add on RFQ. No published unit prices or MOQs as fixed offers.',
    faqTitle: 'Wholesale FAQ',
    faqItems: [
      {
        title: 'Who is wholesale for?',
        description:
          'Salon groups, spas, retailers, e-commerce sellers, and distributors who need repeatable HOCl spray supply without a full private-label project — though private label can be added later. Side assortment formats can be included when relevant.',
      },
      {
        title: 'How do I get a price list?',
        description:
          'Submit the <a href="#inquiry-form" class="text-link">wholesale inquiry</a> with destination country and estimated monthly volume. We share MOQ tiers and sample options. We do not publish fixed unit prices on this site.',
      },
      {
        title: 'What is a typical MOQ?',
        description:
          'MOQ depends on SKU and packaging. Sample packs are available first; bulk tiers scale with carton quantities. Include your target in the form for an accurate reply.',
      },
      {
        title: 'Can wholesale accounts move to private label later?',
        description:
          'Yes. Many partners start wholesale, then migrate packaging to branded OEM once demand is proven. See <a href="{oem}" class="text-link">OEM / Private Label</a>.',
      },
    ],
    formTitle: 'Wholesale / open account inquiry',
  },
  contact: {
    title: 'Contact / Request a Quote',
    description:
      'Contact Clearion Labs for HOCl spray OEM, private label, and wholesale quotes. Sample-first. Reply typically within ~24 hours.',
    h1: 'Contact us',
    lead: 'Factory-style RFQ for HOCl spray OEM and wholesale. Cosmetics / personal care inquiries only.',
    pills: ['Quote ~24h', 'Sample-first', 'Export-ready'],
    goForm: 'Go to inquiry form',
    cards: [
      {
        t: 'OEM / Private Label',
        d: 'Concentration, packaging, and sampling RFQs for branded HOCl spray.',
        href: '/oem',
      },
      {
        t: 'Wholesale',
        d: 'Price list, MOQ, and open-account conversations for bulk buyers.',
        href: '/wholesale',
      },
      {
        t: 'Email fallback',
        d: 'inquiries@clearionlabs.example — replace with your real inbox before go-live.',
      },
    ],
    learnMore: 'Learn more →',
    faqTitle: 'Contact FAQ',
    faqItems: [
      {
        title: 'How fast do you reply?',
        description:
          'We typically reply within <strong>~24 hours</strong> on business days. Complete RFQs (buyer type, product, quantity, destination) get faster, more accurate quotes.',
      },
      {
        title: 'What should I include in my message?',
        description:
          'Concentration preferences, bottle size, private-label vs wholesale, estimated volume, ship-to country, and timeline. Mention if you need samples first.',
      },
      {
        title: 'Do you accept US market buyers?',
        description:
          'Yes — the site is framed for English / US-market B2B buyers (salons, retailers, distributors, and brands). Export and compliance details are discussed per inquiry.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Privacy policy stub for Clearion Labs B2B website.',
    h1: 'Privacy Policy',
    updated: 'Last updated: September 22, 2026 · Stub for v1 launch',
    paragraphs: [
      'Clearion Labs (“we”) operates this website to receive B2B inquiries about HOCl spray OEM, private label, and wholesale. When you submit the inquiry form, we collect the information you provide (such as name, email, company, buyer type, and message) to respond to your request.',
      'Form data may be stored in your browser (localStorage) for confirmation and/or sent to our inquiry endpoint or email. We do not sell personal information. Do not submit sensitive health information — this site is for cosmetics / personal care B2B inquiries only.',
      'For privacy requests, email <strong>inquiries@clearionlabs.example</strong> (placeholder — replace before production).',
      "We use inquiry data only to evaluate OEM / private-label and wholesale opportunities, prepare quotations, arrange samples, and communicate about orders or compliance documents you request. Access is limited to personnel handling B2B sales and operations.",
      "If you use cookies or similar storage in your browser (for example localStorage for form confirmation), that data stays on your device unless you clear it. We do not run third-party advertising trackers on this marketing site in the current v1 configuration.",
      "We may retain inquiry emails and related records for a reasonable business period to follow up on open quotes, samples, and purchase orders, then delete or anonymize them when no longer needed, unless a longer retention is required by law.",
      "International buyers: information you submit may be processed in the country where our commercial team operates and where email or hosting providers store data. By submitting an inquiry you acknowledge this cross-border processing for B2B cosmetics supply discussions.",
      "You may request access, correction, or deletion of personal data you sent via the inquiry form by emailing our privacy contact. We will respond within a commercially reasonable time. Do not include medical or prescription details in any request.",
      "This policy may be updated when we change hosting, forms, or legal entities. The “Last updated” date above reflects the current stub; replace placeholder contacts before production go-live."
    ],
    disclaimerTitle: 'Cosmetics disclaimer:',
    disclaimerBody:
      'Products discussed on this site are intended as cosmetics / personal care. They are not drugs and are not intended to diagnose, treat, cure, or prevent any disease.',
  },
  terms: {
    title: 'Terms of Use',
    description: 'Terms of use stub for Clearion Labs B2B website.',
    h1: 'Terms of Use',
    updated: 'Last updated: September 22, 2026 · Stub for v1 launch',
    paragraphs: [
      'By using this Clearion Labs website, you agree that content is provided for general B2B informational purposes about cosmetics / personal care HOCl spray OEM and wholesale. Quotes, MOQs, lead times, and specifications are confirmed only in writing after inquiry review.',
      'Product information (including concentration or pH where mentioned) is descriptive of cosmetics formulations and is not a medical claim. You are responsible for ensuring your own marketing and labeling comply with laws in your destination markets.',
      '“Clearion Labs” is a temporary brand name used for this v1 site. Pricing pages or catalogs may change without notice until a formal quotation is issued.',
      "Inquiries and website content do not create a binding supply contract. MOQs, unit prices, lead times, shipping terms, payment terms, and formulation specs become binding only when confirmed in a written quotation, proforma invoice, or purchase order acceptance from Clearion Labs.",
      "Samples, when provided, are for cosmetics evaluation (feel, scent, packaging fit, label layout) and must not be marketed with disease-treatment claims. You remain responsible for claim review under the cosmetics or personal-care rules of each destination market.",
      "Intellectual property: your brand artwork and trademarks remain yours. Manufacturing files, process know-how, and generic HOCl cosmetics formulas we disclose remain subject to confidentiality as stated in any NDA or quotation terms we issue.",
      "You agree not to use this site to solicit illegal products, make medical claims about HOCl sprays, or scrape content for competitive misuse. We may refuse or close inquiries that request drug, device, or biocide positioning for these cosmetics SKUs.",
      "Limitation: to the fullest extent permitted by law, Clearion Labs is not liable for indirect or consequential damages arising from use of this informational B2B site. Product liability and warranty terms, if any, are stated only in written commercial documents.",
      "Governing discussions for v1 are commercial B2B negotiations. Replace temporary brand and email placeholders with your production legal entity details before relying on these pages for customer-facing compliance."
    ],
    disclaimerTitle: 'Cosmetics disclaimer:',
    disclaimerBody:
      'Clearion Labs products are cosmetics / personal care (e.g. facial cleansing mists and daily skin sprays). They are not intended to diagnose, treat, cure, or prevent disease. No FDA-cleared drug or device claims are made for these products on this site.',
  },
};

export default en;
