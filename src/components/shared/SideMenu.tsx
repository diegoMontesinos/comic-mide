import React from 'react';
import { Link } from 'react-router-dom';

import SideMenuCloseImg from '../../assets/side-menu-close.svg';

import './SideMenu.scss';

export interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ open, onClose }) => (
  <div className={`side-menu ${open ? 'shown' : 'hidden'}`}>
    <div className="side-menu-content">
      <button
        className="side-menu-close-btn"
        type="button"
        onClick={() => {
          onClose();
        }}
      >
        <img src={SideMenuCloseImg} alt="Close Menu" />
      </button>

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
          <Link className="mide-text" to="/">
            Créditos
          </Link>
        </li>
        <li className="side-menu-list-item">
          <Link className="mide-text" to="/">
            Contenido
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default SideMenu;
