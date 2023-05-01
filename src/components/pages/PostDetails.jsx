import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import PostForm from "../partials/PostForm"
import axios from "axios"

export default function PostDetails() {
    // hold our current post details
    const [post, setPost] = useState({})
    // is the edit form being shown or not?
    const [showForm, setShowForm] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
            .then(response => {
                console.log(response.data)
                setPost(response.data.result)
            })
            .catch(console.warn)
    }, [])

    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log(form)
        console.log('updated post!!')
        try {
            const putResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, form)
            console.log('updated post response: ', putResponse.data)
            setPost(putResponse.data.result)
            setShowForm(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    const initialState = {
        name: post.name,
        title: post.title,
        content: post.content
    }

    const details = (
        <>
            <h2>{post.title}</h2>

            <small>Authored by: {post.name}</small>

            <p>{post.content}</p>

            <button onClick={handleDeleteClick}>Delete Post</button>
        </>
    )

    const form = (
        <>
            <h1>Edit your Post:</h1>

            <PostForm 
                initialState={initialState}
                handleSubmit={handleSubmit}
                handleCancelClick={() => setShowForm(false)}
            />
        </>
    )

    return (
        <div>
            {!showForm && <button onClick={() => setShowForm(true)}>Edit</button>}
            {showForm ? form : details}
        </div>
    )
}