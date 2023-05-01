import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

export default function CreateLoadOut() {

    const navigate = useNavigate()

    const handleCreate = (e) => {
        e.preventDefault()

        const loadout = {
            name: e.target.elements.name.value,
            primaryWeapon: e.target.elements.primaryWeapon.value,
            primaryWeaponClass: e.target.elements.primaryWeaponClass.value,
            primaryAttachments: [
                e.target.elements.primaryAttachments0.value,
                e.target.elements.primaryAttachments1.value,
                e.target.elements.primaryAttachments2.value,
                e.target.elements.primaryAttachments3.value,
                e.target.elements.primaryAttachments4.value,
            ],
            perk1: e.target.elements.perk1.value,
            perk2: e.target.elements.perk2.value,
            perk3: e.target.elements.perk3.value,
            perk4: e.target.elements.perk4.value,
            secondaryWeapon: e.target.elements.secondaryWeapon.value,
            secondaryWeaponClass: e.target.elements.secondaryWeaponClass.value,
            secondaryAttachments: [
                e.target.elements.secondaryAttachments0.value,
                e.target.elements.secondaryAttachments1.value,
                e.target.elements.secondaryAttachments2.value,
                e.target.elements.secondaryAttachments3.value,
                e.target.elements.secondaryAttachments4.value,
            ],
            tacticalEquip: e.target.elements.tacticalEquip.value,
            lethalEquip: e.target.elements.lethalEquip.value,
        }

        axios.post(`${process.env.REACT_APP_SERVER_URL}/loadouts`, loadout)
            .then(response => {
                console.log(response.data)
                navigate('/')
            })
            .catch(console.warn)
    }

    return (
        <>
        <h1>Create a Loadout</h1>
        <div className='container'>
        <form onSubmit={handleCreate}>
        <div className='card'>

            <div className='loadOutCard'>
            <div className="headerCard">
            <label htmlFor='name'>Loadout Name:</label>
            <input id='name' name='name' placeholder={`Loadout Name`}></input>
            </div>
            <div className="bodyCard">
            <div className="weaponCard">
            <label htmlFor='primaryWeapon'>Primary Weapon:</label>
            <input id="primaryWeapon" name="primaryWeapon"></input>
            <label htmlFor='primaryWeaponClass'>Primary Weapon Class:</label>
            <input id="primaryWeaponClass" name="primaryWeaponClass"></input>
            <p>Attachments:</p>
            <label htmlFor='primaryAttachments'>Primary Attachments:</label>
            <input id='primaryAttachments0' name='primaryAttachments0'></input>
            <input id='primaryAttachments1' name='primaryAttachments1'></input>
            <input id='primaryAttachments2' name='primaryAttachments2'></input>
            <input id='primaryAttachments3' name='primaryAttachments3'></input>
            <input id='primaryAttachments4' name='primaryAttachments4'></input>
            <p>Perks:</p>
            <label htmlFor="perk1">Perk 1: </label>
            <input id="perk1" name="perk1"></input>
            <label htmlFor="perk2">Perk 2: </label>
            <input id="perk2" name="perk2"></input>
            <label htmlFor="perk3">Perk 3: </label>
            <input id="perk3" name="perk3"></input>
            <label htmlFor="perk4">Perk 4: </label>
            <input id="perk4" name="perk4"></input>
            </div>
            <div className="weaponCard">
            <label htmlFor='secondaryWeapon'>Secondary Weapon:</label>
            <input id="secondaryWeapon" name="secondaryWeapon"></input>
            <label htmlFor='secondaryWeaponClass'>Secondary Weapon Class:</label>
            <input id="secondaryWeaponClass" name="secondaryWeaponClass"></input>
            <p>Attachments:</p>
            <label htmlFor='secondaryAttachments'>Secondary Attachments:</label>
            <input id='secondaryAttachments0' name='secondaryAttachments0'></input>
            <input id='secondaryAttachments1' name='secondaryAttachments1'></input>
            <input id='secondaryAttachments2' name='secondaryAttachments2'></input>
            <input id='secondaryAttachments3' name='secondaryAttachments3'></input>
            <input id='secondaryAttachments4' name='secondaryAttachments4'></input>
            <p>Equipment:</p>
            <label htmlFor="tacticalEquip">Tactical Equipment:</label>
            <input id='tacticalEquip' name="tacticalEquip"></input>
            <label htmlFor="lethalEquip">Lethal Equipment</label>
            <input id='lethalEquip' name="lethalEquip"></input>
            </div>
            </div>
            <div>
            <button className="cardButton" type="submit">Create</button>
            </div>
            </div>
            </div>
            </form>
            </div>
            </>
            )
}