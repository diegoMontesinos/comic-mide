import React, { useState } from 'react';

import SideMenu from './SideMenu';

import IconButton, { Icon } from './IconButton';

import './AppBar.scss';

export interface AppBarProps {
  alwaysActive?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({
  alwaysActive = false,
}) => {
  const [hidden, setHidden] = useState<boolean>(
    !alwaysActive
  );
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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
      <div
        className="app-bar-reveal-area"
        onMouseOver={showAppBar}
        onFocus={showAppBar}
      />

      <div
        className={`app-bar-content ${
          hidden ? 'hidden' : 'shown'
        }`}
        onMouseLeave={hideAppBar}
      >
        <IconButton
          className="app-bar-sound-btn"
          icon={Icon.SOUND_ON}
        />
        <IconButton icon={Icon.CONTENT} />
        <IconButton
          icon={Icon.MENU}
          onClick={() => {
            setOpenMenu(true);
          }}
        />

        <SideMenu
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
        />
      </div>
    </div>
  );
};

export default AppBar;
