import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/profile'><li>Profile</li></Link>
          <Link to='/logout'><li>Logout</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar