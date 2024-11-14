import React, { useState } from 'react';

const NPCForm = ({ onGenerateNPC }) => {
  const [npcDetails, setNpcDetails] = useState({
    race: '',
    classType: '',
    backstory: '',
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="race" placeholder="Race" onChange={handleChange} />
      <input type="text" name="classType" placeholder="Class" onChange={handleChange} />
      <textarea name="backstory" placeholder="Backstory" onChange={handleChange}></textarea>
      <input type="text" name="weaponType" placeholder="Weapon Type" onChange={handleChange} />
      <input type="text" name="armorStyle" placeholder="Armor Style" onChange={handleChange} />
      <input type="text" name="backgroundScenery" placeholder="Background Scenery" onChange={handleChange} />
      <button type="submit">Generate NPC</button>
    </form>
  );
};

export default NPCForm;
