import React from 'react'

function Posts({ posts }) {
  return (
    <>
      <div className='post-container'>
        <p>{posts.text}</p>
        <p>Posted By {posts.createdBy}</p>
        <p>Likes {posts.Likes}</p>
      </div> 
    </>
  )
}

export default Posts