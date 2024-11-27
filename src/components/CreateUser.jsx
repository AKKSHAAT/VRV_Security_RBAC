import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("admin");  // Default role is 'admin'
  const { addUser } = useAuth();
  const navigate = useNavigate();

  const handleNewUser = () => {
    addUser({ id: Date.now(), name, role , isActive: true}); // Generate unique ID using Date.now()
    navigate("/");
  };

  return (
    <div>
      <input
        type="text" // Correct type
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter User Name" // Corrected placeholder
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)} // Ensure this sets the role correctly
      >
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
      <button onClick={handleNewUser}>Add User</button>
    </div>
  );
};

export default CreateUser;
