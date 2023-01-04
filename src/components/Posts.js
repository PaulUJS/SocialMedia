import React from 'react';
import Dropdown from './Dropdown';

function Posts({ posts }) {
  return (
    <>
      <div className='post-container'>
        <Dropdown/>
        <p>{posts.text}</p>
        <p>Posted By {posts.createdBy}</p>
        <p>Likes {posts.Likes}</p>
      </div> 
    </>
  )
}

export default Posts