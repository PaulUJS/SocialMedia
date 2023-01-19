import React, { useState, useRef } from 'react';
import { firestore } from '../../firebase/FirebaseServer';
import { updateDoc, doc } from "firebase/firestore";

function Edit({ posts }) {
  const [isShown, setIsShown] = useState(false);
  const postRef = useRef();
  const editPost = async (e) => {
    e.preventDefault();
    const post = postRef.current.value;
    updateDoc(doc(firestore, 'posts', posts.id), {
      text: post
    })
      .then(() => {
        window.location.reload();
      })
  }

  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>Edit</button>
      {isShown && 
        <form className='post-form' onSubmit={editPost}>
          <textarea ref={postRef} placeholder='Write your Post'/>
          <button type='submit'>Edit Post</button>
        </form>
      }
    </>
  )
}

export default Edit