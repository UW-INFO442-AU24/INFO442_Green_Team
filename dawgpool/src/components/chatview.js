// src/components/ChatView.js
import React, { useState } from 'react';

const ChatView = ({ selectedChat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-view">
      {selectedChat ? (
        <>
          {/* Chat Header */}
          <div className="chat-header">
            <img src="/assets/profile.jpg" alt="profile-photo" className="profile-photo" />
            <div className="profile-info">
              <h2 id="chat-profile-name">{selectedChat.name}</h2>
              <span id="chat-profile-year">Year: Senior</span>
              <a href="#" className="schedule-link">Click for Schedule</a>
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="messages" id="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <span>{msg.sender}:</span> {msg.text}
              </div>
            ))}
          </div>
          
          {/* Message Input Box */}
          <div className="message-input-box message-input bg-light p-3 d-flex" style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-control me-2"
              id="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage} className="btn btn-primary" id="send-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14.146 8.354a.5.5 0 0 0 0-.708l-6-6a.5.5 0 1 0-.708.708L12.293 8H1.5a.5.5 0 0 0 0 1h10.793l-4.855 4.854a.5.5 0 0 0 .708.708l6-6z"/>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div>Please select a chat to start messaging.</div>
      )}
    </div>
  );
};

export default ChatView;

