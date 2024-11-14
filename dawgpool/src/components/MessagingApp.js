import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import Chatview from './Chatview.js';

const MessagingApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { name: 'Kevin', message: 'Pls take a look at the images.', time: '18:31', img: 'profile.jpg' },
    { name: 'Fullstack Designers', message: 'Hello guys, we have discussed about...', time: '16:04', img: 'designers.png' },
  ];

  const handleChatSelect = (chat) => setSelectedChat(chat);

  return (
    <div>
      <button id="toggle-sidebar" className="btn btn-primary d-lg-none">Toggle Sidebar</button>
      <div className="messaging-container">
        <Sidebar chats={chats} onSelectChat={handleChatSelect} />
        <Chatview selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default MessagingApp;
