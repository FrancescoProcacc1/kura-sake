import './Production.css';

import { LANDING } from '../content/landing.js';

import Icon from './Icon.jsx';

const production = LANDING.desktop.production;
const ELEMENTS = production.elements;
const STEPS = production.steps;

function Production() {
  return (
    <section className="production" id="produzione">
      <div className="shell">
        <div className="production__intro">
          <span className="eyebrow">{production.eyebrow}</span>
          <h2 className="section-title production__title">
            {production.title[0]}
          </h2>
          <p className="section-lead">{production.lead[0]}</p>
        </div>

        <div className="production__elements">
          {ELEMENTS.map((element) => (
            <div key={element.number} className="card">
              <div>
                <div className="production__element-head">
                  <span className="production__element-number">
                    {element.number}
                  </span>
                  <span className="production__element-kanji">
                    {element.kanji}
                  </span>
                </div>
                <h3 className="production__element-title">{element.title}</h3>
                <p className="production__element-text">{element.text}</p>
              </div>
              <div className="production__element-foot">
                <span>{element.label}</span>
                <span className="production__element-kanji-foot">
                  {element.foot}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="production__process">
          <div className="production__process-head">
            <span className="production__process-title">
              {production.processTitle}
            </span>
            <span className="production__process-note">
              {production.processNote}
            </span>
          </div>

          <div className="production__steps">
            {STEPS.map((step, index) => (
              <div
                key={step.label}
                className={
                  index === 0
                    ? 'production__step'
                    : 'production__step production__step--linked'
                }
              >
                {index > 0 ? (
                  <span className="production__step-arrow">→</span>
                ) : null}
                <div className="production__step">
                  <span className="production__step-label">{step.label}</span>
                  <span className="production__step-title">{step.title}</span>
                  <span className="production__step-text">{step.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="production__footnote">
            <p className="production__footnote-text">{production.footnote}</p>
          </div>
        </div>

        <div className="production__sources">
          <div className="production__sources-text">
            <span className="production__sources-label">
              {production.sourcesLabel}
            </span>
            <p className="production__sources-lead">{production.sourcesLead}</p>
          </div>

          <div className="production__sources-links">
            {production.sources.map((source) => (
              <a
                className="production__source-link"
                href={source.href}
                key={source.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{source.label}</span>
                <Icon
                  name="arrow_outward"
                  className="production__source-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Production;
