import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../partials/PostForm"

export default function NewPost() {
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async (e, form) => {
    e.preventDefault();
    try {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(form),
        })
        navigate("/")
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <p>Add a new post here</p>
      <PostForm form={form} handleSubmit={handleSubmit} postVerb={"Create"}/>
    </>
  );
}
