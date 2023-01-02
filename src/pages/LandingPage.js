import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Context as SessionContext } from '../context/SessionContext';

const provider = new GoogleAuthProvider();
const auth = getAuth();

function LandingPage() {
  const navigate = useNavigate();
  const { session, setSession } = useContext(SessionContext);

  const signIn = async () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setSession(user);
      navigate('/customize');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  return (
    <>
      <h1>Welcome to twitter but better!</h1>
      <button onClick={signIn}>Sign Up</button>
      <button onClick={signIn}>You already have an account?</button>
    </>
  )
}

export default LandingPage