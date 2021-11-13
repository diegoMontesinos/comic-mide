import React from 'react';

import GoForwardImg from '../../assets/go_fwd.svg';
import GoBackImg from '../../assets/go_back.svg';

import './ComicControls.scss';

export interface ComicControlProps {
  backImg?: string;
  forwardImg?: string;
  showBack?: boolean;
  showForward?: boolean;
  classBack?: string;
  classForward?: string;
  handleForward?: () => void;
  handleBack?: () => void;
}

const ComicControls : React.FC<ComicControlProps> = ({
  backImg = GoBackImg,
  forwardImg = GoForwardImg,
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
        <img src={backImg} alt="Go Back" />
      </button>
    )}

    {showForward && (
      <button
        className={`go-fwd-btn ${classForward}`}
        type="button"
        onClick={handleForward}
      >
        <img src={forwardImg} alt="Go Forward" />
      </button>
    )}
  </div>
);

export default ComicControls;
