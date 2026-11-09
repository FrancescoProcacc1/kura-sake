import './TabletFooter.css';
import './TabletTheme.css';

import { LANDING } from '../../content/landing.js';

const footer = LANDING.tablet.footer;

const CURRENT_YEAR = new Date().getFullYear();

function TabletFooter() {
  return (
    <footer className="tablet-footer">
      <div className="tablet-footer__inner">
        <div className="tablet-footer__grid">
          <div className="tablet-footer__brand">
            <div className="tablet-footer__wordmark">
              <span className="tablet-footer__name">KURA</span>
              <span className="tablet-footer__kanji">酒</span>
            </div>
            <p className="t-body-sm tablet-footer__tagline">{footer.tagline}</p>
          </div>

          {footer.groups.map((group) => (
            <div className="tablet-footer__group" key={group.title}>
              <span className="t-label-sm tablet-footer__group-title">
                {group.title}
              </span>

              {group.links ? (
                group.links.map((link) => (
                  <a
                    className="t-body-sm tablet-footer__link"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <>
                  <p className="t-body-sm tablet-footer__colophon">
                    {group.text}
                  </p>
                  <span className="t-label-sm tablet-footer__place">
                    {group.place}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="tablet-footer__bottom">
          <span className="t-label-sm">
            © {CURRENT_YEAR} {footer.copyright}
          </span>
          <span className="tablet-footer__signature">{footer.signature}</span>
        </div>
      </div>
    </footer>
  );
}

export default TabletFooter;
