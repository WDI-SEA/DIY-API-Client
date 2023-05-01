import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function Details() {
    const [review, setReview] = useState({})
    const [editMode, setEditMode] = useState(false)
    const [form, setForm] = useState({ location: "", rating: "", title: "", content: "" })
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews/${id}`)
            .then(response => {
                setReview(response.data.result)
            })
            .catch(console.warn)
    }, [])


    const handleEditClick = () => {
        setEditMode(!editMode)
        setForm({
            location: review.location,
            rating: review.rating,
            title: review.title,
            content: review.content,
        })
    }

    const handleSubmit = async (e, form) => {
        e.preventDefault()
        try {
            const putResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/reviews/${id}`, form)
            setEditMode(false)
            setReview(putResponse.data.result)
        } catch (error) {
            console.warn(error)
        }
    }

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/reviews/${id}`)
            navigate("/")
        } catch (error) {
            console.warn(error)
        }
    }


    const details = (
        <div>
            <h1>{review.location}</h1>
            <h2>{review.title}</h2>
            <h3>{review.rating}/10</h3>
            <p>{review.content}</p>
            <button onClick={handleEditClick}>Edit</button>
        </div>
    )

    const editForm = (
        <>
            <form onSubmit={e => handleSubmit(e, form)}>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
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
                        value={form.title}
                        onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="content">Body:</label>
                    <input
                        type="text"
                        id="content"
                        value={form.content}
                        onChange={e => setForm({ ...form, content: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="tags">Body:</label>
                    <input
                        type="text"
                        id="content"
                        value={form.content}
                        onChange={e => setForm({ ...form, content: e.target.value })}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleEditClick}>Cancel</button>
            <button onClick={handleDeleteClick}>Delete Review</button>
        </>

    )

    return (
        <div>
            <div><Link to="/">Home</Link></div>
            {!editMode ? details : editForm}
        </div>
    )
}