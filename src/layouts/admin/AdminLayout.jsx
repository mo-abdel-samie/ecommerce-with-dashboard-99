import React, { memo, useState } from "react";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import MainNavbar from "../../components/admin/MainNavbar";
import MainFooter from "../../components/admin/MainFooter";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className="d-flex min-vh-100">
      {console.log("AdminLayout")}
      <div
        className="col-3 bg-body-tertiary"
        style={{
          width: isOpened ? "" : 0,
          overflow: "hidden",
          transition: "all 0.6s",
        }}
      >
        <Sidebar />
      </div>

      <div className="col overflow-auto">
        <MainNavbar setIsOpened={setIsOpened} />
        <main className="min-vh-100 px-4 py-3 ">
          <Outlet />
          {/* {children} */}
        </main>
        <MainFooter />
      </div>
    </div>
  );
}

export default memo(AdminLayout);
