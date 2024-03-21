import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../topbar/Topbar";

export default function Layout() {
  return (
    <div>
      <Topbar />
      <div style={{ paddingTop: "9vh" }}>
        <Outlet />
      </div>
    </div>
  );
}
