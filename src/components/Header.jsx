import { Link } from 'react-router-dom'
import '../components/style.css'

export default function Header() {
    return (
        <div className='header'>
                <Link className='link' to='/' >Home</Link>
                <h1>My Bloggy Blog</h1>
                <Link className='link' to='/post'>Post</Link>
        </div>
    )
}