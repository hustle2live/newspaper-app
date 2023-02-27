import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from '../Login/Login';
import { LogoutForm } from '../Login/Logout';

const Header = (props) => {
  const user = props.login;

  return (
    <div className='header'>
      <nav>
        <ul>
          <li className='header-links'>
            <NavLink to='/'>Main </NavLink>
          </li>
          <li>
            <NavLink to='/news'>News </NavLink>
          </li>
          <li>
            <NavLink to='/profile'>Profile </NavLink>
          </li>
          <li>{user ? <LogoutForm /> : <LoginForm />}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
