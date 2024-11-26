import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatBox.css';

const ChatBox = ({ npc }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const originalString = npc.name;
const cleanedString = originalString.replace("Name: ", "");


  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/chat`, {
        npcDetails: {
          race: npc.race,
          class: npc.class,
          backstory: npc.backstory,
        },
        userMessage,
      });

      // Correctly handle npcResponse from backend
      const characterResponse = response.data.npcResponse;

      if (!characterResponse) {
        console.error("Backend did not return a valid npcResponse:", response.data);
        setMessages((prev) => [
          ...prev,
          { sender: 'character', text: 'I didn’t understand that, try asking again!' },
        ]);
      } else {
        setMessages((prev) => [...prev, { sender: 'character', text: characterResponse }]);
      }
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'character', text: 'Something went wrong, try again later!' },
      ]);
    }
  };

  return (
    <div className="chatbox">
      <h1>Talk to {cleanedString}</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text || 'No response received.'}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
