import React from "react";
import Logo from "../../../assets/images/logo.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import SideBarLink from "./components/SideBarLink";

export default function Sidebar() {
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <MdDashboard />,
    },
  ];

  return (
    <aside className="ps-4 pt-4">
      {console.log("Sidebar")}

      <div className="d-flex align-items-center gap-3">
        <Image src={Logo} />
        <p className="fw-semibold m-0">Admin Panel</p>
      </div>

      <div className="mt-4">
        {sidebarLinks.map((link, i) => (
          <SideBarLink key={i} {...link} />
        ))}
      </div>
    </aside>
  );
}
