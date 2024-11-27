import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct import
import { AuthProvider } from "./Auth/authProvider.jsx";
import { RoleProvider } from "./Auth/RoleProvider";
import CreateUser from "./components/CreateUser.jsx";
import "./index.css";
import App from "./App.jsx";
import LoginForm from "./components/LoginForm.jsx";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/login", // Route path
    element: <LoginForm />, // Component to render at "/"
  },
  {
    path: "/", // Example route for your main app
    element: <App />,
  },
  {
    path: "/newUser",
    element: <CreateUser />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoleProvider>
      <AuthProvider>
        <RouterProvider router={router} />{" "}
        {/* Pass the router to RouterProvider */}
      </AuthProvider>
    </RoleProvider>
  </StrictMode>
);
