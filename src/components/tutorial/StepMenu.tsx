import React from 'react';

import TutorialArrowMenu from '../../assets/tutorial-arrow-menu.svg';

import AppBar from '../shared/AppBar';

const StepMenu : React.FC = () => (
  <div className="tutorial-step">
    <AppBar alwaysActive />

    <p className="mide-text tutorial-menu-text">
      Presiona este icono para mostrar el menú
    </p>

    <img className="tutorial-arrow-menu" src={TutorialArrowMenu} alt="Arrow Menu" />
  </div>
);

export default StepMenu;
