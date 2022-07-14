import React from 'react';

export interface TutorialStepperProps {
  maxSteps: number;
  value: number;
  onChange: (value: number) => void;
}

const TutorialStepper: React.FC<TutorialStepperProps> = ({
  maxSteps,
  value,
  onChange,
}) => (
  <div className="tutorial-stepper">
    {new Array(maxSteps).fill(null).map((_, index) => (
      <div
        key={`tutorial-step-nav-${index}`}
        className={`tutorial-step-nav ${
          index === value ? 'active' : ''
        }`}
        onClick={() => {
          onChange(index);
        }}
        onKeyPress={(evt) => {
          if (evt.key !== 'Enter') return;
          onChange(index);
        }}
        role="button"
        tabIndex={0}
        aria-label={`step-${index}`}
      />
    ))}
  </div>
);

export default TutorialStepper;
