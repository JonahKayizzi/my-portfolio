import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faHouse,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

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

const RightBar = () => (
  <nav>
    <div className="w-11/12 justify-between gap-2 lg:px-8 p-2 z-10 shadow-md shadow-black lg:py-4 fixed bg-[rgb(25,25,25)] flex">
      <div>
        <NavLink
          className="text-amber-400 lg:text-xl text-md font-black lg:mr-4 mr-2"
          to="/"
          activeclassname="active"
        >
          <span>@JonahKayizzi</span>
        </NavLink>
      </div>
      <div className="flex justify-between lg:gap-8 gap-2">
        {links.map((link) => (
          <NavLink
            className="transform hover:scale-105 transition duration-300 ease-in-out text-white font-light"
            to={link.path}
            activeclassname="active"
            key={link.id}
          >
            <span className="text-xs">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

export default RightBar;
