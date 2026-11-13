import { STORIA } from '../content/storia.js';
import { getLocale, localizedPath } from '../content/locale.js';

/*
 * Configurazione SEO per locale: la lingua è fissa per caricamento di
 * pagina (vedi ./locale.js), quindi i valori possono essere calcolati
 * a livello di modulo. Le chiavi di ROUTES restano le path italiane
 * (i componenti chiamano useSeo('/storia-del-sake') in entrambe le
 * lingue): il campo `path` e gli `alternates` sono localizzati.
 */

const locale = getLocale();
const IS_EN = locale === 'en';

export const SITE = {
  name: 'KURA',
  url: 'https://kurasake.it',
  htmlLang: IS_EN ? 'en' : 'it',
  locale: IS_EN ? 'en_US' : 'it_IT',
  alternateLocale: IS_EN ? 'it_IT' : 'en_US',
  ogImage: '/og-image.jpg',
  ogImageAlt: IS_EN
    ? 'The kanji 蔵 (kura), logo of KURA'
    : 'Il kanji 蔵 (kura), logo di KURA',
  defaultTitle: IS_EN
    ? 'KURA — A monograph on Japanese sake'
    : 'KURA — Monografia sul sakè giapponese',
  defaultDescription: IS_EN
    ? 'KURA: Japan told through sake. History, artisanal production, styles, territories and tradition.'
    : 'KURA: il Giappone raccontato attraverso il sakè. Storia, produzione artigianale, tipologie, territori e tradizione.',
};

// Percorso di ciascuna pagina nelle due lingue: serve per i link
// alternati hreflang e per x-default (lingua di default: italiano).
const ROUTE_PATHS = {
  '/': { it: '/', en: '/en' },
  '/storia-del-sake': { it: '/storia-del-sake', en: '/en/storia-del-sake' },
  '/privacy-policy': { it: '/privacy-policy', en: '/en/privacy-policy' },
  '/cookie-policy': { it: '/cookie-policy', en: '/en/cookie-policy' },
};

const currentPath = (base) => localizedPath(base, locale);

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: `${SITE.url}${currentPath('/')}`,
  inLanguage: IS_EN ? 'en' : 'it-IT',
  description: SITE.defaultDescription,
};

const storiaPath = currentPath('/storia-del-sake');

const storiaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: STORIA.desktop.meta.title,
  description: STORIA.desktop.meta.description,
  image: `${SITE.url}${SITE.ogImage}`,
  inLanguage: IS_EN ? 'en' : 'it-IT',
  mainEntityOfPage: `${SITE.url}${storiaPath}`,
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
};

export const ROUTES = {
  '/': {
    path: currentPath('/'),
    alternates: ROUTE_PATHS['/'],
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    type: 'website',
    jsonLd: homeJsonLd,
  },
  '/storia-del-sake': {
    path: storiaPath,
    alternates: ROUTE_PATHS['/storia-del-sake'],
    title: STORIA.desktop.meta.title,
    description: STORIA.desktop.meta.description,
    type: 'article',
    jsonLd: storiaJsonLd,
  },
  '/privacy-policy': {
    path: currentPath('/privacy-policy'),
    alternates: ROUTE_PATHS['/privacy-policy'],
    title: 'Privacy Policy | KURA',
    description: IS_EN
      ? 'Information on the processing of personal data of users of the KURA website.'
      : 'Informativa sul trattamento dei dati personali degli utenti del sito KURA.',
    type: 'website',
    noindex: true,
  },
  '/cookie-policy': {
    path: currentPath('/cookie-policy'),
    alternates: ROUTE_PATHS['/cookie-policy'],
    title: 'Cookie Policy | KURA',
    description: IS_EN
      ? 'Information on the use of cookies on the KURA website.'
      : 'Informativa sull’utilizzo dei cookie del sito KURA.',
    type: 'website',
    noindex: true,
  },
};
