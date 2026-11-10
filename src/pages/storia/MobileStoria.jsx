import './MobileStoria.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon.jsx';
import MobileFooter from '../../components/mobile/MobileFooter.jsx';
import MobileHeader from '../../components/mobile/MobileHeader.jsx';
import { STORIA } from '../../content/storia.js';

/*
 * La variante mobile condivide i testi con la versione desktop
 * (STORIA.desktop): cambia solo la struttura di layout.
 */
const content = STORIA.desktop;

function MobileBreadcrumb() {
  return (
    <nav aria-label="Percorso di navigazione" className="storia-mobile-breadcrumb">
      <Link to="/">Home</Link>
      <span aria-hidden="true" className="storia-mobile-breadcrumb__sep">
        /
      </span>
      <span aria-current="page" className="storia-mobile-breadcrumb__current">
        La storia del sakè
      </span>
    </nav>
  );
}

function Figure({
  image,
  imageAlt,
  filter = false,
  badge = null,
  caption = null,
  captionLabel = null,
}) {
  return (
    <figure className="mobile-figure">
      <div className="storia-mobile-figure">
        <img
          alt={imageAlt}
          className={`mobile-figure__image${
            filter ? ' storia-mobile-figure__image--mono' : ''
          }`}
          src={image}
        />
        {badge ? (
          <span className="storia-mobile-figure__badge">{badge}</span>
        ) : null}
      </div>
      {caption || captionLabel ? (
        <figcaption className="mobile-figure__caption">
          {captionLabel ? (
            <span className="mobile-figure__caption-label">{captionLabel}</span>
          ) : null}
          {caption ? (
            <span className="mobile-figure__caption-note">{caption}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

function KnowBox({ title, heading = null, children }) {
  return (
    <div className="storia-mobile-know">
      <div className="storia-mobile-know__head">
        <Icon className="storia-mobile-know__icon" name="auto_stories" />
        <span className="storia-mobile-know__title">{title}</span>
      </div>
      {heading ? <h3 className="storia-mobile-know__heading">{heading}</h3> : null}
      <p className="storia-mobile-know__text">{children}</p>
    </div>
  );
}

function MobileHero() {
  const hero = content.hero;

  return (
    <section className="mobile-hero">
      <div className="mobile-hero__eyebrow">
        <span className="mobile-hero__eyebrow-dot" />
        <span className="mobile-hero__eyebrow-text">{hero.eyebrow}</span>
      </div>

      <h1 className="mobile-hero__title">{hero.title}</h1>
      <p className="mobile-hero__lead">{hero.lead}</p>

      <figure className="mobile-figure">
        <div className="storia-mobile-figure">
          <img
            alt={hero.imageAlt}
            className="mobile-figure__image"
            src={hero.image}
          />
          <span className="storia-mobile-figure__badge">Hida Takayama</span>
        </div>
        <figcaption className="mobile-figure__caption">
          <span className="mobile-figure__caption-label">
            {hero.captionLabel}
          </span>
          <span className="mobile-figure__caption-note">{hero.caption}</span>
        </figcaption>
      </figure>
    </section>
  );
}

function Origini() {
  const origini = content.origini;

  return (
    <section className="mobile-section mobile-section--card" id={origini.id}>
      <span className="mobile-section__eyebrow">{origini.eyebrow}</span>
      <h2 className="mobile-section__title">{origini.title}</h2>

      <Figure
        badge={origini.tag}
        caption={origini.caption}
        image={origini.image}
        imageAlt={origini.imageAlt}
      />

      <div className="storia-mobile-paragraphs">
        {origini.paragraphs.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>

      <KnowBox title={origini.didYouKnow.title}>
        {renderWithEm(origini.didYouKnow.text, origini.didYouKnow.em)}
      </KnowBox>
    </section>
  );
}

function TimelinePeriod({ period, index, isOpen, onToggle }) {
  const contentId = `storia-mobile-epoca-${index + 1}`;

  return (
    <div className="mobile-process__step">
      <span className="mobile-process__number">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="mobile-process__body">
        <div className="mobile-process__step-head">
          <span className="mobile-process__step-title">{period.title}</span>
          <span className="mobile-process__term">{period.era}</span>
        </div>
        <p className="mobile-process__text">{period.text}</p>

        <div className="storia-mobile-toggle-row">
          <button
            aria-controls={contentId}
            aria-expanded={isOpen}
            className="storia-mobile-toggle"
            onClick={onToggle}
            type="button"
          >
            {isOpen ? 'Chiudi —' : 'Approfondisci +'}
          </button>
        </div>

        <div className="storia-mobile-more" hidden={!isOpen} id={contentId}>
          <p className="storia-mobile-more__label">{period.more.label}</p>
          <p>{period.more.text}</p>
        </div>
      </div>
    </div>
  );
}

function Evoluzione() {
  const evoluzione = content.evoluzione;
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="mobile-section" id={evoluzione.id}>
      <span className="mobile-section__eyebrow">{evoluzione.eyebrow}</span>
      <h2 className="mobile-section__title">{evoluzione.title}</h2>
      <p className="mobile-section__lead">{evoluzione.lead}</p>

      <div className="mobile-process storia-mobile-timeline">
        <div className="mobile-process__head">
          <h3 className="mobile-process__title">Sei epoche, mille anni</h3>
          <span className="mobile-process__note">Timeline</span>
        </div>

        <div className="mobile-process__steps">
          {evoluzione.periods.map((period, index) => (
            <div key={period.era}>
              <TimelinePeriod
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                period={period}
              />

              {index < evoluzione.periods.length - 1 ? (
                <div className="mobile-process__divider" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cultura() {
  const cultura = content.cultura;

  return (
    <section className="mobile-section mobile-section--card" id={cultura.id}>
      <span className="mobile-section__eyebrow">{cultura.eyebrow}</span>
      <h2 className="mobile-section__title">{cultura.title}</h2>

      <div className="storia-mobile-paragraphs storia-mobile-paragraphs--lead">
        {cultura.paragraphs.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>

      <Figure
        caption={cultura.caption}
        captionLabel={cultura.tag}
        image={cultura.image}
        imageAlt={cultura.imageAlt}
      />

      <KnowBox
        heading="Le botti nei santuari"
        title={cultura.didYouKnow.title}
      >
        {cultura.didYouKnow.text}
      </KnowBox>
    </section>
  );
}

function Artigianale() {
  const artigianale = content.artigianale;

  return (
    <section className="mobile-section" id="artigianale">
      <span className="mobile-section__eyebrow">{artigianale.eyebrow}</span>
      <h2 className="mobile-section__title">{artigianale.title}</h2>
      <p className="mobile-section__lead">{artigianale.lead}</p>

      <Figure
        badge="Koshiki & Vapore"
        caption={artigianale.imageCredit}
        captionLabel={artigianale.imageTag}
        filter={true}
        image={artigianale.image}
        imageAlt={artigianale.imageAlt}
      />

      <p className="storia-mobile-narrative">{artigianale.narrative}</p>

      <div className="storia-mobile-glossary">
        {artigianale.glossary.map((entry) => (
          <div className="storia-mobile-card" key={entry.term}>
            <div className="storia-mobile-card__head">
              <span className="storia-mobile-card__kanji">
                {entry.term.split(' — ')[1]}
              </span>
              <span className="storia-mobile-card__label">{entry.label}</span>
            </div>
            <h3 className="storia-mobile-card__title">{entry.term}</h3>
            <p className="storia-mobile-card__text">
              {renderWithStrong(entry.text, entry.strong)}
            </p>
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
    <section className="mobile-section mobile-section--card">
      <span className="mobile-section__eyebrow">{contemporaneo.eyebrow}</span>
      <h2 className="mobile-section__title">{contemporaneo.title}</h2>

      <div className="storia-mobile-paragraphs storia-mobile-paragraphs--lead">
        {contemporaneo.paragraphs.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>

      <div className="storia-mobile-unesco">
        <div className="storia-mobile-unesco__head">
          <Icon className="storia-mobile-unesco__icon" name={unesco.icon} />
          <span className="storia-mobile-unesco__kicker">
            Riconoscimento mondiale
          </span>
        </div>
        <h3 className="storia-mobile-unesco__title">{unesco.title}</h3>
        <p className="storia-mobile-unesco__text">{unesco.text}</p>
        <a href={unesco.linkHref} rel="noopener noreferrer" target="_blank">
          <span>{unesco.linkLabel}</span>
          <Icon
            className="storia-mobile-unesco__link-icon"
            name="arrow_outward"
          />
        </a>
      </div>
    </section>
  );
}

function CallToAction() {
  const cta = content.cta;

  return (
    <section className="mobile-section">
      <div className="storia-mobile-cta">
        <span aria-hidden="true" className="storia-mobile-cta__dot" />
        <h2 className="storia-mobile-cta__title">{cta.title}</h2>
        <p className="storia-mobile-cta__lead">{cta.lead}</p>

        <div className="storia-mobile-cta__actions">
          <Link
            className="mobile-hero__cta mobile-hero__cta--primary"
            to={cta.primary.to}
          >
            {cta.primary.label}
          </Link>
          <Link
            className="mobile-hero__cta mobile-hero__cta--secondary"
            to={cta.secondary.to}
          >
            {cta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Fonti() {
  const fonti = content.fonti;

  return (
    <section className="mobile-section mobile-section--sources" id="fonti">
      <div className="mobile-sources">
        <div className="mobile-sources__head">
          <Icon className="mobile-sources__icon" name="menu_book" />
          <h2 className="mobile-sources__title">{fonti.title}</h2>
        </div>

        <p className="mobile-sources__lead">{fonti.lead}</p>

        <div className="mobile-sources__links">
          {fonti.items.map((source) => (
            <a
              href={source.href}
              key={source.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="mobile-sources__link-text">
                {source.title} — {source.label}
              </span>
              <Icon
                className="mobile-sources__link-icon"
                name="arrow_outward"
              />
            </a>
          ))}
        </div>
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
      <em className="storia-mobile-em">{em}</em>
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
      <strong className="storia-mobile-strong" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function MobileStoria() {
  return (
    <div className="mobile-page">
      <MobileHeader />

      <main className="mobile-main">
        <MobileBreadcrumb />
        <MobileHero />
        <Origini />
        <Evoluzione />
        <Cultura />
        <Artigianale />
        <Contemporaneo />
        <CallToAction />
        <Fonti />
      </main>

      <MobileFooter />
    </div>
  );
}

export default MobileStoria;
