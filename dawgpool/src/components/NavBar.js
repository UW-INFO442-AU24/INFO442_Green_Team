import React from 'react';

export function Navbar(props) {
    return (
      <nav className="d-flex justify-content-between align-items-center p-3">
          <div className="navbar-left d-flex align-items-center">
              <img src="/assets/uw_logo.png" alt="UW Logo" className="navbar-logo" />
              <h1 className="ms-2">DAWGPOOL</h1>
          </div>
          <ul className="d-flex list-unstyled mb-0">
              <li className="mx-2">
                    <strong><a href="/" aria-label="Mainpage">Home</a></strong>
              </li>
              <li className="mx-2">
                    <strong><a href="/message" aria-label="Message">Message</a></strong>
              </li>
              <li className="mx-2">
                    <strong><a href="/profile" aria-label="Profile">Profile</a></strong>
              </li>
          </ul>
      </nav>
    );
};
