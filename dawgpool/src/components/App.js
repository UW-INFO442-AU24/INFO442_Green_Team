import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from './Login.js';
import MainPage from './MainPage.js';
import { Navbar } from './NavBar.js';
import Profile from './profile.js'
import MessagingApp from './MessagingApp.js';
import EditProfile from './EditProfile.js';


function App(props) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<MessagingApp />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
    </div>
  );
} 

export default App;
