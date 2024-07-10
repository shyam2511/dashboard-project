
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
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
