import React, { useState } from "react";
import { useRole } from "../Auth/RoleProvider"; // Ensure correct path

const EditableRoleList = () => {
  const { roles, editRole, deleteRole } = useRole();
  const [editMode, setEditMode] = useState(null); // Track the role being edited
  const [updatedPermissions, setUpdatedPermissions] = useState([]);

  const availablePermissions = ["create", "read", "update", "delete"]; // Standard permissions

  const handlePermissionChange = (permission) => {
    setUpdatedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission) // Remove permission if already selected
        : [...prev, permission] // Add permission if not selected
    );
  };

  const handleSave = (roleName) => {
    editRole(roleName, updatedPermissions); // Save updated permissions
    setEditMode(null); // Exit edit mode
  };

  return (
    <div>
      <h2>Role Management</h2>
      <ul>
        {Object.keys(roles).map((roleName) => (
          <li key={roleName}>
            {editMode === roleName ? (
              <div>
                <strong>{roleName}</strong>
                <div>
                  {availablePermissions.map((permission) => (
                    <label key={permission}>
                      <input
                        type="checkbox"
                        checked={updatedPermissions.includes(permission)}
                        onChange={() => handlePermissionChange(permission)}
                      />
                      {permission}
                    </label>
                  ))}
                </div>
                <button onClick={() => handleSave(roleName)}>Save</button>
                <button onClick={() => setEditMode(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{roleName}</strong>: {roles[roleName].join(", ")}
                <button
                  onClick={() => {
                    setEditMode(roleName); // Enter edit mode
                    setUpdatedPermissions(roles[roleName]); // Load current permissions
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteRole(roleName)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableRoleList;
