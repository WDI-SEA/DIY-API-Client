// create a form for the user
    // Title - Name - Content(nice sized box so writer can view)
    //hold/setState (pass props from home- which is the parent component- but only when user wants to update/edit)
// add a submit button and cancel button 
    //I want to use the submit button to create a  new blog post and have it stores in the DB and displayed on the page 

//TO GET THERE
    //pass form the props by importing pages
    //set the state that you need
    //build out handle functions
    //buuild out on submit functions 
import { useState} from "react"
import axios from "axios"


export default function BlogForm() {
    const initialState = {
        title: '',
        author: '',
        content:''
    }
    const [form, setForm] = useState(initialState)

   const handleSubmit = async (e, form) => {
    e.preventDefault()
    console.log('submitted')
        try {
           await  axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`, form)

           //const allBlogs = await axios.get('http://localhost:8000/blogs')
           //setContent(allBlogs.data.results)

        }catch(err){
            console.log(err)
        }
   }



   

    return (
        <div>
        <form onSubmit={e => handleSubmit(e, form)}>
            <div>
            <label htmlFor="title">Title</label>
                <input 
                    type="text"
                    id='title'
                    //value={form.title}
                    onChange={e=> setForm({...form, title: e.target.value})}
                    placeholder="Title..."
                    />
            </div>
            <div>
            <label htmlFor="author">Name</label>
                <input 
                    type="text"
                    id='author'
                    //value={form.author}
                    onChange={e=> setForm({...form, author: e.target.value})}
                    placeholder="Name"
                    />
            </div>
            <div>
            <label htmlFor="content">Content</label>
                <input 
                    type="text"
                    id='content'
                    //value={form.content}
                    onChange={e=> setForm({...form, content: e.target.value})}
                    placeholder="Content"
                    />
            </div>
            <button type= 'submit' onClick={e=> {return '../pages/home'}}>Submit</button>
            <button>Cancel</button>
        
        </form>
        </div>
    )
}