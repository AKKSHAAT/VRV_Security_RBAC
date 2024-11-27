import React, { useState } from "react";
import { useRole } from "../Auth/RoleProvider"; // Ensure correct path
import EditableRoleList from "./EditableRoleList";
import { useNavigate } from "react-router-dom";
import {Nav} from './Nav';
import {ProtectedComponent} from './ProtectedComponent'

const RoleList = () => {
  const { roles, createRole } = useRole();
  const [roleName, setRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const navigate = useNavigate();

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
  const handleBack = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
    <Nav />
      <h2 className="text-3xl font-bold text-slate-100 mb-6">All Roles</h2>
      <button
        onClick={handleBack}
        className="mb-6 text-white bg-blue-500 hover:bg-blue-400 rounded-lg px-4 py-2"
      >
        &larr; Back to Home
      </button>
      <div className="flex flex-wrap justify-between gap-8">
        {/* EditableRoleList Section */}
        <ProtectedComponent permission={'update'}>

        <div className=" w-[50vw] bg-gray-800 p-6 rounded-lg shadow-lg">
          <EditableRoleList />
        </div>
        </ProtectedComponent>

        {/* Role Creation Section */}
        <section className=" w-[25vw] bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-100 mb-4">Create New Role</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Role Name"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 space-y-2">
              {availablePermissions.map((permission) => (
                <label key={permission} className="flex items-center text-slate-200">
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                    className="mr-2 rounded border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                  {permission}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Create Role
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default RoleList;
