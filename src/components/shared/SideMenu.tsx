import { AnimatePresence, motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import IconButton, { Icon } from './IconButton';

import './SideMenu.scss';

export interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const transition = {
  ease: [0.445, 0.05, 0.55, 0.95],
  duration: 0.3,
};

const SideMenu: React.FC<SideMenuProps> = ({
  open,
  onClose,
}) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="side-menu"
        initial={{ right: -438 }}
        animate={{
          right: 0,
          transition,
        }}
        exit={{
          right: -438,
          transition,
        }}
      >
        <div className="side-menu-content">
          <IconButton
            className="side-menu-close-btn"
            icon={Icon.CLOSE}
            onClick={() => {
              onClose();
            }}
          />

          <ul className="side-menu-list">
            <li className="side-menu-list-item">
              <Link className="mide-text" to="/">
                Inicio
              </Link>
            </li>
            <li className="side-menu-list-item">
              <Link className="mide-text" to="/tutorial">
                Tutorial
              </Link>
            </li>
            <li className="side-menu-list-item">
              <Link className="mide-text" to="/about">
                Créditos
              </Link>
            </li>
            <li className="side-menu-list-item">
              <Link className="mide-text" to="/content">
                Contenido
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SideMenu;
