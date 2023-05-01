import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogForm from "../partials/BlogForm"
import axios from "axios"

export default function Home() {
  // state to hold the data payLoad form our backend
  const [blogs, setBlog] = useState([])
  // show/hide blog creation form
  const [showForm, setShowForm] = useState(false)
  // useEffact to get data payload from our backend
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/blogs`
    axios.get(url)

      .then(response => {
        setBlog(response.data.result)
        // console.log(response.data)
      })
      .catch(console.warn)
  }, [])
  // console.log(process.env.REACT_APP_SERVER_URL)

  const handleSubmit = async (e, form) => {
    e.preventDefault()
    console.log("form has submitted!")
    console.log(form)
    // POST a blog
    try {
      // axios.post(url, request body, {options})
      // post the new blog to the back end
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`, form)// ignoring return value of the server response
      // if the back end response woith success, we want to get request to see all
      const allBlogs = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs`)
      setBlog(allBlogs.data.result)
      setShowForm(false) // close the form

    } catch (err) {
      // mongoose erros would wind up here
      // display relavent errors to user if needed
      // set error message state to display to the user
      console.warn(err)
    }

  }

  // name: "",
  //   title: "",
  //   updoots: 1,
  //   content: ""

  const handleCancelClick = () => setShowForm(false)

  const initialState = {

    name: "",
   title: "",
    updoots: 0,
    content: ""

  }

  const blogListItems = blogs.map(blog => {
    return (
      <li key={`blog-li ${blog._id}`}>
        <Link to={`/blogs/${blog._id}`}>
          {blog.name} : ${blog.reward}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <h1> Blog App </h1>

      <p>{blogs.length === 0 && "loading blogs..."}</p>

      {!showForm && <button
        onClick={() => setShowForm(true)}
      >
        Show Blog Creation Form
      </button>}

      {!showForm ?
        <ul>
          {blogListItems}
        </ul> :
        <BlogForm
          initialState={initialState}
          handleCancelClick={handleCancelClick}
          handleSubmit={handleSubmit}
        />

      }
    </div>
  )

}
