import React, { useState } from 'react';

import NavigatorBtnImg from '../../assets/comic-navigator-btn.svg';

import './ComicNavigator.scss';

export interface ComicNavigatorProps {
  alwaysActive?: boolean;
}

const ComicNavigator : React.FC<ComicNavigatorProps> = ({ alwaysActive = false }) => {
  const [hidden, setHidden] = useState<boolean>(!alwaysActive);

  const showAppBar = (): void => {
    if (alwaysActive) return;
    setHidden(false);
  };

  const hideAppBar = (): void => {
    if (alwaysActive) return;
    setHidden(true);
  };

  return (
    <div className="comic-navigator">
      <div className="comic-navigator-reveal-area" onMouseOver={showAppBar} onFocus={showAppBar} />

      <div className={`comic-navigator-content ${hidden ? 'hidden' : 'shown'}`} onMouseLeave={hideAppBar}>
        <img className="comic-navigator-btn" src={NavigatorBtnImg} alt="Trigger navigation" />
      </div>
    </div>
  );
};

export default ComicNavigator;
