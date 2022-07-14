import React from 'react';

import AppBar from '../shared/AppBar';
import FadePage from '../shared/FadePage';

import './StepMenu.scss';

const TutorialArrow: React.FC = () => (
  <svg
    className="tutorial-arrow-menu"
    width="437"
    height="438"
    viewBox="0 0 437 438"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M420.268 1.23223C419.291 0.255922 417.709 0.255922 416.732 1.23223L400.822 17.1421C399.846 18.1184 399.846 19.7014 400.822 20.6777C401.799 21.654 403.382 21.654 404.358 20.6777L418.5 6.53553L432.642 20.6777C433.618 21.654 435.201 21.654 436.178 20.6777C437.154 19.7014 437.154 18.1184 436.178 17.1421L420.268 1.23223ZM416 3C416 33.0272 410.655 86.4024 388.341 136.546C366.053 186.633 326.932 233.32 259.381 250.578L260.619 255.422C330.068 237.68 370.197 189.617 392.909 138.579C415.595 87.5976 421 33.4728 421 3H416ZM259.381 250.578C190.962 268.057 126.351 285.381 78.8692 312.963C55.0868 326.779 35.4749 343.235 21.8117 363.69C8.12911 384.174 0.5 408.538 0.5 438H5.5C5.5 409.462 12.8709 386.076 25.9695 366.467C39.0876 346.828 58.0382 330.846 81.3808 317.287C128.149 290.119 192.038 272.943 260.619 255.422L259.381 250.578Z"
      fill="white"
    />
  </svg>
);

const StepMenu: React.FC = () => (
  <FadePage
    className="tutorial-step step-menu"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive />

    <TutorialArrow />

    <p className="mide-text tutorial-menu-text">
      Presiona este icono para mostrar el menú
    </p>
  </FadePage>
);

export default StepMenu;
