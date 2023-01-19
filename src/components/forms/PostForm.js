import React, { useRef, useState, useContext, useEffect } from 'react';
import { firestore } from '../../firebase/FirebaseServer';
import { addDoc, arrayUnion, collection, updateDoc, where, query, getDocs } from 'firebase/firestore';
import { Context } from '../../context/PostsContext';
import { Context as SessionContext } from '../../context/SessionContext';

function PostForm() {
  const colRef = collection(firestore, 'posts');
  const postRef = useRef();
  const { posts, setPosts } = useContext(Context);
  const { session, setSession } = useContext(SessionContext);
  const [next, setNext] = useState([]);

  const createPost = async (e) => {
    e.preventDefault();
    const post = postRef.current.value;
    const postText = {
      text: post,
      createdBy: session.username,
      Likes: 0
    }
    addDoc(colRef, postText)
      .then(() => {
        setNext(postText);
      })

    const q = query(collection(firestore, 'Users'), where('uid', '==', `${session[0].uid}`))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      updateDoc(doc, {
        Posts: arrayUnion(postText)
      })
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