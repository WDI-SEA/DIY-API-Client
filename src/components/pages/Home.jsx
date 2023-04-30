import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import PostForm from "../partials/PostForm"

export default function Home() {
    // state to hold the data payload from our backend
    const [posts, setPosts] = useState([])
    // show/hide post creation form
    const [showForm, setShowForm] = useState(false)
    // useEffect to get the data payload from our backend
    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/posts`
        axios.get(url)
            .then(response => {
                console.log("useEffect log response data: ", response.data)
                setPosts(response.data)

            })
            .catch(console.warn)
    }, [])
    // console.log(process.env.REACT_APP_SERVER_URL)

    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log("form has been submitted")
        console.log(form)
        // POST a new blog post
        try {
            // post the new blog post to the backend
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, form)
            const allPosts = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`)
            setPosts(allPosts.data) // update the state
            setShowForm(false) // close the form
        } catch (err) {
            console.warn(err)
        }
    }

    const handleCancelClick = () => setShowForm(false)

    const initialState = {
        name: "",
        title: "",
        content: ""
    }

    const postListItems = posts.map(post => {
        return (
            <div key={`post-li-${post._id}`}>
                <Link to={`/posts/${post._id}`}>
                    {post.title} <small> by {post.name}</small>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Chronicles of the Bard</h1>
            <p>{posts.length === 0 && "loading posts..."}</p>

            {!showForm && <button
                onClick={() => setShowForm(true)}
            >
                New Post?
            </button>}

            {!showForm ?
                <div>
                    {postListItems}
                </div> :
                <PostForm
                    initialState={initialState}
                    handleCancelClick={handleCancelClick}
                    handleSubmit={handleSubmit}
                />
            }
        </div>
    )
}