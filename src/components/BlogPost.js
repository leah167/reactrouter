import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = ({ allBlogs }) => {
  let params = useParams();
  let blog = allBlogs.find((blog) => blog.id === Number(params.blogId));
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
