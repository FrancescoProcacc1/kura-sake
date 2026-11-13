import { useEffect } from 'react';

import { ROUTES, SITE } from './seoConfig.js';

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

// I link alternati hreflang coesistono nello stesso documento (uno per
// lingua): il selettore deve distinguere anche per hreflang.
function upsertAlternate(hreflang, href) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'alternate');
    element.setAttribute('hreflang', hreflang);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(data) {
  let element = document.head.querySelector(
    'script[type="application/ld+json"][data-seo]',
  );

  if (!data) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    element.setAttribute('data-seo', '');
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export function useSeo(routeKey) {
  useEffect(() => {
    const route = ROUTES[routeKey];

    if (!route) return;

    const url = `${SITE.url}${route.path}`;
    const image = `${SITE.url}${SITE.ogImage}`;

    document.documentElement.lang = SITE.htmlLang;
    document.title = route.title;
    upsertMeta('name', 'description', route.description);
    upsertMeta(
      'name',
      'robots',
      route.noindex ? 'noindex, nofollow' : 'index, follow',
    );
    upsertLink('canonical', url);

    // Link alternati per lingua (hreflang) + default: la lingua di
    // default del sito è l'italiano.
    for (const [lang, path] of Object.entries(route.alternates)) {
      upsertAlternate(lang, `${SITE.url}${path}`);
    }
    upsertAlternate('x-default', `${SITE.url}${route.alternates.it}`);

    upsertMeta('property', 'og:title', route.title);
    upsertMeta('property', 'og:description', route.description);
    upsertMeta('property', 'og:type', route.type);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', SITE.ogImageAlt);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:locale', SITE.locale);
    upsertMeta('property', 'og:locale:alternate', SITE.alternateLocale);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', route.title);
    upsertMeta('name', 'twitter:description', route.description);
    upsertMeta('name', 'twitter:image', image);

    upsertJsonLd(route.jsonLd);
  }, [routeKey]);
}
