import React, { useState } from "react";
import Footer from "../../components/navigation/Footer";
import VolNav from "../../components/volunteer/Navbar";
import ShowNotices from "../../components/Notices";
import ShowEvents from "../../components/ShowEvents";
import AuthService from "../../services/auth.service";
import UploadPhoto from "./UploadPhoto";

const Vhome = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Get the current user information from AuthService
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser.roles);
  const id = currentUser._id;
  console.log(id);

  // Open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Render the volunteer navigation bar */}
      <VolNav pageTitle='HOME'/>

      <div className="notice-board">
        <div className="notice-container">
          {/* Render the notices */}
          <ShowNotices />
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-main">
          <div className="side-block"></div>

          <div className="widgets">
            <h3>UPCOMING EVENTS</h3>
            <div className="events">
              {/* Render the upcoming events */}
              <ShowEvents/>
            </div>
          </div>

          <div className="volunteer-upload">
            <h3>UPLOAD</h3>
            <div>
              Upload photos to the gallery main page
            </div>
            {/* Button to open the modal */}
            <button onClick={openModal}></button>
          </div>
        </div>
        <Footer />
      </div>

      {/* Render the upload photo modal when modalOpen is true */}
      {modalOpen && (
        <div className="modal-overlay">
          <UploadPhoto closeModal={closeModal} />
        </div>
      )}
    </>
  );
}

export default Vhome;
