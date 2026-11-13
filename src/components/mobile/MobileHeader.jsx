import { useState } from 'react';
import { Link } from 'react-router-dom';

import './MobileHeader.css';
import './MobileMenu.css';

import MobileMenu from './MobileMenu.jsx';
import Icon from '../Icon.jsx';
import LangSwitch from '../LangSwitch.jsx';
import { getLocale } from '../../content/locale.js';
import { UI } from '../../content/ui.js';

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const labels = UI[getLocale()];

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-header__inner">
          <Link className="mobile-header__brand" to="/">
            <span className="mobile-header__wordmark">KURA</span>
            <span className="mobile-header__kanji">酒</span>
          </Link>

          <div className="mobile-header__right">
            <LangSwitch />

            <button
              aria-expanded={menuOpen}
              aria-label={labels.openMenu}
              className="mobile-header__menu-button"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Icon name="menu" className="mobile-header__menu-icon" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default MobileHeader;
