import { useEffect, useRef } from 'react';

import './MobileMenu.css';

import { LANDING } from '../../content/landing.js';

import Icon from '../Icon.jsx';

const MENU_LINKS = LANDING.mobile.menu;

const FOCUSABLE = 'a[href], button:not([disabled])';

function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);

  // Escape chiude il pannello, il click sui link chiude il menu e lo scroll
  // della pagina resta bloccato mentre il pannello è aperto.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      // Il focus resta dentro il pannello finché è aperto.
      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const items = [...panel.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus();
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}
    >
      <div className="mobile-menu__backdrop" onClick={onClose} />

      <div
        aria-label="Indice"
        aria-modal="true"
        className="mobile-menu__panel"
        ref={panelRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className="mobile-menu__head">
          <span className="mobile-menu__title">Indice</span>
          <button
            aria-label="Chiudi menu"
            className="mobile-menu__close"
            onClick={onClose}
            type="button"
          >
            <Icon name="close" className="mobile-menu__close-icon" />
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {MENU_LINKS.map((link) => (
            <a
              className="mobile-menu__link"
              href={`#${link.id}`}
              key={link.id}
              onClick={onClose}
            >
              <span>{link.label}</span>
              <span className="mobile-menu__number">{link.number}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <p className="mobile-menu__foot-text">KURA 酒 — Archivio Culturale</p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
