import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import NewBlogForm from "../partials/NewBlogForm"


export default function Home(props) {
    console.log("props: ", props)

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/blogs`
        axios.get(url)
            .then(response => {
                console.log(response.data.results)
                props.setBlogs(response.data.results)
            })
            .catch(console.warn)
    }, [])

    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log("form submitted")
        console.log("form: ", form)
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`, form)
            const allBlogs = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
            props.setBlogs(allBlogs.data.results)
            props.setShowForm(false)
        } catch (error) {
            console.log(error)
        }
    }

    const initialState = {
        title: "",
        author: "",
        content: ""
    }


    const blogList = props.blogs.map((blog, i) => {
        return (
            <Link to={`/blogs/${blog._id}`}>
                <li style={{ listStyle: "none" }} key={`blog-${blog._id}`}>
                    <h3>{blog.title}</h3>
                    <h4>Written by {blog.author}</h4>
                </li>
            </Link>
        )
    })

    return (
        <div>
            <h1>Dog Blogs</h1>

            {!props.showForm ?
                <div>
                    <p> {props.blogs.length === 0 && "loading blogs..."} </p>
                    <ul>
                        {blogList}
                    </ul>
                </div> :
                <NewBlogForm
                    handleSubmit={handleSubmit}
                    initialState={initialState}
                    setShowForm={props.setShowForm}
                />
            }
        </div>
    )
}