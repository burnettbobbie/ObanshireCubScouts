import React, { useState } from 'react';
import axios from 'axios';

const NoticeItem = ({ notice, onDeleteNotice, isAdmin }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete?');
    if (confirmed) {
      axios
        .delete(`http://localhost:5000/api/crudRoutes/notice/${notice._id}`)
        .then((res) => {
          onDeleteNotice(notice._id); // Notify parent component about the deleted notice
        })
        .catch((err) => {
          console.log('Error from NoticeItem: handleDeleteClick');
        });
    }
  };

  const handleHideClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Return null if the NoticeItem is not visible
  }

  return (
    <div className='notice-container'>
      <div className="notice-item">
        <p id="notice-created">{new Date(notice.created).toLocaleDateString()}</p>
        <p className="notice-text">{notice.text}</p>
        <p id="notice-by">{notice.created_by}</p>
        {isAdmin && (
          <button type="button" className='delete-button' onClick={handleDeleteClick}>Delete</button>
        )}
        <div className="x" onClick={handleHideClick}>
          X
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
