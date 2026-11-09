import './SiteFooter.css';

import { Link } from 'react-router-dom';

import { LANDING } from '../content/landing.js';

const footer = LANDING.desktop.footer;
const FOOTER_LINKS = footer.links;

const CURRENT_YEAR = new Date().getFullYear();

function FooterLink({ link }) {
  const isRoute = link.href.startsWith('/');

  return isRoute ? (
    <Link className="site-footer__link" to={link.href}>
      {link.label}
    </Link>
  ) : (
    <a className="site-footer__link" href={link.href}>
      {link.label}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <div className="site-footer__wordmark">
              <span className="site-footer__name">KURA</span>
              <span className="site-footer__kanji">酒</span>
            </div>
            <p className="site-footer__tagline">{footer.tagline}</p>
          </div>

          <nav className="site-footer__nav">
            {FOOTER_LINKS.map((link) => (
              <FooterLink key={link.id} link={link} />
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>{footer.note}</p>
          <p>
            © {CURRENT_YEAR} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
