import React, { useState, useRef, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { Context as SessionContext } from '../context/SessionContext';
import { firestore } from '../firebase/FirebaseServer';
import { collection, query, where, getDocs } from "firebase/firestore";

function UsernameForm() {
  const navigate = useNavigate();
  const { session, setSession } = useContext(SessionContext);
  const userRef = useRef();

  const submitUsername = (e) => {
    e.preventDefault();

    const userInfo = userRef.current.value;
    const user = {email: session[0].email, uid: session[0].uid, username: userInfo, bio: null};
    setSession([user]); 
    navigate('/bio');
  };

  return (
    <>
      <form onSubmit={submitUsername}>
        <label>Create a username</label>
        <input type='text' ref={userRef}/>
        <button type='submit'>Next</button>
      </form>
    </>
  )
}

export default UsernameForm