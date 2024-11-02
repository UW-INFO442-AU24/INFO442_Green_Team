import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoginPage } from './Login.js';
import MainPage from './MainPage.js';
import { Navbar } from './NavBar.js';
import Profile from './Profile.js'
import MessagingApp from './MessagingApp.js';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD3klLF_0ydAhQ3mq1iLsFn0uB5TI9pTrg",
  authDomain: "dawgpool-info442.firebaseapp.com",
  projectId: "dawgpool-info442",
  storageBucket: "dawgpool-info442.firebaseapp.com",
  messagingSenderId: "320314644207",
  appId: "1:320314644207:web:1803a1f4da05c4ae7c2d1a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

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

  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Navbar />}

    <Routes>
        <Route path="/" element={<MainPage user={user} database={database}/>} />
        <Route path="/login" element={<LoginPage onGoogleSignIn={handleGoogleSignIn} />} />
        <Route path="/profile" element={<Profile user={user} database={database}/>} />
        <Route path="/message" element={<MessagingApp />} />
    </Routes>

    <footer className="footer">
      &copy; Copyright 2024
    </footer>
  </div>
  );
} 

export default App;
