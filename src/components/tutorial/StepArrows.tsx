import React from 'react';

import ComicControls from '../shared/ComicControls';
import FadePage from '../shared/FadePage';

import './StepArrows.scss';

const ArrowLeft: React.FC = () => (
  <svg
    className="tutorial-arrow left"
    width="341"
    height="47"
    viewBox="0 0 341 47"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.05923 36.3162C0.779999 35.7967 0.164185 34.3385 0.683777 33.0592L9.15067 12.2131C9.67026 10.9339 11.1284 10.3181 12.4077 10.8376C13.6869 11.3572 14.3027 12.8154 13.7831 14.0946L6.25702 32.6245L24.7869 40.1507C26.0661 40.6703 26.6819 42.1285 26.1624 43.4077C25.6428 44.6869 24.1846 45.3027 22.9054 44.7832L2.05923 36.3162ZM338.195 46.1324C305.131 25.8995 252.803 10.2258 193.021 6.24448C133.277 2.26565 66.3025 9.98046 3.9726 36.3031L2.0274 31.697C65.1975 5.01955 132.973 -2.76563 193.354 1.25553C253.697 5.27421 306.869 21.1005 340.805 41.8676L338.195 46.1324Z"
      fill="white"
    />
  </svg>
);

const ArrowRight: React.FC = () => (
  <svg
    className="tutorial-arrow right"
    width="341"
    height="47"
    viewBox="0 0 341 47"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M339.441 36.3162C340.72 35.7967 341.336 34.3385 340.816 33.0592L332.349 12.2131C331.83 10.9339 330.372 10.3181 329.092 10.8376C327.813 11.3572 327.197 12.8154 327.717 14.0946L335.243 32.6245L316.713 40.1507C315.434 40.6703 314.818 42.1285 315.338 43.4077C315.857 44.6869 317.315 45.3027 318.595 44.7832L339.441 36.3162ZM3.30491 46.1324C36.3685 25.8995 88.6965 10.2258 148.479 6.24448C208.223 2.26565 275.197 9.98046 337.527 36.3031L339.473 31.697C276.303 5.01955 208.527 -2.76563 148.146 1.25553C87.8035 5.27421 34.6315 21.1005 0.695088 41.8676L3.30491 46.1324Z"
      fill="white"
    />
  </svg>
);

const StepArrows: React.FC = () => (
  <FadePage
    className="tutorial-step step-arrows"
    delay={0.1}
    duration={0.35}
  >
    <ComicControls white />

    <ArrowLeft />
    <ArrowRight />

    <p className="tutorial-arrow-text mide-text">
      Navega a través del cómic utilizando las flechas de
      navegación
    </p>
  </FadePage>
);

export default StepArrows;
