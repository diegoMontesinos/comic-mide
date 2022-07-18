import React from 'react';

import Glow from './Glow';

import './ComicControls.scss';

export interface ComicControlProps {
  showBack?: boolean;
  showForward?: boolean;
  classBack?: string;
  classForward?: string;
  withGlow?: boolean;
  handleForward?: () => void;
  handleBack?: () => void;
}

const Arrow: React.FC = () => (
  <svg
    className="control-arrow-icon"
    width="31"
    height="54"
    viewBox="0 0 31 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 50L27 27L4 4"
      stroke="#E5E5E5"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ComicControls: React.FC<ComicControlProps> = ({
  withGlow = false,
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
        {withGlow && <Glow />}
        <Arrow />
      </button>
    )}

    {showForward && (
      <button
        className={`go-fwd-btn ${classForward}`}
        type="button"
        onClick={handleForward}
      >
        {withGlow && <Glow />}
        <Arrow />
      </button>
    )}
  </div>
);

export default ComicControls;
