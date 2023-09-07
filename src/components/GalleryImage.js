import React from "react";


const GalleryImage = ({ image, onClick }) => {
  // Define a click event handler
  const handleClick = () => {
    onClick(image); // Invoke the onClick function passed as a prop and pass the image object as an argument
  };

  // Render the gallery image component
  return (
    <div className="gallery-image" onClick={handleClick}>
      {/* Display the image */}
      <img src={image.src} alt={image.title} />

      {/* Display the image overlay */}
      <div className="image-overlay">
        <h3>{image.title}</h3>
      </div>
    </div>
  );
};

export default GalleryImage;
