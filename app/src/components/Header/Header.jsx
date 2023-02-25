import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const logedIn = props.login;

  const LoginForm = () => (
    <form action='#'>
      <fieldset>
        <legend>Sign In</legend>
        <label htmlFor='userName'>Username </label>
        <input type='password' id='userName' />
        <label htmlFor='userPassword'>Password</label>
        <input type='password' id='userPassword' />
        <input type='submit' value='Submit' />
      </fieldset>
    </form>
  );

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
            {logedIn() ? (
              <NavLink to='/profile'>Profile </NavLink>
            ) : (
              <LoginForm />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
