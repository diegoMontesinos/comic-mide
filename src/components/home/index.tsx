import React from 'react';

import { Link } from 'react-router-dom';

import MainTitleImg from '../../assets/main-title.png';
import MainTitleLogoImg from '../../assets/main-title-logo.svg';
import ChangePortraitImg from '../../assets/change-portrait.svg';

import './index.scss';

const HomePage: React.FC = () => (
  <div className="home-page">
    <div className="main-title-img">
      <img src={MainTitleImg} alt="Main title" />
    </div>
    <div className="mide-text welcome-text">
      <span>
        Bienvenido al primer Comic Digital del MIDE
      </span>
    </div>
    <div className="welcome-portrait-img">
      <img src={ChangePortraitImg} alt="Change Portrait" />
    </div>
    <div className="mide-text welcome-portrait-text">
      <span>
        Te recomendamos girar el teléfono de forma
        horizontal para una mejor experiencia.
      </span>
    </div>
    <div className="mide-title-logo">
      <img src={MainTitleLogoImg} alt="Main Title Logo" />
    </div>
    <Link
      to="/tutorial"
      className="mide-text primary-btn main-title-btn"
    >
      <span>EMPEZAR</span>
    </Link>
  </div>
);

export default HomePage;
