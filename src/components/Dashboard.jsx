import React from "react";
import { ProtectedComponent } from "./ProtectedComponent";
import UserList from "./UserList";
import { Link } from "react-router-dom";
import RoleList from "./RoleList";

export const Dashboard = () => {
  return (
    <div className=" bg-gray-900">
      <h1 className=" text-3xl font-bold">Dashboard</h1>
      
      <ProtectedComponent permission={"create"}>
          <Link
            className=" bg-slate-800 p-2 m-3 rounded-lg font-semibold inline-block "
            to={"/newUser"}>
            + New User
          </Link>
      </ProtectedComponent>
      <ProtectedComponent permission={"create"}>
          <Link
            className=" bg-slate-800 p-2 m-3 rounded-lg font-semibold inline-block "
            to={"/roles"}>
            Roles
          </Link>
      </ProtectedComponent>
      <section className=" justify-around">
        <ProtectedComponent permission={"read"}>
          <UserList />
        </ProtectedComponent>
       
      </section>

      {/* <ProtectedComponent permission={"update"}>
        <RoleList />
      </ProtectedComponent> */}
    </div>
  );
};
