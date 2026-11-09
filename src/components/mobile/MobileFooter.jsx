import './MobileFooter.css';

import { LANDING } from '../../content/landing.js';

const footer = LANDING.mobile.footer;

const CURRENT_YEAR = new Date().getFullYear();

function MobileFooter() {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer__inner">
        <div className="mobile-footer__brand">
          <span className="mobile-footer__wordmark">KURA</span>
          <span className="mobile-footer__kanji">酒</span>
        </div>

        <p className="mobile-footer__tagline">{footer.tagline}</p>

        <nav className="mobile-footer__nav">
          {footer.links.map((link) => (
            <a className="mobile-footer__link" href={link.href} key={link.id}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-footer__credits">
          <p>
            © {CURRENT_YEAR} {footer.copyright}
          </p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;
