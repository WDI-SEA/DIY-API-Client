import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <h1>Not Found</h1>
        </div>
    )
}