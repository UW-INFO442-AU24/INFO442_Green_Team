import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './Login.js';
import MainPage from './MainPage.js';
import { Navbar } from './NavBar.js';
import Profile from './Profile.js'


function App(props) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/n" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
} 

export default App;
