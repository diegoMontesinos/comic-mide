import React from 'react';

import TutorialArrowSound from '../../assets/tutorial-arrow-sound.svg';

import AppBar from '../shared/AppBar';
import FadePage from '../shared/FadePage';

import './StepSound.scss';

const StepSound: React.FC = () => (
  <FadePage
    className="tutorial-step step-sound"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive />

    <img
      className="tutorial-arrow-sound"
      src={TutorialArrowSound}
      alt="Arrow Sound"
    />

    <p className="mide-text tutorial-sound-text">
      Activa o desactiva el sonido
    </p>
  </FadePage>
);

export default StepSound;
