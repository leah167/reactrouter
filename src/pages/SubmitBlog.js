import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitBlog = ({ allBlogs, setAllBlogs }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontFamily: "fantasy",
        }}
      >
        Add Blog
      </h1>
      <input
        placeholder="Title"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <input
        placeholder="Text"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        type="text"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      ></input>
      <input
        placeholder="Author"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        type="text"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      ></input>
      <button
        id="submit"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        onClick={
          ("click",
          () => {
            const allBlogsCopy = [...allBlogs];
            allBlogsCopy.push({
              title: title,
              text: text,
              author: author,
              createdAt: new Date().toISOString(),
              id: allBlogs.length + 1,
            });
            console.log("post ", allBlogsCopy);
            setAllBlogs(allBlogsCopy);
            setTitle("");
            setText("");
            setAuthor("");
            navigate("/blogs");
          })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBlog;
