import './DesktopStoria.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon.jsx';
import SiteLayout from '../../components/SiteLayout.jsx';
import { STORIA } from '../../content/storia.js';

const content = STORIA.desktop;

function Breadcrumb() {
  return (
    <nav aria-label="Percorso di navigazione" className="storia-breadcrumb">
      <div className="shell">
        <ol className="storia-breadcrumb__list">
          <li className="storia-breadcrumb__item">
            <Link className="storia-breadcrumb__link" to="/">
              Home
            </Link>
            <span aria-hidden="true" className="storia-breadcrumb__sep">
              /
            </span>
            <span aria-current="page" className="storia-breadcrumb__current">
              La storia del sakè
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function StoryHero() {
  const hero = content.hero;

  return (
    <section className="storia-hero shell">
      <div className="storia-hero__intro">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1 className="storia-hero__title">{hero.title}</h1>
        <p className="section-lead storia-hero__lead">{hero.lead}</p>
      </div>

      <figure className="storia-hero__figure">
        <div className="storia-hero__media">
          <img alt={hero.imageAlt} className="storia-hero__image" src={hero.image} />
          <div className="storia-hero__media-badge storia-badge">
            <span className="storia-badge__dot" />
            {hero.badge}
          </div>
        </div>
        <figcaption className="storia-figure-caption">
          <span className="storia-figure-caption__text">{hero.caption}</span>
          <span className="figure-caption__label">{hero.captionLabel}</span>
        </figcaption>
      </figure>
    </section>
  );
}

function DidYouKnow({ icon, title, children }) {
  return (
    <div className="storia-box">
      <div className="storia-box__header">
        <Icon className="storia-box__icon" name={icon} />
        <span className="storia-box__title">{title}</span>
      </div>
      <p className="storia-box__text">{children}</p>
    </div>
  );
}

function Origini() {
  const origini = content.origini;

  return (
    <section className="storia-section storia-section--tint" id={origini.id}>
      <div className="shell storia-cols storia-cols--origini">
        <div className="storia-cols__media">
          <figure className="storia-media">
            <div className="storia-media__frame storia-media__frame--portrait">
              <img
                alt={origini.imageAlt}
                className="storia-media__image storia-media__image--contrast"
                src={origini.image}
              />
              <span className="storia-media__tag">{origini.tag}</span>
            </div>
            <figcaption className="storia-media__caption">
              {origini.caption}
            </figcaption>
          </figure>
        </div>

        <div className="storia-cols__text">
          <div className="storia-block__header">
            <span className="eyebrow">{origini.eyebrow}</span>
            <h2 className="section-title">{origini.title}</h2>
          </div>

          <div className="storia-block__paragraphs storia-block__paragraphs--justify">
            {origini.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <DidYouKnow icon="menu_book" title={origini.didYouKnow.title}>
            {renderWithEm(origini.didYouKnow.text, origini.didYouKnow.em)}
          </DidYouKnow>
        </div>
      </div>
    </section>
  );
}

function TimelinePeriod({ period, index, isOpen, onToggle }) {
  const contentId = `storia-timeline-${index + 1}`;

  return (
    <li className="storia-period">
      <div className="storia-period__side storia-period__side--kanji">
        <span className="storia-period__kanji">{period.kanji}</span>
      </div>

      <div className="storia-period__node" />

      <div className="storia-period__side">
        <div className="storia-period__content">
          <span className="storia-period__era">{period.era}</span>
          <h3 className="storia-period__title">{period.title}</h3>
          <p className="storia-period__text">{period.text}</p>

          <div className="storia-period__actions">
            <button
              aria-controls={contentId}
              aria-expanded={isOpen}
              className="storia-period__toggle"
              onClick={onToggle}
              type="button"
            >
              {isOpen ? 'Chiudi —' : 'Approfondisci +'}
            </button>
          </div>

          <div className="storia-period__more" hidden={!isOpen} id={contentId}>
            <p className="storia-period__more-label">{period.more.label}</p>
            <p>{period.more.text}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

function Evoluzione() {
  const evoluzione = content.evoluzione;
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="storia-section" id={evoluzione.id}>
      <div className="shell">
        <div className="storia-block__header storia-block__header--wide">
          <span className="eyebrow">{evoluzione.eyebrow}</span>
          <h2 className="section-title">{evoluzione.title}</h2>
          <p className="section-lead">{evoluzione.lead}</p>
        </div>

        <div className="storia-timeline">
          <div className="storia-timeline__track" />
          <ol className="storia-timeline__list">
            {evoluzione.periods.map((period, index) => (
              <TimelinePeriod
                index={index}
                isOpen={openIndex === index}
                key={period.era}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                period={period}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Cultura() {
  const cultura = content.cultura;

  return (
    <section className="storia-section storia-section--tint" id={cultura.id}>
      <div className="shell storia-cols storia-cols--cultura">
        <div className="storia-cols__text">
          <div className="storia-block__header">
            <span className="eyebrow">{cultura.eyebrow}</span>
            <h2 className="section-title">{cultura.title}</h2>
          </div>

          <div className="storia-block__paragraphs">
            {cultura.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <DidYouKnow icon="spa" title={cultura.didYouKnow.title}>
            {cultura.didYouKnow.text}
          </DidYouKnow>
        </div>

        <div className="storia-cols__media">
          <figure className="storia-media">
            <div className="storia-media__frame storia-media__frame--cultura">
              <img
                alt={cultura.imageAlt}
                className="storia-media__image"
                src={cultura.image}
              />
              <span className="storia-media__tag storia-media__tag--end">
                {cultura.tag}
              </span>
            </div>
            <figcaption className="storia-media__caption storia-media__caption--end">
              {cultura.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Artigianale() {
  const artigianale = content.artigianale;

  return (
    <section className="storia-section">
      <div className="shell">
        <div className="storia-block__header storia-block__header--wide">
          <span className="eyebrow">{artigianale.eyebrow}</span>
          <h2 className="section-title">{artigianale.title}</h2>
          <p className="section-lead">{artigianale.lead}</p>
        </div>

        <figure className="storia-photo">
          <img
            alt={artigianale.imageAlt}
            className="storia-photo__image"
            src={artigianale.image}
          />
          <div className="storia-photo__overlay" />
          <figcaption className="storia-photo__content">
            <span className="storia-photo__tag">{artigianale.imageTag}</span>
            <p className="storia-photo__title">{artigianale.imageTitle}</p>
            <span className="storia-photo__credit">
              {artigianale.imageCredit}
            </span>
          </figcaption>
        </figure>

        <p className="storia-narrative">{artigianale.narrative}</p>

        <div className="storia-glossary">
          {artigianale.glossary.map((entry) => (
            <div className="storia-glossary__item" key={entry.term}>
              <div className="storia-glossary__heading">
                <h3 className="storia-glossary__term">{entry.term}</h3>
                <span className="storia-glossary__label">{entry.label}</span>
              </div>
              <p className="storia-glossary__text">
                {renderWithStrong(entry.text, entry.strong)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contemporaneo() {
  const contemporaneo = content.contemporaneo;
  const unesco = contemporaneo.unesco;

  return (
    <section className="storia-section storia-section--tint">
      <div className="shell">
        <div className="storia-wide">
          <div className="storia-block__header">
            <span className="eyebrow">{contemporaneo.eyebrow}</span>
            <h2 className="section-title">{contemporaneo.title}</h2>
          </div>

          <div className="storia-block__paragraphs storia-block__paragraphs--justify">
            {contemporaneo.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <div className="storia-unesco">
            <div className="storia-unesco__header">
              <Icon className="storia-unesco__icon" name={unesco.icon} />
              <h3 className="storia-unesco__title">{unesco.title}</h3>
            </div>
            <p className="storia-unesco__text">{unesco.text}</p>
            <div className="storia-unesco__actions">
              <a
                href={unesco.linkHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{unesco.linkLabel}</span>
                <Icon className="storia-unesco__link-icon" name="arrow_outward" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const cta = content.cta;

  return (
    <section className="storia-section">
      <div className="shell">
        <div className="storia-cta">
          <span aria-hidden="true" className="storia-cta__kanji">
            {cta.kanji}
          </span>

          <div className="storia-cta__body">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2 className="section-title">{cta.title}</h2>
            <p className="section-lead">{cta.lead}</p>

            <div className="storia-cta__actions">
              <Link className="btn btn--primary" to={cta.primary.to}>
                {cta.primary.label}
              </Link>
              <Link className="btn btn--outline" to={cta.secondary.to}>
                {cta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fonti() {
  const fonti = content.fonti;

  return (
    <section className="storia-section storia-section--fonti">
      <div className="shell">
        <div className="storia-block__header storia-block__header--wide storia-block__header--tight">
          <span className="eyebrow">{fonti.eyebrow}</span>
          <h2 className="section-title">{fonti.title}</h2>
          <p className="section-lead">{fonti.lead}</p>
        </div>

        <ol className="storia-fonti">
          {fonti.items.map((source, index) => (
            <li className="storia-fonti__item" key={source.title}>
              <span className="storia-fonti__number">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="storia-fonti__title">{source.title}</span>
              <a
                href={source.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{source.label}</span>
                <Icon className="storia-fonti__link-icon" name="arrow_outward" />
              </a>
            </li>
          ))}
        </ol>
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
      <em className="storia-emphasis">{em}</em>
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
      <strong className="storia-strong" key={`${part}-${index}`}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function DesktopStoria() {
  return (
    <SiteLayout>
      <article className="storia">
        <Breadcrumb />
        <StoryHero />
        <Origini />
        <Evoluzione />
        <Cultura />
        <Artigianale />
        <Contemporaneo />
        <CallToAction />
        <Fonti />
      </article>
    </SiteLayout>
  );
}

export default DesktopStoria;
