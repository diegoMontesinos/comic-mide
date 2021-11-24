import React from 'react';

import './IconButton.scss';

export enum Icon {
  SOUND_OFF,
  SOUND_ON,
  CONTENT,
  MENU,
  CLOSE,
}

export interface IconButtonProps {
  className?: string;
  icon: Icon;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  onClick,
}) => (
  <button
    type="button"
    className={`icon-button ${className ?? ''}`}
    onClick={onClick}
  >
    {icon === Icon.SOUND_OFF && (
      <svg
        viewBox="0 0 47 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0L11.3469 9.7561H0V22.2439H11.8336L24 32V0Z"
          stroke="none"
        />
        <path
          d="M44 9.36586L29.6 23.4146"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M44 23.4146L29.6 9.36586"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    )}

    {icon === Icon.SOUND_ON && (
      <svg
        viewBox="0 0 46 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0L11.3469 9.7561H0V22.2439H11.8336L24 32V0Z"
          stroke="none"
        />
        <path
          d="M30.6977 21C34.0884 21 36.8372 18.5376 36.8372 15.5C36.8372 12.4624 34.0884 10 30.6977 10"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M31.2 28.0976C38.2692 28.0976 44 22.5066 44 15.6098C44 8.71294 38.2692 3.12195 31.2 3.12195"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    )}

    {icon === Icon.CONTENT && (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="14" height="14" rx="3" stroke="none" />
        <rect
          y="18"
          width="14"
          height="14"
          rx="3"
          stroke="none"
        />
        <rect
          x="18"
          width="14"
          height="14"
          rx="3"
          stroke="none"
        />
        <rect
          x="18"
          y="18"
          width="14"
          height="14"
          rx="3"
          stroke="none"
        />
      </svg>
    )}

    {icon === Icon.MENU && (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="8" rx="4" stroke="none" />
        <rect
          y="12"
          width="32"
          height="8"
          rx="4"
          stroke="none"
        />
        <rect
          y="24"
          width="32"
          height="8"
          rx="4"
          stroke="none"
        />
      </svg>
    )}

    {icon === Icon.CLOSE && (
      <svg
        viewBox="0 0 32 33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.47638 1.51994C6.53729 -0.419148 3.39341 -0.419146 1.45433 1.51994C-0.484758 3.45902 -0.484759 6.6029 1.45433 8.54199L8.97795 16.0656L1.45427 23.5893C-0.484818 25.5284 -0.484816 28.6723 1.45427 30.6114C3.39335 32.5504 6.53723 32.5504 8.47632 30.6114L16 23.0877L23.5236 30.6113C25.4627 32.5504 28.6066 32.5504 30.5457 30.6113C32.4848 28.6722 32.4848 25.5283 30.5457 23.5892L23.0221 16.0656L30.5456 8.54206C32.4847 6.60297 32.4847 3.45909 30.5456 1.52001C28.6065 -0.419077 25.4626 -0.419078 23.5236 1.52001L16 9.04357L8.47638 1.51994Z"
          stroke="none"
        />
      </svg>
    )}
  </button>
);

export default IconButton;
