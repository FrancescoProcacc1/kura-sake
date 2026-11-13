import './TabletStoria.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon.jsx';
import SiteHeader from '../../components/SiteHeader.jsx';
import TabletFooter from '../../components/tablet/TabletFooter.jsx';
import { STORIA } from '../../content/storia.js';
import { getLocale } from '../../content/locale.js';
import { UI } from '../../content/ui.js';

/*
 * La variante tablet condivide i testi con la versione desktop
 * (STORIA.desktop): cambia solo la struttura di layout. Header, footer,
 * tipografia t-* e larghezze (.tablet-container) sono quelle della home.
 */
const content = STORIA.desktop;
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function TabletBreadcrumb() {
  return (
    <nav aria-label={UI[getLocale()].breadcrumbNav} className="storia-t-breadcrumb">
      <Link to="/">Home</Link>
      <span aria-hidden="true" className="storia-t-breadcrumb__sep">
        /
      </span>
      <span aria-current="page" className="storia-t-breadcrumb__current">
        La storia del sakè
      </span>
    </nav>
  );
}

function LayoutFigure({ image, imageAlt, klass = null, mono = false, caption = null, captionTag = null }) {
  return (
    <figure className="storia-t-figure">
      <div className="storia-t-figure__frame">
        <img
          alt={imageAlt}
          className={`storia-t-figure__image${mono ? ' storia-t-figure__image--mono' : ''}`}
          src={image}
        />
        {klass ? (
          <span className="storia-t-figure__badge">{klass}</span>
        ) : null}
      </div>
      {caption || captionTag ? (
        <figcaption className="storia-t-figure__caption">
          <span className="t-label-sm storia-t-figure__caption-text">
            {caption}
          </span>
          {captionTag ? (
            <span className="t-mono storia-t-figure__caption-tag">
              {captionTag}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

function KnowBox({ title, children }) {
  return (
    <aside className="storia-t-know">
      <div className="storia-t-know__body">
        <div className="storia-t-know__head">
          <Icon className="storia-t-know__icon" name="menu_book" />
          <span className="t-label-sm storia-t-know__title">{title}</span>
        </div>
        <p className="t-body-sm storia-t-know__text">{children}</p>
      </div>
    </aside>
  );
}

function TabletHero() {
  const hero = content.hero;

  return (
    <header className="storia-t-hero">
      <TabletBreadcrumb />

      <div className="tablet-hero__head">
        <div className="tablet-hero__eyebrow">
          <span className="tablet-hero__eyebrow-dot" />
          <span className="t-label-sm tablet-hero__eyebrow-text">
            {hero.eyebrow}
          </span>
        </div>
        <h1 className="t-headline-lg storia-t-hero__title">{hero.title}</h1>
        <p className="t-body-lg tablet-hero__lead">{hero.lead}</p>
      </div>

      <figure className="storia-t-hero__figure">
        <img
          alt={hero.imageAlt}
          className="storia-t-hero__image"
          src={hero.image}
        />
        <figcaption className="storia-t-figure__caption storia-t-hero__caption">
          <span className="t-label-sm storia-t-figure__caption-text">
            {hero.caption}
          </span>
          <span className="t-mono storia-t-figure__caption-tag">
            {hero.captionLabel}
          </span>
        </figcaption>
      </figure>
    </header>
  );
}

function Origini() {
  const origini = content.origini;

  return (
    <section className="storia-t-section" id={origini.id}>
      <span className="t-label-sm storia-t-eyebrow">{origini.eyebrow}</span>
      <h2 className="t-headline-md storia-t-h2">{origini.title}</h2>

      <LayoutFigure
        caption={origini.caption}
        captionTag={origini.tag}
        image={origini.image}
        imageAlt={origini.imageAlt}
      />

      <div className="storia-t-paragraphs">
        {origini.paragraphs.map((text) => (
          <p className="t-body-md" key={text.slice(0, 24)}>
            {text}
          </p>
        ))}
      </div>

      <KnowBox title={origini.didYouKnow.title}>
        {renderWithEm(origini.didYouKnow.text, origini.didYouKnow.em)}
      </KnowBox>
    </section>
  );
}

function PeriodCard({ period, index, isOpen, onToggle }) {
  return (
    <article className="storia-t-period">
      <span aria-hidden="true" className="storia-t-period__kanji">
        {period.kanji}
      </span>

      <div className="storia-t-period__era-row">
        <span className="t-label-sm storia-t-period__era">{period.era}</span>
        <span className="t-mono storia-t-period__num">
          Periodo {ROMAN[index]}
        </span>
      </div>

      <h3 className="t-headline-sm storia-t-period__title">{period.title}</h3>
      <p className="t-body-md storia-t-period__text">{period.text}</p>

      <button
        aria-controls={`storia-t-periodo-${index + 1}`}
        aria-expanded={isOpen}
        className="storia-t-toggle"
        onClick={onToggle}
        type="button"
      >
        {isOpen ? 'Chiudi —' : 'Approfondisci +'}
      </button>

      <div
        className="storia-t-period__more"
        hidden={!isOpen}
        id={`storia-t-periodo-${index + 1}`}
      >
        <p className="t-label-sm storia-t-period__more-label">
          {period.more.label}
        </p>
        <p className="t-body-sm storia-t-period__more-text">
          {period.more.text}
        </p>
      </div>
    </article>
  );
}

function Evoluzione() {
  const evoluzione = content.evoluzione;
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="storia-t-section" id={evoluzione.id}>
      <div className="storia-t-section__head">
        <span className="t-label-sm storia-t-eyebrow">{evoluzione.eyebrow}</span>
        <h2 className="t-headline-md storia-t-h2">{evoluzione.title}</h2>
        <p className="t-body-md storia-t-lead">{evoluzione.lead}</p>
      </div>

      <div className="storia-t-periods">
        {evoluzione.periods.map((period, index) => (
          <PeriodCard
            index={index}
            isOpen={openIndex === index}
            key={period.era}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            period={period}
          />
        ))}
      </div>
    </section>
  );
}

function Cultura() {
  const cultura = content.cultura;

  return (
    <section className="storia-t-section" id={cultura.id}>
      <span className="t-label-sm storia-t-eyebrow">{cultura.eyebrow}</span>
      <h2 className="t-headline-md storia-t-h2">{cultura.title}</h2>

      <div className="storia-t-paragraphs">
        {cultura.paragraphs.map((text) => (
          <p className="t-body-md" key={text.slice(0, 24)}>
            {text}
          </p>
        ))}
      </div>

      <LayoutFigure
        caption={cultura.caption}
        captionTag={cultura.tag}
        image={cultura.image}
        imageAlt={cultura.imageAlt}
      />

      <KnowBox title={cultura.didYouKnow.title}>
        {cultura.didYouKnow.text}
      </KnowBox>
    </section>
  );
}

function Artigianale() {
  const artigianale = content.artigianale;

  return (
    <section className="storia-t-section" id="artigianale">
      <span className="t-label-sm storia-t-eyebrow">
        {artigianale.eyebrow}
      </span>
      <h2 className="t-headline-md storia-t-h2">{artigianale.title}</h2>

      <LayoutFigure
        caption={artigianale.imageTag}
        captionTag={artigianale.imageCredit}
        image={artigianale.image}
        imageAlt={artigianale.imageAlt}
        mono={true}
      />

      <p className="t-body-lg storia-t-lead">{artigianale.lead}</p>
      <p className="t-body-md storia-t-narrative">{artigianale.narrative}</p>

      <div className="storia-t-glossary">
        {artigianale.glossary.map((entry) => (
          <div className="storia-t-glossary__card" key={entry.term}>
            <div className="storia-t-glossary__body">
              <div className="storia-t-glossary__head">
                <span className="t-headline-sm storia-t-glossary__name">
                  {entry.term.split(' — ')[0]}
                </span>
                <span aria-hidden="true" className="t-headline-md storia-t-glossary__kanji">
                  {entry.term.split(' — ')[1]}
                </span>
              </div>
              <p className="t-body-sm storia-t-glossary__text">
                {renderWithStrong(entry.text, entry.strong)}
              </p>
            </div>
            <span className="t-label-sm storia-t-glossary__label">
              {entry.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contemporaneo() {
  const contemporaneo = content.contemporaneo;
  const unesco = contemporaneo.unesco;

  return (
    <section className="storia-t-section">
      <span className="t-label-sm storia-t-eyebrow">
        {contemporaneo.eyebrow}
      </span>
      <h2 className="t-headline-md storia-t-h2">{contemporaneo.title}</h2>

      <div className="storia-t-unesco">
        <div className="storia-t-unesco__head">
          <Icon className="storia-t-unesco__icon" name={unesco.icon} />
          <span className="t-label-sm storia-t-unesco__kicker">
            Riconoscimento mondiale
          </span>
        </div>
        <h3 className="t-headline-sm storia-t-unesco__title">{unesco.title}</h3>
        <p className="t-body-md storia-t-unesco__text">{unesco.text}</p>
        <a
          className="storia-t-unesco__link t-label-md"
          href={unesco.linkHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{unesco.linkLabel}</span>
          <Icon className="storia-t-unesco__link-icon" name="arrow_outward" />
        </a>
      </div>
    </section>
  );
}

function CallToAction() {
  const cta = content.cta;

  return (
    <section className="storia-t-cta">
      <span className="t-label-sm storia-t-eyebrow storia-t-eyebrow--center">
        {cta.eyebrow}
      </span>
      <h2 className="t-headline-md storia-t-cta__title">{cta.title}</h2>
      <p className="t-body-md storia-t-cta__lead">{cta.lead}</p>

      <div className="storia-t-cta__actions">
        <Link
          className="t-label-md tablet-btn tablet-btn--primary"
          to={cta.primary.to}
        >
          {cta.primary.label}
        </Link>
        <Link
          className="t-label-md tablet-btn tablet-btn--secondary"
          to={cta.secondary.to}
        >
          {cta.secondary.label}
        </Link>
      </div>
    </section>
  );
}

function Fonti() {
  const fonti = content.fonti;

  return (
    <section className="storia-t-section storia-t-sources">
      <div className="storia-t-sources__head">
        <Icon className="storia-t-sources__icon" name="menu_book" />
        <span className="t-label-sm storia-t-sources__kicker">
          {fonti.eyebrow}
        </span>
      </div>

      <div>
        <h2 className="t-headline-sm storia-t-sources__title">{fonti.title}</h2>
        <p className="t-body-sm storia-t-sources__lead">{fonti.lead}</p>
      </div>

      <div className="storia-t-sources__grid">
        {fonti.items.map((source) => (
          <a
            className="storia-t-source"
            href={source.href}
            key={source.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="storia-t-source__body">
              <span className="t-label-md storia-t-source__title">
                {source.title}
              </span>
              <span className="t-body-sm storia-t-source__meta">
                {source.label}
              </span>
            </span>
            <Icon className="storia-t-source__link-icon" name="arrow_outward" />
          </a>
        ))}
      </div>
    </section>
  );
}

function renderWithEm(text, em) {
  if (!text.includes(em)) return text;

  const [before, after] = text.split(em);
  return (
    <>
      {before}
      <em className="storia-t-em">{em}</em>
      {after}
    </>
  );
}

function renderWithStrong(text, words) {
  if (!words?.length) return text;

  const escaped = words.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'g'));

  return parts.map((part, index) =>
    words.includes(part) ? (
      <strong className="storia-t-strong" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function TabletStoria() {
  return (
    <>
      <SiteHeader />

      <main className="tablet-main">
        <div className="tablet-container storia-t-container">
          <TabletHero />

          <div aria-hidden="true" className="storia-t-divider" />

          <Origini />
          <div aria-hidden="true" className="storia-t-divider" />

          <Evoluzione />
          <div aria-hidden="true" className="storia-t-divider" />

          <Cultura />
          <div aria-hidden="true" className="storia-t-divider" />

          <Artigianale />
          <div aria-hidden="true" className="storia-t-divider" />

          <Contemporaneo />
          <div aria-hidden="true" className="storia-t-divider" />

          <CallToAction />

          <Fonti />
        </div>
      </main>

      <TabletFooter />
    </>
  );
}

export default TabletStoria;
