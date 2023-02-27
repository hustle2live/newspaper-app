import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../features/userSlice';
import { database as db } from '../../app/database';
import { validateUser } from '../../app/validate';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: username,
      password: password
    };

    if (validateUser(db, userData)) {
      dispatch(login(userData));
      localStorage.setItem('user', JSON.stringify(userData));
      return navigate('/profile');
    }

    return alert("Ім'я користувача або пароль введено неправильно");
  };

  return (
    <form action='#' onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Sign In</legend>
        <label htmlFor='userName'>Username </label>
        <input
          type='name'
          id='userName'
          value={username}
          onChange={(e) => onChangeUsername(e)}
        />
        <label htmlFor='userPassword'>Password</label>
        <input
          type='password'
          id='userPassword'
          value={password}
          onChange={(e) => onChangePassword(e)}
        />
        <input type='submit' value='Submit' />
      </fieldset>
    </form>
  );
};
