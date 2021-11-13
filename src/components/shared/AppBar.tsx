import React, { useState } from 'react';

import AppBarSoundOnImg from '../../assets/appbar-sound-on.svg';
import AppBarMenuImg from '../../assets/appbar-menu.svg';

import './AppBar.scss';

export interface AppBarProps {
  alwaysActive?: boolean;
}

const AppBar : React.FC<AppBarProps> = ({ alwaysActive = false }) => {
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
    <div className="app-bar">
      <div className="app-bar-reveal-area" onMouseOver={showAppBar} onFocus={showAppBar} />

      <div className={`app-bar-content ${hidden ? 'hidden' : 'shown'}`} onMouseLeave={hideAppBar}>
        <button className="app-bar-sound-btn" type="button">
          <img src={AppBarSoundOnImg} alt="Sound on" />
        </button>

        <button className="app-bar-menu-btn" type="button">
          <img src={AppBarMenuImg} alt="Toggle menu" />
        </button>
      </div>
    </div>
  );
};

export default AppBar;
