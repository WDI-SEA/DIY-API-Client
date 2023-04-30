import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import PostForm from "../partials/PostForm"

export default function Home() {
    // state to hold the data payload from our backend
    const [posts, setPosts] = useState([])
    

    return (
        <h1>Chronicles of the Bard</h1>
    )
}