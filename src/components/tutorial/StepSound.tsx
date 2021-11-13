import React from 'react';

import TutorialArrowSound from '../../assets/tutorial-arrow-sound.svg';

import AppBar from '../shared/AppBar';

const StepSound : React.FC = () => (
  <div className="tutorial-step">
    <AppBar alwaysActive />

    <p className="mide-text tutorial-sound-text">
      Activa o desactiva el sonido
    </p>

    <img className="tutorial-arrow-sound" src={TutorialArrowSound} alt="Arrow Sound" />
  </div>
);

export default StepSound;
