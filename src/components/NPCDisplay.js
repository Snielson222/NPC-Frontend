const NPCDisplay = ({ npc }) => {
  if (!npc) return null;

  // Remove "Name: ... Backstory:" prefix if it exists
  const cleanedBackstory = npc.backstory.replace(/^Name:.*?Backstory:/, '').trim();

  return (
    <div className="npc-display">
      <h2>{npc.name}</h2>
      <p>
        <strong>Race:</strong> {npc.race}
      </p>
      <p>
        <strong>Class:</strong> {npc.class}
      </p>
      <p>
        <strong>Backstory:</strong> {cleanedBackstory}
      </p>
    </div>
  );
};

export default NPCDisplay;
