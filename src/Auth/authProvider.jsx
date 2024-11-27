import React, { createContext, useContext, useState } from "react";
import { useRole } from "./RoleProvider";

const AuthContext = createContext();

export const initialUsersData = [
  { id: 1, name: "Alice", role: "admin", isActive: true },
  { id: 2, name: "Bob", role: "editor", isActive: true },
];


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(initialUsersData);
  const { roles } = useRole();

  // simulates login
  const login = (userId) => {
    const foundUser = users.find((u) => u.id === userId);
    if (foundUser) setUser(foundUser); // Set user data after login
  };
  const logout = (userId) => {
    setUser(null);
  };

  const changeRole = (newRole, userId) => {
    const updatedUsers = users.map((u) => 
      u.id === userId ? { ...u, role: newRole } : u
    );
    setUsers(updatedUsers); 
  };
  const changeName = (name, userId) => {
    const updatedUsers = users.map((u) => 
      u.id === userId ? { ...u, name: name } : u
    );
    setUsers(updatedUsers); 
  };

  const isAuthorized = (permission) => {
    if (user) return roles[user.role]?.includes(permission);
    return false;
  };

  const allUsers = () => {
    return users.map(u=> u);
  }
  const addUser = (user) =>{
    setUsers(prev=> [...prev, user])
  }
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((u) => u.id !== userId);
    setUsers(updatedUsers);
    if (user && user.id === userId) {
      setUser(null); // Log out the deleted user if they're logged in
    }
  };

  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map((u) =>
      u.id === userId ? { ...u, isActive: !u.isActive } : u
    );
    setUsers(updatedUsers);
    if (user && user.id === userId && !updatedUsers.find((u) => u.id === userId).isActive) {
      setUser(null);
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout, changeRole, isAuthorized , allUsers, addUser, deleteUser, toggleUserStatus, changeName}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
