import { useState } from 'react';

import './Questionario.css';

import { LANDING } from '../content/landing.js';

import Icon from './Icon.jsx';

const survey = LANDING.desktop.survey;
const QUESTIONS = survey.questions;

const TOTAL_STEPS = QUESTIONS.length;
const DEFAULT_ANSWERS = { q1: 'poco' };

function Questionario() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
  const [completed, setCompleted] = useState(false);

  const question = QUESTIONS[step - 1];
  const percentage = Math.round((step / TOTAL_STEPS) * 100);
  const progress = `${(step / TOTAL_STEPS) * 100}%`;

  const select = (id, value) => {
    setAnswers((previous) => ({ ...previous, [id]: value }));
  };

  const restart = () => {
    setAnswers(DEFAULT_ANSWERS);
    setCompleted(false);
    setStep(1);
  };

  return (
    <section className="questionario" id="questionario">
      <div className="shell">
        <div className="questionario__inner">
          <div className="questionario__intro">
            <span className="eyebrow">{survey.eyebrow}</span>
            <h2 className="section-title section-title--compact questionario__title">
              {survey.title[0]}
            </h2>
            <p className="questionario__lead">{survey.lead[0]}</p>
          </div>

          <div className="questionario__panel">
            {!completed ? (
              <>
                <div className="questionario__progress">
                  <div className="questionario__progress-head">
                    <span className="questionario__progress-label">
                      Domanda {step} di {TOTAL_STEPS}
                    </span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="questionario__progress-track">
                    <div
                      className="questionario__progress-bar"
                      style={{ width: progress }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="questionario__step-title">{question.title}</h3>

                  <div className="questionario__options">
                    {question.options.map((option) => {
                      const isSelected = answers[question.id] === option.value;

                      return (
                        <label
                          className={`questionario__option${isSelected ? ' questionario__option--selected' : ''}`}
                          key={option.value}
                        >
                          <span
                            className={`questionario__option-text${option.strong ? ' questionario__option-text--strong' : ''}`}
                          >
                            {option.label}
                          </span>
                          <span
                            className={`questionario__radio${isSelected ? ' questionario__radio--selected' : ''}`}
                          >
                            <span
                              className={`questionario__radio-dot${isSelected ? '' : ' questionario__radio-dot--hidden'}`}
                            />
                          </span>
                          <input
                            checked={isSelected}
                            className="questionario__input"
                            name={question.id}
                            onChange={() => select(question.id, option.value)}
                            type="radio"
                            value={option.value}
                          />
                        </label>
                      );
                    })}
                  </div>

                  <div className="questionario__actions">
                    {step === 1 ? (
                      <button
                        className="questionario__link"
                        onClick={() => setCompleted(true)}
                        type="button"
                      >
                        {survey.skip}
                      </button>
                    ) : (
                      <button
                        className="questionario__link"
                        onClick={() => setStep(step - 1)}
                        type="button"
                      >
                        {survey.back}
                      </button>
                    )}

                    {step < TOTAL_STEPS ? (
                      <button
                        className="questionario__next"
                        onClick={() => setStep(step + 1)}
                        type="button"
                      >
                        {survey.next}
                      </button>
                    ) : (
                      <button
                        className="questionario__next"
                        onClick={() => setCompleted(true)}
                        type="button"
                      >
                        {survey.submit}
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="questionario__completion">
                <div className="questionario__completion-icon">
                  <Icon name="check" />
                </div>
                <h3 className="questionario__completion-title">
                  {survey.completionTitle}
                </h3>
                <p className="questionario__completion-text">
                  {survey.completionText}
                </p>
                <button
                  className="questionario__restart"
                  onClick={restart}
                  type="button"
                >
                  {survey.restart}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questionario;
