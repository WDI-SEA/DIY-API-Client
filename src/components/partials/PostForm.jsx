import { useState } from "react"

export default function PostForm (props) {
    const [form, setForm] = useState(props.form)
    return(
        <form onSubmit={(e) => props.handleSubmit(e, form)}>
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
        <button type="submit">{props.postVerb} Post</button>
      </form>
    )
}