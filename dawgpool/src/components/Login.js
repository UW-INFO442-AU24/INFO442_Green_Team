import React from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage(props) {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/main');
  };

  return (
    <div>
      {/* Header */}
      <header className="login-header">
      <div className="nav-left d-flex align-items-center">
        <img src="/assets/uw_logo.png" alt="UW Logo" className="login-header-logo"/>
        <h1 className="ms-2">DAWGPOOL</h1>
      </div>
        <div className="login-nav-links">
          <a href="#login">LOGIN</a>
          <span>-or-</span>  
          <a href="#signup">SIGNUP</a>
        </div>
        {/* need to be updated */}
      </header>

      {/* Main Content */}
      <div className="login-container">
        {/* Image Section */}
        <div className="login-image-section">
          <img
            src="/assets/dawg.png"
            alt="Cool Dog"
            className="login-image"
          />
          <div className="login-image-overlay">
            <h2>WELCOME TO DAWGPOOL</h2>
          </div>
        </div>

        {/* Login Section */}
        <div className="login-form-section">
          <h2 className="login-title">LOGIN</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="login-form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="login-form-group login-remember-me">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <button type="submit" className="login-btn">LOGIN</button>
            <a href="#forgot" className="login-forgot-password">Forgot Password?</a>
            <p className="login-signup-text">
              Need an account? <a href="#signup" className="login-signup-link">SIGN UP</a>
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