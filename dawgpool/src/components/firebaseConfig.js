// src/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD3klLF_0ydAhQ3mq1iLsFn0uB5TI9pTrg",
  authDomain: "dawgpool-info442.firebaseapp.com",
  projectId: "dawgpool-info442",
  storageBucket: "dawgpool-info442.firebaseapp.com",
  messagingSenderId: "320314644207",
  appId: "1:320314644207:web:1803a1f4da05c4ae7c2d1a",
};

// Ensure Firebase is only initialized once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { app, auth, database, firestore };
