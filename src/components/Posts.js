import React from 'react'

function Posts({ posts }) {
  return (
    <>
      <div className='post-container'>
        <p>{posts.text}</p>  
      </div> 
    </>
  )
}

export default Posts