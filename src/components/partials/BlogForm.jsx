import { useState } from "react";

export default function BlogForm(props) {

  const [form, setForm] = useState(props.initialState)

  return (
    <div>
      <form
        onSubmit={e => { props.handleSubmit(e, form) }}
      >

        <div>
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            placeholder="Type your name here..."
            id="name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          >

          </input>
        </div>
        <div>
          <label htmlFor="title">Title:</label>

          <input
            type="text"
            placeholder="Title of your Blog..."
            id="title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          >

          </input>
        </div>
        <div>
          <label htmlFor="updoots">Updoots:</label>

          <input
            type="number"
            id="updoots"
            value={form.updoots}
            onChange={e => setForm({ ...form, updoots: e.target.value })}
          >

          </input>
        </div>
        <div>
          <label htmlFor="content">Content:</label>

          <input
            type="text"
            placeholder="Start writing your blog..."
            id="content"
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
          >

          </input>
        </div>

        <button type="submit">Submit</button>
      </form>
      <button onClick={props.handleCancelClick}>Cancel</button>
    </div>
  )

}