import {useState, useEffect} from 'react'
import axios from "axios"
import {useNavigate, useParams, Link} from 'react-router-dom'



export default function Home() {

    const [loadOuts, setLoadOuts] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        const url = `${process.env.REACT_APP_SERVER_URL}/loadouts`
        axios.get(url)
        .then(response => {
            setLoadOuts(response.data.results)
        })
        .catch(console.warn)
    }, [])

    const handleDelete = async (e) => {
        try{
            console.log("clicked")
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/loadouts/${e}`)
         
            const url = `${process.env.REACT_APP_SERVER_URL}/loadouts`
            axios.get(url)
            .then(response => {
                setLoadOuts(response.data.results)
            })
            .catch(console.warn)
            
        }catch(err){
            console.log(err)
        }
    }

    const loadOutMap = loadOuts.map((loadout, i)=> {
        return(
            <div
            key={"loadout" + i}
            _id={loadout._id}
            className='card'
            >
            
            <div className='loadOutCard'>
            <div className="hederCard">  
            <h3>{loadout.name}</h3>
            </div>
            <div className="bodyCard">
            <div className="weaponCard">  
            <h4>Primary: {loadout.primaryWeapon}</h4>
            <h5>Class: {loadout.primaryWeaponClass}</h5>
            <p>Attachments:</p>
            <ul>  
            <li>{loadout.primaryAttachments[0]}</li>
            <li>{loadout.primaryAttachments[1]}</li>
            <li>{loadout.primaryAttachments[2]}</li>
            <li>{loadout.primaryAttachments[3]}</li>
            <li>{loadout.primaryAttachments[4]}</li>
            </ul>
            <ul>
            <p>Perks:</p>    
            <li>{loadout.perk1}</li>
            <li>{loadout.perk2}</li>
            <li>{loadout.perk3}</li>
            <li>{loadout.perk4}</li>
            </ul>
            </div>    
            <div className="weaponCard"> 
            <h4>Secondary: {loadout.secondaryWeapon}</h4>
            <h5>Class: {loadout.secondaryWeaponClass}</h5>
            <p>Attachments:</p>  
            <ul>
            <li>{loadout.secondaryAttachments[0]}</li>
            <li>{loadout.secondaryAttachments[1]}</li>
            <li>{loadout.secondaryAttachments[2]}</li>
            <li>{loadout.secondaryAttachments[3]}</li>
            <li>{loadout.secondaryAttachments[4]}</li>
            </ul> 
            <ul>
            <p>Equipment:</p>
            <li>{loadout.tacticalEquip}</li>
            <li>{loadout.lethalEquip}</li>
            </ul>
            </div>
            </div> 
            <div>
            <button className="cardButton"><Link to={`/loadout/${loadout._id}`}>Edit Loadout</Link></button>
            <button className="cardButton" onClick={() => handleDelete(loadout._id)}>Delete Loadout</button>
            </div>
            </div>
            </div>
        )
    })







    return (
        <>
        <h1>WZ loadouts</h1>
        <Link className='addLink' to='/loadout/create'><button className="add">Add Loadout</button></Link>
        <div className="container">
        
        {loadOutMap}
        </div>

        </>
    )
}