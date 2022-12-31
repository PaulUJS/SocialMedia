import React from 'react'

function Posts({ key, posts }) {
  return (
    <>
      <div className='post-container' key={key}>
        <p>{posts.text}</p>  
      </div> 
    </>
  )
}

export default Posts