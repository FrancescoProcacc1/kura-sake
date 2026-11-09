import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './MobileHome.css';

import { LANDING } from '../../content/landing.js';

import Icon from '../../components/Icon.jsx';
import RichText from '../../components/RichText.jsx';
import MobileFooter from '../../components/mobile/MobileFooter.jsx';
import MobileHeader from '../../components/mobile/MobileHeader.jsx';
import MobileSurvey from '../../components/mobile/MobileSurvey.jsx';

const hero = LANDING.mobile.hero;
const scopri = LANDING.mobile.scopri;
const production = LANDING.mobile.production;
const giappone = LANDING.mobile.giappone;
const progetto = LANDING.mobile.progetto;
const sources = LANDING.mobile.sources;

function MobileHome() {
  const { pathname } = useLocation();
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <div className="mobile-page">
      <MobileHeader />

      <main className="mobile-main" data-route={pathname}>
        <section className="mobile-hero">
          <div className="mobile-hero__eyebrow">
            <span className="mobile-hero__eyebrow-dot" />
            <span className="mobile-hero__eyebrow-text">{hero.badge}</span>
          </div>

          <h1 className="mobile-hero__title">{hero.title[0]}</h1>

          <p className="mobile-hero__lead">{hero.lead[0]}</p>

          <div className="mobile-hero__actions">
            <a
              className="mobile-hero__cta mobile-hero__cta--primary"
              href="#scopri"
            >
              <span>{hero.ctaPrimary}</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link
              className="mobile-hero__cta mobile-hero__cta--secondary"
              to="/storia-del-sake"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <figure className="mobile-figure">
            <img
              alt={hero.imageAlt}
              className="mobile-figure__image"
              src={hero.image}
            />
            <figcaption className="mobile-figure__caption">
              <span className="mobile-figure__caption-label">
                {hero.captionLabel}
              </span>
              <span className="mobile-figure__caption-note">
                {hero.captionNote}
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="mobile-section mobile-section--card" id="scopri">
          <span className="mobile-section__eyebrow">{scopri.eyebrow}</span>

          <h2 className="mobile-section__title">{scopri.title[0]}</h2>

          <figure className="mobile-figure">
            <img
              alt={scopri.imageAlt}
              className="mobile-figure__image"
              src={scopri.image}
            />
            <figcaption className="mobile-figure__caption mobile-figure__caption--spaced">
              <span className="mobile-figure__caption-label">
                {scopri.captionLabel}
              </span>
              <span className="mobile-figure__caption-note">
                {scopri.captionNote}
              </span>
            </figcaption>
          </figure>

          <p className="mobile-section__lead">
            <RichText segments={scopri.lead} />
          </p>
          <p className="mobile-section__lead mobile-section__lead--spaced">
            {scopri.leadSecondary[0]}
          </p>

          <div className="mobile-facts">
            {scopri.facts.map((fact, index) => (
              <div className="mobile-fact" key={fact.title}>
                <span className="mobile-fact__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mobile-fact__body">
                  <h3 className="mobile-fact__title">{fact.title}</h3>
                  <p className="mobile-fact__text">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mobile-section" id="produzione">
          <span className="mobile-section__eyebrow">{production.eyebrow}</span>

          <h2 className="mobile-section__title">{production.title[0]}</h2>

          <p className="mobile-section__lead mobile-section__lead--spaced">
            {production.lead[0]}
          </p>

          <div className="mobile-elements">
            {production.elements.map((element) => (
              <div className="mobile-element" key={element.number}>
                <div className="mobile-element__head">
                  <span className="mobile-element__number">
                    {element.number}
                  </span>
                  <Icon name={element.icon} className="mobile-element__icon" />
                </div>
                <h3 className="mobile-element__title">{element.title}</h3>
                <p className="mobile-element__text">{element.text}</p>
              </div>
            ))}
          </div>

          <div className="mobile-process">
            <div className="mobile-process__head">
              <h3 className="mobile-process__title">
                {production.processTitle}
              </h3>
              <span className="mobile-process__note">
                {production.processNote}
              </span>
            </div>

            <div className="mobile-process__steps">
              {production.steps.map((step, index) => (
                <div key={step.number}>
                  <div className="mobile-process__step">
                    <span className="mobile-process__number">
                      {step.number}
                    </span>
                    <div className="mobile-process__body">
                      <div className="mobile-process__step-head">
                        <span className="mobile-process__step-title">
                          {step.title}
                        </span>
                        <span className="mobile-process__term">
                          {step.term}
                        </span>
                      </div>
                      <p className="mobile-process__text">{step.text}</p>
                    </div>
                  </div>

                  {index < production.steps.length - 1 ? (
                    <div className="mobile-process__divider" />
                  ) : null}
                </div>
              ))}
            </div>

            <p className="mobile-process__note-text">{production.footnote}</p>
          </div>
        </section>

        <section className="mobile-section mobile-section--card" id="giappone">
          <span className="mobile-section__eyebrow">{giappone.eyebrow}</span>

          <h2 className="mobile-section__title">{giappone.title[0]}</h2>

          <p className="mobile-section__lead mobile-section__lead--spaced">
            {giappone.lead[0]}
          </p>
          <p className="mobile-section__lead mobile-section__lead--spaced">
            {giappone.leadSecondary[0]}
          </p>

          <figure className="mobile-figure mobile-figure--spaced">
            <img
              alt={giappone.imageAlt}
              className="mobile-figure__image"
              src={giappone.image}
            />
            <figcaption className="mobile-figure__caption mobile-figure__caption--spaced">
              <span className="mobile-figure__caption-label">
                {giappone.captionLabel}
              </span>
              <span className="mobile-figure__caption-note">
                {giappone.captionNote}
              </span>
            </figcaption>
          </figure>

          <div className="mobile-boxes">
            {giappone.boxes.map((box) => (
              <div className="mobile-box" key={box.title}>
                <h3 className="mobile-box__title">{box.title}</h3>
                <p className="mobile-box__text">{box.text}</p>
              </div>
            ))}
          </div>
        </section>

        <MobileSurvey />

        <section className="mobile-section mobile-section--card" id="progetto">
          <span className="mobile-section__eyebrow">{progetto.eyebrow}</span>

          <h2 className="mobile-section__title">{progetto.title[0]}</h2>

          <p className="mobile-section__lead mobile-section__lead--spaced">
            {progetto.lead[0]}
          </p>

          <div className="mobile-pillars">
            {progetto.pillars.map((pillar) => (
              <div className="mobile-pillar" key={pillar.title}>
                <span className="mobile-pillar__icon-box">
                  <Icon name={pillar.icon} className="mobile-pillar__icon" />
                </span>
                <div className="mobile-pillar__body">
                  <h3 className="mobile-pillar__title">{pillar.title}</h3>
                  <p className="mobile-pillar__text">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mobile-newsletter">
            <span className="mobile-newsletter__label">
              {progetto.newsletterLabel}
            </span>
            <h3 className="mobile-newsletter__title">
              {progetto.newsletterTitle}
            </h3>
            <p className="mobile-newsletter__text">{progetto.newsletterText}</p>

            <form className="mobile-newsletter__form" onSubmit={handleSubmit}>
              <input
                className="mobile-newsletter__input"
                placeholder={progetto.newsletterPlaceholder}
                required
                type="email"
              />
              <button className="mobile-newsletter__submit" type="submit">
                <span>{progetto.newsletterSubmit}</span>
                <span aria-hidden="true">→</span>
              </button>

              <label className="mobile-newsletter__consent">
                <input
                  className="mobile-newsletter__checkbox"
                  required
                  type="checkbox"
                />
                <span className="mobile-newsletter__consent-text">
                  {progetto.newsletterConsent[0]}
                </span>
              </label>
            </form>

            {subscribed ? (
              <div className="mobile-newsletter__success">
                <p className="mobile-newsletter__success-text">
                  <Icon
                    name="mark_email_read"
                    className="mobile-newsletter__success-icon"
                  />
                  <span>{progetto.newsletterFeedback}</span>
                </p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mobile-section mobile-section--sources" id="fonti">
          <div className="mobile-sources">
            <div className="mobile-sources__head">
              <Icon name="menu_book" className="mobile-sources__icon" />
              <h2 className="mobile-sources__title">{sources.title}</h2>
            </div>

            <p className="mobile-sources__lead">{sources.lead}</p>

            <div className="mobile-sources__links">
              {sources.links.map((link) => (
                <a
                  className="mobile-sources__link"
                  href={link.href}
                  key={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="mobile-sources__link-text">
                    {link.label}
                  </span>
                  <Icon
                    name="arrow_outward"
                    className="mobile-sources__link-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <MobileFooter />
    </div>
  );
}

export default MobileHome;
