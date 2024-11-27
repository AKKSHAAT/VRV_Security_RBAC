import React from "react";
import { useAuth } from "../Auth/authProvider";
import { useState } from "react";
import { EditableRows } from "./EditableRows";

const UserList = () => {
  const { allUsers } = useAuth();
  
  return (
    <ul>
      {allUsers().map((user)=>(
        <EditableRows key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UserList;
