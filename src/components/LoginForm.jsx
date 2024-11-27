import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(Number(userId));  // Convert userId to number
    navigate("/");
  };

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
