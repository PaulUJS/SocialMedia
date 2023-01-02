import React, { useState, useEffect, useContext } from 'react';
import { firestore } from '../firebase/FirebaseServer';
import { collection, getDocs } from "firebase/firestore";
import { nanoid } from 'nanoid';

import Posts from './Posts';
import { Context } from '../context/PostsContext';

function Feed() {
  const { posts, setPosts } = useContext(Context);

  const fetchPosts = async () => {
    // makes the reference for the firestore db
    const colRef = collection(firestore, 'posts');
    // grabs docs from posts and returns a promise
    await getDocs(colRef)
      .then((snapshot) => {
        let post = [];
        snapshot.docs.forEach((doc) => {
          post.push({ ...doc.data(), id: doc.id })
        })
        setPosts(post)
      })
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
          posts.map(post => {
            return (
              <>
                  <Posts key={post.id} posts={post}/>
              </>
            )
          })
  )
}

export default Feed