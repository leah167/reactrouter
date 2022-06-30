import logo from "./logo.svg";
import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./components/BlogPost";
import AllBlogs from "./components/AllBlogs";
import { blogPosts } from "./utils/SampleBlogs";
import SubmitBlog from "./pages/SubmitBlog";

const App = () => {
  const [allBlogs, setAllBlogs] = useState(blogPosts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Blogs!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route index element={<AllBlogs allBlogs={allBlogs} />} />
            <Route path=":blogId" element={<BlogPost allBlogs={allBlogs} />} />
          </Route>
          <Route
            path="/submit-blog"
            element={
              <SubmitBlog allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
            }
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;
