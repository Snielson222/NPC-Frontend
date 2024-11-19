import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatBox.css';

const ChatBox = ({ npc }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

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

      const characterResponse = response.data.response;
      setMessages((prev) => [...prev, { sender: 'character', text: characterResponse }]);
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages((prev) => [...prev, { sender: 'character', text: 'Something went wrong, try again later!' }]);
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
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
