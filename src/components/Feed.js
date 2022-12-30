import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/FirebaseServer';
import { collection, getDocs } from "firebase/firestore";

import Posts from './Posts';

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const query = await getDocs(collection(firestore, 'posts'));
    
    if (query) {
      
    } else {
      console.log('no Posts');
    }
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