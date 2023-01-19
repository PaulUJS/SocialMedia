import React from 'react';
import { firestore } from '../../firebase/FirebaseServer';
import { deleteDoc, doc } from "firebase/firestore";


function Delete({ posts }) {
  const deletePost = async (e) => {
    e.preventDefault();
    deleteDoc(doc(firestore, 'posts', posts.id))
      .then(() => {
        window.location.reload();
      })
  }
  return (
    <>
      <form onSubmit={deletePost}>
        <button type='submit'>Delete</button>
      </form>
    </>
  )
}

export default Delete