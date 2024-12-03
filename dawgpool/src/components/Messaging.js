import React, { useState } from "react";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";

const Messaging = ({ selectedUser, currentUser }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return; // Don't send empty messages
  
    const database = getDatabase();
    // Ensure you are using only the `uid` of selectedUser
    const conversationId = [currentUser.uid, selectedUser.uid].sort().join("_");
    const messagesRef = ref(database, `messages/${conversationId}`);
  
    await push(messagesRef, {
      senderId: currentUser.uid,
      receiverId: selectedUser.uid, // Also ensure this is the correct reference (just the uid)
      text: message,
      timestamp: serverTimestamp(),
    });
  
    setMessage(""); // Clear message input
  };
  

  return (
    <div className="message-input-box bg-light p-3 d-flex">
      {selectedUser ? (
        <>
          <input
            type="text"
            className="form-control me-2"
            id="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary"
            id="send-message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14.146 8.354a.5.5 0 0 0 0-.708l-6-6a.5.5 0 1 0-.708.708L12.293 8H1.5a.5.5 0 0 0 0 1h10.793l-4.855 4.854a.5.5 0 0 0 .708.708l6-6z"
              />
            </svg>
          </button>
        </>
      ) : (
        <div>Please select a user to send a message.</div>
    )}
  </div>

  );
};

export default Messaging;
