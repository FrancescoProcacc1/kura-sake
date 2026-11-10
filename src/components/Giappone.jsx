import './Giappone.css';

import { LANDING } from '../content/landing.js';

import RichText from './RichText.jsx';

const giappone = LANDING.desktop.giappone;
const BOXES = giappone.boxes;

function Giappone() {
  return (
    <section className="giappone" id="giappone">
      <div className="shell">
        <div className="giappone__intro">
          <span className="eyebrow">{giappone.eyebrow}</span>
          <h2 className="section-title giappone__title">{giappone.title[0]}</h2>
          <p className="section-lead section-lead--lg">
            <RichText segments={giappone.lead} />
            <br className="giappone__lead-break" />
            <RichText segments={giappone.leadAfterBreak} />
          </p>
        </div>

        <div className="giappone__grid">
          <div className="giappone__figure">
            <div className="giappone__media">
              <img
                alt={giappone.imageAlt}
                className="giappone__image"
                src={giappone.image}
              />
            </div>
            <div className="figure-caption">
              <span className="figure-caption__label">
                {giappone.captionLabel}
              </span>
              <span className="figure-caption__note">
                {giappone.captionNote}
              </span>
            </div>
          </div>

          <div className="giappone__boxes">
            {BOXES.map((box) => (
              <div key={box.label} className="giappone__box">
                <span className="giappone__box-label">{box.label}</span>
                <h3 className="giappone__box-title">{box.title}</h3>
                <p className="giappone__box-text">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Giappone;
