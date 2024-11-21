import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoginPage } from './Login.js';
import MainPage from './MainPage.js';
import { Navbar } from './NavBar.js';
import Profile from './Profile.js';
import MessagingApp from './MessagingApp.js';
import Resources from './Resources.js';
import { RegisterPage } from './Registration.js';
import { auth, database } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

function App(props) {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/login');
      })
      .catch(error => console.error("Error during sign-out:", error));
  };

  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<MainPage user={user} database={database} />} />
        <Route path="/login" element={<LoginPage onGoogleSignIn={handleGoogleSignIn} />} />
        <Route path="/profile" element={<Profile user={user} database={database} onLogout={handleLogout} />} />
        <Route path="/message" element={<MessagingApp />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <footer className="footer">
        &copy; Copyright 2024
      </footer>
    </div>
  );
}

export default App;
