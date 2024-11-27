import React from "react";
import { useAuth } from "../Auth/authProvider";

export const ProtectedComponent = ({ permission, children }) => {
  const { isAuthorized } = useAuth();
  return isAuthorized(permission) ? children : <p>Access Denied</p>;
};
