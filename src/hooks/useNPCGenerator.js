import { useState } from 'react';
import axios from 'axios';

const useNPCGenerator = () => {
  const [npc, setNpc] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateNPC = async (npcDetails) => {
    setLoading(true);
    try {
      const { data: generatedNpc } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/generate-npc`, npcDetails);
      setNpc(generatedNpc);

      const { data: generatedImage } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/generate-image`, {
        npcDetails: generatedNpc,
        ...npcDetails,
      });
      setImageUrl(generatedImage.imageUrl);
    } catch (error) {
      console.error("Error generating NPC or image:", error);
    } finally {
      setLoading(false);
    }
  };

  return { npc, imageUrl, loading, generateNPC };
};

export default useNPCGenerator;
