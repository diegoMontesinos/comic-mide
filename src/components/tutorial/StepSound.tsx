import React from 'react';

import AppBar, { AppBarItem } from '../shared/AppBar';

import FadePage from '../shared/FadePage';

const StepSound: React.FC = () => (
  <FadePage
    className="tutorial-step step-sound"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive glowItem={AppBarItem.SOUND} />

    <p className="mide-text tutorial-text">
      Activa o desactiva el sonido
    </p>
  </FadePage>
);

export default StepSound;
