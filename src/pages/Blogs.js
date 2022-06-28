import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <h1>Blogs Page</h1>
      <Outlet />
    </div>
  );
}
