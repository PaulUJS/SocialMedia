import React from 'react'

function UsernameForm() {

  const submitUsername = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitUsername}>
        <label>Create a username</label>
        <input type='text' />
        <button type='submit'>Next</button>
      </form>
    </>
  )
}

export default UsernameForm