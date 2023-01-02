import React, { useEffect, useContext } from 'react';
import { Context as SessionContext } from '../context/SessionContext';

import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import Searchbar from '../components/forms/Searchbar';
import PostForm from '../components/forms/PostForm';
import ProfileDisplay from '../components/ProfileDisplay';

function MainPage() {
  const { session, setSession } = useContext(SessionContext);

  useEffect(() => {
    const sessionStorage = localStorage.getItem('user');
    console.log(JSON.parse(sessionStorage));
    setSession(JSON.parse(sessionStorage));
  }, []);

  return (
    <>
      <div className='main-container'>
        <Navbar/>
        <ProfileDisplay/>
        <Searchbar/>
        <PostForm/>
        <Feed/>
      </div>
    </>
  )
}

export default MainPage