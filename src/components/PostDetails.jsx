import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PostDetails(props) {

    const { id } = useParams()
    const [details, setDetails] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const detailsApi = async () => {
            try{
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/blogs/${id}`
                )
                setDetails(response.data.result)
            }catch(err){
                console.warn(err)
            }
        }
        detailsApi()
    }, [])

    const handleDeletePost = async (id) => {
        try{
          axios.delete(`${process.env.REACT_APP_SERVER_URL}/blogs/${id}`)
          navigate('/')
        }catch(err){
          console.warn(err)
        }
      }

    console.log(details)
    


    return(
        <div>
      <h1>Post Details</h1>
      {details ? (
        <>
          <h2>Author: {details.name}</h2>
          <h2>Content: </h2>
          <p>{details.content}</p>
          <div>
            <button onClick={() => handleDeletePost(id)}>Delete</button>
            <Link to={`/posts/${id}/edit`} >Edit</Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )
}