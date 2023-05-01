//We want to map through the array of blog tiles and display on the page. 
    //ping the API - axios- to grab the content and set state to be contents

//We also want to create a button that will direct us to the blog form so user can create new blog 
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogForm from "../partials/BlogForm"


export default function Home() {
    const [content, setContent] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
        .then(response=> {
            const data = response.data.results
            setContent(data)
        })
        .catch(console.warn)
    }, [])

   
    const allTitles = content.map(blog=> {
        return(
           
            <li style={{ listStyleType: "none" }} key={`blog title ${blog.title}`}>
                <Link to= {`/blog/${blog._id}`}>{blog.title}</Link>
            </li>
        )
    })

    return (
        <div>
        <h1>Recent Blogs </h1>
        <p>{allTitles}</p>
        </div>
    )
}