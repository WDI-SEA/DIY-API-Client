import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    try {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(form),
        })
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <p>Add a new post here</p>
      <form onSubmit={(e) => handleSubmit(e, form)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="post title"
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="body">Post</label>
          <textarea
            type="text"
            placeholder="Write your post here"
            id="body"
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            placeholder="post author"
            id="author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </>
  );
}
