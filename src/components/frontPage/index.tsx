import React from 'react';

import { Link } from 'react-router-dom';

import MainTitleImg from '../../assets/main-title.png';
import MainTitleLogo from '../../assets/main-title-logo.svg';

import './index.scss';

const FrontPage: React.FC = () => (
  <div className="front-page">
    <div className="main-title-img">
      <img src={MainTitleImg} alt="Main title" />
    </div>
    <div className="mide-text welcome-text">
      <span>Bienvenido al primer Comic Digital del MIDE</span>
    </div>
    <div className="mide-title-logo">
      <img src={MainTitleLogo} alt="Main Title Logo" />
    </div>
    <Link to="/tutorial" className="mide-text main-title-button">
      <span>EMPEZAR</span>
    </Link>
  </div>
);

export default FrontPage;
