import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const driverImage = "/assets/driverimage.png";
const passengerImage = "/assets/passengerimage.png";

const Sidebar = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const profilesRef = ref(database, "profiles");

    // Fetch user profiles dynamically
    onValue(profilesRef, (snapshot) => {
      const profiles = snapshot.val();
      if (profiles) {
        const userList = Object.keys(profiles).map((uid) => ({
          uid,
          ...profiles[uid], // Ensure dynamic properties are fetched here
        }));
        setUsers(userList);
      }
    });
  }, []);

  return (
    <div className="chats-sidebar">
      <h2>Users</h2>
      {users.map((user) => (
        <div
          key={user.uid}
          className="chat-item"
          onClick={() => onSelectUser(user)} // Pass the full user object
          style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px", marginBottom: "10px" }} // Add a separator line between profiles
        >
          <img
            src={user.profilePhoto || (user.isDriver ? driverImage : passengerImage)} // Dynamically determine image
            alt={`${user.firstName} ${user.lastName}`}
            className="profile-photo"
          />

          <div className="chat-info">
            <h4>{user.firstName} {user.lastName}</h4>
            <p>{user.status || "Available"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;


