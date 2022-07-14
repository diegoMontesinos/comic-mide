import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import SideMenu from './SideMenu';

import IconButton, { Icon } from './IconButton';

import './AppBar.scss';

export interface AppBarProps {
  alwaysActive?: boolean;
}

const transition = {
  ease: [0.445, 0.05, 0.55, 0.95],
  duration: 0.3,
};

const AppBar: React.FC<AppBarProps> = ({
  alwaysActive = false,
}) => {
  const [hidden, setHidden] = useState(!alwaysActive);
  const [openMenu, setOpenMenu] = useState(false);

  const showAppBar = (): void => {
    if (alwaysActive || !hidden) return;
    setHidden(false);
  };

  const hideAppBar = (): void => {
    if (alwaysActive || hidden) return;
    setHidden(true);
  };

  return (
    <div className="app-bar">
      <motion.div
        className="app-bar-reveal-area"
        onMouseOver={showAppBar}
        onFocus={showAppBar}
        onPan={(_, { offset }) => {
          if (offset.y > 0) showAppBar();
        }}
      />

      <AnimatePresence>
        {!hidden && (
          <motion.div
            className="app-bar-content"
            initial={{ top: -72 }}
            animate={{
              top: 0,
              transition,
            }}
            exit={{
              top: -72,
              transition,
            }}
            onMouseLeave={hideAppBar}
            onPan={(_, { offset }) => {
              if (offset.y < 0) hideAppBar();
            }}
          >
            <IconButton
              className="app-bar-sound-btn"
              icon={Icon.SOUND_ON}
            />
            <IconButton icon={Icon.CONTENT} />
            <IconButton
              icon={Icon.MENU}
              onClick={() => {
                hideAppBar();
                setOpenMenu(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <SideMenu
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
      />
    </div>
  );
};

export default AppBar;
