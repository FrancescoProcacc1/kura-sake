import { useCallback, useSyncExternalStore } from 'react';

/**
 * Sottoscrive una media query e ne restituisce il valore corrente.
 * Lo snapshot viene letto in modo sincrono: al primo render la variante
 * giusta è già scelta, quindi non c'è flash di layout.
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', callback);
      return () => mediaQueryList.removeEventListener('change', callback);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
