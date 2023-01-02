import React, { useRef, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context as SessionContext } from '../context/SessionContext';
import { firestore } from '../firebase/FirebaseServer';
import { addDoc, collection } from 'firebase/firestore';

function BioForm() {
  const navigate = useNavigate();
  const colRef = collection(firestore, 'Users');
  const bioRef = useRef();
  const { session, setSession } = useContext(SessionContext);

  const submitBio = async (e) => {
    e.preventDefault();
    const bio = bioRef.current.value;
    const user = {
      email: session[0].email, 
      username: session[0].username, 
      uid: session[0].uid, 
      bio: bio
    };

    addDoc(colRef, user)
      .then(() => {
        setSession([user]);
        navigate('/feed');
      })
  };

  useEffect(() => {
    console.log(session[0])
  }, [])
  return (
    <>
      <form onSubmit={submitBio}>
        <label>Create a bio</label>
        <textarea type='text' ref={bioRef}/>
        <button type='submit'>Finish</button>
      </form>
    </>
  )
}

export default BioForm