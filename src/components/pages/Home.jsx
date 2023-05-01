import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Home() {
    const [reviews, setReviews] = useState([])



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews`)
            .then(response => {
                setReviews(response.data.results)
            })
    }, [])

    const reviewMapArray = reviews.map(review => {
        return (
            <li key={review._id}>
                <Link to={`/reviews/${review._id}`}>
                    <div className="resultDisplayDiv">
                        <h2>{review.location}</h2>
                        <h3>{review.rating}/10</h3>
                        <h4>{review.title}</h4>
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <div>
            <h1>Home</h1>
            {reviewMapArray}
        </div>
    )
}