import React, { useState } from 'react';

const NPCForm = ({ onGenerateNPC }) => {
  const [npcDetails, setNpcDetails] = useState({
    weaponType: '',
    armorStyle: '',
    backgroundScenery: '',
  });

  const handleChange = (e) => {
    setNpcDetails({ ...npcDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateNPC(npcDetails);
  };
    console.log("🚀 ~ handleSubmit ~ pcDetails:", npcDetails)

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="weaponType" placeholder="Weapon Type" onChange={handleChange} />
      <input type="text" name="armorStyle" placeholder="Armor Style" onChange={handleChange} />
      <input type="text" name="backgroundScenery" placeholder="Background Scenery" onChange={handleChange} /> */}
      <button type="submit">Generate Character</button>
    </form>
  );
};

export default NPCForm;
