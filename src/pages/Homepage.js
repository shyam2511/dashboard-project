import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages.css";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <h1>Coder's Dashboard</h1>
      <div className="homepage-buttons">
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
};

export default Homepage;
