import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import Glow from './Glow';

import './ComicControls.scss';

export interface ComicControlProps {
  showBack?: boolean;
  showForward?: boolean;
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

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const ComicControls: React.FC<ComicControlProps> = ({
  withGlow = false,
  showBack = true,
  showForward = true,
  handleBack,
  handleForward,
}) => {
  useEffect(() => {
    const onKeydown = (evt: KeyboardEvent) => {
      const key = evt.key || evt.keyCode;

      if (
        showBack &&
        (key === LEFT_KEY || key === 'ArrowLeft') &&
        handleBack
      ) {
        handleBack();
      }

      if (
        showForward &&
        (key === RIGHT_KEY || key === 'ArrowRight') &&
        handleForward
      ) {
        handleForward();
      }
    };

    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  });

  return (
    <motion.div
      className="comic-controls"
      onPan={(_, { offset }) => {
        if (showBack && offset.x > 10 && handleBack) {
          handleBack();
        }

        if (showForward && offset.x < 10 && handleForward) {
          handleForward();
        }
      }}
    >
      {showBack && (
        <button
          className="go-back-btn enabled"
          type="button"
          onClick={handleBack}
        >
          {withGlow && <Glow />}
          <Arrow />
        </button>
      )}

      {showForward && (
        <button
          className="go-fwd-btn enabled"
          type="button"
          onClick={handleForward}
        >
          {withGlow && <Glow />}
          <Arrow />
        </button>
      )}
    </motion.div>
  );
};

export default ComicControls;
