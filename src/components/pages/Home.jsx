import { useState, useEffect } from "react"
import { Link, json } from "react-router-dom"

export default function Home () {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `${[process.env.REACT_APP_SERVER_URL]}/blog`
            const response = await fetch(url)
            const jsonResponse = await response.json()
            console.log(jsonResponse)
            setPosts(jsonResponse.result)
        }
        fetchPosts()
    }, [])

    const postListItems = posts.map((post) => {
        const truncDate = post.createdAt.slice(0, -14)
        return (
            <li key={`post-li ${post._id}`} style={{
                listStyleType: "none"
            }}>
                {truncDate}: <Link to={`/blog/${post._id}`}>
                    {post.title}
                </Link>
            </li>
        )
    })

    const loading = (
        <>
        <h1>loading...</h1>
        </>
      )
    
      const postList = (
        <>
        <ul>{postListItems}</ul>
        </>
      )
    
    return (
        <>
        {posts[0] ? postList : loading}
        </>
    )
}