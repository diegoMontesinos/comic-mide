import React from 'react';
import { Link } from 'react-router-dom';

import IconButton, { Icon } from './IconButton';

import './SideMenu.scss';

export interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  open,
  onClose,
}) => (
  <div className={`side-menu ${open ? 'shown' : 'hidden'}`}>
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
  </div>
);

export default SideMenu;
