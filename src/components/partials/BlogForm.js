import { useState } from "react";

export default function BlogForm(props) {
  const [form, setForm] = useState(props.initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, form)}>
        <div>
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="title">Title:</label>

          <input
            type="text"
            placeholder="Enter title"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="content">Content:</label>

          <input
            type="text"
            placeholder="Enter content"
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={props.handleCancelClick}>Cancel</button>
    </div>
  );
}
