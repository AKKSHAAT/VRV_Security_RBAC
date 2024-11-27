import React, { useState } from "react";
import { useAuth } from "../Auth/authProvider";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(Number(userId)); // Convert userId to number
    navigate("/");
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-slate-100 text-center">Login</h2>
      
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
      
      <button
        onClick={handleLogin}
        className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition duration-200"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
