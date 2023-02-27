import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from '../Login/Login';

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { LogoutForm } from '../Login/Logout';

const Header = (props) => {
  const logedIn = props.login;

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   // form.current.validateAll();

  //   // if (checkBtn.current.context._errors.length === 0) {
  //   //   dispatch(login(username, password))
  //   //     .then(() => {
  //   //       navigate('/profile');
  //   //       window.location.reload();
  //   //     })
  //   //     .catch(() => {
  //   //       setLoading(false);
  //   //     });
  //   // } else {
  //   //   setLoading(false);
  //   // }
  // };

  // if (isLoggedIn) {
  //   return <Navigate to='/profile' />;
  // }

  const user = useSelector(selectUser);
  console.log(user);

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
          <li>{user ? <LogoutForm /> : <LoginForm />}</li>

          {/* <li>
            {logedIn() ? (
              <NavLink to='/profile'>Profile </NavLink>
            ) : (
              <LoginForm />
            )}
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
