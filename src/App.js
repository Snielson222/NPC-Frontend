import React from 'react';
import NPCForm from './components/NPCForm';
import NPCDisplay from './components/NPCDisplay';
import ImageDisplay from './components/ImageDisplay';
import ChatBox from './components/ChatBox';
import EventGenerator from './components/EventGenerator';
import LoadingSpinner from './components/LoadingSpinner';
import useNPCGenerator from './hooks/useNPCGenerator';
import './styles/App.css';

const App = () => {
  const { npc, imageUrl, loading, generateNPC } = useNPCGenerator();
  console.log("🚀 ~ App ~ npc:", npc)

  return (
    <div className="App">
      <h1>Fantasy Character Generator</h1>
      <img src='favicon2.webp' alt='favicon' style={{ width: '50%' }}/>
      <NPCForm onGenerateNPC={generateNPC} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NPCDisplay npc={npc} />
          <ImageDisplay imageUrl={imageUrl} />
          {npc && <ChatBox npc={npc} />}
          {npc && <EventGenerator npc={npc} />}
        </>
      )}
    </div>
  );
};

export default App;
