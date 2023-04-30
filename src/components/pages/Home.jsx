import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogForm from "../partials/BlogForm";
import axios from "axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/blog`;
    axios
      .get(url)
      .then((response) => {
        setBlogs(response.data.results);
      })
      .catch(console.warn);
  }, []);

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    console.log("form has submitted");
    console.log(form);
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, form);
      const allBlogs = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`);
      setBlogs(allBlogs.data.results);
      setShowForm(false);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleCancelClick = () => setShowForm(false);

  const initialState = {
    name: "",
    title: "",
    content: "",
  };

  const blogListItems = blogs.map((blog) => {
    return (
      <li key={`blog-li ${blog._id}`}>
        <Link to={`/blogs/${blog._id}`}>
          <div>
          Name: {blog.name} Title: {blog.title} Content: {blog.content}
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Blog App</h1>
      <p>{blogs.length === 0 && "loading blogs ...."}</p>

      {!showForm && (
        <button onClick={() => setShowForm(true)}>
          Show Blog Creation Form
        </button>
      )}

      {showForm ? (
        <BlogForm
          initialState={initialState}
          handleCancelClick={handleCancelClick}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ul>{blogListItems}</ul>
      )}
      
    </div>
  );
}
