import React from 'react'

function PostForm() {
  return (
    <>
      <form className='post-form'>
        <textarea placeholder='Write your Post'/>
        <button type='submit'>Create Post</button>
      </form>
    </>
  )
}

export default PostForm