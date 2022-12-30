import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

/*
const auth = firebase.auth();
const firestore = firebase.firestore();

firebase.initializeApp({
  apiKey: "AIzaSyAvVreLBzqC0pS8eVTWG27Qiz786E21wOg",
  authDomain: "newsocialmedia-18ba5.firebaseapp.com",
  projectId: "newsocialmedia-18ba5",
  storageBucket: "newsocialmedia-18ba5.appspot.com",
  messagingSenderId: "35213477003",
  appId: "1:35213477003:web:de1dc5001f1245fdff808e",
  measurementId: "G-BNF9RDCRP4"
});
*/

function Login() {
  

  return (
    <button>Login</button>
  )
}

export default Login