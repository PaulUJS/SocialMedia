import React from 'react';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <h1>Welcome to twitter but better!</h1>
      <Link to='/register'><button>Sign Up</button></Link>
      <Link to='/login'><p>You already have an account</p></Link>
    </>
  )
}

export default LandingPage