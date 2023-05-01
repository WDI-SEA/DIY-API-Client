import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();

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
    </>
  )

  return (
    <>
    {post.title ? postDisplay : loading}
    </>
  );
}
