import React from 'react'

function Searchbar() {
  return (
    <>
      <form className='search-container'>
        <input placeholder='Search' type='text'/>
        <button type='submit'>Enter</button>
      </form>
    </>
  )
}

export default Searchbar