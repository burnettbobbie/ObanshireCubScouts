import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeItem from './NoticeItem';
import AuthService from '../services/auth.service';

function ShowNotices({ onDeleteNotice }) {
  const [notices, setNotices] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  const isAdmin = AuthService.getCurrentUser().roles.includes('ROLE_ADMIN'); // Check if the current user is an admin

  useEffect(() => {
    // Fetch notices from the server when the component mounts
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crudRoutes/notices');
        setNotices(response.data); 
      } catch (err) {
        console.log('Error from show notices');
      } finally {
        setIsLoading(false); 
      }
    };

    fetchNotices(); 
  }, []); 

  const handleDeleteNotice = (deletedNoticeId) => {
    setNotices((prevNotices) =>
      prevNotices.filter((notice) => notice._id !== deletedNoticeId) // Filter out the deleted notice from the notices array
    );
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div> // Display a loading message if the notices are still being fetched
      ) : (
        <div>
          {notices.length === 0 ? (
            <div>There are no notices!</div> // Display a message if there are no notices
          ) : (
            notices.map((notice) => (
              <NoticeItem
                key={notice._id}
                notice={notice}
                isAdmin={isAdmin}
                onDeleteNotice={handleDeleteNotice}
              />
            )) 
          )}
        </div>
      )}
    </>
  );
}

export default ShowNotices;
