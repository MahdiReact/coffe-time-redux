import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./adminContainer.css";
import AdminSideBar from "./adminSideBar/AdminSideBar";
import AdminSiteInfo from "./adminSiteInfo/AdminSiteInfo";

const AdminContainer = () => {
  return (
    <div className="adminContainer">
        <AdminSideBar/>
        <AdminSiteInfo/>
        <Outlet />
    </div>
  );
};

export default AdminContainer;
