import React from 'react';

export function LoginPage({ onGoogleSignIn }) {

  return (
    <div>
      {/* Header */}
      <header className="login-header">
      <div className="nav-left d-flex align-items-center">
        <img src="/assets/uw_logo.png" alt="UW Logo" className="login-header-logo"/>
        <h1 className="ms-2">DAWGPOOL</h1>
      </div>
        <div className="login-nav-links">
          <p><strong>Login with your UW Account!</strong></p>
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
          <button className="btn btn-primary" onClick={onGoogleSignIn}>
            Login with UW Email
          </button>
        </div>
      </div>
    </div>
  );
}