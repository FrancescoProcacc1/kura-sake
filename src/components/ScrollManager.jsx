import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
 * Alla navigazione si torna in cima, oppure si raggiunge l'ancora richiesta
 * (le sezioni esistono solo dopo il render della pagina).
 *
 * Con un'ancora lo scroll viene eseguito subito e poi ripetuto quando il
 * layout è stabile (font caricati e immagini scaricate): da una pagina
 * esterna la home si rimonta da zero e, senza la seconda passata, lo
 * scroll si fermerebbe troppo presto lasciando l'ancora sotto il bordo
 * dell'header (scroll-padding-top).
 */

// Timeout di sicurezza: le risorse locali arrivano in decine di ms.
const SETTLE_TIMEOUT = 1000;

function waitForSettle(page) {
  const images = [...page.querySelectorAll('img')].filter(
    (image) => !image.complete,
  );

  const imageLoads = Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        }),
    ),
  );

  const fonts = document.fonts?.ready ?? Promise.resolve();
  const timeout = new Promise((resolve) => {
    window.setTimeout(resolve, SETTLE_TIMEOUT);
  });

  return Promise.race([Promise.all([fonts, imageLoads]), timeout]);
}

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    let cancelled = false;

    const findTarget = () => {
      if (!hash) return null;
      const page = document.querySelector(`[data-route="${pathname}"]`);
      return page?.querySelector(hash) ?? null;
    };

    const scrollToTarget = () => {
      const target = findTarget();
      if (target) {
        target.scrollIntoView();
        return true;
      }
      window.scrollTo(0, 0);
      return false;
    };

    // Nota: se non c'è ancora, si torna semplicemente in cima.
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const hasTarget = scrollToTarget();

    if (!hasTarget) return undefined;

    waitForSettle(document).then(() => {
      if (cancelled) return;
      window.requestAnimationFrame(() => {
        if (cancelled) return;
        scrollToTarget();
      });
    });

    return () => {
      cancelled = true;
    };
    // La key cambia a ogni navigazione, anche a parità di pathname e hash:
    // la dipendenza "extra" è intenzionale, serve a riportare in cima quando
    // si clicca il logo restando sulla home (dove il path non cambia).
    // oxlint-disable-next-line react/exhaustive-effect-dependencies
  }, [pathname, hash, key]);

  return null;
}

export default ScrollManager;
