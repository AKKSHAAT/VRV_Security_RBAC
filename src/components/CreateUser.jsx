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
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-slate-100 text-center">Create New User</h2>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter User Name"
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
      
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        {Object.keys(roles).map((roleKey) => (
          <option key={roleKey} value={roleKey} className="text-slate-800">
            {roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}
          </option>
        ))}
      </select>
      
      <button
        onClick={handleNewUser}
        className="w-full bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600 transition-colors duration-200"
      >
        Add User
      </button>
  </div>
  );
};

export default CreateUser;
