import React from 'react'

function Register() {
  return (
    <>
      <form className='registration-container'>
        <label>Create a username</label>
        <input type='text'/>
        <button type='submit'>Create Account</button>
      </form>
    </>
  )
}

export default Register