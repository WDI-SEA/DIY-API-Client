import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import BlogForm from "../partials/BlogForm";
import axios from "axios";

export default function BlogDetails() {
  const [blog, setBlog] = useState({});
  const [showForm, setForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
      .then((response) => {
        setBlog(response.data.result);
      })
      .catch(console.warn);
  }, [id]);

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    console.log(form);
    console.log("updated blog!");
    try {
      const putResponse = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/blog/${id}`,
        form
      );
      console.log("updated blog response:", putResponse.data);
      setBlog(putResponse.data.blog);
      setForm(false);
    } catch (err) {
      console.log(err);
    }
  };
  

  const initialState = {
    name: blog.name,
    title: blog.title,
    content: blog.content,
  };

  const handleDeleteClick = async () => {
    try {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
        // navigate to the home page
        navigate("/") // any react router dom route
    } catch (err) {
        console.log(err)
    }
}
  

const details = (

  <>
    <h1>Details for {blog.title}</h1>

    <p>By {blog.name}</p>

    <p>{blog.content}</p>
    <button onClick={handleDeleteClick}>Delete Bounty</button>
  </>
);

  const form = (
    <>
      <h1>Edit Form for {blog.title}</h1>

      <BlogForm
        initialState={initialState}
        handleSubmit={handleSubmit}
        handleCancelClick={() => setForm(false)}
      />
    </>
  );

  return (
    <div>
      {!showForm && <button onClick={() => setForm(true)}>Edit</button>}
      {showForm ? form : details}
    </div>
  );
}
