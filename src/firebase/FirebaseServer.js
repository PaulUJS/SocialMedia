import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvVreLBzqC0pS8eVTWG27Qiz786E21wOg",
  authDomain: "newsocialmedia-18ba5.firebaseapp.com",
  projectId: "newsocialmedia-18ba5",
  storageBucket: "newsocialmedia-18ba5.appspot.com",
  messagingSenderId: "35213477003",
  appId: "1:35213477003:web:de1dc5001f1245fdff808e",
  measurementId: "G-BNF9RDCRP4"
};

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app);