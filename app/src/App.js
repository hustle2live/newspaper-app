import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import { store } from './redux/store.js';
import Main from './components/Main/Main';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Error404 from './components/Error/Error404';
import Header from './components/Header/Header';

function App() {
  const loginInfo = 0;

  localStorage.setItem('loggedIn', JSON.stringify(loginInfo));

  const authorized = () => JSON.parse(localStorage.getItem('loggedIn'));

  console.log(authorized());

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header login={authorized} />

        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/news' element={<News />}></Route>
          <Route
            exact
            path='/profile'
            element={authorized() ? <Profile /> : <Navigate to='/' replace />}
          ></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
