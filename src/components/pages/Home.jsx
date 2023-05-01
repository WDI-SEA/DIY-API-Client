import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CharacterForm from '../partials/CharacterForm'

export default function Home() {
    // state to hold the data payload from our backend
    const [characters, setCharacters] = useState([])
    // show / hide form
    const [showForm, setShowForm] = useState(false)
    // useEffect to get the data payload from our backend
    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log('form has submitted!')
        console.log(form)
        // POST  a new character
        try {
            // axios.post(url, request body, { options })
            // post the new bounty to the backend
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/characters`, form) // ignoring return value of the server's response
            // if the backend responds with success, we want to get request to see all
            const allCharacters = await axios.get(`${process.env.REACT_APP_SERVER_URL}/characters`)
            setCharacters(allCharacters.data.results) // update state
            setShowForm(false) // clsoe the form 
        } catch(err) {
            // mongoose errors would wind up here
            // display relevant errors to user if needed
            // set error message state to display to the user
            console.warn(err)
        }
    }
    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/characters`
        axios.get(url)
         .then(response => {
             setCharacters(response.data.results)
         })
         .catch(console.warn)
     }, [])
     // console.log(process.env.REACT_APP_SERVER_URL)
    const handleCancelClick = () => setShowForm(false)
    const initialState = {
        name: "",
        bio: "",
        age: 0,
        isAlive: false
    }
    const characterListItems =  characters.map(character => {
        return (
            <li key={`character-li ${character._id}`}>
                <Link to={`/characters/${character._id}`}>
                    {character.name}
                </Link>
            </li>
        )
    })
    return (
        <div>
            <h1> Chowder Cast</h1>
            <p> { characters.length === 0 && 'loading character...'}</p>
            {/* short circuiting */}
            {!showForm && <button
            onClick={() => setShowForm(true)}>
                Show New Character Form
            </button>}
            {!showForm ? 
                <ul>
                {characterListItems}
                </ul> :
                    <CharacterForm 
                        initialState={initialState}
                        handleCancelClick={handleCancelClick}
                        handleSubmit={handleSubmit}
                    />
            }
        </div>
      
    )

}