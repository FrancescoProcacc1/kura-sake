import './Legal.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '../hooks/useMediaQuery.js';
import { LEGAL } from '../content/legal.js';
import MobileFooter from '../components/mobile/MobileFooter.jsx';
import MobileHeader from '../components/mobile/MobileHeader.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import TabletFooter from '../components/tablet/TabletFooter.jsx';
import SiteLayout from '../components/SiteLayout.jsx';

const MOBILE_QUERY = '(max-width: 767px)';
const TABLET_QUERY = '(min-width: 768px) and (max-width: 1279px)';

function TabletChrome({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="tablet-main">
        <div className="tablet-container">{children}</div>
      </main>
      <TabletFooter />
    </>
  );
}

function MobileChrome({ children }) {
  return (
    <div className="mobile-page">
      <MobileHeader />
      <main className="mobile-main">{children}</main>
      <MobileFooter />
    </div>
  );
}

function LegalBody({ doc }) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${doc.title} | KURA`;
    return () => {
      document.title = previous;
    };
  }, [doc]);

  return (
    <article className="legal">
      <nav className="legal__back">
        <Link to="/">← Torna alla homepage</Link>
      </nav>

      <h1 className="legal__title">{doc.title}</h1>
      <p className="legal__updated">Ultimo aggiornamento: {doc.updated}</p>
      <p className="legal__intro">{doc.intro}</p>

      {doc.sections.map((section) => (
        <section className="legal__section" key={section.title}>
          <h2 className="legal__section-title">{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p className="legal__paragraph" key={paragraph.slice(0, 24) + index}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}

function Legal({ doc }) {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const isTablet = useMediaQuery(TABLET_QUERY);

  const body = <LegalBody doc={doc} />;

  if (isMobile) return <MobileChrome>{body}</MobileChrome>;
  if (isTablet) return <TabletChrome>{body}</TabletChrome>;

  return (
    <SiteLayout>
      <div className="shell--narrow">{body}</div>
    </SiteLayout>
  );
}

export function LegalPrivacy() {
  return <Legal doc={LEGAL.privacy} />;
}

export function LegalCookie() {
  return <Legal doc={LEGAL.cookie} />;
}
