import React from "react";
import { useAuth } from "../Auth/authProvider";
import EditableRows from "./EditableRows";
import { Link } from "react-router-dom";
import { ProtectedComponent } from "./ProtectedComponent";

const UserList = () => {
  const { allUsers } = useAuth();

  return (
    <>
    
      <table className=" border-collapse border border-slate-800 min-w-[70vw] mx-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 border">User Name</th>
            <th className="py-2 px-4 border">Role</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers().map((user) => (
            <EditableRows key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
