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
  <nav className="w-1/5 bg-black pt-12">
    <div>
      {links.map((link) => (
        <NavLink
          className="flex justify-start gap-3 items-center px-2 py-6 text-xs font-bold"
          to={link.path}
          activeclassname="active"
          key={link.id}
        >
          {link.icon}
          {link.name}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default RightBar;
