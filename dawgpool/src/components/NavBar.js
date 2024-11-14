import React from 'react';
import { slide as Menu } from "react-burger-menu";

export function Navbar(props) {
    return (
        <div>
      <nav className="desktop-nav">
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
              <li className="mx-2">
                    <strong><a href="/resources" aria-label="Profile">Resources</a></strong>
              </li>
          </ul>
      </nav>

        {/* Mobile Navbar */}
        <div className="mobile-navbar">
        <div className="navbar-left d-flex align-items-center p-3">
            <img src="/assets/uw_logo.png" alt="UW Logo" className="navbar-logo" />
            <Menu>
                <a id="main" className="menu-item" href="/">
                    Home
                </a>
                <a id="message" className="menu-item" href="/message">
                    Message
                </a>
                <a id="profile" className="menu-item" href="/profile">
                    Profile
                </a>
                <a id="resources" className="menu-item" href="/resources">
                    Resources
                </a>
            </Menu>
        </div>
        </div>
        </div>

    );
};
