import type { Locale } from './locales';
import type { LocaleDictionary } from './types';
import en from './dictionaries/en';
import zhTw from './dictionaries/zh-tw';
import es from './dictionaries/es';
import hi from './dictionaries/hi';
import ar from './dictionaries/ar';
import fr from './dictionaries/fr';
import bn from './dictionaries/bn';
import pt from './dictionaries/pt';
import ru from './dictionaries/ru';
import ur from './dictionaries/ur';
import id from './dictionaries/id';
import de from './dictionaries/de';
import ja from './dictionaries/ja';
import ko from './dictionaries/ko';
import vi from './dictionaries/vi';
import th from './dictionaries/th';

const DICTS: Record<Locale, LocaleDictionary> = {
  en,
  'zh-tw': zhTw,
  hi,
  es,
  ar,
  fr,
  bn,
  pt,
  ru,
  ur,
  id,
  de,
  ja,
  ko,
  vi,
  th,
};

export function getDictionary(locale: Locale): LocaleDictionary {
  return DICTS[locale] ?? DICTS.en;
}

export function getHome(locale: Locale) {
  return getDictionary(locale).home;
}
export function getOem(locale: Locale) {
  return getDictionary(locale).oem;
}
export function getWholesale(locale: Locale) {
  return getDictionary(locale).wholesale;
}
export function getContact(locale: Locale) {
  return getDictionary(locale).contact;
}
export function getPrivacy(locale: Locale) {
  return getDictionary(locale).privacy;
}
export function getTerms(locale: Locale) {
  return getDictionary(locale).terms;
}
export function getForm(locale: Locale) {
  return getDictionary(locale).form;
}
export function getTrust(locale: Locale) {
  return getDictionary(locale).trust;
}
export function getProductsUi(locale: Locale) {
  return getDictionary(locale).products;
}

/** Replace {oem}, {wholesale}, {rfq} placeholders in FAQ/HTML snippets. */
export function withLinks(
  html: string,
  links: { oem: string; wholesale: string; rfq: string },
): string {
  return html
    .replaceAll('{oem}', links.oem)
    .replaceAll('{wholesale}', links.wholesale)
    .replaceAll('{rfq}', links.rfq);
}
