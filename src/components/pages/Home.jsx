import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const url = `${process.env.REACT_APP_SERVER_URL}/blog`;
      axios.get(url)
    .then(response => {
        console.log(response.data); // check that data is returned as expected
        setBlogs(response.data); // set the blogs state with the data array
    })
    .catch(console.warn);

    }, []);
  
    const blogListItems =
      blogs.map(blog => {
        return (
          <li key={`blog-li ${blog._id}`}>
            <Link to={`/blogs/${blog._id}`}>{blog.name}</Link>
          </li>
        );
      });
  
    return (
      <div>
        THIS IS THE HOME
        {blogListItems}
      </div>
    );
  }
  
