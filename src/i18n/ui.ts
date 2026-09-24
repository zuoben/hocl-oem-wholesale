import type { Locale } from './locales';
import type { UiCopy } from './types';
import { getDictionary } from './pages';

export function getUi(locale: Locale): UiCopy {
  return getDictionary(locale).ui;
}

export function uiLinks(locale: Locale) {
  const ui = getUi(locale);
  return [
    { href: '/', label: ui.home },
    { href: '/oem', label: ui.oem },
    { href: '/wholesale', label: ui.wholesale },
    { href: '/contact', label: ui.contact },
  ] as const;
}
