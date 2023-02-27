import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

    dispatch(
      login({
        name: username,
        password: password,
        loggedIn: true
      })
    );
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
