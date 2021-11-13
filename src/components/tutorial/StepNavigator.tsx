import React from 'react';
import { Link } from 'react-router-dom';

import ArrowNavigatorImg from '../../assets/tutorial-arrow-navigator.svg';

import ComicNavigator from '../shared/ComicNavigator';

const StepNavigator : React.FC = () => (
  <div className="tutorial-step">
    <Link to="/" className="mide-text primary-btn go-to-comic">
      <span>Ir al Cómic</span>
    </Link>

    <p className="mide-text tutorial-navigator-text">
      Utiliza el mosaico de esta esquina para navegar por las distintas partes del cómic
    </p>

    <img className="tutorial-arrow-navigator" src={ArrowNavigatorImg} alt="Arrow Navigator" />

    <ComicNavigator alwaysActive />
  </div>
);

export default StepNavigator;
