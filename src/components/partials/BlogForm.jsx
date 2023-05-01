// create a form for the user
    // Title - Name - Content(nice sized box so writer can view)
    //hold/setState (pass props from home- which is the parent component- but only when user wants to update/edit)
// add a submit button and cancel button 


//I want to use the submit button to create a  new blog post and have it stores in the DB and displayed on the page 

export default function BlogForm(props) {
    //const [form, setForm] = useState({})
   

    return (
        <div>
        <form >
            <div>
            <label htmlFor="title">Title</label>
                <input 
                    type="text"
                   // onChange={e=> setForm({title: e.target.value})}
                    placeholder="Title..."
                    />
            </div>
            <div>
            <label htmlFor="Autor">Name</label>
                <input 
                    type="text"
                   // onChange={e=> setForm({title: e.target.value})}
                    placeholder="Name"
                    />
            </div>
            <div>
            <label htmlFor="title">Content</label>
                <input 
                    type="text"
                   // onChange={e=> setForm({title: e.target.value})}
                    placeholder="Content"
                    />
            </div>
        
        </form>
        </div>
    )
}