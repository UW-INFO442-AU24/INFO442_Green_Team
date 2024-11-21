import React, { useState } from "react";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";

const Messaging = ({ selectedUser, currentUser }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return; // Don't send empty messages

    const database = getDatabase();
    const conversationId = [currentUser.uid, selectedUser].sort().join("_");
    const messagesRef = ref(database, `messages/${conversationId}`);

    await push(messagesRef, {
      senderId: currentUser.uid,
      receiverId: selectedUser,
      text: message,
      timestamp: serverTimestamp(),
    });

    setMessage(""); // Clear message input
  };

  return (
    <div className="messaging">
      {selectedUser ? (
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      ) : (
        <p>Select a user to send a message</p>
      )}
    </div>
  );
};

export default Messaging;
