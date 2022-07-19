import React from 'react';

import AppBar, { AppBarItem } from '../shared/AppBar';
import FadePage from '../shared/FadePage';

const StepMenu: React.FC = () => (
  <FadePage
    className="tutorial-step step-menu"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive glowItem={AppBarItem.MENU} />

    <p className="mide-text tutorial-text">
      Presiona este icono para mostrar el menú.
    </p>
  </FadePage>
);

export default StepMenu;
