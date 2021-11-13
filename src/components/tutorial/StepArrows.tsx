import React from 'react';

import ArrowLeftImg from '../../assets/tutorial-arrow-left.svg';
import ArrowRightImg from '../../assets/tutorial-arrow-right.svg';
import GoBackImg from '../../assets/go_back_white.svg';
import GoForwardImg from '../../assets/go_fwd_white.svg';

import ComicControls from '../shared/ComicControls';

const StepArrows: React.FC = () => (
  <div className="tutorial-step">
    <ComicControls backImg={GoBackImg} forwardImg={GoForwardImg} />

    <p className="tutorial-arrow-text mide-text">
      Navega a través del cómic utilizando las flechas de navegación
    </p>

    <img src={ArrowLeftImg} className="tutorial-arrow left" alt="arrow left" />
    <img src={ArrowRightImg} className="tutorial-arrow right" alt="arrow right" />
  </div>
);

export default StepArrows;
