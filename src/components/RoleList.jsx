import React, { useState } from "react";
import { useRole } from "../Auth/RoleProvider"; // Ensure correct path

const RoleList = () => {
  const { roles, createRole } = useRole();
  const [roleName, setRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const availablePermissions = ["create", "read", "update", "delete"]; // Standard permissions

  const handlePermissionChange = (permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleName && selectedPermissions.length > 0) {
      createRole(roleName, selectedPermissions);
      setRoleName("");
      setSelectedPermissions([]);
    } else {
      alert("Please enter a role name and select at least one permission.");
    }
  };

  return (
    <div>
      <h2>Role List</h2>
      <ul>
        {Object.keys(roles).map((role, index) => (
          <li key={index}>
            <strong>{role}</strong>: {roles[role].join(", ")}
          </li>
        ))}
      </ul>

      <h3>Create New Role</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
        <div>
          {availablePermissions.map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={selectedPermissions.includes(permission)}
                onChange={() => handlePermissionChange(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
        <button type="submit">Create Role</button>
      </form>
    </div>
  );
};

export default RoleList;
