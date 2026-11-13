import './LangSwitch.css';

import { getLocale, SUPPORTED_LOCALES, switchPath } from '../content/locale.js';

const STORAGE_KEY = 'kura-locale';

/*
 * Selettore di lingua IT/EN. Il cambio lingua avviene con navigazione
 * completa (href + reload): i moduli di contenuto vengono rivalutati
 * con il nuovo locale. La scelta esplicita viene salvata in
 * localStorage così l'auto-redirect iniziale non riparte più.
 */
function LangSwitch() {
  const locale = getLocale();

  return (
    <nav aria-label="Language / Lingua" className="lang-switch">
      {SUPPORTED_LOCALES.map((item) => {
        const isCurrent = item === locale;
        const className = isCurrent
          ? 'lang-switch__link lang-switch__link--active'
          : 'lang-switch__link';

        return (
          <a
            aria-current={isCurrent ? 'true' : undefined}
            className={className}
            href={switchPath(window.location.pathname, item)}
            key={item}
            lang={item}
            onClick={() => {
              try {
                localStorage.setItem(STORAGE_KEY, item);
              } catch {
                /* localStorage non disponibile: il cambio lingua funziona comunque */
              }
            }}
          >
            {item === 'it' ? 'IT' : 'EN'}
          </a>
        );
      })}
    </nav>
  );
}

export default LangSwitch;
