/* eslint-disable */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const options = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/login`,
        {
          email,
          password,
        },
        options
      );
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.log(error);
    }
  };

  return (
      <div>
        <div>
          <form
            onSubmit={handleLogin}
          >
            <h3 >Sign In</h3>
            {errorMessage && (
              <p >{errorMessage}</p>
            )}
            <div>
              <label>
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div >
              <label>
                Password
              </label>
              <div >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => {
                    setShowPassword((prevState) => !prevState);
                  }}
                  
                >
                  {showPassword ? <AiFillEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              >
              Sign In
            </button>
            <div>
              <p>
                <Link to="/signup">Sign Up</Link>
              </p>
              <p>
                <Link to="/forgotpassword">Forgot Password?</Link>
              </p>
            </div>
          </form>
        </div>
        
      </div>
  );
};

export default SignIn;
