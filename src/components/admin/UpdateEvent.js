import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateEvent({ eventId }) {
  const [event, setEvent] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch the event data from the server using the event ID
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/crudRoutes/events/${eventId}`);
        setEvent(response.data);
        // Set the initial values for the event properties in the state
        setName(response.data.name);
        setDescription(response.data.description);
        setLocation(response.data.location);
        setDate(response.data.date);
      } catch (error) {
        console.log('Error fetching event', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the event with the new data
      await axios.put(`http://localhost:5000/api/crudRoutes/events/${eventId}`, {
        name,
        description,
        location,
        date
      });

      setName('');
      setDescription('');
      setLocation('');
      setDate('');
      
      window.location.reload();
    } catch (error) {
      console.log('Error updating event', error);
    }
  };

  return (
    <>
      <div>
        {/* Heading */}
        <h2>Update Event</h2>
  
        {/* Form for updating the event */}
        <form onSubmit={handleUpdate}>
          {/* Name input field */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          {/* Description textarea */}
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
  
          {/* Location input field */}
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
  
          {/* Date and time input field */}
          <div>
            <label htmlFor="location">Date:</label>
            <input
              type="datetime-local"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
  
          {/* Submit button */}
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
  
}

export default UpdateEvent;
