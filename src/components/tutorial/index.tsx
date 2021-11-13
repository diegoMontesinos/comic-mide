import React, { useState } from 'react';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

import TutorialBackgroundImg from '../../assets/tutorial-background.svg';

import './index.scss';

import StepArrows from './StepArrows';
import StepSound from './StepSound';

const TOTAL_STEPS = 4;

const Tutorial: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const nextStep = (): void => {
    if (step < (TOTAL_STEPS - 1)) {
      setStep(step + 1);
    }
  };

  return (
    <div className="tutorial">
      <img src={TutorialBackgroundImg} alt="Background" />

      <div className="tutorial-content">
        <SwitchTransition>
          <CSSTransition
            key={step}
            classNames="tutorial-fade"
            timeout={200}
          >
            <div
              className="tutorial-step-container"
              onClick={nextStep}
              onKeyPress={(evt) => {
                if (evt.key === 'Enter') nextStep();
              }}
              role="button"
              tabIndex={0}
            >
              {step === 0 && <StepArrows />}
              {step === 1 && <StepSound />}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default Tutorial;
