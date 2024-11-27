import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { user, isAuthorized, login, logout } = useAuth();
  return (
    <nav className="flex gap-3 justify-between items-center px-8 bg-blue-950 h-16 text-white">
      {isAuthorized("read") ? <p>hi {user.name}</p> : <p>please login</p>}
      {user ? (
        <button onClick={logout}>logout</button>
      ) : (
        <Link className="" to={"/login"}>login</Link>
      )}
    </nav>
  );
};
