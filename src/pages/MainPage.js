import React from 'react';
import { firestore } from '../firebase/FirebaseServer';
import Feed from '../components/Feed';



function MainPage() {
  return (
    <>
      <Feed/>
    </>
  )
}

export default MainPage