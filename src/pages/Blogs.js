import Navbar from "../components/Navbar";
import { Outlet, useSearchParams } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Blogs;
