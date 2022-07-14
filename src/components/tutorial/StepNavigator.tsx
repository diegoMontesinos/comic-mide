import React from 'react';
import { Link } from 'react-router-dom';

import ArrowNavigatorImg from '../../assets/tutorial-arrow-navigator.svg';

import AppBar from '../shared/AppBar';
import FadePage from '../shared/FadePage';

const StepNavigator: React.FC = () => (
  <FadePage
    className="tutorial-step tutorial-navigator"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive />

    <Link
      to="/comic"
      className="mide-text primary-btn go-to-comic"
    >
      <span>Ir al Cómic</span>
    </Link>

    <img
      className="tutorial-arrow-navigator"
      src={ArrowNavigatorImg}
      alt="Arrow Navigator"
    />

    <p className="mide-text tutorial-navigator-text">
      Utiliza el mosaico de esta esquina para navegar por
      las distintas partes del cómic
    </p>
  </FadePage>
);

export default StepNavigator;
