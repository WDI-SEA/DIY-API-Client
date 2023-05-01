import axios from "axios"   
import {useState, useEffect} from 'react'
import { useParams } from "react-router"

//Goal: to display the specific blog contents for the user to read.
//we also need and edit button and a delete button 

//to get there we need to:
    //ping the api and set state. we could hoist up then pass as props but we are taking a different approch with just pinging the backend instead of hoisting. 
    //get buttons working
        //create a handleDelete function and handleEdit( will take us to the form page. need logic that will pre populate the fields to make an easy edit. ) function to pass with the button. 


export default function Blog() {
    const [content, setContent] = useState([])
    const {id} = useParams()


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
        .then(response => {
            const blog= response.data.result
            
            setContent(blog)
        })
        .catch(console.warn)
    }, [])

    const showBlog = () => {
       return (
        <div>
            <h1>{content.title}</h1>
            <h4>{content.author}</h4>
            <p>{content.content}</p>
        </div>
       )
    }

    // const showBlog = content.map(blog => {
    //     const {id}= req.params
    //     const theBlog= id 
    //     return <h1>{blog.title}</h1>
            
            //<h4>{blog.author}</h4>
            //<p>{blog.content}</p>
        
    //})

    return(
        <div>
       {showBlog()}
        </div>
    )
}