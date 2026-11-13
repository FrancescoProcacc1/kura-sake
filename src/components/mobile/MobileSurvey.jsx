import { useState } from 'react';

import './MobileSurvey.css';

import { LANDING } from '../../content/landing.js';
import { getLocale } from '../../content/locale.js';
import { UI } from '../../content/ui.js';

import { postToSheet } from '../../config.js';

import Icon from '../Icon.jsx';

const survey = LANDING.mobile.survey;
const QUESTIONS = survey.questions;

const TOTAL_STEPS = QUESTIONS.length;
const DEFAULT_ANSWERS = { q1: 'mai' };
const UI_LABELS = UI[getLocale()];

function MobileSurvey() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
  const [completed, setCompleted] = useState(false);

  const question = QUESTIONS[step - 1];
  const percentage = Math.round((step / TOTAL_STEPS) * 100);
  const isLastStep = step === TOTAL_STEPS;
  const progressLabel = UI_LABELS.surveyProgress
    .replace('{step}', step)
    .replace('{total}', TOTAL_STEPS);

  const select = (id, value) => {
    setAnswers((previous) => ({ ...previous, [id]: value }));
  };

  const restart = () => {
    setAnswers(DEFAULT_ANSWERS);
    setCompleted(false);
    setStep(1);
  };

  const next = () => {
    if (isLastStep) {
      postToSheet({ type: 'survey', ...answers });
      setCompleted(true);
      return;
    }
    setStep(step + 1);
  };

  return (
    <section className="mobile-survey" id="questionario">
      <div className="mobile-survey__head">
        <span className="mobile-survey__eyebrow">{survey.eyebrow}</span>
        <h2 className="mobile-survey__title">{survey.title[0]}</h2>
        <p className="mobile-survey__lead">{survey.lead[0]}</p>
      </div>

      <div className="mobile-survey__panel">
        {!completed ? (
          <>
            <div className="mobile-survey__progress">
              <div className="mobile-survey__progress-head">
                <span className="mobile-survey__step-label">
                  {progressLabel}
                </span>
                <button
                  className="mobile-survey__skip"
                  onClick={() => setCompleted(true)}
                  type="button"
                >
                  {survey.skip}
                </button>
              </div>
              <div className="mobile-survey__track">
                <div
                  className="mobile-survey__bar"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <h3 className="mobile-survey__question">{question.title}</h3>

            <div className="mobile-survey__options">
              {question.options.map((option) => {
                const isSelected = answers[question.id] === option.value;

                return (
                  <label
                    className={`mobile-survey__option${isSelected ? ' mobile-survey__option--selected' : ''}`}
                    key={option.value}
                  >
                    <span className="mobile-survey__option-text">
                      {option.label}
                    </span>
                    <input
                      checked={isSelected}
                      className="mobile-survey__radio"
                      name={question.id}
                      onChange={() => select(question.id, option.value)}
                      type="radio"
                      value={option.value}
                    />
                  </label>
                );
              })}
            </div>

            <div className="mobile-survey__actions">
              {step > 1 ? (
                <button
                  className="mobile-survey__back"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  {survey.back}
                </button>
              ) : null}

              <button
                className="mobile-survey__next"
                onClick={next}
                type="button"
              >
                <span>{isLastStep ? survey.submit : survey.next}</span>
                <span aria-hidden="true">{isLastStep ? '✓' : '→'}</span>
              </button>
            </div>
          </>
        ) : (
          <div className="mobile-survey__completion">
            <div className="mobile-survey__completion-icon">
              <Icon name="check_circle" />
            </div>
            <h3 className="mobile-survey__completion-title">
              {survey.completionTitle}
            </h3>
            <p className="mobile-survey__completion-text">
              {survey.completionText}
            </p>
            <button
              className="mobile-survey__restart"
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

export default MobileSurvey;
