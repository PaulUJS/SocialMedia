import React from 'react';
import { firestore } from '../firebase/FirebaseServer';

import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import PostForm from '../components/PostForm';

function MainPage() {
  return (
    <>
      <div className='main-container'>
        <Navbar/>
        <Searchbar/>
        <PostForm/>
        <Feed/>
      </div>
    </>
  )
}

export default MainPage