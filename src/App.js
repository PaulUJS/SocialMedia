import React from 'react';
import { Routes, Route } from "react-router-dom"
import './styles.css';

import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import UsernameForm from './components/UsernameForm';
import BioForm from './components/BioForm';
import Redirect from './components/Redirect';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path='/customize' element={<UsernameForm/>}/>
        <Route path='/bio' element={<BioForm/>}/>
        <Route path='/feed' element={<MainPage/>}/>
        <Route path='/profile'/>
      </Routes>
    </>
  );
}

export default App;
