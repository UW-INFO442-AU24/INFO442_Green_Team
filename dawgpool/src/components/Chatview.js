import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, query, orderByChild } from "firebase/database";

const ChatView = ({ selectedUser, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedUser) return;

    const database = getDatabase();
    const conversationId = [currentUser.uid, selectedUser].sort().join("_");
    const messagesRef = query(
      ref(database, `messages/${conversationId}`),
      orderByChild("timestamp")
    );

    // Listen for message updates
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data ? Object.values(data) : [];
      setMessages(messageList);
      setLoading(false); // Data has been loaded
    });
  }, [selectedUser, currentUser]);

  return (
    <div className="chat-view">
      <h2>Chat</h2>
      {loading ? (
        <p>Loading messages...</p>
      ) : selectedUser ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index} className={message.senderId === currentUser.uid ? "sent" : "received"}>
              <p>{message.text}</p>
              <small>{new Date(message.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>Select a user to start chatting</p>
      )}
    </div>
  );
};

export default ChatView;
