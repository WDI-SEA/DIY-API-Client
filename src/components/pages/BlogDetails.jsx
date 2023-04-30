import {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

export default function BlogDetails(){
    const [blogs, setBlogs] = useState({});
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
        .then(response => {
            setBlogs(response.data)
        })
        .catch(console.warn)
    },[])


    const initialState = {
        name:blogs.name,
        title: blogs.title,
        content: blogs.content    
    }

    
    const details = (
        <>
            <h1>Name: {blogs.name}</h1>
            <h1>Title: {blogs.title}</h1>
            <p>Content: {blogs.content}</p>
            

        </>
    )

    return(
        <div>
            {details}
        </div>
    )
}