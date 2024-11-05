import React from 'react';

const Sidebar = ({ chats, onSelectChat }) => (
  <div className="chats-sidebar">
    {chats.map((chat, index) => (
      <div
        key={index}
        className="chat-item"
        onClick={() => onSelectChat(chat)}
      >
        <img src="/assets/profile.jpg" alt="profile-photo" className="profile-photo" />
        <div className="chat-info">
          <h4>{chat.name}</h4>
          <p>{chat.message}</p>
        </div>
        <span className="time">{chat.time}</span>
      </div>
    ))}
  </div>
);

export default Sidebar;
