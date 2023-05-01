import { Link } from "react-router-dom"

export default function Header () {
    return (
        <nav>
            <ul>
                <li style={({
                    listStyleType: "none"
                })}>
                    <Link to="/">Home</Link>
                </li>
                <li style={({
                    listStyleType: "none"
                })}>
                    <Link to="/blog/new">New post</Link>
                </li>
            </ul>
        </nav>
    )
}