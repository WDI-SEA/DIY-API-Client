import { useState } from "react"

export default function PostForm(props) {
    /*
    props for initial state:
    {
        name: "",
        title: "",
        content: ""
    }
    */
    const [form, setForm] = useState(props.initialState)

    return (
        <div>
            <h2>New Post!</h2>
            {/* <small>huzzah, more content!</small> */}
            <form
                className="form-card"
                onSubmit={(e) => props.handleSubmit(e, form)}
            >
                <div className="form-item">
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="what's your name?"
                        id="name"
                        value={form.name}
                        onChange={(e => setForm({ ...form, name: e.target.value }))}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="title">Title:</label>
                    <input type="text" placeholder="title your post..."
                        id="title"
                        value={form.title}
                        onChange={(e => setForm({ ...form, title: e.target.value }))}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" rows="4" cols="50"
                        placeholder="what are your thoughts?"
                        value={form.content}
                        onChange={(e => setForm({ ...form, content: e.target.value }))}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            <button onClick={props.handleCancelClick}>Cancel</button>
        </div>
    )
}