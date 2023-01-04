import React from 'react';
import { firestore } from '../../firebase/FirebaseServer';
import { collection, query, where, getDocs } from "firebase/firestore";

function Edit() {
  return (
    <>
      <form>
        <button type='submit'>Edit</button>
      </form>
    </>
  )
}

export default Edit