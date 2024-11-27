import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";
import { useNavigate } from "react-router-dom";
import { useRole } from "../Auth/RoleProvider";
const CreateUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useAuth();
  const { roles } = useRole(); // Fetch roles from RoleProvider
  const [role, setRole] = useState("admin"); // Default role is 'admin'
  const navigate = useNavigate();

  const handleNewUser = () => {
    addUser({ id: Date.now(), name, role, isActive: true }); // Generate unique ID using Date.now()
    navigate("/");
  };

  return (
    <div>
      <input
        type="text" // Correct type
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter User Name" 
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {Object.keys(roles).map((roleKey) => (
          <option key={roleKey} value={roleKey}>
            {roleKey.charAt(0).toUpperCase() + roleKey.slice(1)} 
          </option>
        ))}
      </select>
      <button onClick={handleNewUser}>Add User</button>
    </div>
  );
};

export default CreateUser;
