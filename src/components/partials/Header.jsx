import { useNavigate } from "react-router-dom"


export default function Header(props) {
    const navigate = useNavigate()
    return (
        <div>
            <nav>
                <ul>
                    <li style={{ listStyle: "none" }} onClick={() => navigate("/")}>Home</li>
                    {!props.showForm ?
                        <li style={{ listStyle: "none" }} onClick={props.handleFormClick}>Create New Blog</li> :
                        <li style={{ listStyle: "none" }} onClick={props.handleFormClick}>All blogs</li>}
                </ul>
            </nav>
        </div>
    )
}