// import React, { useState } from 'react';
// import axios from 'axios';

// //component handles availability status of volunteers. If they click available on an event, they are flagged as so and listed on itconst VolAvailability = ({ userId }) => {
//   const [event, setEvent] = useState('');
//   const [date, setDate] = useState('');
//   const [status, setStatus] = useState('available');
//   const [confirmation, setConfirmation] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`/api/users/${userId}/availability`, {
//         event,
//         date,
//         status,
//         confirmation
//       });

//       // Handle successful submission
//       console.log('Availability created:', response.data);

//       // Reset form fields
//       setEvent('');
//       setDate('');
//       setStatus('available');
//       setConfirmation(false);
//     } catch (error) {
//       // Handle error
//       console.error('Error creating availability:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Availability</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Event:</label>
//           <input
//             type="text"
//             value={event}
//             onChange={(e) => setEvent(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="datetime-local"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Status:</label>
//           <select value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="available">Available</option>
//             <option value="unavailable">Unavailable</option>
//             <option value="tentative">Tentative</option>
//           </select>
//         </div>
//         <div>
//           <label>Confirmation:</label>
//           <input
//             type="checkbox"
//             checked={confirmation}
//             onChange={(e) => setConfirmation(e.target.checked)}
//           />
//         </div>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default VolAvailability;
