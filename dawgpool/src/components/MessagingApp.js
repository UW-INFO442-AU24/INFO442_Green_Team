import React, { useState } from 'react';           // Adjusted to match export
import Sidebar from './Sidebar';           // Corrected import to match file name
import Chatview from './Chatview';         // Corrected import to match file name
import './messaging.css';    

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



