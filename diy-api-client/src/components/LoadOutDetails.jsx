import {useState, useEffect} from 'react'
import axios from "axios"
import {useParams, Link} from 'react-router-dom'



export default function LoadOutDetails() {

    const {id} = useParams()
    const [loadOuts, setLoadOuts] = useState([])

    useEffect(()=> {
        const url =`${process.env.REACT_APP_SERVER_URL}/loadouts/${id}`
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setLoadOuts(response.data.result)
        })
        .catch(console.warn)
    }, [])


    return (
        <>
        <h1>Edit Loadout</h1>
        <div className='container'>
        <form>  
        <div className='card'>
            
            <div className='loadOutCard'>
            <div className="hederCard">
            <label htmlFor='name'>Loadout Name:</label>      
            <input id='name' placeholder={`${loadOuts.name}`}></input>
            </div>
            <div className="bodyCard">
            <div className="weaponCard">
            <label htmlFor='primaryWeapon'>Primary Weapon:</label>   
            <input id="primaryWeapon" placeholder={`${loadOuts.primaryWeapon}`}></input>
            <label htmlFor='primaryWeaponClass'>Primary Weapon Class:</label>   
            <input id="primaryWeaponClass" placeholder={`${loadOuts.primaryWeaponClass}`}></input>
            <p>Attachments:</p>
            <label htmlFor='primaryAttachements'>Primary Attachments:</label>  
            <input id='primaryAttachements0' placeholder={`${loadOuts.primaryAttachments[0]}`}></input>
            <input id='primaryAttachements1' placeholder={`${loadOuts.primaryAttachments[1]}`}></input>
            <input id='primaryAttachements2' placeholder={`${loadOuts.primaryAttachments[2]}`}></input>
            <input id='primaryAttachements3' placeholder={`${loadOuts.primaryAttachments[3]}`}></input>
            <input id='primaryAttachements4' placeholder={`${loadOuts.primaryAttachments[4]}`}></input>
            <p>Perks:</p>
            <lable htmlFor="perk1">Perk 1: </lable>    
            <input id="perk1" placeholder={`${loadOuts.perk1}`}></input>
            <lable htmlFor="perk2">Perk 2: </lable>    
            <input id="perk2" placeholder={`${loadOuts.perk2}`}></input>
            <lable htmlFor="perk3">Perk 3: </lable>    
            <input id="perk3" placeholder={`${loadOuts.perk3}`}></input>
            <lable htmlFor="perk4">Perk 4: </lable>    
            <input id="perk4" placeholder={`${loadOuts.perk4}`}></input>
            </div>    
            <div className="weaponCard"> 
            <label htmlFor='secondaryWeapon'>Secondary Weapon:</label>   
            <input id="secondaryWeapon" placeholder={`${loadOuts.secondaryWeapon}`}></input>
            <label htmlFor='secondaryWeaponClass'>Secondary Weapon Class:</label>   
            <input id="secondaryWeaponClass" placeholder={`${loadOuts.secondaryWeaponClass}`}></input>
            <p>Attachments:</p>  
            <label htmlFor='secondaryAttachements'>Secondary Attachments:</label>  
            <input id='secondaryAttachements0' placeholder={`${loadOuts.secondaryAttachments[0]}`}></input>
            <input id='secondaryAttachements1' placeholder={`${loadOuts.secondaryAttachments[1]}`}></input>
            <input id='secondaryAttachements2' placeholder={`${loadOuts.secondaryAttachments[2]}`}></input>
            <input id='secondaryAttachements3' placeholder={`${loadOuts.secondaryAttachments[3]}`}></input>
            <input id='secondaryAttachements4' placeholder={`${loadOuts.secondaryAttachments[4]}`}></input>
            <p>Equipment:</p>
            <label html="tacticalEquip">Tactical Equipment:</label>
            <input id='tacticalEquip' placeholder={`${loadOuts.tacticalEquip}`}></input>
            <label html="lethalEquip">Lethal Equipment</label>
            <input id='lethalEquip' placeholder={`${loadOuts.lethalEquip}`}></input>
            </div>
            </div> 
            <div>
            <Link to={`/`}><button className="cardButton">Cancel</button></Link>
            <button className="cardButton">Confirm Changes</button>
            </div>
            </div>
            </div>
            </form>    
            </div>
        

        </>
    )
}