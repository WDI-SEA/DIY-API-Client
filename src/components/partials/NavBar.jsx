//import Link from react so that we can use to move internally
import { Link } from "react-router-dom"

//class function for navigation
export default function NavBar() {
    return(
        <nav>
            <Link to='/'>Home | </Link>
            <Link to='/blog'>Blog | </Link>
            <Link to='/create'>Post </Link>
        </nav>
    )
}