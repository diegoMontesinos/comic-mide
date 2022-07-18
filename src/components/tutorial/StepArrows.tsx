import React from 'react';

import ComicControls from '../shared/ComicControls';
import FadePage from '../shared/FadePage';

const StepArrows: React.FC = () => (
  <FadePage
    className="tutorial-step step-arrows"
    delay={0.1}
    duration={0.35}
  >
    <ComicControls withGlow />

    <p className="tutorial-text mide-text">
      Navega a través del cómic utilizando las flechas de
      navegación
    </p>
  </FadePage>
);

export default StepArrows;
