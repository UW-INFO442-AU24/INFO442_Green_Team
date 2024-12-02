import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "./Sidebar";
import Messaging from "./Messaging";
import ChatView from "./Chatview";

const MessagingApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const auth = getAuth();

    // Fetch the current authenticated user
    const fetchCurrentUser = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          });
        } else {
          setCurrentUser(null); // No user is logged in
        }
      });
    };

    fetchCurrentUser();

    // Fetch the list of users from the database
    const profilesRef = ref(database, "profiles");
    onValue(profilesRef, (snapshot) => {
      const profiles = snapshot.val();
      if (profiles) {
        const userList = Object.keys(profiles).map((uid) => ({
          uid,
          ...profiles[uid],
        }));
        setUsers(userList);
      }
    });
  }, []);

  const handleSelectUser = (uid) => {
    setSelectedUser(uid);
  };

  return (
    <div className="messaging-app">
      <Sidebar users={users} onSelectUser={handleSelectUser} />

      <div className="chat-area">
        {selectedUser ? (
          <>
            <ChatView selectedUser={selectedUser} currentUser={currentUser} />
            <Messaging selectedUser={selectedUser} currentUser={currentUser} />
          </>
        ) : (
          <p>Please select a user to start a conversation</p>
        )}
      </div>
    </div>
  );
};

export default MessagingApp;