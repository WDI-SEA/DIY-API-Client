import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NewBlogForm from "../partials/NewBlogForm";

export default function BlogDetails(props) {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/blogs/${id}`
        console.log(url)
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setBlog(response.data.result)
            })
            .catch(console.warn)
    }, [])


    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log("form updated");
        console.log("form: ", form)
        try {
            const putResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`, form);
            console.log('updated blog response: ', putResponse.data)
            setBlog(putResponse.data.result)
            props.setShowForm(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const initialState = {
        title: blog.title,
        author: blog.author,
        content: blog.content
    }

    const form = (
        <>
            <h2>Edit Blog: {blog.title}</h2>
            <NewBlogForm
                initialState={initialState}
                handleSubmit={handleSubmit}
                setShowForm={props.setShowForm}
            />
        </>
    )
    
    return (
        <div>
            {!props.showForm ?
                <div>
                    <h1>{blog.title}</h1>
                    <h2>Author: {blog.author}</h2>
                    <p>{blog.content}</p>
                    <button onClick={() => {
                        props.setShowForm(!props.showForm)
                    }
                    
                }>Edit blog</button>
                <button onClick={handleDeleteClick}>Delete</button>
                </div> :
                <div>
                    {form}
                </div>
            }
        </div>
    )
}