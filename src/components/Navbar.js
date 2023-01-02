import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


function Navbar() {
  const navigate = useNavigate();

  const signout = async () => {
    const auth = getAuth();
      signOut(auth).then(() => {
        navigate('/');
      }).catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      <nav>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/profile'><li>Profile</li></Link>
          <li><button onClick={signout}>Logout</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar