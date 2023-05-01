import { useState } from 'react'

export default function Post(props) {

    const [form, setForm] = useState(props.initialState)

    return (
        <div>
            <h1>Post</h1>

            <form onSubmit={e => props.handleNewPost(e, form)} >
                <div className="container">
                    <input type="text" name="name" id="name" placeholder="your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>

                    <input type="text" name="content" id="content" placeholder="your post here" value={form.content} onChange={e => setForm({...form, content: e.target.value})}/>

                    <input type="number" name="title" id="title" placeholder="your title" value={form.title} onChange={e => setForm({...form, title: e.target.value})}/>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}