# **Role-Based Access Control (RBAC) Application**

## **Overview**

This project is a **Role-Based Access Control (RBAC) System** built with **React** for the frontend and a **state management** system via `Context` API for managing user roles and permissions. The purpose of this application is to allow admins to manage users, roles, and permissions, simulating a basic administration panel for managing access to different resources based on user roles.

The application supports creating, editing, and deleting roles with associated permissions, and it also provides functionality to manage users and their statuses.

---

## **Table of Contents**

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Run the Project](#how-to-run-the-project)


---

## **Technologies Used**

- **Frontend:** React, JSX, TailwindCSS
- **State Management:** Context API
- **Routing:** React Router 

---

## **Features**

- **User Authentication**: Simple login system to simulate user authentication based on user ID.
- **Role Management**: Admins can create, edit, and delete roles with various permissions like 'create', 'read', 'update', and 'delete'.
- **Dynamic Permissions**: Permissions can be assigned and modified for each role, and those roles can be edited dynamically.
- **User Management**: Users can be assigned roles, and their status can be toggled between active and inactive.
- **State Management**: Managed user roles and permissions using React Context API or Zustand for global state management.

---

## **Project Structure**

```
/src
├── /components
│   ├── CreateUser.js           // User creation form
│   ├── EditableRoleList.js     // Editable list of roles with permissions
│   ├── RoleList.js             // Displays roles and allows for editing/creating roles
│   ├── UserList.js             // Displays users and allows for managing user details
│   └── LoginForm.js            // User login form
├── /Auth
│   ├── authProvider.js         // Handles user login state and session
│   ├── RoleProvider.js         // Handles role and permission management
└── App.js                      // Main entry point
```

### **Key Components:**
1. **RoleList.js**: A component that lists all roles and allows the creation of new roles with permissions. It communicates with the `RoleProvider` to manage roles and permissions.
2. **EditableRoleList.js**: A component to edit roles, modify permissions, and delete roles.
3. **UserList.js**: Displays users and allows the admin to manage user details (name, role, status).
4. **CreateUser.js**: A form for creating new users and assigning them roles.
5. **LoginForm.js**: Allows the user to login by entering their user ID.
6. **RoleProvider.js**: A context provider that handles the state for roles and permissions.
7. **AuthProvider.js**: A context provider that manages user login state.

---

## **How to Run the Project**

### 1. Clone the repository
```bash
git clone https://github.com/AKKSHAAT/VRV_Security_RBAC.git
cd VRV_Security_RBAC
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm dev
```

---
