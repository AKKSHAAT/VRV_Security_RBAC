import React from "react";
import { usersData } from "../Auth/authProvider";

const UserList = () => {
  return (
    <ul>
      {usersData.map((user) => (
        <li key={user.id}>
          {user.name} ({user.role})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
