import React from 'react';
import { Link } from 'react-router-dom';

export function LoginPage({ onGoogleSignIn }) {

  return (
    <div>
      {/* Header */}
      <header className="login-header" role="banner">
      <div className="nav-left d-flex align-items-center">
        <img src="/assets/uw_logo.png" alt="University of Washington Logo" className="login-header-logo"/>
        <h1 className="ms-2">DAWGPOOL</h1>
      </div>
        <div className="login-nav-links">
          <p><strong>Login with your UW Account!</strong></p>
        </div>
      </header>

      {/* Main Content */}
      <div className="login-container">
        {/* Image Section */}
        <div className="login-image-section" aria-labelledby="welcome-heading">
          <img
            src="/assets/dawg.png"
            alt="Illustration of a cool dog"
            className="login-image"
          />
          <div className="login-image-overlay">
            <h2 id="welcome-heading">WELCOME TO DAWGPOOL</h2>
          </div>
        </div>

        {/* Login Section */}
        <div className="login-form-section" aria-labelledby="login-title">
          <h2 id="login-title" className="login-title">LOGIN</h2>
          <button className="btn btn-primary" onClick={onGoogleSignIn} aria-label="Login with your University of Washington email">
            Login with UW Email
          </button>
          <div className="mt-3">
            <Link to="/" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" aria-label="Continue browsing the main page"
            style={{
              color: "rgb(0, 51, 102)",
              backgroundColor: "rgb(255, 255, 204)",
            }}>
              Continue browsing main page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}