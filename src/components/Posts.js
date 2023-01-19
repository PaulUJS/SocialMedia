import React, { useEffect, useState } from 'react';
import Dropdown from './navigation/Dropdown';

function Posts({ posts }) {
  return (
    <>
      <div className='post-container'>
        <Dropdown posts={posts}/>
        <p>{posts.text}</p>
        <p>Posted By {posts.createdBy}</p>
        <p>Likes: {posts.Likes}</p>
      </div> 
    </>
  )
}

export default Posts