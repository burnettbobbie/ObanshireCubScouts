import React, {useState}from 'react';
import AdNav from '../../components/admin/NavBar';
import Footer from '../../components/navigation/Footer';
import CreateNotice from '../../components/admin/CreateNotice';
import ShowNotices from '../../components/Notices';
import UploadPhoto from '../volunteer/UploadPhoto';

const Ahome = () => {
    const[modalOpen, setModalOpen]= useState(false);
    
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <AdNav pageTitle='Home' /> {/* Renders the admin navigation bar with a 'Home' page title */}

      <div className="notice-board">
        <div className="notice-container">
          <ShowNotices /> {/* Renders the list of notices */}
        </div>
      </div>

      <div className="dashboard-container">
        <div className="admin-dashboard-main">
          <div className="side-block"></div>
          <div className="admin-widgets">
            <div className="notices-container">
              <h3>POST NOTICE</h3> 
              <div className="admin-notice-board">
                <CreateNotice /> {/* Renders the form to create a new notice */}
              </div>
            </div>
            {/* Upload photos to gallery */}
            <div className="availability-container">
              <h3>UPLOAD PHOTOS</h3>
              <h4>Upload photos to the gallery main page</h4>
              <div className="admin-events">
                <div className="volunteer-upload">
                    <button onClick={openModal}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer /> 
      </div>
      {modalOpen && (
      <div className="modal-overlay">
        <UploadPhoto closeModal={closeModal} />
      </div>
    )}
    </>
  );
}

export default Ahome;
