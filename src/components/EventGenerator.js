import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EventGenerator.css';

const EventGenerator = ({ npc }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateEvent = async () => {
    setLoading(true);
    setEvent(null); // Clear previous event while loading

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/generate-event`, {
        npcDetails: {
          race: npc.race,
          class: npc.class,
          backstory: npc.backstory,
        },
      });

      // Updated to correctly handle the 'event' key from the backend
      const eventDescription = response.data.event;

      if (!eventDescription) {
        console.error("Backend did not return a valid event:", response.data);
        setEvent("No event could be generated at this time. Please try again.");
      } else {
        setEvent(eventDescription);
      }
    } catch (error) {
      console.error('Error generating event:', error);
      setEvent("An error occurred while generating the event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-generator">
      <h2>Random Event Generator</h2>
      <button onClick={generateEvent} disabled={loading}>
        {loading ? "Generating Event..." : "Generate Random Event"}
      </button>
      {event && <p className="event">{event}</p>}
    </div>
  );
};

export default EventGenerator;
