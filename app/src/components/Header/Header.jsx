import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from '../Login/Login';
import { LogoutForm } from '../Login/Logout';

const Header = (props) => {
  const user = props.login;
  const t = props.t;
  const changeLanguage = props.changeLanguage;

  return (
    <div className='header'>
      <nav>
        <ul>
          <li className='header-links'>
            <NavLink to='/'>{t('main-link')} </NavLink>
          </li>
          <li>
            <NavLink to='/news'>{t('news-link')} </NavLink>
          </li>
          <li>
            <NavLink to='/profile'>{t('profile-link')} </NavLink>
          </li>
          <li>
            <p className='welcome-p'>{t('welcome')}</p>
          </li>
          <li>{user ? <LogoutForm t={t} /> : <LoginForm t={t} />}</li>
        </ul>
      </nav>
      <div className='lng-buttons-div'>
        <button
          id='lng-ua'
          className='language-btn'
          onClick={() => changeLanguage('ua')}
        >
          ua
        </button>
        <button
          id='lng-en'
          className='language-btn'
          onClick={() => changeLanguage('en')}
        >
          en
        </button>
      </div>
    </div>
  );
};

export default Header;
