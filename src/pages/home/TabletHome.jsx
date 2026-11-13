import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './TabletHome.css';

import { LANDING } from '../../content/landing.js';
import { localizedPath } from '../../content/locale.js';

import { postToSheet } from '../../config.js';

import RichText, { Lines } from '../../components/RichText.jsx';
import SiteHeader from '../../components/SiteHeader.jsx';
import TabletFooter from '../../components/tablet/TabletFooter.jsx';
import TabletSurvey from '../../components/tablet/TabletSurvey.jsx';

const hero = LANDING.tablet.hero;
const scopri = LANDING.tablet.scopri;
const production = LANDING.tablet.production;
const giappone = LANDING.tablet.giappone;
const progetto = LANDING.tablet.progetto;

function TabletHome() {
  const { pathname } = useLocation();
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email');
    postToSheet({ type: 'newsletter', email, consent: true });
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <SiteHeader />

      <main className="tablet-main" data-route={pathname}>
        <div className="tablet-container">
          <section className="tablet-hero">
            <div className="tablet-hero__head">
              <div className="tablet-hero__eyebrow">
                <span className="tablet-hero__eyebrow-dot" />
                <span className="t-label-sm tablet-hero__eyebrow-text">
                  {hero.eyebrow}
                </span>
              </div>

              <h1 className="tablet-hero__title">
                <RichText segments={hero.titleSegments} />
              </h1>

              <p className="t-body-lg tablet-hero__lead">{hero.lead[0]}</p>
            </div>

            <div className="tablet-hero__actions">
              <a
                className="t-label-md tablet-btn tablet-btn--primary"
                href="#scopri"
              >
                {hero.ctaPrimary}
              </a>
              <Link
                className="t-label-md tablet-btn tablet-btn--secondary"
                to={localizedPath('/storia-del-sake')}
              >
                {hero.ctaSecondary}
              </Link>
            </div>

            <figure className="tablet-hero__figure">
              <img
                alt={hero.imageAlt}
                className="tablet-hero__image"
                src={hero.image}
              />
              <figcaption className="tablet-hero__caption">
                <span className="tablet-hero__caption-text">
                  <span className="t-headline-sm">{hero.captionTitle}</span>
                  <span className="t-label-sm">{hero.captionText}</span>
                </span>
                <span className="t-mono tablet-hero__caption-tag">
                  {hero.captionTag}
                </span>
              </figcaption>
            </figure>
          </section>

          <section className="tablet-section" id="scopri">
            <div className="tablet-section__head">
              <span className="t-label-sm tablet-section__eyebrow">
                {scopri.eyebrow}
              </span>
              <h2 className="t-headline-lg tablet-section__title">
                <Lines lines={scopri.title} />
              </h2>
            </div>

            <div className="tablet-scopri__card">
              <div className="tablet-scopri__text">
                <p className="t-body-lg tablet-scopri__lead">
                  <RichText segments={scopri.lead} />
                </p>
                <p className="t-body-md tablet-scopri__lead-secondary">
                  {scopri.leadSecondary[0]}
                </p>
                <div className="tablet-scopri__tag">
                  <span className="t-label-sm tablet-scopri__tag-text">
                    {scopri.leadTag}
                  </span>
                  <span className="tablet-scopri__tag-rule" />
                </div>
              </div>

              <div className="tablet-scopri__media">
                <img
                  alt={scopri.imageAlt}
                  className="tablet-scopri__image"
                  src={scopri.image}
                />
              </div>
            </div>

            <div className="tablet-blocks">
              {scopri.blocks.map((block) => (
                <div className="tablet-block" key={block.label}>
                  <div className="tablet-block__head">
                    <span className="t-label-sm tablet-block__label">
                      {block.label}
                    </span>
                    <span className="t-headline-sm tablet-block__kanji">
                      {block.kanji}
                    </span>
                  </div>
                  <h3 className="t-headline-sm tablet-block__title">
                    {block.title}
                  </h3>
                  <p className="t-body-sm tablet-block__text">{block.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tablet-section" id="produzione">
            <div className="tablet-section__head">
              <span className="t-label-sm tablet-section__eyebrow">
                {production.eyebrow}
              </span>
              <h2 className="t-headline-lg tablet-section__title">
                <Lines lines={production.title} />
              </h2>
              <p className="t-body-md tablet-section__lead">
                {production.lead[0]}
              </p>
            </div>

            <div className="tablet-elements">
              {production.elements.map((element) => (
                <div className="tablet-element" key={element.number}>
                  <div className="tablet-element__head">
                    <div className="tablet-element__labels">
                      <span className="t-mono tablet-element__label">
                        {element.number} / ELEMENTO
                      </span>
                      <h3 className="t-headline-sm tablet-element__title">
                        {element.title}
                      </h3>
                    </div>
                    <span className="tablet-element__kanji">
                      {element.kanji}
                    </span>
                  </div>
                  <p className="t-body-md tablet-element__text">
                    {element.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="tablet-process">
              <div className="tablet-process__head">
                <h4 className="t-headline-sm">{production.processTitle}</h4>
                <span className="t-label-sm tablet-process__note">
                  {production.processNote}
                </span>
              </div>

              <div className="tablet-process__steps">
                {production.steps.map((step) => (
                  <div className="tablet-process__step" key={step.number}>
                    <div className="tablet-process__step-head">
                      <span className="t-mono tablet-process__number">
                        {step.number}
                      </span>
                      <span className="tablet-process__dot" />
                    </div>
                    <span className="tablet-process__title">{step.title}</span>
                    <span className="t-body-sm tablet-process__text">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>

              <p className="t-body-sm tablet-process__footnote">
                {production.footnote}
              </p>

              <div className="tablet-process__sources">
                <span className="t-label-sm tablet-process__sources-label">
                  {production.sourcesLabel}
                </span>
                <div className="tablet-process__sources-list">
                  {production.sources.map((source) => (
                    <span className="tablet-process__source" key={source}>
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="tablet-section" id="giappone">
            <div className="tablet-section__head">
              <span className="t-label-sm tablet-section__eyebrow">
                {giappone.eyebrow}
              </span>
              <h2 className="t-headline-lg tablet-section__title">
                {giappone.title[0]}
              </h2>
              <p className="t-body-md tablet-section__lead">
                {giappone.lead[0]}
              </p>
            </div>

            <div className="tablet-territory">
              <div className="tablet-territory__media">
                <img
                  alt={giappone.imageAlt}
                  className="tablet-territory__image"
                  src={giappone.image}
                />
                <div className="tablet-territory__caption">
                  <span className="t-headline-sm">{giappone.captionTitle}</span>
                  <span className="t-body-sm">{giappone.captionText}</span>
                </div>
              </div>

              <div className="tablet-territory__boxes">
                {giappone.boxes.map((box) => (
                  <div className="tablet-territory__box" key={box.title}>
                    <div className="tablet-territory__box-head">
                      <span className="tablet-territory__dot" />
                      <h3 className="tablet-territory__box-title">
                        {box.title}
                      </h3>
                    </div>
                    <p className="t-body-sm tablet-territory__box-text">
                      {box.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <TabletSurvey />

          <section className="tablet-progetto" id="progetto">
            <div className="tablet-progetto__head">
              <div className="tablet-progetto__intro">
                <span className="t-label-sm tablet-section__eyebrow">
                  {progetto.eyebrow}
                </span>
                <h2 className="t-headline-lg tablet-section__title">
                  <Lines lines={progetto.title} />
                </h2>
                <p className="t-body-md tablet-section__lead">
                  {progetto.lead[0]}
                </p>
              </div>

              <div className="tablet-progetto__pills">
                {progetto.pills.map((pill) => (
                  <span className="t-label-md tablet-progetto__pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="tablet-newsletter">
              <div className="tablet-newsletter__text">
                <h3 className="t-headline-sm">{progetto.newsletterTitle}</h3>
                <p className="t-body-sm">{progetto.newsletterText}</p>
              </div>

              <form
                className="tablet-newsletter__form"
                onSubmit={handleSubmit}
              >
                <div className="tablet-newsletter__row">
                  <input
                    className="t-body-md tablet-newsletter__input"
                    name="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]{2,}"
                    placeholder={progetto.newsletterPlaceholder}
                    required
                    title="Inserisci un'email completa, es. nome@esempio.it"
                    type="email"
                  />
                  <button
                    className="t-label-md tablet-newsletter__submit"
                    type="submit"
                  >
                    {progetto.newsletterSubmit}
                  </button>
                </div>

                <label className="tablet-newsletter__consent">
                  <input
                    className="tablet-newsletter__checkbox"
                    required
                    type="checkbox"
                  />
                  <span className="t-body-sm tablet-newsletter__consent-text">
                    <RichText segments={progetto.newsletterConsent} />
                  </span>
                </label>
              </form>

              {subscribed ? (
                <p className="t-body-sm tablet-newsletter__feedback">
                  {progetto.newsletterFeedback}
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </main>

      <TabletFooter />
    </>
  );
}

export default TabletHome;
