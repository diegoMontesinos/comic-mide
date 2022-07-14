import React from 'react';

import './ComicControls.scss';

export interface ComicControlProps {
  showBack?: boolean;
  showForward?: boolean;
  classBack?: string;
  classForward?: string;
  white?: boolean;
  handleForward?: () => void;
  handleBack?: () => void;
}

const ArrowDark: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="40"
      cy="40"
      r="40"
      fill="url(#paint0_radial)"
      fillOpacity="0.67"
    />
    <path
      d="M49 17L26 40L49 63"
      stroke="#E5E5E5"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 40) rotate(90) scale(40)"
      >
        <stop stopColor="#0B0B0B" />
        <stop
          offset="1"
          stopColor="#0B0B0B"
          stopOpacity="0.4"
        />
      </radialGradient>
    </defs>
  </svg>
);

const ArrowWhite: React.FC = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="40"
      cy="40"
      rx="40"
      ry="40"
      fill="url(#paint0_radial_328_768)"
      fillOpacity="0.67"
    />
    <path
      d="M49 17L26 40L49 63"
      stroke="#E5E5E5"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <radialGradient
        id="paint0_radial_328_768"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 40) rotate(90) scale(40)"
      >
        <stop stopColor="white" />
        <stop
          offset="1"
          stopColor="white"
          stopOpacity="0.4"
        />
      </radialGradient>
    </defs>
  </svg>
);

const ComicControls: React.FC<ComicControlProps> = ({
  white = false,
  showBack = true,
  showForward = true,
  classBack = '',
  classForward = '',
  handleBack,
  handleForward,
}) => (
  <div className="comic-controls">
    {showBack && (
      <button
        className={`go-back-btn ${classBack}`}
        type="button"
        onClick={handleBack}
      >
        {white ? <ArrowWhite /> : <ArrowDark />}
      </button>
    )}

    {showForward && (
      <button
        className={`go-fwd-btn ${classForward}`}
        type="button"
        onClick={handleForward}
      >
        {white ? <ArrowWhite /> : <ArrowDark />}
      </button>
    )}
  </div>
);

export default ComicControls;
