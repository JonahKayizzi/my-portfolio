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
    name: 'Intro',
    icon: <FontAwesomeIcon icon={faHouse} />,
    path: '/',
  },
  {
    id: 2,
    name: 'Projects',
    icon: <FontAwesomeIcon icon={faFileCode} />,
    path: '/#projects',
  },
  {
    id: 3,
    name: 'Skills',
    icon: <FontAwesomeIcon icon={faFileCode} />,
    path: '/skills',
  },
  {
    id: 4,
    name: 'Work Experience',
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
    <nav>
      <div className="w-11/12 flex justify-between gap-4 px-8 z-10 shadow-md shadow-black py-4 fixed bg-[rgb(25,25,25)]">
        <div>
          <NavLink
            className="text-amber-400 text-xl font-black mr-4"
            to="/"
            activeclassname="active"
            onClick={() => closeMenu()}
          >
            <span>@JonahKayizzi</span>
          </NavLink>
        </div>
        <div className="flex justify-between gap-8">
          {links.map((link) => (
            <NavLink
              className="transform hover:scale-105 transition duration-300 ease-in-out text-white text-xl font-light"
              to={link.path}
              activeclassname="active"
              key={link.id}
              onClick={() => closeMenu()}
            >
              <span className="text-xs">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-screen lg:hidden contents">
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
              <span className="lg:text-xs text-md m-4">{link.name}</span>
            </NavLink>
          ))}
        </Menu>
      </div>
    </nav>
  );
};

export default RightBar;
