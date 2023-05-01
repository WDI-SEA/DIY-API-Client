import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../partials/PostForm";

export default function Post() {
  const [post, setPost] = useState({});
  const [edit, setEdit] = useState(false)
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

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    try {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(form),
        })
        /* tried navigating to `/blog/${id}` and that didn't work -- guessing react router dom
        checks and sees that I'm asking to navigate to same page and so ignores the request?
        idk but I googled and found this navigate(0) solution and that works */
        navigate(0)
    } catch (error) {
        console.log(error)
    }
  };

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
    <button onClick={() => {setEdit(true)}}>Edit post</button>
    <button onClick={handleDelete}>Delete post</button>
    </>
  )

  const editPost = (
    <>
    <p>i am an edit post</p>
    <PostForm form={post} handleSubmit={handleSubmit} postVerb={"Update"}/>
    </>
  )

  return (
    <>
    {post.title ? (edit ? editPost : postDisplay) : loading}
    </>
  );
}
