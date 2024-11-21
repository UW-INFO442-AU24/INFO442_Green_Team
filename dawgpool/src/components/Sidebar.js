import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Sidebar = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const profilesRef = ref(database, "profiles");

    // Fetch user profiles
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

  return (
    <div className="sidebar">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.uid} onClick={() => onSelectUser(user.uid)}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
