import React from 'react';

const NPCDisplay = ({ npc }) => (
  npc ? (
    <div>
      <h2>{npc.name}</h2>
      <p>Race: {npc.race}</p>
      <p>Class: {npc.class}</p>
      <p>{npc.backstory}</p>
    </div>
  ) : <p>No Character Generated Yet.</p>
);

export default NPCDisplay;
