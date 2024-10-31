import React from 'react';
import { ProfileCard } from './ProfileCard';

function MainPage(props) {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <header className="text-center mb-4 d-flex justify-content-center align-items-center">
          <img src="assets/dawgprint.png" alt="dawgprint" className="heading-logo me-2" />
          <h1>Find your Carpool Dawg!</h1>
        </header>

        <div className="input-group mb-4 w-50 mx-auto search-bar">
          <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Search by region" 
            aria-label="Search Bar" 
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProfileCard key={index} />
          ))}
        </div>
      </div>

      <footer className="footer">
        &copy; Copyright 2024
      </footer>
    </div>
  );
};

export default MainPage;
