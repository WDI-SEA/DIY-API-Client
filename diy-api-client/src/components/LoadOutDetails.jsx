import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function LoadOutDetails() {
  const { id } = useParams();
  const [loadOuts, setLoadOuts] = useState({
    name: "",
    primaryWeapon: "",
    primaryWeaponClass: "",
    primaryAttachments: [""],
    perk1: "",
    perk2: "",
    perk3: "",
    perk4: "",
    secondaryWeapon: "",
    secondaryWeaponClass: "",
    secondaryAttachments: [""],
    tacticalEquip: "",
    lethalEquip: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER_URL}/loadouts/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setLoadOuts(response.data.result);
      })
      .catch(console.warn);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id.startsWith("primaryAttachments")) {
      const index = Number(id.slice(-1));
      setLoadOuts((prevState) => {
        const primaryAttachments = [...prevState.primaryAttachments];
        primaryAttachments[index] = value;
        return { ...prevState, primaryAttachments };
      });
    } else if (id.startsWith("secondaryAttachments")) {
      const index = Number(id.slice(-1));
      setLoadOuts((prevState) => {
        const secondaryAttachments = [...prevState.secondaryAttachments];
        secondaryAttachments[index] = value;
        return { ...prevState, secondaryAttachments };
      });
    } else {
      setLoadOuts((prevState) => ({ ...prevState, [id]: value }));
    }
  };

  const handleUpdateClick = async (e) => {
    e.preventDefault();
  
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
    };
  
    axios.put(`${process.env.REACT_APP_SERVER_URL}/loadouts/${loadOuts._id}`, loadout)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(console.warn);
  };

  return (
    <>
      <h1>Edit Loadout</h1>
      <div className="container">
        <form onSubmit={handleUpdateClick}>
          <div className="card">
            <div className="loadOutCard">
              <div className="hederCard">
                <label htmlFor="name">Loadout Name:</label>
                <input
                  id="name"
                  value={loadOuts.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="bodyCard">
                <div className="weaponCard">
                  <label htmlFor="primaryWeapon">Primary Weapon:</label>
                  <input
                    id="primaryWeapon"
                    value={loadOuts.primaryWeapon}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="primaryWeaponClass">Primary Weapon Class:</label>
                  <input
                    id="primaryWeaponClass"
                    value={loadOuts.primaryWeaponClass}
                    onChange={handleInputChange}
                  />
                  <p>Attachments:</p>
                  <label htmlFor="primaryAttachments">Primary Attachments:</label>
                  <input
                    id="primaryAttachments0"
                    value={loadOuts.primaryAttachments[0]}
                    onChange={handleInputChange}
                  />
                  <input
                    id="primaryAttachments1"
                    value={loadOuts.primaryAttachments[1]}
                    onChange={handleInputChange}
                  />
                  <input
                    id="primaryAttachments2"
                    value={loadOuts.primaryAttachments[2]}
                    onChange={handleInputChange}
                  />
                  <input
                    id="primaryAttachments3"
                    value={loadOuts.primaryAttachments[3]}
                    onChange={handleInputChange}
                  />
                  <input
                    id="primaryAttachments4"
                    value={loadOuts.primaryAttachments[4]}
                    onChange={handleInputChange}
                  />
                  <p>Perks:</p>
                  <label htmlFor="perk1">Perk 1: </label>
                  <input
                    id="perk1"
                    value={loadOuts.perk1}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="perk2">Perk 2: </label>
                  <input
                    id="perk2"
                    value={loadOuts.perk2}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="perk3">Perk 3: </label>
                  <input
                    id="perk3"
                    value={loadOuts.perk3}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="perk4">Perk 4: </label>
                  <input
                    id="perk4"
                    value={loadOuts.perk4}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="weaponCard">
                  <label htmlFor="secondaryWeapon">Secondary Weapon:</label>
                  <input
                    id="secondaryWeapon"
                    value={loadOuts.secondaryWeapon}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="secondaryWeaponClass">Secondary Weapon Class:</label>
                  <input
                    id="secondaryWeaponClass"
                    value={loadOuts.secondaryWeaponClass}
                    onChange={handleInputChange}
                  />
                  <p>Attachments:</p>
                  <label htmlFor="secondaryAttachments">Secondary Attachments:</label>
                  <input
                    id="secondaryAttachments0"
                    value={loadOuts.secondaryAttachments[0]}
                    onChange={handleInputChange}
                  />
                  <input
                    id="secondaryAttachments1"
                    value={loadOuts.secondaryAttachments[1]}
                    onChange={handleInputChange}
                  />
                        <input
                  id="secondaryAttachments2"
                  value={loadOuts.secondaryAttachments[2]}
                  onChange={handleInputChange}
                />
                <input
                  id="secondaryAttachments3"
                  value={loadOuts.secondaryAttachments[3]}
                  onChange={handleInputChange}
                />
                <input
                  id="secondaryAttachments4"
                  value={loadOuts.secondaryAttachments[4]}
                  onChange={handleInputChange}
                />
                <p>Equipment:</p>
                <label htmlFor="tacticalEquip">Tactical Equipment:</label>
                <input
                  id="tacticalEquip"
                  value={loadOuts.tacticalEquip}
                  onChange={handleInputChange}
                />
                <label htmlFor="lethalEquip">Lethal Equipment:</label>
                <input
                  id="lethalEquip"
                  value={loadOuts.lethalEquip}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Link to={`/`}>
                <button className="cardButton">Cancel</button>
              </Link>
              <button className="cardButton" type="submit">
                Confirm Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
);
  }