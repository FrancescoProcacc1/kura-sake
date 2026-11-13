import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import StoriaDelSake from './pages/StoriaDelSake.jsx';
import { LegalCookie, LegalPrivacy } from './pages/Legal.jsx';

const STORAGE_KEY = 'kura-locale';
const EN_PREFIX = /^\/en(?:\/|$)/;

/*
 * All'ingresso da un percorso italiano reindirizza ai contenuti inglesi
 * se il browser dell'utente non è impostato in italiano. La scelta
 * esplicita del selettore lingua (localStorage) ha la precedenza e
 * blocca ogni redirect successivo. L'ambiente di prerender viene
 * escluso (navigator.webdriver), altrimenti la cattura statica della
 * home italiana conterrebbe l'HTML inglese.
 */
function LocaleGate() {
  useEffect(() => {
    if (navigator.webdriver) return undefined;

    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage non disponibile: si procede con il solo browser language */
    }
    if (stored) return undefined;

    const language = (navigator.language || '').toLowerCase();
    if (language.startsWith('it')) return undefined;

    const { pathname } = window.location;
    if (!EN_PREFIX.test(pathname)) {
      window.location.replace(pathname === '/' ? '/en' : `/en${pathname}`);
    }

    return undefined;
  }, []);

  return null;
}

function App() {
  return (
    <>
      <LocaleGate />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storia-del-sake" element={<StoriaDelSake />} />
        <Route path="/privacy-policy" element={<LegalPrivacy />} />
        <Route path="/cookie-policy" element={<LegalCookie />} />
        <Route path="/en" element={<Home />} />
        <Route path="/en/storia-del-sake" element={<StoriaDelSake />} />
        <Route path="/en/privacy-policy" element={<LegalPrivacy />} />
        <Route path="/en/cookie-policy" element={<LegalCookie />} />
      </Routes>
    </>
  );
}

export default App;
