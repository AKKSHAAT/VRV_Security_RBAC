import { useState } from "react";
import { useAuth } from "./Auth/authProvider";
import { ProtectedComponent } from './components/ProtectedComponent'
import {Dashboard} from './components/Dashboard'
import { Link } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  
  const { user, isAuthorized, login, logout } = useAuth();
  return (
    <>
      {/* {user ? (
        <button onClick={logout} >logout</button>
      ) : (
        <Link to={'/login'}>login</Link>
      )}
      {isAuthorized("read") ? <p>hi {user.name}</p> : <p>please login</p>} */}
      <Nav />
      <ProtectedComponent permission={"delete"}>
        <Dashboard />
      </ProtectedComponent>
    </>
  );
}

export default App;
