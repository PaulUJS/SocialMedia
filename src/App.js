import React from 'react';
import { Routes, Route } from "react-router-dom"
import './styles.css';

import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import CustomizeUser from './pages/CustomizeUser';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/customize' element={<CustomizeUser/>}/>
        <Route path='/feed' element={<MainPage/>}/>
        <Route path='/profile'/>
      </Routes>
    </>
  );
}

export default App;
