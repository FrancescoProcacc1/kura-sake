import { useState } from 'react';

import './TabletSurvey.css';
import './TabletTheme.css';

import { LANDING } from '../../content/landing.js';

const survey = LANDING.tablet.survey;

const TOTAL_STEPS = survey.questions.length;

function TabletSurvey() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(1);
  const [completed, setCompleted] = useState(false);

  const percentage = Math.round((step / TOTAL_STEPS) * 100);
  const progress = `${(step / TOTAL_STEPS) * 100}%`;
  const question = survey.questions[step - 1];

  const next = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      return;
    }
    setCompleted(true);
  };

  const restart = () => {
    setStep(1);
    setSelected(1);
    setCompleted(false);
  };

  return (
    <section className="tablet-survey" id="questionario">
      <div className="tablet-survey__panel">
        {!completed ? (
          <>
            <div className="tablet-survey__progress">
              <div className="tablet-survey__progress-head">
                <span className="t-label-sm tablet-survey__step">
                  Domanda {step} di {TOTAL_STEPS}
                </span>
                <span className="t-mono tablet-survey__percentage">
                  {percentage}% COMPLETATO
                </span>
              </div>
              <div className="tablet-survey__track">
                <div
                  className="tablet-survey__bar"
                  style={{ width: progress }}
                />
              </div>
            </div>

            <div className="tablet-survey__question">
              <h2 className="t-headline-md">{survey.title[0]}</h2>
              <p className="t-body-md">{question.title}</p>
            </div>

            <div className="tablet-survey__options">
              {survey.options.map((option, index) => {
                const isSelected = selected === index;

                return (
                  <button
                    className={`tablet-survey__option${isSelected ? ' tablet-survey__option--selected' : ''}`}
                    key={option}
                    onClick={() => setSelected(index)}
                    type="button"
                  >
                    <span
                      className={`t-body-md tablet-survey__option-text${isSelected ? ' tablet-survey__option-text--selected' : ''}`}
                    >
                      {option}
                    </span>
                    <span
                      className={`tablet-survey__marker${isSelected ? ' tablet-survey__marker--selected' : ''}`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="tablet-survey__actions">
              <button
                className="t-label-md tablet-survey__skip"
                onClick={() => setCompleted(true)}
                type="button"
              >
                {survey.skip}
              </button>
              <button
                className="t-label-md tablet-survey__next"
                onClick={next}
                type="button"
              >
                <span>{survey.next}</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </>
        ) : (
          <div className="tablet-survey__completion">
            <h3 className="t-headline-md">{survey.completionTitle}</h3>
            <p className="t-body-md">{survey.completionText}</p>
            <button
              className="t-label-md tablet-survey__skip"
              onClick={restart}
              type="button"
            >
              {survey.restart}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default TabletSurvey;
