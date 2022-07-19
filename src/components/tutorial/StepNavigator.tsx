import React from 'react';

import AppBar, { AppBarItem } from '../shared/AppBar';
import FadePage from '../shared/FadePage';

const StepNavigator: React.FC = () => (
  <FadePage
    className="tutorial-step tutorial-navigator"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive glowItem={AppBarItem.CONTENT} />

    <p className="mide-text tutorial-text">
      Utiliza el mosaico de esta esquina para navegar por
      las distintas partes del cómic.
    </p>
  </FadePage>
);

export default StepNavigator;
