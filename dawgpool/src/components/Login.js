import React from 'react';
import '../index.css';

function LoginPage() {
  return (
    <div>
      {/* Header */}
      <header className="login-header">
        <div className="login-logo">
          <span>W</span> DAWGPOOL
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
          <form className="login-form">
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
    </div>
  );
}

export default LoginPage;
