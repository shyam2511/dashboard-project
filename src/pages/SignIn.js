import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import '../Pages.css'; // Import the SignIn CSS
import {useDispatch} from "react-redux";
import {login} from "../redux/authSlice"
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      dispatch(login(response.data));
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleLogin}>
        <h3>Sign In</h3>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <div className="password-toggle">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword((prevState) => !prevState);
              }}
            >
              {showPassword ? <AiFillEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <button type="submit">Sign In</button>
        <div className="links">
          <p>
            <Link to="/signup">Sign Up</Link>
          </p>
          <p>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
