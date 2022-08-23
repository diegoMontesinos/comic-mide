import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Glow from './Glow';
import IconButton, { Icon } from './IconButton';
import SideMenu from './SideMenu';

import './AppBar.scss';

export enum AppBarItem {
  SOUND,
  CONTENT,
  MENU,
}

export interface AppBarProps {
  alwaysActive?: boolean;
  glowItem?: AppBarItem;
}

const transition = {
  ease: [0.445, 0.05, 0.55, 0.95],
  duration: 0.3,
};

const AppBar: React.FC<AppBarProps> = ({
  alwaysActive = false,
  glowItem,
}) => {
  const [hidden, setHidden] = useState(!alwaysActive);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMuted = () => {
    if (!isMuted) {
      Howler.volume(0.01);
    } else {
      Howler.volume(0.85);
    }

    Howler.mute(!isMuted);
    setIsMuted(!isMuted);
  };

  const showAppBar = (): void => {
    if (alwaysActive || !hidden) return;
    setHidden(false);
  };

  const hideAppBar = (): void => {
    if (alwaysActive || hidden) return;
    setHidden(true);
  };

  return (
    <div
      className={`app-bar${
        alwaysActive ? ' always-active' : ''
      }`}
    >
      <motion.div
        className="app-bar-reveal-area"
        onMouseOver={showAppBar}
        onFocus={showAppBar}
        onPan={(_, { offset }) => {
          if (offset.y < 0) hideAppBar();
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
              if (offset.y > 0) showAppBar();
            }}
          >
            <div className="app-bar-sound-btn">
              {glowItem === AppBarItem.SOUND && <Glow />}

              <IconButton
                onClick={toggleMuted}
                icon={
                  isMuted ? Icon.SOUND_OFF : Icon.SOUND_ON
                }
              />
            </div>

            <Link
              className="app-bar-content-btn"
              to="/content"
            >
              {glowItem === AppBarItem.CONTENT && <Glow />}
              <IconButton icon={Icon.CONTENT} />
            </Link>

            <div className="app-bar-menu-btn">
              {glowItem === AppBarItem.MENU && <Glow />}
              <IconButton
                icon={Icon.MENU}
                onClick={() => {
                  hideAppBar();
                  setOpenMenu(true);
                }}
              />
            </div>
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
