import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/FirebaseServer';
import { collection, getDocs } from "firebase/firestore";
import { nanoid } from 'nanoid';
import Posts from './Posts';

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    // makes the reference for the firestore db
    const col = collection(firestore, 'posts');
    // grabs docs from posts and returns a promise
    await getDocs(col)
      .then((snapshot) => {
        let post = [];
        snapshot.docs.forEach((doc) => {
          post.push({ ...doc.data(), id: doc.id })
        })
        setPosts(post)
        console.log(Posts)
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