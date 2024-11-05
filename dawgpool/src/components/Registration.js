import React from 'react';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/main');
  };

  return (
    <div>
      {/* Header */}
      <header className="login-header">
        <div className="nav-left d-flex align-items-center">
          <img src="/assets/uw_logo.png" alt="UW Logo" className="login-header-logo" />
          <h1 className="ms-2">DAWGPOOL</h1>
        </div>
        <div className="login-nav-links">
          <a href="#login">LOGIN</a>
          <span>-or-</span>
          <a href="#signup">SIGNUP</a>
        </div>
      </header>

      {/* Main Content */}
      <div className="login-container">
        {/* Image Section */}
        <div className="login-image-section">
          <img src="/assets/dawg.png" alt="Cool Dog" className="login-image" />
          <div className="login-image-overlay">
            <h2>JOIN DAWGPOOL TODAY</h2>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="login-form-section">
          <h2 className="login-title">SIGN UP</h2>
          <form className="login-form" onSubmit={handleRegister}>
            <div className="login-form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="login-form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <div className="login-form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="login-btn">REGISTER</button>
            <p className="login-signup-text">
              Already have an account? <a href="#login" className="login-signup-link">LOGIN</a>
            </p>
          </form>
        </div>
      </div>

      <footer className="footer">
        &copy; Copyright 2024
      </footer>
    </div>
  );
}
