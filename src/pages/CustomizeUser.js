import React from 'react';
import UsernameForm from '../components/UsernameForm';
import BioForm from '../components/BioForm';

function CustomizeUser() {
  return (
    <>
      <div className='user-container'>
        <UsernameForm/>
        <BioForm/>
      </div>
    </>
  )
}

export default CustomizeUser