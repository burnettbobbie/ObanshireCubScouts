import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EventItem from './EventItem';

function ShowEvents(props) {


  // Define state variables
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crudRoutes/events/');
        setEvents(response.data);
      } catch (err) {
        console.log('Error fetching events', err);
      }
    };

    fetchEvents();
  }, []);



  // Render event items
  const eventsList =
    events.length === 0 ? (
      <p>There are no upcoming events!</p>
    ) : (
      events.map((event, k) => (
        <div key={k}>
          <EventItem eventData={event} />
        </div>
      ))
    );

  return (
    <div>
      {eventsList}
    </div>
  );
}

export default ShowEvents;
