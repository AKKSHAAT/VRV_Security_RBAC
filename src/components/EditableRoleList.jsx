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
    <div className="max-w-4xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-slate-100 mb-6">Manage Roles</h2>
      <ul className="space-y-4">
        {Object.keys(roles).map((roleName) => (
          <li
            key={roleName}
            className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-sm hover:bg-gray-600 transition"
          >
            {editMode === roleName ? (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center">
                  <strong className="text-slate-100 text-xl">{roleName}</strong>
                  <div>
                    <button
                      onClick={() => handleSave(roleName)}
                      className="bg-slate-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-slate-500 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(null)}
                      className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {availablePermissions.map((permission) => (
                    <label key={permission} className="flex items-center text-slate-200">
                      <input
                        type="checkbox"
                        checked={updatedPermissions.includes(permission)}
                        onChange={() => handlePermissionChange(permission)}
                        className="mr-2"
                      />
                      {permission}
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <div className="text-slate-100 text-lg">
                  <strong>{roleName}</strong>:{" "}
                  <span className="text-slate-400">{roles[roleName].join(", ")}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEditMode(roleName); // Enter edit mode
                      setUpdatedPermissions(roles[roleName]); // Load current permissions
                    }}
                    className="bg-blue-600 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteRole(roleName)}
                    className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-500 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableRoleList;
