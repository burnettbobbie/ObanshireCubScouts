import React, { useState, useEffect } from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import axios from "axios";
import Modal from "../components/Modal";
import img from '../images/scoutCabin.jpg';
import img2 from '../images/bjorn-snelders-Cd3Ek7rNXSk-unsplash.jpg';

// Gallery images data
const initialGalleryImages = [
  
  {
    id: 1,
    src: img,
    title: "OCS HQ",
    description: "Obanshire Cub Scouts base location",
  },
  {
    id: 2,
    src: img2,
    title: "Surrounding Area",
    description: "Our location in Scotland provides unparalleled beauty within the surrounding landscape",
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1483737489035-78c01af155f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    title: "Scout Cabin",
    description: "A scout cabin in the Winter",
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1625244514957-a8cdb2b7df0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: "Sign",
    description: "We take great care to be considerate of our local environment",
  },
  {
    id: 5,
    src: 'https://prod-cms.scouts.org.uk/media/19350/cubs-carrying-sticks.jpg?anchor=center&mode=crop&width=800&height=&rnd=133149050520000000',
    title: "Cub Group",
    description: "Teamwork is at the heart of what we do",
  },
  {
    id: 6,
    src: 'https://www.38throssendalescouts.org.uk/wp-content/uploads/2013/09/Cub_Sixer_Training_2013_1.jpg',
    title: "Camping Skills",
    description: "We provide young scouts with essential camping knowledge",
  },
  {
    id: 7,
    src: 'https://www.pgl.co.uk/Files/Files/Groups/Cubs%20and%20Scouts/Centre%20Gallery/Beam%20House/CS-G-Centre-Beam-House-Reception-Area-for-Cubs-and-Scouts.png',
    title: "Reception",
    description: "Reception and head office",
  },
  {
    id: 8,
    src: 'https://4.bp.blogspot.com/-_-GfcEO8piw/WdPnHFOZxwI/AAAAAAAASHo/-eVpf8VDSj4bid_byDNCmD8X05p83WY9wCLcBGAs/s1600/campingFull-SizedJPEG-23.jpg',
    title: "Night Camping",
    description: "Roasting marshmallows on an overnight camp!",
  },

];

const GalleryPage = ({ pageTitle }) => {
  const [galleryImages, setGalleryImages] = useState([]); // State for gallery images
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  useEffect(() => {
    // Fetch gallery images from the server
    axios
      .get('http://localhost:5000/api/crudRoutes/photos/')
      .then((res) => {
        // Transform the fetched images into the desired format
        const fetchedImages = res.data.map((image) => ({
          id: image._id,
          src: `http://localhost:5000/uploads/${image.photo}`,
          title:image.title,
          description: image.description
        }));

        // Update the state with the initial and fetched gallery images
        setGalleryImages([...initialGalleryImages, ...fetchedImages]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image); // Set the selected image when a thumbnail is clicked
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image when the modal is closed
  };

  const navigateGallery = (direction) => {
    const currentIndex = galleryImages.findIndex((image) => image.id === selectedImage.id);

    if (direction === 'prev') {
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        setSelectedImage(galleryImages[prevIndex]); // Show the previous image in the gallery
      }
    } else if (direction === 'next') {
      const nextIndex = currentIndex + 1;
      if (nextIndex < galleryImages.length) {
        setSelectedImage(galleryImages[nextIndex]); // Show the next image in the gallery
      }
    }
  };

  return (
    <>
      <div className="gallery-page-container">
        <Navbar pageTitle="GALLERY" />
        <main>
          <div className="gallery-container">
            <div className="gallery-thumbnails">
              {/* Render gallery thumbnail images */}
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="gallery-thumbnail"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
            {/* <div className="disclaimer"> Please note that in order to access and view certain content in the Obanshire Cub Scouts gallery, it is necessary to log in to our secure platform. This login requirement has been implemented to ensure the safety and privacy of our community members, especially our scouts.
              At Obanshire Cub Scouts, we prioritize the well-being of our scouts and maintain strict guidelines to safeguard their online experiences. By requiring login credentials, we can better control access to sensitive information and protect our community from unauthorized individuals.
              We appreciate your understanding and cooperation in this matter. If you have any questions or require assistance with accessing the gallery content, please feel free to contact our support team.
              </div> */}
          </div>
        </main>
      </div>

      {/* Modal component for displaying the selected image */}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
          onPrev={() => navigateGallery("prev")}
          onNext={() => navigateGallery("next")}
        />
      )}
      <Footer />
    </>
  );
};

export default GalleryPage;


