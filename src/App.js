import React from 'react';
import { firestore } from './firebase/FirebaseServer'
import './styles.css';


import Login from './components/Login';
import MainPage from './pages/MainPage';
import Feed from './components/Feed';
import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
      <Feed/>
    </div>
  );
}

export default App;
