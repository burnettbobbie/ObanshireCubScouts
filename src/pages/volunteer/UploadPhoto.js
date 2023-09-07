import React, { useState } from 'react';
import axios from 'axios';

const UploadPhoto = ({ closeModal }) => {
  // State variable for the new photo data
  const [newPhoto, setNewPhoto] = useState({ photo: '', title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new FormData object to send the photo data
    const formData = new FormData();
    formData.append('photo', newPhoto.photo);
    formData.append('title', newPhoto.title);
    formData.append('description', newPhoto.description);

    axios
      .post('http://localhost:5000/api/crudRoutes/photos/', formData)
      .then((res) => {
        console.log(res);
        // Close the modal after the photo is uploaded successfully
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhoto = (e) => {
    // Update the newPhoto state with the selected photo file
    setNewPhoto({ photo: e.target.files[0] });
  };
  
  const handleExit = () => {
    // Implement logic here to handle the exit action
    // For example, you can call the closeModal function directly
    closeModal();
  };

  return (
    <>
    
      <form className="admin-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="modal-header">
        <h2>Upload Photo</h2>
        <button className="exit-button" onClick={handleExit}>X</button>
      </div>
        {/* Input field for selecting the photo file */}
        <input type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={handlePhoto} />

        {/* Input fields for the photo title and description */}
        <input type="text" name='title' placeholder='title' />
        <input type='text' name='description' placeholder='description' />

        {/* Submit button for uploading the photo */}
        <input type="submit" />
      </form>
    </>
  );
};

export default UploadPhoto;
