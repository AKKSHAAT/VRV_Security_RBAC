import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const usersData = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // simulates login
  const login = (userId) => {
    const foundUser = usersData.find((u) => u.id === userId);
    if (foundUser) setUser(foundUser); // Set user data after login
  };
  const logout = (userId) => {
    setUser(null);
  };

  const changeRole = (newRole) => {
    if (user) {
      setUser({ ...user, role: newRole });
    }
  };

  const isAuthorized = (permission) => {
    const roles = {
      admin: ["create", "read", "update", "delete"],
      editor: ["read", "update"],
      viewer: ["read"],
    };

    if (user) return roles[user.role]?.includes(permission);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, changeRole, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
