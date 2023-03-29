import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCode,
  faHouse,
  faComment,
  faBriefcase,
  faGraduationCap,
  faFeather,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';

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
    id: 3,
    name: 'Recommendations',
    icon: <FontAwesomeIcon icon={faComment} />,
    path: '/recommendations',
  },
  {
    id: 4,
    name: 'Employment',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    path: '/employment',
  },
  {
    id: 5,
    name: 'Education',
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    path: '/education',
  },
  {
    id: 6,
    name: 'Publications',
    icon: <FontAwesomeIcon icon={faFeather} />,
    path: '/publications',
  },
  {
    id: 7,
    name: 'Awards',
    icon: <FontAwesomeIcon icon={faCertificate} />,
    path: '/awards',
  },
];

const RightBar = () => (
  <nav className="w-1/5 bg-black">
    <ul>
      <li className="text-amber-400">This section is under construction</li>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} activeclassname="active">
            {link.icon}
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default RightBar;
