import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/forgot-password', { email });
      setMessage(response.data.message || 'Reset link sent to your email.');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setMessage(error.response ? error.response.data.error || 'Error sending password reset email.' : 'Error sending password reset email.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="email-input-container">
            <label>
              Email:
              <div className="email-input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
              </div>
            </label>
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
