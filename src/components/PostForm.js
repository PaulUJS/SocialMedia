import React, { useRef, useState, useContext, useEffect } from 'react';
import { firestore } from '../firebase/FirebaseServer';
import { addDoc, collection } from 'firebase/firestore';
import { Context } from '../context/PostsContext';

function PostForm() {
  const colRef = collection(firestore, 'posts');
  const postRef = useRef();
  const { posts, setPosts } = useContext(Context);
  const [next, setNext] = useState([]);

  const createPost = async (e) => {
    e.preventDefault();
    const post = postRef.current.value;
    const postText = {text: post}
    addDoc(colRef, {
      text: post
    })
      .then(() => {
        setNext(postText);
        postRef.current.value = null;
      })
  }

  useEffect(() => {
    setPosts([...posts, next]);
  }, [next]);

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