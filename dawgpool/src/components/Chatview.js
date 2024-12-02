import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, query, orderByChild } from "firebase/database";

const driverImage = "/assets/driverimage.png";
const passengerImage = "/assets/passengerimage.png";

const ChatView = ({ selectedUser, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedUser || !currentUser) {
      console.error("Missing selectedUser or currentUser");
      return;
    }
  
    const sanitizePath = (path) => path.replace(/[.#$[\]]/g, "_");
    const userUid = (user) => user?.uid || "unknown_user";
  
    const conversationId = sanitizePath([userUid(currentUser), userUid(selectedUser)].sort().join("_"));
  
    const database = getDatabase();
    const messagesRef = query(
      ref(database, `messages/${conversationId}`),
      orderByChild("timestamp")
    );
  
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data ? Object.values(data) : [];
      setMessages(messageList);
      setLoading(false);
    });
  }, [selectedUser, currentUser]);
  

  // Create a simple stars display based on a rating
  // Create a simple stars display based on a rating
// Create a simple stars display based on a rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} style={{ marginRight: "5px" }}>
        {i < rating ? "★" : "☆"}
      </span>
    );
  }
  return stars; // Return the stars as an array of JSX elements
};



  // Dynamically set the profile picture
  const getProfileImage = (user) => {
    return user.profilePhoto || (user.isDriver ? driverImage : passengerImage);
  };

  return (
    <div className="chat-view">
      <div className="chat-header">
        {/* Profile Picture */}
        <img
          src={getProfileImage(selectedUser)}
          alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
          className="profile-photo"
        />
        {/* User's Name */}
        <div className="user-info">
          <h2>
            {selectedUser.firstName} {selectedUser.lastName}
          </h2>

          {/* Stars below name */}
          <div className="user-rating">
            {renderStars(selectedUser.rating || 0)} {/* Display stars based on rating */}
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <ul>
            {messages.map((message, index) => (
              <li
                key={index}
                className={message.senderId === currentUser.uid ? "sent" : "received"}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <small>{new Date(message.timestamp).toLocaleString()}</small>
                </div>
              </li>
            ))}
          </ul>

      )}
    </div>
  );
};

export default ChatView;

