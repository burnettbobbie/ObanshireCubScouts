import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = (props) => {
  // Define event state with useState hook
  const [event, setEvent] = useState({
    _id: '',
    name: '',
    description: '',
    location: '',
    date: '',
  });

  // Event handler sets new event
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // On form submit, post requested new event
  const handleSubmit = async (event) => {
    event.preventDefault();

    const eventData = {
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      location: event.target.elements.location.value,
      date: event.target.elements.date.value,
    };

    try {
      await axios.post('http://localhost:5000/api/crudRoutes/events', eventData);
      window.location.reload();
    } catch (err) {
      console.log('Error in CreateEvent:', err);
    }
  };

  return (
    <div>
      <div className='event-admin-form'>
        <form noValidate onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              value={event.name}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              id='description'
              name='description'
              className='form-control'
              value={event.description}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              id='location'
              name='location'
              className='form-control'
              value={event.location}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='date'>Time & Date</label>
            <input
              type='datetime-local'
              id='date'
              name='date'
              className='form-control'
              value={event.date}
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='crud-options'>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
