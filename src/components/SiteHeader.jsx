import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './SiteHeader.css';

import { LANDING } from '../content/landing.js';

import Icon from './Icon.jsx';

const NAV_LINKS = LANDING.desktop.nav;

// Tutte le sezioni in ordine di documento: servono a capire in quale sezione
// si trova l'utente, anche per quelle non presenti nel menu.
const PAGE_SECTIONS = [
  'scopri',
  'produzione',
  'giappone',
  'questionario',
  'progetto',
];

const NAV_IDS = NAV_LINKS.map((link) => link.id);

// Altezza dell'header sticky: le sezioni si fermano a questa distanza dal bordo
// superiore (cfr. scroll-padding-top in index.css).
const HEADER_OFFSET = 80;

function useActiveSection() {
  const [activeId, setActiveId] = useState(null);
  const lockRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const lock = lockRef.current;
      if (lock) {
        const target = document.getElementById(lock.id);
        const arrived =
          target &&
          Math.abs(target.getBoundingClientRect().top - HEADER_OFFSET) < 4;
        if (!arrived && Date.now() < lock.until) return;
        lockRef.current = null;
      }

      let current = null;
      for (const id of PAGE_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 40) {
          current = id;
        }
      }
      setActiveId(NAV_IDS.includes(current) ? current : null);
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frameRef.current !== null)
        window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const activate = (id) => {
    lockRef.current = { id, until: Date.now() + 2000 };
    setActiveId(id);
  };

  return [activeId, activate];
}

function SiteHeader() {
  const [activeId, activate] = useActiveSection();
  const { pathname } = useLocation();

  // Dalla landing le ancorie restano interne; dalle altre pagine devono
  // puntare alla radice per raggiungere le sezioni della monografia.
  const prefix = pathname === '/' ? '' : '/';

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="site-header__logo" href="#">
          <span className="site-header__wordmark">KURA</span>
          <span className="site-header__kanji">酒</span>
          <span className="site-header__separator" />
          <span className="site-header__tagline">
            Cultura, tradizione e territorio giapponese
          </span>
        </a>

        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => {
            const isActive = link.id === activeId;

            return (
              <a
                aria-current={isActive ? 'location' : undefined}
                className={
                  isActive
                    ? 'site-header__link site-header__link--active'
                    : 'site-header__link'
                }
                href={`${prefix}#${link.id}`}
                key={link.id}
                onClick={() => activate(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="site-header__account">
          <a className="site-header__cta" href={`${prefix}#questionario`}>
            <span>Questionario</span>
            <Icon name="arrow_outward" className="site-header__cta-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
