import React, { useEffect, useRef } from 'react';

import lottie, { AnimationItem } from 'lottie-web';

import { Link } from 'react-router-dom';

import MainTitleLogoImg from '../../assets/main-title-logo.svg';
import FadePage from '../shared/FadePage';

import './index.scss';

const ANIMATION_PATH = 'animations/ilu_00_cover.json';

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || animationRef.current) return;

    const animation = lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `${process.env.PUBLIC_URL}/${ANIMATION_PATH}`,
    });

    animationRef.current = animation;
  }, []);

  return (
    <FadePage className="home-page page">
      <div className="home-animation" ref={containerRef} />
      <div className="home-fade-bg" />

      <div className="home-content">
        <div className="home-title-text">
          <div className="mide-title-logo">
            <img
              src={MainTitleLogoImg}
              alt="Main Title Logo"
            />
          </div>
          <div className="mide-text welcome-text">
            <span>
              Bienvenido al primer cómic digital del MIDE
            </span>
          </div>
        </div>

        <div className="home-btn-container">
          <Link
            to="/tutorial"
            className="mide-text primary-btn home-btn"
          >
            <span>EMPEZAR</span>
          </Link>
        </div>
      </div>
    </FadePage>
  );
};

export default HomePage;
