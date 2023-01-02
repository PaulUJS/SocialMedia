import React, { useRef, useState, useContext, useEffect } from 'react';
import { firestore } from '../firebase/FirebaseServer';
import { addDoc, collection } from 'firebase/firestore';
import { Context } from '../context/PostsContext';

function PostForm() {
  const colRef = collection(firestore, 'posts');
  const postRef = useRef();
  const { posts, setPosts } = useContext(Context);
  const [prev, setPrev] = useState([]);

  const createPost = async (e) => {
    e.preventDefault();
    const post = postRef.current.value;
    const postText = {text: post}
    addDoc(colRef, {
      text: post
    })
      .then(() => {
        setPrev(postText);
        postRef.current.value = null;
      })
  }

  useEffect(() => {
    setPosts([...posts, prev]);
  }, [prev]);

  return (
    <>
      <form className='post-form' onSubmit={createPost}>
        <textarea ref={postRef} placeholder='Write your Post'/>
        <button type='submit'>Create Post</button>
      </form>
    </>
  )
}

export default PostForm