import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/blogs">Blogs</Link>
    </nav>
  );
}
