import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const url = `${process.env.REACT_APP_SERVER_URL}/blog/${id}`;
      const response = await fetch(url);
      const jsonResponse = await response.json()
      const truncDate = jsonResponse.result.createdAt.slice(0, -14)
      setPost({...jsonResponse.result, createdAt: truncDate})
    };
    fetchPost()
  }, []);

  const handleDelete = async () => {
    try {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`, {
        method: "DELETE",
    })
    navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const loading = (
    <>
    <h1>loading...</h1>
    </>
  )

  const postDisplay = (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <p>author: {post.author}</p>
    <p>{post.createdAt}</p>
    <button onClick={handleDelete}>Delete post</button>
    </>
  )

  return (
    <>
    {post.title ? postDisplay : loading}
    </>
  );
}
