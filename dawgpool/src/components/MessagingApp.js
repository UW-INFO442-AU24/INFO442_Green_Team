import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Sidebar from "./Sidebar"; // Assume Sidebar displays users and lets you select one
import Messaging from "./Messaging"; // Import your existing Messaging component
import ChatView from "./Chatview"; // ChatView shows the chat history
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Chatview from './Chatview.js';

const MessagingApp = () => {
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user
  const [currentUser, setCurrentUser] = useState(null); // Track the current logged-in user
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the current user and users list from Firebase
    const database = getDatabase();

    // Assume currentUser is fetched somehow, e.g. through Firebase auth
    const fetchCurrentUser = async () => {
      // Example: Fetch user data from Firebase or some auth service
      setCurrentUser({
        uid: "22dQzmlUrdV3YsaKCttJJH14LOj1", // Example user ID
        firstName: "Jam", // Example first name
        lastName: "Saka",
      });
    };

    fetchCurrentUser();

    const profilesRef = ref(database, "profiles");
    onValue(profilesRef, (snapshot) => {
      const profiles = snapshot.val();
      if (profiles) {
        const userList = Object.keys(profiles).map((uid) => ({
          uid,
          ...profiles[uid],
        }));
        setUsers(userList); // Set users list in state
      }
    });
  }, []);

  const handleSelectUser = (uid) => {
    // Select a user to chat with
    setSelectedUser(uid);
  };

  return (
    <div className="messaging-app">
      <Sidebar users={users} onSelectUser={handleSelectUser} />
      
      {/* ChatView and Messaging components */}
      {selectedUser ? (
        <>
          <ChatView selectedUser={selectedUser} currentUser={currentUser} />
          <Messaging selectedUser={selectedUser} currentUser={currentUser} />
        </>
      ) : (
        <p>Please select a user to start a conversation</p>
      )}
    </div>
  );
};

export default MessagingApp;



