import { Link } from 'react-router-dom';

import FadePage from '../shared/FadePage';

import './StepFinal.scss';

const StepFinal: React.FC = () => (
  <FadePage
    className="tutorial-step step-final"
    delay={0.15}
    duration={0.45}
  >
    <p className="mide-text tutorial-final-text">
      ¡Esperamos que lo disfrutes!
    </p>

    <Link
      to="/comic"
      className="mide-text primary-btn go-to-comic"
    >
      <span>Ir al cómic</span>
    </Link>
  </FadePage>
);

export default StepFinal;
