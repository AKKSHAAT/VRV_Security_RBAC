import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";
import { ProtectedComponent } from "./ProtectedComponent";

export const EditableRows = ({ user }) => {
  const { changeRole, deleteUser, toggleUserStatus } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleEdit = () => {
    setEditMode(!editMode);
    changeRole(role, user.id);
  };

  const handleDelete = () => {
    setEditMode(!editMode);
    deleteUser(user.id);
  };

  return (
    <li>
      {!editMode ? (
        <div>
          {user.name} ({user.role})
          <button onClick={() => setEditMode(!editMode)}>edit</button>
        </div>
      ) : (
        <div>
          <input
            type="Text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>

          <button onClick={handleEdit}>Update</button>
          <button onClick={handleDelete}>delete</button>
          <button onClick={() => toggleUserStatus(user.id)}>
            {user.isActive ? "Deactivate" : "Activate"}
          </button>
        </div>
      )}
    </li>
  );
};
