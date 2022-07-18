import React, { ReactNode, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import TutorialBackgroundImg from '../../assets/tutorial-background.svg';

import FadePage from '../shared/FadePage';
import TutorialStepper from './TutorialStepper';
import StepArrows from './StepArrows';
import StepSound from './StepSound';
import StepNavigator from './StepNavigator';
import StepMenu from './StepMenu';
import StepFinal from './StepFinal';

import './index.scss';

const STEPS: ReactNode[] = [
  <StepArrows />,
  <StepSound />,
  <StepNavigator />,
  <StepMenu />,
  <StepFinal />,
];

const TutorialPage: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = (): void => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <FadePage className="tutorial-page page">
      <img src={TutorialBackgroundImg} alt="Background" />

      <div className="tutorial-content">
        <AnimatePresence>
          <div
            key={`tutorial-step-${step}`}
            className="tutorial-step-container"
            onClick={nextStep}
            onKeyPress={(evt) => {
              if (evt.key === 'Enter') nextStep();
            }}
            role="button"
            tabIndex={0}
          >
            {STEPS[step]}
          </div>
        </AnimatePresence>
      </div>

      <Link to="/comic" className="mide-text skip-tutorial">
        Saltar tutorial
      </Link>

      <div className="tutorial-stepper-container">
        <TutorialStepper
          maxSteps={STEPS.length}
          value={step}
          onChange={(value) => {
            setStep(value);
          }}
        />
      </div>
    </FadePage>
  );
};

export default TutorialPage;
