import React, { useState, useEffect } from 'react'; 
import Calendar from '@fullcalendar/react'; // Imports the Calendar component from the '@fullcalendar/react' package
import dayGridPlugin from '@fullcalendar/daygrid'; // Imports the dayGridPlugin from the '@fullcalendar/daygrid' package
import axios from 'axios'; 

function EventCalendar() {
  const [events, setEvents] = useState([]); // Declares a state variable 'events' and a function 'setEvents' to update it
  const [isLoading, setIsLoading] = useState(true); // Declares a state variable 'isLoading' and a function 'setIsLoading' to update it

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crudRoutes/events'); 

        // Transform the API response into the required format for FullCalendar
        const transformedEvents = response.data.map((event) => ({
          title: [event.name], 
          start: event.date,
          end: event.date, 
        }));

        setEvents(transformedEvents); // Updates the 'events' state with the transformed events
      } catch (error) {
        console.log('Error fetching events:', error);
      } finally {
        setIsLoading(false); // Sets 'isLoading' to false when the events have been fetched
      }
    };

    fetchEvents(); // Calls the fetchEvents function when the component mounts
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div> // Renders a loading message while events are being fetched
      ) : (
        <>
          <Calendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} /> 
          {/* Renders the FullCalendar component with the provided plugins and events */}
        </>
      )}
    </div>
  );
}

export default EventCalendar; 
