import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li className='header-links'>
        <NavLink to='/'>to Main </NavLink>
      </li>
      <li>
        <NavLink to='/news'>to News </NavLink>
      </li>
      <li>
        <NavLink to='/profile'>to Profile </NavLink>
        {/* добавить проверку LS на авторизацию */}
      </li>
    </ul>
  </nav>
);

export default Header;
