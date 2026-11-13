/*
 * Rilevamento del locale dal percorso corrente.
 *
 * Il sito usa URL dedicati per lingua: l'italiano è servito senza prefisso
 * (lingua di default), l'inglese sotto /en. La lingua viene risolta una
 * volta per caricamento di pagina, quindi i moduli di contenuto possono
 * leggere il locale a livello di modulo (vedi ./landing.js e simili).
 * Il passaggio da una lingua all'altra avviene con navigazione completa
 * (window.location), così i moduli vengono rivalutati con il nuovo locale.
 */

export const DEFAULT_LOCALE = 'it';
export const SUPPORTED_LOCALES = ['it', 'en'];

const EN_PREFIX = /^\/en(?:\/|$)/;

export function getLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  return EN_PREFIX.test(window.location.pathname) ? 'en' : DEFAULT_LOCALE;
}

/*
 * Restituisce il percorso localizzato per il locale dato: in inglese
 * antepone il prefisso /en (con il caso speciale della radice '/'),
 * in italiano lascia il percorso invariato.
 */
export function localizedPath(path, locale = getLocale()) {
  if (locale !== 'en') return path;
  return path === '/' ? '/en' : `/en${path}`;
}

/*
 * Dato un pathname corrente, restituisce il percorso equivalente
 * nell'altra lingua (usato dal selettore IT/EN).
 */
export function switchPath(pathname, targetLocale) {
  const basePath = EN_PREFIX.test(pathname)
    ? pathname.replace(/^\/en/, '') || '/'
    : pathname;

  return localizedPath(basePath, targetLocale);
}
