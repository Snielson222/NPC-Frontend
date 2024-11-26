const NPCDisplay = ({ npc }) => {
  if (!npc) return null;

  // Ensure backstory is properly cleaned up
  const cleanedBackstory = npc.backstory
    ? npc.backstory.replace(/^Name:\s*.*?\s*Backstory:\s*/, '').trim()
    : '';

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
