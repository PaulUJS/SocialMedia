import React, { useEffect, useContext } from 'react'
import { Context as SessionContext } from '../context/SessionContext';
import { useNavigate } from "react-router-dom";
import { firestore } from '../firebase/FirebaseServer';
import { collection, query, where, getDocs } from "firebase/firestore";

function Redirect() {
  const { session, setSession } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const q = query(collection(firestore, 'Users'), where('uid', '==', `${session[0].uid}`))
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        navigate('/customize');
      } else {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc, doc.data());
          setSession(doc.data());
          localStorage.setItem('user', JSON.stringify(doc.data()));
          console.log(localStorage.getItem('user'))
          navigate('/feed');
        })
      }
    };
    checkUser();
  }, [])


  return (
    <div>Redirect</div>
  )
}

export default Redirect