import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faHouse,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';

const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FontAwesomeIcon icon={faHouse} />,
    path: '/',
  },
  {
    id: 2,
    name: 'Projects',
    icon: <FontAwesomeIcon icon={faFileCode} />,
    path: '/projects',
  },
  {
    id: 4,
    name: 'Employment',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    path: '/employment',
  },
];

const RightBar = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const burgerstyles = {
    bmBurgerButton: {
      top: '12px',
      left: '20px',
      width: '40px',
      height: '40px',
      position: 'absolute',
      padding: '1rem',
    },
    bmCrossButton: {
      top: '5px',
      position: 'absolute',
      height: '48px',
      width: '48px',
      right: '12px',
    },
    bmCross: {
      display: 'inline-block',
      height: '45px',
      width: '5px',
      top: '-2px',
      right: '7px',
    },
  };

  const handleStateChange = (state) => {
    setMenuOpenState(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpenState(false);
  };

  return (
    <nav className="w-1/12 lg:block hidden">
      <div>
        <Menu
          isOpen={menuOpenState}
          onStateChange={(state) => handleStateChange(state)}
          styles={burgerstyles}
          width="100%"
        >
          {links.map((link) => (
            <NavLink
              className="transform hover:scale-105 transition duration-300 ease-in-out flex flex-col text-amber-400 items-center justify-end gap-2 py-6 px-2 text-xl font-light my-2 bg-cyan-900 rounded-md shadow-md shadow-black border-y border-amber-400"
              to={link.path}
              activeclassname="active"
              key={link.id}
              onClick={() => closeMenu()}
            >
              {link.icon}
              <span className="text-xs">{link.name}</span>
            </NavLink>
          ))}
        </Menu>
      </div>
      <div className="hidden md:block">
        {links.map((link) => (
          <NavLink
            className="transform hover:scale-105 transition duration-300 ease-in-out flex flex-col text-amber-400 items-center justify-end gap-2 py-6 px-2 text-xl font-light my-2 bg-cyan-900 rounded-md shadow-md shadow-black border-y border-amber-400"
            to={link.path}
            activeclassname="active"
            key={link.id}
            onClick={() => closeMenu()}
          >
            {link.icon}
            <span className="text-xs">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default RightBar;
