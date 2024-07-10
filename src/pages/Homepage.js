import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepageContainer center" style={{}}>
        <h1>Coder Dashboard</h1>
        <div className="homepage-btn-container">
          <button
            className="homepage-button"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login
          </button>
          <button
            className="homepage-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
