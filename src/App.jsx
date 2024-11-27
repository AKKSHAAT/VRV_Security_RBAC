import { useState } from "react";
import { useAuth } from "./Auth/authProvider";
import { ProtectedComponent } from './components/ProtectedComponent'
import {Dashboard} from './components/Dashboard'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const { user, isAuthorized, login, logout } = useAuth();
  return (
    <>
      {user ? (
        <button onClick={logout} >logout</button>
      ) : (
        <Link to={'/login'}>login</Link>
      )}
      {isAuthorized("read") ? <p>hi {user.name}</p> : <p>please login</p>}
      
      <ProtectedComponent permission={"delete"}>
        <Dashboard />
      </ProtectedComponent>
    </>
  );
}

export default App;
