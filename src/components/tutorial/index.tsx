import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import TutorialBackgroundImg from '../../assets/tutorial-background.svg';

import './index.scss';

import TutorialStepper from './TutorialStepper';
import StepArrows from './StepArrows';
import StepSound from './StepSound';
import StepMenu from './StepMenu';

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
              {step === 2 && <StepMenu />}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <Link to="/" className="mide-text skip-tutorial">Saltar tutorial</Link>

      <TutorialStepper
        maxSteps={TOTAL_STEPS}
        value={step}
        onChange={(value) => { setStep(value); }}
      />
    </div>
  );
};

export default Tutorial;
