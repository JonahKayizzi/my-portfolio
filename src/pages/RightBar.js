import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Projects', path: '/projects' },
  { id: 3, name: 'Recommendations', path: '/recommendations' },
  { id: 4, name: 'Employment', path: '/employment' },
  { id: 5, name: 'Education', path: '/education' },
  { id: 6, name: 'Publications', path: '/publications' },
  { id: 7, name: 'Awards', path: '/awards' },
];

const RightBar = () => (
  <nav className="w-1/5 bg-black">
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} activeclassname="active">
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default RightBar;
