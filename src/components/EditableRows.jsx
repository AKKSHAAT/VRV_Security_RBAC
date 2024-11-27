import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";

const EditableRows = ({ user }) => {
  const { changeRole, changeName, deleteUser, toggleUserStatus } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleEdit = () => {
    changeRole(role, user.id);
    changeName(name, user.id);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteUser(user.id);
  };

  return (
    <tr>
      <td className="py-2 px-4 border">
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 w-full bg-slate-800"
          />
        ) : (
          name
        )}
      </td>
      <td className="py-2 px-4 border">
        {editMode ? (
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-1 w-full bg-slate-800"
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        ) : (
          role
        )}
      </td>
      <td className="py-2 px-4 border flex gap-2 justify-center">
        {editMode ? (
          <>
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-500 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toggleUserStatus(user.id)}
              className={`px-2 py-1 rounded ${
                user.isActive ? "bg-yellow-500" : "bg-green-500"
              } text-white`}
            >
              {user.isActive ? "Deactivate" : "Activate"}
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default EditableRows;
