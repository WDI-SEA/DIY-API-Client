import { useState} from "react"

export default function NewBlogForm(props) {
    const [form, setForm] = useState(props.initialState)

    
    return (
        <div>  
            <form onSubmit={e => props.handleSubmit(e, form)}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" value={form.title} onChange={e => 
                    setForm({...form, title: e.target.value})
            }
                />
                <label htmlFor="author">Author: </label>
                <input type="text" id="author" value={form.author} onChange={e => 
                    setForm({...form, author: e.target.value})
            }
                />
                <label htmlFor="content">Blog: </label>
                <input type="text" id="content" value={form.content} onChange={e => 
                    setForm({...form, content: e.target.value})
            }
                />
                <button type="submit">Publish</button>
            </form>
            <button onClick={() => props.setShowForm(false)}>Cancel</button>

        </div>
    )
}