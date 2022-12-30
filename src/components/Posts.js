import React from 'react'

function Posts({ posts }) {
  return (
    <>
      <div>
        <p>{posts.text}</p>  
      </div> 
    </>
  )
}

export default Posts