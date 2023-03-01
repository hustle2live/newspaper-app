import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';

export const LogoutForm = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const t = props.t;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem('user');
  };

  return (
    <div className='logout-form'>
      <p className='welcome-header'>
        {t('hello')}, <span className='header-username'>{user.name}</span>
      </p>
      <button className='logout-btn' onClick={(e) => handleLogout(e)}>
        {t('logout')}
      </button>
    </div>
  );
};
