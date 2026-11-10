import './Scopri.css';

import { LANDING } from '../content/landing.js';

import RichText from './RichText.jsx';

const scopri = LANDING.desktop.scopri;
const FACTS = scopri.facts;

function Scopri() {
  return (
    <section className="scopri" id="scopri">
      <div className="shell">
        <div className="scopri__grid">
          <div className="scopri__figure">
            <div className="scopri__media">
              <img
                alt={scopri.imageAlt}
                className="scopri__image"
                src={scopri.image}
              />
            </div>
            <div className="figure-caption">
              <span className="figure-caption__label">
                {scopri.captionLabel}
              </span>
              <span className="figure-caption__note">{scopri.captionNote}</span>
            </div>
          </div>

          <div className="scopri__content">
            <div className="scopri__eyebrow">
              <span className="eyebrow eyebrow--inline">{scopri.eyebrow}</span>
            </div>

            <h2 className="section-title scopri__title">{scopri.title[0]}</h2>

            <p className="section-lead section-lead--lg scopri__lead">
              <RichText segments={scopri.lead} />
              <br className="scopri__lead-break" />
              <RichText segments={scopri.leadAfterBreak} />
            </p>

            <div className="scopri__facts">
              {FACTS.map((fact) => (
                <div key={fact.title}>
                  <span className="scopri__fact-title">{fact.title}</span>
                  <p className="scopri__fact-text">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scopri;
