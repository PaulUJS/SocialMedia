import React, { useEffect, useContext } from 'react';
import { Context as SessionContext } from '../context/SessionContext';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

function ProfileDisplay() {
  const { session, setSession } = useContext(SessionContext);
  let classname = 'display-container';
  const location = useLocation();

  useEffect(() => {
    if (JSON.stringify(window.location.pathname) == '/profile') {
      classname = 'updated-display';
    }
    if (JSON.stringify(window.location.pathname) == '/mainpage') {
      classname = 'display-container'
    }
  }, []);
  
  return (
    <>
      <div className={classname}>
        <h1>{session.username}</h1>
        <h2>Followers: {session.FollowerCount}</h2>
        <h3>Following: {session.FollowingCount}</h3>
      </div>
    </>
  )
}

export default ProfileDisplay