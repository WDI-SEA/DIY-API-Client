import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/blogs`
        axios.get(url)
            .then(response => {
                setBlogs(response.data.results) 
            })
            .catch(console.warn)
    }, [])
    console.log('these are in the blog state',blogs)

    const blogPosts = blogs.map(blog => {
        return(
            <div className='blog'>
                <h1>{blog.name}</h1>
                <p>{blog.content}</p>
                <p>{blog.title}</p>
                <Link to={`post/${blog._id}`} >Details</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Home Page</h1>
            {blogs ? (

                <div className='blog-container'>
                {blogPosts}
            </div>
                ) : (
                    <p>loading...</p>
                ) }
        </div>
    )
}