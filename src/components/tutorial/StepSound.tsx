import React from 'react';

import TutorialArrowSound from '../../assets/tutorial-arrow-sound.svg';

import AppBar from '../shared/AppBar';

const StepSound: React.FC = () => (
  <div className="tutorial-step">
    <AppBar alwaysActive />

    <img
      className="tutorial-arrow-sound"
      src={TutorialArrowSound}
      alt="Arrow Sound"
    />

    <p className="mide-text tutorial-sound-text">
      Activa o desactiva el sonido
    </p>
  </div>
);

export default StepSound;
