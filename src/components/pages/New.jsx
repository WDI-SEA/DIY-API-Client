import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"


export default function New(props) {
    const initialState = {
        location: '',
        rating: 0,
        title: '',
        content: '',
    }

    const [form, setForm] = useState({ initialState })
    const navigate = useNavigate()

    const handleSubmit = async (e, form) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/reviews`, form)
            navigate("/")
        } catch (error) {
            console.warn(error)
        }
    }


    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h1>New</h1>
            <form onSubmit={e => handleSubmit(e, form)}>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        placeholder="Where did you go?"
                        id="location"
                        value={form.location}
                        onChange={e => setForm({ ...form, location: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        value={form.rating}
                        onChange={e => setForm({ ...form, rating: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="enter a title for your post..."
                        value={form.name}
                        onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="content">Body:</label>
                    <input
                        type="text"
                        id="content"
                        placeholder="enter the body of your post..."
                        value={form.name}
                        onChange={e => setForm({ ...form, content: e.target.value })}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}