import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout, selectUser } from '../../features/userSlice';

export const LogoutForm = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className='logout-form'>
      <h1 className='wellcome-h1'>
        Welcome <span className='header-username'>{user.name}</span>
      </h1>
      <button className='logout-btn' onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};
