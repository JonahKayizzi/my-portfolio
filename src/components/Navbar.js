import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, path: '/', text: 'Jonathan' },
  { id: 2, path: '/tech-projects', text: 'Tech Projects' },
  { id: 3, path: '/aviation', text: 'Aviation' },
  { id: 4, path: '/recommendations', text: 'Recommendations' },
  { id: 5, path: '/history', text: 'History' },
  { id: 6, path: '/awards', text: 'Awards' },
];

const Navbar = () => {
  <nav>
    <h1>Jonathan Portfolio</h1>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} activeClassName="active">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>;
};

export default Navbar;
