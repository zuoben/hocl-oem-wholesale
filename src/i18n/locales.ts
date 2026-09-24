export const LOCALES = [
  'en',
  'zh-tw',
  'hi',
  'es',
  'ar',
  'fr',
  'bn',
  'pt',
  'ru',
  'ur',
  'id',
  'de',
  'ja',
  'ko',
  'vi',
  'th',
] as const;

export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const I18N_LOCALES = LOCALES.filter((l): l is Exclude<Locale, 'en'> => l !== 'en');

export const LOCALE_META: Record<
  Locale,
  { name: string; htmlLang: string; ogLocale: string; dir: 'ltr' | 'rtl' }
> = {
  en: { name: 'English', htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
  'zh-tw': { name: '繁體中文', htmlLang: 'zh-Hant', ogLocale: 'zh_TW', dir: 'ltr' },
  hi: { name: 'हिन्दी', htmlLang: 'hi', ogLocale: 'hi_IN', dir: 'ltr' },
  es: { name: 'Español', htmlLang: 'es', ogLocale: 'es', dir: 'ltr' },
  ar: { name: 'العربية', htmlLang: 'ar', ogLocale: 'ar_SA', dir: 'rtl' },
  fr: { name: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  bn: { name: 'বাংলা', htmlLang: 'bn', ogLocale: 'bn_BD', dir: 'ltr' },
  pt: { name: 'Português', htmlLang: 'pt', ogLocale: 'pt_BR', dir: 'ltr' },
  ru: { name: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU', dir: 'ltr' },
  ur: { name: 'اردو', htmlLang: 'ur', ogLocale: 'ur_PK', dir: 'rtl' },
  id: { name: 'Bahasa Indonesia', htmlLang: 'id', ogLocale: 'id_ID', dir: 'ltr' },
  de: { name: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE', dir: 'ltr' },
  ja: { name: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP', dir: 'ltr' },
  ko: { name: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR', dir: 'ltr' },
  vi: { name: 'Tiếng Việt', htmlLang: 'vi', ogLocale: 'vi_VN', dir: 'ltr' },
  th: { name: 'ไทย', htmlLang: 'th', ogLocale: 'th_TH', dir: 'ltr' },
};

export const PAGE_KEYS = ['/', '/oem', '/wholesale', '/contact', '/privacy', '/terms'] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && (LOCALES as readonly string[]).includes(value));
}

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLocale(first) ? first : 'en';
}

export function stripLocale(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return path;
}

export function localizePath(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === 'en') return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

export function getHreflangMap(pathname: string): Record<Locale, string> | null {
  const key = stripLocale(pathname);
  if (!(PAGE_KEYS as readonly string[]).includes(key)) return null;
  return Object.fromEntries(LOCALES.map((locale) => [locale, localizePath(key, locale)])) as Record<
    Locale,
    string
  >;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const hash = pathname.includes('#') ? `#${pathname.split('#')[1]}` : '';
  const map = getHreflangMap(pathname);
  if (map) return map[target] + hash;
  return localizePath(stripLocale(pathname), target) + hash;
}
