import { useEffect, useRef, useState } from 'react';

import './Progetto.css';

import { LANDING } from '../content/landing.js';

import Icon from './Icon.jsx';
import RichText from './RichText.jsx';

const progetto = LANDING.desktop.progetto;
const PILLARS = progetto.pillars;

function Progetto() {
  const [subscribed, setSubscribed] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubscribed(false), 6000);
  };

  return (
    <section className="progetto" id="progetto">
      <div className="shell">
        <div className="progetto__grid">
          <div className="progetto__content">
            <span className="eyebrow">{progetto.eyebrow}</span>
            <h2 className="section-title progetto__title">
              {progetto.title[0]}
            </h2>
            <p className="section-lead section-lead--lg progetto__lead">
              {progetto.lead[0]}
            </p>

            <div className="progetto__pillars">
              {PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <div className="progetto__pillar-head">
                    <Icon
                      name={pillar.icon}
                      className="progetto__pillar-icon"
                    />
                    <span className="progetto__pillar-title">
                      {pillar.title}
                    </span>
                  </div>
                  <p className="progetto__pillar-text">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="progetto__newsletter">
            <span className="progetto__newsletter-label">
              {progetto.newsletterLabel}
            </span>
            <h3 className="progetto__newsletter-title">
              {progetto.newsletterTitle}
            </h3>
            <p className="progetto__newsletter-text">
              {progetto.newsletterText}
            </p>

            <form
              className="progetto__newsletter-form"
              id="newsletter-form"
              onSubmit={handleSubmit}
            >
              <div className="progetto__newsletter-row">
                <input
                  className="progetto__newsletter-input"
                  id="nl-email-input"
                  placeholder={progetto.newsletterPlaceholder}
                  required
                  type="email"
                />
                <button className="progetto__newsletter-submit" type="submit">
                  {progetto.newsletterSubmit}
                </button>
              </div>

              <div className="progetto__consent">
                <input
                  className="progetto__consent-input"
                  id="nl-consent"
                  required
                  type="checkbox"
                />
                <label className="progetto__consent-label" htmlFor="nl-consent">
                  <RichText segments={progetto.newsletterConsent} />
                </label>
              </div>

              {subscribed ? (
                <div className="progetto__newsletter-feedback" id="nl-feedback">
                  {progetto.newsletterFeedback}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progetto;
