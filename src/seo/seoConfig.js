import { STORIA } from '../content/storia.js';

export const SITE = {
  name: 'KURA',
  url: 'https://www.kura-sake.it',
  locale: 'it_IT',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Il kanji 蔵 (kura), logo di KURA',
  defaultTitle: 'KURA — Monografia sul sakè giapponese',
  defaultDescription:
    'KURA: il Giappone raccontato attraverso il sakè. Storia, produzione artigianale, tipologie, territori e tradizione.',
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'it-IT',
  description: SITE.defaultDescription,
};

const storiaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: STORIA.desktop.meta.title,
  description: STORIA.desktop.meta.description,
  image: `${SITE.url}${SITE.ogImage}`,
  inLanguage: 'it-IT',
  mainEntityOfPage: `${SITE.url}/storia-del-sake`,
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
};

export const ROUTES = {
  '/': {
    path: '/',
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    type: 'website',
    jsonLd: homeJsonLd,
  },
  '/storia-del-sake': {
    path: '/storia-del-sake',
    title: STORIA.desktop.meta.title,
    description: STORIA.desktop.meta.description,
    type: 'article',
    jsonLd: storiaJsonLd,
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | KURA',
    description:
      'Informativa sul trattamento dei dati personali degli utenti del sito KURA.',
    type: 'website',
    noindex: true,
  },
  '/cookie-policy': {
    path: '/cookie-policy',
    title: 'Cookie Policy | KURA',
    description: 'Informativa sull’utilizzo dei cookie del sito KURA.',
    type: 'website',
    noindex: true,
  },
};
