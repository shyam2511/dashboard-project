import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Coders Dashboard</h1>
      <div>
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          Signin
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Homepage
