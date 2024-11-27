import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext();

// Initial roles with permissions
export const initialRolesData = {
  admin: ["create", "read", "update", "delete"],
  editor: ["read", "update"],
  viewer: ["read"],
};

export const RoleProvider = ({ children }) => {

  const [roles, setRoles] = useState(initialRolesData);

  // Create a new role
  const createRole = (roleName, permissions) => {
    setRoles((prevRoles) => ({ ...prevRoles, [roleName]: permissions }));
  };

  // Edit an existing role
  const editRole = (roleName, newPermissions) => {
    setRoles((prevRoles) => ({ ...prevRoles, [roleName]: newPermissions }));
  };

  // Delete a role
  const deleteRole = (roleName) => {
    const updatedRoles = { ...roles };
    delete updatedRoles[roleName];
    setRoles(updatedRoles);
  };

  // Retrieve all roles
  const getRoles = () => {
    return roles;
  };

  return (
    <RoleContext.Provider value={{ roles, createRole, editRole, deleteRole, getRoles }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
