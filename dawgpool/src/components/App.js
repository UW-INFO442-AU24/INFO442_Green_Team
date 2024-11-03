import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './Login.js';
import MainPage from './MainPage.js';
import { Navbar } from './NavBar.js';
import Profile from './profile.js'
import { RegisterPage } from './Registration.js';


function App(props) {
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </div>
  );
} 

export default App;
