import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import BlogForm from "../partials/BlogForm"
import axios from "axios"

export default function BlogDetails() {
  // hold the blog we are currantly looking at
  const [blog, setBlog] = useState({})
  // is the edit form being showen or not
  const [showForm, setShowForm] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
      .then(response => {
        setBlog(response.data.result)
      })
      .catch(console.warn)
  }, [])

  const handleSubmit = async (e, form) => {
    e.preventDefault()
    console.log(form)
    console.log("update blog!")
    try {
      const putResaponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`, form)
      console.log('updated blog response:', putResaponse.data)
      setBlog(putResaponse.data.result)
      setShowForm(false)

    } catch (err) {
      console.log(err)
    }
  }

  // name: "",
  //   title: "",
  //   updoots: 1,
  //   content: ""

  const initialState = {
    name: blog.name,
    title: blog.title,
    updoots: blog.updoots,
    content: blog.content
  }

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
      // navigate to home page
      navigate('/') // any react route dom
    } catch (err) {
      console.log(err)
    }
  }

  const details = (
    <>
      <h1>{blog.name}</h1>

      <p>{blog.title}</p>

      <p>{blog.content}</p>

      <p>{blog.updoots}</p>


      <button onClick={handleDeleteClick}>Delete Blog</button>
    </>
  )

  const forms = (
    <>
      <h1>Edit Form For {blog.name}</h1>

      <BlogForm
        initialState={initialState}
        handleSubmit={handleSubmit}
        handleCancelClick={() => setShowForm(false)}

      />
    </>
  )
  return (
    <div>
      {!showForm && <button onClick={() => setShowForm(true)}>Edit</button>}
      {showForm ? forms : details}
    </div>
  )
}