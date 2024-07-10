import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const { id, token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await axios.post(`https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/reset-password/${id}/${token}`, {
        newPassword,
      });
      setMessage('Password reset successful');
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="password-input-container">
            <label>
              New Password:
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
          </div>
          <div className="password-input-container">
            <label>
              Confirm New Password:
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
