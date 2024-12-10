import React from "react";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import MainNavbar from "../../components/admin/MainNavbar";
import MainFooter from "../../components/admin/MainFooter";

export default function AdminLayout({ children }) {
  return (
    <div className="d-flex min-vh-100">
      <div className="col-3 bg-body-tertiary">
        <Sidebar />
      </div>

      <div className="col">
        <MainNavbar />
        {children}
        <MainFooter />
      </div>
    </div>
  );
}
