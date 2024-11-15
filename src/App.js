import React from 'react';
import NPCForm from './components/NPCForm';
import NPCDisplay from './components/NPCDisplay';
import ImageDisplay from './components/ImageDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import useNPCGenerator from './hooks/useNPCGenerator';
import './favicon2.webp';
import './styles/App.css';

const App = () => {
  const { npc, imageUrl, loading, generateNPC } = useNPCGenerator();

  return (
    <div className="App">
      <h1>Fantasy Character Generator</h1>
      <img src="favicon2.webp" alt="Fantasy Character Generator" style={{ width: '50%' }}  />
      <NPCForm onGenerateNPC={generateNPC} />
      {loading ? <LoadingSpinner /> : (
        <>
          <NPCDisplay npc={npc} />
          <ImageDisplay imageUrl={imageUrl} />
        </>
      )}
    </div>
  );
};

export default App;
