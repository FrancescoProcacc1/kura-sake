import { Link } from 'react-router-dom';

import './Hero.css';

import { LANDING } from '../content/landing.js';

const hero = LANDING.desktop.hero;

function Hero() {
  return (
    <section className="hero shell">
      <div className="hero__grid">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-label">{hero.badge}</span>
          </div>

          <h1 className="hero__title">{hero.title[0]}</h1>

          <p className="section-lead section-lead--lg hero__lead">
            {hero.lead[0]}
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#scopri">
              {hero.ctaPrimary}
            </a>
            <Link className="btn btn--outline" to="/storia-del-sake">
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="hero__figure">
          <div className="hero__media">
            <img alt={hero.imageAlt} className="hero__image" src={hero.image} />
          </div>
          <div className="figure-caption">
            <span className="figure-caption__label">{hero.captionLabel}</span>
            <span className="figure-caption__note">{hero.captionNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
