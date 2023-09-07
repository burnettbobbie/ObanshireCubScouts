import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../services/auth.service';
import UpdateEvent from './admin/UpdateEvent';

function EventItem({ eventData }) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateEventId, setUpdateEventId] = useState(null);
  const currentUser = AuthService.getCurrentUser();
  const userId = currentUser.id;

  const formattedDate = new Date(eventData.date).toLocaleString(undefined, options);
  const isAdmin = AuthService.getCurrentUser().roles.includes('ROLE_ADMIN');

  const [isAvailable, setIsAvailable] = useState(false);
  const [events, setEvents] = useState([]); // Initialize events state as an empty array
  const [availableUsers, setAvailableUsers] = useState([]);

  useEffect(() => {
    if (eventData.availableUsers && eventData.availableUsers.includes(userId)) {
      setIsAvailable(true);
    }
  }, [eventData.availableUsers, userId]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crudRoutes/events');
      setEvents(response.data);
    } catch (err) {
      console.log('Error fetching events', err);
    }
  };

  const fetchAvailableUsers = async (eventId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/crudRoutes/events/${eventId}/availableUsers`);
      setAvailableUsers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log('Error fetching available users', err);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchAvailableUsers(eventData._id);
  }, [eventData._id]); // Fetch events on component mount

  const handleAvailabilitySubmit = async (eventId) => {
    try {
      if (isAvailable) {
        // Remove the user's ID from availableUsers
        await axios.delete(`http://localhost:5000/api/crudRoutes/events/${eventId}/availability/${userId}`);
      } else {
        // Add the user's ID to availableUsers
        await axios.put(`http://localhost:5000/api/crudRoutes/events/${eventId}/availability`, {
          userId: userId,
        });
      }

      setIsAvailable(!isAvailable); // Toggle the availability state

      // Handle success or display a success message
    } catch (err) {
      console.log('Error updating availability', err);
    }
  };

  const handleUpdateEvent = (eventId) => {
    // Set the event ID and show the update modal
    setUpdateEventId(eventId);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    // Reset the update event ID and hide the update modal
    setUpdateEventId(null);
    setShowUpdateModal(false);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:5000/api/crudRoutes/events/${eventId}`);
      window.location.reload();
    } catch (err) {
      console.log('Error deleting event', err);
    }
  };

  // Check if the event's date is in the future
  const isFutureEvent = new Date(eventData.date) > new Date();

  // If it's a past event, return null to not render it
  if (!isFutureEvent) {
    return null;
  }

  return (
    <div className="event-item">
      <div className="card">
        <div className="card-header">
          <h2 className="event-name">{eventData.name}</h2>
        </div>
        <div className="card-body">
          <p className="event-description">
            <h5>Description:</h5>
            {eventData.description}
          </p>
          <p className="event-location">
            <h5>Location: </h5>
            {eventData.location}
          </p>
          <p className="event-date">
            <h5>Date: </h5>
            {formattedDate}
          </p>
          {isAdmin && (
            <div className="admin-buttons">
              {availableUsers.map((usersArray, index) => (
                <div key={index} className="available-users">
                  <h5 className="available-volunteers">Available Volunteers:</h5>
                  {usersArray.map((user, userIndex) => (
                    <div key={userIndex} className="available-user">
                      <span>{user.firstname} {user.lastname}</span>
                    </div>
                  ))}
                </div>
              ))}
              <button className="update-button" onClick={() => handleUpdateEvent(eventData._id)}>
                Update Event
              </button>
              <button className="delete-button" onClick={() => handleDeleteEvent(eventData._id)}>
                Delete Event
              </button>
            </div>
          )}
          {!isAdmin && (
            <button
              className={`toggle-button ${isAvailable ? 'active' : ''}`}
              onClick={() => handleAvailabilitySubmit(eventData._id)}
            >
              {isAvailable ? 'Mark as Unavailable' : 'Mark as Available'}
            </button>
          )}
        </div>
      </div>

      {/* Render the UpdateEvent component as a modal */}
      {showUpdateModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseUpdateModal}>
              Close
            </button>
            <UpdateEvent eventId={updateEventId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventItem;
