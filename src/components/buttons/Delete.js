import React from 'react';
import { firestore } from '../../firebase/FirebaseServer';
import { collection, query, where, getDocs } from "firebase/firestore";

function Delete() {
  return (
    <>
      <form>
        <button type='submit'>Delete</button>
      </form>
    </>
  )
}

export default Delete