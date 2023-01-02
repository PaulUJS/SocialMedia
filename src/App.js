import React from 'react';
import { Routes, Route } from "react-router-dom"
import './styles.css';

import Login from './components/Login';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import Register from './components/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/feed' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile'/>
      </Routes>
    </>
  );
}

export default App;
