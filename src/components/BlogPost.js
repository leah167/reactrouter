import React from "react";
import { blogPosts } from "../utils/SampleBlogs";
import { Outlet, useParams } from "react-router-dom";

const BlogPost = () => {
  let params = useParams();
  let blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
  return (
    <div>
      <h1>Blogs:</h1>
      <p>Title: {blog.title}</p>
      <p>Id: {blog.id}</p>
      <p>Text: {blog.text}</p>
      <p>Author: {blog.author}</p>
      <p>Created At: {blog.createdAt}</p>
    </div>
  );
};

export default BlogPost;
