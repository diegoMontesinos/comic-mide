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
      Utiliza las flechas de navegación para avanzar o
      regresar en el cómic.
    </p>
  </FadePage>
);

export default StepArrows;
