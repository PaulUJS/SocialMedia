import React from 'react';
import { useNavigate } from "react-router-dom";

function BioForm() {
  const navigate = useNavigate();

  const submitBio = async (e) => {
    e.preventDefault();
    navigate('/feed');
  };

  return (
    <>
      <form onSubmit={submitBio}>
        <label>Create a bio</label>
        <textarea type='text'/>
        <button type='submit'>Finish</button>
      </form>
    </>
  )
}

export default BioForm