import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideBarLink({ name, path, icon }) {
  return (
    <div className="p-3 d-flex align-items-center gap-3 fs-5 link-hover rounded">
      {console.log("SideBarLink")}

      {icon}
      <Link to={path} className="text-decoration-none text-dark">
        {name}
      </Link>
    </div>
  );
}
