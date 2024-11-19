import React from 'react';
import NPCForm from './components/NPCForm';
import NPCDisplay from './components/NPCDisplay';
import ImageDisplay from './components/ImageDisplay';
import ChatBox from './components/ChatBox';
import LoadingSpinner from './components/LoadingSpinner';
import useNPCGenerator from './hooks/useNPCGenerator';
import './styles/App.css';

const App = () => {
  const { npc, imageUrl, loading, generateNPC } = useNPCGenerator();

  return (
    <div className="App">
      <h1>Fantasy Character Generator</h1>
      <NPCForm onGenerateNPC={generateNPC} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NPCDisplay npc={npc} />
          <ImageDisplay imageUrl={imageUrl} />
          {npc && <ChatBox npc={npc} />}
        </>
      )}
    </div>
  );
};

export default App;
