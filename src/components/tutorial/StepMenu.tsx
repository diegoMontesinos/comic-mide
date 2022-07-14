import React from 'react';

import TutorialArrowMenu from '../../assets/tutorial-arrow-menu.svg';

import AppBar from '../shared/AppBar';
import FadePage from '../shared/FadePage';

const StepMenu: React.FC = () => (
  <FadePage
    className="tutorial-step"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive />

    <p className="mide-text tutorial-menu-text">
      Presiona este icono para mostrar el menú
    </p>

    <img
      className="tutorial-arrow-menu"
      src={TutorialArrowMenu}
      alt="Arrow Menu"
    />
  </FadePage>
);

export default StepMenu;
