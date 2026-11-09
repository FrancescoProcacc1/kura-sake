import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Alla navigazione si torna in cima, oppure si raggiunge l'ancora richiesta
// (le sezioni esistono solo dopo il render della pagina).
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const page = document.querySelector(`[data-route="${pathname}"]`);
    const target = hash ? page?.querySelector(hash) : null;

    if (target) {
      target.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
