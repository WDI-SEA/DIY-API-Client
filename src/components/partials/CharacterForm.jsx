import { useState } from "react"
export default function CharacterForm(props) {
    const [form, setForm] = useState(props.initialState)
    // props for intial state
        // name:'',
        // bio: '',
        // age: 0,
        // isAlive: false
    return (
        <div>
            <form onSubmit={e => 
                props.handleSubmit(e, form)}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            type='text'
                            placeholder='enter name'
                            id='name'
                            value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='bio'>Bio:</label>
                        <input 
                            type='text'
                            placeholder='enter a bio'
                            id='bio'
                            value={form.bio}
                            onChange={e => setForm({...form, bio: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='age'>Age:</label>
                        <input 
                            type='number'
                            placeholder='enter age of character'
                            id='age'
                            value={form.age}
                            onChange={e => setForm({...form, age: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor='isAlive'>is alive:</label>
                        <input 
                            type='checkbox'
                            id='captured'
                            value={form.isAlive}
                            onChange={e => setForm({...form, isAlive: !form.isAlive})}
                        />
                    </div>
                    <button type='submit'>Submit</button>
            </form>

            <button onClick={props.handleCancelClick}> Cancel</button>
        </div>
    )
}