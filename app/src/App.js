import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import './App.css';

import Main from './components/Main/Main';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Error404 from './components/Error/Error404';
import Header from './components/Header/Header';

function App() {
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <Header login={user} />

      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/news' element={<News />}></Route>
        <Route
          exact
          path='/profile'
          element={user ? <Profile /> : <Navigate to='/' replace />}
        ></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
