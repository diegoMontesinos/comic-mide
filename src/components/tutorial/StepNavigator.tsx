import React from 'react';

import AppBar from '../shared/AppBar';
import FadePage from '../shared/FadePage';

import './StepNavigator.scss';

const ArrowNavigator: React.FC = () => (
  <svg
    className="tutorial-arrow-navigator"
    width="293"
    height="233"
    viewBox="0 0 293 233"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.23224 17.2322C0.255928 18.2085 0.255917 19.7914 1.23222 20.7677L17.142 36.6777C18.1183 37.654 19.7012 37.654 20.6776 36.6777C21.6539 35.7014 21.6539 34.1185 20.6776 33.1422L6.53553 19L20.6778 4.85793C21.6541 3.88163 21.6541 2.29871 20.6778 1.3224C19.7015 0.346079 18.1186 0.346069 17.1423 1.32237L1.23224 17.2322ZM286.5 92L288.898 91.2946L286.5 92ZM184.245 228.013C182.872 228.154 181.872 229.381 182.013 230.755C182.154 232.128 183.381 233.128 184.755 232.987L184.245 228.013ZM2.99998 21.4999C35.5541 21.5002 99.1494 16.3793 158.35 22.9225C187.911 26.1897 216.114 32.3492 238.569 43.3918C260.984 54.4152 277.483 70.2013 284.102 92.7054L288.898 91.2946C281.767 67.0487 264.016 50.3348 240.775 38.9051C217.573 27.4946 188.714 21.248 158.9 17.9527C99.3506 11.3711 34.9459 16.5002 3.00002 16.4999L2.99998 21.4999ZM284.102 92.7054C300.301 147.783 265.609 219.681 184.245 228.013L184.755 232.987C269.391 224.319 305.934 149.217 288.898 91.2946L284.102 92.7054Z"
      fill="white"
    />
  </svg>
);

const StepNavigator: React.FC = () => (
  <FadePage
    className="tutorial-step tutorial-navigator"
    delay={0.15}
    duration={0.45}
  >
    <AppBar alwaysActive />

    <ArrowNavigator />

    <p className="mide-text tutorial-navigator-text">
      Utiliza el mosaico de esta esquina para navegar por
      las distintas partes del cómic
    </p>
  </FadePage>
);

export default StepNavigator;
