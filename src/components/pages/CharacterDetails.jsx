import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CharacterForm from "../partials/CharacterForm"
import axios from 'axios'

export default function CharacterDetails() {
    // hold the current character
    const [character, setCharacter] = useState({})
    // is the edit form being shown or not?
    const [showForm, setShowForm] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/characters/${id}`)
            .then(response => {
                setCharacter(response.data.result)
            })
            .catch(console.warn)
    }, [])
    const handleSubmit = async (e, form) => {
        e.preventDefault()
        console.log(form)
        console.log('updated character!')
        try {
            const putResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/characters/${id}`, form)
            console.log('updated character response:', putResponse.data)
            setCharacter(putResponse.data.result)
            setShowForm(false)
        } catch(err) {{
            console.log(err)
        }}
    }
    const handleDeleteClick = async () => {
        try{
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/characters/${id}`)
            // navigate to the home page
            navigate('/') // any react router dom route
        } catch(err){
            console.log(err)
        }
    }
    const initialState = {
        name: character.name,
        bio: character.bio,
        age: character.age,
        isAlive: character.isAlive
    }
    const details = (
        <>
            <h1>Details for {character.name}</h1>

            <h2>{character.age}</h2>

            <p>{character.bio}</p>

            <p>{character.isAlive ? 'no longer with us 🌅' : 'alive and well 👍'}</p>

            <button onClick={handleDeleteClick}>Delete Character</button>
        </>
    )
    const form = (
        <>
            <h1>Edit Form for {character.name}</h1>

            <CharacterForm 
                initialState={initialState}
                handleSubmit={handleSubmit}
                handleCancelClick={() => setShowForm(false)}
            />
        </>
    )
    return (
        <div>
            {!showForm && <button onClick={() => setShowForm(true)}>Edit</button>}
            {showForm ? form : details}
            
        </div>
    )
}